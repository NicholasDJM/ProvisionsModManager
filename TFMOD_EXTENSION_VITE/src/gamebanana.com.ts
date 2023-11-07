import browser from "webextension-polyfill";
import { common, locale, appendText, tag, isNumber } from "./lib/common.ts";
import { gamebanana, regex } from "./lib/defaults.ts";
const { get, log, error } = common("GameBanana");
log("Loading...");
function getLinks(): NodeListOf<HTMLAnchorElement> {
	return document.querySelectorAll(".DownloadOptions a");
}
// eslint-disable-next-line unicorn/prevent-abbreviations -- Not an abbreviation.
function deleteModBoyButton(callback: () => undefined) {
	const links = getLinks();
	for (const element of links) {
		if (element.href.includes("modboy://")) {
			element.remove();
		}
		callback();
	}
}

function createButton(gameId: number) {
	const links = getLinks();
	for (const element of links) {
		if (regex.gamebanana.test(element.getAttribute("href") || "") && element.dataset.provisions !== "true") {
			log("Creating button...");
			const [anchor, span, small] = tag("a", "span", "small"),
				downloadId = element.href.split("#FileInfo_")[1], // FIXME Sanitize
				url = new URL(window.location.href),
				pageId = url.pathname.split("/").at(-1);
			if (pageId && !/\d/.test(pageId)) continue;
			appendText(span, "install");
			appendText(small, "installSubtext");
			span.append(small);
			anchor.append(span);
			anchor.title = locale("installPopup", downloadId);
			anchor.addEventListener("click", (event: MouseEvent) => {
				event.preventDefault();
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
				element.parentElement?.prepend(anchor);
				element.dataset.provisions = "true";
				log("Created button for ID: " + downloadId + ".");
			} else {
				element.dataset.provisions = "false";
				error("Something when wrong. Extracted IDs aren't numbers.");
			}
		}
	}
}
// eslint-disable-next-line unicorn/prefer-top-level-await -- Must use IIFE, top-level await not available in this context.
(async () => {
// eslint-disable-next-line unicorn/prevent-abbreviations -- Not an abbreviation.
	const removeModBoy: boolean = await get("modboy") as boolean,
		game = document.querySelector<HTMLAnchorElement>("#Breadcrumb a")?.href.split("https://gamebanana.com/games/")[1];
	for (const id of Object.values(gamebanana.id)) {
		const delay = 250;
		if (game === String(id)) {
			setInterval(() => {
				createButton(id);
			}, delay);
			if (removeModBoy) {
				const timer = setInterval(() => {
					deleteModBoyButton(() => {
						log("Removed Modboy button...");
						clearInterval(timer);
					});
				}, delay);
			}
		}
	}
	log("Done.");
})();

