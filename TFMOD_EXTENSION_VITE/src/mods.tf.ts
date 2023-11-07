import browser from "webextension-polyfill";
import { regex } from "./lib/defaults.ts";
import { common, locale, appendText, tag } from "./lib/common.ts";
const { log } = common("Mods.tf");
import "./mods.tf.css";
import { sanitizeURL } from "url-sanitizer";
import * as sanitizeHTML from "dompurify";
log("Loading...");
function createOverlay(name: string): HTMLDivElement {
	const [div, small] = tag("div", "small");
	appendText(small, "installSubtext");
	appendText(div, "install");
	div.append(small);
	div.classList.add("provisions");
	div.title = locale("installPopup", name);
	return div as HTMLDivElement;
}
browser.runtime.onMessage.addListener(message => {
	if (message.list && message.list.modstf) {
		//TODO: message.list.modstf should contain all the mods currently installed. Update buttons to indicate this. Should be an array of mod IDs.
	}
});
setInterval(async () => {
	for (const element of document.querySelectorAll<HTMLAnchorElement>(".item")) {
		// eslint-disable-next-line no-await-in-loop -- We're not operating on thousands of elements, so we can wait a few milliseconds.
		const href = await sanitizeURL(element.href || "");
		if (href !== null && !element.dataset.provisions && regex.modstf.test(href)) {
			const name = sanitizeHTML.sanitize(document.querySelector(".mod-name")?.textContent || "");
			element.dataset.provisions = "true";
			element.classList.add("provisionsContainer");
			element.append(createOverlay(name));
			element.addEventListener("click", event => {
				event.preventDefault();
				browser.runtime.sendMessage({ "modstf": href });
			});
			log("Found valid link:", element.href);
		}
	}
});
log("Done.");