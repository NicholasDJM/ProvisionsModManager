import { writable } from "svelte/store";
/* import { direction } from "$lib/direction.js"
    direction.set(false);
	// Direction is for when we want to use auto text direction.
*/

function directionStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
	const { subscribe, set, update } = writable(true);
	return {
		subscribe,
		set
	};
}
export const direction = directionStore();