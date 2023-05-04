<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import { currentSettingsTab } from "$lib/js/settingsTab.js";
    currentSettingsTab.set("about");
</script>
<p>Created by Nicholas Miller.
    <Link href="https://github.com/NicholasDJM/ProvisionsModManager">Github</Link>
</p>
