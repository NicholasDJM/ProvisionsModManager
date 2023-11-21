import browser from "webextension-polyfill";
import { common, locale, appendText, isNumber, emmet } from "@lib/common.ts";
import { gamebanana, regex, tippyConfig } from "@lib/defaults.ts";
const { get, log, error } = common("GameBanana");
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
//@ts-expect-error Property setDefaultProps does exist.
tippy.setDefaultProps({...tippyConfig});
log("Loading...");
function getLinks(): NodeListOf<HTMLAnchorElement> {
	return document.querySelectorAll(".DownloadOptions a");
}
// eslint-disable-next-line unicorn/prevent-abbreviations, @typescript-eslint/no-explicit-any -- 1. Not an abbreviation. 2. We want any as to indicate we don't do anything with the return value.
function deleteModBoyButton(callback?: () => any) {
	const links = getLinks();
	for (const element of links) {
		if (element.href.includes("modboy://")) {
			element.remove();
			if (callback) callback();
		}
	}
}

function createButton(gameId: number) {
	for (const element of getLinks()) {
		if (element.dataset.provisions !== "true" && regex.gamebanana.test(element.getAttribute("href") || "")) {
			log("Creating button...");
			const [button, span, image] = [
					emmet("a"),
					emmet(`span>small{${locale("installSubtext")}}`),
					emmet("img(style='margin-inline-start:.5em')")
				], //tag("a", "span", "small", "img[style=margin-inline-start:.5em]"),
				downloadId = element.href.split("#FileInfo_")[1], // FIXME Sanitize
				pageId = new URL(window.location.href).pathname.split("/").at(-1),
				filename = element.parentElement?.parentElement?.querySelector(".FileInfo span code")?.textContent || downloadId;
			if ((pageId && !/\d/.test(pageId)) || (downloadId && !/\d/.test(downloadId))) continue;
			//image.src //TODO: Create Logo.
			button.append(appendText(span, "install"));
			/* span.append(appendText(small, "installSubtext"));
			   @ts-expect-error Tippy() function is callable. */
			tippy(button, {
				content: locale("installPopup", filename),
				placement: "bottom-start"
			});
			button.addEventListener("click", () => {
				log("Sending message to background script...", gameId, pageId, downloadId);
				browser.runtime.sendMessage({
					"gamebanana": {
						gameId,
						pageId,
						downloadId
					}
				});
			});
			if (isNumber(pageId, gameId, downloadId)) {
				element.parentElement?.prepend(button);
				element.dataset.provisions = "true";
				log("Created button for ID: " + downloadId + ".");
				continue;
			}
			element.dataset.provisions = "false";
			error("Something when wrong. Extracted IDs aren't numbers.");
		}
	}
}
(async () => {
// eslint-disable-next-line unicorn/prevent-abbreviations -- Not an abbreviation.
	const removeModBoy = await get("modboy") as boolean,
		game = document.querySelector<HTMLAnchorElement>("#Breadcrumb a")?.href.split("https://gamebanana.com/games/")[1] || "",
		interval = 250;
	for (const id of Object.values(gamebanana.id)) {
		if (game === String(id)) {
			setInterval(() => {
				createButton(id);
				if (removeModBoy) {
					deleteModBoyButton(() => console.log("Removed ModBoy link..."));
				}
			}, interval);
		}
	}
	log("Done.");
})();

