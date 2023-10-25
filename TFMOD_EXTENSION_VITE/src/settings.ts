declare const __BROWSER__: "firefox" | "chrome";
import browser from "webextension-polyfill";
import { common, locale } from "./lib/common.ts";
const { log, get, set, debug, getDefault } = common("Settings");
log("Loading...");
const versionElement = document.querySelector("#version"),
	button = document.querySelector<HTMLInputElement>("#reset");
// eslint-disable-next-line unicorn/no-null -- Requires null, not undefined.
if (versionElement) versionElement.textContent = locale("optionsTitle", browser.runtime.getManifest().version) || null;
locale();
if (__BROWSER__ === "firefox") {
	document.querySelector(":root")?.classList.add("firefox");
} else {
	document.querySelector(":root")?.classList.add("chrome");
}

(async () => {
	const portElement = document.querySelector<HTMLInputElement>("#port"),
		port = await get("port"),
		portDefault = getDefault("port"),
		modboyElement = document.querySelector<HTMLInputElement>("#removeModBoy"),
		modboy = await get("modboy"),
		modboyDefault = getDefault("modboy"),
		init = (reset = false) => {
			if (reset) {
				debug("PORT", port);
				debug("MODBOY", modboy);
				if (portElement) portElement.value = String(portDefault);
				if (modboyElement) modboyElement.checked = Boolean(modboyDefault);
			} else {
				if (portElement && typeof port === "string") {
					portElement.value = port;
				}
				if (modboyElement && typeof modboy === "boolean") {
					modboyElement.checked = modboy;
				}
			}
		};
	init();
	document.querySelector("#reset")?.addEventListener("click", () => {
		init(true);
	});
	modboyElement?.addEventListener("change", event => {
		const element = event.currentTarget as HTMLInputElement;
		if (element) {
			set("modboy", element.checked);
		}
	});
	portElement?.addEventListener("change", event => {
		const element = event.currentTarget as HTMLInputElement;
		if (element) {
			set("port", element.value);
		}
	});
})();
log("Done.");