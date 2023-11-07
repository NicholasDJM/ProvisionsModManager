// vite.config.ts
import process from "node:process";
import { defineConfig } from "vite";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";
// eslint-disable-next-line no-duplicate-imports -- Not a duplicate.
import type { PluginOptions as WebExtensionOptions } from "vite-plugin-web-extension";
import zipPack from "vite-plugin-zip-pack";
const target = process.env.target || "firefox", //Values: "firefox", "chrome", "edge".
	startUrl = target === "firefox" ? [
		"about:debugging#/runtime/this-firefox",
		"about:addons"
	] : undefined,
	development = process.env.NODE_ENV || "development",
	version = readJsonFile("package.json").version,
	manifest = readJsonFile("manifest.json"),
	outputDirectory = "dist/" + target,
	//@ts-expect-error -- Expression is callable, types are misconfigured.
	zip = development === "production" ? zipPack({
		inDir: outputDirectory,
		outDir: "dist",
		outFileName: `${target}.v${version}.zip`
	}) : undefined,
	webExtensionOptions: WebExtensionOptions = {
		browser: target,
		webExtConfig: {
			startUrl,
			chromiumBinary: target === "edge" ? "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" : undefined
		},
		manifest: () => ({version, ...manifest})
	},
	debug = process.env.DEBUG;
if (development === "production" && debug && process.env.DEBUG_OVERRIDE === undefined) {
	// Type "set DEBUG_OVERRIDE=true" in CMD to enable debug in production.
	throw new Error("Debug is still turned on! Use \"set DEBUG=\" to clear.");
}

export default defineConfig({
	build: {
		outDir: outputDirectory,
		target: "esnext",
		sourcemap: "inline"
	},
	plugins: [
		webExtension(webExtensionOptions),
		zip
	],
	define: {
		"__BROWSER__": JSON.stringify(target),
		"__MODE__": JSON.stringify(development),
		"__DEBUG__": JSON.stringify(debug)
	}
});
