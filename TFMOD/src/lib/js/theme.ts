// @ts-expect-error Can't do anything about missing types.
import { LocalStorage } from "combo-storage";
const refreshSpeed = 100,
	data: Record<string, string> = {
		"theme": "theme-blue",
		"mode": "system",
		// "direction": "auto",
		"motion": "normalMotion",
		"scroll": "colored"
	};

function init(key:string) {
	if (LocalStorage.get(key) === null) {
		LocalStorage.set(key, data[key]);
	}
}
init("theme");
init("mode");
// init("direction");
init("motion");
init("scroll");

export const timer = setInterval(() => {
	for (let index = 0; index < Object.keys(data).length; index++) {
		const key = Object.keys(data)[index],
			value = LocalStorage.get(key);
		if (value !== null && data[key] !== value) {
			document.querySelector(":root")?.classList.replace(data[key], value);
			data[key] = value;
		}
	}
}, refreshSpeed);