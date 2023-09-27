// TODO: Switch away from esbuild and use vite with vite-plugin-web-extension.
import browser from "webextension-polyfill";
import { debug as debug_, settings, template as template_ } from "./defaults.js";
export function length(object: object): number {
	return Object.keys(object).length;
}

export function clamp(min: number, number_: number, max: number): number {
	if (number_ < min) return min;
	if (number_ > max) return max;
	return number_;
}

function template(name: string) {
	return `${template_} [${name}]:`;
}

/**
 * Gets the key's translated value.
 * @param {string} key - Key name.
 * @param {string[]} values - If a string has placeholders, pass them here. Only 9 placeholders may exist on a string.
 * @returns {undefined | string} If a key is passed, returns a translated string.
 */
// eslint-disable-next-line consistent-return
export function locale(key?: string, ...values: string[]): undefined | string {
	if (key) {
		return browser.i18n.getMessage(key, ...values);
	}
	for (const [, element] of document.querySelectorAll<HTMLElement>("[data-string]").entries()) {
		element.textContent = browser.i18n.getMessage(element.dataset.string || "");
	}
}
const storageArea = debug_ ? "local" : "sync";

export function common(name: string, prefix_?: string) {
	if (prefix_ && debug_) console.log(`Prefix for ${name} is set to ${prefix_}`);
	if (debug_) {
		console.warn(template(name), "Debug is turned on.");
	}
	return {log: (...text: unknown[]) => console.log(template(name), ...text),
		error: (...text: unknown[]) => console.error(template(name), ...text),
		warn: (...text: unknown[]) => console.warn(template(name), ...text),
		debug: (variableName: string, variable: unknown) => debug_ && console.log(`${variableName}: ${variable} TYPEOF ${typeof variable} [${name}]`),
		get: async (name: string, prefix = prefix_ || ""): Promise<unknown> => {
			// eslint-disable-next-line unicorn/no-await-expression-member, security/detect-object-injection -- 1. Allows a single const variable to be declared. Otherwise, I'd need a let variable. 2. Not possible, only two values, local, and sync.
			const data = (await browser.storage[storageArea].get([prefix + name]))[prefix + name];
			if (data !== undefined) return JSON.parse(data);
			return settings[prefix + name];
		},
		set: (name: string, data: any, prefix = prefix_ || ""): void => {
			// eslint-disable-next-line security/detect-object-injection -- Not possible, only two values, local, and sync.
			browser.storage[storageArea].set({[prefix + name]: JSON.stringify(data)});
		}
	};
}