import { shell } from "@tauri-apps/api";
import { writable } from "svelte/store";
/*	import { dropdown } from "$lib/navDropdown.js"
 	dropdown.set([
		{
			text: "Feedback",
			function: () => {
				// Do something...
			},
			keyFunction: (event) => {
				if (event.key === "Enter") {
					// Do something...
				}
			}
		}
	]);
	{$dropdown}
*/

function dropdownStore() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		set
	};
}
export const dropdown = dropdownStore();
export const feedback = {
	text: "Feedback",
	function: () => {
		shell.open("https://github.com"); //TODO: Setup feedback URL
	},
	keyFunction: (/** @type {{ key: string; }} */ event) => {
		if (event.key === "Enter") {
			shell.open("https://github.com"); //TODO: Setup feedback URL
		}
	}
};