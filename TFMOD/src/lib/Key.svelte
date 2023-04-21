<svelte:head><meta class="key circle rounded"></svelte:head>
<script lang="ts">
	import { LocalStorage } from "combo-storage";
	import { onMount } from "svelte";
	import { keySize, keySizeW, keySizeH } from "./KeySize.js";
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
		error: boolean | undefined = false,
		number_: boolean | undefined,
		scroll: boolean | undefined,
		caps: boolean | undefined;
	let rounded = false,
		circle = false,
		green: string;
	$: green = caps || number_ || scroll ? "green" : "";
	const status = () => (typeof number_ == "boolean" || typeof scroll == "boolean" || typeof caps == "boolean" ? "status" : "key"),
		oneSeconds = 1000;
	setInterval(() => {
		switch (LocalStorage.get("editorKeyboardStyle")) {
			case "rounded": {
				rounded = true;
				circle = false;
				break;
			}
			case "circle": {
				rounded = false;
				circle = true;
				break;
			}
			default: {
				rounded = false;
				circle = false;
			}
		}
	}, oneSeconds);
	onMount(() => {
		for (const element of document.querySelectorAll("[data-keytooltip]")) {
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
</script>
<span style={`--font:${fontSize};--width:${width};--height:${height};--minWidth:${minWidth};--minHeight:${minHeight};--top:${top};--left:${left}`}>
	<button class={status() + " " + green} class:rounded class:circle data-keytooltip={keycode}>
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
		background-color: #F0ECE8;
		border: 3px outset #CECBC7;
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
		border-radius: 5px;
		&:active {
			border: 3px inset #F0ECE8;
			background-color: #CECBC7;
		}
	}
	.key.circle {
		border-radius: var(--width);
	}
	.key.rounded {
		border-radius: 10px;
	}
	.status {
		border: none;
		inline-size: 30px;
		border-radius: 50%;
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		background-color: var(--color, black);
		color: white;
	}
	.green {
		background-color: green;
	}
</style>