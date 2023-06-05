import * as Comlink from "comlink";
import { readBinaryFile } from "@tauri-apps/api/fs";
import { Command } from "@tauri-apps/api/shell";
interface Directory {
	filename: string,
	files: Array<string>
}
async function directory(file: string): Directory {
	// let data = await readBinaryFile(file);
	const vpkexe = new Command("vpk", ["l", file]);
	vpkexe.on("close", data => {
		console.log(data);
	});
	vpkexe.on("error", data => {
		console.error("CAUGHT", data);
	});
	let data_ = "";
	vpkexe.stdout.on("data", data => {
		// console.log(data);
		if (data) {
			//TODO: Split data
			data_ = data_ + data;
		}
		console.log(data_);
	});
	vpkexe.stderr.on("data", data => {
		console.error("CAUGHT", data);
	});
	console.log("pid", (await vpkexe.spawn()).pid);
}
export const vpkexe = { directory: directory };