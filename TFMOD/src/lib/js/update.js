import { writable } from "svelte/store";
/* import { updateAvailable } from "$lib/update.js"
    update.set(true);
    {$updateAvailable} */

function updateStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable(true);
	return {
		subscribe,
		set
	};
}
export const updateAvailable = updateStore();
