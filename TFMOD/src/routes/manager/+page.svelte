<script lang="ts">
	import { onDestroy } from "svelte";
	import { readTextFile, writeBinaryFile, exists, removeFile, BaseDirectory } from "@tauri-apps/api/fs";
	import { fetch, ResponseType } from "@tauri-apps/api/http";
	import { readVPKArchive } from "$lib/js/modManager";
	readVPKArchive("C:\\Program Files (x86)\\Steam\\steamapps\\common\\Team Fortress 2\\tf\\custom\\#####Gamemode Illustrations V0.3.vpk").then(data => console.log(data));
	let id = "0",
		lastId = "0",
		data: any,
		metaData = {
			"Owner().name": "",
			"Game().name": "Team Fortress 2",
			"name": "",
			"description": "",
			"date": 0,
			"id": ""
		},
		moduleId = "0";
	const oneSecond = 1000,
		interval = setInterval(() => {
			// TODO: get path of tfmod.commands.install.txt
			exists("$APPDATA/tfmod.command.install.txt").then(data => {
				if (data) readTextFile("D:/FinalProjects/TFMOD_EXTENSION_NATIVEHOST/tfmod.command.install.txt").then(contents => {
					let string = contents.split(",");
					id = string[0];
					lastId = string[0];
					moduleId = string[1];
					removeFile("$APPDATA/tfmod.command.install.txt");
				});
			});
			if (id !== "0") {
				fetch("https://api.gamebanana.com/Core/Item/Data?itemtype=Mod&itemid=" + moduleId + "&fields=Owner().name,Game().name,name,description,date&return_keys=1&format=json").then((response) => {
					metaData = response.data;
					metaData.id = moduleId;
					fetch("https://gamebanana.com/dl/" + id, {method: "GET", responseType: ResponseType.Binary}).then((response) => {
						let file = response.data;
						console.log(response);
						console.log("MOD PAGE ID:", moduleId);
						console.log("CONTENT-TYPE:", response.headers["content-type"]);
						const check = (text: string) => {
							text = text.toLowerCase();
							switch (text) {
								case "application/zip": {
									return true;
								}
								case "application/rar": {
									return true;
								}
								case "application/7z": {
									return true;
								}
								case "text/txt": {
									return true;
								}
								case "application/vmt": {
									return true;
								}
								case "application/vtf": {
									return true;
								}
								case "text/cfg": {
									return true;
								}
								default: {
									return false;
								}
							}
						};
						console.log(response.status);
						const okStatus = 200;
						if (response.status === okStatus) {
							if (check(response.headers["content-type"])) {
								writeBinaryFile({path: "D:/FinalProjects/TFMOD/downloads/" + Date.now() + "-" + moduleId + "." + response.headers["content-type"].split("/")[1].split(";")[0], contents: new Uint8Array(file)});
							} else {
								throw "Incorrect data type, found " + response.headers["content-type"] + ".";
							}
						} else {
							throw response.status;
						}
					});
				});
				id = "0";
			}
		}, oneSecond);
	onDestroy(() => {
		clearInterval(interval);
	});
	/* eslint-disable-next-line unicorn/prevent-abbreviations -- Mod works in this context */
	interface modMetaData {
		name: string,
		author: string,
		description: {
			short: string
			long: string
		},
		images: {
			main: {
				file: string,
				size: string,
				alt: string
			}
			banner: {
				file: string,
				size: string,
				alt: string
			}
		},
		url: string,
		hash: string,
		path: string,
		hasMetadata: boolean
	}
	let mods: Array<modMetaData> = [];
</script>
<!-- eslint-disable @intlify/svelte/no-raw-text -- Not a user facing page. No translation needed. -->
<h1>ID: {lastId}</h1>
<table>
	<thead>
		<tr>
			<th>Author</th>
			<th>Game</th>
			<th>Name</th>
			<th>Description</th>
			<th>Date</th>
			<th>ID</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			{#each Object.values(metaData) as value}
				<td>{value}</td>
			{/each}
		</tr>
	</tbody>
</table>
<h1>Installed Mods</h1>
<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Image</th>
			<th>Short Description</th>
			<th>Long Description</th>
			<th>Author</th>
			<th>Canonical URL</th>
			<th>Original File Location</th>
			<th>MD5</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			{#each Object.values(mods) as value}
				<td>{value.name}</td>
				<td><img src={value.images.main.file} alt={value.images.main.alt} loading="lazy"/></td>
				<td>{value.description.short}</td>
				<td>{value.description.long}</td>
				<td>{value.author}</td>
				<td>{value.url}</td>
				<td>{value.path}</td>
				<td>{value.hash}</td>
				<td>{value.hasMetadata}</td>
			{/each}
		</tr>
	</tbody>
</table>
<style lang="postcss">
	td {
		border: 1px solid black;
	}
</style>
