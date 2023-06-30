<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import { currentSettingsTab } from "$lib/js/stores/store";
	import { i18n } from "$lib/js/stores/store";
    currentSettingsTab.set("about");
	let translations: Record<string, string>;
	$: translations = {
		about: $i18n.t("app-about", {author: "Nicholas Miller", version: "0.0.1"}),
		contrib: $i18n.t("app-contributors"),
		contribAlt: $i18n.t("app-contributors-alt")
	};
</script>
<p>{translations.about}
    <Link href="https://github.com/NicholasDJM/ProvisionsModManager" icon={false}>Github</Link>
</p>
<h1>{translations.contrib}</h1>
<img src="https://contrib.rocks/image?repo=NicholasDJM/ProvisisonsModManager" alt={translations.contribAlt}>
