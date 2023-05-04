import { WebviewWindow } from "@tauri-apps/api/window";
// @ts-expect-error -- Can't do anything about missing types.
import { LocalStorage } from "combo-storage";

export const openWindow = (label: string, url: string, title: string) => {
	const window = new WebviewWindow(label, {
		url: url,
		title: title
	});
	window.once("tauri://error", error => {
		if (error.payload === `a window with label \`${label}\` already exists`) {
			// LocalStorage.set("window-focus", label);
			window.setFocus();
		} else {
			throw error;
		}
	});
};

// Copy and paste the code below in which ever window you want to focus.


/*import { appWindow } from "@tauri-apps/api/window";
import { onMount, onDestroy } from "svelte";
/// @ts-expect-error -- Can't do anything about missing types.
import { LocalStorage } from "combo-storage";
let timer: ReturnType<typeof setInterval>;
onMount(() => {
	const interval = 100;
	timer = setInterval(async () => {
		if (LocalStorage.get("window-focus") === appWindow.label) {
			LocalStorage.set("window-focus", "");
			await appWindow.setFocus();
		}
	}, interval);
});
onDestroy(() => {
	clearInterval(timer);
});*/