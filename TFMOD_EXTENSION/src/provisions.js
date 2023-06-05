const log = (...text) => {
		console.log("Provisions One-Click Installer:", ...text);
	},
	error = (...text) => {
		console.error("Provisions One-Click Installer:", ...text);
	};
function length_(object) {
	return Object.keys(object).length;
}
async function get(name) {
	let result;
	await browser.storage.local.get([name]).then(data => {
		if (length_(data) > 0) {
			result = data[name];
		}
	});
	return result;
}
function set(name, data) {
	browser.storage.local.set({[name]: data});
}
log("Loading...");

let ids = [];
function getIds() {
	for (const [index, element] of document.querySelectorAll(".DownloadOptions").entries()) {
		for (let index_ = 0; index_ < element.children.length; index_++) {
			const element_ = element.children[index_];
			if (element_.getAttribute("href") && element_.dataset.provisions === undefined) {
				ids[ids.length] = element_;
				element_.dataset.provisions = true;
				// If we have already added a button, don't add it again, thus we add provisions = true to each matching element's dataset.
			}
		}
	}
	log(ids);
	for (const [index, element] of ids.entries()) {
		if (element.getAttribute("href").includes("https://")) {
			// create an element matching the style of other buttons on GameBanana
			const anchor = document.createElement("a"),
				span = document.createElement("span"),
				small = document.createElement("small");
			span.append(document.createTextNode("Provisions Mod Manager"));
			small.append(document.createTextNode("1-Click Install"));
			span.append(small);
			anchor.append(span);
			anchor.addEventListener("click", (event) => {
				event.preventDefault();
				const downloadId = element.getAttribute("href").split("https://gamebanana.com/mods/download/")[1].split("#FileInfo_")[1],
					modificationId = element.getAttribute("href").split("https://gamebanana.com/mods/download/")[1].split("#FileInfo_")[0];
				console.log("Download ID:", downloadId);
				console.log("Mod Page ID:", modificationId);
				set("message", {type:"install", id:downloadId, modId:modificationId});
			});
			anchor.dataset.provisions = true;
			element.parentNode.insertBefore(anchor, element);
		}
		if (element.getAttribute("href").includes("modboy://")) {
			element.remove();
		}
	}
}
const path = window.location.pathname.split("/")[1],
	p = text => path === text,
	oneSecond = 1000;
if (p("mods") || p("sprays") || p("sounds") || p("scripts")) {
	const interval = setInterval(async () => {
		log(document.readyState);
		if (document.readyState === "complete") {
			clearInterval(interval);
			let pageType = document.querySelector("#Breadcrumb").children[0].getAttribute("href").split("https://gamebanana.com/games/")[1],
				websites = await get("websites") ?? [["gamebanana", true], ["mods_tf", true]];
			// TODO: Add more cases
			// eslint-disable-next-line sonarjs/no-small-switch -- Will add more in the future
			switch(pageType) {
				case "297": {
					console.log(websites[0][1]);
					if (websites[0][1]) {
						getIds();
					}
					break;
				}
				default: {
					error("Not a TF2 Mod page");
				}
			}
		}
	}, oneSecond);
}
log("Done...");
