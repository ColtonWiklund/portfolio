using UnityEngine;

namespace TowerDefense.UI
{
    /// <summary>
    /// The base class for all panels (UI that can be opened and closed).
    /// The opening and closing of panels is handled by UIPanelController.
    /// </summary>
    public class UIPanel : MonoBehaviour
    {
        [Header("Components")]
        [SerializeField] Animator _animator;
        public Animator Animator => _animator;

        [Header("Layer Index")]
        [Tooltip("The layer this panel occupies relative to ther panels. Only one panel per Panel Index can be open at once.")]
        [SerializeField] int _panelLayerIndex;
        public int PanelLayerIndex => _panelLayerIndex;

        [Header("Animations")]
        [SerializeField] bool _hasAnimations;
        public bool HasAnimations => _hasAnimations;

        [Header("SFX")]
        [Tooltip("If True, no SFX will be played when this panel is opened. Used for when panels are opened automatically (ex. Level Over panel).")]
        [SerializeField] protected bool _dontPlaySFXOnOpen;
        public bool DontPlaySFXOnOpen => _dontPlaySFXOnOpen;
        [Tooltip("If True, no SFX will be played when this panel is closed. Used for when panels have their own closing SFX (ex. Divination panel).")]
        [SerializeField] protected bool _dontPlaySFXOnClose;
        public bool DontPlaySFXOnClose => _dontPlaySFXOnClose;

        /// <summary> Where the panel should be positioned relative to its anchors. </summary>
        public Vector2? PanelAnchorPosition { get; private set; }

        // store the position of where the panel is by default, it will be returned to this position after any closing animations play
        // (this assumes the panel will be active at least once to initialize this value before it is closed)
        private void Awake() => PanelAnchorPosition = GetComponent<RectTransform>().anchoredPosition;

        /// <summary> 
        /// (Optional) Keep track of what object this panel loaded last time the panel was open. Used for determining when to close panels in higher layers.
        /// </summary>
        public Object PreviouslySelectedObject { get; private set; }

        /// <summary>
        /// (Optional) The panel will load the relevant information from this object.
        /// </summary>
        public Object SelectedObject { get; private set; }

        /// <summary> Reset the Selected Object back to null. </summary>
        public void ResetSelectedObjects()
        {
            SelectedObject = null;
            PreviouslySelectedObject = null;
        }

        /// <summary>
        /// Open this panel. Should be used instead of using the UIPanelController directly so the selected objects/load panel functions update correctly.
        /// </summary>
        public void OpenPanel() => OpenPanel(null);

        /// <summary> Open this panel and pass what object this panel will load. </summary>
        public void OpenPanel(Object objectToLoad)
        {
            SelectedObject = objectToLoad;

            // open or toggle this panel
            bool isDifferentPanel = UIPanelController.OpenPanel(this);
            bool isDifferentObject = SelectedObject != PreviouslySelectedObject;

            // call each function overload as a panel will only implement one
            LoadPanel();
            LoadPanel(isDifferentObject);
            LoadPanel(isDifferentPanel, isDifferentObject);

            PreviouslySelectedObject = objectToLoad;
        }

        /// <summary> Open this panel if it is closed, or close it if it is open. </summary>
        public void TogglePanel() => TogglePanel(null);

        /// <summary> Open this panel if it is closed, or close it if it is open. </summary>
        public void TogglePanel(Object objectToLoad)
        {
            if (gameObject.activeSelf)
                ClosePanel();
            else
                OpenPanel(objectToLoad);
        }

        /// <summary> What happens when this panel is opened or reloaded. </summary>
        protected virtual void LoadPanel() { }

        /// <summary> What happens when this panel is opened or reloaded. </summary>
        protected virtual void LoadPanel(bool isDifferentObject) { }

        /// <summary> What happens when this panel is opened or reloaded. </summary>
        protected virtual void LoadPanel(bool isDifferentPanel, bool isDifferentObject) { }

        /// <summary> Close this panel. Shorthand function for calling the UIPanelController with this panel. </summary>
        public void ClosePanel() => UIPanelController.ClosePanel(this);

        /// <summary> The panel has started its closing animation. </summary>
        public virtual void OnPanelCloseStart() { }

        /// <summary> When the closing animation is finished, disable the panel game object. </summary>
        public void OnAnimationEventPanelCloseFinish()
        {
            gameObject.SetActive(false);

            // reset the panel's transform after it has been moved by the closing animation, called after the closing animation finishes.
            var panelRect = GetComponent<RectTransform>();
            panelRect.anchoredPosition = PanelAnchorPosition.Value;
            panelRect.localScale = new Vector3(1f, 1f, 1f);

            OnPanelCloseFinish();
        }

        /// <summary>
        /// The panel has finished its closing animation (or no animation was played and this was called after OnPanelCloseStart() on the same frame)
        /// </summary>
        public virtual void OnPanelCloseFinish() { }
    }
}
