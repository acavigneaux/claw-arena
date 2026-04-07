"use client";

import { useState, useEffect } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Toggle from "../../components/Toggle";
import Button from "../../components/Button";
import { useTheme } from "../../components/ThemeProvider";

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const [settings, setSettings] = useState({
    projectName: "Claw Arena",
    language: "fr",
    darkMode: true,
    notifications: true,
    autoSave: true,
    apiUrl: "https://api.example.com",
  });
  const [saved, setSaved] = useState(false);

  // Sync darkMode toggle with actual theme
  useEffect(() => {
    setSettings((prev) => ({ ...prev, darkMode: theme === "dark" }));
  }, [theme]);

  const handleDarkModeChange = (checked: boolean) => {
    setSettings({ ...settings, darkMode: checked });
    if (checked !== (theme === "dark")) {
      toggleTheme();
    }
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Settings
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Configurez votre application
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Général">
          <div className="space-y-4">
            <Input
              id="projectName"
              label="Nom du projet"
              value={settings.projectName}
              onChange={(e) =>
                setSettings({ ...settings, projectName: e.target.value })
              }
            />
            <Select
              id="language"
              label="Langue"
              options={[
                { value: "fr", label: "Français" },
                { value: "en", label: "English" },
                { value: "es", label: "Español" },
              ]}
              value={settings.language}
              onChange={(e) =>
                setSettings({ ...settings, language: e.target.value })
              }
            />
            <Input
              id="apiUrl"
              label="URL de l'API"
              value={settings.apiUrl}
              onChange={(e) =>
                setSettings({ ...settings, apiUrl: e.target.value })
              }
              placeholder="https://..."
            />
          </div>
        </Card>

        <Card title="Préférences">
          <div className="space-y-5">
            <Toggle
              id="darkMode"
              label="Mode sombre"
              checked={settings.darkMode}
              onChange={handleDarkModeChange}
            />
            <Toggle
              id="notifications"
              label="Notifications"
              checked={settings.notifications}
              onChange={(checked) =>
                setSettings({ ...settings, notifications: checked })
              }
            />
            <Toggle
              id="autoSave"
              label="Sauvegarde automatique"
              checked={settings.autoSave}
              onChange={(checked) =>
                setSettings({ ...settings, autoSave: checked })
              }
            />
          </div>
        </Card>
      </div>

      <div className="flex items-center gap-4">
        <Button onClick={handleSave}>Sauvegarder</Button>
        {saved && (
          <span className="text-sm font-medium text-green-600">
            Paramètres sauvegardés !
          </span>
        )}
      </div>
    </div>
  );
}
