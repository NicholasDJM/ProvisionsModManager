import { writable } from "svelte/store";
/* import { currentSettingsTab } from "$lib/settingsTab.js"
    currentSettingsTab.set("main");
    {$currentSettingsTab} */

function tabStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable("");
	return {
		subscribe,
		set
	};
}
export const currentSettingsTab = tabStore();