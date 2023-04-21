<script lang="ts">
	import { i18n } from "$lib/i18n.js";
	import { title } from "$lib/title.js";
	title.set($i18n.t("pageUtilitiesTitle"));
	import { currentPage } from "$lib/page.js";
	currentPage.set("utils");
	import UtilityCard from "$lib/UtilityCard.svelte";
	import { WebviewWindow } from "@tauri-apps/api/window";
	import { invoke } from "@tauri-apps/api";
	let webview: Array<any> = [];
	function openIDE(event: any) {
		console.log(event);
		if (event.key === "Enter" || event.type === "click") {
			//invoke("open_ide");
			webview[webview.length] = new WebviewWindow("ide", {
				url: "/utils/ide/editor",
				title: "CFG IDE"
			});
			webview[webview.length - 1].once("tauri://created", () => {
				console.log("created window");
			});
			webview[webview.length - 1].once("tauri://error", (error:any) => {
				console.log(error);
			});
		}
	}
	function openPyroland(event: any) {
		if (event.key === "Enter" || event.type === "click") {
			webview[webview.length] = new WebviewWindow("Pyroland", {
				url: "/utils/pyroland",
				title: "Pyroland Compatibility Analyser"
			});
			webview[webview.length - 1].once("tauri://created", () => {
				console.log("created window");
			});
			webview[webview.length - 1].once("tauri://error", (error:any) => {
				console.log(error);
			});
		}
	}
</script>
<main>
	<a href="#a" on:click={openIDE} on:keydown={openIDE}>
		<UtilityCard
			title="CFG Editor"
			src="/images/test.png"
			alt="CFG Editor"
			description="Create and edit scripts with our IDE."/>
	</a>
	<a href="#a" on:click={openPyroland} on:keydown={openPyroland}>
		<UtilityCard
			title="Pyroland Compatibility Analyser"
			src="/images/test.png"
			alt="Pyroland Compatibility Analyser"
			description="Manage which maps are eligible for Pyroland"/>
	</a>
</main>
<style>
	main {
		display: grid;
		grid-template-columns: auto auto;
		gap: 30px;
		margin-inline: var(--defaultMargin);
		margin-block: var(--defaultMargin);
		padding-block: calc(var(--defaultMargin) * 2);
		padding-inline: calc(var(--defaultMargin) * 2);
	}
	a {
		text-decoration: none;
	}
</style>