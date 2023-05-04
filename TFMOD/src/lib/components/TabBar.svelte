<script lang="ts">
	import { onMount } from "svelte";
	interface Tab {
		text: string,
		url: string,
		id: string
	}
	export let currentTab: string,
		tabs: Array<Tab>;
	let domReady = false;
	onMount(() => {
		domReady = true;
		const tabBar = document.querySelector<HTMLDivElement>(".tabBar");
		if (tabBar) tabBar.style.gridTemplateColumns = `repeat(${document.querySelectorAll(".tabBar>a").length}, 1fr)`;
	});
	$: if (domReady) {
		for (const [, element] of document.querySelectorAll<HTMLAnchorElement>("[data-tab]").entries()) {
			element.classList.remove("highlightedTab");
			if (element.dataset.tab === currentTab) {
				element.classList.add("highlightedTab");
			}
		}
	}
</script>
<div class="tabBar">
	{#each tabs as tab}
	<a href={tab.url} class="settingsTab highlightedTab" data-tab={tab.id}>
		{tab.text}
	</a>
	{/each}
</div>
<style>
	:root {
		--highlightSize: 3px;
	}
	.tabBar {
		inline-size: 100%;
		display: flex;
		box-sizing: border-box;
		flex-flow: row wrap;
		position: relative;
	}
	.settingsTab {
		flex-grow: 1;
		text-align: center;
		display: block;
		position: relative;
		box-sizing: border-box;
		padding-inline: 5px;
		border-block-end: var(--highlightSize) solid rgb(127 127 127 / 0.25);
		color: var(--textColor);
		text-decoration: none;
		padding-block: 5px;
		transition: background-color var(--transitionReducedMotion), border var(--transitionReducedMotion); /* Don't animate inset */
		&:hover, &:focus-within {
			background-color: var(--accentColor);
			filter: brightness(110%);
			transition: var(--menuSpeed);
			color: var(--textColorOptimal);
			border-block-end: var(--highlightSize) solid var(--accentColor);
		}
	}
	/* .settingsTab:nth-child(1) {
		padding-inline-start: 20px;
	} */
	.highlightedTab {
		border-block-end: var(--highlightSize) solid var(--accentColor);
	}
</style>