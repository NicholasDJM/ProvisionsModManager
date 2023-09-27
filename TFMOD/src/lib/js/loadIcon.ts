import { readTextFile, readBinaryFile, exists } from "@tauri-apps/api/fs";

const base = "C:/Program Files (x86)/Steam/steamapps",
	paths = {
		tf2c: base + "/sourcemods/tf2classic",
		pf2: base + "/sourcemods/pf2",
		of: base + "/sourcemods/open_fortress",
		tf2v: base + "/sourcemods/tf2vintage"
	};

// TODO: Clean this code up.

export async function load(game = "tf2c"): Promise<string | false> {
	switch (game) {
		case "tf2": {
			return "/images/copyrighted_images/tf2_icon.ico";
		}
		case "tf2c":
		case "pf2":
		case "of":
		case "tf2v": {
			break;
		}
		default: {
			return false;
		}
	}
	// eslint-disable-next-line security/detect-object-injection -- Not possible. Guard clause above (switch statement) prevents that.
	if (!(await exists(paths[game] + "/gameinfo.txt"))) {
		return false;
	}
	// eslint-disable-next-line security/detect-object-injection -- Not possible. Guard clause above (switch statement) prevents that.
	const info = await readTextFile(paths[game] + "/gameinfo.txt");
	if (info && info.split("icon").length > 1) {
		const iconPath = info.split("icon")[1].replace(/\s/g, "").replace("icon", "").split("\"")[1];
		// WARNING: IconPath is not sanitized.
		// eslint-disable-next-line security/detect-object-injection -- Not possible. Guard clause above (switch statement) prevents that.
		if (!(await exists(paths[game] + "/" + iconPath + ".ico"))) {
			return false;
		}
		try {
			// eslint-disable-next-line security/detect-object-injection -- Not possible. Guard clause above (switch statement) prevents that.
			const iconData = await readBinaryFile(paths[game] + "/" + iconPath + ".ico"),
				//https://stackoverflow.com/a/66046176
				base64 = await new Promise<string>(r => {
					const reader = new FileReader();
					//@ts-ignore -- Not sure how to satisfy typescript with the following error.
					reader.addEventListener("load", () => r(reader.result));
					reader.readAsDataURL(new Blob([iconData]));
				}),
				final = base64.replace("application/octet-stream", "image/ico");
			return final;
		} catch (error) {
			console.error(error);
		}
	}
	return false;
}