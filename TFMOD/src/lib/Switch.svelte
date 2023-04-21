<script lang="ts">
	import Drag from "svelte-material-icons/DragVerticalVariant.svelte";
	export let enabled = true;
	function change(event) {
		console.log(event);
		if (event.key === "Enter") {
			enabled = !enabled;
		}
	}
	function follow(event) {
		/* console.log(event)
		   TODO: Allow "dragging" the switch, then on mouseup get the position and decide which side to flip to. */
	}
	const iconSize = 25,
		size = iconSize + 10 + "px";
</script>
<label class="switch" on:keydown={change} on:mousedown={follow} style={`--width: ${size}; --height: ${size}`}>
	<div class="switchBackground" data-checked={enabled}></div>
	<div class="check" data-checked={enabled}>
		<Drag size={iconSize + "px"}/>
	</div>
	<input type="checkbox" bind:checked={enabled}/>
</label>
<style>
	.switch {
		--border: 1px;

		position: relative;
		inline-size: calc(var(--width) * 2);
		block-size: var(--height);
		background-color: var(--color-raspberry-3);

		/* overflow: hidden; */
		contain: paint;

		/* inset-block: -1px; */
		border-radius: var(--width);
		margin-block: 5px;
		margin-inline: 5px;
		&:focus-within {
			outline: 2px solid black;
		}
	}
	.switchBackground {
		position: absolute;
		inline-size: calc(var(--width) / 2);
		block-size: var(--height);
		transition: var(--transition);
		background-color: var(--color-chartreuse-2);
		&[data-checked="true"] {
			inline-size: calc(var(--width) + (var(--width) / 2));
		}
	}
	input[type="checkbox"] {
		opacity:0;
		position: absolute;
		inline-size: var(--width);
		block-size: var(--height);
		transition: var(--transition);
		inset-inline-start: 0;
		&:checked {
			inset-inline-start: var(--width);
		}
	}
	.check {
		background-color: white;
		/* border: 0px solid var(--color-grey-2); */
		position: absolute;
		inline-size: calc(var(--width) + 1px);
		block-size: calc(var(--height) + 1px);
		transition: var(--transition);
		inset-inline-start: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--color-grey-5);
		border-radius: var(--width);
		&[data-checked="true"] {
			inset-inline-start: var(--width);
		}

	}
</style>