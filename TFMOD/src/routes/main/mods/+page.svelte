<script lang="ts">
	import { backButton } from "$lib/subpage.js";
	backButton.set(true);
	const id = new URL(document.location).searchParams.get("id");
	import "$lib/defaultMargin.css";
</script>
<main class="defaultMargin">
	<h1>Hello</h1>
	<p>World</p>
	<code>{id}</code>
</main>