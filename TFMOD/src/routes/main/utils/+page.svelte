<script lang="ts">
	import { i18n } from "$lib/js/stores/store";
	import { title } from "$lib/js/stores/store";
	$: title.set($i18n.t("utils:page-utils"));
	import { currentPage } from "$lib/js/stores/store";
	currentPage.set("utils");
	import UtilityCard from "$lib/components/UtilityCard.svelte";
	import { WebviewWindow } from "@tauri-apps/api/window";
	import { invoke } from "@tauri-apps/api";
	function openIDE(event: KeyboardEvent | MouseEvent) {
		if ((event instanceof KeyboardEvent && event.key === "Enter") || event instanceof MouseEvent) {
			new WebviewWindow("ide", {
				url: "/utils/ide/editor",
				title: "CFG Integrated Development Environment"
			}).setFocus();
		}
	}
	function openCaption(event: KeyboardEvent | MouseEvent) {
		if (event instanceof KeyboardEvent && event.key === "Enter") {
			// Do a thing.
		}
		if (event instanceof MouseEvent) {
			// Do a thing.
		}
	}
	interface Card {
		title: string,
		src: string,
		alt: string,
		description: string,
		func?: Function,
		href?: string
	}
	const cards: Array<Card> = [
		{
			title: "Pyroland Manager",
			src: "/images/copyrighted_images/balloonicorn.webp",
			alt: "Pyroland Manager Image",
			description: "Manage and analyse which maps are eligible for Pyroland",
			href: "/main/utils/pyroland"
		},
		{
			title: "CFG Editor",
			src: "/images/test.webp",
			alt: "CFG Editor Image",
			description: "Create and edit scripts with our IDE",
			func: openIDE
		},
		{
			title: "Caption Editor",
			src: "/images/test.webp",
			alt: "Caption Editor Image",
			description: "Create custom captions that can be emitted via script.",
			func: openCaption
		},
		{
			title: "Sound Explorer",
			src: "/images/test.webp",
			alt: "Sound Explorer",
			description: "Find and play various game sounds.",
			href: "/main/utils/sounds"
		}
	];
</script>
<div class="main">
	{#each cards as card}
		{#if card.href}
			<a href={card.href}>
				<UtilityCard
					title={card.title}
					src={card.src}
					alt={card.alt}
					description={card.description}
				/>
			</a>
		{:else if card.func}
			<a href="#a" on:click={card.func} on:keydown={card.func}>
				<UtilityCard
					title={card.title}
					src={card.src}
					alt={card.alt}
					description={card.description}
				/>
			</a>
		{/if}
	{/each}
</div>
<style lang="postcss">
	.main {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		gap: 15px;
		margin-inline: var(--defaultMargin);
		margin-block: var(--defaultMargin);
		padding-block: calc(var(--defaultMargin) * 2);
		padding-inline: calc(var(--defaultMargin) * 2);
	}
	a, a:link, a:visited, a:active {
		text-decoration: none;
	}
</style>
