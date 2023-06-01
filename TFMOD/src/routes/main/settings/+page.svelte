<script lang="ts">
	import { onMount } from "svelte";
	import { i18n } from "$lib/js/i18n.js";
	import { currentSettingsTab } from "$lib/js/settingsTab.js";
	currentSettingsTab.set("main");
	import Theme from "$lib/components/Theme.comp.svelte";
	let translations: Record<string, string>,
		links: Array<string> = [];
	$: {
		translations = {
			theme: $i18n.t("settings:theme"),
			link: $i18n.t("links"),
			clear: $i18n.t("links-clear")
		};
		if (localStorage.getItem("links")) {
			// @ts-expect-error Will never be null, if statement above handles it.
			links = Object.keys(JSON.parse(localStorage.getItem("links")));
		}
	}
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
	function langAr() {
		$i18n.changeLanguage("ar");
	}
	function clearLinks() {
		localStorage.removeItem("links");
		links = [];
	}
</script>
<div class="container">
	<div>
		<details>
			<summary><span class="themePreview">{translations.theme}</span></summary>
			<div class="contents">
				<Theme/>
			</div>
		</details>
		{#if links.length > 0}
		<h1>
			{translations.link}
		</h1>
			{#each links as data}
				<p>{data}</p>
			{/each}
			<button on:click={clearLinks}>{translations.clear}</button>
		{/if}
		<br/>
		<button on:click={lang}>En</button>
		<button on:click={langFr}>Fr</button>
		<button on:click={langAr}>Ar</button>
		<p>{$i18n.language}</p>
	</div>
</div>
<style lang="postcss">
	.container {
		display: flex;
		justify-content: center;
		& > div {
			max-inline-size: 50rem;
			flex-grow: 1;
		}
	}
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