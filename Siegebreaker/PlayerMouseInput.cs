using TowerDefense.UI;
using TowerDefense.Units;
using UnityEngine;
using UnityEngine.EventSystems;

namespace TowerDefense.Player
{
    /// <summary> Handles mouse input for camera controls and unit selection. </summary>
    public class PlayerMouseInput : MonoBehaviour
    {
        [Header("Components")]
        [SerializeField] CameraController _cameraController;

        /// <summary> All objects underneath the mouse are added to this array (this is unlikely to be more than 3-4 objects during levels with many overlapping enemies). </summary>
        private RaycastHit[] _objectSelectionRaycastHits = new RaycastHit[8];

        /// <summary> Entities must have a selection collider on this layer to be hovered or selected. </summary>
        private LayerMask _entityLayerMask;

        /// <summary> Tiles must have a selection collider on this layer to be selected. </summary>
        private LayerMask _tileLayerMask;

        /// <summary> The object that was under the mouse when it was left-clicked. </summary>
        private Transform _mouseDownObject;

        /// <summary> The position of the mouse on the previous frame. </summary>
        private Vector2 _lastFrameMousePos;

        /// <summary> Where the mouse was positioned when mouse was left-clicked. </summary>
        private Vector2 _mouseStartPos;

        /// <summary> How many pixels away from the screen edge the mouse must be to edge pan. </summary>
        private static readonly int _edgePanningPixelMargin = 5;

        /// <summary> How much the mouse can move while pressed down in any direction (% of screen dimension) from its starting position and still trigger a selection event. </summary>
        private static readonly float _mouseMovementTolerance = 0.0125f;

        /// <summary> Has the mouse moved between ButtonDown and ButtonUp? Set to True if the mouse movement exceeds _mouseMovementTolerance. </summary>
        private bool _hasMouseMoved;

        /// <summary> Was ButtonDown called while the mouse was over a UI element? </summary>
        private bool _didMouseClickStartOverUI;

        private SelectionType SelectionMode => PlayerSelection.SelectionMode;

        public static PlayerMouseInput Instance { get; private set; }

        private void Awake()
        {
            Instance = this;
            _entityLayerMask = LayerMask.GetMask("Selection");
            _tileLayerMask = LayerMask.GetMask("Tiles");
        }

        /// <summary> Process player mouse input every frame. </summary>
        void Update()
        {
            MouseHover();
            MouseLeftClickInput();
            MouseRightClickInput();
            MouseScrollInput();
        }

        /// <summary> Get what object the mouse is over. </summary>
        private void MouseHover()
        {
            // only enable hover when the mouse isn't over the UI
            var newEntity = !IsMouseOverUI() ? GetObjectUnderMouse() : null;
            PlayerSelection.OnHover(newEntity);
        }

        /// <summary> Select Entities when clicked on and pan camera when clicking and dragging. </summary>
        private void MouseLeftClickInput()
        {
            // mouse click start
            if (Input.GetMouseButtonDown(0))
            {
                _mouseDownObject = GetObjectUnderMouse();
                _lastFrameMousePos = GetNormalizedMousePos();

                // if a click started over the UI, prevent it from interacting with the world
                _didMouseClickStartOverUI = IsMouseOverUI();
                _hasMouseMoved = false;
                _mouseStartPos = _lastFrameMousePos;
            }
            // mouse click hold
            else if (Input.GetMouseButton(0))
            {
                if (_didMouseClickStartOverUI) return;

                Vector2 currentFrameMousePos = GetNormalizedMousePos();

                // check if the mouse movement has exceeded the selection tolerance
                if (!_hasMouseMoved && currentFrameMousePos != _lastFrameMousePos)
                    if (Vector2.Distance(currentFrameMousePos, _mouseStartPos) > _mouseMovementTolerance)
                        _hasMouseMoved = true;

                _cameraController.PanCameraDrag(currentFrameMousePos, _lastFrameMousePos);
                _lastFrameMousePos = currentFrameMousePos;
            }
            // mouse click up
            else if (Input.GetMouseButtonUp(0))
            {
                if (_didMouseClickStartOverUI) return;

                // objects can only be interacted with if the mouse has not moved this frame
                if (_hasMouseMoved) return;
                
                Transform mouseUpEntity = GetObjectUnderMouse();
                if (mouseUpEntity == null)
                {
                    // if all panels were closed, reset the selected Entity
                    if (UIPanelController.CloseHighestLayerPanel())
                        PlayerSelection.ClearSelection();
                }
                // select the Entity
                else if (mouseUpEntity == _mouseDownObject)
                {
                    PlayerSelection.ProcessSelection(mouseUpEntity);
                }
            }
        }

        /// <summary> Right-clicking either resets the selection mode or raises a right-click event on an entity. </summary>
        private void MouseRightClickInput()
        {
            // when not in entity selection mode, right-clicking returns to normal selection mode
            if (SelectionMode != SelectionType.Entity && Input.GetMouseButtonUp(1))
            {
                PlayerSelection.EnterEntitySelectionMode();
            }
            // while in entity selection mode, process right-clicked enemies
            else if (SelectionMode == SelectionType.Entity && Input.GetMouseButtonDown(1))
            {
                if (IsMouseOverUI()) return;
                var entityUnderMouse = GetObjectUnderMouse();
                PlayerSelection.OnEntityRightClicked(entityUnderMouse);
            }
        }

        /// <summary> Handles panning the camera when the cursor is at the screen's borders. Called by the CameraController. </summary>
        public static Vector2Int MouseEdgePanCamera()
        {
            var mousePos = Input.mousePosition;
            int panVertical = 0, panHorizontal = 0;

#if UNITY_EDITOR
            // disable edge panning in editor
            return new Vector2Int(0, 0);
#endif

            // disable unreachable code warning
#pragma warning disable CS0162

            // determine if the camera should be panning
            if (mousePos.x >= 0 && mousePos.x < _edgePanningPixelMargin)
                panHorizontal = -1;
            else if (mousePos.x > Screen.width - _edgePanningPixelMargin && mousePos.x <= Screen.width)
                panHorizontal = 1;

            if (mousePos.y >= 0 && mousePos.y < _edgePanningPixelMargin)
                panVertical = -1;
            else if (mousePos.y > Screen.height - _edgePanningPixelMargin && mousePos.y <= Screen.height)
                panVertical = 1;

            return new Vector2Int(panHorizontal, panVertical);

#pragma warning restore CS0162
        }

        /// <summary> Zoom the camera in or out from the mouse wheel. </summary>
        private void MouseScrollInput()
        {
            if (IsMouseOverUI()) return;

            if (Input.mouseScrollDelta.y != 0)
                _cameraController.ZoomCamera(Input.mouseScrollDelta.y);
        }

        /// <summary> Return the mouse position as a percentage of the screen size. </summary>
        private Vector2 GetNormalizedMousePos()
        {
            float xPos = Input.mousePosition.x / Screen.width;
            float yPos = Input.mousePosition.y / Screen.height;
            return new Vector2(xPos, yPos);
        }

        /// <summary> Returns True if the mouse if over a UI element. </summary>
        private bool IsMouseOverUI() => EventSystem.current.IsPointerOverGameObject(); // defaults to mouse0

        /// <summary> Return the root transform of the Entity (or tile in Tile select mode) underneath the mouse. </summary>
        private Transform GetObjectUnderMouse()
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);

            // find all entities underneath the mouse
            var layerMask = SelectionMode == SelectionType.Tile ? _tileLayerMask : _entityLayerMask;
            int entitiesUnderMouseCount = Physics.RaycastNonAlloc(ray, _objectSelectionRaycastHits, 100f, layerMask);

            if (entitiesUnderMouseCount == 0) return null;

            // find the entity whose contact point from this ray is closest to its center
            (Collider entityCollider, float percentOfMaxHitDistance) entityClosestToRaycast = (null, 0);
            for (int i = 0; i < entitiesUnderMouseCount; i++)
            {
                // get the distance from where the hit occured to the collider's center
                var hitCollider = _objectSelectionRaycastHits[i].collider;
                float hitDistanceToColliderCenter = Vector3.Distance(_objectSelectionRaycastHits[i].point, hitCollider.bounds.center);

                // get the furthest possible distance a hit could be from the collider's center
                var bounds = hitCollider.bounds.size / 2f;
                float maxHitDistanceToOrigin =
                bounds.x * bounds.x +
                bounds.y * bounds.y +
                bounds.z * bounds.z;

                // calculate the relative percentage of how far away the hit was given the maximum distance it could have been
                // (ex. hit distance to center = 0.75, max hit distance = 1.2, percent of max hit = 62.5%)
                var percentOfMaxHitDistance = hitDistanceToColliderCenter * hitDistanceToColliderCenter / maxHitDistanceToOrigin;

                if (entityClosestToRaycast.entityCollider == null || percentOfMaxHitDistance < entityClosestToRaycast.percentOfMaxHitDistance)
                    entityClosestToRaycast = (_objectSelectionRaycastHits[i].collider, percentOfMaxHitDistance);
            }

            return entityClosestToRaycast.entityCollider.GetComponent<EntityCollider>().Root;
        }
    }
}