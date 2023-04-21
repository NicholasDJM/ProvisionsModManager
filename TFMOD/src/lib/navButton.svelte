<script lang="ts">
	import { createEventDispatcher } from "svelte";
	export let href: string,
		text: string,
		dataPage: string | undefined,
		size: string,
		id: string,
		highlight: string | null,
		showText = false;
	const dispatch = createEventDispatcher();
	function onclick() {
		dispatch("click");
	}
</script>

<a {href} class="link" style="--size:{size}" data-tooltip={text} {id} on:click={onclick}>
	<span class="icon" class:highlight="{highlight === dataPage}" data-page={dataPage}>
		{#if $$slots.highlight}
			{#if highlight === dataPage}
				<slot name="highlight"/>
			{:else}
				<slot/>
			{/if}
		{:else}
			<slot/>
		{/if}
		</span>
	<div class="buttonTextElement" class:showText>{text}</div>
</a>
<style>
	.icon {
		display:flex;
		align-items: center;
		background-color: rgb(0 0 0 / 0);
		border: 0;
		color: var(--textColorOptimal);
		transition: var(--transition);
		cursor: pointer;
		aspect-ratio: 1;
		border-radius: 50%;
		inline-size: calc(var(--size));
	}
	.highlight {
		background-color: white;
		color: black;
	}
	.link {
		--subSize: var(--size);

		border-radius: var(--subSize);
		display: grid;
		grid-template-columns: auto 1fr;
		color: white;
		text-decoration: none;
		&>span {
			display:flex;
			flex: 1;
			align-items: center;
			justify-content: center;
		}
	}
	.link:hover>span,.link:focus-visible>span {
		color: black;
		transition: var(--menuSpeed);
	}
	.link:hover,.link:focus-visible {
		background-color: white;
		color: black;
		box-shadow: 0 0 20px 1px white;
		transition: var(--menuSpeed);
	}
	.buttonTextElement {
		color: var(--textColorOptimal);
		line-height: var(--size);
		border-radius: var(--subSize);
		transition: var(--menuSpeed);
		opacity: 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.link:hover>.buttonTextElement,.link:focus-visible>.buttonTextElement {
		color: var(--textColorInverse);
		transition: var(--menuSpeed);
	}
	.showText {
		margin-inline-start: 10px;
		opacity: 1;
		transition: opacity var(--transitionReducedMotion), margin-inline-start var(--menuSpeed);
	}
</style>