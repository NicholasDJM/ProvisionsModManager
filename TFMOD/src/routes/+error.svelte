<script lang="ts">
	import { page } from "$app/stores";
	import { title } from "$lib/title.js";
	title.set(`Error ${$page.status}`);
	import { currentPage } from "$lib/page.js";
	currentPage.set(-1);
	console.dir($page);
	function goBack() {
		window.history.go(-1);
	}
	const notFoundError = 404;
</script>
<div class="error">
	<p>Error {$page.status + " " + $page.error?.message}</p>
	{#if $page.status === notFoundError}
		<p>{$page.url.pathname}</p>
		<button on:click={goBack}>Go Back</button>
	{/if}
</div>
<style>
	.error {
		margin-inline: var(--defaultMargin);
		margin-block: var(--defaultMargin);
		padding-inline: var(--defaultMargin);
		padding-block: var(--defaultMargin);
	}
</style>