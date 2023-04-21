<script lang="ts">
	import { currentSettingsTab } from "$lib/settingsTab.js";
	currentSettingsTab.set("main");
	import Theme from "$lib/theme.svelte";
</script>
<Theme/>