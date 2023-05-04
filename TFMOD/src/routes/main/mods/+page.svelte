<script lang="ts">
	import { backButton } from "$lib/js/subpage.js";
	backButton.set(true);
	const id = new URL(document.location).searchParams.get("id");
	import HideNavBar from "$lib/components/HideNavBar.svelte";
</script>
<main class="defaultMargin">
	<h1>Hello</h1>
	<p>World</p>
	<code>{id}</code>
</main>
<HideNavBar/>
