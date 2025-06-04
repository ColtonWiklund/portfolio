using System.ComponentModel;

namespace ArmorGen.Models
{
    /// <summary> Represents character attribute by name and integer value. </summary>
    public class CharacterAttribute : INotifyPropertyChanged
    {
        /// <summary> The name of the attribute (ex. "Stamina", "Strength", etc.) </summary>
        public required string Name { get; set; }

        /// <summary> The value of the attribute (ex. 8, 15, etc.) </summary>
        private int? _value;
        public int? Value
        {
            get => _value;
            set
            {
                _value = value > 0 ? value : _value;
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(Value)));
            }
        }

        public event PropertyChangedEventHandler? PropertyChanged;
    }
}

