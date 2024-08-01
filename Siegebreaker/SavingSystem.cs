using System;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using TowerDefense.Level;
using UnityEngine;
using Steamworks;
using System.Collections.Generic;

namespace TowerDefense.Saving
{
	/// <summary> 
	/// Handles saving and loading the game state to and from the save file.
	/// This class inherits from MonoBehaviour and is added to a gameobject in the scene, so it can directly interact 
	/// with other gameobjects in the scene that have save states.
	/// </summary>
	public class SavingSystem : MonoBehaviour, IInitialize
    {
		/// <summary> Each time a scene changes, the Saving System instance will be updated to the Saving System in the active scene. </summary>
		public static SavingSystem Instance;

        public void Initialize() => Instance = this;
        public void Terminate() {}

        /// <summary> Create a new save file. </summary>
        public SiegebreakerSaveFile CreateNewSaveFile(int saveSymbolIndex)
        {
            // create a new save file
            var newSaveFile = new SiegebreakerSaveFile(null);

            // initialize each saving component to its starting state
            SaveFileNexus.InitializeNewState();
            SaveFileItems.InitializeNewState();
            SaveFileTowers.InitializeNewState();
            SaveFileCards.InitializeNewState();
            SaveFileOverworld.InitializeNewState();
            SaveFilePlayer.InitializeNewState();

            newSaveFile.GameVersion = Application.version;
            newSaveFile.SaveSymbolIndex = saveSymbolIndex;

            // immediately save the initialized save components to the save file
            Save(newSaveFile);

            return newSaveFile;
        }

		/// <summary> Save the save file. </summary>
		public void Save(SiegebreakerSaveFile saveFile)
		{
            // get all states from static objects
            saveFile.Nexus = SaveFileNexus.SaveStateToFile();
            saveFile.Items = SaveFileItems.SaveStateToFile();
            saveFile.Towers = SaveFileTowers.SaveStateToFile();
            saveFile.Cards = SaveFileCards.SaveStateToFile();
            saveFile.Overworld = SaveFileOverworld.SaveStateToFile();
            saveFile.CurrentLevelData = CurrentLevelData.SaveStateToFile();
            saveFile.Player = SaveFilePlayer.SaveStateToFile();

            // get all states from game objects in scene
            foreach (SaveableEntity saveableEntity in FindObjectsOfType<SaveableEntity>())
                saveFile.States[saveableEntity.GetUniqueIndentifier()] = saveableEntity.CaptureState();

            // save to the cloud if enabled
            if (SteamClient.IsValid && SteamRemoteStorage.IsCloudEnabled)
                if (SaveToSteamCloud(saveFile))
                    return;

            // otherwise, save a local copy
            SaveToLocal(saveFile);
        }

        private bool SaveToSteamCloud(SiegebreakerSaveFile saveFile)
        {
            try
            {
                string saveFileName = saveFile.GetSaveFileName() + SaveFileManager.FileExtension;

                using MemoryStream memoryStream = new MemoryStream();
                BinaryFormatter formatter = new BinaryFormatter();
                formatter.Serialize(memoryStream, saveFile.States);
                var serializedSaveFile =  memoryStream.ToArray();

                SteamRemoteStorage.FileWrite(saveFileName, serializedSaveFile);
                return true;
            }
            catch (Exception e)
            {
                Log.Write("Could not save to Steam Cloud: " + e.Message);
                return false;
            }
        }

        private void SaveToLocal(SiegebreakerSaveFile saveFile)
        {
            string saveFileName = saveFile.GetSaveFileName();
            string path = SaveFileManager.GetPathFromSaveFileName(saveFileName);

            // serialize the states dictionary (not the SiegebreakerSaveFile class) and save it
            using FileStream stream = File.Open(path, FileMode.Create);
            BinaryFormatter formatter = new BinaryFormatter();
            formatter.Serialize(stream, saveFile.States);
        }

        public void LoadSaveFiles(ref List<SiegebreakerSaveFile> saveFiles)
        {
            if (SteamClient.IsValid && SteamRemoteStorage.IsCloudEnabled)
                if (LoadFromSteamCloud(ref saveFiles))
                    return;

            LoadFromLocal(ref saveFiles);
        }

        private bool LoadFromSteamCloud(ref List<SiegebreakerSaveFile> saveFiles)
        {
            // deserialize each save file in the steam cloud
            try
            {
                foreach (var file in SteamRemoteStorage.Files)
                {
                    if (file.EndsWith(SaveFileManager.FileExtension) == false)
                        continue;

                    var serializedFile = SteamRemoteStorage.FileRead(file);
                    using MemoryStream memoryStream = new MemoryStream(serializedFile);
                    BinaryFormatter formatter = new BinaryFormatter();
                    var states = (Dictionary<string, object>)formatter.Deserialize(memoryStream);
                    var saveFile = new SiegebreakerSaveFile(states);
                    saveFiles.Add(saveFile);
                }
                return true;
            }
            catch (Exception e)
            {
                Log.Write("Could not load Steam Cloud save files: " + e.Message);
                return false;
            }
        }

        private void LoadFromLocal(ref List<SiegebreakerSaveFile> saveFiles)
        {
            // all files in the save directory (could potentially contain irrelevant files due to the user)
            var filePaths = Directory.GetFiles(Application.persistentDataPath);

            // find all files that end with the correct extension
            for (int i = 0; i < filePaths.Length; i++)
            {
                if (filePaths[i].EndsWith(SaveFileManager.FileExtension))
                {
                    using FileStream fileStream = File.Open(filePaths[i], FileMode.Open);
                    BinaryFormatter formatter = new BinaryFormatter();
                    var states = (Dictionary<string, object>)formatter.Deserialize(fileStream);
                    var saveFile = new SiegebreakerSaveFile(states);
                    saveFiles.Add(saveFile);
                }
            }
        }

        /// <summary> Update the game state based on the save file. </summary>
        public void LoadGameStateFromSaveFile(SiegebreakerSaveFile saveFile)
        {
            Log.Write("Loading Save File");

            // load all states into the static objects
            SaveFileNexus.LoadStateFromFile(saveFile.Nexus);
            SaveFileItems.LoadStateFromFile(saveFile.Items);
            SaveFileTowers.LoadStateFromFile(saveFile.Towers);
            SaveFileCards.LoadStateFromFile(saveFile.Cards);
            SaveFileOverworld.LoadStateFromFile(saveFile.Overworld);
            SaveFilePlayer.LoadStateFromFile(saveFile.Player);

            // some save files will not have a currentLevelData
            if (saveFile.CurrentLevelData != null)
                CurrentLevelData.LoadStateFromFile(saveFile.CurrentLevelData);

            // load the states in to the game objects in the scene
            foreach (SaveableEntity saveable in FindObjectsOfType<SaveableEntity>())
            {
                string id = saveable.GetUniqueIndentifier();
                if (saveFile.States.ContainsKey(id))
                    saveable.RestoreState(saveFile.States[id]);
            }
            
            // On Save Loaded
            foreach (IOnSaveLoaded i in FindObjectsOfType<MonoBehaviour>().OfType<IOnSaveLoaded>())
                i.OnSaveLoaded();
        }

        /// <summary> Delete the passed save file from the steam cloud or local storage. </summary>
        public bool DeleteSaveFile(SiegebreakerSaveFile saveFile)
        {
            if (SteamClient.IsValid && SteamRemoteStorage.IsCloudEnabled)
                return DeleteFromSteamCloud(saveFile);
            else
                return DeleteFromLocal(saveFile);
        }

        private bool DeleteFromSteamCloud(SiegebreakerSaveFile saveFile)
        {
            try
            {
                SteamRemoteStorage.FileDelete(saveFile.GetSaveFileName() + SaveFileManager.FileExtension);
                Log.Write("Save file deleted from Steam Cloud: " + saveFile.GetSaveFileName());
                return true;
            }
            catch (Exception e)
            {
                Log.Write("Unable to delete save file from Steam Cloud: " + saveFile.GetSaveFileName() + " " + e.Message);
                return false;
            }
        }

        /// <summary> Delete a local save file. </summary>
        private bool DeleteFromLocal(SiegebreakerSaveFile saveFile)
        {
            try
            {
                var path = SaveFileManager.GetPathFromSaveFileName(saveFile.GetSaveFileName());
                File.Delete(path);
                Log.Write("Save file deleted from local storage: " + saveFile.GetSaveFileName());
                return true;
            }
            catch (Exception e)
            {
                Log.Write("Unable to delete save file from local storage: " + saveFile.GetSaveFileName() + " " + e.Message);
                return false;
            }
        }
    }
}

