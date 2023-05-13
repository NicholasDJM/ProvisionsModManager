<script lang="ts">
	import "normalize.css";
	import "@fontsource/roboto";
	import "reasonable-colors";
	import "$lib/css/app.css";
	import "$lib/css/stylify.css";
	import "$lib/css/defaultMargin.css";
	// @ts-expect-error -- Can't do anything about missing types.
	import { LocalStorage } from "combo-storage";
	import * as Flag from "svelte-flags";
	import { isLoading } from "svelte-i18next";
	import { i18n } from "$lib/js/i18n";
	import { onMount, onDestroy } from "svelte";
	import Search from "svelte-material-icons/Magnify.svelte";
	import { items, term, filtered } from "$lib/js/languageSearch";
	$i18n.changeLanguage("en");
	let timer: ReturnType<typeof setInterval>,
		welcome = "Welcome",
		oldWelcome: string,
		fade = false;
	onMount(() => {
		if (LocalStorage.get("intro") === null) {
			const delay = 3000;
			// timer = setInterval(() => {
			// 	switch ($i18n.language) {
			// 		case "en": {
			// 			$i18n.changeLanguage("fr");
			// 			break;
			// 		}
			// 		default: {
			// 			$i18n.changeLanguage("en");
			// 		}
			// 	}
			// 	welcome = $i18n.t("intro:welcome");
			// }, delay);
		}
	});
	const fadeTime = 500;
	$: {
		if (welcome !== oldWelcome) {
			fade = true;
			const delay = fadeTime;
			setTimeout(() => {
				oldWelcome = welcome;
				fade = false;
			}, delay);
		}
	}
	onDestroy(() => {
		if (timer) clearInterval(timer);
	});
	items.set([
		"english",
		"french"
	]);
	const langData = {
		english: {
			native: "English",
			english: "English",
			flag: Flag.Ca
		},
		french: {
			native: "Français",
			english: "French",
			flag: Flag.Fr
		}
	};
</script>
<main class="defaultMargin" >
	{#if !$isLoading}
		<h1 id="welcome" class:fade-out={fade} class:fade-in={!fade}  style:--fadeTime={fadeTime + "ms"}>{oldWelcome}</h1>
	<label id="search">
		<Search size="2.5rem"/>
		<input type="search" bind:value={$term}/>
	</label>
	<ul>
		{#each $filtered as item}
			<li>
				<svelte:component this={langData[item].flag}/>
				{langData[item].native}
				<span class="muted">{langData[item].english}</span>
			</li>
		{/each}
	</ul>
	{/if}
</main>
<style>
	main {
		display: flex;
		flex-flow: column wrap;
	}
	#welcome {
		display: flex;
		justify-content: center;
		font-size: 3rem;
	}
	.fade-out {
		opacity: 0;
		transition: var(--fadeTime);
	}
	.fade-in {
		opacity: 1;
		transition: var(--fadeTime);
	}
	#search {
		block-size: 2.5rem;
		overflow: hidden;
		display: flex;
		align-items: center;
		gap: .5rem;
		padding-inline: 1rem;
		& input {
			block-size: 100%;
			inline-size: 100%;
		}
	}
	.muted {
		opacity: 0.5;
	}
</style>