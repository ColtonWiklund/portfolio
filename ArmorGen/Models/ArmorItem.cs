using System.Collections.ObjectModel;

namespace ArmorGen.Models
{
    public class ArmorItem
    {
        public string Name { get; set; } = string.Empty;
        public int SlotIndex { get; set; }
        public int ArmorClassIndex { get; set; }
        public int QualityIndex { get; set; }
        public int BindingIndex { get; set; }

        /// <summary> The character attributes that have been added to the item. </summary>
        public ObservableCollection<CharacterAttribute> CharacterAttributes { get; set; } = [];
    }
}
