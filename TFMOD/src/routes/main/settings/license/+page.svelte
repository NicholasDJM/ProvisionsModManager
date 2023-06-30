<script lang="ts">
	import { currentSettingsTab } from "$lib/js/stores/store";
	currentSettingsTab.set("license");
	import L from "$lib/components/License.svelte";
</script>
<L title="Provisions Mod Manager"/>
