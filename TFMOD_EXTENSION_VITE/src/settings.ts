import browser from "webextension-polyfill";
import { common, locale, getOrigins, originAllowed, request } from "./lib/common.ts";
const { log, get, set, debug, getDefault } = common("Settings");
log("Loading...");
const versionElement = document.querySelector("#version"),
	button = document.querySelector<HTMLInputElement>("#reset"),
	version = browser.runtime.getManifest().version,
	chromium = __BROWSER__ === "chrome" || __BROWSER__ === "edge",
	firefox = __BROWSER__ === "firefox";
if (versionElement) versionElement.textContent = locale("version", version) || "One-Click Installer " + version;
locale();
document.querySelector(":root")?.classList.add(__BROWSER__);
const portElement = document.querySelector<HTMLInputElement>("#port"),
	port = await get("port") as number,
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
async function createCheckbox(origin: string): Promise<HTMLDivElement> {
	const checkbox = document.createElement("input"),
		hasPermission = await originAllowed(origin),
		label = document.createElement("label"),
		text = document.createTextNode(origin),
		row = document.createElement("div"),
		span1 = document.createElement("span"),
		span2 = document.createElement("span");
	row.classList.add("row");
	row.append(label);
	label.append(span1);
	label.append(span2);
	span1.append(text);
	span2.append(checkbox);
	checkbox.setAttribute("type", "checkbox");
	checkbox.checked = hasPermission;
	if (chromium && hasPermission) checkbox.disabled = true; // You cannot remove permission programatically in Chrome, so we disable the checkbox.
	checkbox.addEventListener("change", async (event) => {
		const target = event.currentTarget as HTMLInputElement;
		target.disabled = true;
		let request = false;
		if (target.checked) {
			request = await browser.permissions.request({origins: [origin]});
			if (!request) {
				target.checked = false;
			}
		} else if (firefox) target.checked = !await browser.permissions.remove({origins: [origin]});
		target.disabled = false;
		if (request && chromium) {
			target.disabled = true;
		}
	});
	return row;
}
async function createCheckboxes() {
	const div = document.querySelector("#websites"),
		promises = getOrigins().map(origin => createCheckbox(origin)),
		checkboxes = await Promise.all(promises);
	for (const checkbox of checkboxes) div?.append(checkbox);
}
document.querySelector<HTMLButtonElement>("#grant")?.addEventListener("click", async () => {
	await request(getOrigins());
	const div = document.querySelector("#websites"),
		legend = div?.querySelector("legend"),
		notice = div?.querySelector("#chromeNotice");
	if (div) {
		div.innerHTML = "";
		if (legend) div.append(legend);
		if (notice) div.append(notice);
	}
	await createCheckboxes();
});
// eslint-disable-next-line unicorn/prefer-top-level-await -- Function is used elsewhere.
createCheckboxes();
const interval = 200;
setInterval(async () => {
	const element = document.querySelector<HTMLDivElement>("#grantMessage");
	if (element) element.hidden = await originAllowed(getOrigins());
}, interval);
if (chromium) {
	const element = document.querySelector<HTMLDivElement>("#chromeNotice");
	if (element) element.hidden = false;
}
for (const permission of browser.runtime.getManifest().permissions || []) {
	const section = document.querySelector("#permissions"),
		div = document.createElement("div"),
		strong = document.createElement("strong"),
		p = document.createElement("p");
	div.append(strong);
	div.append(p);
	p.textContent = locale(`whyPermission${permission}`) || "";
	strong.textContent = locale(`whyPermission${permission}Title`) || "";
	section?.append(div);
}

log("Done.");