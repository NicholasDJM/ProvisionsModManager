require("webextension-polyfill");
const log = (...text) => {
		console.log("Provisions One-Click Installer [Settings]:", ...text);
	},
	error = (...text) => {
		console.error("Provisions One-Click Installer [Settings]:", ...text);
	},
	pollingTime = 200;
log("Loading...");
document.querySelector("#version").textContent = browser.i18n.getMessage("optionsTitle", browser.runtime.getManifest().version);

for (const [index, element] of document.querySelectorAll("[data-string]").entries()) {
	element.textContent = browser.i18n.getMessage(element.dataset.string);
}

function length_(object) {
	return Object.keys(object).length;
}

async function get(name) {
	let result;
	await browser.storage.local.get([name]).then(data => {
		if (length_(data) > 0) {
			result = data[name];
		}
	});
	return result;
}
function set(name, data) {
	browser.storage.local.set({[name]: data});
}
// eslint-disable-next-line unicorn/prefer-top-level-await -- Not available in this context.
(async () => {
	let websites = await get("websites") || [["gamebanana", true], ["mods_tf", true]];
	setInterval(() => {
		set("websites", websites);
	}, pollingTime);

	for (const [index, element] of document.querySelectorAll("input[type=\"checkbox\"]").entries()) {
		// Set checkboxes' initial value, add event listeners.
		if (websites) {
			for (const website of websites) {
				if (element.dataset.website === website[0]) {
					element.checked = website[1];
				}
			}
		}
		element.addEventListener("change", event => {
			const checked = event.target.checked;
			for (const [index, website] of websites.entries()) {
				if (website[0] === event.target.dataset.website) {
					websites[index][1] = checked;
				}
			}
		});
	}
})();
log("Done");