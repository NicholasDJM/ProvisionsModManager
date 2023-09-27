<script lang="ts">
	import { currentSettingsTab } from "$lib/js/stores/store";
	currentSettingsTab.set("debug");
	// @ts-expect-error Can't do anything about missing types.
	import { LocalStorage } from "combo-storage";
	let windowSize = LocalStorage.get("debug-windowSize") === "true" ? true : false,
		// eslint-disable-next-line no-magic-numbers
		windowSizeTime = LocalStorage.get("debug-windowSizeTime") ?? 3000;
	import { readBinaryFile } from "@tauri-apps/api/fs";
	import Link from "$lib/components/Link.svelte";
	// import { read } from "$lib/js/vpk";
	import * as Comlink from "comlink";
	// import { vpk } from "$lib/js/vpkBruteforce";
	async function testRead(event: Event) {
		const worker = new Worker("/workers/vpk.ts"),
			obj = Comlink.wrap(worker),
			target = event.target as HTMLButtonElement,
			base = "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Team Fortress 2\\tf\\custom\\";
		let file;
		// file = "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Team Fortress 2\\tf\\custom\\mc_diamond_market_gardener.vpk";
		file = base + "###femme_pyro.vpk";
		console.log("Reading", file);
		target.setAttribute("disabled", "");
		try {
			// let data = read([await readBinaryFile(file)]);
			let data = obj.read([await readBinaryFile(file)]);
		} catch (error) {
			console.error(error);
		}
		console.log("done");
		target.removeAttribute("disabled");
	}
	import { Command } from "@tauri-apps/api/shell";
	function workshop() {
		// new Command("install_workshop_item", ["hello", "world"]).execute();
		new Command("install_workshop_item_win", ["+workshop_download_item", "440", "2969509359"]).execute();
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
<br>
<a href="/test">Test</a>
<br>
<Link href="steam://ExitSteam">Exit Steam</Link>
<br>
<button on:click={workshop}>Download workshop item</button>
<br>
<Link href="steam://install/440">Install</Link>
<br>
<button on:click={testRead}>Test Read</button>
<br/>
<a href="/404" id="a">404</a>
<br/>
<br/>
{navigator.appVersion}
<style type="postcss">
	#a {
		color: green;
	}
	#a:hover, #a:focus-visible {
		color: red;
	}
</style>