<script lang="ts">
	import { dev } from "$app/environment";
	import ScreenSize from "$lib/components/Screen.svelte";
	import { getCurrent, PhysicalSize } from "@tauri-apps/api/window";
	import { onDestroy } from "svelte";
	import { isLoading } from "svelte-i18next";
	import { i18n } from "$lib/js/i18n";
	let load:string;
	$: {
		load = $i18n.t("common:load");
	}
	// eslint-disable-next-line no-magic-numbers -- It's pixels.
	getCurrent().setMinSize(new PhysicalSize(480, 320));
	import { timer } from "$lib/js/theme";
	onDestroy(() => {
		clearInterval(timer);
		// clearInterval(loadTimer);
	});
</script>
{#if load === "done"}
	{#if dev}
		<ScreenSize/>
	{/if}
	<slot/>
{:else}
	<p>{$i18n.language} is missing "common:load"</p>
{/if}