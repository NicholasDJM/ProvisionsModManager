import browser from "webextension-polyfill";
import { settings, template as template_ } from "./defaults.js";
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
 * Gets the key's translated value. If the key doesn't exist, return the key text. If no key is passed, attempt to add translated text all elements with a data-string attribute.
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
	for (const [, element] of document.querySelectorAll<HTMLElement>("[data-string]").entries()) {
		element.textContent = browser.i18n.getMessage(element.dataset.string || "");
	}
	return "";
}
/**
 * Appends a text node with translated text to the specified element.
 * @param {HTMLElement} element - The element to which the text node will be appended.
 * @param {string} text - The key or translation string for the desired text.
 * @param {...string} sub - Optional string parameters to replace placeholders in the translated text.
 */
export function appendText(element: HTMLElement, text: string, ...sub: string[]): void {
	element.append(document.createTextNode(locale(text, sub)));
}
/**
 * Creates an array of HTML Elements.
 * @example const [button, container, text] = tag("a", "div", "label")
 * @param {string[]} tags - An array of tag names to create elements for.
 * @returns {HTMLElement[]} An array of created HTML elements.
 */
export function tag(...tags: string[]): HTMLElement[] {
	return tags.map(tag => document.createElement(tag));
}

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
 * @returns {Promise<string>} - A promise that resolves to the unique identifier of the created notification.
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