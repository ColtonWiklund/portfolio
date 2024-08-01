using System.Collections;
using System.Collections.Generic;
using System.IO;
using TowerDefense.Environment;
using Unity.EditorCoroutines.Editor;
using UnityEditor;
using UnityEngine;

namespace TowerDefense.EditorTools
{
    /// <summary> Generates the level's Path Mask texture used by the ground tiles. </summary>
    public static class LevelPathMaskGenerator
    {
        // how many pixels each ground tile takes up in the texture (32x32)
        private static readonly int pixelsPerTile = 8;

        // the path mask texture that is currently being edited
        private static Texture2D _activeTexture;

        // level path mask textures are saved after a delay to multiple changes can be made before saving
        private static EditorCoroutine _coroutineSave;

        // cache of path masks for each path type and rotation
        private static Dictionary<ConnectorType, List<Color32[]>> _pathMasks;

        public static void Initialize()
        {
            LoadPathMasks();
            LoadOrCreateTexture();
            EntityTileGround.SetSharedLevelPathMaskTexture(_activeTexture);
        }

        /// <summary> Create a new texture with dimensions determined this level's X and Y size (in tiles). </summary>
        public static void CreateTexture()
        {
            Log.Write("Path Mask Generator: Creating New Texture");

            // Get the file path of the open level's LevelInfo asset
            string areaInfoPath = AssetDatabase.GetAssetPath(TileEditor.LevelController.LevelInfo);
            string levelName = Path.GetFileNameWithoutExtension(areaInfoPath);
            string texturePath = Path.GetDirectoryName(areaInfoPath) + "/" + levelName + "_levelPathMask.png";

            // Create a new empty texture and save it as an asset
            var textureDimensions = GetTextureSizeForLevel();
            Texture2D texture = new Texture2D(textureDimensions.x, textureDimensions.y, TextureFormat.RGBA32, false);
            byte[] textureBytes = texture.EncodeToPNG();
            File.WriteAllBytes(texturePath, textureBytes);

            // Refresh the asset database to reflect the new asset
            AssetDatabase.Refresh();

            // Load the texture asset at the specified path
            Texture2D textureAsset = AssetDatabase.LoadAssetAtPath<Texture2D>(texturePath);

            // Set this texture as the level's path mask
            TileEditor.LevelController.LevelInfo.SetLevelPathMask(textureAsset);

            // Set the texture as the active texture
            _activeTexture = textureAsset;

            EntityTileGround.SetSharedLevelPathMaskTexture(_activeTexture);

            // Immediately clear the texture to set it to black (is grey by default)
            ClearPathMask(false);
        }

        /// <summary> Remove all data from this texture (set to all black). </summary>
        public static void ClearPathMask(bool reloadTexture = true)
        {
            if (reloadTexture)
                LoadOrCreateTexture();

            // Clear the texture
            var pixels = _activeTexture.GetPixels32();
            for (int i = 0; i < pixels.Length; i++)
                pixels[i] = Color.clear;
            _activeTexture.SetPixels32(pixels);
            _activeTexture.Apply();

            EntityTileGround.SetSharedLevelPathMaskTexture(_activeTexture);
        }

        /// <summary> Write the mask at a ground tile to the level path mask texture. </summary>
        public static void AddMaskToPosition(Vector3Int tilePos, ConnectorType pathType, int rotation)
        {
            LoadOrCreateTexture();

            // Change tile positions that range from -LevelBoundaries to LevelBoundaries to start at 0 intead
            var maskPos = GetMaskPositionFromTilePosition(tilePos);

            // Write the mask to the texture
            _activeTexture.SetPixels32(maskPos.x, maskPos.y, pixelsPerTile, pixelsPerTile, _pathMasks[pathType][rotation / 90]);

            SaveTextureChanges();
        }

        /// <summary> Remove the mask from the ground tile at this position. </summary>
        public static void ClearMaskFromPosition(Vector3Int tilePos)
        {
            LoadOrCreateTexture();

            var maskPos = GetMaskPositionFromTilePosition(tilePos);

            // Clear the path mask from this section of the texture
            var emptyPixels = new Color32[pixelsPerTile * pixelsPerTile];
            for (int i = 0; i < emptyPixels.Length; i++)
                emptyPixels[i] = Color.clear;

            _activeTexture.SetPixels32(maskPos.x, maskPos.y, pixelsPerTile, pixelsPerTile, emptyPixels);

            SaveTextureChanges();
        }

        /// <summary> Get where the path mask should start on the texture given the tile position in the level. </summary>
        private static Vector2Int GetMaskPositionFromTilePosition(Vector3Int tilePos)
        {
            Vector2Int maskPos = new Vector2Int(tilePos.x, tilePos.z);
            maskPos.x += (int)TileEditor.LevelBoundaries.x;
            maskPos.y += (int)TileEditor.LevelBoundaries.y;
            maskPos *= pixelsPerTile;
            return maskPos;
        }

        /// <summary> Save the changes to this texture after a short delay to allow multiple writes to happen before saving. </summary>
        private static void SaveTextureChanges()
        {
            if (_coroutineSave != null)
                EditorCoroutineUtility.StopCoroutine(_coroutineSave);

            _coroutineSave = EditorCoroutineUtility.StartCoroutine(SaveTextureChangesCoroutine(), TileEditor.LevelController);
        }

        static IEnumerator SaveTextureChangesCoroutine()
        {
            var textureToSave = _activeTexture;
            yield return new WaitForSeconds(1f);
            textureToSave.Apply();
            var path = AssetDatabase.GetAssetPath(textureToSave);
            File.WriteAllBytes(path, _activeTexture.EncodeToPNG());
        }

        /// <summary> Load the level path mask texture assigned to this level info, or create a new one if needed. </summary>
        public static void LoadOrCreateTexture()
        {
            // Get the level path mask texture used by this level
            _activeTexture = TileEditor.LevelController.LevelInfo.TextureLevelPathMask;

            // Create a new one if it doesn't already have one, or the current texture is the wrong size
            var textureSize = GetTextureSizeForLevel();
            if (_activeTexture == null || _activeTexture.width != textureSize.x || _activeTexture.height != textureSize.y)
                CreateTexture();
        }

        /// <summary> Get the size the level path mask texture needs to be for this level. </summary>
        public static Vector2Int GetTextureSizeForLevel()
        {
            Vector2Int size = new Vector2Int
            {
                x = Mathf.RoundToInt(TileEditor.LevelBoundaries.x * pixelsPerTile * 2) + pixelsPerTile,
                y = Mathf.RoundToInt(TileEditor.LevelBoundaries.y * pixelsPerTile * 2) + pixelsPerTile
            };
            return size;
        }

        /// <summary> Add each path mask's rotation to the path masks dictionary. </summary>
        private static void LoadPathMasks()
        {
            if (Lookups.PathMaskLookup == null || Lookups.PathMaskLookup.GetDictionary() == null) return;

            _pathMasks = new Dictionary<ConnectorType, List<Color32[]>>();
            foreach (var mask in Lookups.PathMaskLookup.GetDictionary())
            {
                _pathMasks.Add(mask.Key, new List<Color32[]>());
                _pathMasks[mask.Key].Add(mask.Value.GetPixels32());

                int w = mask.Value.width;
                int h = mask.Value.height;

                // 90 degrees
                var texture = RotateTextureClockwise(mask.Value.GetPixels32(), w, h);
                _pathMasks[mask.Key].Add(texture);

                // 180 degrees
                texture = RotateTextureClockwise(texture, w, h);
                _pathMasks[mask.Key].Add(texture);

                // 270 degrees
                texture = RotateTextureClockwise(texture, w, h);
                _pathMasks[mask.Key].Add(texture);
            }
        }

        /// <summary> Rotate a texture (Color array) clockwise 90 degrees. </summary>
        private static Color32[] RotateTextureClockwise(Color32[] original, int w, int h)
        {
            Color32[] rotated = new Color32[original.Length];

            int iRotated, iOriginal;
            for (int j = 0; j < h; ++j)
            {
                for (int i = 0; i < w; ++i)
                {
                    iRotated = (i + 1) * h - j - 1;
                    iOriginal = original.Length - 1 - (j * w + i);
                    rotated[iRotated] = original[iOriginal];
                }
            }
            
            return rotated;
        }
    }
}
