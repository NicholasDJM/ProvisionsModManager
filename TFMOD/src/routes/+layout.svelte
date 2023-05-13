<script lang="ts">
	import { dev } from "$app/environment";
	import ScreenSize from "$lib/components/Screen.svelte";
	import { getCurrent, PhysicalSize } from "@tauri-apps/api/window";
	import { onMount, onDestroy } from "svelte";
	import { i18n } from "$lib/js/i18n";
	import { direction } from "$lib/js/direction";
	// eslint-disable-next-line no-magic-numbers -- It's pixels.
	getCurrent().setMinSize(new PhysicalSize(480, 320));
	import { timer } from "$lib/js/theme";
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
		}, timerDelay);
	});
	onDestroy(() => {
		clearInterval(timer);
		clearInterval(directionTimer);
	});
</script>
{#if dev}
	<ScreenSize/>
{/if}
<slot/>