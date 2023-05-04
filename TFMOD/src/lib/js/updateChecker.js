import { checkUpdate } from "@tauri-apps/api/updater";
import { updateAvailable } from "$lib/js/update.js";
let timer;
if (!timer) {
	timer = setInterval(() => {
		checkUpdate().then((result) => {
			console.log(result);
			if (result) {
				updateAvailable.set(true);
			} else {
				updateAvailable.set(false);
			}
		});
	}, 10000);
}