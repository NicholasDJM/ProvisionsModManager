import { locale } from "./common.ts";
interface Gamebanana {
	name: Record<string, string>,
	id: Record<string, number>,
	locale: Record<string, string>
}
const regexTemplateStart = "^https{0,1}://",
	regexTemplateEnd = "/{0,1}$",
	// eslint-disable-next-line security/detect-non-literal-regexp -- No user input.
	r = (regex: string) => new RegExp(regexTemplateStart + regex + regexTemplateEnd);
export const settings: Record<string, number | boolean | string> = {
	"port": 42069,
	"gamebanana": true,
	"mods_tf": true,
	"modboy": true
},
	template = "Provisions One-Click Installer",
	gamebanana: Gamebanana = {
		// https://gamebanana.com/game/<id>
		name: {
			"297": "tf2", // Team Fortress 2
			"5418": "tf2c", // Team Fortress 2 Classic
			"7748": "pf2", // Pre-Fortress 2
			"7286": "of" // Open Fortress
		},
		id: {
			"tf2": 297,
			"tf2c": 5418,
			"pf2": 7748,
			"of": 7286
		},
		locale: {
			"tf2": locale("gameTf2"),
			"tf2c": locale("gameTf2c"),
			"pf2": locale("gamePf2"),
			"of": locale("gameOf")
		}
	},
	regex = {
		"modstf": r("mods\\.tf\\/mods/\\d+/download/\\d+"),
		"gamebanana": r("gamebanana\\.com/(mods|sprays|sounds)/download/\\d+#FileInfo_\\d+"),
		"tf2maps": r("tf2maps\\.net/downloads/[^<>\\[\\]{}()\\s]+\\.\\d+/download")
	},
	nativeHost = "tfmod.extension.bridge",
	repository = "https://github.com/NicholasDJM/ProvisionsModManager",
	tippyConfig = {
		placement: "bottom",
		arrow: false
	};