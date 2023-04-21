<script lang="ts">
	import { i18n } from "$lib/i18n.js";
	import { title } from "$lib/title.js";
	title.set($i18n.t("pageWizardTitle"));
	import { currentPage } from "$lib/page.js";
	currentPage.set("wizard");
	import "$lib/defaultMargin.css";
</script>
<main class="defaultMargin">
	<p>Hello World</p>
</main>