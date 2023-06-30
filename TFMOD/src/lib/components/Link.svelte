<script lang="ts">
	// Enables opening links in an external app.
	import { openLink, setAddress, previewShow, previewHide } from "$lib/components/LinkHandler.svelte";
	export let href: string,
		alt = "",
		icon = true;
	// eslint-disable-next-line unicorn/prevent-abbreviations -- Naming it like this gives us a shortcut.
	const src = `https://duckduckgo.com/ip2/${href.split("://")[1].split("/")[0]}.ico`,
		httpString = "http";
	if (href.slice(0, httpString.length) !== httpString) icon = false;
	let github = false;
	if (src === "https://duckduckgo.com/ip2/github.com.ico") github = true;
	function link(event: Event) {
		event.preventDefault();
		openLink(href);
	}
	function mouseEnter() {
		setAddress(href);
		previewShow();
	}
</script>
<a on:click={link} on:touchend={link} {href} on:mouseenter={mouseEnter} on:mouseleave={previewHide} on:focusin={mouseEnter} on:focusout={previewHide}>
	{#if icon}
		<img {src} {alt} width=16 height=16 loading="lazy" class:github>
	{/if}
	<slot/>
</a>
<style lang="postcss">
	/* @property --textColor {
		syntax: "<color>";
		inherits: true;
	}
	a:hover, a:focus-visible {
		img {
			background-color: var(--textColor);
		}
	} */
	.github {
		/* stylelint-disable-next-line rem-over-px/rem-over-px -- Must be exact */
		clip-path: circle(8px at center);
		background-color: white;
	}
</style>