<script lang="ts">
	// Enables opening links in an external app.
	import { openLink, setAddress, previewShow, previewHide } from "$lib/components/LinkHandler.comp.svelte";
	export let href: string;

	function link(event: Event) {
		event.preventDefault();
		openLink(href);
	}
</script>
<a on:click={link} {href} on:mouseenter={() => {setAddress(href); previewShow()}} on:mouseleave={previewHide}>
	<slot/>
</a>