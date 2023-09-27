import { Command } from "commander";
import { globbySync as globby } from "globby";
import path from "node:path";
import process from "node:process";
import { open } from "node:fs/promises";
import { green, red } from "kleur/colors";
const program = new Command(),
	version = "1";
program
	.name("cfg-script")
	.description("Compiles or decompiles scripts embedded in CFG files for Source Engine games.")
	.version(version)
	.argument("-i", "Enable install functions.")
	.helpOption(false);

function latest(version) {
	switch (version) {
		default: {
			return ["Script is using API version 1. This is the latest version.", true];
		}
	}
}

async function compile(source, destination = "", decompile = false) {
	const paths = globby(source, {
		gitignore: true
	});
	if (!paths.length) {
		console.log(red("No files found."));
		process.exit(1);
	}
	for (const script of paths) {
		console.log("Found", green(script))
		const file = await open(script);
		let index = 0;
		try {
			let hasVersionTag = false;
			for await (const line of file.readLines()) {
				if (index === 0) {
					const error = () => red(`Cannot find version tag. Remember to add "//@version(${version})" to the top of your script.`);
					let data = line.replace(/\s/g, "").split("//@version(");
					if (data.length === 1) {
						throw new Error(error());
					}
					data = data[1].split(")");
					if (data.length === 1) {
						throw new Error(error());
					}
					data = data[1];
					console.log(green(latest(data)[0]));
					hasVersionTag = true;
				} else if (hasVersionTag) {
					// Parse other lines.
				}
				index++;
			}
		} catch (error) {
			console.error(error);
		}
	}
}

program.command("compile <glob> [destination]")
	.description("Compiles .CFG files.")
	.action((source, destination) => {compile(source, destination)});
program.command("decompile <glob> [destination]")
	.description("Decompiles .CFG files.")
	.action((source, destination) => {compile(source, destination, true)});
// Disabling this next part because right now, there is only one version.
/*program.command("upgrade <glob> [destination]")
	.description("Upgrade a script between one version to the next")
	.action((source, destination) => {})
/**/

program.parse();