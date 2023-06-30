<script lang="ts">
	import { onMount } from "svelte";
	import { i18n } from "$lib/js/stores/store";
	import { title } from "$lib/js/stores/store";
	import { currentPage } from "$lib/js/stores/store";
	currentPage.set("settings");
	import { currentSettingsTab } from "$lib/js/stores/store";
	import TabBar from "$lib/components/TabBar.svelte";
	import { dev } from "$app/environment";
	interface Tab {
		text: string,
		url: string,
		id: string
	}
	let tabs: Array<Tab> = [];
	$: {
		tabs = [
			{text: $i18n.t("settings:tab-app"), url:"/main/settings", id:"main"},
			{text: $i18n.t("settings:tab-extension"), url:"/main/settings/extension", id:"extension"},
			{text: $i18n.t("settings:tab-update"), url:"/main/settings/update", id:"update"},
			{text: $i18n.t("settings:tab-about"), url:"/main/settings/about", id:"about"},
			{text: $i18n.t("settings:tab-license"), url:"/main/settings/license", id:"license"}
		];
		if (dev) {
			tabs[tabs.length] = {text: $i18n.t("settings:tab-debug"), url:"/main/settings/debug", id:"debug"};
		}
		title.set($i18n.t("settings:page-settings"));
	}

</script>
<TabBar currentTab={$currentSettingsTab} {tabs}/>
<div class="defaultMargin settings">
	<slot/>
</div>
<style lang="postcss">
	:global(.settings label) {
		display:grid; grid-template-columns:1fr auto;
		margin-block-end: calc(1rem / 3);
	}
</style>
