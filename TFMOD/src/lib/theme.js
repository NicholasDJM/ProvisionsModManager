import { LocalStorage } from "combo-storage";
/** @type string */
let theme,
	/** @type string */
	mode,
	/** @type string */
	direction,
	/** @type string */
	motion;
const refreshSpeed = 50;
setInterval(() => {
	if (theme !== LocalStorage.get("theme")) {
		document.querySelector(":root").classList.remove(theme);
		theme = LocalStorage.get("theme");
		document.querySelector(":root").classList.add(theme);
	}
	if (mode !== LocalStorage.get("mode")) {
		document.querySelector(":root").classList.remove(mode);
		mode = LocalStorage.get("mode");
		document.querySelector(":root").classList.add(mode);
	}
	if (direction !== LocalStorage.get("direction")) {
		document.querySelector(":root").classList.remove(direction);
		direction = LocalStorage.get("direction");
		document.querySelector(":root").classList.add(direction);
	}
	if (motion !== LocalStorage.get("motion")) {
		document.querySelector(":root").classList.remove(motion);
		motion = LocalStorage.get("motion");
		document.querySelector(":root").classList.add(motion);
	}
}, refreshSpeed);