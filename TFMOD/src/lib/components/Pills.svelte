<script lang="ts" context="module">
	export type PillEvent = CustomEvent<{name: string, state: boolean}>;
</script>
<script lang="ts">
	import { createEventDispatcher, SvelteComponent } from "svelte";
	interface Option {
		name: string,
		text: string,
		icon?: SvelteComponent
	}
	export let options: Array<Option>;
	const dispatch = createEventDispatcher<{pill: {name: string, state: boolean}}>();
	function fireEvent(event: Event) {
		// Start borrowed code
		/* 	https://stackoverflow.com/questions/57700163/what-typescript-type-is-a-change-event-in-angular
			License: CC BY-SA 4.0
		*/
		const input = event.target as HTMLInputElement;
		// End borrowed code.
		if (input.dataset.pill && input.checked) {
			dispatch("pill", {name: input.dataset.pill, state: input.checked});
		}
	}
	function reset() {
		for (const [, element] of document.querySelectorAll<HTMLInputElement>("[data-pill]").entries()) {
			if (element.checked && element.dataset.pill) dispatch("pill", {name: element.dataset.pill, state: false});
			element.checked = false;
		}
	}
</script>
<div class="pillbox">
	{#each options as option}
		<label class="pill" aria-label={option.text}>
			<span class="text">
			{#if option.icon}
				<svelte:component this={option.icon}/>
			{/if}{option.text}</span>
			<input type="checkbox" on:change={fireEvent} data-pill={option.name}/>
		</label>
	{/each}
	<button class="pill" on:click={reset}>
		Reset
	</button>
</div>
<style lang="postcss">
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
	.pill .text {
		display: flex;
		flex-flow: row nowrap;
		gap: var(--defaultMargin);
	}
</style>
