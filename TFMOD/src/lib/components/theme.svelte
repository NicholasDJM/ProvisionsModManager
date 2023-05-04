<script lang="ts">
	// @ts-expect-error Can't do anything about missing types.
	import { LocalStorage } from "combo-storage";
	import { onMount, onDestroy } from "svelte";
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
	function changeDirection() {
		LocalStorage.set("direction", this.options[this.selectedIndex].dataset.direction);
	}
	function changeMotion() {
		LocalStorage.set("motion", this.options[this.selectedIndex].dataset.motion);
	}
	function changeScroll() {
		LocalStorage.set("scroll", this.options[this.selectedIndex].dataset.scroll);
	}
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
		jq("[data-direction]").each((index, element) => {
			if (LocalStorage.get("direction") === element.dataset.direction) {
				element.selected = true;
			}
		});
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
	import Key from "./Key.svelte";
	let systemColours = false;
	function generateSystemTheme() {
		const getColours = new Command("$resource/colors");
		//TODO: Create node (or rust script) to read windows registry values to get current system colours.
	}
	//TODO: Modify palette to include color values, hex codes. Simplify to just normal and accent.
	const size = "25px";
</script>
<div class="palettePreview" style="--fade:{fade}">
	<label>
		<span>Theme</span>
		<select on:change={change}>
			{#if systemColours}
				<option data-theme="theme-system">Follow System</option>
			{/if}
			<option data-theme="theme-blue">Blue</option>
			<option data-theme="theme-green">Green</option>
			<option data-theme="theme-red">Red</option>
			<option data-theme="theme-purple">Purple</option>
			<option data-theme="theme-yellow">Yellow</option>
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
		Dark Mode
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
	<label>
		Direction
		<select on:change={changeDirection}>
			<option data-direction="auto">Follow Locale</option>
			<option data-direction="ltr">Left To Right</option>
			<option data-direction="rtl">Right to Left</option>
		</select>
	</label>
	<label>
		Reduce Motion
		<select on:change={changeMotion}>
			<option data-motion="normalMotion">Follow System</option>
			<option data-motion="reduceMotion">Reduce Motion</option>
		</select>
	</label>
	<label>
		Scrollbar Style
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
		gap: 8px;
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
