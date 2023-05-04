import { writable } from "svelte/store";
/* import { title } from "$lib/title.js"
    title.set("New Title");
    {$title} */

function titleStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable("");
	return {
		subscribe,
		set
	};
}
export const title = titleStore();