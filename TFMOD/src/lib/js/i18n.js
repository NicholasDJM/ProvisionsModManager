import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Fluent from "i18next-fluent";
// @ts-expect-error Can't do anything about missing types.
import FluentBackend from "i18next-fluent-backend";
const detectionOptions = {
		order: ["localStorage", "navigator"],
		lookupLocalStorage: "language"
	},
	fluentOptions = {};
// @ts-expect-error I don't what TypeScript complaining about, it works.
i18next.use(LanguageDetector).use(Fluent).use(FluentBackend).init({
	ns: ["main", "settings", "sources", "utils", "troubleshoot", "wizard", "intro", "common", "pyroland", "sounds"],
	defaultNS: "common",
	supportedLng: ["en", "fr"],
	detection: detectionOptions,
	i18nFormat: fluentOptions,
	interpolation: {
		escapeValue: false
	},
	fallbackLng: {
		default: ["en"]
	}
});

export const i18n = createI18nStore(i18next);
// FIXME: every reference to load a string must be wrapped in a $: {}