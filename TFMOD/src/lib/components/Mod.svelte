<script lang="ts" context="module">
	export type ModEvent = CustomEvent<{id: string}>;
	export type MoveEvent = CustomEvent<{position: number}>;
</script>
<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from "svelte";
	import Switch from "$lib/components/Switch.svelte";
	import Group from "$lib/components/Group.svelte";
	import Up from "svelte-material-icons/ChevronUp.svelte";
	import Down from "svelte-material-icons/ChevronDown.svelte";
	import Top from "svelte-material-icons/ChevronDoubleUp.svelte";
	import Bottom from "svelte-material-icons/ChevronDoubleDown.svelte";
	import Download from "svelte-material-icons/FileDownload.svelte";
	import { LocalStorage } from "combo-storage";
	import { i18n } from "$lib/js/i18n";
	import type { ModInfo } from "$lib/js/modInfo";
	export let info: ModInfo;
	const lang: string = LocalStorage.get("language"),
		dispatch = createEventDispatcher();
	function handleClick() {
		dispatch("mod", {id: info.md5});
	}
	function handleMove(event: MouseEvent) {
		const target = event.target as HTMLButtonElement;
		if (target.dataset.id) {
			let newPosition: number;
			switch (target.dataset.id) {
				case "moveToTop": {
					newPosition = 1;
					break;
				}
				case "moveToBottom": {
					newPosition = -1;
					break;
				}
				case "moveUpOne": {
					newPosition = info.position - 1;
					break;
				}
				default: {
					newPosition = info.position + 1;
				}
			}
			if (newPosition) {
				dispatch("move", {position: newPosition});
			}
		}
	}
	let censor = info.explicit?.length > 0 || false,
		translations: Record<string, string>;
	$: {
		translations = {
			author: $i18n.t("main:mod-author", {"name": info.name, "author": info.author}),
			blood: $i18n.t("main:explicit-tag-blood"),
			nudity: $i18n.t("main:explicit-tag-nudity"),
			profanity: $i18n.t("main:explicit-tag-profanity"),
			conflicts: $i18n.t("main:mod-conflicts", {"count": info.conflicts}),
			description: $i18n.t("main:mod-no-description"),
			update: $i18n.t("main:mod-update-available"),
			version: $i18n.t("main:mod-version", {"version": info.version})
		};
	}
</script>
<main>
	<div class="censorContainer">
		{#if info.explicit && censor}
			<div class="censor">
				<label>
					<span>
						{$i18n.t("main:explicit-warning")}
					</span>
					<span>
						{#each info.explicit as tag, index}
							{translations[tag]}{#if index + 1 !== info.explicit.length}{", "}{/if}
						{/each}
					</span>
					<div>
						<button on:click={() => censor = false}>{$i18n.t("main:explicit-button")}</button>
					</div>
				</label>
			</div>
		{/if}
		<a href="#preview" class="content" on:click={handleClick} inert={censor}>
			<div class="text">
				<h1>
					{info.name}
					{#if info.author}
						<span class="author">{translations.author}</span>
					{/if}
				</h1>
				<p class="description">
					{#if info.description}
						{#each info.description as text, index}
							{#if info.description[index].lang === lang}
								{info.description[index].text}
							{/if}
						{/each}
					{:else}
						{translations.description}
					{/if}
				</p>
			</div>
			<div class="blur">
				<picture class:grayscale={!info.enabled}>
					{#if info.srcset}
						{#each info.srcset as image}
							<source srcset={image.path} width={image.width} height={image.height}/>
						{/each}
					{/if}
					<img alt={info.alt} src={info.src}/>
				</picture>
			</div>
		</a>
	</div>
	<div class="controls" style:--grid={info.update || info.version ? "1fr auto" : "1fr"}>
		<Switch bind:enabled={info.enabled}/>
		<span class="controlsText">{translations.conflicts}</span>
		{#if info.update}
			<button class="button"><Download/>{translations.update}</button>
		{:else if info.version}
			<span class="controlsText">{translations.version}</span>
		{/if}
		<Group>
			<button data-id="moveToTop" on:click={handleMove}><Top/></button>
			<button data-id="moveToBottom"><Bottom/></button>
			<input type="number" value={info.position} min="1"/>
			<button data-id="moveUpOne"><Up/></button>
			<button data-id="moveDownOne"><Down/></button>
		</Group>
	</div>
</main>
<style>
	a {
		color: var(--textColor);
		text-decoration: none;
	}
	main {
		display: grid;
		position: relative;
		grid-template-rows: 1fr auto;
		border-radius: 1rem;
		overflow: hidden;
		transition: var(--transitionReducedMotion);
		&:hover, &:focus-visible {
			box-shadow: 0 0 3px 3px var(--accentColor);
		}
	}
	.content {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		position: relative;
		cursor: pointer;
		inline-size: 100%;
		block-size: 100%;
		overflow: hidden;
		background-color: var(--backgroundColorAlt);
		padding-inline-start: var(--defaultMargin);
		max-block-size: 128px;
	}
	h1 {
		margin-block-start: 0;
		margin-block-end: 0;
		display: block;
		inline-size: 100%;
	}
	h1 .author {
		font-size: 16pt;
		font-weight: 400;
		opacity: 0.9;
	}
	img {
		--mask: linear-gradient(270deg, rgb(0 0 0 / 1) 80%, rgb(0 0 0 / 0) 99%, rgb(0 0 0 / 0) 100%);
		--size: 128px;

		/* stylelint-disable-next-line property-no-vendor-prefix -- Mask doesn't work on MS Edge */
		-webkit-mask: var(--mask);
		mask: var(--mask);
		inline-size: var(--size);
		block-size: var(--size);
		display:block;
		scale: 125%;
	}
	picture {
		transition: var(--transitionReducedMotion);
	}
	.grayscale {
		filter: grayscale(100%);
	}
	.blur {
		transition: var(--transitionReducedMotion);
	}
	main:hover .blur, main:focus-visible .blur {
		filter: blur(.25rem);
		/* opacity: 0.6; */
	}
	.text {
		margin-block: var(--defaultMargin);
		display: grid;
		grid-template-rows: auto 1fr;
		inline-size: 100%;
		overflow: hidden;
	}
	.description {
		/* overflow-wrap: break-word; */
		text-overflow: ellipsis;
		/* word-break: break-all; */
		overflow: hidden;
		margin-block: 0;
	}
	.controls {
		display: grid;
		grid-template-columns: auto var(--grid) auto;
		gap: 0.5rem;
		padding-inline: var(--defaultMargin);
		padding-block: var(--defaultMargin);
		background-color: var(--accentColor);
	}
	.controlsText {
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		color: var(--textColorOptimal);
	}
	.button {
		border-radius: 1rem;
		border: none;
		background-color: var(--backgroundColor);
		color: var(--textColor);
		display: grid;
		grid-template-columns: auto auto;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		padding-inline: 0.5rem;
		cursor: pointer;
		transition: var(--transitionReducedMotion);
		&:hover, &:focus-visible {
			background-color: var(--accentColorAlt);
			color: var(--textColorOptimalAlt);
			box-shadow: inset 0 0 3px 3px var(--accentColor);
		}
	}
	.button:active {
		background-color: white;
		color: black;
		box-shadow: none;
	}
	input[type="number"] {
		inline-size: 3rem;
		&:focus-visible {
			background-color: white;
			color: black;
		}
	}
	.censorContainer {
		position: relative;
	}
	.censor {
		position: absolute;
		block-size: 100%;
		inline-size: 100%;
		backdrop-filter: blur(10rem);
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column nowrap;
		padding-inline: 1rem;
		& > * {
			/* max-inline-size: 75%; */
		}
	}
	.censor label {
		inline-size: 100%;
	}
	.censor span {
		display: flex;
		justify-content: center;
	}
	.censor span:nth-of-type(1) {
		margin-block-start: 1rem;
	}
	.censor span:nth-last-of-type(1) {
		margin-block-end: 1rem;
	}
	.censor div {
		display: flex;
		justify-content: center;
	}
	.censor button {
		cursor: pointer;
	}
	@media (max-width: 640px) {
		.censor * {
			max-inline-size: 100%;
		}
	}
</style>