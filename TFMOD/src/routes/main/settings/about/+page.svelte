<script lang="ts">
    import Link from "$lib/components/Link.comp.svelte";
    import { currentSettingsTab } from "$lib/js/settingsTab.js";
	import { i18n } from "$lib/js/i18n";
    currentSettingsTab.set("about");
	let translations: Record<string, string>;
	$: translations = {
		author: $i18n.t("app-author", {author: "Nicholas Miller"}),
		license: $i18n.t("app-license")
	};
</script>
<p>{translations.author}
    <Link href="https://github.com/NicholasDJM/ProvisionsModManager">Github</Link>
</p>
<p>{translations.license}</p>
