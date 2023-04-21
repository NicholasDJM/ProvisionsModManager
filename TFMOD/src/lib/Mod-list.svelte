<script lang="ts">
	/* eslint-disable unicorn/prevent-abbreviations */
	import Mod from "./Mod.svelte";
	let mods = [];
</script>
<div id="list" class="display:grid gap:8px">
	{#each mods as mod}
		<Mod
			name={mod.name}
			author={mod.author}
			enabled={mod.enabled}
			src={mod.thumbnail}
			alt="Hello"
			position={mod.position}
			description={mod.description.en}
			conflicts={0}
			md5={mod.md5}
		/>
	{/each}
</div>
<style>
	:global(.modItem:first-child) {
		/* Svelte really needs to fix unused styling to be optional */
		border-start-start-radius: 20px;
		border-start-end-radius: 20px;
	}
	:global(.modItem:last-child) {
		border-end-start-radius: 20px;
		border-end-end-radius: 20px;
	}
</style>