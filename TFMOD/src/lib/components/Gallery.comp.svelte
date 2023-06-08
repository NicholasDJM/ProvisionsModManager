<script lang="ts" context="module">
	export interface Images {
		src: string,
		alt: string,
		selected: boolean,
		width: number,
		height: number
	}
</script>
<script lang="ts">
	import { appWindow } from "@tauri-apps/api/window";
	import { onMount } from "svelte";
	import Left from "svelte-material-icons/ChevronLeft.svelte";
	import Right from "svelte-material-icons/ChevronRight.svelte";
	import Fullscreen from "svelte-material-icons/Fullscreen.svelte";
	import FullscreenExit from "svelte-material-icons/FullscreenExit.svelte";
	import { Swipe, SwipeItem } from "svelte-swipe";
	export let fullscreen = false,
		images: Array<Images>;
	let selected = 0;
	onMount(() => {
		for (const [index, element] of document.querySelectorAll<HTMLElement>(".gallery .content *").entries()) {
			// console.log(element.nodeName);
			// if (element.nodeName.toLowerCase() === "img") {
			// 	const image = element as HTMLImageElement;
			// 	images[images.length] = {
			// 		src: image.src,
			// 		selected: selected === index,
			// 		element: image,
			// 		alt: "Hello",
			// 		id: index
			// 	};
			// 	// console.log(selected, index);
			// 	image.style.display = selected === index ? "block" : "none";
			// }
		}
		const carousel = document.querySelector(".carousel");
		carousel?.addEventListener("wheel", (event: Event) => {
			event.preventDefault();
			carousel.scrollLeft += event.deltaY;
		});
		addEventListener("fullscreenchange", () => {
			if (document.fullscreenElement === null && fullscreen) {
				appWindow.setFullscreen(false);
				fullscreen = false;
			}
		});
	});
	function toggleFullscreen() {
		if (fullscreen) {
			fullscreen = false;
			appWindow.setFullscreen(false);
			document.exitFullscreen();
		} else {
			appWindow.setFullscreen(true);
			document.querySelector(".galleryContainer")?.requestFullscreen({navigationUI: "hide"}).then(result => {
				fullscreen = true;
			}).catch(error => {
				console.error(error);
			});
		}
	}
	/* TODO: Redo this. Don't use <slot/>. Require array of images, model files, or HUD files
		Finish creating carousel.
		Make carousel buttons actually buttons. (Can't focus via tab currently)
	*/
	const size = "2rem",
		config = {
			"showIndicators": true
		};
</script>
<div class="galleryContainer">
	<div class="gallery" class:full={fullscreen}>
		<button aria-label="Previous Image" class="button noStyle reverse"><Left {size}/></button>
		<div class="content">
			<Swipe bind:active_item={selected} {...config}>
				{#each images as item}
					<SwipeItem>
						<img class="image" src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy">
					</SwipeItem>
				{/each}
			</Swipe>
		</div>
		<button aria-label="Next Image" class="button noStyle reverse"><Right {size}/></button>
		<button class="noStyle" aria-label="Toggle Fullscreen" id="fullscreenToggle" on:click={toggleFullscreen}>
			{#if fullscreen}
				<FullscreenExit {size}/>
			{:else}
				<Fullscreen {size}/>
			{/if}
		</button>
	</div>
	<aside class="carousel">
		{#each images as image}
			<img src={image.src} alt={image.alt} class="carouselButton" class:selected={image.selected} class:grayscale={!image.selected} loading="lazy"/>
		{/each}
	</aside>
</div>
<style lang="postcss">
	@property --transform {
		syntax: "<transform-function>";
		inherits: true;
	}
	@property --transition {
		syntax: "<time>";
		inherits: true;
		initial-value: "200ms";
	}
	@property --transitionReducedMotion {
		syntax: "<time>";
		inherits: true;
		initial-value: "200ms";
	}
	@property --accentColor {
		syntax: "<color>";
		inherits: true;
	}
	@property --backgroundColor {
		syntax: "<color>";
		inherits: true;
	}
	@property --textColorOptimal {
		syntax: "<color>";
		inherits: true;
	}
	@property --light {
		syntax: "<color>";
		inherits: true;
	}
	@property --dark {
		syntax: "<color>";
		inherits: true;
	}
	@property --defaultMargin {
		syntax: "<length>";
		inherits: true;
	}
	@property --size {
		syntax: "<length>";
		inherits: true;
		initial-value: 6rem;
	}
	:root {
		--size: 6rem;
	}
	.galleryContainer {
		display: flex;
		flex-flow: column nowrap;
	}
	.gallery {
		position: relative;
		background-color: black;
		display: flex;
		justify-content: center;
		block-size: 400px;
		max-block-size: 100%;
	}
	:global(.swipe-handler) {
		/* stylelint-disable-next-line stylelint-logical-properties/enforce-logical-properties -- Third party code, we need to target this property. */
		width: 100%;
	}
	:global(.dot) {
		box-shadow: 0 0 0.8rem 1px var(--accentColor);
		border-color: var(--accentColor) !important;
	}
	:global(.is-active) {
		--sv-swipe-indicator-active-color: var(--light);
	}
	.content {
		block-size: 100%;
		inline-size: 100%;
	}
	.gallery.full .content {
		inline-size: 100%;
	}
	.gallery.full {
		block-size: 100%;
	}
	:global(.gallery.full .content > *) {
		margin-inline: auto;
		block-size: 100%;
	}
	.gallery > button {
		--radius: 50rem;

		position: absolute;
		inset-block: 50%;
		transform: translateY(-50%) var(--transform);
		block-size: 3.5rem;
		aspect-ratio: 1;
		transition: var(--transition);
		border: 0;
		border-radius: 100%;
		opacity: 0;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		&:hover, &:focus-visible {
			background-color: var(--accentColor);
			color: var(--textColorOptimal);
		}
	}
	.gallery:hover > button, .gallery:focus-within > button {
		opacity: 1;
		z-index: 10;
		/* box-shadow: inset 0 0 .25rem .1rem rgb(255 255 255 / 0.5); */
	}
	.gallery > button:nth-of-type(1) {
		inset-inline-start: 1rem;
	}
	.gallery > button:nth-last-of-type(2) {
		inset-inline-end: 1rem;
	}
	#fullscreenToggle {
		inset-inline-end: 1rem;
		inset-block-start: unset;
		inset-block-end: 1rem;
		block-size: 2.5rem;
		inline-size: 2.5rem;
		transform: translateY(0%);
	}
	.carousel {
		border-block-start: 0.2rem outset rgb(127 127 127 / 0.5);
		background-color: var(--dark);
		display: flex;
		/* grid-template-columns: repeat(var(--count), auto) 1fr; */
		flex-flow: row nowrap;
		gap: var(--defaultMargin);
		padding-inline: var(--defaultMargin);
		padding-block: var(--defaultMargin);
		overflow-x: auto;
		/* Smooth scroll disabled for now, doesn't work with the way I implemented horizontal scroll.
			It's fine with single step scrolling, but fails with multi-step scrolling, AKA, fly wheel.
			Should go farther, but actually goes shorter than single step.
		*/
		/* scroll-behavior: smooth; */
	}
	.carousel > img {
		block-size: calc(var(--size) - 0.5rem);
		border-radius: 0.5rem;
		transition: var(--transitionReducedMotion);
		&:hover, &:focus-visible {
			box-shadow: 0 0 4px 4px var(--accentColor);
		}
	}
	:global(.gallery .content > img) {
		block-size: 20rem;
	}
	.carouselButton {
		cursor: pointer;
	}
	.selected {
		border: 0.3rem solid var(--accentColor);
	}
	.grayscale {
		filter: grayscale(100%);
		transition: var(--transitionReducedMotion);
		&:hover, &:focus-visible {
			filter: grayscale(0%);
		}
	}
	.image {
		block-size: calc(100% - var(--size));
		inline-size: 100%;
		object-fit: contain;
	}
</style>