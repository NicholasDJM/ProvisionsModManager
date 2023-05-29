<svelte:head>
	<title>Mods - Provisions Mod Manager</title>
</svelte:head>
<script lang="ts">
	import { i18n } from "$lib/js/i18n.js";
	import { title } from "$lib/js/title.js";
	$: title.set($i18n.t("main:page-mods"));
	import { currentPage } from "$lib/js/page.js";
	currentPage.set("mods");
	import { backButton } from "$lib/js/subpage";
	import Enabled from "svelte-material-icons/FileCheckOutline.svelte";
	import Disabled from "svelte-material-icons/FileRemoveOutline.svelte";
	import Conflicts from "svelte-material-icons/FileAlertOutline.svelte";
	import Outdated from "svelte-material-icons/FileCancelOutline.svelte";
	import Pills from "$lib/components/Pills.svelte";
	/* eslint-disable-next-line no-duplicate-imports -- Not a duplicate. */
	import type { PillEvent } from "$lib/components/Pills.svelte";
	import HideNavBar from "$lib/components/HideNavBar.svelte";
	import type {ModInfo} from "$lib/js/modInfo";
	/* eslint-disable unicorn/prevent-abbreviations */
	import Mod from "$lib/components/Mod.svelte";
	/* eslint-disable-next-line no-duplicate-imports -- Not a duplicate. */
	import type { ModEvent, MoveEvent } from "$lib/components/Mod.svelte";
	import Gallery from "$lib/components/Gallery.svelte";
	/* eslint-disable-next-line no-duplicate-imports -- Not a duplicate. */
	import type { Images } from "$lib/components/Gallery.svelte";
	import { onMount, onDestroy } from "svelte";
	//import { dropdown, feedback } from "$lib/navDropdown.js";
	let fullscreen = false;
	interface Options {
		name: string,
		text: string,
		/* eslint-disable-next-line @typescript-eslint/no-explicit-any -- Don't know what the type is supposed to be. It's a Component */
		icon?: any
	}
	const filterOptions: Array<Options> = [
		{
			name: "enabled",
			text: "Enabled",
			icon: Enabled
		},
		{
			name: "disabled",
			text: "Disabled",
			icon: Disabled
		},
		{
			name: "conflicts",
			text: "Conflicts",
			icon: Conflicts
		},
		{
			name: "outdated",
			text: "Incompatible",
			icon: Outdated
		}
	];
	let filter: Record<string, boolean> = {
		all: true,
		enabled: false,
		disabled: false,
		conflicts: false,
		outdated: false
	};
	function handlePillEvent(event: PillEvent) {
		//console.log("Clicked %c\"" + event.detail.name + "\"%c with a state of %c" + event.detail.state, "color:lightgreen", "color:white", "color:skyblue");
		filter[event.detail.name] = event.detail.state;
		//console.log(event.detail.name, filter[event.detail.name]);
		filter.enabled || filter.disabled || filter.conflicts || filter.outdated ? filter.all = false : filter.all = true;
		// console.table(filter);
	}
	/* TODO: Handle combinations of selected pills. Right now, selected pills only show all of their type
	// Eventually, I want the results to be combined.
	// Ex: If enabled and conflicts are enabled, only show mods that are both enabled and have Conflicts;
	//		It should not show any disabled mods with conflicts.
	*/
	let mods: Array<ModInfo> =
		[
			{
				name: "Hello World",
				author: "Nicholas Miller",
				description: [
					{
						lang: "es",
						text: "Hola"
					},
					{
						lang: "en",
						text: "Hello89hase4ghuiauieh4 uioah89huuiopha89puihsd 89pi89p 89hjaw 89pihjouef3 89pa h8i9ja h8i9pwph8i9 h89p fh89ppawe h8i9pa ph8i9 8i9pw 8i9pou8i9 ah8i9oh89iw h8i9op aiosdjmn rg89ha97ue8ih4gau8i9eh48ri9 a4wh89 tawe 94u8htu8i9pahu8i9pw 4eu89a 9hu8iwhu8i9pat wp9ehu8io tph9u8iaew4ui9 hhuiop"
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
				conflicts: 0,
				update: false,
				version: "1.0.5"
			},
			{
				name: "Hello World",
				src: "/images/test.png",
				alt: "Test",
				position: 2,
				md5: "123",
				enabled: false,
				outdated: false,
				conflicts: 30,
				explicit: ["blood", "nudity"],
				update: true
			}
		],
		selectedMod = "",
		open = false,
		mini = false,
		miniTimer: ReturnType<typeof setInterval>,
		keepOpen = false;
	const images: Array<Images> = [
		{
			src: "/images/testLarge.png",
			alt: "Hello",
			selected: true
		},
		{
			src: "/images/testLarge.png",
			alt: "World",
			selected: false
		}
	],
		miniTimerDelay = 100;
	function handleClick(event: CustomEvent<{id: string}>) {
		selectedMod = event.detail.id;
		if (mini) {
			open = true;
		}
		console.log(open);
	}
	onMount(() => {
		miniTimer = setInterval(() => {
			/* eslint-disable-next-line no-magic-numbers -- It's pixels*/
			mini = window.innerWidth < 1000;
			if (!keepOpen) {
				if (open && mini) {
					backButton.set(true);
				} else {
					backButton.set(false);
				}
			}
			// TODO: Back button should differentiate between going back in nav history and simply changing a variable. Second store?
		}, miniTimerDelay);
	});
	onDestroy(() => {
		clearInterval(miniTimer);
	});
	// If currently viewing the gallery in fullscreen, don't reset the view to mods panel. (When fullscreen innerWidth is more than 1000)
	$: keepOpen = fullscreen;
	$: open = keepOpen ? true : $backButton;
	// TODO: If mod has no thumbnail, resize text size to max
</script>
<div class="container">
	<main class="defaultMargin" inert={open}>
		<!-- <button on:click={() => compact.set(!$compact)}>{$compact ? "Compact" : "Comfortable"}</button> -->
		<Pills options={filterOptions} on:pill={handlePillEvent}/>
		<div class="mods">
			{#each mods as mod (mod.position)}
				{#if filter.all ||
					((filter.enabled && mod.enabled) ||
					(filter.disabled && !mod.enabled) ||
					(filter.conflicts && mod.conflicts) ||
					(filter.outdated && mod.outdated))
				}
					<Mod info={mod} on:mod={handleClick}/>
				{/if}
			{/each}
		</div>
	</main>
	<aside id="preview" class:previewOpen={open} inert={!open && mini}>
		{#if (open && mini) || keepOpen}
			<HideNavBar/>
		{/if}
		<Gallery bind:fullscreen={fullscreen} images={images}/>
		{#if !fullscreen}
			<div class="previewContent">
				<h1>Hello</h1>
			</div>
		{/if}
	</aside>
</div>
<style lang="postcss">
	main {
		display: flex;
		flex-flow: row wrap;
		align-content: flex-start;
		gap: 1rem;
		overflow-y: auto;
	}
	.mods {
		display: flex;
		flex-flow: column wrap;
		gap: var(--defaultMargin);
		inline-size: 100%;
	}
	.container {
		display: grid;
		grid-template-columns: 1fr auto;
		block-size: 100%;
	}
	aside {
		overflow-x: hidden;
		inline-size: 0;
		/* TODO: Slide in from inline-end when open, and vice-versa when closed */
	}
	@custom-media --max-width (max-width: 1200px);
	@custom-media --min-width (min-width: 1200px);
	@media (--min-width) {
		.container {
			grid-template-columns: 50% 50%;
		}
		aside {
			border-inline-start: 1px solid rgb(127 127 127 / 0.5);
			inline-size: auto;
		}
		.previewContent {
			padding: var(--defaultMargin);
		}
	}
	@media (--max-width) {
		.container:has(aside.previewOpen) {
			grid-template-columns: auto 100%;
		}
		.container:has(aside.previewOpen) main {
			inline-size: 0;
			padding: 0;
		}
		aside.previewOpen {
			inline-size: 100%;
		}
		/* BUG: Cannot nest rule below with rule above. Creates an error while compiling. Probably nothing I can do. Report to Svelte? PostCSS? Vite? */
		aside.previewOpen .previewContent {
			padding: var(--defaultMargin);
		}
	}
</style>
