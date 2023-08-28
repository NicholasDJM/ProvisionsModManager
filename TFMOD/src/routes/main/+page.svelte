<script lang="ts">
	import { getInstalled } from "$lib/js/tasks";
	getInstalled().then(value => console.log(value));
	import type { ModInfo } from "$lib/js/modInfo";
	const mods: Array<ModInfo> = [
		{
			name: "Hello",
			author: "Test",
			conflicts: 0,
			enabled: true,
			position: 0,
			src: "",
			alt: "",
			outdated: false,
			update: false,
			md5: ""
		}
	];
	/* global Mod */
</script>
<div class="test"></div>
{#each mods as mod}
	<!-- svelte-ignore missing-declaration -->
	<Mod info={mod}/>
{/each}
<style lang="postcss">
	.test {
		display: flex
	}
</style>