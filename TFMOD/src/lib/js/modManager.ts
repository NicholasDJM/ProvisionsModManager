/* eslint-disable no-magic-numbers -- It's all magic numbers, aaaalll the way down. */
import { exists, readBinaryFile, readTextFile, writeBinaryFile, writeTextFile } from "@tauri-apps/api/fs";

interface VPKFile {
	name: string,
	files: {
		file: string,
		data: string
	}
}
/** Returns list of file paths inside a VPK file. */
async function readVPKDir(path: string): Promise<VPKFile | null> {
	if (!path) {
		throw "error";
	}
	let data: Uint8Array,
		fileExists;
	try {
		fileExists = await exists(path);
		console.log(fileExists);
	} catch (error) {
		if (typeof error === "string" && error.includes("fs > exists")) {
			console.error(error);
			// eslint-disable-next-line unicorn/no-null
			return null;
		}
		throw error;
	}
	if (fileExists) {
		const file = await readBinaryFile(path);
		if (file) {
			return file;
			console.log(file);
		}
	} else {
		// eslint-disable-next-line unicorn/no-null
		return null;
	}
	/*let files;
	// for (const file of data) {
	// 	files[]
	// }
	// const finalData = {
	// 	name: path.split("\\")[path.length],
	// 	files: {}
	// };
	// return finalData;*/
}

function byte(start: number, data: Uint8Array) {
	let results = [];
	// eslint-disable-next-line no-magic-numbers
	for (let index = 0; index < 4; index++) {
		results[index] = data[start + index];
	}
	return results;
}

function toNumber(data: Uint8Array): number {
	return Number.parseInt(data[0].toString(16) + data[1].toString(16) + data[2].toString(16) + data[3].toString(16), 16);
}

/**
 * Reads and validates a VPK file.
 * @param {string} vpk - Path to VPK archive.
 * @returns File data
 */
export function readVPKArchive(vpk: string): Promise<Uint8Array> {
	let currentByte = 0;
	const inc = () => {
			return currentByte += 4;
		},
		p: Promise<Uint8Array> = new Promise((resolve, reject) => {
			readBinaryFile(vpk).then(data => {
				console.log(byte(0, data));
				const vpkSig = [52, 18, 170, 85],
					dataSig = byte(0, data);
				for (const [index, element] of vpkSig.entries()) {
					if (element !== dataSig[index]) {
						reject("File is not a VPK file.");
					}
				}
				const version = byte(inc(), data)[0],
					treeSize = Uint8Array.from(byte(inc(), data)),
					treeLength = toNumber(treeSize),
					dataLength = version === 2 ? toNumber(Uint8Array.from(byte(inc(), data))) : null,
					dataStart = treeLength + 0;
				if (!(version === 1 || version === 2)) {
					reject("Unsupported version");
				}
				console.info("Version", version, "Tree Length", treeLength + " bytes", "Data Length", dataLength + " bytes");
				resolve(data);
			}).catch(error => {
				reject(error);
			});
		});
	return p;
}

/** Returns data from a file inside a VPK file.
 * @param {string} path - Path inside VPK file.
 * @param {string} vpk - Path to VPK file.
 * @returns {Promise} Uint8Array - Data from file.
*/
async function getVPKFile(path: string, vpk: string): Promise<Uint8Array> {

}

/** Saves file extracted from a VPK file to a specified location
 * @param {string} path - Path inside VPK file.
 * @param {string} vpk - Path of VPK file to extract from.
 * @param {string} savePath - Path to save the extracted file. Do not include filename. File name is derived from VPK archive.
 * @returns {boolean} - Operation success.
 */
function extractVPKFile(path: string, vpk:string): boolean {

}

/**
 *
 */
export const VPK = { getVPKFile };