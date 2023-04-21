<script lang="ts">
	import { onMount } from "svelte";
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
	let showOverlay = false,
		maps: any[] = [],
		message: string = messageMaps,
		saved = true,
		mapsOriginal: any[] = [],
		canonicalFile: string;
	function loadMaps() {
		//maps = [];
		let	result: any[] = [];
		for (const element of directory) {
			exists(element + file).then(() => {
				canonicalFile = element + file;
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
						data = data.replace(/""/g, "/"); // Turn two Double Quotes into a slash
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
								if (newData[index].split("/").length !== 2) {
									throw ["Cannot parse data", newData];
								}
								/*  Final split to get data.
								   console.log(result.length); */
								result[result.length] = [newData[index].split("/")[0], newData[index].split("/")[1] === "1" ? true : false];
								/* console.log("Result")
									   console.log("\"%c"+newData[i].split("/")[0] + "%c\", \"%c" +  (newData[i].split("/")[1] == "1" ? true : false)+"%c\"", "color:lightgreen", "color:white", "color:cyan", "color:white") */
							}
						}
						maps = result;
						LocalStorage.set("maps", result);
						/* Had to set map data to localStorage
						   because Svelte kept updating mapsOriginal,
						   even though it's only set here and only once. like it was a Reactive variable. It's not. */
					} else {
						throw ["Invalid data", data];
					}
				}).catch(error => {
					console.error(error);
					message = "Failed to load map data.";
					jq("#message").css("color", "red");
				});
			}).catch(() => {/**/});
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
		loadMaps();
		maps = LocalStorage.get("maps");
		saved = true;
	}
	function showDialog() {
		document.querySelector<HTMLDialogElement>("#addMapDialog").showModal?.();
		showOverlay = true;
	}
	function hideOverlay() {
		showOverlay = false;
		jq("#mapDialogError").css("display", "none");
	}
	function error(text: string) {
		jq("#mapDialogError").css("display", "block");
		jq("#mapDialogError").text(text);
		setTimeout(() => {
			document.querySelector("#addMapDialog").showModal();
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
		if (value.length > 0) {
			if (value.slice(-4) !== ".bsp") {
				value = value + ".bsp";
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
</script>
<div class="title">
	<h1>Pyroland Compatibility Analyser</h1>
</div>
<main>
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
</main>
{#if showOverlay}
	<div class="overlay"></div>
{/if}
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
<style>
	:root {
		overflow-y: scroll;
		--titlebarSize: 80px;
		--corner: 20px;
	}
	main {
		margin-inline: var(--defaultMargin);
		margin-block-end: var(--defaultMargin);
		margin-block-start: calc(var(--defaultMargin) + var(--titlebarSize));
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
		inline-size: 100%
	}
	.overlay {
		position: fixed;
		inset: 0;
		block-size: 100%;
		inline-size: 100%;
		background-color: rgb(0 0 0 / 0.5);
		backdrop-filter: blur(2px);
	}
	.highlight:hover, .highlight:focus-within {
		background-color: var(--accentColorAlt);
		box-shadow: 0 0 20px 1px var(--accentColorAlt);
		border-radius: var(--corner);
	}
	@media (prefers-color-scheme:dark) {
		.highlight:hover,.highlight:focus-within {
			color: var(--textColor);
		}
	}
	button {
		background-color: white;
		border-radius: var(--corner);
		border: 0;
		&:hover:not(:disabled),&:focus:not(:disabled) {
			background-color: var(--accentColor);
			color: var(--textColorInverse);
			box-shadow: 0 0 20px 1px var(--accentColor);
		}
	}
	.title {
		text-align: center;
		inline-size: 100%;
		block-size: var(--titlebarSize);
		position: fixed;
		inset-block-start: 0;
		background-color: var(--accentColor);
	}
</style>