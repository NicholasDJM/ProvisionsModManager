<script lang="ts">
	import { page } from "$app/stores";
	import { title, currentPage } from "$lib/js/stores/store";
	import Link from "$lib/components/Link.svelte";
	import "@fontsource/roboto";
	import { i18n } from "$lib/js/i18n";
	title.set(`Error ${$page.status}`);
	currentPage.set(null);
	console.dir($page);
	function goBack() {
		window.history.go(-1);
	}
	function reload() {
		window.location.reload();
	}
	const notFoundError = 404;
	let translations: Record<string, string>;
	$: translations = {
		error: $i18n.t("error-title", {status: $page.status, message: $page.error?.message}),
		notFound: $i18n.t("not-found", {page: $page.url.pathname}),
		githubIssues: $i18n.t("github-issue"),
		reload: $i18n.t("error-reload"),
		back: $i18n.t("error-back")
	};
</script>
<div class="error">
	<h1 class="title">{translations.error}</h1>
	{#if $page.status === notFoundError}
		<p>{translations.notFound}</p>
	{/if}
	<p><Link icon={false} href="https://github.com/NicholasDJM/ProvisionsModManager/issues/new?title=Page+Error+{$page.status}&template=bug_report.md">{translations.githubIssues}</Link></p>
	<div class="actions">
		{#if $page.status === notFoundError}
			<button on:click={goBack}>{translations.back}</button>
		{/if}
		<button on:click={reload}>{translations.reload}</button>
	</div>
</div>
<style lang="postcss">
	@property --defaultMargin {
		syntax: "<length>";
		inherits: true;
	}
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
