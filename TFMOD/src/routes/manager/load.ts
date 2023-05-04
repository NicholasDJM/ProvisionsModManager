import { readBinaryFile, exists, writeTextFile } from "@tauri-apps/api/fs";
import md5 from "blueimp-md5";
export async function load(path: string) {
	if (!path) {
		throw "Need Path argument";
	}
	if (typeof path !== "string") {
		throw "Path argument needs to be a string";
	}
	let data = [];
	await exists(path).then(result => {
		if (result) {
			readBinaryFile(path).then(contents => {
				data[data.length] = contents;
				data[data.length] = md5(contents);
			}).catch(error => {
				data = null
				throw error;
			});
		}
	}).catch(error => {
		data = null
		throw error;
	});
	return new Promise(data);
}