require("webextension-polyfill");
const log = (...text) => {
		console.log("Provisions One-Click Installer [Settings]:", ...text);
	},
	error = (...text) => {
		console.error("Provisions One-Click Installer [Settings]:", ...text);
	},
	debug = (name, data) => {
		console.log(name + ":", data, "TYPEOF", typeof data);
	};
log("Loading...");
document.querySelector("#version").textContent = browser.i18n.getMessage("optionsTitle", browser.runtime.getManifest().version);

for (const [, element] of document.querySelectorAll("[data-string]").entries()) {
	element.textContent = browser.i18n.getMessage(element.dataset.string);
}

function length(object) {
	return Object.keys(object).length;
}

async function get(name) {
	let result;
	await browser.storage.local.get(["setting_" + name]).then(data => {
		if (length(data) > 0) {
			result = data["setting_" + name];
		}
	});
	return result;
}
function set(name, data) {
	browser.storage.local.set({["setting_" + name]: data});
}

function listen(element, value = "value") {
	element.addEventListener("change", event => {
		set(event.target.dataset.key, event.target[value]);
	});
}

// eslint-disable-next-line unicorn/prefer-top-level-await -- Not available in this context.
(async () => {
	for (const [, element] of document.querySelectorAll("input").entries()) {
		const key = element.dataset.key,
			defaultValue = element.dataset.default,
			// eslint-disable-next-line no-await-in-loop -- Unless we're creating a massive amount of options, this shouldn't matter in terms of performance.
			currentValue = await get(key) || defaultValue;
			// FIXME: This should convert to proper types. ^
		debug("KEY", key);
		// eslint-disable-next-line no-await-in-loop
		debug("SAVED VALUE", await get(key));
		debug("DEFAULT", defaultValue);
		debug("VALUE", currentValue);
		if (currentValue === undefined) {
			set(key, defaultValue);
		}
		switch (element.getAttribute("type")) {
			case "checkbox": {
				element.checked = currentValue;
				listen(element, "checked");
				break;
			}
			case undefined: {
				break;
			}
			default: {
				element.value = currentValue;
				listen(element);
				break;
			}
		}
	}
})();
log("Done");