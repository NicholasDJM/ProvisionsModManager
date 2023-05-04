<script lang="ts">
	import { currentSettingsTab } from "$lib/js/settingsTab.js";
	currentSettingsTab.set("update");
	import { updateAvailable } from "$lib/js/update.js";
</script>
<form>
	<label>
		Check for updates.
		<input type="checkbox">
	</label>
	<br/>
	<label>
		Update Branch
		<select>
			<option>Stable</option>
			<option>Beta</option>
		</select>
	</label>
</form>
<br/>
{#if $updateAvailable}
	<label>
		A new version is available!
		<button>Update</button>
	</label>
{:else}
	<label>
		No updates available.
		<button>Check for Update</button>
	</label>
{/if}
<br/>
<label>
	Last checked
	<span id="updateTime">Never</span>
</label>
