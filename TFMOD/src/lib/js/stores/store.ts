import { writable } from "svelte/store";

/* eslint-disable sonarjs/no-identical-functions -- All functions are unique. */

function installedStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Update is required to exist, even if not used.
	const { subscribe, set, update } = writable({sdk: false, tf2: false, tf2c: false, op: false, pf2: false});
	return {
		subscribe,
		set
	};
}

export const installedMods = installedStore();

function pageStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable("");
	return {
		subscribe,
		set
	};
}
export const currentPage = pageStore();

function directionStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable(true);
	return {
		subscribe,
		set
	};
}
export const direction = directionStore();

function tabStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable("");
	return {
		subscribe,
		set
	};
}
export const currentSettingsTab = tabStore();

function backStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable(false);
	return {
		subscribe,
		set
	};
}
export const backButton = backStore();

function urlBackStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable(false);
	return {
		subscribe,
		set
	};
}
export const backUrl = urlBackStore();

function titleStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable("");
	return {
		subscribe,
		set
	};
}
export const title = titleStore();

function updateStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable(true);
	return {
		subscribe,
		set
	};
}
export const updateAvailable = updateStore();

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