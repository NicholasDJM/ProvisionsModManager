
export function t(keys: Array<string>, i18n) {
	let results = {};
	for (const key of keys) {
		// @ts-expect-error -- This is correct when used with Svelte.
		results[key] = i18n.t(key);
	}
	return results;
}