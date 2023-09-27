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
			src: "/images/test.webp",
			alt: "",
			outdated: false,
			update: false,
			md5: ""
		}
	];
	import { title } from "$lib/js/stores/store";
	title.set("Installed Mods");
	/* global Mod */
</script>
<div class="defaultMargin">
{#each mods as mod}
	<!-- svelte-ignore missing-declaration -->
	<Mod info={mod}/>
{/each}
</div>
<style lang="postcss">
</style>