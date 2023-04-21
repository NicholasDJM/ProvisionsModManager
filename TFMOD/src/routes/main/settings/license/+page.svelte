<script lang="ts">
	import { currentSettingsTab } from "$lib/settingsTab.js";
	currentSettingsTab.set("license");
	import L from "$lib/license.svelte";
</script>
<L title="Provisions Mod Manager"/>