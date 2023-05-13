<script lang="ts">
	import { i18n } from "$lib/js/i18n.js";
	import { title } from "$lib/js/title.js";
	$: title.set($i18n.t("wizard:page-wizard"));
	import { currentPage } from "$lib/js/page.js";
	currentPage.set("wizard");
</script>
<main class="defaultMargin">
	<p>Hello World</p>
</main>
