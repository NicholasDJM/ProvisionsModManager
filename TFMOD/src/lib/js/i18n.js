import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Fluent from "i18next-fluent";
import FluentBackend from "i18next-fluent-backend";
const detectionOptions = {
		order: ["localStorage", "navigator"],
		lookupLocalStorage: "language"
	},
	fluentOptions = {};
i18next.use(LanguageDetector).use(Fluent).use(FluentBackend).init({
	ns: ["common", "main", "intro"],
	defaultNS: "main",
	supportedLng: ["en", "fr"],
	detection: detectionOptions,
	i18nFormat: fluentOptions,
	interpolation: {
		escapeValue: false
	}
});

export const i18n = createI18nStore(i18next);
// FIXME: every reference to laod a string must be wrapped in a $: {}