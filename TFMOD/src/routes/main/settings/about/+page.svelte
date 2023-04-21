<script lang="ts">
    import Link from "$lib/Link.svelte";
    import { currentSettingsTab } from "$lib/settingsTab.js";
    currentSettingsTab.set("about");
</script>
<p>Created by Nicholas Miller.
    <Link href="https://github.com">Github TODO: create repository</Link>
</p>