using DG.Tweening;
using System.Collections.Generic;
using System.Linq;
using TowerDefense.Core;
using UnityEngine;
using UnityEngine.Audio;

namespace TowerDefense
{
	/// <summary> Controls global AudioSources, AudioMixers, default SFX, and creating AudioAtPoint objects. </summary>
	public class SoundManager : MonoBehaviour, IInitialize
	{
		[Header("Audio Listener")]
		[SerializeField] AudioListener _audioListener;

		[Header("Audio Sources")]
		[SerializeField] AudioSource _audioSourceGlobal;
		[SerializeField] AudioSource _audioSourcePlayWhenPaused;

		[Header("Audio At Point")]
		[SerializeField] AudioAtPoint _prefabAudioAtPoint;

		[Header("Mixers")]
		[SerializeField] AudioMixer _audioMixerMaster;

		/// <summary> The AudioSource for audio that can be heard regardless of the position of the audio listener. </summary>
		public static AudioSource AudioSourceGlobal { get; private set; }

		/// <summary> 
		/// The AudioSource for audio that can be heard regardless of the position of the audio listener, 
		/// and should be played regardless of whether the game is paused (primarily UI sound effects).
		/// </summary>
		public static AudioSource AudioSourceGlobalPlayWhenPaused { get; private set; }

		private static Transform AudioListener;
		private static AudioMixer AudioMixerMaster;
		private static SoundBoard SoundBoard;       // contains references to commonly used SFX
		private static AudioAtPoint AudioAtPoint;

		private static ObjectPool<AudioAtPoint> _objectPoolAudioAtPoint = new ObjectPool<AudioAtPoint>();

        public void Initialize()
        {
			AudioListener = _audioListener.transform;

            AudioSourceGlobal = _audioSourceGlobal;
            AudioSourceGlobalPlayWhenPaused = _audioSourcePlayWhenPaused;
            AudioSourceGlobalPlayWhenPaused.ignoreListenerPause = true;

            AudioMixerMaster = _audioMixerMaster;

            SoundBoard = UnityEngine.Resources.Load("SFX/SoundBoard") as SoundBoard;
            AudioAtPoint = (UnityEngine.Resources.Load("SFX/AudioAtPoint") as GameObject).GetComponent<AudioAtPoint>();

            SceneLoader.OnCurrentSceneUnloaded += ReleaseObjectPool;
            SceneLoader.OnCurrentSceneUnloaded += ClearSfxRegister;

            // clear sfx register when the scene changes
            _sfxRegister.Clear();
            _sfxRecentlyPlayed.Clear();
            _sfxNoLongerRecentlyPlayed.Clear();

            // set to 0 on Awake before setting to the correct volume in Start
            // (prevents the volume from being louder than set by the player when a scene loads)
            SetVolume(MixerGroupType.Master, 0);
        }

        public void Terminate()
		{
            SceneLoader.OnCurrentSceneUnloaded -= ReleaseObjectPool;
            SceneLoader.OnCurrentSceneUnloaded -= ClearSfxRegister;
        }

        // Set the user set volume when a scene is loaded (must be called from Start, not Awake to initialize properly)
        private void Start()
		{
            AudioMixerMaster.DOKill();
            SetVolume(MixerGroupType.Master, PlayerPrefs.GetFloat("Volume_MasterVolume"));
            SetVolume(MixerGroupType.Game, PlayerPrefs.GetFloat("Volume_GameVolume"));
            SetVolume(MixerGroupType.Music, PlayerPrefs.GetFloat("Volume_MusicVolume"));
        }

        private void OnDestroy()
        {
            AudioMixerMaster.DOKill();
        }

        private static string GetParamNameForMixerGroup(MixerGroupType mixerGroupType) => mixerGroupType.ToString() + "Volume";

        /// <summary>
        /// Set the master volume (0-1), dB conversion is done by this function (ex. passing 0.5 will be half as loud as 1).
        /// </summary>
        public static void SetVolume(MixerGroupType mixerGroup, float volume)
		{
			volume = GetVolumedBFromVolume01(mixerGroup, volume);
			var paramName = GetParamNameForMixerGroup(mixerGroup);
            AudioMixerMaster.SetFloat(paramName, volume);
		}

        /// <summary> Convert the player prefs volume (0-1) to decibels. </summary>
        private static float GetVolumedBFromVolume01(MixerGroupType mixerGroup, float volume)
		{
            // limit the volume of music
            if (mixerGroup == MixerGroupType.Music)
                volume *= 0.225f;

            // convert the value stored in the player prefs to a logarithmic value
            // https://gamedevbeginner.com/the-right-way-to-make-a-volume-slider-in-unity-using-logarithmic-conversion/
            volume = Mathf.Max(volume, 0.0001f);
            volume = Mathf.Log10(volume) * 20;

			return volume;
        }

		/// <summary> 
		/// Fade out the game mixer when restarting a level to prevent game SFX 
		/// from loudly playing immediately before the scene change. 
		/// </summary>
		public static void FadeOutGameMixer(float fadeTime)
		{
			AudioMixerMaster.DOKill();
			AudioMixerMaster.DOSetFloat(GetParamNameForMixerGroup(MixerGroupType.Game), 0, fadeTime);
		}

        /// <summary> Get an AudioAtPoint object from the object pool and return it. </summary>
        public static AudioAtPoint CreateAudioAtPoint()
		{
			if (_objectPoolAudioAtPoint == null)
			{
				Debug.LogError("SoundManager: Object Pool - Audio At Point is null");
				return null;
			}

			return _objectPoolAudioAtPoint.GetObject();
        }

		private void ReleaseObjectPool() => _objectPoolAudioAtPoint = null;

        /// <summary> Initialize the Audio at Point object pool with this Audio Container. Called in Start of each level load. </summary>
        public static void InitializeObjectPool(Transform audioContainer)
		{
            _objectPoolAudioAtPoint = new ObjectPool<AudioAtPoint>();
            _objectPoolAudioAtPoint.Initialize(AudioAtPoint, audioContainer.transform);
        }

        // Soundboard (common UI SFX)
        public static void PlayClickMouseOver() => SFX.PlayGlobal(SoundBoard.ClickMouseOver);
		public static void PlayClickMouseSelect() => SFX.PlayGlobal(SoundBoard.ClickMouseSelect);
		public static void PlayClickMouseDrag() => SFX.PlayGlobal(SoundBoard.ClickMouseDrag);
		public static void PlayPanelOpen() => SFX.PlayGlobal(SoundBoard.PanelOpen);
        public static void PlayPanelClose() => SFX.PlayGlobal(SoundBoard.PanelClose);
		public static void PlayError() => SFX.PlayGlobal(SoundBoard.ActionError);
		public static void PlayBuildTower() => SFX.PlayGlobal(SoundBoard.BuildTower);
		public static void PlayOnTutorialTipShown() => SFX.PlayGlobal(SoundBoard.OnTutorialTipShown);

        // ----------------------------------------------------------------------------------------------------------------------
        // This system prevents the same SFX from playing multiple times in a short timespan.
        // All non-global or non-looping SFX must enter a queue where only the closest SFX to the Audio Listener will be played.
        // Every fixed update, all queued SFX will be played, and then become unable to played again for a brief duration.
        // ----------------------------------------------------------------------------------------------------------------------

        /// <summary> All RegisterData objects that have been created for a SFX this scene. </summary>
        private static Dictionary<SFX, RegisterData> _sfxRegister = new Dictionary<SFX, RegisterData>(50);	// there's probably ~50 unique sounds per level

        /// <summary> RegisterData objects whose SFX has been recently played. </summary>
        private static Dictionary<SFX, RegisterData> _sfxRecentlyPlayed = new Dictionary<SFX, RegisterData>();
        private static List<SFX> _sfxNoLongerRecentlyPlayed = new List<SFX>();

        /// <summary> RegisterData objects that are to be played this frame. </summary>
        private static Dictionary<SFX, RegisterData> _sfxPlayNextFixedUpdate = new Dictionary<SFX, RegisterData>();

        /// <summary> Reset the current state of the SFX register. Should be called when reloading scenes. </summary>
		private static void ClearSfxRegister()
		{
			_sfxRegister.Clear();
			_sfxRecentlyPlayed.Clear();
            _sfxNoLongerRecentlyPlayed.Clear();
            _sfxPlayNextFixedUpdate.Clear();
        }

        /// <summary> 
        /// Play the SFX at the passed position. Playing a SFX will cause it to be unable to be played again for a short duration.
        /// If this SFX is requested to play multiple times this frame, it will only play once at the location that is closest to the Audio Listener.
        /// After the SFX has been played, it will be unable to be played again for a short duration.
        /// Looping SFX are not handled by this system.
        /// </summary>
        public static void PlaySFX(SFX sfx, Vector3 playAtPosition) => PlaySFX(sfx, null, playAtPosition);

		/// <summary> 
		/// Play the SFX on the passed AudioSource.
		/// If this SFX is requested to play multiple times this frame, it will only play once at the location that is closest to the Audio Listener.
		/// After the SFX has been played, it will be unable to be played again for a short duration.
		/// Looping SFX are not handled by this system.
		/// </summary>
		public static void PlaySFX(SFX sfx, AudioSource audioSource) => PlaySFX(sfx, audioSource, null);

		private static void PlaySFX(SFX sfx, AudioSource audioSource, Vector3? playAtPosition)
        {
			// create a new RegisterData for this SFX if one does not already exist
			if (!_sfxRegister.ContainsKey(sfx))
				_sfxRegister.Add(sfx, new RegisterData());

			// this SFX has been recently played, and therefore cannot be played again for a short duration
			if (_sfxRecentlyPlayed.ContainsKey(sfx)) return;

			// this SFX has not already been scheduled to play on the next fixed update
			var registerData = _sfxRegister[sfx];
			if (!_sfxPlayNextFixedUpdate.ContainsKey(sfx))
				_sfxPlayNextFixedUpdate.Add(sfx, registerData);

			// find how far away from the audio listener this SFX's audio source is
			var newPos = audioSource != null ? audioSource.transform.position : playAtPosition.Value;
			var newDistance = Vector3.SqrMagnitude(AudioListener.position - newPos);

			// this is the first time this SFX has been requested to play on the next fixed update, or a subsequent request is closer to the audio listener
			if (registerData.DistanceFromListenerSquared == null || newDistance < registerData.DistanceFromListenerSquared)
            {
				registerData.AudioSource = audioSource;
				registerData.PlayAtPosition = playAtPosition;
				registerData.DistanceFromListenerSquared = newDistance;
				// a SFX must wait 0.15 seconds (realtime) before being played again
				// this value should be high enough that multiple SFX played immediately after one another don't sound distorted,
				// but long enough that SFX don't sound like they are missing
				registerData.TimeUntilCanBePlayedAgain = 0.15f;
			}
		}

		// Use update when the game is paused to allow SFX to be played during a pause
        private void Update()
        {
            if (!TimeController.IsGamePaused) return;
			UpdateSfxRegister(Time.unscaledDeltaTime);
        }

		// When the game is playing, use FixedUpdate as this system does not need to be updated every frame
        private void FixedUpdate()
        {
            // the rate at which sfx are no longer considered to have been recently played is unrelated to the game's timescale
            // (fixed update scales with time scale, so adjust for the time scale so the cooldown is in real-time)
			UpdateSfxRegister(Time.fixedDeltaTime / TimeController.GameSpeedScale);
        }

		private void UpdateSfxRegister(float timeSinceLastRegisterUpdate)
		{
            // reduce the remaining time of SFX until they can be played again
            foreach (var sfx in _sfxRecentlyPlayed)
            {
				// only reduce the remaining time of SFX that can be played during a pause, or if the game is not paused
				if (sfx.Key.PlayDuringPause || !TimeController.IsGamePaused)
				{
                    sfx.Value.TimeUntilCanBePlayedAgain -= timeSinceLastRegisterUpdate;

                    if (sfx.Value.TimeUntilCanBePlayedAgain <= 0)
                    {
                        sfx.Value.Reset();
                        _sfxNoLongerRecentlyPlayed.Add(sfx.Key);
                    }
                }
            }

            // remove SFX from the recently played dictionary, allowing them to be played again
            foreach (var sfx in _sfxNoLongerRecentlyPlayed)
                _sfxRecentlyPlayed.Remove(sfx);
            _sfxNoLongerRecentlyPlayed.Clear();

			// only play SFX that can be played during a pause
			if (TimeController.IsGamePaused)
			{
				foreach (var sfx in _sfxPlayNextFixedUpdate.ToList())
				{
					if (!sfx.Key.PlayDuringPause) continue;

					SFX.PlayRegisterSFX(sfx.Key, sfx.Value);

                    // set this SFX as having been played recently
                    _sfxRecentlyPlayed.Add(sfx);

					_sfxPlayNextFixedUpdate.Remove(sfx.Key);
                }
            }
			// play all SFX
			else
			{
                // play each SFX at the specified Audio Source or position
                foreach (var sfx in _sfxPlayNextFixedUpdate)
                {
                    SFX.PlayRegisterSFX(sfx.Key, sfx.Value);

                    // set this SFX as having been played recently
                    _sfxRecentlyPlayed.Add(sfx);
                }
                _sfxPlayNextFixedUpdate.Clear();
            }
        }

        /// <summary> Contains information for SFX that are played on in-game (not global) AudioSources. </summary>
        public class RegisterData
        {
			public AudioSource AudioSource;	// either the AudioSource or PlayAtPosition must be set
			public Vector3? PlayAtPosition;
			public float? DistanceFromListenerSquared;
			public float TimeUntilCanBePlayedAgain;

			public void Reset()
            {
				AudioSource = null;
				PlayAtPosition = null;
				DistanceFromListenerSquared = null;
				TimeUntilCanBePlayedAgain = 0;
			}
        }
	}
}
