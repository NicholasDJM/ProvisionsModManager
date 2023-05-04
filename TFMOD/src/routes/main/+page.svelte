<svelte:head>
	<title>Mods - Provisions Mod Manager</title>
</svelte:head>
<script lang="ts">
	import { i18n } from "$lib/js/i18n.js";
	import { title } from "$lib/js/title.js";
	title.set($i18n.t("page-mods"));
	import { currentPage } from "$lib/js/page.js";
	currentPage.set("mods");
	import Pills from "$lib/components/Pills.svelte";
	import { compact } from "$lib/js/modCompact";
	//import { dropdown, feedback } from "$lib/navDropdown.js";
	const options = [
		{
			name: "enabled",
			text: "Enabled"
		},
		{
			name: "disabled",
			text: "Disabled"
		},
		{
			name: "conflicts",
			text: "Conflicts"
		},
		{
			name: "outdated",
			text: "Incompatible"
		}
	];
	function handlePillEvent(event: Event) {
		//console.log("Clicked %c\"" + event.detail.name + "\"%c with a state of %c" + event.detail.state, "color:lightgreen", "color:white", "color:skyblue");
	}
	import type {ModInfo} from "$lib/js/modInfo";
	let mods: Array<ModInfo> = [
		{
			name: "Hello World",
			description: [
				{
					lang: "es",
					text: "Hola"
				},
				{
					lang: "en",
					text: "Hello"
				},
				{
					lang: "fr",
					text: "Bonjour"
				}
			],
			src: "/images/test.png",
			alt: "Test",
			position: 1,
			md5: "123",
			enabled: true,
			outdated: false,
			conflicts: 0
		}
	];
	/* eslint-disable unicorn/prevent-abbreviations */
	import Mod from "$lib/components/Mod.svelte";
</script>
<main class="defaultMargin">
	<button on:click={() => compact.set(!$compact)}>{$compact ? "Compact" : "Comfortable"}</button>
	<Pills {options} on:pill={handlePillEvent}/>
	<div class="mods">
		{#each mods as mod (mod.md5)}
			<Mod info={mod} lang={$i18n.language}/>
		{/each}
	</div>
</main>
<style>
	main {
		display: flex;
		flex-flow: row wrap;
		gap: 15px;
	}
	.mods {
		display: flex;
		flex-flow: column wrap;
		gap: 8px;
		inline-size: 100%;
	}
</style>
