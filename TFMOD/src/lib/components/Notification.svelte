<script context="module" lang="ts">
	import { setContext, getContext, onMount, onDestroy } from "svelte";
	let sendTimer: ReturnType<typeof setInterval>;
	const delay = 200;
	onMount(() => {
		sendTimer = setInterval(() => {
			const notification = Array.isArray(localStorage.getItem("notification")) ? localStorage.getItem("notification") : [];
			setContext("notification", notification);
		}, delay);
	});
	onDestroy(() => {
		clearInterval(sendTimer);
	});
</script>
<script lang="ts">
	let readTimer: ReturnType<typeof setInterval>,
		notifications: Array<string>;
	onMount(() => {
		readTimer = setInterval(() => {
			notifications = getContext("notification");
		}, delay);
	});
	onDestroy(() => {
		clearInterval(readTimer);
	});
</script>
{#each notifications as notification}
	<div class="notification primary"></div>
{/each}