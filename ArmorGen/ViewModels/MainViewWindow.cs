using ArmorGen.Models;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Text.RegularExpressions;
using System.Windows.Input;
using System.Windows.Media;

namespace ArmorGen.ViewModels
{
    public class MainViewModel : INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler PropertyChanged;
        private void OnPropertyChanged([CallerMemberName] string propertyName = null) =>
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));

        private readonly Exporter _exporter = new();
        private ArmorItem _armorItem = new();

        // stores the character attributes in the order they should appear in the json and armor preview
        private readonly List<string> _characterAttributesByIndex;

        public MainViewModel()
        {
            foreach (var kvp in CharacterAttributesByGroup)
                CharacterAttributeGroups.Add(new CharacterAttributeGroup(kvp.Key, kvp.Value, AddCharacterAttribute));

            _characterAttributesByIndex =
            [
                .. CharacterAttributesByGroup["Primary"],
                .. CharacterAttributesByGroup["Secondary"],
                .. CharacterAttributesByGroup["Defense"],
                .. CharacterAttributesByGroup["Magic"],
            ];

            CreateNewItemCommand = new RelayCommand(param => CreateNewItem());
            RemoveCharacterAttributeCommand = new RelayCommand(param => RemoveCharacterAttribute(param as CharacterAttribute));
            ExportToJsonCommand = new RelayCommand(param => _exporter.ExportToJson(_armorItem));
            SelectExportDirectoryCommand = new RelayCommand(param => _exporter.SelectExportDirectory());
            OpenExportDirectoryCommand = new RelayCommand(param => _exporter.OpenExportDirectory());
        }

        public ObservableCollection<string> SlotOptions { get; } = ["Head", "Shoulder", "Chest", "Legs", "Feet"];
        public ObservableCollection<string> ArmorClassOptions { get; } = ["Cloth", "Leather", "Mail", "Plate"];
        public ObservableCollection<string> QualityOptions { get; } = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];
        public ObservableCollection<string> BindingOptions { get; } = ["Bind on Pickup", "Bind on Equip"];

        public Dictionary<string, List<string>> CharacterAttributesByGroup { get; } = new()
        {
            ["Primary"] = ["Stamina", "Strength", "Agility", "Intellect", "Spirit"],
            ["Secondary"] = ["Critical Hit", "Haste", "Hit Rating", "Armor Piercing"],
            ["Defense"] = ["Dodge", "Parry", "Block Chance", "Block Value"],
            ["Magic"] = ["Fire Power", "Frost Power", "Nature Power", "Arcane Power", "Holy Power", "Shadow Power"]
        };

        public ObservableCollection<CharacterAttributeGroup> CharacterAttributeGroups { get; } = [];

        public string ArmorName
        {
            get => _armorItem.Name;
            set
            {
                // name can only include letters, spaces, commas, and apostrophes
                _armorItem.Name = Regex.Replace(value ?? string.Empty, @"[^a-zA-Z\s,'']", "");
                OnPropertyChanged();
                OnPropertyChanged(nameof(IsJsonExportEnabled));
            }
        }

        public Brush ArmorNameColor =>
            SelectedQuality switch
            {
                "Common" => Brushes.White,
                "Uncommon" => new SolidColorBrush(Color.FromRgb(0x1e, 0xff, 0x00)),
                "Rare" => new SolidColorBrush(Color.FromRgb(0x00, 0x70, 0xDD)),
                "Epic" => Brushes.Purple,
                "Legendary" => Brushes.Orange,
                _ => Brushes.White
            };

        public string SelectedSlot
        {
            get => SlotOptions[_armorItem.SlotIndex];
            set { _armorItem.SlotIndex = SlotOptions.IndexOf(value); OnPropertyChanged(); }
        }

        public string SelectedArmorClass
        {
            get => ArmorClassOptions[_armorItem.ArmorClassIndex];
            set { _armorItem.ArmorClassIndex = ArmorClassOptions.IndexOf(value); OnPropertyChanged(); }
        }

        public string SelectedQuality
        {
            get => QualityOptions[_armorItem.QualityIndex];
            set
            {
                _armorItem.QualityIndex = QualityOptions.IndexOf(value);
                OnPropertyChanged();
                OnPropertyChanged(nameof(ArmorNameColor));
            }
        }

        public string SelectedBinding
        {
            get => BindingOptions[_armorItem.BindingIndex];
            set { _armorItem.BindingIndex = BindingOptions.IndexOf(value); OnPropertyChanged(); }
        }

        public ObservableCollection<CharacterAttribute> CharacterAttributes => _armorItem.CharacterAttributes;

        /// <summary> All non-zero attributes that have been added to the item. Formatted as "+{Value} {Attribute Name}". </summary>
        public ObservableCollection<string> FormattedCharacterAttributes
        {
            get
            {
                var attributes = new ObservableCollection<string>();
                foreach (var attr in CharacterAttributes)
                    if (attr.Value > 0)
                        attributes.Add($"+{attr.Value} {attr.Name}");
                return attributes;
            }
        }

        /// <summary> The armor can only be exported if it has a name and all attributes are greater than 0. </summary>
        public bool IsJsonExportEnabled
        {
            get
            {
                if (string.IsNullOrWhiteSpace(_armorItem.Name))
                    return false;

                foreach (var attr in _armorItem.CharacterAttributes)
                    if (!attr.Value.HasValue || attr.Value <= 0)
                        return false;

                return true;
            }
        }

        public ICommand CreateNewItemCommand { get; }
        public ICommand RemoveCharacterAttributeCommand { get; }
        public ICommand ExportToJsonCommand { get; }
        public ICommand SelectExportDirectoryCommand { get; }
        public ICommand OpenExportDirectoryCommand { get; }

        private void CreateNewItem()
        {
            _armorItem = new ArmorItem();
            OnPropertyChanged(null);
        }

        private void RemoveCharacterAttribute(CharacterAttribute attr)
        {
            if (CharacterAttributes.Contains(attr))
            {
                attr.PropertyChanged -= OnCharacterAttributePropertyChanged;
                CharacterAttributes.Remove(attr);

                OnPropertyChanged(nameof(CharacterAttributes));
                OnPropertyChanged(nameof(FormattedCharacterAttributes));
            }
        }

        private void AddCharacterAttribute(string name)
        {
            if (CharacterAttributes.Any(attr => attr.Name == name))
                return;

            var newAttribute = new CharacterAttribute { Name = name };
            newAttribute.PropertyChanged += OnCharacterAttributePropertyChanged;

            int targetIndex = _characterAttributesByIndex.IndexOf(name);
            int insertIndex = 0;

            while (insertIndex < CharacterAttributes.Count)
            {
                var currentAttr = CharacterAttributes[insertIndex];
                int currentIndex = _characterAttributesByIndex.IndexOf(currentAttr.Name);

                if (currentIndex > targetIndex)
                    break;

                insertIndex++;
            }

            CharacterAttributes.Insert(insertIndex, newAttribute);

            OnPropertyChanged(nameof(CharacterAttributes));
            OnPropertyChanged(nameof(FormattedCharacterAttributes));
            OnPropertyChanged(nameof(IsJsonExportEnabled));
        }

        /// <summary> When the value of an attribute changes, update the formatted attributes and check if JSON export is enabled. </summary>
        private void OnCharacterAttributePropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            if (e.PropertyName == nameof(CharacterAttribute.Value))
                OnPropertyChanged(nameof(FormattedCharacterAttributes));

            OnPropertyChanged(nameof(IsJsonExportEnabled));
        }
    }
}
