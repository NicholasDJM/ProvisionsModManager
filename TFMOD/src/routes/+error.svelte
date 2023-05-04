<script lang="ts">
	import { page } from "$app/stores";
	import { title } from "$lib/js/title.js";
	import Link from "$lib/components/Link.svelte";
	import "@fontsource/roboto";
	title.set(`Error ${$page.status}`);
	import { currentPage } from "$lib/js/page.js";
	currentPage.set(null);
	console.dir($page);
	function goBack() {
		window.history.go(-1);
	}
	function reload() {
		window.location.reload();
	}
	const notFoundError = 404;
</script>
<div class="error">
	<h1 class="title">Error {$page.status + " " + $page.error?.message}</h1>
	{#if $page.status === notFoundError}
		<p>Could not find a page for "{$page.url.pathname}".</p>
	{/if}
	<p>Report issues to the <Link href="https://github.com/NicholasDJM/ProvisionsModManager/issues/new?title=Page+Error+{$page.status}&template=bug_report.md">GitHub repo</Link></p>
	<div class="actions">
		{#if $page.status === notFoundError}
			<button on:click={goBack}>Go Back</button>
		{/if}
		<button on:click={reload}>Reload</button>
	</div>
</div>
<style>
	:root{
		font-family: Roboto, sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	:global(body) {
		inline-size: 100%;
	}
	.title {
		display: flex;
		justify-content: center;
	}
	.error {
		margin-inline: var(--defaultMargin);
		margin-block: var(--defaultMargin);
		padding-inline: var(--defaultMargin);
		padding-block: var(--defaultMargin);
	}
	p {
		text-align: center;
	}
	.actions {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		gap: 1rem;
	}
</style>
