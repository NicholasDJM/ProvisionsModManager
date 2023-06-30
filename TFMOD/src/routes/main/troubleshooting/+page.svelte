<script lang="ts">
	import { currentPage } from "$lib/js/stores/store";
	currentPage.set("troubleshoot");
	import { title } from "$lib/js/stores/store";
	import { i18n } from "$lib/js/stores/store";
	$: title.set($i18n.t("troubleshoot:page-troubleshoot"));
	import SvelteMarkdown from "svelte-markdown";
	import brokenSound from "$lib/guides/en/CorruptedSound.md?raw";
	// TODO: replace svelte markdown with markdown-it, so we can dynamically load guides based on language.
</script>
<div class="defaultMargin">
	<SvelteMarkdown source={brokenSound}/>
</div>
