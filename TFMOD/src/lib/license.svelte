<script lang="ts">
	/* eslint-disable-next-line unicorn/prevent-abbreviations -- Variable is named src so I can use a shortcut in svelte. */
	export let src = "/licenses/TFMOD.txt",
		title: string;
</script>
<p>{title}</p>
<iframe {src} width="100%" height="800px" title="License" style="resize:vertical"></iframe>