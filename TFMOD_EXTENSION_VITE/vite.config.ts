// vite.config.ts
import { defineConfig } from "vite";
import webExtension from "vite-plugin-web-extension";
// eslint-disable-next-line no-duplicate-imports -- Not a duplicate.
import type { PluginOptions as WebExtensionOptions } from "vite-plugin-web-extension";
const target = process.env.target || "firefox", //Values: "firefox", "chrome".
	webExtensionOptions: WebExtensionOptions = {
		browser: target
	};
export default defineConfig({
	build: {
		outDir: target
	},
	plugins: [
		webExtension(webExtensionOptions)
	],
	define: {
		"__BROWSER__": JSON.stringify(target),
		"__MODE__": process.env.NODE_ENV || "development"
	}
});
//TODO: Configure output path based on browser target.
