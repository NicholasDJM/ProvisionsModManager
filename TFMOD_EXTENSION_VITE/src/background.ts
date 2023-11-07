import browser from "webextension-polyfill";
import { common, notify } from "./lib/common.ts";

const { log, error, debug, get, set, getDefault } = common("Background");
log("Loading...");

//window.notify = notify;

browser.runtime.onMessage.addListener((message, sender) => {
	log(message, sender);
});

// function send(message: string[]) {
// 	log(message);
// 	browser.runtime.sendNativeMessage("tfmod.extension.bridge", message)
// 		.then((data: unknown) => {
// 			log(data);
// 		}).catch((error_: unknown) => {
// 			error(error_);
// 		});
// }*/

// async function init(key: string, value: any) {
// 	if (await get(key) === undefined) set(key, value);
// }*/

// init("setting_gamebanana", true);
// init("setting_mods_tf", true);
// init("setting_modboy", true);*/

// const oneSecond = 1000;
// setInterval(async () => {
// 	if (await get("message") === undefined) {
// 		set("message", ""); // Initialize variable to empty string if not set.
// 	}
// 	const message: {id: number, modId: number, type: string} = await get("message");
// 	if (message) {
// 		console.table(message);
// 		set("message", "");
// 	}
// 	const number = /\d/g;
// 	debug("Message ID", number.test(String(message.id)));
// 	debug("Message Mod ID", number.test(String(message.modId)));
// 	// eslint-disable-next-line default-case, sonarjs/no-small-switch -- 1. Default is not needed, 2. https://media.tenor.com/EAy3G1zOkisAAAAC/incredibles-bob.gif
// 	switch (message.type) {
// 		// FIXME: Check if id and modID are numbers first.
// 		// TODO: Create other cases: preview, disable, enable, uninstall
// 		case "install": {
// 			send(["install", String(message.id), String(message.modId)]);
// 			break;
// 		}
// 	}
// }, oneSecond);*/

log("Done...");