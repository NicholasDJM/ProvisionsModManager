import { writable } from "svelte/store";
/* import { backButton } from "$lib/subpage.js"
    page.set(true); //Should we display a back button?
    let backButton = $backButton; */

function backStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable(false);
	return {
		subscribe,
		set
	};
}
export const backButton = backStore();

// eslint-disable-next-line sonarjs/no-identical-functions -- These are fancy variables, they are different.
function urlBackStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable(false);
	return {
		subscribe,
		set
	};
}
export const backUrl = urlBackStore();