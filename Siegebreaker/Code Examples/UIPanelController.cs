using System.Collections.Generic;
using UnityEngine.SceneManagement;

namespace TowerDefense.UI
{
    /// <summary>
    /// Coorindates the opening and closing of panels.
    /// Several layers of panels can be displayed at once, but only one panel per layer can be displayed.
    /// The layer a panel occupies is determined by its PanelLayerIndex.
    /// </summary>
    public static class UIPanelController
	{
		// Contains all open panels, organized by their Panel Layer Index:
		// ActivePanels[0] - Layer 0 - Intended for panels that require object selection (only one object can be selected at a time)
		// ActivePanels[1] - Layer 1 - For supporting panels to the layer 0 panel (ex. tower roll) or generic supporting panels (ex. card collection)
		// ActivePanels[2] - Layer 2 - Game Menu
		// ActivePanels[3] - Layer 3 - Panels opened from Game Menu (game difficulty, options, etc)
		public static List<UIPanel> ActivePanels { get; private set; } = new List<UIPanel>() { null, null, null, null };  // initialize with empty layers

		private static bool _isInitialized = false;
		public static void Initialize()
		{
			if (_isInitialized) return;
			_isInitialized = true;

            // subscribe to the ActiveSceneChanged event to reset the panel controller when a new scene is loaded
            SceneManager.activeSceneChanged += ResetPanelController;
		}

        // When the scene changes (level loaded, exit to overworld), removing any active panels from the panel controller.
        private static void ResetPanelController(Scene lastScene, Scene newScene)
        {
            for (int i = 0; i < ActivePanels.Count; i++)
                ActivePanels[i] = null;
        }

        /// <summary>
        /// Show this panel, hiding the previously open panel on this layer if there is one. Returns True if a new panel was opened, or False if it was the same panel.
        /// </summary>
        public static bool OpenPanel(UIPanel newPanel)
		{
			// always hide the tooltip when a panel changes
			if (UITooltip.Instance != null)
				UITooltip.Instance.HideTooltipImmediate();

			// opening a panel resets the selection mode back to entity
			Player.PlayerMouseInput.EnterEntitySelectionMode();

			// if this panel is already open, check if it should be re-opened with a different selected object
			if (ActivePanels[newPanel.PanelLayerIndex] == newPanel)
			{
                // if a different object is selected, close any higher layer panels (do nothing if the same object was selected)
                if (newPanel.SelectedObject != null && newPanel.SelectedObject != newPanel.PreviouslySelectedObject)
				{
					ClosePanelsFromLayer(newPanel.PanelLayerIndex + 1, true);

					// play a different SFX when the same panel loads a different object
					SoundManager.PlayClickMouseSelect();
				}

				// the same panel was re-opened
                return false;
			}
			// this panel is not already open
			else
			{
                newPanel.gameObject.SetActive(true);

                // close any open panels from on this layer or higher
                ClosePanelsFromLayer(newPanel.PanelLayerIndex, true);

                // play the opening animations for this panel
                if (newPanel.HasAnimations)
                {
                    newPanel.Animator.ResetTrigger("close");
                    newPanel.Animator.ResetTrigger("open");
                    newPanel.Animator.SetTrigger("open");
                }

                // set this panel as the active panel on this layer
                ActivePanels[newPanel.PanelLayerIndex] = newPanel;

                // play opening SFX
                if (!newPanel.DontPlaySFXOnOpen)
                    SoundManager.PlayPanelOpen();

                return true;
            }
		}

		/// <summary>
		/// Hide all panels from the passed starting layer and higher.
		/// The closing animation and SFX should not play if another panel is being opened to replace it.
		/// Returns True if a panel was closed on the starting layer.
		/// </summary>
		public static bool ClosePanelsFromLayer(int startinglayerIndex, bool hasReplacementPanel)
		{
			bool panelOnStartingLayer = false;
			bool playClosingSFX = false;

			// when a panel is closed, it closes all panels on higher layers
			bool wasPanelClosed = false;
			for (int i = startinglayerIndex; i < ActivePanels.Count; i++)
			{
				// there is no panel on this layer
				if (ActivePanels[i] == null) continue;

				// keep track of whether a panel was actually closed
				wasPanelClosed = true;

				// keep track of whether to play closing SFX
				if (!ActivePanels[i].DontPlaySFXOnClose)
					playClosingSFX = true;

				// notify any derived classes that this panel is closing
				ActivePanels[i].OnPanelCloseStart();

				// reset what object this panel was selecting (called after OnPanelCloseStart() so it can use the selected object reference)
				ActivePanels[i].ResetSelectedObjects();

                // start the panel closing animation
                if (ActivePanels[i].HasAnimations)
                    ActivePanels[i].Animator.SetTrigger("close");
                // manually call the panel closing animation event to immediately close the panel
                else
                    ActivePanels[i].OnAnimationEventPanelCloseFinish();

                if (i == startinglayerIndex) panelOnStartingLayer = true;

				ActivePanels[i] = null;
			}

			// hide the tooltip and play the closing SFX if the panel is not being replaced
			if (!hasReplacementPanel && wasPanelClosed)
			{
				if (UITooltip.Instance != null)
					UITooltip.Instance.HideTooltipImmediate();

				if (playClosingSFX)
					SoundManager.PlayPanelClose();
			}

			return panelOnStartingLayer;
		}

		/// <summary> Manually close the specified panel (will also close any panels on higher layers). </summary>
		public static void ClosePanel(UIPanel panel)
		{
			if (!ActivePanels.Contains(panel)) return;
			ClosePanelsFromLayer(panel.PanelLayerIndex, false);
		}

		/// <summary> Close the highest layer panel. Returns True if all panels are closed. </summary>
		public static bool CloseHighestLayerPanel()
		{
			for (int i = ActivePanels.Count - 1; i >= 0; i--)
				if (ClosePanelsFromLayer(i, false))
					break;  // stop the loop if a panel was closed

			return ActivePanels[0] == null;
		}

		/// <summary> Close all active panels and play their closing animations. </summary>
		public static void CloseAllPanels() => ClosePanelsFromLayer(0, false);
	}
}
