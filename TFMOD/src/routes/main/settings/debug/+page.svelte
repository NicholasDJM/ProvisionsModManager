<script lang="ts">
	import { currentSettingsTab } from "$lib/js/settingsTab.js";
	currentSettingsTab.set("debug");
	import { LocalStorage } from "combo-storage";
	let windowSize = LocalStorage.get("debug-windowSize") === "true" ? true : false,
		windowSizeTime = LocalStorage.get("debug-windowSizeTime") ?? 3000;
</script>
<label>
	Window Size
	<input type="checkbox" on:change={(event) => LocalStorage.set("debug-windowSize", event.target.checked)} checked={windowSize}>
</label>
<br/>
<label>
	Window Size Display Time (in milliseconds)
	<input type="number" on:change={(event) => LocalStorage.set("debug-windowSizeTime", event.target.value)} value={windowSizeTime}>
</label>
<a href="/test">Test</a>