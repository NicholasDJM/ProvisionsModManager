// https://stackoverflow.com/questions/65604254/how-to-make-a-search-filter-in-svelte
// License CC BY-SA 4.0

import { writable, derived } from "svelte/store";

const data: Array<string> = [];

export const term = writable(""),
	items = writable(data),
	filtered = derived([
		term,
		items
	],
	([$term, $items]) => $items.filter(x => x.toLowerCase().includes($term)));