<script lang="ts">
	import { createEventDispatcher } from "svelte";
	interface Option {
		name: string,
		text: string
	}
	export let options: Array<Option>;
	const dispatch = createEventDispatcher();
	function fireEvent(event: Event) {
		// Start borrowed code
		/* 	https://stackoverflow.com/questions/57700163/what-typescript-type-is-a-change-event-in-angular
			License: CC BY-SA 4.0
		*/
		const input = event.target as HTMLInputElement;
		// End borrowed code.
		dispatch("pill", {name: input.dataset.pill, state: input.checked});
	}
	function reset() {
		for (const [, element] of document.querySelectorAll<HTMLInputElement>("[data-pill]").entries()) {
			if (element.checked) dispatch("pill", {name: element.dataset.pill, state: false});
			element.checked = false;
		}
	}
</script>
<div class="pillbox">
	{#each options as option}
		<label class="pill">
			{option.text}
			<input type="checkbox" on:change={fireEvent} data-pill={option.name}/>
		</label>
	{/each}
	<button class="pill" on:click={reset}>
		Reset
	</button>
</div>
<style>
	.pillbox {
		display: flex;
		flex-flow: row wrap;
		gap: .5em;
		& input[type="checkbox"] {
			opacity: 0;
			position: absolute;
		}
	}
	.pill {
		border: none;
		border-radius: 20px;
		padding-inline: var(--defaultMargin);
		padding-block: var(--defaultMargin);
		overflow: hidden;
		user-select: none;
		accent-color: var(--accentColorAlt);
		margin-block: 0;
		margin-inline: 0;
		&.pill:not(button) {
			outline: 1px solid var(--color-grey-3);
		}
	}
	.pill:hover, .pill:focus-within {
		box-shadow: inset 0 0 4px 1px var(--accentColor);
		transition: box-shadow var(--transitionReducedMotion);
	}
	.pill:active {
		box-shadow: inset 0 0 10px 1px white;
		transition: box-shadow var(--transitionReducedMotion);
	}
	.pill:has(input:checked) {
		background-color: var(--accentColor);
		color: var(--textColorOptimal);
		outline: 1px solid transparent;
	}
	.pill:has(input:checked):hover, .pill:has(input:checked):focus-within {
		box-shadow: inset 0 0 10px 1px white;
	}
</style>
