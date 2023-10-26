declare const __BROWSER__: "firefox" | "chrome";
import browser from "webextension-polyfill";
import { common, locale } from "./lib/common.ts";
import style from "normalize.css/normalize.css?inline";
const styleElement = document.createElement("style");
styleElement.textContent = style;
document.querySelector("head")?.append(styleElement);
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

// eslint-disable-next-line unicorn/prefer-top-level-await -- Not available in this context.
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
	button?.addEventListener("click", () => {
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
	const host = (url: string) => browser.permissions.contains({origins:["*://*." + url + "/*"]}),
		request = (origins: string[]) => {
			for (let index = 0; index < origins.length; index++) {
				// eslint-disable-next-line security/detect-object-injection -- It's an index.
				origins[index] = "*://*." + origins[index] + "/*";
			}
			browser.permissions.request({origins});
		};
	setInterval(async () => {
		const accessToGB = await host("gamebanana.com"),
			accessToMTF = await host("mods.tf"),
			accessToMaps = await host("tf2maps.net"),
			accessToOpen = await host("openfortress.fun"),
			accessToClassic = await host("tf2classic.com"),
			accessToPF = await host("prefortress.com"),
			element = document.querySelector<HTMLDivElement>("#grantMessage");
		if (element) {
			element.style.display = accessToGB && accessToMTF && accessToMaps && accessToOpen && accessToClassic && accessToPF ? "none" : "block";
		}
	}, 200);
	// TODO: Add an ignore option.
	// TODO: Auto open options page fore firefox, website access is not granted by default.
	// runtime.openOptionsPage(); // Use this in background.ts, unless ignore is set.
	// TODO: Add individual grant buttons for each website.
	document.querySelector("#grant")?.addEventListener("click", () => {
		request([
			"gamebanana.com",
			"mods.tf",
			"tf2maps.net",
			"openfortress.fun",
			"tf2classic.com",
			"prefortress.com"
		]);
	});
	log("Done.");
})();