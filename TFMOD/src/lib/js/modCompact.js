import { writable } from "svelte/store";
/* import { compact } from "$lib/modCompact.js"
    compact.set(true); //Boolean
*/

function compactStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable(false);
	return {
		subscribe,
		set
	};
}
export const compact = compactStore();