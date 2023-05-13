import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { stylifyVite } from "@stylify/unplugin";
import { MagicRegExpTransformPlugin } from "magic-regexp/transform";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars -- Really cool, but crashes build process */
import progress from "vite-plugin-progress";

/* Decided against using stylify. It doesn't support stylelint, and actually deletes work.
	When building the application, stylify is called twice, first, it's successfully mangles source files, and generates a matching css file.
	On its second call, it finds no applicable styles in the source files (due to the selectors being already mangled.),
		and deletes everything in the already generated css file.

	Also, it becomes un-maintainable after a point when all the rules are on a single line (Also looks ugly).
*/
const stylifyPlugin = stylifyVite({
	bundles: [
		{
			outputFile: "./src/lib/stylify.css",
			files: [
				"./src/**/*.svelte"
			]
		}
	]
});

/* global process */

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		MagicRegExpTransformPlugin.vite(),
		sveltekit()
	],

	/*	 Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
	*/// prevent vite from obscuring rust errors
	clearScreen: false,
	// tauri expects a fixed port, fail if that port is not available
	server: {
		port: 1420,
		strictPort: true
	},
	/*	 to make use of `TAURI_DEBUG` and other env variables
	*/// https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
	envPrefix: ["VITE_", "TAURI_"],
	build: {
		// Tauri supports es2021
		target: process.env.TAURI_PLATFORM === "windows" ? "chrome105" : "safari13",
		// don't minify for debug builds
		minify: process.env.TAURI_DEBUG ? false : "esbuild",
		// produce sourcemaps for debug builds
		sourcemap: Boolean(process.env.TAURI_DEBUG)
	}
});
