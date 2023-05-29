/* eslint-disable no-magic-numbers -- All numbers are not magic numbers. */
type Short = `${number}${number}`
type Int = `${Short}${Short}`
interface Entry {
	CRC: Int,
	PreloadBytes: Short,
	ArchiveIndex: Short,
	EntryOffset: Int,
	EntryLength: Int
	Terminator: 0xFFFF
}
interface MD5Footer {
	ArchiveIndex: Int,
	StartingOffset: Int,
	Count: Int
	Checksum: string
}
interface SignatureFooter {

}
interface VPK {
	Signature: "4␒ªU",
	Version: 1 | 2
	TreeSize: Int,
	Files: Array<Entry>
}
interface VPK1 extends VPK {
	Version: 1
}
interface VPK2 extends VPK {
	Version: 2,
	FileDataSectionSize: Int,
	ArchiveMD5SectionSize: Int,
	OtherMD5SectionSize: 0x48,
	SignatureSectionSize: Int,
	MD5Footer?: Array<MD5Footer>,
	SignatureFooter?: Array<SignatureFooter>
}
const signature: VPK1["Signature"] = "4␒ªU",
	hexSig = [0x34, 0x12, 0xAA, 0x55];

/**
 * Reads from an Uint8array or array of Uint8arrays, and produces a object equal to VPK1 or VPK2.
 * @param data - Uint8array | Array< Uint8array >
 * @returns VPK1 | VPK2 | Error
 */
function read(data: Uint8Array | Array<Uint8Array>): VPK1 | VPK2 | Error {
	const buffer = data.buffer,
		view = new DataView(buffer);
	let archive,
		complete = false,
		cursor = 0,
		subData,
		sig = false,
		version: number | null = null;
	while (subData !== undefined) {
		subData = view.getUint8(cursor);
		cursor++;
		if (!sig) {
			for (let index = 0; index < 3; index++) {
				subData = view.getUint8(cursor);
				if (subData !== hexSig[index]) {
					break;
				}
				cursor = index;
			}
			sig = true;
			continue;
		}
		if (version === null) {
			subData = view.getUint8(cursor);
			if (subData === 1) {
				version = 1;
			}
			if (subData === 2) {
				version = 2;
			}
			if (!version) {
				break;
			}
		}
	}
	if (complete) return archive;
	throw "File is not a valid VPK";
}
/**
 * Creates an Uint8array from a VPK1 or VPK2 object, ready to be written to disk. May return an array of Uint8arrays; this means the archive is split among multiple files.
 * @param data - VPK1 | VPK2
 * @returns Uint8array | Array< Uint8array >
 */
function write(data: VPK1 | VPK2): Uint8Array | Array<Uint8Array> {

}

export const vpk = {
	read: read,
	write: write
};