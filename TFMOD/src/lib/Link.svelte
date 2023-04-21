<script lang="ts">
	// Enables opening links in an external app.
	import { open } from "@tauri-apps/api/shell";
	export let href: string,
		program = "";
	function link(event) {
		event.preventDefault();
		open(this.href, program ? program : undefined);
	}
</script>
<a {href} on:click={link}><slot/></a>