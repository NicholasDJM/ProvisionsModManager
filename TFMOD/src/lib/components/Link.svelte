<script lang="ts">
	// Enables opening links in an external app.
	import { open } from "@tauri-apps/api/shell";
	export let href: string,
		// eslint-disable-next-line unicorn/no-useless-undefined -- Svelte complains if no default value is set.
		program: string | undefined = undefined;

	function link(event: Event) {
		event.preventDefault();
		open(href, program);
	}

	function linkKeyboard(event: KeyboardEvent) {
		if (event.key === "Space" || event.key === "Enter") {
			event.preventDefault();
			open(href, program);
		}
	}
	// TODO: Ask permission to open external links, with option to save to localStorage.
</script>
<!-- svelte-ignore a11y-missing-attribute -->
<a on:click={link} on:keydown={linkKeyboard} title={href} {href}>
	<slot/>
</a>