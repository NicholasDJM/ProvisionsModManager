interface Maps {
	game: Array<"tf2" | "tf2c" | "of" | "pf2" | "tfs2">,
	type: string
}
const mapNames: Record<string, Maps> = {
	"ctf_2fort": {
		"game": ["tf2"],
		"type": "ctf"
	},
	"pl_badwater": {
		"game": ["tf2", "tf2c"],
		"type": "pl"
	},
	"vip_badwater": {
		"game": ["tf2c"],
		"type": "vip"
	}
}

let byGames;
byGames.tf2 = [];
for (const [index, element] of Object.entries(mapNames)) {
	if (element.game.includes("tf2"))
		byGames.tf2[byGames.tf2.length] = element;

}

export const maps = {}