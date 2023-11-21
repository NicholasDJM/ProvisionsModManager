import browser from "webextension-polyfill";
import { common, notify, each } from "@lib/common.ts";
import { nativeHost } from "@lib/defaults.ts";
const { log, error, get } = common("Background");
log("Loading...");

const port = await get("port") as string;

function send(message: string[]): unknown {
	log(message);
	const packet = {
		content: message,
		port
	};
	let result;
	browser.runtime.sendNativeMessage(nativeHost, packet)
		.then((data: unknown) => {
			log(data);
			if (data.error === "missing") {
				notify("notificationFailedInstallProvisions"); // Failed to connect with Provisions Mod Manager.
			} else {
				result = data;
			}
		}).catch((error_: unknown) => {
			notify("notificationFailedInstallBridge"); // Failed to connect to the bridge (native host). A re-install of Provisions Mod Manager is required.
			error(error_);
		});
	return result;
}

browser.runtime.onMessage.addListener(message => {
	each(message, (key, value) => {
		// eslint-disable-next-line default-case -- We don't want to do anything if we don't have a case.
		switch (key) {
			case "getList": {
				browser.runtime.sendMessage({list:send(["list"])});
				break;
			}
			case "enable": {
				break;
			}
		}
	});
});
log("Current language:", browser.i18n.getUILanguage());
log("Loaded language:", browser.i18n.getMessage("lang"));

log("Done...");