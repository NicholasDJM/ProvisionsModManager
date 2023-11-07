export const settings: Record<string, number | boolean | string> = {
	"port": 42069,
	"gamebanana": true,
	"mods_tf": true,
	"modboy": true
},
	template = "Provisions One-Click Installer";
interface Gamebanana {
	name: Record<string, string>,
	id: Record<string, number>
}
export const gamebanana: Gamebanana = {
	name: {
		"297": "tf2",
		"5418": "tf2c",
		"7748": "pf2",
		"7286": "of"
	},
	id: {
		"tf2": 297,
		"tf2c": 5418,
		"pf2": 7748,
		"of": 7286
	}
};
const regexTemplateStart = "^https{0,1}://",
	regexTemplateEnd = "/{0,1}$",
	// eslint-disable-next-line security/detect-non-literal-regexp -- No user input.
	r = (regex: string) => new RegExp(regexTemplateStart + regex + regexTemplateEnd);
export const regex = {
	"modstf": r("mods\\.tf\\/mods/\\d+/download/\\d+"),
	"gamebanana": r("gamebanana\\.com/mods/download/\\d+#FileInfo_\\d+"),
	"tf2maps": r("tf2maps\\.net/downloads/[^<>\\[\\]{}()\\s]+\\.\\d+/download")
};