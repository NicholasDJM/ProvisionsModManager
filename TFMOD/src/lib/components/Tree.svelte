<script lang="ts">
	export let tree: any;
</script>
{#each tree as entry, index}
	{#if typeof entry === "string"}
		<span>{entry}</span>
	{:else if typeof entry === "object"}
		<details>
			<summary>
				{Object.keys(entry)[index]}
			</summary>
			<svelte:self tree=entry/>
		</details>
	{/if}
{/each}