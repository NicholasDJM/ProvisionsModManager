import { writable } from "svelte/store";
/* import { page } from "$lib/page.js"
    page.set(1); //Page number
    let currentPage = $page; */

function pageStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable("");
	return {
		subscribe,
		set
	};
}
export const currentPage = pageStore();