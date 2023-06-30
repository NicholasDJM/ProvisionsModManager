// TODO: Just learned of JSON schemas (thanks to VS Code failing to load a schema for user settings). So: rewrite all of this in a JSON schema.
// NOTE: This metadata currently only applies to Team Fortress 2 mods only, not to Team Fortress 2 Classic mods, Open Fortress mods, or Pre Fortress 2 mods.
import type { LanguageCode } from "iso-639-1";
type Languages = Record<LanguageCode, string>;
type Url = `http${"s" | ""}://${string}.${string}`;
type JsonExtension = `json${"5" | ""}`;
type JsonUrl = `${Url}.${JsonExtension}`;
interface Image {
	file: string,
	url?: Url,
	alt: Languages
}
interface Images {
	thumbnail: Image,
	screenshots?: Array<Image>
}
interface Options {
	installType?: "standard" | "overwrite",
	features?: Array<"textureStitch" | "subModel" | "caption" | "color">,
	preload?: Array<string>
}
/*
	"installType": Default is standard. Standard is putting files in the custom folder.
					Overwrite should rarely be needed. This will actually overwrite base game files. Automatic backups will be made.
					WARNING: This means that sv_pure servers will revert file to their default, but since they've been overwritten, likely they'll be blank or pink and black.
	"textureStitch": Supported textures may have regions that can be filled in with partial textures via mods
					EX: The Homerunner's Hobby taunt may have a region for the comic book that can be swapped out without affecting the rest of the texture.
					Mods may also package a configuration file to add new texture regions.
	"subModel": Some models may have attachment points for new models to attach to, creating unique variants of models.
					EX: A sniper rifle may have a scope attachment point, for different scopes.
	"caption": Allow adding custom captions that can be used by scripts via cc_emit, on top of any full caption mods.
	"color": Some textures may have some regions that have customizable color. Can be combined with textureStitch.
	"preload": An array of file paths inside the VPK Archive to add the the preload system.
					This will be added to a preload map and loaded upon first starting the game.
*/
type AddonPath = `${string}.vpk`
interface AddonMod {
	file: AddonPath
	required?: true
}
type SematicVersion = `${number}.${number}.${number}`
type ValidFileExtensions = "vpk" | "zip" | "rar" | "7z"
interface Type {
	type: "item" | "map" | "texture" | "sound" | "hud" | "script" | "bik" | "caption",
	pure?: boolean
}
type Scout = "scout" | "scunt" | "Jeremy";
type Soldier = "soldier" | "Jane Doe";
type Pyro = "pyro" | "w+m1";
type Demo = "demo" | "demoman" | "sticky spammer" | "one-eyed bloody monster" | "Tavish Finnegan DeGroot";
type Heavy = "heavy" | "heavy weapons guy" | "pootis" | "Misha" | "Mikhail";
type Engineer = "engineer" | "engi" | "Dell Conagher";
type Medic = "medic" | "Ludwig";
type Sniper = "sniper" | "lucksman" | "Mundy" | "Mun-dee";
type Spy = "spy" | "mentlegen";
type Civilian = "civilian" | "vip";
type Class = Scout | Soldier | Pyro | Demo | Heavy | Engineer | Medic | Sniper | Spy | Civilian | "all";
interface ItemType extends Type {
	type: "item",
	replace: string, // What model this mod is designed to replace. Should be a model file name.
	paint?: boolean,
	warpaint?: boolean,
	team?: boolean,
	class: Array<Class> | Class,
	subModel?: boolean
}
interface MapType {
	type: "map",
	plugins?: Array<URL>,
	MLMesh?: boolean,
	background: boolean
}
/*
	Plugins: Array of URLs that should resolve to SourceMod plugins the map requires to function. Would be synced to a server.
		Would require a plugin on the server to manage these additional plugins.
	MLMesh: Reserved for future use. Machine learning navigation mesh
		Future TODO: Create SourceMod plugin that learns from player actions and movements to give more human-like TFBots.
	background: Is this map a background map to be loaded via map_background
*/
interface TextureType extends Type {
	type: "texture",
	sound?: boolean,
	subTexture?: boolean,
	color?: {
		red: string,
		blue: string
	}
}
interface SoundType extends Type {
	type: "sound",
	combine: boolean,
	// Combine: should we combine with other sound files rather than overwriting?
	combineType: "base" | "other"
	// Type determines priority and how to combine sounds.
	// "base" acts as a base, which other sounds will be combined onto.
	// "other" means sounds should be layered onto a base.
	// "base" mods will conflict with each other, as will "other" mods.
	// However, multiple "other" mods can exist along side a single "base" mod for the same sound.
}

interface ResolutionOptionFile {
	original: string,
	override: string
}

interface ResolutionOption {
	// Files that apply to 4:3 will also apply to bigger ratios. But NOT the other way around.
	minimumRatio: "4:3" | "16:9" | "16:10" | "21:9",
	files: Array<ResolutionOptionFile>
}

interface HudConfig {
	name: string,
	element?: string,
	enable?: boolean,
	color?: string,
	position?: string,
	misc?: Record<string, string>,
	resolution: Array<ResolutionOption>
}
// HUDs can define a set of files for certain resolutions that will be applied automatically based on user's current screen resolution (when compiling mods)

interface HudType extends Type {
	type: "hud",
	config: Array<HudConfig>
}
interface ScriptType extends Type {
	type: "script",
	wait?: boolean,
	noWait: Array<string>,
	install?: Array<string>,
	class: Class,
	entry: string
}
/*
	install: List of commands to be added to autoexec.cfg. Some commands are banned, and will not be added.
		Commands after any semicolon will be ignored.
		For example, anything that lags the game, or causes unwanted action, like quit, or unbindall.
			Exec command is banned.
	class: Install for a single class only?
	entry: Which script should be injected to autoexec or a class config? This will add an "exec ENTRY_SCRIPT",
		where ENTRY is the path to the script, to the end of the relevent CFG file.
	wait: Does any of the scripts rely on the wait command?
	noWait: List of paths of scripts that are wait safe.
		If there is no wait safe scripts, players may be unable to use your scripts on servers that disable wait via sv_allow_wait_command
*/
interface BikType extends Type {
	type: "bik"
}
interface CaptionType extends Type {
	type: "caption",
	namespace: string // Same restriction as mod's ID
	/* Caption files will be plain text.
		Simple key value pairs, keys and values separated with a colon (:).
		Captions can contain a # followed by either a 6 digit hex code, or a CSS colour name.
		Strings starting with // are comments.
		Keys meant for scripting can be namespaced.
		Words starting with $ are variables that can be changed in scripting in the IDE. (Not during runtime, only during compile)
		Comments starting with //@ declares a function.
			The only function for now, is //@ namespace, and //@ end (READ: no space exists between the @ and the function name)
			namespace: enabled prefixing all captions below with the namespace defined in metadata.json5
			end: generic function. ends a function's effect
	*/
}
type Types = ItemType | MapType | TextureType | SoundType | HudType | ScriptType | BikType | CaptionType
type MappingName = "tf2" | "tf2c" | "of" | "pf2";
type MappingEntry = `${mappingName}:${string}`
type Mapping = Record<string, Array<MappingEntry>>;
interface GameMappings {
	tf2?: Mapping,
	tf2c?: Mapping,
	of?: Mapping,
	pf2?: Mapping,
}
/* If a mod is applicable to more than one Sourcemod, map the files here.
	For each game, there must be a full file path in a VPK archive, then another file path of another game
	for example (pseudo):
		mappings: {
			"tf2": {
				"TF2_Mod.vpk/really/long/and/complicated/file/path.vtf": [
					"tf2c:simple/path.vtf"
				]
			}
		}

	Eventually, all files for all games should be mapped within provisions mod manager, allowing multi-game mods to be fully automatic.
*/

interface Author {
	name: string,
	note: Languages
}
// Note is to be used as a way of attribution. "How did this particular author contribute?" Artist? Model? Sound design?

interface Version {
	metadataVersion: 1
}
export interface Metadata extends Version {
	id: string // While it can't be validated here, ID must be lowercase letters from A-Z and periods, and must start with a letter.
	name?: Languages,
	author?: Array<Author> | Author | string,
	version?: SematicVersion,
	license?: string,
	description?: Languages,
	instructions?: Languages,
	canonicalUrl?: `${Url}.${ValidFileExtensions}`,
	updateUrl?: JsonUrl,
	images?: Images,
	md5: Array<string>,
	explicit?: Array<"blood" | "nudity" | "profanity" | "epilepsy" | "arachnophobia" | "spoiler" | "motion">,
	options?: Options,
	addons?: Array<Array<AddonMod> | AddonMod>,
	dependencies?: Array<Url>,
	peers?: Array<string>,
	type: Types
	holiday: Array<"smissmiss" | "scream fortress" | "tf birthday" | "tf2 birthday" | "april fools" | "full moon"> // Should only be holidays that TF2 is programmed to recognize. TODO: Add more
	links?: Array<Url> | Url,
	game: Array<"TF2" | "TF2C" | "OF" | "PF2">,
	mappings?: GameMappings
}
export type MetadataName = `metadata.${JsonExtension}`
export type UpdateMetadataName = `latest.${JsonExtension}`
// TODO: Rework update JSON to include URLs of each individual file, so we can fetch missing or outdated files.
interface UpdateMetadataItem {
	url: JsonUrl,
	version: SematicVersion,
	md5: Array<string>
}
export interface UpdateMetadata {
	latest: UpdateMetadataItem,
	mods: Array<UpdateMetadataItem>
}
// Full example metadata.json, written in JSON5 (comments are available and keys don't have to be in quotes.)
/*
	{
		id: "username123.fancy.mod" //Lowercase alphanumeric and dots only. Required. DEV NOTE: Must be validated in code. No regex available in TS
		name: {
			en: "A Fancy Mod"
			fr: "Un module de luxe"
		},
		version: 1.2.3
		author: Username123,
		description: {
			en: "This is a fancy description.",
			fr: "Une description fantaisiste."
		},
		// No other installation instructions. So instructions is not defined.
		canonicalUrl: "https://raw.githubusercontent.com/username123/example-project/main/mod.vpk",
		//WARNING: This URL should be a permanent link.
			// Canonical URL can be used to download mods. In this way, only the metadata.json needs to be downloaded to download the rest of the mods.
		updateUrl: "https://raw.githubusercontent.com/username123/example-project/main/latest.json",
		images: {
			thumbnail: {
				image: "/images/256.png",
				alt: {
					en: "Mod Logo"
				}
			},
			// Thumbnail must be 128 by 128 pixels or higher, and must be square (Width is equal to Height).
			screenshots: [
				{
					image: "/images/game1.png",
					alt: {
						en: "A screenshot of how the mod looks on pl_badwater."
					}
				},
				{
					image: "/images/game2.png",
					alt: {
						en: "A screenshot of how the mod looks on ctf_2fort."
					}
				},
				{
					image: "/images/backpack.png",
					alt: {
						en: "An animated screenshot of how the mod looks in the character loadout."
					}
				},
			]
		},
		md5: [
			"abcdef12345" // materials/texture.vtf
		],
		explicit: ["blood"],
		options: {
			// Standard installation is the default. Do not need to include installType.
			features: ["textureStitch", "color"]
			// No files need to be preloaded.
		},
		addons: [
			[
				"OptionA.vpk", // Only one of these VPKs can be installed at a time.
				"OptionB.vpk"
			],
			"OptionC.VPK" //This VPK can be installed independently of other options.
		],
		dependencies: [
			"https://raw.githubusercontent.com/xUsernamex987/popular-mod/main/mod.vpk" //Requires this mod to be installed, which Provisions Mod Manager will do on your behalf. If a newer version is already installed, abort.
		],
		// No peers, but if there was, Provisions Mod Manager would not complain about conflicting files. Peers should depend on this mod.
		// Usually only useful if the author has control over both this mod and any peers.
	}
*/