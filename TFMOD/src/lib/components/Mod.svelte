<script lang="ts">
	import { onMount } from "svelte";
	import Switch from "./Switch.svelte";
	import Up from "svelte-material-icons/ChevronUp.svelte";
	import Down from "svelte-material-icons/ChevronDown.svelte";
	import Top from "svelte-material-icons/ChevronDoubleUp.svelte";
	import Bottom from "svelte-material-icons/ChevronDoubleDown.svelte";
	import { compact } from "$lib/js/modCompact.js";
	import Group from "./Group.svelte";
	import type {ModInfo} from "$lib/js/modInfo";
	export let info: ModInfo,
		lang: string;
	const href = "main/mods?id=" + info.md5;
	onMount(() => {
		for (const [, element] of document.querySelectorAll<HTMLParagraphElement>("[data-lang]").entries()) {
			if (element.dataset.lang !== lang) element.style.display = "none";
		}
	});
</script>
<main data-conflicts={info.conflicts} data-enabled={info.enabled}>
	<div class="border">
		<a {href} class="main">
			<div class="picture" class:compact={$compact}>
				<picture class={info.enabled ? "" : "disabled"}>
					{#if info.srcset}
						{#each info.srcset as src}
							<source srcset={src.path} height={src.height} width={src.width}/>
						{/each}
					{/if}
					<img src={info.src} alt={info.alt}>
				</picture>
			</div>
			<div class="content">
				<div class="text">
					<div class="title">
						<h1>{info.name}</h1>
						{#if info.author}
							<p class="center">{info.author}</p>
						{/if}
					</div>
					{#if info.description}
						{#each info.description as data}
							<div data-lang={data.lang}>{data.text}</div>
						{/each}
					{/if}
				</div>
			</div>
		</a>
		<div class="info">
			<Switch bind:enabled={info.enabled}/>
			<div class="conflicts" data-conflicts={info.conflicts}>Conflicts: {info.conflicts}</div>
			<Group>
				<button><Top/></button>
				<button><Bottom/></button>
				<input type="number" value={info.position} min="1"/>
				<button><Up/></button>
				<button><Down/></button>
			</Group>
		</div>
	</div>
</main>
<style>
	main {
		display: grid;
		border-radius: 1rem;
		position: relative;
		grid-template-rows: 1fr auto;
		overflow: hidden;
		user-select: none;
		/* border: 1px solid var(--accentColorAlt); */
		/* background-color: var(--accentColor); */
		backdrop-filter: opacity(50%), blur(4px);
		color: var(--textColorOptimal);
		min-block-size: 128px;
		max-inline-size: 800px;
	}
	.border {
		--borderSize: 0.2rem;

		background-color: var(--accentColor);
		opacity: 1;
		margin-inline: var(--borderSize);
		margin-block: var(--borderSize);
		overflow: hidden;
		contain: paint;
		border-radius: 1rem;
		&:hover, &:focus-visible {
			box-shadow: 0 0 3px 3px var(--accentColor);
		}

	}
	a:link, a:visited, a:active {
		color: var(--textColorOptimal);
		text-decoration: none;
	}
	@media (max-width: 640px) {
		.picture:not(.compact) {
			inline-size: 0 !important;
			transition: var(--transition);
		}
	}
	.main {
		display: grid;
		grid-template-columns: auto 1fr;
	}
	.picture {
		inline-size: 256px;
		block-size: 256px;
		overflow: hidden;
		transition: var(--transition);
		-webkit-mask: url("/images/thumbnailMask.png");
		mask: url("/images/thumbnailMask.png");
		/* border-end-end-radius: 20px; */
		/* border-start-end-radius: 20px; */
	}
	.picture.compact {
		block-size: 256px;
		position: absolute;
		transform: translateY(-25%);
		transition: var(--transition);
		filter:opacity(50%);
	}
	picture {
		border-radius: 20px;
		overflow: hidden;
		transition: var(--transition);
		&.disabled {
			filter: grayscale(100%);
		}
		&>img {
			inline-size: 256px;
			block-size: 256px;
			object-fit: cover;
		}
	}
	.content {
		--height: 40px;

		display: flex;
		flex-flow: column nowrap;
		background-color: var(--light);
		color: var(--dark);
		block-size: calc(100% - var(--height) - (var(--defaultMargin) * 2));
	}
	.main:has(.picture.compact) .content {
		position: absolute;
		inline-size: 100%;
	}
	.text {
		padding-inline: 8px;
	}
	.title {
		display: grid;
		grid-template-columns: auto auto;
		text-overflow: ellipsis;
		line-height: 1rem;
		overflow: hidden;
		white-space: no-wrap;
		& .center {
			display: flex;
			justify-content: left;
			align-items: center;
		}
	}
	.info {
		inset-block-end: 0.5rem;
		padding-inline: 0.5rem;
		position: absolute;
		inline-size: 100%;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: var(--defaultMargin)
	}
	input[type="number"] {
		inline-size: 3rem;
	}
	input[type="number"]:focus {
		background-color: white;
		color: black;
	}
	.conflicts {
		display: flex;
		justify-content: center;
		align-items: center;
		/* min-inline-size: 50px; */
	}
</style>
