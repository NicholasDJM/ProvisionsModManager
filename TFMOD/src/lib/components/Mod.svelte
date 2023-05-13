<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from "svelte";
	import Switch from "$lib/components/Switch.svelte";
	import Group from "$lib/components/Group.svelte";
	import Up from "svelte-material-icons/ChevronUp.svelte";
	import Down from "svelte-material-icons/ChevronDown.svelte";
	import Top from "svelte-material-icons/ChevronDoubleUp.svelte";
	import Bottom from "svelte-material-icons/ChevronDoubleDown.svelte";
	import { LocalStorage } from "combo-storage";
	import { i18n } from "$lib/js/i18n";
	import type { ModInfo } from "$lib/js/modInfo";
	export let info: ModInfo;
	const lang: string = LocalStorage.get("language"),
		dispatch = createEventDispatcher<{mod:{id: string}}>();
	function handleClick() {
		dispatch("mod", {id: info.md5});
	}
	function handleKey(event: KeyboardEvent) {
		if (event.key === "Enter" || event.key === "Space") {
			dispatch("mod", {id: info.md5});
		}
	}
	let censor = true,
		translations: Record<string, string>;
	$: {
		translations = {
			blood: $i18n.t("main:explicit-tag-blood"),
			nudity: $i18n.t("main:explicit-tag-nudity"),
			profanity: $i18n.t("main:explicit-tag-profanity"),
			conflicts: $i18n.t("main:mod-conflicts", {"count": info.conflicts}),
			description: $i18n.t("main:mod-no-description")
		};
	}
</script>
<main>
	<div class="censorContainer">
		{#if info.explicit && censor}
			<div class="censor">
				<p>{$i18n.t("main:explicit-warning")}</p>
				<p>
					{#each info.explicit as tag, index}
						{translations[tag]}{#if index + 1 !== info.explicit.length}{", "}{/if}
					{/each}
				</p>
				<button on:click={() => censor = false}>{$i18n.t("main:explicit-button")}</button>
			</div>
		{/if}
		<div class="content" on:click={handleClick} on:keydown={handleKey}>
			<div class="text">
				<h1>{info.name}</h1>
				<div class="description">
					{#if info.description}
						{#each info.description as text, index}
							{#if info.description[index].lang === lang}
								{info.description[index].text}
							{/if}
						{/each}
					{:else}
						{translations.description}
					{/if}
				</div>
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
		</div>
	</div>
	<div class="controls">
		<Switch bind:enabled={info.enabled}/>
		<span class="conflicts">{translations.conflicts}</span>
		<Group>
			<button><Top/></button>
			<button><Bottom/></button>
			<input type="number" value={info.position} min="1"/>
			<button><Up/></button>
			<button><Down/></button>
		</Group>
	</div>
</main>
<style>
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
		max-block-size: 140px;
	}
	h1 {
		margin-block-start: var(--defaultMargin);
		margin-block-end: 0;
		display: block;
		inline-size: 100%;
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
		display: grid;
		grid-template-rows: auto 1fr;
		inline-size: 100%;
	}
	.description {
		inline-size: 100%;
		display: block;
		overflow-wrap: break-word;
		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-all;
		/* block-size: 60px; */
	}
	.controls {
		display: grid;
		grid-template-columns: auto 1fr auto;
		padding-inline: var(--defaultMargin);
		padding-block: var(--defaultMargin);
		background-color: var(--accentColor);
	}
	.conflicts {
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		color: var(--textColorOptimal);
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
		& * {
			max-inline-size: 75%;
		}
	}
	.censor p {
		margin-block: 0;
	}
	.censor p:nth-of-type(1) {
		margin-block-start: 1rem;
	}
	.censor p:nth-last-of-type(1) {
		margin-block-end: 1rem;
	}
	@media (max-width: 640px) {
		.censor * {
			max-inline-size: 100%;
		}
	}
</style>