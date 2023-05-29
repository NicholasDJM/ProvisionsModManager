<script lang="ts">
	import { fade } from "svelte/transition";
	// @ts-expect-error Can't do anything about missing types.
	import { LocalStorage } from "combo-storage";
	let countdown = 0; // In MS
	const decrement = 100,
		displayTime = LocalStorage.get("debug-windowSizeTime");
	setInterval(() => {
		if (countdown > 0) {
			countdown -= decrement;
		}
		if (countdown < 0) {
			countdown = 0;
		}
	}, decrement);
	let width = 0,
		height = 0,
		oldWidth = 0,
		oldHeight = 0;
	if (LocalStorage.get("debug-windowSize") === "false" ? false : true) {
		setInterval(() => {
			width = window.innerWidth;
			height = window.innerHeight;
			if (oldHeight !== height || oldWidth !== width) {
				oldHeight = height;
				oldWidth = width;
				countdown = displayTime;
			}
			// eslint-disable-next-line no-magic-numbers -- Update Time
		}, 100);
	}
</script>
<div class="screenSize {countdown > 0 ? "display:block" : "display:none"}">
	{#if countdown > 0}
		<div transition:fade>
			X:{width}px
			Y:{height}px
		</div>
	{/if}
</div>
<style lang="postcss">
	.screenSize {
		position: fixed;
		z-index: 1000;
		inline-size: 200px;
		block-size: 30px;
		inset-block-start: 0;
		inset-inline-end: 0;
		pointer-events: none;
		& > div {
			padding-inline: 10px;
			padding-block: 10px;
			inline-size: 100%;
			background-color: rgb(192 192 192 / 0.5);
			color: black;
			position: absolute;
			backdrop-filter: blur(4px);
			text-align: center;
		}
	}
</style>
