<script lang="ts">
	import { onMount } from "svelte";
	let count = 0;
	onMount(() => {
		const element = document.querySelector("#group");
		if (element) {
			count = element?.children.length;
			element.attributes.removeNamedItem("id");
		}
	});
</script>
<div class="group" id="group" style:--count={count}>
	<slot/>
</div>
<style>
	.group {
		display:grid;
		grid-template-columns: repeat(var(--count, 1), auto);
	}
	:global(.group > *) {
		--radius: 1rem;

		border-style: none;
		color: var(--textColor);
		background-color: var(--backgroundColor);
		transition: var(--transition);
		&:hover, &:focus-visible {
			background-color: var(--accentColor);
			box-shadow: inset 0 0 .25rem .1rem rgb(255 255 255 / 0.5);
			outline: none;
			color: var(--textColorOptimal);
		}
	}
	:global(.group > *:active) {
		background-color: var(--light);
		color: var(--dark);
	}
	:global(.group > *:first-child) {
		border-start-start-radius: var(--radius);
		border-end-start-radius: var(--radius);
	}
	:global(.group > *:last-child) {
		border-start-end-radius: var(--radius);
		border-end-end-radius: var(--radius);
	}
</style>