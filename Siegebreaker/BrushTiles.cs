using System.Collections.Generic;
using System.Linq;
using TowerDefense.Environment;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

namespace TowerDefense.EditorTools
{
    public class BrushTiles : Editor
    {
		/// <summary> Adjust the height of existing tiles instead of creating or deleting them. </summary>
		public static bool InEditHeightMode;

		/// <summary> All tiles in the level. </summary>
		public static Dictionary<Vector3Int, EntityTileGround> GroundTiles;

		/// <summary> All hardpoints in the level. </summary>
		public static Dictionary<Vector3Int, EntityTileHardpoint> Hardpoints;

		/// <summary> Contains the positions of each PathConnector in the level. </summary>
		private static HashSet<Vector3Int> _pathConnectorsPositions = new HashSet<Vector3Int>();

        /// <summary> Set to True if a tile was created during this mouse press. Used to disable height adjust. </summary>
        private static bool _tileCreatedOnMouseEvent;

		// This PathData is used to configure each tile that has a path
		private static PathData _pathData;
		public static PathData PathData {
			get {
				if (_pathData == null)
				{
					_pathData = new PathData
					{
						Tileset = TileEditor.Tileset,
						PathNoiseSampler = TileEditor.LevelController.LevelInfo.NoiseSamplerPath,
						PathStoneContainer = TileEditor.PathOverlayContainer
					};
				}
				return _pathData;
			}
		}

		/// <summary> What the offset position relative to the center Tile is for each direction. </summary>
		public static Dictionary<Direction, Vector3Int> DirectionVectors = new Dictionary<Direction, Vector3Int>()
		{
			{Direction.North, new Vector3Int(0, 0, 1) },
			{Direction.NorthEast, new Vector3Int(1, 0, 1) },
			{Direction.East, new Vector3Int(1, 0, 0) },
			{Direction.SouthEast, new Vector3Int(1, 0, -1) },
			{Direction.South, new Vector3Int(0, 0, -1) },
			{Direction.SouthWest, new Vector3Int(-1, 0, -1) },
			{Direction.West, new Vector3Int(-1, 0, 0) },
			{Direction.NorthWest, new Vector3Int(-1, 0, 1) }
		};

		/// <summary>
		/// Rules to determine what tile will be placed based on the adjacent tiles.
		/// Byte format: North-NorthEast-East-SouthEast-South-SouthWest-West-NorthWest
		/// </summary>
		public static Dictionary<ConnectorType, byte> TileRules = new Dictionary<ConnectorType, byte>()
		{
			{ ConnectorType.FourWay, 0b_10101010 },		// tiles on all 4 sides
			{ ConnectorType.ThreeWay, 0b_10101000 },	// tiles on 3 sides
			{ ConnectorType.Corner, 0b_10100000 },		// tiles on 2 adjacent sides
			{ ConnectorType.Straight, 0b_10001000 },	// tiles on 2 opposite sides
			{ ConnectorType.End, 0b_10000000 },			// tiles on 1 side
			{ ConnectorType.Standalone, 0b_00000000 },	// tiles on no sides
		};

		/// <summary> How many ways each tile can be rotated. </summary>
		public static Dictionary<ConnectorType, int> TilePermutations = new Dictionary<ConnectorType, int>()
		{
			{ ConnectorType.FourWay, 1 },
			{ ConnectorType.ThreeWay, 4 },
			{ ConnectorType.Corner, 4 },
			{ ConnectorType.Straight, 2 },
			{ ConnectorType.End, 4 },
			{ ConnectorType.Standalone, 1 },
		};

		public static void InitializeTileBrush()
        {
			_pathData = null;
            FindTilesInLevel();
        }

        public static void HandleInput(Event current)
		{
			// brush is used with left click
			if (current.button != 0) return;

			if (current.type == EventType.MouseUp)
				_tileCreatedOnMouseEvent = false;

			// only execute on mouse down or mousedrag events
			if (current.type != EventType.MouseDown && current.type != EventType.MouseDrag) return;

			// [Shift + Control] - Delete a tile completely (remove it from the scene)
			if (current.shift && current.control)
			{
				BrushDeleteTile();
			}
			// [Shift] - Delete a path, or lower a ground tile
			else if (current.shift)
			{
				if (TileEditor.ActiveBrush == BrushType.Path)
					RemovePathFromTile();
				else
					BrushHeight.StartHeightAdjust(current, false);
			}
			// [Control] - Set all tiles to the height of the tile this command was issued on
			else if (current.control)
			{
				if (current.type == EventType.MouseDown)
					BrushHeight.StartHeightSet(current, true, true);
				else if (current.type == EventType.MouseDrag)
					BrushHeight.StartHeightSet(current, true, false);
			}
			// Create a new tile or increase the height of an existing tile
			else
			{
				// try to create a new ground tile
				if (TileEditor.ActiveBrush == BrushType.Ground)
				{
                    BrushCreateGroundTile();

                    // if no tile was created from this mouse event (click + drag), try to raise the height of the existing tile at this position
                    if (!_tileCreatedOnMouseEvent)
                        BrushHeight.StartHeightAdjust(current, true);
                }
				// add a path to a tile
                else if (TileEditor.ActiveBrush == BrushType.Path)
				{
                    AddPathToTile();
				}
				// create a hardpoint
				else if (TileEditor.ActiveBrush == BrushType.Hardpoint)
				{
					CreateHardpoint();
				}
			}

			// prevent this mouse event from selecting of the gameobjects in the scene
			current.Use();

			// allow the scene to be saved
			EditorSceneManager.MarkSceneDirty(TileEditor.ActiveScene);
		}

		/// <summary> Creates ground tiles under the brush. </summary>
		private static void BrushCreateGroundTile()
		{
			// get the positions where tiles should be created (only affects Ground tiles. Paths and Hardpoints can only be placed one at a time)
			var pos = TileEditor.BrushPositions;
			if (pos == null) return;

			// place each tile in the active brush selection
			for (int i = 0; i < pos.Count; i++)
			{
				int previousTileHeightLevel = 0;

				// a tile already exists at this location
				if (GroundTiles.ContainsKey(pos[i]))
				{
					continue;
				}
				// find the height level of the adjacent tiles and find a valid height level for this tile
				else
				{
					int maxHeight = 0;
					int minHeight = 0;

					// find the highest and lowest adjacent tiles
					for (int j = 0; j < 8; j++)
					{
						if (GroundTiles.TryGetValue(pos[i] + DirectionVectors[(Direction)j], out EntityTileGround adjacentTile))
						{
							if (j == 0)
							{
								maxHeight = minHeight = adjacentTile.HeightLevel;
							}
							else
							{
								maxHeight = Mathf.Max(maxHeight, adjacentTile.HeightLevel);
								minHeight = Mathf.Min(minHeight, adjacentTile.HeightLevel);
							}
						}
					}

					// this tile has at least one adjacent tile that is lower and at least one that is higher (will be placed in the middle)
					if (maxHeight - minHeight == 2)
						previousTileHeightLevel = minHeight + 1;
					// this tile has at least one adjacent tile that is higher (will be placed at the lower level)
					if (maxHeight - minHeight == 1)
						previousTileHeightLevel = minHeight;
					// all adjacent tiles are the same level
					if (maxHeight == minHeight)
						previousTileHeightLevel = minHeight;

					// only set to True if there was no tile at this position before
					_tileCreatedOnMouseEvent = true;
				}

				// create a new tile at this location (or the location of the previous tile)
				CreateGroundTileAtPosition(pos[i], previousTileHeightLevel);
				UpdateAdjacentGroundTiles(pos[i]);
			}
		}

		/// <summary> Create a new tile of the specific type at the passed position. </summary>
		public static EntityTileGround CreateGroundTileAtPosition(Vector3Int pos, int heightLevel)
		{
            // cannot create tiles outside the levels boundaries
            if (!TileEditor.IsPositionWithinLevel(pos)) return null;

            var adjacentTileData = GetAdjacentTiles(pos, heightLevel);
            byte adjacentTiles = adjacentTileData.AnyEqualOrHigher;
            TileData tileData = GetTileConnectorAndRotation(adjacentTiles).Value;

            // use a dropoff cliff if this position is missing adjacent tile
            TileType tileType;
            if (TileHasMissingAdjacentTile(pos))
				tileType = TileType.Dropoff;
            // use a smooth cliff if this position has a wall structure with at least one active joiner
            else if (EditRef.WallStructures.TryGetValue(pos, out WallStructure wallStructure) && wallStructure.HasActiveJoiner())
				tileType = TileType.Smooth;
			// use the rough cliff by default
			else
				tileType = TileType.Rough;

            // get the prefab to be instantiated
            Object prefab = TileEditor.Tileset.GetRandomTile(tileData.ConnectorType, tileType);

			// instantiate the prefab
			var tile = PrefabUtility.InstantiatePrefab(prefab) as EntityTileGround;
			tile.transform.position = pos;
			tile.name = prefab.name;
			tile.SetHeightLevel(heightLevel);

            // add it to the tiles dictionary
            GroundTiles.Add(pos, tile);

			// parent the tile to its respective container and set its rotation and cutouts
			tile.SetTileRotation(tileData.Rotation);
			tile.transform.SetParent(TileEditor.GroundTilesContainer);
            tile.ConfigureTile(TileEditor.Theme.MaterialGround, TileEditor.Theme.TextureDropoff, TileEditor.Theme.NormalDropoff, adjacentTileData.HasAdjacentPath);
			tile.UpdateCutouts(adjacentTileData.AnyEqualOrHigher);

			return tile;
		}

        /// <summary> Add a path to the ground tile at this position. </summary>
        private static void AddPathToTile() => UpdatePathOnTile(true);

        /// <summary> Remove the path from the ground tile at this position. </summary>
        private static void RemovePathFromTile() => UpdatePathOnTile(false);

        private static void UpdatePathOnTile(bool addPath, Vector3Int? position = null, bool updateAdjacentPaths = true)
		{
			// get the positions of all PathConnectors in the level
			_pathConnectorsPositions.Clear();
			var pathConnectorsToRemove = new HashSet<PathConnector>();

			// add all valid PathConnectors, and remove all null PathConnectors
			foreach (var pathConnector in PathConnector.PathConnectors)
			{
				if (pathConnector != null)
                    _pathConnectorsPositions.Add(pathConnector.Position);
				else
					pathConnectorsToRemove.Add(pathConnector);
            }
			PathConnector.PathConnectors.ExceptWith(pathConnectorsToRemove);

			// get the positions of the ground tiles to be updated
			var positions = new List<Vector3Int>();
			if (position != null)
			{
				positions.Add(position.Value);
			}
			else
			{
                // get the center position of the brush
                positions = TileEditor.BrushPositions;
                if (positions == null) return;
            }

			// update the path on each ground tile
			for (int i = 0; i < positions.Count; i++)
			{
				var pos = positions[i];

                // cannot create tiles outside the levels boundaries
                if (!TileEditor.IsPositionWithinLevel(pos)) continue;

                // there is no tile at this position
                if (!GroundTiles.ContainsKey(pos)) continue;

                if (addPath)
                {
                    var groundTile = GroundTiles[pos];

                    // get what paths are adjacent to this tile (must be on the same height level)
                    var adjacentPaths = GetAdjacentTiles(pos, groundTile.HeightLevel).PathEqualHeight;

                    // get the path type and rotation
                    var pathData = GetTileConnectorAndRotation(adjacentPaths).Value;

                    // a path of this type is already on this tile
                    if (groundTile.HasPath && pathData.ConnectorType == groundTile.PathType) continue;

                    // use the current level theme
                    PathData.LevelTheme = TileEditor.Theme;

                    // update the PathData to use the data for this tile
                    PathData.ConnectorType = pathData.ConnectorType;
                    PathData.Rotation = Mathf.RoundToInt(pathData.Rotation.eulerAngles.y);
                    PathData.PathStonesOverlayPrefab = TileEditor.Tileset.GetPathOverlayPrefab(pathData.ConnectorType);

                    // update the path on this tile
                    groundTile.SetPath(PathData);

					// update the level path mask
					LevelPathMaskGenerator.AddMaskToPosition(pos, PathData.ConnectorType, PathData.Rotation);
                }
                else
                {
                    // remove the path from this tile
                    if (GroundTiles[pos].HasPath)
					{
                        GroundTiles[pos].RemovePath();
                        LevelPathMaskGenerator.ClearMaskFromPosition(pos);
                    }
                }

                if (updateAdjacentPaths)
                    UpdateAdjacentGroundTiles(pos);
            }
        }

        /// <summary> Create a hardpoint at the passed position. Does not affect other tiles. </summary>
        private static void CreateHardpoint()
		{
            var positions = TileEditor.BrushPositions;
            if (positions == null) return;
			var pos = positions[0];

            // a hardpoint already exists here
            if (Hardpoints.ContainsKey(pos))
			{
				// if it's a standalone hardpoint, toggle between the two types (pillar and floating)
				if (!GroundTiles.ContainsKey(pos))
					Hardpoints[pos].TowerHardpoint.SetAsStandalone();
                return;
            }

            // instantiate the hardpoint prefab
            var hardpoint = PrefabUtility.InstantiatePrefab(TileEditor.Theme.GetHardpoint()) as EntityTileHardpoint;
			hardpoint.transform.position = pos;
			hardpoint.name = TileEditor.Theme.GetHardpoint().name;

			// use the height level of the ground tile at this position
			if (GroundTiles.ContainsKey(pos))
			{
                hardpoint.SetHeightLevel(GroundTiles[pos].HeightLevel);
            }
            // configure hardpoint to use the standalone hardpoint model if there is no ground tile here
            else
            {
                hardpoint.TowerHardpoint.SetAsStandalone();
                hardpoint.SetHeightLevel(1);
            }

            // add it to the level dictionaries
            Hardpoints.Add(pos, hardpoint);

			// parent the hardpoint to the tower container
			hardpoint.transform.SetParent(TileEditor.TowerContainer);

			hardpoint.ConfigureTile();

			_tileCreatedOnMouseEvent = true;
		}

		/// <summary> Delete tiles of the ActiveTile type within the brush radius. </summary>
		private static void BrushDeleteTile()
		{
			// get the positions where tiles should be deleted
			var pos = TileEditor.BrushPositions;
			if (pos == null) return;

			// ground
            if (TileEditor.ActiveBrush == BrushType.Ground)
            {
                // delete all ground tiles in the brush radius
                for (int i = 0; i < pos.Count; i++)
                {
                    // a ground tile does not exist at this location
                    if (!GroundTiles.ContainsKey(pos[i])) continue;

                    // delete the ground tile at this location
                    DeleteGroundTileAtPosition(pos[i]);
                    UpdateAdjacentGroundTiles(pos[i]);
                }
            }
            // path
            else if (TileEditor.ActiveBrush == BrushType.Path)
            {
                // delete all tiles in the brush radius
                for (int i = 0; i < pos.Count; i++)
                {
                    if (!GroundTiles.ContainsKey(pos[i])) continue;
                    if (!GroundTiles[pos[i]].HasPath) continue;
                    UpdatePathOnTile(true, pos[i], false);
                }
            }
            // deleting a hardpoint does not affect other tiles
            else if (TileEditor.ActiveBrush == BrushType.Hardpoint)
			{
				DeleteHardpointAtPosition(pos[0]);
				return;
			}
		}

		/// <summary> Destroy the ground tile at the passed position and return its height. </summary>
		public static int DeleteGroundTileAtPosition(Vector3Int pos)
		{
			var tile = GroundTiles[pos];
			tile.DestroyEntity();
			GroundTiles.Remove(pos);
			return tile.HeightLevel;
		}

		/// <summary> Destroy the hardpoint at the passed position. Does not affect other tiles. </summary>
		private static void DeleteHardpointAtPosition(Vector3Int pos)
		{
			if (!Hardpoints.ContainsKey(pos)) return;
			var hardpoint = Hardpoints[pos];
			hardpoint.DestroyEntity();
			Hardpoints.Remove(pos);
		}

		/// <summary> Loop through all adjacent tiles and update them. </summary>
		public static void UpdateAdjacentGroundTiles(Vector3Int centerTilePos)
		{
			for (int j = 0; j < 8; j++)
				UpdateExistingGroundTile(centerTilePos + DirectionVectors[(Direction)j], j % 2 == 0);
		}

		/// <summary>
		/// Check if the existing tile is still valid in this position, and if not, create a new tile of the valid type.
		/// </summary>
		public static void UpdateExistingGroundTile(Vector3Int pos, bool replaceTile)
		{
			// there is no tile at this location
			if (!GroundTiles.ContainsKey(pos)) return;

			var groundTile = GroundTiles[pos];
			var adjacentTiles = GetAdjacentTiles(pos, groundTile.HeightLevel);

			// a tile type can only change based on the adjacent tiles on its cardinal directions
			if (replaceTile)
			{
                // check if the existing tile is correct based on the adjacent tiles
                ConnectorType connectorType = GetTileConnectorAndRotation(adjacentTiles.AnyEqualOrHigher).Value.ConnectorType;
                bool tileIsCorrect = connectorType == groundTile.ConnectorType;

                // check if the tile should be rough or smooth based on whether there is a wall structure on it
				// (only check if the tile isn't already going to be replaced)
                if (tileIsCorrect)
				{
                    EditRef.WallStructures.TryGetValue(pos, out WallStructure wallStructure);
                    bool shouldTileBeSmooth = wallStructure != null && wallStructure.HasActiveJoiner();
					tileIsCorrect = shouldTileBeSmooth == groundTile.IsSmooth;
                }

                // if the ground tile is now incorrect, delete it and replace it with a the correct one
                if (!tileIsCorrect)
                {
                    ReplaceGroundTileAtPosition(pos);
                    return;
                }
				// update the path on this tile if it has one
				else if (groundTile.HasPath)
				{
					UpdatePathOnTile(true, pos, false);
				}
			}

			// if a new tile was not created, updating the cutouts of the existing one
            groundTile.UpdateCutouts(adjacentTiles.AnyEqualOrHigher);
		}

		/// <summary> Replace an existing tile with a new tile of the passed type. </summary>
		private static void ReplaceGroundTileAtPosition(Vector3Int pos)
		{
			if (!GroundTiles.ContainsKey(pos)) return;

			var groundTile = GroundTiles[pos];

			// did this tile have a path?
			bool hadPath = groundTile.HasPath;

            // reparent any props on this tile before it is destroyed
            var existingProps = groundTile.UnparentProps();

			// create the new tile
			int previousTileHeightLevel = DeleteGroundTileAtPosition(pos);
			var newGroundTile = CreateGroundTileAtPosition(pos, previousTileHeightLevel);

            // reparent the old props to the new tile
            newGroundTile.ReparentProps(existingProps);

            // add the path back to this tile if it had one
            if (hadPath)
				UpdatePathOnTile(true, pos, false);
		}

		/// <summary>
		/// If there is an adjacent tile in a direction, the corresponding bit is set to 1.
		/// Ex. There is an adjacent tile to the North and South -> (10001000)
		/// </summary>
		public static AdjacentTiles GetAdjacentTiles(Vector3Int pos, int heightLevel)
		{
			var adjacentTiles = new AdjacentTiles();

			// check each direction for an adjacent ground or path tile
			for (int i = 0; i < 8; i++)
			{
				// an adjacent tile exist at this direction
				Vector3Int adjacentPos = pos + DirectionVectors[(Direction)i];
				if (GroundTiles.TryGetValue(adjacentPos, out EntityTileGround adjacentTile))
				{
                    // adjacent ground tiles
                    if (adjacentTile is EntityTileGround adjacentGroundTile)
					{
						// same height as adjacent tile
						if (heightLevel == adjacentTile.HeightLevel)
							adjacentTiles.GroundEqualHeight += (byte)(0b_10000000 >> i);
						// adjacent tile is lower
						else if (heightLevel > adjacentTile.HeightLevel)
							adjacentTiles.GroundLowerHeight += (byte)(0b_10000000 >> i);
						// adjacent tile is higher
						else if (heightLevel < adjacentTile.HeightLevel)
							adjacentTiles.GroundHigherHeight += (byte)(0b_10000000 >> i);

						// the adjacent tile has a path
						if (adjacentGroundTile.HasPath)
						{
                            // same height as adjacent tile
                            if (heightLevel == adjacentTile.HeightLevel)
                                adjacentTiles.PathEqualHeight += (byte)(0b_10000000 >> i);
                            // adjacent tile is lower
                            else if (heightLevel > adjacentTile.HeightLevel)
                                adjacentTiles.PathLowerHeight += (byte)(0b_10000000 >> i);
                            // adjacent tile is higher
                            else if (heightLevel < adjacentTile.HeightLevel)
                                adjacentTiles.PathHigherHeight += (byte)(0b_10000000 >> i);
                        }
						else if (_pathConnectorsPositions.Contains(adjacentPos))
						{
                            adjacentTiles.PathEqualHeight += (byte)(0b_10000000 >> i);
                        }
                    }
                    // path connector on ground tile (enemy spawner, nexus)
                    else if (_pathConnectorsPositions.Contains(adjacentPos))
                    {
                        adjacentTiles.PathEqualHeight += (byte)(0b_10000000 >> i);
                    }
				}
                // outside the level boundaries (counts as a ground tile of equal height)
                else if (!TileEditor.IsPositionWithinLevel(adjacentPos))
				{
					adjacentTiles.GroundEqualHeight += (byte)(0b_10000000 >> i);
				}
				// has an adjacent PathConnector
				else if (_pathConnectorsPositions.Contains(adjacentPos))
				{
					adjacentTiles.PathEqualHeight += (byte)(0b_10000000 >> i);
				}
			}

			return adjacentTiles;
		}

		/// <summary> Is the tile at this position missing an adjacent tile in any direction? </summary>
		public static bool TileHasMissingAdjacentTile(Vector3Int pos)
		{
            // check each direction for a missing ground tile
            for (int i = 0; i < 8; i++)
            {
                Vector3Int adjacentPos = pos + DirectionVectors[(Direction)i];

				// there is not a ground tile in this direction
				if (TileEditor.IsPositionWithinLevel(adjacentPos) && !GroundTiles.ContainsKey(adjacentPos)) 
					return true;
            }

			return false;
        }

		/// <summary> Return the ConnectorType and rotation that fits the passed position. </summary>
		public static TileData? GetTileConnectorAndRotation(byte adjacentTiles)
		{
			// loop through each connectorType based on its position in the enum
			for (int i = 0; i < System.Enum.GetValues(typeof(ConnectorType)).Length; i++)
			{
				// check each permutation of this connectorType (how many ways it can be rotated)
				ConnectorType conncetorType = (ConnectorType)i;
				for (int j = 0; j < TilePermutations[conncetorType]; j++)
				{
					// circularly shift the tilerule to check if any permutation fits the adjacent tiles
					byte rule = TileRules[conncetorType].CircularShiftRight(j * 2);
					
					// remove non-cardinal tiles as they are not considered in the tile rules
					adjacentTiles &= 0b_10101010;

					// if the tilerule fits the adjacent tiles, return this tile and rotation
					if (adjacentTiles == rule)
						return new TileData(conncetorType, Quaternion.Euler(new Vector3(0, j * 90f, 0)));
                }
			}

			// this position has no valid tile (this shouldn't happen)
			return null;
		}

		/// <summary> Add any tiles in the level to the editor dictionaries. </summary>
		public static void FindTilesInLevel()
		{
            // add ground tiles
            GroundTiles = new Dictionary<Vector3Int, EntityTileGround>();
            foreach (Transform tileTransform in TileEditor.GroundTilesContainer)
			{
				var tile = tileTransform.GetComponent<EntityTileGround>();
				GroundTiles.Add(tileTransform.position.ToVector3Int(), tile);
			}

			// add hardpoints
			Hardpoints = new Dictionary<Vector3Int, EntityTileHardpoint>();
			foreach (Transform hardpointTransform in TileEditor.TowerContainer)
			{
				var hardpoint = hardpointTransform.GetComponent<EntityTileHardpoint>();
				Hardpoints.Add(hardpointTransform.position.ToVector3Int(), hardpoint);
			}

			EditRef.GroundTiles = GroundTiles;
			EditRef.Hardpoints = Hardpoints;
		}

		/// <summary>
		/// Utility: Replace all individual Ground and Path tiles in the scene with a new tile of the same type and rotation.
		/// </summary>
		public static void ReplaceAllTilesInLevel()
		{
			foreach (var pos in GroundTiles.Keys.ToList())
				ReplaceGroundTileAtPosition(pos);

			EditorSceneManager.MarkSceneDirty(TileEditor.ActiveScene);
		}

		/// <summary>
		/// Utility: Regenerate the level path mask for this level. Automatically called if the level does not have a level path mask.
		/// </summary>
		public static void RegenerateLevelPathMask()
		{
			LevelPathMaskGenerator.ClearPathMask();

			foreach (var tile in GroundTiles)
                if (tile.Value.HasPath)
                    LevelPathMaskGenerator.AddMaskToPosition(tile.Key, tile.Value.PathType, tile.Value.PathRotation);

			UpdateLevelPathMask();
        }

		/// <summary> Apply the Level Path Mask to each ground tile in the level. </summary>
		public static void UpdateLevelPathMask()
		{
            // reload each property block to reflect the changes to the mask
            foreach (var tile in GroundTiles)
                tile.Value.ConfigureTile();
        }
    }

	/// <summary> The TileType, ConnectorType, and rotation for this tile. </summary>
	public readonly struct TileData
	{
		public ConnectorType ConnectorType { get; }
		public Quaternion Rotation { get; }

		public TileData(ConnectorType connectorType, Quaternion rotation)
		{
			ConnectorType = connectorType;
			Rotation = rotation;
		}
	}

	/// <summary> Contains information about the tiles adjacent to this tile. </summary>
	public class AdjacentTiles
	{
		/// <summary> Adjacent ground tiles that are on the same height level as the tile at this position (ex. 0b1000000 = adjacent north tile). </summary>
		public byte GroundEqualHeight;

		/// <summary> Adjacent ground tiles that are on a lower height level. </summary>
		public byte GroundLowerHeight;

		/// <summary> Adjacent ground tiles that are on a higher height level. </summary>
		public byte GroundHigherHeight;

		/// <summary> Adjacent path tiles that are on the same height level as the tile at this position (ex. 0b1000000 = adjacent north tile). </summary>
		public byte PathEqualHeight;

		/// <summary> Adjacent path tiles that are on a lower height level. </summary>
		public byte PathLowerHeight;

		/// <summary> Adjacent path tiles that are on a higher height level. </summary>
		public byte PathHigherHeight;

		/// <summary> Any adjacent tiles that are on an equal or higher height level. </summary>
		public byte AnyEqualOrHigher => (byte)(GroundEqualHeight | GroundHigherHeight);

		/// <summary> True if at least one adjacent tile is lower than this tile. </summary>
		public bool HasAnyLowerTiles => GroundLowerHeight > 0 || PathLowerHeight > 0;

		/// <summary> True if at least one adjacent tile is higher than this tile. </summary>
		public bool HasAnyHigherTiles => GroundHigherHeight > 0 || PathHigherHeight > 0;

		/// <summary> True if this tile has at least one adjacent path. </summary>
		public bool HasAdjacentPath => PathEqualHeight + PathLowerHeight + PathHigherHeight > 0;
	}
}
