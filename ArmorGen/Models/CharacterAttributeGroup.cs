namespace ArmorGen.Models
{
    public class CharacterAttributeGroup
    {
        public string GroupName { get; }
        public List<string> Attributes { get; }

        private readonly Action<string> _addSecondaryAttributeAction;

        public string SelectedAttribute
        {
            get => null;
            set => _addSecondaryAttributeAction?.Invoke(value);
        }

        public CharacterAttributeGroup(string name, List<string> attributes, Action<string> addSecondaryAttributeAction)
        {
            GroupName = name;
            Attributes = attributes;
            SelectedAttribute = "";
            _addSecondaryAttributeAction = addSecondaryAttributeAction;
        }
    }
}
