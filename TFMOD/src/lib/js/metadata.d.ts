import type { LanguageCode } from "iso-639-1";
type Languages = Record<LanguageCode, string>;
type Url = `http${"s" | ""}://${string}.${string}`;
type JsonExtension = `json${"5" | ""}`
type JsonUrl = `${Url}.${JsonExtension}`
interface Image {
	file: string,
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
type SematicVersion = `${number}.${number}.${number}`
type ValidFileExtensions = "vpk" | "zip" | "rar" | "7z"
export interface Metadata {
	id: string
	name?: Languages,
	author?: Array<string> | string,
	version?: SematicVersion
	description?: Languages,
	instructions?: Languages,
	canonicalUrl?: `${Url}.${ValidFileExtensions}`,
	updateUrl?: JsonUrl,
	images?: Images,
	md5: Array<string>,
	explicit?: Array<"blood" | "nudity" | "profanity">,
	options?: Options,
	addons?: Array<Array<AddonPath> | AddonPath>,
	dependencies?: Array<Url>,
	peers?: Array<string>
}
export type MetadataName = `metadata.${JsonExtension}`
export type UpdateMetadataName = `latest.${JsonExtension}`
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
			fr: "Une description fantaisiste"
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