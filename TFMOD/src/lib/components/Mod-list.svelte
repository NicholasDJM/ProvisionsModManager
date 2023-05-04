<script lang="ts">
	//TODO: This file is extraneous, combine with /main/+page.svelte
	/* eslint-disable unicorn/prevent-abbreviations */
	import Mod from "./Mod.svelte";
	import type { page } from "$app/stores";
	//TODO: Dynamically generate description support languages into interface, so typescript doesn't complain.

	export let mods;
</script>
<div id="list">
	{#each mods as mod (mod.md5)}
		<Mod info={mod}/>
	{/each}
</div>
<style>
	#list {
		display: flex;
		flex-flow: column wrap;
		gap: 8px;
	}
	/* :global(.modItem:first-child) {
		/* Svelte really needs to fix unused styling to be optional
		border-start-start-radius: 20px;
		border-start-end-radius: 20px;
	}
	:global(.modItem:last-child) {
		border-end-start-radius: 20px;
		border-end-end-radius: 20px;
	} */
</style>
