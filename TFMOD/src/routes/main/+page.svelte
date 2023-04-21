<svelte:head>
	<title>Mods - Provisions Mod Manager</title>
</svelte:head>
<script lang="ts">
	import { i18n } from "$lib/i18n.js";
	import { title } from "$lib/title.js";
	title.set($i18n.t("pageModsTitle"));
	import jq from "jquery";
	import { currentPage } from "$lib/page.js";
	currentPage.set("mods");
	import ModList from "$lib/Mod-list.svelte";
	import { dropdown, feedback } from "$lib/navDropdown.js";
	dropdown.set([feedback]);
</script>
<main>
	<ModList/>
</main>
<style>
	main {
		margin-inline: var(--defaultMargin);
		margin-block: var(--defaultMargin);
		padding-block: var(--defaultMargin);
	}
</style>