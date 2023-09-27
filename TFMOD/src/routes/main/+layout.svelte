<script lang="ts">
	import "reasonable-colors";
	import "$lib/css/app.css";
	import "$lib/css/defaultMargin.css";
	import NavButton from "$lib/components/NavButton.svelte";
	import Menu from "svelte-material-icons/Menu.svelte";
	import MenuOpen from "svelte-material-icons/MenuOpen.svelte";
	import Page from "svelte-material-icons/File.svelte";
	import PageOutline from "svelte-material-icons/FileOutline.svelte";
	import Web from "svelte-material-icons/Web.svelte";
	import Cog from "svelte-material-icons/Cog.svelte";
	import Toolbox from "svelte-material-icons/Toolbox.svelte";
	import { onMount } from "svelte";
	import NavItem from "$lib/components/NavItem.svelte";
	import GameSelect from "$lib/components/GameSelect.svelte";
	import { textContrast } from "text-contrast";
	import { i18n, title } from "$lib/js/stores/store";
	// eslint-disable-next-line no-duplicate-imports -- Not a duplicate.
	import type { GameIcon } from "$lib/components/GameSelect.svelte";
	// eslint-disable-next-line no-duplicate-imports -- Not a duplicate.
	import type { ComponentType } from "svelte";
	interface Link {
		href: string,
		text: string,
		icon: ComponentType
	}
	let defaultSize = "25px",
		navButtonSize = "35px",
		buttonSize = defaultSize,
		primaryLinks: Link[],
		secondaryLinks: Link[],
		gameIcons: GameIcon[] = [
			{
				icon: "tf2",
				translation: "Team Fortress 2",
				alt: "Team Fortress 2",
				selected: false
			},
			{
				icon: "tf2c",
				translation: "Team Fortress 2 Classic",
				alt: "Team Fortress 2 Classic",
				selected: true
			},
			{
				icon: "pf2",
				translation: "Pre-Fortress 2",
				alt: "Pre-Fortress 2",
				selected: false
			},
			{
				icon: "of",
				translation: "Open Fortress",
				alt: "Open Fortress",
				selected: false
			},
			{
				icon: "tf2v",
				translation: "Team Fortress 2 Vintage",
				alt: "Team Fortress 2 Vintage",
				selected: false
			}
		],
		navrailSize = defaultSize,
		open = false;
	$: {
		primaryLinks = [
			{
				href: "/main",
				text: $i18n.t("main:page-mods"),
				icon: Page
			},
			{
				href: "/main/sources",
				text: $i18n.t("sources:page-sources"),
				icon: Web
			},
			{
				href: "/main/utils",
				text: $i18n.t("utils:page-utils"),
				icon: Toolbox
			}
		],
		secondaryLinks = [
			{
				href: "/main/settings",
				text: $i18n.t("settings:page-settings"),
				icon: Cog
			}
		];
	}
	function toggle() {
		open = !open;
	}
	const contrast = false;
	// TODO: Instead of letting items resize, disable horizontal scroll and create two layers to nav buttons, the icon, and the text. Only show text via onAnimationEnd
	// TODO: Remake nav button to be more simple. Use props to pass in icon.
	// TODO: Create animation delay via onAnimationEnd
</script>
<header class="navbar" class:contrast>
	<button id="menu" class="btn noStyle" title="Toggle Menu" on:click={toggle}>
		{#if open}
			<MenuOpen size={buttonSize}/>
		{:else}
			<Menu size={buttonSize}/>
		{/if}
	</button>
	<h1 class="contrast">{$title}</h1>
</header>
<div class="main">
	<button id="background" on:click={toggle} style="--opacity:{open ? 1 : 0}" inert={!open}></button>
	<nav class="navrail" id="navrail" class:open class:contrast>
		<div class="primary">
			<GameSelect icons={gameIcons} {open}/>
			{#each primaryLinks as link}
				<NavItem icon={link.icon} href={link.href} showText={open}>{link.text}</NavItem>
			{/each}
		</div>
		<div class="secondary">
			{#each secondaryLinks as link}
				<NavItem icon={link.icon} href={link.href} showText={open}>{link.text}</NavItem>
			{/each}
		</div>
	</nav>
	<main inert={open}>
		<slot/>
	</main>
</div>
<style lang="postcss">
	$cornerSize: 20px;
	$cornerMask: url("data:image/webp;base64,UklGRlwBAABXRUJQVlA4WAoAAAAYAAAAEwAAEwAAVlA4TGAAAAAvE8AEEFDQtg1j/rh3AiGCTWxbjS5h69jhACW0uAAHGEALUvBBi4DNYQL8d68q86yRPGkSg/Ggiwasm2LFcXIJOA82Dj8Xh0BAoCDQrYWIQDMUEkIvU6go5YRP2MSYkAlFWElG1gAAAElJKgAIAAAABgASAQMAAQAAAAEAAAAaAQUAAQAAAFYAAAAbAQUAAQAAAF4AAAAoAQMAAQAAAAIAAAAxAQIAEAAAAGYAAABphwQAAQAAAHYAAAAAAAAA8nYBAOgDAADydgEA6AMAAHBhaW50Lm5ldCA1LjAuMwAFAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAKgBAABAAAAFAAAAAOgBAABAAAAFAAAAAWgBAABAAAAuAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAAA=");
	$navBarSize: 60px;
	$navRailSize: 60px;
	@property --navrailSize {
		syntax: "<length>";
		inherits: true;
	}
	@property --accentColor {
		syntax: "<color>";
		inherits: true;
	}
	:root {
		--navRailSize: 60px;
		--contrastBorder: white;
	}
	main {
		/* block-size: calc(100%); */
		/* block-size: 100%; */
		overflow-y: auto;
	}
	.navbar {
		z-index: 2;
		position: relative;
		background: var(--accentColor);
		block-size: $navBarSize;
		display: flex;
		align-items: center;
		padding-block: 0.5rem;
		padding-inline-start: 0.5rem;
		gap: 1rem;
		&.contrast {
			box-shadow: 2px 2px var(--contrastBorder, red);
		}
	}
	.main {
		display: grid;
		padding-inline-start: 60px;
		grid-template-columns: 1fr;
	}
	.navrail {
		overflow-x: hidden;
		z-index: 2;
		block-size: calc(100vh - $navBarSize);
		position: fixed;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		inset-inline-start: 0;
		padding-inline: 0.5rem;
		padding-block: 0.5rem;
		inline-size: $navRailSize;
		background: var(--accentColor);
		transition: var(--transition);
		animation: close var(--transition) both reverse linear;
		&.contrast {
			box-shadow: 2px 2px var(--contrastBorder, red);
		}
	}
	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(0 0 0 / 0);
		border: 0;
		color: var(--textColorOptimal);
		transition: box-shadow var(--transition), background-color var(--transition), color var(--transition); /* Don't animate scale */
		cursor: pointer;
		aspect-ratio: 1;
		border-radius: 50%;
		&:hover,&:focus-visible {
			background-color: white;
			color: black;
			box-shadow: 0 0 0.66rem 1px white;
		}
	}
	.navrail.contrast::before {
		content: "";
		position: fixed;
		mask-image: $cornerMask;
		z-index: 1;
		background-color: var(--contrastBorder, red);
		pointer-events: none;
		inline-size: $cornerSize;
		block-size: $cornerSize;
		inset-inline-start: calc( var(--navRailSize, $navRailSize) + 2px);
		inset-block-start: calc($navBarSize + 2px );
		transition: var(--transition);
	}
	.navrail::after {
		content: "";
		position: fixed;
		mask-image: $cornerMask;
		z-index: 1;
		/* background-color: var(--accentColor); */
		background-color: red;
		pointer-events: none;
		inline-size: $cornerSize;
		block-size: $cornerSize;
		inset-inline-start: var(--navRailSize, $navRailSize);
		inset-block-start: $navBarSize;
		transition: var(--transition);
		/* TODO: Fix to match navrail animation. */
	}
	.primary {
		display: flex;
		gap: 0.5rem;
		flex-flow: column nowrap;
	}
	.open {
		--navRailSize: 250px;
		animation: open var(--transition) both;
		/* TODO: Don't play animation here, use javascript so we can hook into onanimationend, then display button text at end. */
	}
	h1 {
		margin: 0;
	}
	#background {
		z-index: 1;
		backdrop-filter: blur(1px);
		background-color: rgb(0 0 0 / 0.5);
		position: fixed;
		inline-size: 100%;
		block-size: 100%;
		inset: 0;
		opacity: var(--opacity, 0);
		transition: var(--transition);
	}
	@keyframes open {
		from {
			inline-size: $navRailSize;
		}
		to {
			inline-size: 250px;
		}
	}
	@keyframes close {
		from {
			inline-size: $navRailSize;
		}
		to {
			inline-size: 250px;
		}
	}
</style>