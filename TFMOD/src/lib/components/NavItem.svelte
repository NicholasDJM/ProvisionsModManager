<script lang="ts">
	import { page } from "$app/stores";
	import type { ComponentType } from "svelte";
	export let href: string,
		icon: ComponentType,
		showText = false;
	$page.url.pathname;
	href;
	const contrast = false;
	//TODO: Hook contrast into theme system.
</script>
<a {href} class:current={$page.url.pathname === href} class:contrast>
	<div class="icon">
		<svelte:component this={icon} size="35px"/>
	</div>
	{#if showText}
		<div class="text">
			<slot/>
		</div>
	{/if}
</a>
<style lang="postcss">
	a {
		display: flex;
		gap: .25rem;
		text-decoration: none;
		color: white;
		align-items: center;
		border-radius: 2em;
		padding: .25rem;
		&:hover, &:focus-visible {
			background-color: white;
			color: black;
			box-shadow: 0 0 0.8rem 1px var(--light);
		}
		&.contrast {
			box-shadow:
				2px 2px var(--contrastBorder, red),
				-2px -2px var(--contrastBorder, red),
				-2px 2px var(--contrastBorder, red),
				2px -2px var(--contrastBorder, red);
		}
	}
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		aspect-ratio: 1;
	}
	.current {
		background-color: white;
		color: black;
	}
</style>