<svelte:head><meta class="key circle rounded"></svelte:head>
<script lang="ts">
	import { getContext } from "svelte";
	// @ts-expect-error Can't do anything about missing types.
	import { LocalStorage } from "combo-storage";
	import { onMount } from "svelte";
	import { keySize, keySizeW, keySizeH } from "../js/keySize.js";
	import tippy from "tippy.js";
	import "tippy.js/dist/tippy.css";
	export let keycode: string,
		fontSize:string | undefined = $keySize || "16px",
		minWidth: string | undefined = $keySizeW || fontSize,
		minHeight: string | undefined = $keySizeH || fontSize,
		width: string | undefined = minWidth,
		height: string | undefined = minHeight,
		top: string | undefined = "8px",
		left: string | undefined = "8px",
		error = false,
		/* eslint-disable unicorn/no-null -- Intended */
		number_: boolean | null = null,
		scroll: boolean | null = null,
		caps: boolean | null = null;
		/* eslint-enable unicorn/no-null */
	let rounded = false,
		circle = false,
		green: boolean,
		flat = false;
	$: green = Boolean(caps) || Boolean(number_) || Boolean(scroll);
	const status = () => typeof caps == "boolean" || typeof number_ == "boolean" || typeof scroll == "boolean",
		oneSeconds = 1000,
		colorway = getContext("colorway");
	setInterval(() => {
		const style = LocalStorage.get("editorKeyboardStyle");
		rounded = style === "rounded";
		circle = style === "circle";
		flat = LocalStorage.get("editorKeyboardStyleBorder") === "flat";
	}, oneSeconds);
	onMount(() => {
		for (const element of document.querySelectorAll<HTMLSpanElement>("[data-keytooltip]")) {
			if (element.dataset.keytooltip === keycode) {
				tippy(element, {
					content: keycode,
					delay: [0, 0],
					placement: "bottom",
					theme: error ? "red" : undefined
				});
			}
		}
	});
	let color = "",
		downColor = "";
</script>
<span style={`--font:${fontSize};--width:${width};--height:${height};--minWidth:${minWidth};--minHeight:${minHeight};--top:${top};--left:${left};`} style:color style:downColor>
	<button class:status={status()} class:key={!status()} class:green class:rounded class:circle class:flat data-keytooltip={keycode}>
		<slot/>
	</button>
</span>
<style>
	span {
		display: inline-block;
		position: absolute;

		/* Next two lines are for positioning keys. They cannot follow text direction as that's not how keyboards work */
		/* stylelint-disable-next-line stylelint-logical-properties/enforce-logical-properties -- We want this to always be the left, to match real world keyboards. */
		left: var(--left);
		/* stylelint-disable-next-line stylelint-logical-properties/enforce-logical-properties -- We want this to always be the top, to match real world keyboards. */
		top: var(--top)
	}
	.key {
		font-family: monospace;
		background-color: var(--color, #F0ECE8);
		border: 0.2rem outset #CECBC7;
		block-size: var(--height);
		min-block-size: var(--minHeight);
		inline-size: var(--width);
		min-inline-size: var(--minWidth);
		font-size: var(--font);
		white-space: nowrap;
		line-height: var(--font);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 50ms;
		border-radius: 0.3rem;
		&:active {
			border: 0.2rem inset #F0ECE8;
			background-color: var(--downColor, #CECBC7);
		}
	}
	.key.flat {
		border: none;
		&:active {
			border: none;
		}
	}
	.key.circle {
		border-radius: var(--width);
	}
	.key.rounded {
		border-radius: 0.6rem;
	}
	.status {
		border: none;
		inline-size: 1.5em;
		border-radius: 50%;
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16pt;
		background-color: black;
		color: white;
	}
	.green {
		background-color: green;
	}
</style>
