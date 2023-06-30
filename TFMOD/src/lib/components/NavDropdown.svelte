<script lang="ts">
	import { onMount, createEventDispatcher } from "svelte";
	import { fade } from "svelte/transition";
	import Icon from "svelte-material-icons/HelpRhombusOutline.svelte";
	interface DropdownItem {
		id: string,
		text: string
	}
	const dispatch = createEventDispatcher();
	export let list: Array<DropdownItem>,
		parent: string,
		visible: boolean,
		dividers: Array<number> = [];
	function handleClick(event: Event) {
		const target = event.target as HTMLElement;
		dispatch("navDropdown", {id: target.dataset.id});
		visible = false;
	}
	function handleKeyboard(event: KeyboardEvent) {
		const target = event.target as HTMLElement;
		if (event.key === "Enter" || event.key === "Space") {
			dispatch("navDropdown", {id: target.dataset.id});
			visible = false;
		}
	}
	let left: string,
		top:string;
	function pos(parent: string) {
		const element = document.querySelector(parent),
			rect = element?.getBoundingClientRect() || {left: 0, top: 0, height: 0};
		// TODO: Critical: Get correct position of button and place menu accordingly;
		left = String(rect.left);
		top = String(rect.top + rect.height);
	}
	onMount(() => {
		pos(parent);
	});
</script>
{#if visible}
	<div id="navDropdown" transition:fade={{duration: 50}} style:--left={left} style:--top={top}>
		{#each list as item, index}
			<li class="item" on:click={handleClick} on:keydown={handleKeyboard} data-id={item.id}>
				{#if $$slots.icon}
					<div class="icon"><slot name="icon"></slot></div>
				{:else}
					<div class="spacer"><Icon size="16px"/></div>
				{/if}
				<div class="text" id={item.id}>{item.text}</div>
			</li>
			{#each dividers as divider}
				{#if divider === index}
					<div class="divider"></div>
				{/if}
			{/each}
		{/each}
	</div>
{/if}
<style lang="postcss">
	li {
		list-style-type: none;
	}
	#navDropdown {
		position: absolute;
		inset-inline-start: var(--left, 0);
		inset-block-start: var(--top, 0);
		display: grid;
		grid-template-rows: auto;
		border-radius: .25rem;
		overflow: hidden;
		border: 1px solid gray;
		transition: var(--transition);
	}
	.item {
		cursor: pointer;
		display: flex;
		flex-flow: row nowrap;
		gap: 0.25rem;
		background-color: var(--backgroundColor);
		color: var(--textColor);
		transition: var(--transition);
		padding-inline: 0.25rem;
		/* padding-block: 0.5rem; */
		&:hover, &:focus-visible {
			background-color: var(--accentColor);
			color: var(--textColorOptimal);

		}
	}
	.text {
		padding-inline-start: 0.1rem;
		padding-block: 0.5rem;
	}
	.icon {
		padding-block: 0.5rem;
		aspect-ratio: 1;
	}
	.spacer {
		padding-block: 0.5rem;
		border-inline-end: 1px solid gray;
		min-inline-size: 16px;
		display: flex;
		justify-content: center;
		padding-inline-end: 0.1rem;
	}
	.divider {
		border-block-end: 1px solid gray;
	}
</style>