<script lang="ts">
	import { currentSettingsTab } from "$lib/js/stores/store";
	currentSettingsTab.set("extension");
	import Link from "$lib/components/Link.svelte";
</script>
<Link href="https://github.com/NicholasDJM/ProvisionsModManager/releases" icon={false}><img alt="Get the Add-On" src="/images/firefox.addon.webp" loading="lazy"/></Link>
<br/>
<Link href="https://github.com/NicholasDJM/ProvisionsModManager/releases" icon={false}><img alt="Available on the Chrome Web Store" src="/images/chrome.addon.webp" loading="lazy"/></Link>
