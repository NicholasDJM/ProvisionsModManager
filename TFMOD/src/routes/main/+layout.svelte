<svelte:head><meta class="fade"/></svelte:head>
<script lang="ts">
	import "normalize.css";
	import "@fontsource/roboto";
	import "../../app.css";
	import "reasonable-colors";
	import "../../stylify.css";
	import { i18n } from "$lib/i18n.js";
	import { title } from "$lib/title.js";
	import { currentPage } from "$lib/page.js";
	import { updateAvailable } from "$lib/update.js";
	import { backButton } from "$lib/subpage.js";
	import { goto, afterNavigate} from "$app/navigation";
	import { fade } from "svelte/transition";
	import { invoke } from "@tauri-apps/api/tauri";
	import jq from "jquery";
	import Cog from "svelte-material-icons/Cog.svelte";
	import Toolbox from "svelte-material-icons/Toolbox.svelte";
	import ToolboxOutline from "svelte-material-icons/ToolboxOutline.svelte";
	import Menu from "svelte-material-icons/Menu.svelte";
	import MenuOpen from "svelte-material-icons/MenuOpen.svelte";
	import File from "svelte-material-icons/File.svelte";
	import FileOutline from "svelte-material-icons/FileOutline.svelte";
	import FileDownload from "svelte-material-icons/FileDownload.svelte";
	import FileDownloadOutline from "svelte-material-icons/FileDownloadOutline.svelte";
	import Options from "svelte-material-icons/DotsVertical.svelte";
	import Update from "svelte-material-icons/Download.svelte";
	import Extension from "svelte-material-icons/PuzzlePlus.svelte";
	import NavButton from "$lib/navButton.svelte";
	import Back from "svelte-material-icons/ArrowLeft.svelte";
	import Lightbulb from "svelte-material-icons/Lightbulb.svelte";
	import LightbulbOutline from "svelte-material-icons/LightbulbOutline.svelte";
	import FilePlus from "svelte-material-icons/FilePlus.svelte";
	import FilePlusOutline from "svelte-material-icons/FilePlusOutline.svelte";
	import tippy from "tippy.js";
	import "tippy.js/dist/tippy.css";

	//https://stackoverflow.com/questions/7444451/how-to-get-the-actual-rendered-font-when-its-not-defined-in-css
	function css(selector: string, property: string) {
		return window.getComputedStyle(document.querySelector(selector)).getPropertyValue(property);
	}

	const buttonSize = "25px",
		navButtonSize = "45px",
		navButtonIconSize = "35px",
		navRailPadding = "8px",
		// Menu speed set in app.css as --transition
		navRailMinimum = 250, // In px
		profileSelectorSize = "85px";
	let menuSpeed:number,
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
		tooltips: any[] = [],
		showText = false;
	function clearTimers() {
		for (const [index, value] of menuTimer.entries()) {
			clearTimeout(menuTimer[index]);
		}
		menuTimer = [];
	}
	function menuText(display: boolean) {
		clearTimers();
		if (display) {
			document.querySelector(".profileSelector").style.display = "block";
			document.querySelector(".profileSelectorSpacer").style.display = "none";
			menuTimer[menuTimer.length] = setTimeout(() => {
				document.querySelector(".profileSelector").classList.add("fade");
			}, reducedMotionSpeed);
			menuTimer[menuTimer.length] = setTimeout(() => {
				showText = true;
			}, reducedMotionSpeed);
		} else {
			menuTimer[menuTimer.length] = setTimeout(() => {
				document.querySelector(".profileSelectorSpacer").style.display = "block";
				document.querySelector(".profileSelector").style.display = "none";
			}, menuSpeed);
			document.querySelector(".profileSelector").classList.remove("fade");
			showText = false;
		}
	}

	/* https://www.w3docs.com/snippets/javascript/how-to-calculate-text-width-with-javascript.html
	   TODO: Unknown license */
	function displayTextWidth(text: string, font: string): number {
		let context = document.createElement("canvas").getContext("2d");
		context.font = font;
		return Math.floor(context.measureText(text).width);
	}
	//console.log("Text Width: " + displayTextWidth("This is demo text!", "italic 19pt verdana")); //

	function getLongestString(selector: string) {
		let selectedElement: HTMLElement;
		jq(selector).each((index, element) => {
			const text = jq(element).text();
			if (text.length > jq(selectedElement).text().length) {
				selectedElement = element;
			}
		});
		return selectedElement;
	}

	jq(() => {
		const navrailComputedPixels: number = css("#navrail", "inline-size").search("px"),
			navrailComputedPaddingPixels: number = css("#navrail", "padding-inline").search("px"),
			iconComputedPixels: number = navButtonIconSize.search("px");
		navrailComputed = css("#navrail", "inline-size").slice(0, navrailComputedPixels),
		navrailComputedPadding = css("#navrail", "padding-inline").slice(0, navrailComputedPaddingPixels),
		textComputed = css(".link", "font-size"),
		iconComputed = navButtonIconSize.slice(0, iconComputedPixels);
		jq(".link").each((index, element) => {
			tooltips[tooltips.length] = tippy(element, {
				content: jq(element).attr("data-tooltip"),
				delay: [0, 0],
				placement: jq(":root").hasClass("rtl") ? "left" : "right"
			});
		});
		invoke("close_splashscreen");
	});

	function toggleMenu() {
		menuOpen = !menuOpen;
		if (menuOpen) {
			try {
				let data = (Number(iconComputed) + Number(displayTextWidth(jq(getLongestString(".link")).text(), textComputed + " Roboto")));
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
		backButton.set(false);
		if (menuOpen) toggleMenu();
	}
	const oneSecond = 1000;
	setInterval(() => {
		menuSpeed = Number.parseFloat(css(":root", "--transition").split("ms")[0].split("s")[0].split("m")[0].split("h")[0]); //In ms
		jq(":root").css("--menuSpeed", menuSpeed + "ms");
		reducedMotionSpeed = Number.parseFloat(css(":root", "--transitionReducedMotion").split("ms")[0].split("s")[0].split("m")[0].split("h")[0]); //In ms
	}, oneSecond);
	let navVisible = true;
	$: {
		//TODO: replace jquery with onMount;
		jq(() => {
			if (menuOpen) {
				menuVerticalOffset = profileSelectorSize;
				for (const tippy of tooltips) {
					tippy.disable();
				}
			} else {
				menuVerticalOffset = "0px";
				for (const tippy of tooltips) {
					tippy.enable();
				}
			}
		});
		if ($backButton) {
			navVisible = false;
		}
	}
	let buttonIds = 0;
	const getButtonId = () => {
		const data = "navButton" + buttonIds + 1;
		return data.toString();
	};
	import "$lib/theme.js";
	import { dropdown } from "$lib/navDropdown.js";
	import { base } from "$app/paths";
	let previousPage: string = base;
	afterNavigate(({from}) => {
		previousPage = from?.url?.pathname || previousPage;
	});
	function goBack() {
		backButton.set(false);
		navVisible = true;
		goto(previousPage);
	}
</script>
<a href="#main" class="skip">
	Skip to content
</a>
<div id="layout" style="--menuOffset: {menuOffset}; --menuVerticalOffset: {menuVerticalOffset}; --navRailSize: {navButtonSize}; --navRailPadding: {navRailPadding}; --buttonSize: {navButtonSize}; --iconSize: {navButtonIconSize}">
	<div id="navbar">
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
		<h1>{$title}</h1>
		<div>
			<button aria-label="Options Dropdown" class="btn"><Options size={buttonSize}/></button>
			<div class="dropdown" style="display:none; position:fixed">
				{#each $dropdown as item}
					<span on:click={item.function} on:keydown={item.keyFunction}>{item.text}</span>
				{/each}
			</div>
		</div>
	</div>
	<div id="navrail">
		<div class="profileSelectorSpacer">
			<!-- Needed to fix other navrail items' spacing while profileSelector is hidden -->
		</div>
		<div class="profileSelector display:none">
			<label for="profile">Profile</label>
			<select id="profile">
				<option>Team Fortress 2</option>
			</select>
		</div>
		<div class="navButtons primaryNavButtons">
			<NavButton
				size={navButtonSize}
				href="/main"
				text={$i18n.t("pageModsTitle")}
				dataPage="mods"
				id={getButtonId()}
				on:click={closeMenu}
				{showText}
				highlight={$currentPage}
			>
				<svelte:fragment slot="highlight">
						<FileOutline size={navButtonIconSize}/>
				</svelte:fragment>
				<svelte:fragment>
					<File size={navButtonIconSize}/>
				</svelte:fragment>
			</NavButton>
			<NavButton
				size={navButtonSize}
				href="/main/sources"
				text={$i18n.t("pageSourcesTitle")}
				dataPage="sources"
				id={getButtonId()}
				{showText}
				highlight={$currentPage}
				on:click={closeMenu}
			>
				<svelte:fragment slot="highlight">
						<FileDownloadOutline size={navButtonIconSize}/>
				</svelte:fragment>
				<svelte:fragment>
						<FileDownload size={navButtonIconSize}/>
				</svelte:fragment>
			</NavButton>
			<NavButton
				size={navButtonSize}
				href="/main/utils"
				text={$i18n.t("pageUtilitiesTitle")}
				dataPage="utils"
				id={getButtonId()}
				{showText}
				highlight={$currentPage}
				on:click={closeMenu}
			>
				<svelte:fragment slot="highlight">
						<ToolboxOutline size={navButtonIconSize}/>
				</svelte:fragment>
				<svelte:fragment>
						<Toolbox size={navButtonIconSize}/>
				</svelte:fragment>
			</NavButton>
			<NavButton
				size={navButtonSize}
				href="/main/troubleshooting"
				text={$i18n.t("pageTroubleshootTitle")}
				dataPage="troubleshoot"
				id={getButtonId()}
				{showText}
				highlight={$currentPage}
				on:click={closeMenu}
			>
				<svelte:fragment slot="highlight">
						<LightbulbOutline size={navButtonIconSize}/>
				</svelte:fragment>
				<svelte:fragment>
						<Lightbulb size={navButtonIconSize}/>
				</svelte:fragment>
			</NavButton>
			<NavButton
				size={navButtonSize}
				href="/main/wizard"
				text={$i18n.t("pageWizardTitle")}
				dataPage="wizard"
				id={getButtonId()}
				{showText}
				highlight={$currentPage}
				on:click={closeMenu}
			>
				<svelte:fragment slot="highlight">
						<FilePlusOutline size={navButtonIconSize}/>
				</svelte:fragment>
				<svelte:fragment>
						<FilePlus size={navButtonIconSize}/>
				</svelte:fragment>
			</NavButton>
		</div>
		<span></span>
		<div class="navButtons">
			{#if extensionPrompt}
				<NavButton
					size={navButtonSize}
					href="/main/settings/extension"
					text={$i18n.t("extensionPrompt")}
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
					size={navButtonSize}
					href="/main/settings/update"
					text={$i18n.t("updateNotice")}
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
				size={navButtonSize}
				href="/main/settings"
				text={$i18n.t("pageSettingsTitle")}
				dataPage="settings"
				id={getButtonId()}
				{showText}
				highlight={$currentPage}
				on:click={closeMenu}
			>
				<Cog size={navButtonIconSize}/>
			</NavButton>
		</div>
	</div>
	<span id="corner"></span>
	<span id="cornerRtl"></span>
	{#if menuOpen}
		<div id="closeMenu" on:click={toggleMenu} transition:fade={{duration: reducedMotionSpeed}}></div>
	{/if}
	<main class="content" id="main">
		<slot />
	</main>
</div>
<style>
	.skip {
		--size: 10px;
		--padding: 15px;

		position: fixed;
		block-size: var(--size);
		line-height: var(--size);
		padding-block: var(--padding);
		padding-inline: 8px;
		border-end-end-radius: 10px;
		inset-block-start: calc((var(--size) + var(--padding) * 2) * -1);
		transition: var(--transition);
		z-index: 100;
		background-color: var(--accentColor);
		color: var(--textColor);
		&:focus {
			inset-block-start: 0;
		}
	}
	:root {
		--navBarSize: 60px;

		transition: var(--transition);
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
			box-shadow: 0 0 20px 1px white;
		}
	}
	#navbar {
		user-select: none;
		z-index: 3;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 10px;
		position: fixed;
		block-size: var(--navBarSize);
		inline-size: 100%;
		padding-inline: 14px;
		padding-block: 10px;
		text-align:center;
		background-color: var(--accentColor);
		inset-block-start: 0;
		transition: var(--menuSpeed);
		&>h1 {
			margin-block: 0;
			color: var(--textColorOptimal);
		}
	}
	#navrail {
		--profileSize: 10px;

		user-select: none;
		z-index: 2;
		position: fixed;
		display: grid;
		grid-template-rows: auto auto 1fr auto;
		background-color: var(--accentColor);
		inline-size: calc(var(--navRailSize) + (var(--navRailPadding) * 2) + var(--menuOffset));
		max-inline-size: 100%; /* I want the max size to be slightly less than 100%, but it screws up the #corner positioning. Look into 'css attr' */
		inset-block-start: var(--navBarSize);
		padding-block-start: 20px;
		padding-block-end: 5px;
		block-size: calc(100% - var(--navBarSize));
		padding-inline: var(--navRailPadding, 8px);
		transition: var(--menuSpeed);
	}

	/* TODO: Hide navrail at smaller sizes
	/* @media (min-width: 200px) {
		#navrail {
			inset-block-start: -100%;
		}
	} */
	.navButtons {
		display: grid;
		grid-template-rows: auto;
		gap: 8px;
		margin-block-end: 8px;
	}
	.profileSelector {
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
			box-shadow: 0 0 20px 1px white;
		}
	}
	.profileSelector label {
		margin-block-end: 8px;
		display: flex;
		justify-content: center;
		color: var(--textColorOptimal)
	}
	.fade {
		opacity: 1;
		transition: opacity var(--transitionReducedMotion);
	}
	#corner {
		inline-size: 20px;
		z-index: 2;
		aspect-ratio: 1;
		/* stylelint-disable-next-line property-no-vendor-prefix -- Non prefix version doesn't work in MS Edge */
		-webkit-mask-image: url("/images/cornerMask.png");
		mask-image: url("/images/cornerMask.png");
		position: fixed;
		inset-block-start: var(--navBarSize);
		inset-inline-start: calc(var(--navRailSize) + (var(--navRailPadding) * 2) + var(--menuOffset));
		background-color: var(--accentColor);
		transition: inset-inline-start var(--menuSpeed), background-color var(--menuSpeed); /* Don't animate opacity */
	}
	#cornerRtl {
		inline-size: 20px;
		z-index: 2;
		aspect-ratio: 1;
		opacity: 0;
		/* stylelint-disable-next-line property-no-vendor-prefix -- Non prefix version doesn't work in MS Edge */
		-webkit-mask-image: url("/images/cornerMaskRtl.png");
		mask-image: url("/images/cornerMaskRtl.png");
		position: fixed;
		inset-block-start: var(--navBarSize);
		inset-inline-start: calc(var(--navRailSize) + (var(--navRailPadding) * 2) + var(--menuOffset));
		background-color: var(--accentColor);
		transition: inset-inline-start var(--menuSpeed), background-color var(--menuSpeed); /* Don't animate opacity */
	}
	#closeMenu {
		z-index: 1;
		backdrop-filter: blur(2px);
		background-color: rgb(0 0 0 / 0.5);
		position: fixed;
		inline-size: 100%;
		block-size: 100%;
		inset: 0;
	}
	main.content {
		margin-inline-start: calc(var(--navRailSize) + (var(--navRailPadding) * 2));
		margin-block-start: calc(var(--navBarSize));
	}
</style>