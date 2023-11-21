import browser from "webextension-polyfill";
import { regex, tippyConfig } from "@lib/defaults.ts";
import { common, locale, emmet } from "@lib/common.ts";
const { log } = common("Mods.tf");
import "./mods.tf.css";
import { sanitizeURL } from "url-sanitizer";
import * as sanitizeHTML from "dompurify";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
//@ts-expect-error setDefaultProps does exist.
tippy.setDefaultProps({...tippyConfig});
log("Loading...");
function createOverlay(name: string, id: string): HTMLDivElement {
	const div = emmet(`.provisions#${id}>span.provisionsNotInstalled{${locale("install")}}+span.provisionsInstalled{${locale("installed")}}+small{${locale("installSubtext")}}`);
	//@ts-expect-error tippy() is a callable function.
	tippy(div, {
		content: locale("installPopup", name)
	});
	return div as HTMLDivElement;
}
let installed: string[] = [];
browser.runtime.onMessage.addListener(message => {
	if (message.list && message.list.modstf) {
		installed = message.list.modstf;
	}
});
setInterval(async () => {
	for (const element of document.querySelectorAll<HTMLAnchorElement>(".item")) {
		// eslint-disable-next-line no-await-in-loop -- We're not operating on thousands of elements, so we can wait a few milliseconds.
		const href = await sanitizeURL(element.href || "");
		if (href !== null && !element.dataset.provisions && regex.modstf.test(href)) {
			const name = sanitizeHTML.sanitize(document.querySelector(".mod-name")?.textContent || ""),
				// eslint-disable-next-line unicorn/prevent-abbreviations -- Not a abbreviation. Mod is short for modification, but I'm not typing that out everytime.
				modId = href.split("/")[4];
			element.dataset.provisions = "true";
			element.classList.add("provisionsContainer");
			element.dataset.id = modId;
			element.append(createOverlay(name, modId));
			element.addEventListener("click", event => {
				event.preventDefault();
				// TODO: handle downloading mod and passing file location to Provisions Mod Manager.
				browser.runtime.sendMessage({ "modstf": href });
			});
			log("Found valid link:", element.href);
		}
	}
	for (const element_ of document.querySelectorAll("[data-id]")) {
		const element = element_ as HTMLDivElement;
		if (installed.includes(element.dataset.id || "")) {
			element.classList.add("installed");
		} else {
			element.classList.remove("installed");
		}
		// TODO: Test this code on mods.tf when it's back online.
	}
});
log("Done.");