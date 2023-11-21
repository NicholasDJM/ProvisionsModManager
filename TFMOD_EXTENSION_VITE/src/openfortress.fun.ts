import browser from "webextension-polyfill";
import { tippyConfig } from "@lib/defaults.ts";
import { common, locale, appendText, emmet } from "@lib/common.ts";
const { log, error } = common("Open Fortress");
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
//@ts-expect-error Property setDefaultProps does exist.
tippy.setDefaultProps(tippyConfig);
log("Loading...");
let element = document.querySelector<HTMLAnchorElement>("a[href='https://beans.adastral.net/beans.exe']");
if (element && document.body.dataset.provisions === undefined) {
	document.body.dataset.provisions = "true";
	// TODO: Create our own button, instead of relying on website structure.
	const parent = element.parentElement;
	if (parent) {
		element = element.cloneNode(true) as HTMLAnchorElement;
		element.removeAttribute("href"); // A11Y: Always have a valid href on an anchor.
		//@ts-expect-error tippy() is a callable function.
		tippy(element, {
			content: locale("installPopup", "Open Fortress")
		});
		const span = element.querySelector("span") as HTMLSpanElement,
			svg = span.querySelector("svg") as SVGSVGElement;
		span.innerHTML = "";
		span.append(svg);
		span.style.textTransform = "uppercase";
		appendText(span, "                " + locale("install"));
		element.addEventListener("click", event => {
			event.preventDefault();
			browser.runtime.sendMessage({
				openfortress: "install"
			});
		});
		const header = parent.querySelector("h1") as HTMLHeadingElement;
		if (header) {
			const br = emmet("br+br");
			header?.after(element);
			element.after(br);
		}
	}
}
log("Done.");