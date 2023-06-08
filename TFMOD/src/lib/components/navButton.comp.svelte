<script context="module" lang="ts">
	import { createEventDispatcher, onMount, onDestroy, getContext } from "svelte";
	import tippy from "tippy.js";
	import "tippy.js/dist/tippy.css";
</script>
<script lang="ts">
	export let href: string,
		text: string,
		dataPage: string | undefined,
		size = "45px",
		id: string,
		highlight: string | null,
		showText = false;
	const dispatch = createEventDispatcher();
	function onclick() {
		dispatch("click");
	}
	// Don't know what type tippy is.
	//@ts-expect-error Don't know what type tippy is.
	let tip,
		ready = false;
	$: {
		//@ts-expect-error Don't know what type tippy is.
		if (ready) tip.setContent(text);
		//@ts-expect-error Don't know what type tippy is.
		if (ready) showText ? tip.disable() : tip.enable();
	}
	onMount(() => {
		tip = tippy("#" + id, {
			content: text,
			placement: "right"
		});
		tip = tip[0];
		ready = true;
	});
	onDestroy(() => {
		if (ready) {
		//@ts-expect-error Don't know what type tippy is.
			tip.destroy();
		}
	});
</script>

<a {href} class="link" style="--size:{size}" class:highlight={highlight === dataPage} data-tooltip={text} {id} on:click={onclick}>
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
	<div class="buttonTextElement" class:showText class:highlight={highlight === dataPage}>{text}</div>
</a>
<style lang="postcss">
	@property --textColorOptimal {
		syntax: "<color>";
	}
	@property --light {
		syntax: "<color>";
	}
	@property --dark {
		syntax: "<color>";
	}
	@property --transition {
		syntax: "<time>";
		inherits: true;
		initial-value: "200ms";
	}
	@property --transitionReducedMotion {
		syntax: "<time>";
		inherits: true;
		initial-value: "200ms";
	}
	@property --size {
		syntax: "<length>";
	}
	@property --menuSpeed {
		syntax: "<time>";
	}
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
		background-color: var(--light);
		color: var(--dark);
	}
	.link {
		--subSize: var(--size);

		border-radius: var(--subSize);
		display: grid;
		grid-template-columns: auto 1fr;
		color: var(--light);
		text-decoration: none;
		&>span {
			display:flex;
			flex: 1;
			align-items: center;
			justify-content: center;
		}
	}
	.link:hover>span,.link:focus-visible>span {
		color: var(--dark);
		transition: var(--menuSpeed);
	}
	.link:hover,.link:focus-visible {
		background-color: var(--light);
		color: var(--dark);
		box-shadow: 0 0 0.8rem 1px var(--light);
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
	.buttonTextElement.highlight {
		color: var(--dark);
	}
	.link:hover>.buttonTextElement,.link:focus-visible>.buttonTextElement {
		color: var(--dark);
		transition: var(--menuSpeed);
	}
	.showText {
		margin-inline-start: 0.66rem;
		opacity: 1;
		transition: opacity var(--transitionReducedMotion), margin-inline-start var(--menuSpeed);
	}
</style>
