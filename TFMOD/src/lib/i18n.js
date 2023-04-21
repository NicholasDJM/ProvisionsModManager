import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";
i18next.init({
	lng: "en",
	resources: {
		en: {
			translation: {
				"skipToContent": "Skip to Content",
				"pageModsTitle": "Installed Mods",
				"pageUtilitiesTitle": "Utilities",
				"pageSettingsTitle": "Settings",
				"pageTroubleshootTitle": "Troubleshooting Guides",
				"pageWizardTitle": "Mod Creator",
				"settingsMainTabTitle": "App",
				"settingsUpdateTabTitle": "Update",
				"updateNotice": "Update Available",
				"settingsLicenseTabTitle": "Licenses",
				"settingsAboutTabTitle": "About",
				"settingsExtensionTabTitle": "Web Extension",
				"extensionPrompt": "Install Web Extension",
				"pageSourcesTitle": "Download New Mods"
			}
		}
	}
});

export const i18n = createI18nStore(i18next);