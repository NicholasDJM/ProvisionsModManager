<script lang="ts">
	/* global textContrast */
	import "normalize.css";
	import "@fontsource/roboto";
	import { dev } from "$app/environment";
	import ScreenSize from "$lib/components/Screen.svelte";
	import { getCurrent, PhysicalSize } from "@tauri-apps/api/window";
	import { onMount, onDestroy } from "svelte";
	import { i18n } from "$lib/js/stores/store";
	import { direction } from "$lib/js/stores/store";
	import LinkDialog from "$lib/components/LinkHandler.svelte";
	// eslint-disable-next-line no-magic-numbers -- It's pixels.
	getCurrent().setMinSize(new PhysicalSize(480, 320));
	import { timer } from "$lib/js/theme";
	console.log("dev", dev);
	/* eslint-disable-next-line unicorn/prevent-abbreviations */
	let dir: string,
		directionTimer: ReturnType<typeof setInterval>;
	const timerDelay = 100;
	$: dir = $i18n.dir($i18n.language);
	onMount(() => {
		directionTimer = setInterval(() => {
			const root = document.querySelector(":root");
			if ($direction && !root?.classList.contains(dir)) {
				root?.classList.remove("ltr");
				root?.classList.remove("rtl");
				root?.classList.add(dir);
			}
			// textContrast.fix(document.querySelectorAll(".contrast"));
		}, timerDelay);
		document.querySelector("#loading")?.remove();
	});
	onDestroy(() => {
		clearInterval(timer);
		clearInterval(directionTimer);
	});
	import "$lib/js/osTasks";
</script>
{#if dev}
	<ScreenSize/>
{/if}
<LinkDialog/>
<slot/>