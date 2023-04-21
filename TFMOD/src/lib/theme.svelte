<script lang="ts">
	import { LocalStorage } from "combo-storage";
	import { onMount } from "svelte";
	import jq from "jquery";
	function change() {
		/** @type this HTMLInputElement */
		LocalStorage.set("theme", this.options[this.selectedIndex].dataset.theme);
	}
	function changeMode() {
		LocalStorage.set("mode", this.options[this.selectedIndex].dataset.mode);
	}
	function changeDirection() {
		LocalStorage.set("direction", this.options[this.selectedIndex].dataset.direction);
	}
	function changeMotion() {
		LocalStorage.set("motion", this.options[this.selectedIndex].dataset.motion);
	}
	onMount(() => {
		jq("[data-theme]").each((index, element) => {
			if (LocalStorage.get("theme") === element.dataset.theme) {
				element.selected = true;
			}
		});
		jq("[data-mode]").each((index, element) => {
			if (LocalStorage.get("mode") === element.dataset.mode) {
				element.selected = true;
			}
		});
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
	});
	import { Command } from "@tauri-apps/api/shell";
	let systemColours = false;
	function generateSystemTheme() {
		const getColours = new Command("$resource/colors");
		//TODO: Create node (or rust script) to read windows registry values to get current system colours.
	}
	// TODO: Finish adding textColorOptimal to theme css
</script>
<div class="display:grid grid-template-rows:auto gap:8px">
	<label style="display:grid; grid-template-columns:1fr auto">
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
	<label style="display:grid; grid-template-columns:1fr auto">
		<span>Dark Mode</span>
		<select on:change={changeMode}>
			<option data-mode="system">Follow System Theme</option>
			<option data-mode="dark">Dark</option>
			<option data-mode="light">Light</option>
		</select>
	</label>
	<label style="display:grid; grid-template-columns:1fr auto">
		<span>Direction</span>
		<select on:change={changeDirection}>
			<option data-direction="auto">Follow Locale</option>
			<option data-direction="ltr">Left To Right</option>
			<option data-direction="rtl">Right to Left</option>
		</select>
	</label>
	<label style="display:grid; grid-template-columns:1fr auto">
		<span>Reduce Motion</span>
		<select on:change={changeMotion}>
			<option data-motion="normalMotion">Follow System</option>
			<option data-motion="reduceMotion">Reduce Motion</option>
		</select>
	</label>
</div>