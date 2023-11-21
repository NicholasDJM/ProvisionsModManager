import browser from "webextension-polyfill";
import { common, locale } from "@lib/common.ts";
const { log } = common("Colors.tf");
log("Loading...");
// TODO: A lot of custom logic needs to be done to work with colors.tf
/*const button = document.querySelector("#generate-button");
if (button) {
	button.setAttribute("onclick", "");
}
let template;
(async () => {
	template = await fetch("https://colors.tf/output.json");
})();
button?.addEventListener("click", event => {
	event.preventDefault();
	browser.runtime.sendMessage({
		"colorstf": "install",
		"file": ""
	});
});*/
log("Done.");
