<svelte:head>
	<meta class="highlightedTab wholeLength halfLength thirdLength"/>
</svelte:head>
<script lang="ts">
	import { i18n } from "$lib/i18n.js";
	import { title } from "$lib/title.js";
	title.set($i18n.t("pageSettingsTitle"));
	import { currentPage } from "$lib/page.js";
	currentPage.set("settings");
	import { currentSettingsTab } from "$lib/settingsTab.js";
	import jq from "jquery";
	export let tabs: Array<Array<string>> = [ // [Text, Address, ID]
		[$i18n.t("settingsMainTabTitle"), "/main/settings", "main"],
		[$i18n.t("settingsExtensionTabTitle"), "/main/settings/extension", "extension"],
		[$i18n.t("settingsUpdateTabTitle"), "/main/settings/update", "update"],
		[$i18n.t("settingsAboutTabTitle"), "/main/settings/about", "about"],
		[$i18n.t("settingsLicenseTabTitle"), "/main/settings/license", "license"]
	];
	tabs;
	$: jq(() => {
		let tabNumber = 0;
		jq(".tabBar>a").each((index) => {
			tabNumber = index + 1; // Count the number of tabs.
		});
		jq(".tabBar").css("grid-template-columns", `repeat(${tabNumber}, 1fr)`); // Double grid width, so we can have a third in a "four wide" grid.
		jq("[data-tab]").each((index, element) => {
			if (jq(element).attr("data-tab") === $currentSettingsTab) {
				jq(element).addClass("highlightedTab");
			} else {
				jq(element).removeClass("highlightedTab");
			}
		});
	});
	import "$lib/defaultMargin.css";
</script>
<div class="tabBar">
	{#each tabs as tab}
		<a href={tab[1]} class="settingsTab" data-tab={tab[2]}>
			{tab[0]}
		</a>
	{/each}
</div>
<main class="defaultMargin">
	<slot/>
</main>
<style>
	:root {
		--highlightSize: 3px;
	}
	.tabBar {
		inline-size: 100%;
		display: grid;
		box-sizing: border-box;
	}
	.settingsTab {
		display: block;
		position: relative;
		box-sizing: border-box;
		padding-inline: 5px;
		border: 0;
		color: var(--textColor);
		text-decoration: none;
		padding-block: 5px;
		border-block-end: var(--highlightSize) solid rgb(0 0 0 / 0);
		transition: background-color var(--transition); /* Don't animate inset */
		&:hover, &:focus-within {
			background-color: var(--accentColor);
			color: var(--menuSpeed);
		}
	}
	.settingsTab:nth-child(1) {
		padding-inline-start: 20px;
	}
	.settingsTab:nth-last-child(1) {
		padding-inline-end: 20px;
	}

	/*
	.wholeLength {
		/* stylelint-disable-next-line plugin/non-zero-length-expect-unit -- No unit needed *
		grid-column: span 8;
	}
	.halfLength {
		/* stylelint-disable-next-line plugin/non-zero-length-expect-unit -- No unit needed *
		grid-column: span 4;
	}
	.thirdLength {
		/* stylelint-disable-next-line plugin/non-zero-length-expect-unit -- No unit needed *
		grid-column: span 3;
	} */
	.highlightedTab {
		border-block-end: var(--highlightSize) solid var(--accentColor);
	}
</style>