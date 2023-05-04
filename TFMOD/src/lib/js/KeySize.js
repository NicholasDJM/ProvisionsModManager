/* eslint-disable unicorn/filename-case */
import { writable } from "svelte/store";
/*	import { keySize } from "$lib/keySize.js"
	keySize.set("16px"); // Number with CSS measurement suffix
	let keySize = $keySize;
*/

function sizeStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable("24px");
	return {
		subscribe,
		set
	};
}
export const keySize = sizeStore();

function sizeWStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable();
	return {
		subscribe,
		set
	};
}
export const keySizeW = sizeWStore();

function sizeHStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable();
	return {
		subscribe,
		set
	};
}
export const keySizeH = sizeHStore();