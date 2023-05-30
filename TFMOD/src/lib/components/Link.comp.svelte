<script lang="ts">
	// Enables opening links in an external app.
	import { openLink } from "$lib/components/LinkHandler.comp.svelte";
	export let href: string;

	function link(event: Event) {
		event.preventDefault();
		openLink(href);
	}
</script>
<a on:click={link} title={href} {href}>
	<slot/>
</a>