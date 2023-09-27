import { debug as debug_ } from "./lib/defaults.js";
import { common, locale, clamp } from "./lib/common.js";
const { log, error, warn, debug, get, set } = common("Settings");
import JustValidate from "just-validate";
log("Loading...");
const versionElement = document.querySelector("#version"),
	button = document.querySelector<HTMLInputElement>("#reset");
// eslint-disable-next-line unicorn/no-null -- Requires null, not undefined.
if (versionElement) versionElement.textContent = locale("optionsTitle", browser.runtime.getManifest().version) || null;
locale();
const form = new JustValidate("#settings").addField("#port", [
	{
		rule: "required"
	},
	{
		rule: "minNumber",
		value: 0
	},
	{
		rule: "maxNumber",
		value: 2 ** 16
	}
]);

function listen(element: HTMLInputElement) {
	element.addEventListener("change", (event: Event) => {
		const target = event?.currentTarget as HTMLInputElement,
			type = target.getAttribute("type");
		let value: boolean | string = target.value,
			radio = false;
		if (type !== "button") {
			// eslint-disable-next-line default-case -- Don't need one.
			switch (type) {
				case "checkbox": {
					value = target.checked;
					break;
				}
				case "radio": {
					radio = true;
					break;
				}
			}
			debug("value", value);
			const nameAttribute = target.getAttribute("name");
			if (!target.dataset.key) {
				error("Cannot find input key. Add data-key to attributes.", target);
			} else if (value === undefined) {
				error("Value is invalid.", target);
			} else if (radio && nameAttribute !== null) {
				set(nameAttribute, value);
				// TODO: Change this whole function to a simply use name instead of data-key.
			} else {
				if (target.getAttribute("type") === "number") {
					set(target.dataset.key, clamp(target.getAttribute("min"), value, target.getAttribute("max")));
				}
				set(target.dataset.key, value);
			}
		}
	});
}


for (const [, element] of document.querySelectorAll("input").entries()) {
	const radioName = element.getAttribute("name") || undefined,
		key = radioName === undefined ? element.dataset.key : radioName,
		type = element.getAttribute("type");
	if (key === undefined) {
		error("Can't find data-key or name", element);
	} else {
		// eslint-disable-next-line unicorn/prefer-top-level-await -- https://media.tenor.com/eD90XmEM2TQAAAAC/austin-powers.gif
		get(key).then(data => {
			let resetType;
			switch (type) {
				case "checkbox": {
					//@ts-expect-error -- If the data went in as boolean, it comes out as a boolean.
					element.checked = data;
					break;
				}
				case "radio": {
					if (element.value === data) {
						element.checked = true;
					}
					break;
				}
				default: {
					//@ts-expect-error -- If the data went in as string, it comes out as a string.
					element.value = data;
				}
			}
		});
		listen(element);
	}
}
document.querySelector("#reset")?.addEventListener("click", () => {
	browser.storage[debug_ ? "local" : "sync"].clear();
	for (const element of document.querySelectorAll("input")) {
		const type = element.getAttribute("type");
		if (element.dataset.key && type !== "button") {
			let value: string;
			// eslint-disable-next-line sonarjs/no-small-switch -- TODO
			switch (type) {
				case "checkbox": {
					value = "checked";
					break;
				}
				/*case "radio": {
					//TODO: Special handling of radio buttons needed
					// Get attribute "name", this will be the key,
					// Get attribute "value", this will be the value,
					// Set property "checked", not "value", when setting the selected radio.
					value = element.getAttribute("name");
					value = "checked";
					break;
				}*/
				default: {
					value = "value";
				}
			}
			get(element.dataset.key).then(data => {
				/* eslint-disable security/detect-object-injection -- Not possible, only using string literals. */
				//@ts-expect-error -- This works.
				element[value] = data;
				/* eslint-enable security/detect-object-injection */
			});
		}
	}
});
// for (const element of document.querySelectorAll("details")) {
// 	element.open = true;
// }
log("Done");
