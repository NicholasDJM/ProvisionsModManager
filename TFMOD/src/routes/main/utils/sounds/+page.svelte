<script lang="ts">
	import { onMount } from "svelte";
	import HideNavBar from "$lib/components/HideNavBar.svelte";
	import { title } from "$lib/js/stores/store";
	import { i18n } from "$lib/js/stores/store";
	$: title.set($i18n.t("sounds:page-sounds"));
	import { backButton, backUrl } from "$lib/js/stores/store";
	backButton.set(true);
	backUrl.set(true);
	let translations: Record<string, string>;
	$: translations = {
		title: $i18n.t("sounds:page-sounds")
	};
</script>
<HideNavBar/>
<section class="defaultMargin container">
	<h1>{translations.title}</h1>
</section>
<style lang="postcss">
	.container {
		display: flex;
		justify-content: center;
		& > * {
			max-inline-size: 50rem;
			flex-grow: 1;
		}
	}
	h1 {
		color: red;
	}
</style>