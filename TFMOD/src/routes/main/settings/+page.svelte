<script lang="ts">
	import { onMount } from "svelte";
	import { i18n } from "$lib/js/i18n.js";
	import { currentSettingsTab } from "$lib/js/settingsTab.js";
	currentSettingsTab.set("main");
	import Theme from "$lib/components/theme.svelte";
	onMount(() => {
		for (const [, element] of document.querySelectorAll("details").entries()) {
			element.open = true;
		}
	});
	// TODO: Delay closing of summary on click so we can fade out content. Maybe via preventDefault?
	function lang() {
		$i18n.changeLanguage("en");
	}
	function langFr() {
		$i18n.changeLanguage("fr");
	}
</script>
<details>
	<summary><span class="themePreview">Theme</span></summary>
	<div class="contents">
		<Theme/>
	</div>
</details>
<button on:click={lang}>En</button>
<button on:click={langFr}>Fr</button>
<p>{$i18n.language}</p>
<style>
	summary {
		cursor: pointer;
		/* text-align: center; */
		margin-block-end: var(--defaultMargin);
	}
	details .contents {
		opacity: 0;
		padding-inline: var(--defaultMargin);
		padding-block: var(--defaultMargin);
	}
	details[open] .contents {
		padding-block-start: var(--defaultMargin);
		border: 1px solid gray;
		border-radius: 5px;
		opacity: 1;
		transition: var(--transitionReducedMotion);
	}
	.themePreview {
		padding-inline: 5px;
		padding-block: 2px;
		background-color: var(--accentColor);
		color: var(--textColorOptimal);
		border-radius: 5px;
	}
</style>