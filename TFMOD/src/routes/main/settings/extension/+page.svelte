<script lang="ts">
	import { currentSettingsTab } from "$lib/js/stores/store";
	currentSettingsTab.set("extension");
	import Link from "$lib/components/Link.svelte";
</script>
<Link href="https://github.com/NicholasDJM/ProvisionsModManager/releases" icon={false}><img alt="Get the Add-On" src="/images/badges/firefox.addon.webp" loading="lazy"/></Link>
<br/>
<Link href="https://github.com/NicholasDJM/ProvisionsModManager/releases" icon={false}><img alt="Available on the Chrome Web Store" src="/images/badges/chrome.addon.webp" loading="lazy"/></Link>
<br/>
<Link href="https://github.com/NicholasDJM/ProvisionsModManager/releases" icon={false}><img alt="Get it from Opera add-ons" src="/images/badges/opera.addon.en.png" loading="lazy"/></Link>
