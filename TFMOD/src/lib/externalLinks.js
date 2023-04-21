import { open } from "@tauri-apps/api/shell";
export function a() {
	for (const element of document.querySelectorAll("[data-external]")) {
		element.addEventListener("click", (event) => {
			event.preventDefault();
			open(event.target?.href);
		});
	}
}