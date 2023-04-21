<script lang="ts">
	import { i18n } from "$lib/i18n.js";
	import { title } from "$lib/title.js";
	title.set($i18n.t("pageSourcesTitle"));
	import { currentPage } from "$lib/page.js";
	currentPage.set("sources");
	import "$lib/defaultMargin.css";
	import { onMount } from "svelte";
	import { a } from "$lib/externalLinks.js";
	onMount(() => {
		a();
	});
</script>
<main class="defaultMargin">
	<a href="https://tf2.gamebanana.com" data-external>GameBanana</a>
</main>