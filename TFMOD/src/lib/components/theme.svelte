<script lang="ts">
	// @ts-expect-error Can't do anything about missing types.
	import { LocalStorage } from "combo-storage";
	import { onMount, onDestroy } from "svelte";
	import { i18n } from "$lib/js/i18n";
	import { direction } from "$lib/js/direction";
	import jq from "jquery";
	import Sun from "svelte-material-icons/WeatherSunny.svelte";
	import Moon from "svelte-material-icons/WeatherNight.svelte";
	import System from "svelte-material-icons/ThemeLightDark.svelte";
	let theme: string,
		fade = "0s";
	function change() {
		/** @type this HTMLInputElement */
		LocalStorage.set("theme", this.options[this.selectedIndex].dataset.theme);
		theme = LocalStorage.get("theme");
	}
	function changeMode() {
		LocalStorage.set("mode", this.options[this.selectedIndex].dataset.mode);
	}
	let darkmode = LocalStorage.get("mode") === null ? "system" : LocalStorage.get("mode");
	function setMode() {
		switch (LocalStorage.get("mode")) {
			case "system": {
				LocalStorage.set("mode", "dark");
				darkmode = "dark";
				break;
			}
			case "dark": {
				LocalStorage.set("mode", "light");
				darkmode = "light";
				break;
			}
			default: {
				LocalStorage.set("mode", "system");
				darkmode = "system";
			}
		}
	}
	function setModeKeyboard(event: KeyboardEvent) {
		if (event.key === "Enter" || event.key === "Space") {
			setMode();
		}
	}
	// function changeDirection() {
	// 	LocalStorage.set("direction", this.options[this.selectedIndex].dataset.direction);
	// 	if (this.options[this.selectedIndex].dataset.direction === "auto") {
	// 		direction.set(true);
	// 	} else {
	// 		direction.set(false);
	// 	}
	// }
	function changeMotion() {
		LocalStorage.set("motion", this.options[this.selectedIndex].dataset.motion);
	}
	function changeScroll() {
		LocalStorage.set("scroll", this.options[this.selectedIndex].dataset.scroll);
	}
	// TODO: Remove jquery
	onMount(() => {
		theme = LocalStorage.get("theme");
		fade = "var(--transitionReducedMotion)";
		jq("[data-theme]").each((index, element) => {
			if (LocalStorage.get("theme") === element.dataset.theme) {
				element.selected = true;
			}
		});
		// jq("[data-mode]").each((index, element) => {
		// 	if (LocalStorage.get("mode") === element.dataset.mode) {
		// 		element.selected = true;
		// 	}
		// });
		// jq("[data-direction]").each((index, element) => {
		// 	if (LocalStorage.get("direction") === element.dataset.direction) {
		// 		element.selected = true;
		// 	}
		// });
		jq("[data-motion]").each((index, element) => {
			if (LocalStorage.get("motion") === element.dataset.motion) {
				element.selected = true;
			}
		});
		jq("[data-scroll]").each((index, element) => {
			if (LocalStorage.get("scroll") === element.dataset.scroll) {
				element.selected = true;
			}
		});
	});
	import { Command } from "@tauri-apps/api/shell";
	let systemColours = false;
	function generateSystemTheme() {
		const getColours = new Command("$resource/colors");
		//TODO: Create node (or rust script) to read windows registry values to get current system colours.
	}
	//TODO: Modify palette to include color values, hex codes. Simplify to just normal and accent.
	const size = "25px";
	let translations: Record<string, string>;
	$: translations = {
		theme: $i18n.t("settings:theme"),
		blue: $i18n.t("settings:theme-blue"),
		green: $i18n.t("settings:theme-green"),
		red: $i18n.t("settings:theme-red"),
		purple: $i18n.t("settings:theme-purple"),
		yellow: $i18n.t("settings:theme-yellow"),
		scheme: $i18n.t("settings:color-scheme"),
		// direction: $i18n.t("settings:text-direction"),
		motion: $i18n.t("settings:motion"),
		scrollbar: $i18n.t("settings:scrollbar")
	};
</script>
<div class="palettePreview" style="--fade:{fade}">
	<label>
		<span>{translations.theme}</span>
		<select on:change={change}>
			{#if systemColours}
				<option data-theme="theme-system">Follow System</option>
			{/if}
			<option data-theme="theme-blue">{translations.blue}</option>
			<option data-theme="theme-green">{translations.green}</option>
			<option data-theme="theme-red">{translations.red}</option>
			<option data-theme="theme-purple">{translations.purple}</option>
			<option data-theme="theme-yellow">{translations.yellow}</option>
		</select>
	</label>
	<div class="{theme} palette light">
		<p class="noBorder">Light</p>
		<span class="background">Text</span>
		<span class="accent">Accent</span>
		<span class="altAccent">Alt Accent</span>
		<span class="optimal">Optimal Text</span>
	</div>
	<div class="{theme} palette dark">
		<p class="noBorder">Dark</p>
		<span class="background">Text</span>
		<span class="accent">Accent</span>
		<span class="altAccent">Alt Accent</span>
		<span class="optimal">Optimal Text</span>
	</div>
	<label>
		{translations.scheme}
		<!-- <select on:change={changeMode}>
			<option data-mode="system">Follow System Theme</option>
			<option data-mode="dark">Dark</option>
			<option data-mode="light">Light</option>
		</select> -->
		<div>
			<button class="darkmode" on:click={setMode} on:keydown={setModeKeyboard}>
				{#if darkmode === "system"}
					<System {size}/>
				{:else if darkmode === "dark"}
					<Moon {size}/>
				{:else}
					<Sun {size}/>
				{/if}
			</button>
		</div>
	</label>
	<!-- <label>
		{translations.direction}
		<select on:change={changeDirection}>
			<option data-direction="auto">Follow Locale</option>
			<option data-direction="ltr">Left To Right</option>
			<option data-direction="rtl">Right to Left</option>
		</select>
	</label> -->
	<label>
		{translations.motion}
		<select on:change={changeMotion}>
			<option data-motion="normalMotion">Follow System</option>
			<option data-motion="reduceMotion">Reduce Motion</option>
		</select>
	</label>
	<label>
		{translations.scrollbar}
		<select on:change={changeScroll}>
			<option data-scroll="colored">Coloured Scrollbars</option>
			<option data-scroll="standard">Standard Scrollbars</option>
		</select>
	</label>
</div>
<style>
	.palettePreview {
		display: grid;
		grid-template-rows: auto auto;
		gap: var(--defaultMargin);
		margin-block-end: 15px;
	}
	.palette {
		display: flex;
		justify-content: end;
		gap: 5px;
	}
	.palette * {
		padding-inline: 5px;
		padding-block: 2px;
		border-radius: 5px;
		display: inline-block;
		border: 1px solid var(--color-gray-4);
		transition: background-color var(--fade);
	}
	.palette .noBorder {
		border: none;
		margin-block: auto;
	}
	.palette .background {
		background-color: var(--backgroundColor);
		color: var(--textColor);
	}
	.palette .accent {
		background-color: var(--accentColor);
		color: var(--textColor);
		border: none;
	}
	.palette .altAccent {
		background-color: var(--accentColorAlt);
		color: var(--textColor);
		border: none;
	}
	.palette .optimal {
		background-color: var(--accentColor);
		color: var(--textColorOptimal);
		border: none;
	}
	.darkmode {
		display: flex;
		align-items: center;
		aspect-ratio: 1;
		border-radius: 50%;
		border: .1rem solid rgb(127 127 127 / 0.25);
		transition: var(--transition);
		&:hover, &:focus-visible {
			background-color: var(--accentColor);
			color: var(--textColorOptimal);
			box-shadow: 0 0 20px 1px var(--accentColor);
		}
	}
</style>
