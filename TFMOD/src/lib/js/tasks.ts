import { exists } from "@tauri-apps/api/fs";

type Installed = {
	tf2: boolean,
	sdk: boolean,
	tf2c: boolean,
	of: boolean,
	pf2: boolean
}


export async function getInstalled(): Promise<Installed> {
	const base = "C:\\Program Files (x86)\\Steam\\steamapps\\";
	return {
		sdk: await exists(base + "common\\Source SDK Base 2013 Multiplayer\\hl2.exe"),
		tf2: await exists(base + "common\\Team Fortress 2\\hl2.exe"),
		tf2c: await exists(base + "sourcemods\\tf2classic\\steam.inf"),
		of: await exists(base + "sourcemods\\open_fortress\\steam.inf"),
		pf2: await exists(base + "sourcemods\\pf2\\steam.inf")
	};
}