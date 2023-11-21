import browser from "webextension-polyfill";
import { settings, template as template_ } from "@lib/defaults.js";
import "emmetjs";
//@ts-expect-error window.Emmet is created after importing "emmetjs".
const emmet_ = window.Emmet;
/**
 * @param {string} abbreviation - Emmet abbreviation. See https://docs.emmet.io/abbreviations/syntax/. Attributes must be encased in round brackets not square brackets.
 * @param {boolean?} returnOnlyHTML - If false (default), return the constructed element. If true, return a HTML string.
 * @param {string[]?} substitutions - See https://www.npmjs.com/package/emmetjs#templating.
 * @returns {HTMLElement | string}
 */
export const emmet = emmet_ as {
	(abbreviation: string, returnOnlyHTML?: false, substitutions?: string[]): HTMLElement;
	(abbreviation: string, returnOnlyHTML: true, substitutions?: string[]): string;
};
/**
 * Calculates the length of an object by counting its enumerable properties.
 * @param {object} object - The object to calculate the length of.
 * @returns {number} The number of enumerable properties in the object.
 */
export function length(object: object): number {
	return Object.keys(object).length;
}

/**
 * Clamps a number between a minimum and maximum value.
 * @param {number} min - The minimum value to clamp to.
 * @param {number} number_ - The number to be clamped.
 * @param {number} max - The maximum value to clamp to.
 * @returns {number} The clamped number.
 */
export function clamp(min: number, number_: number, max: number): number {
	if (number_ < min) return min;
	if (number_ > max) return max;
	return number_;
}

function template(name: string) {
	return `${template_} [${name}]:`;
}
/**
 * Gets the key's translated value. If the key doesn't exist, return the key text.
 *
 * If no key is passed, attempt to add translated text to all elements with a data-locale attribute.
 * @param {string} key - Key name.
 * @param {string[] | string} [sub] - If a string has placeholders, pass them here. Only 9 placeholders may exist on a string.
 * @returns {string} If a key is passed, returns a translated string.
 */
export function locale(key?: string, sub?: string[] | string): string {
	if (key) {
		if (typeof sub === "string") sub = [sub];
		const maxLength = 9; // i18n.getMessage will throw an error if there is more than 9 substitutions.
		sub?.splice(maxLength);
		return browser.i18n.getMessage(key, sub) || key;
	}
	for (const [, element] of document.querySelectorAll<HTMLElement>("[data-locale]").entries()) {
		const text = browser.i18n.getMessage(element.dataset.locale || "");
		if (text) element.textContent = text;
	}
	return "";
}
function appendText_(element: HTMLElement | null, text: string, ...sub: string[]): HTMLElement | undefined {
	if (element) {
		element.append(document.createTextNode(locale(text, sub)));
		return element;
	}
	return undefined;
}
/**
 * Appends a text node with translated text to the specified element.
 * @param {HTMLElement} element - The element to which the text node will be appended.
 * @param {string} text - The translation key for the desired text.
 * @param {...string} sub - Optional string parameters to replace placeholders in the translated text.
 * @returns {HTMLElement} Returns the element.
 */
export const appendText = appendText_ as {
	(element: HTMLElement, text: string, ...sub: string[]): HTMLElement;
	(element: null): undefined;
};

/**
 * Checks if a value or values can be converted to a number or is a number.
 * @param {...unknown} values - Values to check.
 * @returns boolean
 */
export function isNumber(...values: unknown[]) {
	let result = true;
	for (const value of values) {
		if (typeof value !== "number" && typeof Number(value) !== "number") {
			result = false;
		}
	}
	return result;
}

/**
 * Create a notification with a translation key and optional substitutions.
 *
 * @param {string} key - The translation key for the notification message.
 * @param {string[] | string} [sub] - Optional substitutions to be applied to the message. Up to nine substitutions are allowed. The array will be truncated to 9 items.
 * @returns {Promise<string>} A promise that resolves to the unique identifier of the created notification.
 */
export async function notify(key: string, sub?: string[] | string): Promise<string> {
	return await browser.notifications.create("notification", {
		type: "basic",
		title: browser.i18n.getMessage("extensionName"),
		message: locale(key, sub) || ""
	});
}

const manifest = browser.runtime.getManifest();
/**
 * Retrieves an array of website origins from the manifest file.
 * @returns {string[]} An array of website origins.
 */
export function getOrigins(): string[] {
	const scripts = manifest.content_scripts;
	return scripts ? scripts.flatMap(value => value.matches) : [];
}
/**
 * Checks if the given website origins are allowed by the browser's permissions.
 * @param {string[] | string} origins - The website origins to check.
 * @returns {Promise<boolean>} A Promise that resolves to a boolean indicating if the origins are allowed.
 */
export async function originAllowed(origins: string[] | string): Promise<boolean> {
	if (typeof origins === "string") origins = [origins];
	return await browser.permissions.contains({ origins });
}
/**
 * Requests permissions for the given website origins.
 * @param {string | string[]} origins - The website origins to request permissions for.
 * @returns {Promise<boolean>} A Promise that resolves to a boolean indicating if the permissions were granted.
 */
export async function request(origins: string | string[]): Promise<boolean> {
	if (typeof origins === "string") origins = [origins];
	return await browser.permissions.request({ origins });
}
/**
 * Revokes permissions for the given website origins.
 * @param {string | string[]} origins - The website origins to revoke permissions for.
 * @returns {Promise<boolean>} A Promise that resolves to a boolean indicating if the permissions were removed.
 */
export async function revoke(origins: string | string[]): Promise<boolean> {
	if (typeof origins === "string") origins = [origins];
	return await browser.permissions.remove({ origins });
}
const storageArea = __DEBUG__ ? "local" : "sync";

/**
 * Returns some common functions. Logging functions will have name prefixed.
 * Getter and setter functions will have prefix prepended to keys, which can be overridden on a case by case basis.
 */
export function common(name: string, prefix_?: string) {
	if (prefix_ && __DEBUG__) console.log(`Prefix for ${name} is set to ${prefix_}`);
	if (__DEBUG__) {
		console.warn(template(name), "Debug is turned on.");
	}
	return {log: (...text: unknown[]) => console.log(template(name), ...text),
		error: (...text: unknown[]) => console.error(template(name), ...text),
		warn: (...text: unknown[]) => console.warn(template(name), ...text),
		debug: (variableName: string, variable: unknown) => __DEBUG__ && console.log(`${variableName}: ${variable} TYPEOF ${typeof variable} [${name}]`),
		get: async (name: string, prefix = prefix_ || ""): Promise<undefined | unknown> => {
			// eslint-disable-next-line unicorn/no-await-expression-member, security/detect-object-injection -- 1. Allows a single const variable to be declared. Otherwise, I'd need a let variable. 2. Not possible, only two values, local, and sync.
			const data = (await browser.storage[storageArea].get([prefix + name]))[prefix + name];
			if (data !== undefined) return JSON.parse(data);
			return settings[prefix + name];
		},
		getDefault: (name: string, prefix: string = prefix_ || ""): string | number | boolean | undefined => settings[prefix + name],
		set: (name: string, data: unknown, prefix = prefix_ || ""): void => {
			// eslint-disable-next-line security/detect-object-injection -- Not possible, only two values, local, and sync.
			browser.storage[storageArea].set({[prefix + name]: JSON.stringify(data)});
		}
	};
}

/**
 * Iterates over the keys and values of an object and invokes a callback function for each iteration.
 *
 * @param {{[key: string]: unknown}} object - The object to iterate over.
 * @param {(key: string, value: unknown) => void} callback - The callback function to be invoked for each key-value pair.
 */
export function each(object: {[key: string]: unknown}, callback: (key: string, value: unknown) => void): void {
	for (const [key, value] of Object.entries(object)) {
		callback(key, value);
	}
}


export const firefox = __BROWSER__ === "firefox",
	chrome = __BROWSER__ === "chrome",
	edge = __BROWSER__ === "edge",
	opera = __BROWSER__ === "opera",
	chromium = edge || chrome || opera;
