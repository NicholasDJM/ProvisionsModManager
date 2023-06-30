<script lang="ts">
	import { i18n } from "$lib/js/stores/store";
	import { title } from "$lib/js/stores/store";
	$: title.set($i18n.t("wizard:page-wizard"));
	import { currentPage } from "$lib/js/stores/store";
	currentPage.set("wizard");
</script>
<div class="defaultMargin">
	<p>Hello World</p>
</div>
