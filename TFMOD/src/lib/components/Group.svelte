<script lang="ts">
	import { onMount } from "svelte";
	let count = 0,
		height = "0px";
	onMount(() => {
		const element = document.querySelector("#group");
		if (element) {
			count = element?.children.length;
			height = element.getBoundingClientRect().height + "px";
			element.attributes.removeNamedItem("id");
		}
	});
</script>
<div class="group" id="group" style:--count={count} style:--height={height}>
	<slot/>
</div>
<style>
	.group {
		display:grid;
		grid-template-columns: repeat(var(--count, 1), auto);
	}
	:global(.group > *) {
		--radius: calc(var(--height) / 2);

		border-style: none;
		color: var(--textColor);
		background-color: var(--backgroundColor);
		transition: background-color var(--transition), color var(--transition);
		&:hover, &:focus-visible {
			background-color: var(--accentColorAlt);
			box-shadow: inset 0 0 .25rem .1rem var(--accentColor);
			color: var(--textColorOptimal);
		}
	}
	:global(.group > :active) {
		background-color: var(--light);
		color: var(--dark);
	}
	:global(.group > :first-child) {
		border-start-start-radius: var(--radius);
		border-end-start-radius: var(--radius);
	}
	:global(.group > :last-child) {
		border-start-end-radius: var(--radius);
		border-end-end-radius: var(--radius);
	}
</style>