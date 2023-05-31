<script lang="ts">
	import { currentSettingsTab } from "$lib/js/settingsTab.js";
	currentSettingsTab.set("debug");
	// @ts-expect-error Can't do anything about missing types.
	import { LocalStorage } from "combo-storage";
	let windowSize = LocalStorage.get("debug-windowSize") === "true" ? true : false,
		// eslint-disable-next-line no-magic-numbers
		windowSizeTime = LocalStorage.get("debug-windowSizeTime") ?? 3000;
	import { readBinaryFile } from "@tauri-apps/api/fs";
	import Link from "$lib/components/Link.comp.svelte";
	// import { vpk } from "$lib/js/vpk";
	async function testRead(event: Event) {
		const target = event.target as HTMLButtonElement,
			// eslint-disable-next-line no-magic-numbers
			signature = [52, 18, 170, 85],
			file = "";
		console.log("Reading", file);
		target.setAttribute("disabled", "");
		const data = await readBinaryFile(file);
		console.log(data);
		const fileSignature = [data[0], data[1], data[2], data[3]];
		if (fileSignature === signature) {
			console.log("File is a VPK");
		} else {
			let match = true;
			for (let index = 0; index < fileSignature.length || index < signature.length; index++) {
				console.log(fileSignature[index], signature[index], fileSignature[index] === signature[index]);
				if (fileSignature[index] !== signature[index]) {
					match = false;
				}
			}
			console.log(match);
			console.log(fileSignature === signature);
			console.log(signature);
			console.log(fileSignature);
		}
		console.log("done");
		target.removeAttribute("disabled");
	}
</script>
<label>
	Window Size
	<input type="checkbox" on:change={(event) => LocalStorage.set("debug-windowSize", event.target.checked)} checked={windowSize}>
</label>
<br/>
<label>
	Window Size Display Time (in milliseconds)
	<input type="number" on:change={(event) => LocalStorage.set("debug-windowSizeTime", event.target.value)} value={windowSizeTime}>
</label>
<a href="/test">Test</a>
<Link href="steam://exit">Exit Steam</Link>
<button on:click={testRead}>Test Read</button>