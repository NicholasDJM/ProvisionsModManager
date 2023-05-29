/* eslint-disable unicorn/prefer-top-level-await -- Not available in this context. */
require("webextension-polyfill");

const log = (...text) => {
		console.log("Provisions One-Click Installer [Background]:", ...text);
	},
	error = (...text) => {
		console.error("Provisions One-Click Installer [Background]:", ...text);
	};
log("Loading...");

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
function send(message) {
	log(message);
	browser.runtime.sendNativeMessage("tfmod.extension.nativehost", message)
		.then(data => {
			log(data);
		}).catch(error => {
			error(error);
		});
}

async function init(key, value) {
	if (await get(key) === undefined) set(key, value);
}

init("setting_gamebanana", true);
init("setting_mods_tf", true);
init("setting_modboy", true);

const oneSecond = 1000;
setInterval(async () => {
	if (await get("message") === undefined) {
		set("message", ""); // Initialize variable to empty string if not set.
	}
	const message = await get("message");
	if (message) {
		console.table(message);
		set("message", "");
	}
	// eslint-disable-next-line default-case -- Not needed.
	switch (message.type) {
		case "install": {
			send(["install", message.id, message.modId]);
			break;
		}
	}
}, oneSecond);

log("Done...");