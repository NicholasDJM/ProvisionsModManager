<script lang="ts">
	import { currentSettingsTab } from "$lib/settingsTab.js";
	currentSettingsTab.set("update");
	import { updateAvailable } from "$lib/update.js";
</script>
<form>
	<label class="group">
		Check for updates.
		<input type="checkbox">
	</label>
	<br/>
	<label class="group">
		Update Branch
		<select>
			<option>Stable</option>
			<option>Beta</option>
		</select>
	</label>
</form>
{#if $updateAvailable}
	<div class="group">
		<button>Update</button>
		<p>A new version is available!</p>
	</div>
{:else}
	<div class="group">
		<p>No updates available.</p>
		<div></div>
	</div>
{/if}
<div class="group">
	<p>Last checked: <span id="updateTime">Never</span></p>
	<div></div>
</div>
<style>
	.group {
		display: grid;
		grid-template-columns: 1fr auto;
	}
</style>