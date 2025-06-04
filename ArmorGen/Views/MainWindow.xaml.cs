using ArmorGen.ViewModels;
using System.Windows;

namespace ArmorGen
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            DataContext = new MainViewModel();
        }
    }
}
