/* TODO: Finish re-writing the get and set functions, and incorporate them into common.ts
	Needs to handle all <input> types.
	Radio is a little tricky. just requires more logic when loading. Loop thru all matching names, then set one that matches the value.
	File input might be too much. All of this is already out of scope for this project, but I want this robust to release on it own.
*/
/**
 * Save data to extension storage.
 * @param key {string} - Name of the key to store the data under.
 * @param data {unknown} - The actual data. Will be passed to JSON.stringify.
 * @param local {boolean} - Where to store the data, in sync by default, or in local.
 */
export function set(key: string, data: unknown, local = false): void {
	if (!key) throw new Error("Missing key");
	if (!data) throw new Error("Missing data");
	if (local) {
		browser.storage.local.set({[key]: JSON.stringify(data)});
	} else {
		browser.storage.sync.set({[key]: JSON.stringify(data)});
	}
}
export interface GetOptions {
	default?: string,
	local?: boolean
}
/**
 * Get data from extension storage.
 * @param key {string} - The name of the key retrieve data from.
 * @param options {GetOptions}
 * * default - If no data is saved, we return this.
 * * local - Where to store the data, in sync by default, or in local.
 * @returns {unknown|undefined} Whatever was saved. If there is nothing saved, returns undefined, unless default is defined in options, returns default.
 */
export async function get(key: string, options?: GetOptions): Promise<unknown> {
	const options_ = {
		local: false,
		...options
	};
	if (!key) throw new Error("Missing key");
	let keyWithDefaults: string | Record<string, unknown> = key;
	if (options_.default) {
		keyWithDefaults = {[key]: options_.default};
	}
	const data = await (options_.local ? browser.storage.local.get(keyWithDefaults) : browser.storage.sync.get(keyWithDefaults))[key];
	if (data !== undefined) {
		return JSON.parse(data);
	}
	return undefined;
}