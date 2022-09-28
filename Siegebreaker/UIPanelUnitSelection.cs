using TMPro;
using UnityEngine;
using TowerDefense.Towers;
using TowerDefense.Units;
using TowerDefense.Enemies;
using UnityEngine.UI;

namespace TowerDefense.UI
{
    /// <summary> Displays information about the selected unit and allows the player to upgrade Towers. </summary>
    public class UIPanelUnitSelection : UIPanel
    {
        [Header("Components")]
        [SerializeField] UIController _uiController;
        [SerializeField] GraphicRaycaster _graphicRaycaster;  // disable to prevent the player from interacting with the UI during the closing animation
        [SerializeField] UIPanelDemolishTower _panelDemolishTower;

        [Header("Sections")]
        [SerializeField] UIUnitSelectionPanelHealthBar _uiHealthBar;
        [SerializeField] UIUnitSelectionPanelAttributes _uiAttributes;
        [SerializeField] UIUnitSelectionPanelAbilities _uiAbilities;
        [SerializeField] UIUnitSelectionPanelModifierBar _uiModifierBar;

        [Header("Unit")]
        [SerializeField] TextMeshProUGUI _textUnitName;
        [SerializeField] GameObject _imageUnitDefeated;
        [SerializeField] GameObject _renderTexturePortrait;

        private Unit SelectedUnit => (Unit)SelectedObject;
        private Unit PreviouslySelectedUnit => (Unit)PreviouslySelectedObject;
        public Tower SelectedTower { get; private set; }

        // Populate this unit's attributes, information, abilities, etc.
        protected override void LoadPanel(bool wasNewUnitSelected)
        {
            // don't reload the panel if the same unit was selected
            if (!wasNewUnitSelected) return;

            UnsubscribeFromEvents();

            // deselect the previous unit in case OnPanelCloseFinish was not called
            DeselectUnit();

            // reset tower specific references
            SelectedTower = null;

            // select unit is a tower
            if (SelectedUnit is Tower towerBase)
            {
                SelectedTower = towerBase;

                // tower specific components
                UpdateStatistics();
            }

            // subscribe to the currently selected unit's events
            SubscribeToEvents();

            // update unit name
            _textUnitName.text = SelectedUnit.Info.DisplayName;

            // load attributes and abilities
            _uiHealthBar.LoadUnit(SelectedUnit);
            UpdateAttributes();
            UpdateAbilities();

            // load modifiers UI
            _uiModifierBar.LoadAllModifiers(SelectedUnit);

            // allow UI to be interacted with
            _graphicRaycaster.enabled = true;

            // enable portrait camera
            _uiController.UIPortraitCamera.EnableCamera(SelectedUnit);
            _imageUnitDefeated.SetActive(false);
            _renderTexturePortrait.SetActive(true);
        }

        public override void OnPanelCloseStart()
        {
            // unsubscribe from the attribute events in OnPanelCloseStart as SelectedObject and PreviouslySelectObject will be nulled after it is called
            UnsubscribeFromEvents();

            // rrevent UI from being interacted with (stops tooltips from showing if the mouse is over an ability)
            _graphicRaycaster.enabled = false;
        }

        public override void OnPanelCloseFinish() => DeselectUnit();

        // Deselect the currently selected unit
        private void DeselectUnit()
        {
            // clear ability slots
            ClearAbilities();

            // clear modifiers bar
            _uiModifierBar.ClearModifiers();

            // disable portrait camera
            _uiController.UIPortraitCamera.DisableCamera();

            // null references
            SelectedTower = null;
        }

        // Subscribe to events when this panel is opened
        private void SubscribeToEvents()
        {
            if (SelectedUnit == null) return;

            // shared enemy & tower events
            SelectedUnit.Events.OnCurrentHealthChangedAction += UpdateHealthBar;
            SelectedUnit.Events.OnMaxHealthChangedAction += UpdateHealthBar;
            SelectedUnit.Events.OnAttributeChangedAction += UpdateAttributes;
            SelectedUnit.Events.OnModifierAddedAction += AddModifierIcon;

            // tower only
            if (SelectedUnit is Tower towerBase)
            {
                towerBase.TowerEvents.OnWaveStartAction += UpdateStatistics;
                towerBase.TowerEvents.OnStatisticsChangedAction += UpdateStatistics;
                towerBase.TowerEvents.OnTowerCardSlotStateChangedAction += UpdateAbilities;
            }
            // enemy only
            else if (SelectedUnit is Enemy enemyBase)
            {
                enemyBase.Events.OnDefeatedAction += OnUnitDisabled;
                enemyBase.Events.OnRemovedFromSceneAction += OnUnitDisabled;
            }
        }

        // Unsubscribe from any events when the panel is closed
        private void UnsubscribeFromEvents()
        {
            if (PreviouslySelectedUnit == null) return;

            // shared enemy & tower events
            PreviouslySelectedUnit.Events.OnCurrentHealthChangedAction -= UpdateHealthBar;
            PreviouslySelectedUnit.Events.OnMaxHealthChangedAction -= UpdateHealthBar;
            PreviouslySelectedUnit.Events.OnAttributeChangedAction -= UpdateAttributes;
            PreviouslySelectedUnit.Events.OnModifierAddedAction -= AddModifierIcon;

            // tower only
            if (PreviouslySelectedUnit is Tower towerBase)
            {
                towerBase.TowerEvents.OnWaveStartAction -= UpdateStatistics;
                towerBase.TowerEvents.OnStatisticsChangedAction -= UpdateStatistics;
                towerBase.TowerEvents.OnTowerCardSlotStateChangedAction -= UpdateAbilities;
            }
            // enemy only
            else if (PreviouslySelectedUnit is Enemy enemyBase)
            {
                enemyBase.Events.OnDefeatedAction -= OnUnitDisabled;
                enemyBase.Events.OnRemovedFromSceneAction -= OnUnitDisabled;
            }
        }

        // Update Attributes
        private void UpdateAttributes() => _uiAttributes.UpdateUnitAttributes(SelectedUnit);

        // Health Bar
        private void UpdateHealthBar() => _uiHealthBar.UpdateHealthBar(SelectedUnit);

        // Abilities
        private void UpdateAbilities() => _uiAbilities.UpdateUnitAbilities(SelectedUnit);

        // Clear Abilities
        private void ClearAbilities() => _uiAbilities.ClearAbilities();

        // Reload the tower's stats into the stats module
        public void UpdateStatistics()
        {
            var currentWaveStats = SelectedTower.TowerStats.GetCurrentWaveStats();
            var previousWaveStats = SelectedTower.TowerStats.GetPreviousWaveStats();
            var levelStats = SelectedTower.TowerStats.GetLevelStats();
            _uiAbilities.UpdateStats(currentWaveStats, previousWaveStats, levelStats);
        }

        // Add a modifier icon to the modifier bar
        public void AddModifierIcon(Modifier modifier) => _uiModifierBar.AddModifier(modifier, SelectedUnit.Modifiers.ActiveModifiers.IndexOf(modifier));

        // Called from the demolish button
        public void OnButtonToggleDemolishPanel() => _panelDemolishTower.TogglePanel(SelectedTower);

        // The selected unit is disabled while the selection panel is open
        private void OnUnitDisabled()
        {
            _uiHealthBar.SetHealthBarUnitDestroyed();
            UpdateAbilities();
            _uiModifierBar.ClearModifiers();
            _imageUnitDefeated.SetActive(true);
            _renderTexturePortrait.SetActive(false);    // disable the portrait when an enemy dies

            UnsubscribeFromEvents();
        }
    }
}
