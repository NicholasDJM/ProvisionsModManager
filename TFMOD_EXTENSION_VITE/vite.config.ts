// vite.config.ts
import process from "node:process";
import { defineConfig } from "vite";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";
// eslint-disable-next-line no-duplicate-imports -- Not a duplicate.
import type { PluginOptions as WebExtensionOptions } from "vite-plugin-web-extension";
import zipPack from "vite-plugin-zip-pack";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import PreprocessorDirectives from "unplugin-preprocessor-directives/vite";
import AutoAlias from "vite-plugin-auto-alias";
const target = process.env.target || "firefox", //Values: "firefox", "chrome", "edge".
	startUrl = target === "firefox" ? [
		"about:debugging#/runtime/this-firefox",
		"about:addons"
	] : undefined, // Cannot set start page for Chrome to chrome://extensions, it only opens the new tab page. Ditto for Edge.
	development = process.env.NODE_ENV || "development",
	version = readJsonFile("package.json").version,
	manifest = readJsonFile("manifest.json"),
	background = process.env.DISABLE_BACKGROUND ? "" : readJsonFile("manifest_background.json"),
	// Set disable_background to not include background/service worker scripts. Useful in Firefox as you can't debug the options page via DevTools as the background page is shown instead.
	outputDirectory = "dist/" + target,
	geckoId: string = readJsonFile("manifest.json")["{{firefox}}.browser_specific_settings"].gecko.id,
	//@ts-expect-error -- Expression is callable, types are misconfigured.
	zip = development === "production" ? zipPack({
		inDir: outputDirectory,
		outDir: "dist",
		outFileName: target === "firefox" ? geckoId + ".xpi" : `${target}.v${version}.zip`
	}) : undefined,
	binaries: Record<string, string | undefined> = {
		edge: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
		opera: "C:\\Program Files\\Opera\\opera.exe",
		chrome: undefined
	},
	webExtensionOptions: WebExtensionOptions = {
		browser: target,
		webExtConfig: {
			startUrl,
			// eslint-disable-next-line security/detect-object-injection -- Not production facing code.
			chromiumBinary: binaries[target]
		},
		manifest: () => ({version, ...manifest, ...background})
	},
	debug = process.env.DEBUG,
	minifyOptions = {},
	htmlMinify = development === "production" ? ViteMinifyPlugin(minifyOptions) : undefined;
if (development === "production" && debug && process.env.DEBUG_OVERRIDE === undefined) {
	// Type "set DEBUG_OVERRIDE=true" in CMD to enable debug in production.
	throw new Error("Debug is still turned on! Use \"set DEBUG=\" to clear.");
}

export default defineConfig({
	css: {
		devSourcemap: true
	},
	build: {
		outDir: outputDirectory,
		target: "esnext",
		sourcemap: true,
		cssMinify: "lightningcss"
	},
	plugins: [
		AutoAlias(),
		webExtension(webExtensionOptions),
		PreprocessorDirectives(),
		htmlMinify,
		zip
	],
	define: {
		"__BROWSER__": JSON.stringify(target),
		"__MODE__": JSON.stringify(development),
		"__DEBUG__": JSON.stringify(debug)
	}
});
