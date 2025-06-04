using ArmorGen.Models;
using Microsoft.Win32;
using System.Diagnostics;
using System.IO;
using System.Text.Json;
using System.Windows;

namespace ArmorGen.ViewModels
{
    /// <summary> Handles exporting the armor item to a JSON. </summary>
    internal class Exporter
    {
        private string _exportDirectory;

        public Exporter()
        {
            _exportDirectory = Path.Combine(Directory.GetCurrentDirectory(), "export");
            Directory.CreateDirectory(_exportDirectory);
        }

        /// <summary> Export the armor data to a JSON at the selected export path. </summary>
        public void ExportToJson(ArmorItem armorItem)
        {
            var saveFileDialog = new SaveFileDialog
            {
                Title = "Export Armor Data to JSON",
                Filter = "JSON Files|*.json",
                DefaultExt = ".json",
                InitialDirectory = _exportDirectory,
                FileName = armorItem.Name.Replace(" ", "_").ToLower()
            };

            string json = JsonSerializer.Serialize(armorItem, new JsonSerializerOptions { WriteIndented = true });
            if (saveFileDialog.ShowDialog() == true)
            {
                File.WriteAllText(saveFileDialog.FileName, json);
                MessageBox.Show("Export successful.", "Export JSON", MessageBoxButton.OK, MessageBoxImage.Information);
            }
        }

        // TODO: Improve directory selection to allow folder selection instead of file selection
        /// <summary> Select an export directory for the exported data. </summary>
        public void SelectExportDirectory()
        {
            var dialog = new OpenFileDialog
            {
                CheckFileExists = false,
                CheckPathExists = true,
                FileName = "Select Folder"
            };
            if (dialog.ShowDialog() == true)
            {
                var selectedPath = Path.GetDirectoryName(dialog.FileName);
                if (selectedPath != null)
                {
                    _exportDirectory = selectedPath;
                }
            }
        }

        public void OpenExportDirectory()
        {
            if (Directory.Exists(_exportDirectory))
            {
                Process.Start(new ProcessStartInfo
                {
                    FileName = _exportDirectory,
                    UseShellExecute = true
                });
            }
        }
    }
}
