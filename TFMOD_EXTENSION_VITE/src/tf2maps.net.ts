import browser from "webextension-polyfill";
import { regex } from "@lib/defaults.ts";
import { common, locale } from "@lib/common.ts";
const { log } = common("TF2Maps.net");
import { sanitizeURL } from "url-sanitizer";
import DOMPurify from "dompurify";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
log("Loading...");

function createButton(href: string, name: string): HTMLAnchorElement {
	// Attempt to create a button similar to what's found on Tf2maps.net.
	const button = document.createElement("a"),
		div = document.createElement("div"),
		span = document.createElement("span");
	div.classList.add("ripple-container");
	button.classList.add("button--fullWidth", "button", "button--icon", "button--icon--download", "rippleButton");
	span.classList.add("button-text");
	span.textContent = locale("install") || "Provisions Mod Manager";
	button.append(div);
	button.append(span);
	button.addEventListener("click", () => {
		browser.runtime.sendMessage({"tf2maps": href});
	});
	//@ts-expect-error Tippy() function is callable. Types are misconfigured. This works in browser.
	tippy(button, {
		content: locale("installPopup", name)
	});
	return button;
}
if (document.body.dataset.provisions === undefined) {
	document.body.dataset.provisions = "true";
	for (const element of document.querySelectorAll<HTMLAnchorElement>(".p-title-pageAction a")) {
		if (regex.tf2maps.test(element.href)) {
			sanitizeURL(element.href).then(url => {
				const title = document.querySelector("title");
				let name = "";
				if (title && title.textContent) {
					name = DOMPurify.sanitize(title.textContent.split(" |")[0]);
				}
				if (url && name) {
					log(element);
					element.parentElement?.append(createButton(url, name));
					element.style.marginBlockEnd = "1rem"; // Space out the first button from the new one.
				}
			});
		}
	}
	log("Done.");
}