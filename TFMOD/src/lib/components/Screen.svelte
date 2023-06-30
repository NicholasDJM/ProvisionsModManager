<script lang="ts">
	const displayTime = (localStorage.getItem("debug-windowSizeTime") || 3000) + "ms";
	let width = 0,
		height = 0,
		oldWidth = 0,
		oldHeight = 0,
		fade = true;
	if (localStorage.getItem("debug-windowSize") ?? true) {
		setInterval(() => {
			width = window.innerWidth;
			height = window.innerHeight;
			if (oldHeight !== height || oldWidth !== width) {
				oldHeight = height;
				oldWidth = width;
				fade = false;
			} else {
				fade = true;
			}
		}, 100);
	}
</script>
<div class="screenSize" class:fade style:--delay={displayTime}>
	<div>
		X:{width}px
		Y:{height}px
	</div>
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
	@property --delay {
		syntax: "<time>";
		inherits: true;
	}
	.fade {
		animation-delay: var(--delay, 3000ms);
		animation-name: fade;
		animation-fill-mode: forwards;
		animation-duration: 1000ms;
	}
	@keyframes fade {
		to {
			opacity: 0;
		}
		from {
			opacity: 1;
		}
	}
</style>