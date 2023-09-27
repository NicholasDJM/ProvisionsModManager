import { writable } from "svelte/store";
/*	import { keySize } from "$lib/keySize.js"
	keySize.set("16px"); // Number with CSS measurement suffix
	let keySize = $keySize;
*/
export const keySize = writable("24px"),
	keySizeW = writable(),
	keySizeH = writable();