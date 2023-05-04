<script lang="ts">
	import type { event } from "@tauri-apps/api";

	// Enables opening links in an external app.
	import { open } from "@tauri-apps/api/shell";
	export let href: string,
		// eslint-disable-next-line unicorn/no-useless-undefined -- Svelte complains if no default value is set.
		program: string | undefined = undefined;

	function link(event: Event) {
		console.log(event.type);
		event.preventDefault();
		open(href, program);
	}
</script>
<a on:click={link} title={href} data-external={true}><slot/></a>