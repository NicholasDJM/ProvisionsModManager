<script lang="ts">
	import { currentPage } from "$lib/js/page.js";
	currentPage.set("troubleshoot");
	import { title } from "$lib/js/title.js";
	import { i18n } from "$lib/js/i18n.js";
	$: title.set($i18n.t("troubleshoot:page-troubleshoot"));
	import SvelteMarkdown from "svelte-markdown";
	import brokenSound from "$lib/guides/en/CorruptedSound.md?raw";
	// TODO: replace svelte markdown with markdown-it, so we can dynamically load guides based on language.
</script>
<main class="defaultMargin">
	<SvelteMarkdown source={brokenSound}/>
</main>
