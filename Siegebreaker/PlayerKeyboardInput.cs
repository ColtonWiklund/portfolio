using System;
using System.Collections.Generic;
using TowerDefense.UI;
using UnityEngine;

namespace TowerDefense.Player
{
    /// <summary> Processes Hotkeys for all features. </summary>
    public class PlayerKeyboardInput : MonoBehaviour
    {
        /// <summary> Contains Actions for Key Down and Key Up for the key it was created for. </summary>
        public class KeyInputActions
        {
            /// <summary> Called on the frame this key was pressed down. </summary>
            public Action OnKeyDownAction;
            /// <summary> Called on the frame this key was released. </summary>
            public Action OnKeyUpAction;
        }

        // each keybind has a KeyInputActions class created for it that handles its events
        private static Dictionary<KeyCode, KeyInputActions> _keyInputActions;

        public static KeyInputActions GetKeyInputActions(KeyCode keycode) => _keyInputActions[keycode];

        // generate key input actions dictionary (regenerates when a level is loaded)
        private void Awake()
        {
            Keybind.LoadPlayerKeybinds();

            _keyInputActions = new Dictionary<KeyCode, KeyInputActions>();
            foreach (var keybind in Keybind.PlayerKeybindsList)
                _keyInputActions.Add(keybind, new KeyInputActions());
        }

        private void Update()
        {
            // do not process hotkeys while the screen is being faded, or the loading screen is shown
            if (ScreenFader.IsScreenFading) return;

            // escape - exit panel or open game menu (hard-coded)
            if (Input.GetKeyDown(KeyCode.Escape))
                OnEscapeKeyPressed();

            // essence UI targeting info (hard-coded)
            if (Input.GetKeyDown(KeyCode.LeftShift))
                OnCardShowTargetingInfoAction?.Invoke(true);
            else if (Input.GetKeyUp(KeyCode.LeftShift))
                OnCardShowTargetingInfoAction?.Invoke(false);

            // call custom keybind events
            foreach (var keybind in Keybind.PlayerKeybindsList)
            {
                if (Input.GetKeyDown(keybind))
                    _keyInputActions[keybind].OnKeyDownAction?.Invoke();
                else if (Input.GetKeyUp(keybind))
                    _keyInputActions[keybind].OnKeyUpAction?.Invoke();
            }
        }

		/// <summary> Called each time the player presses or releases the show card targeting info key (default: shift). </summary>
		public static Action<bool> OnCardShowTargetingInfoAction;

		/// <summary> Returns True if the key to show card targeting info is held down </summary>
		public static bool CardShowTargetingInfoKeyDown() => Input.GetKey(KeyCode.LeftShift);

        // Return to Entity Selection Mode -> Close Highest Level Panel -> Open Game Menu
        private static void OnEscapeKeyPressed()
        {
            // return to entity selection mode
            if (PlayerMouseInput.Instance != null && PlayerMouseInput.EnterEntitySelectionMode())
                return;

            // if at least one panel is open, close the highest layer panel
            foreach (var panel in UIPanelController.ActivePanels)
            {
                if (panel != null)
                {
                    // if the last panel was closed, clear the player's selection
                    if (UIPanelController.CloseHighestLayerPanel())
                        PlayerMouseInput.ClearSelection();

                    return;
                }
            }

            // open the game menu if no panels are open already
            if (UIPanelOptionsMenu.Instance != null && !SceneLoader.IsLoadingScene)
                UIPanelOptionsMenu.Instance.OpenPanel();
        }

        private static Vector2Int _lastFramePan = Vector2Int.zero;

        /// <summary> Returns the direction to pan the camera if the player is holding a pan key (WASD). </summary>
        public static Vector2Int KeyboardPanCamera()
        {
            var panUpKey = Keybind.GetKeybind(Keybind.PanCameraUp);
            var panDownKey = Keybind.GetKeybind(Keybind.PanCameraDown);
            var panRightKey = Keybind.GetKeybind(Keybind.PanCameraRight);
            var panLeftKey = Keybind.GetKeybind(Keybind.PanCameraLeft);

            var currentFramePan = Vector2Int.zero;

            // not panning vertically
            if (_lastFramePan.y == 0)
            {
                // accept new input
                if (Input.GetKeyDown(panUpKey) || Input.GetKey(panUpKey))
                    currentFramePan.y = 1;
                else if (Input.GetKeyDown(panDownKey) || Input.GetKey(panDownKey))
                    currentFramePan.y = -1;
            }
            // moving upwards
            else if (_lastFramePan.y == 1)
            {
                // the pan up key was overriden
                if (Input.GetKeyDown(panDownKey))
                    currentFramePan.y = -1;
                // the pan up key was relased while the pan down key is still held
                else if (Input.GetKeyUp(panUpKey) && Input.GetKey(panDownKey))
                    currentFramePan.y = -1;
                // the pan up key must still be pressed to pan up
                else if (Input.GetKey(panUpKey))
                    currentFramePan.y = 1;
            }
            // moving downwards
            else if (_lastFramePan.y == -1)
            {
                // the pan up key was overriden
                if (Input.GetKeyDown(panUpKey))
                    currentFramePan.y = 1;
                // the pan down key was relased while the pan up key is still held
                else if (Input.GetKeyUp(panDownKey) && Input.GetKey(panUpKey))
                    currentFramePan.y = 1;
                // the pan down key must still be pressed to pan down
                else if (Input.GetKey(panDownKey))
                    currentFramePan.y = -1;
            }

            // not panning horizontally
            if (_lastFramePan.x == 0)
            {
                // accept new input
                if (Input.GetKeyDown(panRightKey) || Input.GetKey(panRightKey))
                    currentFramePan.x = 1;
                else if (Input.GetKeyDown(panLeftKey) || Input.GetKey(panLeftKey))
                    currentFramePan.x = -1;
            }
            // moving right
            else if (_lastFramePan.x == 1)
            {
                // the pan right was overriden
                if (Input.GetKeyDown(panLeftKey))
                    currentFramePan.x = -1;
                // the pan right key was realesed while the pan left key is still held
                else if (Input.GetKeyUp(panRightKey) && Input.GetKey(panLeftKey))
                    currentFramePan.x = -1;
                // the pan right key must still be pressed to pan right
                else if (Input.GetKey(panRightKey))
                    currentFramePan.x = 1;
            }
            // moving left
            else if (_lastFramePan.x == -1)
            {
                // the pan right key was overriden
                if (Input.GetKeyDown(panRightKey))
                    currentFramePan.x = 1;
                // the pan left key was relased while the pan right key is still held
                else if (Input.GetKeyUp(panLeftKey) && Input.GetKey(panRightKey))
                    currentFramePan.x = 1;
                // the pan left key must still be pressed to pan down
                else if (Input.GetKey(panLeftKey))
                    currentFramePan.x = -1;
            }

            _lastFramePan = currentFramePan;
            return currentFramePan;
        }
    }
}
