<script lang="ts">
	import Doc, {type Documentation} from "$lib/components/CfgDoc.svelte";
	import {onMount} from "svelte";
	const docs: Record<string,Documentation> = {
		docVersion: {
			name: "version",
			arguments: [
				{
					name: "version",
					type: "number",
					required: true,
					description: "Which version of compiler to use."
				}
			],
			description: "Required to be at the top of every script."
		},
		docFunction: {
			name: "function",
			arguments: [
				{
					name: "name",
					type: "string",
					required: true,
					description: "Name of the function"
				}
			],
			description: "Create a new function. Name can be put outside of parenthesis, in front of arguments, for better ergonomics. Accepts any number of arguments.",
			block: true,
			example: `@function add(one, two) {
	@return $one + $two
}`
		},
		docReturn: {
			name: "return",
			arguments: [
				{
					name: "value",
					type: "string | number",
					required: true,
					description: "Value to return."
				}
			],
			description: "Returns a value to the callee.",
			example: `@function add(one, two) {
	@return $one + $two
}`
		},
		docIf: {
			name: "if",
			arguments: [
				{
					name: "value",
					type: "string | number",
					required: true,
					description: "A truthy value, not zero, not an empty string."
				}
			],
			description: "Execute the code block if the value is truthy.",
			block: true,
			example: `$delay = 200
$debug = true
@if $debug {
	echo "Delay is set to @eval($delay)."
}`
		},
		docElse: {
			name: "else",
			arguments: [],
			description: [
				"If the last function did not execute, execute the block.",
				"@else can be used with @if, @match, @resolution, and @widescreen."
			],
			block: true,
			example: `$highFov = true
@if $highFov {
	fov 120
}
@else {
	fov 90
}`
		},
		docMatch: {
			name: "match",
			arguments: [
				{
					name: "value",
					description: "Use a variable or function, not a literal value.",
					required: true,
					type: "string | number"
				}
			],
			description: [
				"Use with @case to match the value.",
				"Use @else if no matches are found."
			],
			example: `$color = red
@match $color
@case red {
	cl_crosshair_red 255;
	cl_crosshair_green 0;
	cl_crosshair_blue 0;
}
@case green {
	cl_crosshair_red 0;
	cl_crosshair_green 255;
	cl_crosshair_blue 0;
}
@case blue {
	cl_crosshair_red 0;
	cl_crosshair_green 0;
	cl_crosshair_blue 255;
}
@else {
	cl_crosshair_red 255;
	cl_crosshair_green 255;
	cl_crosshair_blue 255;
}`
		},
		docCase: {
			name: "case",
			arguments: [
				{
					name: "value",
					description: "Value to match against.",
					required: true,
					type: "string | number"
				}
			],
			description: [
				"Use with @match to setup the comparison.",
				"Use @else if no matches are found."
			],
			block: true,
			example: `$color = red
@match $color
@case red {
	cl_crosshair_red 255;
	cl_crosshair_green 0;
	cl_crosshair_blue 0;
}
@case green {
	cl_crosshair_red 0;
	cl_crosshair_green 255;
	cl_crosshair_blue 0;
}
@case blue {
	cl_crosshair_red 0;
	cl_crosshair_green 0;
	cl_crosshair_blue 255;
}
@else {
	cl_crosshair_red 255;
	cl_crosshair_green 255;
	cl_crosshair_blue 255;
}`
		},
		docFor: {
			name: "for",
			arguments: [
				{
					name: "start",
					type: "number",
					required: true,
					description: "Where to start the loop."
				},
				{
					name: "step",
					type: "number",
					required: true,
					description: "How much to increment or decrement the index."
				},
				{
					name: "end",
					type: "number",
					required: true,
					description: "When we reach this point or beyond, stop the loop."
				}
			],
			description: [
				"Automatically creates and updates a local variable called $index."
			],
			block: true,
			example: `$countdown = 10
@for 1, 1, $countdown {
	echo "@eval($index)" // Creates ten echo commands with decreasing count.
}`
		},
		docBreak: {
			name: "break",
			arguments: [],
			description: [
				"Stops a loop.",
			]
		},
		docContinue: {
			name: "continue",
			arguments: [],
			description: [
				"Starts the next iteration of a loop.",
			]
		},
		docResolution: {
			name: "resolution",
			arguments: [],
			description: [
				"Use with @case to match screen sizes.",
				"Expect strings to match against to follow either <number>:<number> for screen ratio, or <number>x<number> for screen resolution.",
				"Multiple @case functions can be executed.",
				"Use @else if nothing matches."
			],
			example: `@resolution {
	// If screen res is 1920 by 1080:
	@case 16:9 {
		// This block will be executed.
	}
	@case 1920x1080 {
		// This block will also be executed.
	}
	@else {
		// This will not be executed.
	}
}`
		},
		docWideScreen: {
			name: "widescreen",
			arguments: [],
			description: [
				"Acts like an @if function. Only executes block if screen resolution is considered wide screen.",
				"Use @else if screen is not wide screen."
			]
		},
		docMod: {
			name: "mod",
			arguments: [],
			description: [
				"Acts like a @match function. Allows executing blocks if a mod is installed.",
				"Use with @case to match mod IDs.",
				"Multiple @case functions can be executed."
			]
		},
		docInstall: {
			name: "install",
			arguments: [
				{
					name: "source",
					description: "Filepath in mod archive.",
					required: true,
					type: "string"
				},
				{
					name: "destination",
					description: "Filepath in mod archive.",
					required: true,
					type: "string"
				}
			],
			description: [
				"Copy files from a location in your mod archive, to another location in the same archive.",
				"Can only overwrite files, or create a new files.",
				"Files can be renamed, change the destination filename to a different name."
			],
			install: true,
			example: `@widescreen {
	@install /addons/widescreen/hudmatchstatus.res, /resources/ui/hudmatchstatus.res
}`
		}
	};
	let aside: {id: string, text: string, block: boolean}[] = [];
	// let selected = "";
	onMount(()=>{
		for (const element of document.querySelectorAll<HTMLElement>("article[data-name]")) {
			const data = {
				id: element.dataset.name,
				text: element.dataset.text,
				block: element.dataset.block
			}
			aside.push(data)
			aside = aside;
		};
		setTimeout(()=>{
			// selected = window.location.hash;
			document.querySelector(`article a[href='${window.location.hash}']`)?.scrollIntoView()
		}, 100)
	});
	function view(event) {
		const target = event.currentTarget as HTMLAnchorElement;
		const link = document.querySelector(`[data-name='${target.href.split("#")[1]}`)?.querySelector("a") as HTMLAnchorElement;
		// selected = window.location.hash;
		link.scrollIntoView({"behavior": "smooth"});
	}
</script>
<div class="container">
	<aside class="sidebar">
		{#each Object.values(aside) as link}
			<!-- <a href="#{link.id}" data-toc="true" on:click={view} class:selected={selected === "#"+link.id}>@{link.id}</a> -->
			<a href="#{link.id}" data-toc="true" on:click={view}>@{link.id}</a>
		{/each}
	</aside>
	<main id="docs">
		{#each Object.values(docs) as data}
			<Doc {data}/>
		{/each}
	</main>
</div>
<style>
	@media (max-width: 120ch) {
		.container {
			grid-template-columns: 1fr !important;
		}
		/* stylelint-disable-next-line a11y/no-display-none -- We want this. */
		.sidebar {
			display: none !important;
		}
		:global(.hover) {
			position: static !important;
		}
	}
	.sidebar {
		position: sticky;
		inset-inline-start: 0;
		inset-block-start: 2rem;
		block-size: max-content;
		display: flex;
		flex-flow: column nowrap;
		margin-inline: 1rem;
		margin-block: 1rem;
		font-size: 1.5rem;
		gap: .5rem;
		max-inline-size: max-content;
	}
	.sidebar a:any-link {
		color: white;
		text-decoration: none;
	}
	.sidebar .selected:any-link, .sidebar :any-link:focus-visible, .sidebar :any-link:hover {
		color: skyblue;
	}
	.sidebar :any-link:focus-visible {
		outline: 1px solid white;
	}
	:global(body) {
		background-color: rgb(50 50 50 / 1);
		color: white;
		font-family:sans-serif;
		margin-inline: 8px !important;
	}
	main {
		max-inline-size: 80ch;
		margin-inline: auto;
	}
	.container {
		display: grid;
		grid-template-columns: auto 1fr;
	}
</style>