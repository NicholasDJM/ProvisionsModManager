// eslint-disable-next-line unicorn/prevent-abbreviations -- Makes sense in this context. Mod = Modification.
export interface ModInfo {
	name: string,
	author?: string,
	description?: Array<{
		lang: string,
		text: string
	}>,
	src: string,
	alt: string,
	srcset?: Array<{
		path: string,
		width: string,
		height: string
	}>,
	enabled: boolean,
	conflicts: number,
	outdated: boolean,
	position: number,
	md5: string
}