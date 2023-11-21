import browser from "webextension-polyfill";
import { common, locale, getOrigins, originAllowed, request, appendText, emmet, revoke, clamp } from "@lib/common.ts";
const { log, get, set, debug, getDefault } = common("Settings"); // log, error, and debug are prefixed with "Settings" via common(), so we know which script is logging data.
log("Loading...");
const resetButton = document.querySelector<HTMLButtonElement>("#reset"),
	version = browser.runtime.getManifest().version;
appendText(document.querySelector("#version") as HTMLSpanElement, "version", version);
locale();

const portElement = document.querySelector<HTMLInputElement>("#port"),
	maxPort = 65535,
	port = clamp(0, Number(await get("port")), maxPort),
	portDefault = getDefault("port") as number,
	modboyElement = document.querySelector<HTMLInputElement>("#removeModBoy"),
	modboy = await get("modboy"),
	modboyDefault = getDefault("modboy"),
	init = (reset = false) => {
		if (reset) {
			debug("PORT", port);
			debug("MODBOY", modboy);
			if (portElement) {
				portElement.value = String(portDefault);
				set("port", portDefault);
			}
			if (modboyElement) {
				modboyElement.checked = Boolean(modboyDefault);
				set("modboy", modboyDefault);
			}
		} else {
			if (portElement && typeof port === "string") {
				portElement.value = port;
				// TODO: Handle non number inputs, and reset to default on load if not number.
			}
			if (modboyElement && typeof modboy === "boolean") {
				modboyElement.checked = modboy;
			}
		}
	};
init();
resetButton?.addEventListener("click", () => {
	init(true);
});
modboyElement?.addEventListener("change", event => {
	const element = event.currentTarget as HTMLInputElement;
	if (element) set("modboy", element.checked);
});
portElement?.addEventListener("change", event => {
	const element = event.currentTarget as HTMLInputElement;
	if (element) set("port", element.value);
});

const buttons: HTMLButtonElement[] = [],
	grantButtonText = (permission: boolean) => (permission ? locale("revokeButton") : locale("grantButton"));

function getSafeOrigin(origin: string) {
	return origin.replace("*://", "").replace("*.", "").replace("/*", "").replace(".", ""); // *://*.gamebanana.com/* to gamebananacom
}

interface GrantButton extends HTMLButtonElement {
	dataset: {
		origin: string
	}
}

async function createButton(origin: string): Promise<HTMLDivElement> {
	const hasPermission = await originAllowed(origin),
		url = getSafeOrigin(origin),
		row = emmet(".row.column > label{{0}} + p{{1}}", false, [
			locale(`website_${url}`),
			locale(`website_${url}_description`)
		]) as HTMLDivElement,
		grantButton = emmet("button(type='button',data-origin='{0}',data-grant='true'){{1}}", false, [
			origin,
			grantButtonText(false)
		]) as GrantButton,
		revokeButton = emmet("button(type='button',data-revoke='true'){{0}}", false, [
			grantButtonText(true)
		]) as HTMLButtonElement;
	grantButton.hidden = hasPermission;
	revokeButton.hidden = !hasPermission;
	row.querySelector("label")?.append(grantButton, revokeButton);
	grantButton.addEventListener("click", async () => {
		await request(origin);
	});
	revokeButton.addEventListener("click", async () => {
		await revoke(origin);
	});
	buttons.push(grantButton);
	// if chromium
	revokeButton.disabled = hasPermission;
	// endif
	return row;
}

// async function createCheckbox(origin: string): Promise<HTMLDivElement> {
// 	// Create a checkbox to indicate if we have permission to read and modify a website.
// 	const hasPermission = await originAllowed(origin),
// 		url = origin.replace("*://", "").replace("*.", "").replace("/*", "").replace(".", ""), // *://*.gamebanana.com/* to gamebananacom
// 		checkbox = emmet("input(type='checkbox')") as HTMLInputElement,
// 		row = emmet(".row.column"),
// 		labelText = locale(`website_${url}`),
// 		label = emmet(`label{${labelText}}`),
// 		text = locale(`website_${url}_description`),
// 		p = emmet(`p.subtext.description{${text}}`);
// 	label.append(checkbox);
// 	row.append(label, p);
// 	checkbox.checked = hasPermission;
// 	//#if chromium
// 	if (chromium && hasPermission) checkbox.disabled = true; // You cannot revoke permission programatically in Chrome, so we disable the checkbox.
// 	//#endif
// 	checkbox.addEventListener("change", async () => {
// 		checkbox.disabled = true;
// 		let request = false;
// 		if (checkbox.checked) {
// 			request = await browser.permissions.request({origins: [origin]});
// 			if (!request) checkbox.checked = false;
// 		} else if (firefox) checkbox.checked = !await browser.permissions.remove({origins: [origin]});
// 		checkbox.disabled = false;
// 		//#if chromium
// 		if (request && chromium) checkbox.disabled = true;
// 		//#endif
// 	});
// 	return row as HTMLDivElement;
// }*/

//const checkboxContainer = document.querySelector("#websites");

async function createButtons() {
	const buttons = await Promise.all(
		getOrigins().map(async (origin) => await createButton(origin))
	);
	for (const button of buttons) {
		//log(button);
		document.querySelector("#websites")?.append(button);
	}
}
createButtons();

// async function createCheckboxes() {
// 	const div = checkboxContainer,
// 		checkboxes = await Promise.all(
// 			getOrigins().map(origin => createCheckbox(origin))
// 		);
// 	for (const checkbox of checkboxes) div?.append(checkbox);
// }*/
document.querySelector<HTMLButtonElement>("#grant")?.addEventListener("click", async () => {
	await request(getOrigins());
	//const div = checkboxContainer;
	//if (div) div.innerHTML = "";
	//await createCheckboxes();//*/
});
//createCheckboxes();
const interval = 200;
setInterval(async () => {
	const element = document.querySelector<HTMLDivElement>("#grantMessage");
	if (element) element.hidden = await originAllowed(getOrigins());
	for (const button of buttons) {
		const grantButton = button as GrantButton,
			revokeButton = button.parentElement?.querySelector("[data-revoke]") as HTMLButtonElement,
			// eslint-disable-next-line no-await-in-loop -- Minimal impact.
			hasPermission = await originAllowed(grantButton.dataset.origin);
		grantButton.hidden = hasPermission;
		revokeButton.hidden = !hasPermission;
	}
}, interval);

for (const permission of browser.runtime.getManifest().permissions || []) {
	document.querySelector("#permissions")?.append(
		emmet("li.strong{{0}}>p.subtext{{1}}", false, [
			locale(`whyPermission${permission}Title`),
			locale(`whyPermission${permission}`)
		])
	);
}


log("Done.");