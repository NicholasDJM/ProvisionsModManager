<script lang="ts">
	import { onMount } from "svelte";
	import HideNavBar from "$lib/components/HideNavBar.svelte";
	import { title } from "$lib/js/stores/store";
	import { i18n } from "$lib/js/stores/store";
	$: title.set($i18n.t("pyroland:page-pyroland"));
	import { backButton, backUrl } from "$lib/js/stores/store";
	backButton.set(true);
	backUrl.set(true);
	// @ts-expect-error Can't do anything about missing types.
	import { LocalStorage } from "combo-storage";
	import jq from "jquery";
	import { readTextFile, exists, writeTextFile } from "@tauri-apps/api/fs";
	const file = "\\steamapps\\common\\Team Fortress 2\\tf\\cfg\\mtp.cfg",
		directory = [
			"C:\\Program Files (x86)\\Steam",
			"D:\\SteamLibrary",
			"E:\\SteamLibrary",
			"F:\\SteamLibrary",
			"G:\\SteamLibrary",
			"H:\\SteamLibrary",
			"I:\\SteamLibrary",
			"J:\\SteamLibrary",
			"K:\\SteamLibrary",
			"L:\\SteamLibrary",
			"M:\\SteamLibrary",
			"N:\\SteamLibrary",
			"O:\\SteamLibrary",
			"P:\\SteamLibrary",
			"Q:\\SteamLibrary",
			"R:\\SteamLibrary",
			"S:\\SteamLibrary",
			"T:\\SteamLibrary",
			"U:\\SteamLibrary",
			"V:\\SteamLibrary",
			"W:\\SteamLibrary",
			"X:\\SteamLibrary",
			"Y:\\SteamLibrary",
			"Z:\\SteamLibrary",
			"A:\\SteamLibrary",
			"B:\\SteamLibrary"
		],
		messageMaps = "No maps in list.";
	type Map = [string, boolean]
	let maps: Array<Map> = [],
		message: string = messageMaps,
		saved = true,
		mapsOriginal: any[] = [],
		canonicalFile: string;
	function loadMaps() {
		//maps = [];
		let	result: any[] = [];
		//BUG: Does not stop at first file found, will overwrite data (in memory, not the file). Could not stop with a debounce variable or break.
		// Perhaps split checking if file exists to a seperate function and act on that data?
		for (const element of directory) {
			exists(element + file).then(() => {
				canonicalFile = element + file;
				console.log("Reading", canonicalFile);
				readTextFile(element + file).then(data => {
					/* console.log("Raw data")
					   console.log(data) */
					let start = 0;
					const startsWith = "\"VisionFilterShadersMapWhitelist\"\n{\n",
						startsWithWin = "\"VisionFilterShadersMapWhitelist\"\r\n{\r\n";
					if (data.slice(0, startsWith.length) === startsWith) { // *nix
						start = startsWith.length;
					} else if (data.slice(0, startsWithWin.length) === startsWithWin) { // Windows
						start = startsWithWin.length;
					}
					const splitter = "\u00F7";
					if (start) {
						data = data.slice(start); // Remove "VisionFilterShadersMapWhitelist" and {
						/* console.log("No Newlines")
						   console.log(data) */
						data = data.slice(0, -1); // Remove }
						/* console.log("Remove }")
						   console.log(data) */
						data = data.replace(/\t/g, ""); // Remove Tabs
						/* console.log("Remove tabs")
						   console.log(data) */
						data = data.replace(/\r/g, ""); // Remove Windows Newline
						/* console.log("Remove Windows Newline")
						   console.log(data) */
						data = data.replace(/""/g, splitter); // Turn two Double Quotes into a division symbol
						/* console.log("Two Quotes into Slash")
						   console.log(data) */
						data = data.replace(/"/g, ""); // Remove quotes
						/* console.log("Remove Remaining Quotes")
						   console.log(data) */
						let	newData = data.split(/\n/g); //Split into array
						/* console.log("Split into array")
						   console.log(newData) */
						if (newData.length === 1) {
							throw ["Cannot split data", newData];
						}
						if (maps.length > 0) {
							throw ["Map data is already populated.", maps, newData];
						}
						for (let index = 0; index < newData.length; index++) {
							/* console.log("Map")
							   console.log(newData[i]) */
							if (newData[index] !== "") {
								const split = newData[index].split(splitter);
								/* eslint-disable-next-line no-magic-numbers -- If the split does not produce exactly two entries, something's gone wrong. */
								if (split.length !== 2) {
									/* eslint-disable-next-line no-magic-numbers -- Ditto */
									throw [`Cannot parse data. Found ${split.length > 2 ? "more" : "less"} than 2 entries in array after split.`, newData[index], newData];
								}
								/*  Final split to get data.
								   console.log(result.length); */
								result[result.length] = [split[0], split[1] === "1" ? true : false];
								/* console.log("Result")
									   console.log("\"%c"+newData[i].split("/")[0] + "%c\", \"%c" +  (newData[i].split("/")[1] == "1" ? true : false)+"%c\"", "color:lightgreen", "color:white", "color:cyan", "color:white") */
							}
						}
						maps = result;
						mapsOriginal = structuredClone(result);
					} else {
						throw ["Invalid data", data];
					}
				}).catch(error => {
					console.error(error);
					message = "Failed to load map data.";
					jq("#message").css("color", "red");
				});
			}).catch(error => {
				if (error.includes("path not allowed")) {
					// Don't care
				} else {
					console.error(error);
					message = "Failed to load map data.";
					jq("#message").css("color", "red");
				}
			});
		}
	}
	onMount(() => {
		loadMaps();

	});
	function saveMaps() {
		saved = true;
		let string = "\"VisionFilterShadersMapWhitelist\"\n{\n";
		for (const element of maps) {
			string = string + `\t"${element[0]}"\t"${element[1] ? "1" : "0"}"\n`;
		}
		string = string + "}";
		writeTextFile(canonicalFile, string)
			.catch(error => {
				console.error(error);
				message = error;
				maps = [];
			});
	}
	function checkbox() {
		saved = false;
		const map = this.dataset.id,
			checked = this.checked;
		for (const [index, element] of maps.entries()) {
			if (element[0] === map) {
				maps[index][1] = checked;
			}
		}
	}
	function reset() {
		maps = structuredClone(mapsOriginal);
		saved = true;
	}
	function showDialog() {
		document.querySelector<HTMLDialogElement>("#addMapDialog")?.showModal();
	}
	function hideOverlay() {
		jq("#mapDialogError").css("display", "none");
	}
	function error(text: string) {
		jq("#mapDialogError").css("display", "block");
		jq("#mapDialogError").text(text);
		setTimeout(() => {
			document.querySelector<HTMLDialogElement>("#addMapDialog")?.showModal();
		}, 1);
	}
	function addMap() {
		saved = false;
		let hasMap = false,
			// ts-ignore
			value: string = jq("#map").val();
		for (const [index, element] of maps.entries()) {
			if (element[0] === value) {
				hasMap = true;
			}
		}
		const bsp = ".bsp";
		if (value.length > 0) {
			if (value.slice(bsp.length * -1) !== bsp) {
				const reg = /^workshop\/.+/;
				if (reg.test(value)) {
					console.log("Map is a workshop map, not adding '.bsp'")
				} else {
					value = value + bsp;
				}
			}
			if (hasMap) {
				error("Map already is in list");
			} else {
				maps[maps.length] = [value, true];
				hideOverlay();
			}
		} else {
			error("Input cannot be blank");
		}
	}
	function removeMap() {
		saved = false;
		jq("#message").css("color", "");
		message = messageMaps;
		const map = this.dataset.id;
		for (const [index, element] of maps.entries()) {
			if (element[0] === map) {
				let temporary = maps.slice(0, index),
					temporary2 = maps.slice(index + 1);
				maps = temporary;
				maps = [...temporary, ...temporary2];
				// Could not use maps.splice as Svelte didn't correctly update the DOM when removing items.
			}
		}
	}
	//FIXME: Replace table with display grid. Tables are weird. they follow none of any modern CSS rules.
	//TODO: Update dialog to suggest all available maps in a dropdown or search bar?
</script>
<div class="main">
	<h2>Analyser</h2>
		<p>Not implemented...</p>
	<h2>Pyroland Maps</h2>
	<button on:click={showDialog}>Add map</button>
	<button disabled={saved} on:click={saveMaps}>Save</button>
	<button disabled={saved} on:click={reset}>Reset</button>
	<table cellspacing="0">
		<thead>
			<th>Compatibility</th>
			<th class="mapColumn">Map</th>
			<th>Enabled</th>
			<th>Remove</th>
		</thead>
		<tbody>
			{#each maps as map}
				<tr class="highlight">
					<td class="compat" data-id={map[0]}><span>Unknown</span></td>
					<td class="expand">{map[0]}</td>
					<td><input type="checkbox" checked={map[1]} on:change={checkbox} data-id={map[0]}/></td>
					<td><span class="roundEnd"><button data-id={map[0]} on:click={removeMap}>Remove</button></span></td>
				</tr>
			{:else}
				<tr>
					<td colspan="4" id="message">
						{message}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<dialog id="addMapDialog">
	<label>
		Map file name
		<input type="text" id="map">
	</label>
	<div id="mapDialogError" style="display:none;color:red"></div>
	<br/>
	<br/>
	<form method="dialog">
		<span></span>
		<button on:click={addMap}>Add</button>
		<button on:click={hideOverlay}>Cancel</button>
	</form>
</dialog>
<HideNavBar/>
<style lang="postcss">
	.main {
		margin-inline: var(--defaultMargin);
		margin-block-end: var(--defaultMargin);
		margin-block-start: var(--defaultMargin);
	}
	dialog {
		background-color: var(--backgroundColor);
		color: var(--textColor);
		&>form {
			display: grid;
			grid-template-columns: 1fr auto auto;
			gap: 5px;
		}
	}
	table {
		margin-block-start: 20px;
		/* inline-size: calc(100vw - (var(--defaultMargin) * 2) - 20px); */
		table-layout: fixed;
	}
	tr {
		margin-block: 20px;
		border-radius: 10px;
	}
	td:first-child {
		border-start-start-radius: 10px;
		border-end-start-radius: 10px;
		padding-inline-start: 5px;
	}
	td:last-child {
		border-start-end-radius: 10px;
		border-end-end-radius: 10px;
		padding-inline-start: 5px;
	}
	td:nth-child(2) {
		padding-inline-end: 10px;
	}
	.expand {
		inline-size: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.highlight:hover, .highlight:focus-within {
		background-color: var(--accentColor);
		box-shadow: 0 0 0.8rem 1px var(--accentColor);
		/* border-radius: var(--corner); */
		color: var(--textColorOptimal);
		accent-color: var(--accentColorAlt);
	}
</style>
