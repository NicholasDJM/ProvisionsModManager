<script lang="ts">
	import "normalize.css";
	import "@fontsource/roboto";
	import "reasonable-colors";
	import "$lib/css/app.css";
	import "$lib/css/stylify.css";
	import "$lib/css/defaultMargin.css";
	import { i18n } from "$lib/js/i18n";
	import { title } from "$lib/js/title.js";
	import { currentPage } from "$lib/js/page.js";
	import { updateAvailable } from "$lib/js/update.js";
	import { checkUpdate } from "@tauri-apps/api/updater";
	import { onMount, onDestroy, setContext } from "svelte";
	import { backButton, backUrl } from "$lib/js/subpage.js";
	import { goto, afterNavigate} from "$app/navigation";
	import { blur, fade } from "svelte/transition";
	import { invoke } from "@tauri-apps/api/tauri";
	// TODO: Switch from "combo-storage" to vanilla JS
	// @ts-expect-error Can't do anything about missing types.
	import { LocalStorage } from "combo-storage";
	import jq from "jquery";
	// TODO: Remove all uses of jQuery from entire project.
	import Cog from "svelte-material-icons/Cog.svelte";
	import Toolbox from "svelte-material-icons/Toolbox.svelte";
	import ToolboxOutline from "svelte-material-icons/ToolboxOutline.svelte";
	import Menu from "svelte-material-icons/Menu.svelte";
	import MenuOpen from "svelte-material-icons/MenuOpen.svelte";
	import File from "svelte-material-icons/File.svelte";
	import FileOutline from "svelte-material-icons/FileOutline.svelte";
	import Web from "svelte-material-icons/Web.svelte";
	import Options from "svelte-material-icons/DotsVertical.svelte";
	import Update from "svelte-material-icons/Download.svelte";
	import Extension from "svelte-material-icons/PuzzlePlus.svelte";
	import NavButton from "$lib/components/navButton.svelte";
	import Back from "svelte-material-icons/ArrowLeft.svelte";
	import Lightbulb from "svelte-material-icons/Lightbulb.svelte";
	import LightbulbOutline from "svelte-material-icons/LightbulbOutline.svelte";
	import FilePlus from "svelte-material-icons/FilePlus.svelte";
	import FilePlusOutline from "svelte-material-icons/FilePlusOutline.svelte";
	import Search from "svelte-material-icons/Magnify.svelte";
	import Clear from "svelte-material-icons/Close.svelte";
	import NavDropdown from "$lib/components/NavDropdown.svelte";

	//https://stackoverflow.com/questions/7444451/how-to-get-the-actual-rendered-font-when-its-not-defined-in-css
	function css(selector: string, property: string): string {
		const element = document.querySelector(selector);
		if (element) {
			return window.getComputedStyle(element).getPropertyValue(property);
		}
		return "";
	}

	const buttonSize = "25px",
		navButtonSize = "45px",
		navButtonIconSize = "35px",
		navRailPadding = "8px", // TODO: Replace with var(--defaultMargin)
		// Menu speed set in app.css as --transition
		navRailMinimum = 250, // In px
		profileSelectorSize = "85px";
	let menuSpeed: number,
		reducedMotionSpeed: number,
		menuOpen = false,
		menuOffset = "0px",
		menuVerticalOffset = "0px",
		menuTimer: Array<ReturnType<typeof setTimeout>> = [],
		extensionPrompt = true,
		navrailComputed: string,
		textComputed: string,
		navrailComputedPadding: string,
		iconComputed: string,
		showText = false,
		profileSelectorFade = false;
	function clearTimers() {
		for (const [index] of menuTimer.entries()) {
			clearTimeout(menuTimer[index]);
		}
		menuTimer = [];
	}
	function menuText(display: boolean) {
		clearTimers();
		// TODO: Instead of display:none on profileSelector, inert plus visibility:hidden?
		const profile = document.querySelector<HTMLElement>(".profileSelector"),
			spacer = document.querySelector<HTMLElement>(".profileSelectorSpacer");
		if (display) {
			if (profile) {
				profile.style.display = "block";
			}
			if (spacer) {
				spacer.style.display = "none";
			}
			menuTimer[menuTimer.length] = setTimeout(() => {
				profileSelectorFade = true;
			}, menuSpeed);
			menuTimer[menuTimer.length] = setTimeout(() => {
				showText = true;
			}, reducedMotionSpeed);
		} else {
			menuTimer[menuTimer.length] = setTimeout(() => {
				if (spacer) {
					spacer.style.display = "block";
				}
				if (profile) {
					profile.style.display = "none";
				}
			}, menuSpeed);
			profileSelectorFade = false;
			showText = false;
		}
	}

	/* https://www.w3docs.com/snippets/javascript/how-to-calculate-text-width-with-javascript.html
	   TODO: Unknown license */
	function displayTextWidth(text: string, font: string): number {
		const context = document.createElement("canvas").getContext("2d");
		if (context) {
			context.font = font;
		}
		return Math.floor(context?.measureText(text).width || 0);
	}
	//console.log("Text Width: " + displayTextWidth("This is demo text!", "italic 19pt verdana")); //

	// TODO: Remove jquery.
	function getLongestString(selector: string): string {
		let text = "";
		if (document.querySelectorAll(selector).length > 0) {
			for (const [, element] of document.querySelectorAll(selector).entries()) {
				if (element.textContent && element.textContent.length > text.length) text = element.textContent;
			}
		}
		return text;
	}
	onMount(() => {
		const navrailComputedPixels: number = css("#navrail", "inline-size").search("px"),
			navrailComputedPaddingPixels: number = css("#navrail", "padding-inline").search("px"),
			iconComputedPixels: number = navButtonIconSize.search("px");
		navrailComputed = css("#navrail", "inline-size").slice(0, navrailComputedPixels),
		navrailComputedPadding = css("#navrail", "padding-inline").slice(0, navrailComputedPaddingPixels),
		textComputed = css(".link", "font-size"),
		iconComputed = navButtonIconSize.slice(0, iconComputedPixels);
		// invoke("close_splashscreen");
		//setContext("buttonSize", navButtonSize);
	});
	function toggleMenu() {
		menuOpen = !menuOpen;
		if (menuOpen) {
			try {
				let data = (Number(iconComputed) + Number(displayTextWidth(getLongestString(".link"), textComputed + " Roboto")));
				if (data < navRailMinimum) data = navRailMinimum;
				menuOffset = data + "px";
			} catch {
				console.error("Failed to calculate menu width.");
				menuOffset = "250px";
			}
			menuText(true);
		} else {
			menuText(false);
			menuOffset = "0px";
		}
	}
	function closeMenu() {
		// backButton.set(false);
		if (menuOpen) toggleMenu();
	}
	const oneSecond = 1000;
	setInterval(() => {
		// TODO: Move transition to a store, then set on root via top +layout.svelte
		menuSpeed = Number.parseFloat(css(":root", "--transition").split("ms")[0].split("s")[0].split("m")[0].split("h")[0]); //In ms
		jq(":root").css("--menuSpeed", menuSpeed + "ms");
		reducedMotionSpeed = Number.parseFloat(css(":root", "--transitionReducedMotion").split("ms")[0].split("s")[0].split("m")[0].split("h")[0]); //In ms
	}, oneSecond);
	const tenSeconds = 10000,
		updateCheckTimer = setInterval(() => {
			checkUpdate().then(result => {
				updateAvailable.set(result.shouldUpdate);
			});
		}, tenSeconds);
	onDestroy(() => {
		clearInterval(updateCheckTimer);
	});
	let navVisible = true;
	$: {
		//TODO: replace jquery with onMount;
		// jq(() => {
			/* BUG: Cannot remove this jquery statement, breaks animation in navrail. Maybe we need onMount?
			*/
			menuVerticalOffset = menuOpen ? profileSelectorSize : "0"; // Fires twice?
		// });
	}
	navVisible = $backButton;
	let buttonIds = 1;
	const getButtonId = () => {
		const data = "navButton" + buttonIds;
		buttonIds++;
		return data.toString();
	};
	import { base } from "$app/paths";
	let previousPage: string = base;
	afterNavigate(({from}) => {
		const url = from?.url?.pathname;
		console.log(url);
		if (url) {
			previousPage = url;
			LocalStorage.set("previousPage", from?.url?.pathname);
		} else if (LocalStorage.get("previousPage")) {
			previousPage = LocalStorage.get("previousPage");
		} else {
			previousPage = "/main";
		}
	});
	function goBack() {
		backButton.set(false);
		if ($backUrl) {
			goto(previousPage);
			backUrl.set(false);
		}
	}
	let search = false,
		searchValue: string;
	function clearSearch(event: KeyboardEvent) {
		if (event.key === "Enter") {
			searchValue = "";
			search = false;
		}
	}
	let list = [
			{
				id: "feedback",
				text: "Feedback"
			},
			{
				id: "test",
				text: "Test"
			}
		],
		navDropdownVisible = false,
		translations: Record<string, string>;
	/* Wrapping translations in a $ statement shouldn't be necessary, but it is.
		I think it has something to do with Svelte grabbing the value before it's loaded, and then not updating once it is loaded. */
	$: {
		translations = {
			mods: $i18n.t("main:page-mods"),
			sources: $i18n.t("sources:page-sources"),
			utils: $i18n.t("utils:page-utils"),
			troubleshoot: $i18n.t("troubleshoot:page-troubleshoot"),
			wizard: $i18n.t("wizard:page-wizard"),
			extension: $i18n.t("extension-notice"),
			update: $i18n.t("update-notice"),
			settings: $i18n.t("settings:page-settings"),
			profile: $i18n.t("profile-selector"),
			skip: $i18n.t("skip-to-content"),
			tf2: $i18n.t("game-tf2"),
			tf2c: $i18n.t("game-tf2c"),
			of: $i18n.t("game-of"),
			pf2: $i18n.t("game-pf2")
		};
	}
	// TODO: Fix search placeholder text colour.
	// TODO: break out search to component, and implent svelte-typehead and search-text-highlight
</script>
<a href="#main" class="skip">
	{translations.skip}
</a>
<div id="layout" style="--menuOffset: {menuOffset}; --menuVerticalOffset: {menuVerticalOffset}; --navRailSize: {navButtonSize}; --navRailPadding: {navRailPadding}; --buttonSize: {navButtonSize}; --iconSize: {navButtonIconSize}; --navRailComputed:-{navrailComputed}px">
	<nav id="navbar">
		{#if !$backButton}
			<button aria-label="Menu Toggle" class="btn menuRTL" on:click={toggleMenu}>
				{#if menuOpen}
					<MenuOpen size={buttonSize}/>
				{:else}
					<Menu size={buttonSize}/>
				{/if}
			</button>
		{:else}
			<button aria-label="Back" class="btn menuRTL" on:click={goBack}>
				<Back size={buttonSize}/>
			</button>
		{/if}
		{#if search}
			<input type="search" bind:value={searchValue} class:noBump={$backButton} placeholder="Search">
		{:else}
			<h1 class:noBump={$backButton}>{$title}</h1>
		{/if}
		<div style="display:grid; gap:0.5rem; grid-template-columns:auto auto;">
			{#if search}
				<button class="btn" on:click={() => {
					searchValue = ""; search = false;
				}} on:keydown={clearSearch}><Clear size={buttonSize}/></button>
			{:else}
				<button class="btn" on:click={() => search = true}><Search size={buttonSize}/></button>
			{/if}
			<button id="navDropdownButton" aria-label="Options Dropdown" class="btn" on:click={() => navDropdownVisible = !navDropdownVisible}><Options size={buttonSize}/></button>
			<NavDropdown {list} parent={"#navDropdownButton"} bind:visible={navDropdownVisible} dividers={[0]}/>
		</div>
	</nav>
	<nav id="navrail" class:open="{menuOpen}" inert={navVisible}>
		<!-- FIXME: setting display:none is causing some layout shift problems, rebuild with a static element that is resized, then add selector as child, that then can be hidden -->
		<!-- 	We need to use display:none as select seems to be able to interfere with selection of other elements, even if height is 0 -->
		<div class="profileSelectorSpacer">
			<!-- Needed to fix other navrail items' spacing while profileSelector is hidden -->
		</div>
		<div class="profileSelector" class:fade={profileSelectorFade}>
			<label for="profile">{translations.profile}</label>
			<select id="profile">
				<option>{translations.tf2}</option>
				<option>{translations.tf2c}</option>
				<option>{translations.of}</option>
				<option>{translations.pf2}</option>
			</select>
		</div>
		<div class="navButtons primaryNavButtons">
			{#each [
				{
					href: "/main",
					page: "mods",
					text: "mods",
					icon: File,
					highlight: FileOutline
				},
				{
					href: "/main/sources",
					page: "sources",
					text: "sources",
					icon: Web
				},
				{
					href: "/main/utils",
					page: "utils",
					text: "utils",
					icon: Toolbox,
					highlight: ToolboxOutline
				},
				{
					href: "/main/troubleshooting",
					page: "troubleshoot",
					text: "troubleshoot",
					icon: Lightbulb,
					highlight: LightbulbOutline
				},
				{
					href: "/main/wizard",
					page: "wizard",
					text: "wizard",
					icon: FilePlus,
					highlight: FilePlusOutline
				}
			] as btn}
				{#if btn.highlight}
					<NavButton size={navButtonSize} href={btn.href} dataPage={btn.page} text={translations[btn.text]} id={getButtonId()} on:click={closeMenu} {showText} highlight={$currentPage}>
						<svelte:fragment slot="highlight">
							<svelte:component this={btn.highlight} size={navButtonIconSize}></svelte:component>
						</svelte:fragment>
						<svelte:fragment>
							<svelte:component this={btn.icon} size={navButtonIconSize}></svelte:component>
						</svelte:fragment>
					</NavButton>
				{:else}
					<NavButton size={navButtonSize} href={btn.href} dataPage={btn.page} text={translations[btn.text]} id={getButtonId()} on:click={closeMenu} {showText} highlight={$currentPage}>
						<svelte:fragment>
							<svelte:component this={btn.icon} size={navButtonIconSize}></svelte:component>
						</svelte:fragment>
					</NavButton>
				{/if}
			{/each}
		</div>
		<span></span>
		<div class="navButtons">
			{#if extensionPrompt}
				<NavButton
					href="/main/settings/extension"
					text={translations.extension}
					dataPage = null
					id={getButtonId()}
					{showText}
					highlight={$currentPage}
					on:click={closeMenu}
				>
					<Extension size={navButtonIconSize}/>
				</NavButton>
			{/if}
			{#if $updateAvailable}
				<NavButton
					href="/main/settings/update"
					text={translations.update}
					dataPage = null
					id={getButtonId()}
					{showText}
					highlight={$currentPage}
					on:click={closeMenu}
				>
					<Update size={navButtonIconSize}/>
				</NavButton>
			{/if}
			<NavButton
				href="/main/settings"
				text={translations.settings}
				dataPage="settings"
				id={getButtonId()}
				{showText}
				highlight={$currentPage}
				on:click={closeMenu}
			>
				<Cog size={navButtonIconSize}/>
			</NavButton>
		</div>
	</nav>
	<span id="corner" class:open="{menuOpen}"></span>
	{#if menuOpen}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div id="closeMenu" on:click={closeMenu} transition:blur={{duration: reducedMotionSpeed}}></div>
	{/if}
	<main class="content" id="main" class:open="{menuOpen}">
		<slot />
	</main>
</div>
<style lang="postcss">
	@property --transition {
		syntax: "<time>";
		inherits: true;
	}
	@property --defaultMargin {
		syntax: "<length>";
		inherits: true;
	}
	@property --accentColor {
		syntax: "<color>";
		inherits: true;
	}
	@property --textColor {
		syntax: "<color>";
		inherits: true;
	}
	@property --textColorOptimal {
		syntax: "<color>";
		inherits: true;
	}
	@property --menuSpeed {
		syntax: "<time>";
		inherits: true;
	}
	@property --navBarSize {
		syntax: "<length>";
		initial-value: 60px;
		inherits: true;
	}
	@property --cornerSize {
		syntax: "<length>";
		initial-value: 20px;
		inherits: true;
	}
	:root {
		transition: var(--transition);
	}
	.skip {
		--size: 2.5rem;
		--padding: var(--defaultMargin);

		position: fixed;
		padding-block: var(--padding);
		padding-inline: var(--padding);
		border-end-end-radius: 1rem;
		inset-block-start: calc((var(--size) + var(--padding) * 2) * -1);
		transition: var(--transition);
		z-index: 100;
		background-color: var(--accentColor);
		color: var(--textColorOptimal);
		&:focus-visible {
			inset-block-start: 0;
		}
	}
	.btn {
		display: flex;
		align-items: center;
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
	input[type="search"] {
		margin-inline-start: var(--cornerSize);
		background:transparent;
		border:none;
		border-block-end: 0.15rem solid var(--textColorOptimal);
		color:var(--textColorOptimal);
		padding-inline: 0.5rem;
		transition: margin-inline-start var(--transition);
		&:focus-visible {
			border-radius: 0.5rem;
			background-color:white;
			color:black;
		}
	}
	input[type="search"]::placeholder {
		color: var(--textColorOptimal);
	}
	input[type="search"]:focus-visible::placeholder {
		color: gray;
	}
	input[type="search"].noBump {
		margin-inline-start: 0;
	}
	#navbar {
		user-select: none;
		z-index: 90;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 1rem;
		position: fixed;
		block-size: var(--navBarSize);
		inline-size: 100%;
		padding-inline: 0.9rem;
		padding-block: var(--defaultMargin);
		text-align:center;
		background-color: var(--accentColor);
		inset-block-start: 0;
		transition: var(--menuSpeed);
		margin-block: auto;
		&>h1 {
			/* margin-inline-start: 20px; */
			margin-block: auto;
			color: var(--textColorOptimal);
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			transition: var(--transition);
		}
	}
	#navbar h1.noBump {
		margin-inline-start: 0;
	}
	#navrail {
		user-select: none;
		z-index: 90;
		position: fixed;
		display: grid;
		grid-template-rows: auto auto 1fr auto;
		background-color: var(--accentColor);
		inline-size: calc(var(--navRailSize) + (var(--navRailPadding) * 2) + var(--menuOffset));
		max-inline-size: 100%; /* I want the max size to be slightly less than 100%, but it screws up the #corner positioning. Look into 'css attr' */
		inset-block-start: var(--navBarSize);
		inset-inline-start: 0;
		padding-block-start: var(--cornerSize);
		padding-block-end: 0.5rem;
		block-size: calc(100% - var(--navBarSize));
		padding-inline: var(--navRailPadding, var(--defaultMargin));
		transition: inline-size var(--menuSpeed), inset-inline-start var(--menuSpeed), background-color var(--menuSpeed);
		overflow-y: auto;
		overflow-x: hidden;
	}
	.navButtons {
		display: grid;
		grid-template-rows: auto;
		gap: var(--defaultMargin);
		margin-block-end: var(--defaultMargin);
		&:last-child {
			margin-block-end: 0;
		}
	}
	.profileSelector {
		display: none;
		opacity: 0;
		block-size: var(--menuVerticalOffset);
		transition: block-size var(--transition);
	}
	.profileSelector select {
		--size: calc(var(--profileSelectorSize, 55px) - 10px);

		inline-size: 100%;
		border-radius: var(--size);
		block-size: var(--size);
		&:hover,&:focus-visible {
			box-shadow: 0 0 1rem 1px white;
		}
	}
	.profileSelector label {
		margin-block-end: var(--defaultMargin);
		display: flex;
		justify-content: center;
		color: var(--textColorOptimal)
	}
	.fade {
		opacity: 1;
		transition: opacity var(--transition), block-size var(--transition);
	}
	#corner {
		--mask: url("data:image/webp;base64,UklGRlwBAABXRUJQVlA4WAoAAAAYAAAAEwAAEwAAVlA4TGAAAAAvE8AEEFDQtg1j/rh3AiGCTWxbjS5h69jhACW0uAAHGEALUvBBi4DNYQL8d68q86yRPGkSg/Ggiwasm2LFcXIJOA82Dj8Xh0BAoCDQrYWIQDMUEkIvU6go5YRP2MSYkAlFWElG1gAAAElJKgAIAAAABgASAQMAAQAAAAEAAAAaAQUAAQAAAFYAAAAbAQUAAQAAAF4AAAAoAQMAAQAAAAIAAAAxAQIAEAAAAGYAAABphwQAAQAAAHYAAAAAAAAA8nYBAOgDAADydgEA6AMAAHBhaW50Lm5ldCA1LjAuMwAFAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAKgBAABAAAAFAAAAAOgBAABAAAAFAAAAAWgBAABAAAAuAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAAA=");

		inline-size: var(--cornerSize);
		z-index: 90;
		aspect-ratio: 1;
		/* stylelint-disable-next-line property-no-vendor-prefix -- Non prefix version doesn't work in MS Edge */
		-webkit-mask-image: var(--mask);
		mask-image: var(--mask);
		position: fixed;
		inset-block-start: var(--navBarSize);
		inset-inline-start: calc(var(--navRailSize) + (var(--navRailPadding) * 2) + var(--menuOffset));
		background-color: var(--accentColor);
		transition: inset-inline-start var(--menuSpeed), background-color var(--menuSpeed); /* Don't animate opacity */
		pointer-events: none;
	}
	#closeMenu {
		z-index: 80;
		backdrop-filter: blur(1px);
		background-color: rgb(0 0 0 / 0.5);
		position: fixed;
		inline-size: 100%;
		block-size: 100%;
		inset: 0;
	}
	main.content {
		margin-block-start: calc(var(--navBarSize));
		margin-inline-start: calc(var(--navRailSize) + (var(--navRailPadding) * 2));
		/* transition: var(--transition); */
		block-size: calc(100vh - var(--navBarSize));
		overflow-y: auto;
	}
	@media (max-width: 640px) {
		#navrail:not(.open) {
			inset-inline-start: calc(var(--navRailComputed) - var(--cornerSize));
			/* 20px required for moving at the same amount as corner (It looks weird if it isn't) */
		}
		#corner:not(.open) {
			inset-inline-start: var(--navRailComputed);
		}
		.profileSelector {
			transition: 0s;
		}
		main.content {
			margin-inline-start: 0;
		}
		input[type="search"] {
			margin-inline-start: 0;
		}
		#navbar h1 {
			/* margin-inline-start: 0 !important; */
			font-size: 1.5rem;
		}
	}
</style>
