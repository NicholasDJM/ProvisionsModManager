<script lang="ts">
	import { i18n } from "$lib/js/i18n";
	import Drag from "svelte-material-icons/DragVerticalVariant.svelte";
	export let enabled = true;
	function change(event: KeyboardEvent) {
		console.log(event);
		if (event.key === "Enter") {
			enabled = !enabled;
		}
	}
	function follow(event: Event) {
		/* console.log(event)
		   TODO: Allow "dragging" the switch, then on mouseup get the position and decide which side to flip to. */
	}
	const iconSize = 25,
		size = iconSize + 10 + "px";
	let translations: Record<string, string>;
	$: translations = {
		on: $i18n.t("enabled"),
		off: $i18n.t("disabled")
	};
</script>
<label class="switch" on:keydown={change} style={`--width: ${size}; --height: ${size}`} title={enabled ? translations.on : translations.off}>
	<div class="switchBackground" data-checked={enabled}></div>
	<div class="check" data-checked={enabled}>
		<Drag size={iconSize + "px"}/>
	</div>
	<input type="checkbox" bind:checked={enabled}/>
</label>
<style lang="postcss">
	.switch {
		--border: 1px;
		/* stylelint-disable-next-line plugin/non-zero-length-expect-unit -- Number to be used in math. Larger number means smaller distance. */
		--hover: 4;
		--radius: 20px;

		position: relative;
		inline-size: calc(var(--width) * 2);
		block-size: var(--height);
		background-color: var(--backgroundColor);
		contain: paint;
		border-radius: var(--radius);
		margin-block: auto;
		margin-inline: auto;
		transition: background-color var(--transitionReducedMotion);
		&:focus-within {
			outline: 2px solid black;
		}
	}
	.switch .switchBackground {
		position: absolute;
		inline-size: calc(var(--width) / 2);
		block-size: var(--height);
		transition: var(--transitionReducedMotion);
		background-color: var(--color-green-3);
		&[data-checked="true"] {
			inline-size: calc(var(--width) + (var(--width) / 2));
		}
	}
	.switch input[type="checkbox"] {
		opacity:0;
		position: absolute;
		inline-size: var(--width);
		block-size: var(--height);
		transition: var(--transitionReducedMotion);
		inset-inline-start: 0;
		&:checked {
			inset-inline-start: var(--width);
		}
	}
	.switch .check {
		background-color: var(--color-gray-1);
		position: absolute;
		inline-size: calc(var(--width) + 1px);
		block-size: calc(var(--height) + 1px);
		transition: var(--transitionReducedMotion);
		inset-inline-start: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--color-grey-5);
		border-radius: var(--radius);
		border: 1px solid rgb(63 63 63 / 0.25);
		&[data-checked="true"] {
			inset-inline-start: var(--width);
		}

	}
	/* I would use nesting here, but either PostCSS or Svelte doesn't like it, and doesn't output it correctly. */
	.switch:hover, .switch:focus-visible {
		& .check {
			inset-inline-start: calc(var(--width) / var(--hover));
			&[data-checked="true"] {
				inset-inline-start: calc(var(--width) - (var(--width) / var(--hover)) );
			}
		}
	}
	/* stylelint-disable-next-line no-duplicate-selectors -- Combining this with previous selector actually breaks intended style */
	.switch:hover, .switch:focus-visible {
		& .switchBackground {
			inline-size: calc((var(--width) / 2) + (var(--width) / var(--hover)));
			&[data-checked="true"] {
				inline-size: calc((var(--width) + (var(--width) / 2)) - (var(--width) / var(--hover)));
			}
		}
	}
</style>
