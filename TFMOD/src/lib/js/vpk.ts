/* eslint-disable no-magic-numbers -- It's all magic numbers. */

function reverse(data: Array<number>): Array<number> {
	const newData = [];
	for (let index = data.length; index > 0; index--) {
		newData[newData.length] = data[index - 1];
	}
	return newData;
}

function int(data: DataView, start: number): Array<number> {
	return reverse([data.getUint8(start), data.getUint8(start + 1), data.getUint8(start + 2), data.getUint8(start + 3)]);
}

function short(data: DataView, start: number): Array<number> {
	return reverse([data.getUint8(start), data.getUint8(start + 1)]);
}

function isVPK(data: DataView): boolean {
	// 0x55AA1234
	return data.getUint8(0) === 0x34 &&
		data.getUint8(1) === 0x12 &&
		data.getUint8(2) === 0xAA &&
		data.getUint8(3) === 0x55;
}
function decimal(data: Array<number>): number {
	let newData = "0x";
	for (const datum of data) {
		newData = newData + datum.toString(16);
	}
	//console.log("DATA", data, "CONCAT", newData, "PARSE", Number.parseInt(newData, 16));
	return Number.parseInt(newData, 16);
}

function dec(data: DataView, start: number): number {
	return decimal(int(data, start));
}

function file(data: DataView, start: number, end: number): Uint8Array {
	const newData = [];
	for (let index = start; index < start + end; index++) {
		newData[newData.length] = data.getUint8(index);
	}
	if (end === 0) {
		return Uint8Array.from([]);
	}
	return Uint8Array.from(newData);
}

function offsetOutOfBounds(offset: number, treeSize: number, fromMethod = "", skipCount: number) {
	console.log(offset, treeSize);
	if (offset > treeSize) {
		console.error("Exceeded tree size");
	}
	// if (offset - skipCount > treeSize) throw "Something went wrong, offset out of bounds. Was in: " + fromMethod;
}

interface Entry {
	name: string,
	path: string,
	full: string,
	data: Uint8Array,
	preload: number,
	crc: string
}
interface EntryNotFinal {
	name: string,
	path: string,
	full: string,
	preload: number,
	offset: number,
	length: number,
	archiveIndex: number
	crc: string
}

// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
export function read(files: Array<Uint8Array>): Array<Entry> {
	//BUG: Offset (variable) is exceeding Tree Length. (By about 10 to 30-ish) Figure out why.
		// INFO: NOT Solved.
	//BUG: If file data is in the same VPK file as the VPK Header, offset (entry offset) doesn't account for VPK header size + tree size.
		// INFO: Maybe solved?
	const dataview = new DataView(files[0].buffer),
		terminator = 0xFFFF;
	console.log(files[0]);
	if (!isVPK(dataview)) throw "Not a VPK file.";
	const version = dec(dataview, 0x04),
		treeSize = dec(dataview, 0x08);
	let fileSectionSize: number,
		externalMd5Size = 0,
		internalMd5Size = 48,
		signatureSize = 296;
	console.log(dec(dataview, 8));
	if (!(version === 1 || version === 2)) throw "Not a supported VPK format.";
	if (version === 2) {
		fileSectionSize = dec(dataview, 0x0C);
		externalMd5Size = dec(dataview, 0x10);
		internalMd5Size = dec(dataview, 0x14);
		signatureSize = dec(dataview, 0x18);
		//TODO: Handle this stuff.
	}
	let externalArchiveCount = 0,
		offset = version === 2 ? 0x1C : 0x0C;
	const data: Array<EntryNotFinal> = [];
	function char(data: DataView, offset: number): string {
		return String.fromCodePoint(dataview.getUint8(offset));
	}
	let fileCount = 0,
		pathSkip: false | string = false,
		extensionSkip: false | string = false,
		skipCount = 0;
	while (offset < treeSize) {
		fileCount++;
		let extension = "";
		if (extensionSkip) {
			extension = extensionSkip;
			extensionSkip = false;
		} else {
			while (dataview.getUint8(offset) !== 0) {
				if (extension.length === 0 && dataview.getUint8(offset) === 32 && dataview.getUint8(offset + 1) === 0) {
					break;
				}
				extension = extension + char(dataview, offset);
				offsetOutOfBounds(offset, treeSize, "Extension", skipCount);
				offset++;
			}
		}
		offsetOutOfBounds(offset, treeSize, "After Extension", skipCount);
		offset++;
		let path = "";
		if (pathSkip) {
			path = pathSkip;
			pathSkip = false;
		} else {
			while (dataview.getUint8(offset) !== 0) {
				if (path.length === 0 && dataview.getUint8(offset) === 32 && dataview.getUint8(offset + 1) === 0) {
					break;
				}
				path = path + char(dataview, offset);
				offsetOutOfBounds(offset, treeSize, "Path", skipCount);
				offset++;
			}
		}
		offsetOutOfBounds(offset, treeSize, "After Path", skipCount);
		offset++;
		let name = "";
		while (dataview.getUint8(offset) !== 0) {
			if (name.length === 0 && dataview.getUint8(offset) === 32 && dataview.getUint8(offset + 1) === 0) {
				break;
			}
			name = name + char(dataview, offset);
			offsetOutOfBounds(offset, treeSize, "Name", skipCount);
			offset++;
		}
		offsetOutOfBounds(offset, treeSize, "After Name", skipCount);
		offset++;
		console.info(path + "/" + name + "." + extension);
		const crc = dec(dataview, offset);
		offsetOutOfBounds(offset, treeSize, "After CRC", skipCount);
		offset += 4;
		const preload = decimal(short(dataview, offset));
		offsetOutOfBounds(offset, treeSize, "After preload", skipCount);
		offset += 2;
		const archiveIndex = decimal(short(dataview, offset)) === 0x7FFF ? 0 : decimal(short(dataview, offset));
		if (archiveIndex > externalArchiveCount && archiveIndex !== 0x7FFF) {
			externalArchiveCount = archiveIndex;
		}
		if (archiveIndex === 0) {
			console.info("Archive is internal");
		} else {
			console.info("Archive is external");
		}
		offsetOutOfBounds(offset, treeSize, "After Archive Index", skipCount);
		offset += 2;
		let entryOffset: number = dec(dataview, offset);
		if (archiveIndex === 0) {
			entryOffset = dec(dataview, offset) + (version === 2 ? 0x10 : 0) + treeSize;
			// TODO: Count up all skips used in the tree, then add to entryOffset. Cannot add here as skipCount probably isn't ready yet.
			// For loop thru all?
		}
		// const entryOffset = dec(dataview, offset); // TODO: Add treeSize plus VPK Header size to entry offset (if in same VPK file as VPK Header)
		offsetOutOfBounds(offset, treeSize, "After Entry Offset", skipCount);
		offset += 4;
		const entryLength = dec(dataview, offset);
		offsetOutOfBounds(offset, treeSize, "After Entry Length", skipCount);
		offset += 4;
		if (decimal(short(dataview, offset)) !== terminator) {
			throw "Something went wrong. Could not find Entry terminator.";
			// NOTE: If this fails, it probably means we didn't use skipping.
		}
		offsetOutOfBounds(offset, treeSize, "After Terminator", skipCount);
		offset += 2;
		if (decimal(short(dataview, offset)) === 0) {
			extensionSkip = false;
			pathSkip = false;
			skipCount += 2;
			offsetOutOfBounds(offset, treeSize, "No Skip", skipCount);
			offset += 2;
		} else if (dataview.getUint8(offset) !== 0) {
			pathSkip = path;
			extensionSkip = extension;
		} else if (dataview.getUint8(offset + 1) !== 0) {
			extensionSkip = extension;
			skipCount++;
			offsetOutOfBounds(offset, treeSize, "Extension Skip", skipCount);
			offset++;
		}
		console.log("START DEBUG NULL");
		console.log(dataview.getUint8(offset - 2));
		console.log(dataview.getUint8(offset - 1));
		console.log(dataview.getUint8(offset));
		console.log("END");
		console.info("Final Offset:", offset);
		console.info(`SKIP ${pathSkip ? "PATH+EXTENSION" : (extensionSkip ? "EXTENSION" : "NONE")}`);
		console.info("CRC:", crc, "Preload Bytes:", preload, "Archive Index:", archiveIndex, "Entry Offset:", entryOffset, "Entry Legnth:", entryLength);
		console.info("File count:", fileCount);
		const l = data.length;
		data[l] = {
			name: name + "." + extension,
			path: path,
			full: path + "/" + name + "." + extension,
			preload: preload,
			offset: entryOffset,
			length: entryLength,
			archiveIndex: archiveIndex,
			crc: String(crc)
		};
		console.log("DATA", data[l]);
	}
	for (const datum of data) {
		if (datum.archiveIndex === 0) {
			datum.offset = datum.offset + skipCount; // Add count of nulls to offset because they aren't counted in the tree size?
			// Nulls are used in entries to signal skipping,
			// two nulls = no skipping,
			// one null = use previous entry's extensions
			// no nulls = use previous entry's path and extension
			//*/
		}
	}
	if (files.length - 1 !== externalArchiveCount) throw "Missing additional archives. If the VPK file ends in '_dir', remember to supply the matching numbered VPK files. For example, mod_dir.vpk could have mod_000.vpk and mod_001.vpk.";
	const finalData: Array<Entry> = [];
	for (const datum of data) {
		console.info("ARCHIVE SIZE:", files[datum.archiveIndex].length);
		if (datum.offset > files[datum.archiveIndex].length) throw "Offset out of bounds.";
		if (datum.length > files[datum.archiveIndex].length - datum.offset) throw "Length out of bounds.";
		console.info("DIFFERNCE:", files[datum.archiveIndex].length - datum.length + datum.offset);
		console.log("OFFSET:", datum.offset, "LENGTH:", datum.length);
		const dataview = new DataView(files[datum.archiveIndex].buffer),
			fileData = file(dataview, datum.offset, datum.length);
		console.log(fileData);
		finalData[finalData.length] = {
			name: datum.name,
			path: datum.path,
			full: datum.full,
			preload: datum.preload,
			data: fileData,
			crc: datum.crc
		};
	}
	console.table(finalData);
	return finalData;
}