<script lang="ts">
	import { i18n } from "$lib/js/i18n.js";
	import { title } from "$lib/js/title.js";
	$: title.set($i18n.t("sources:page-sources"));
	import { currentPage } from "$lib/js/page.js";
	currentPage.set("sources");
	import Link from "$lib/components/Link.svelte";
	import "lazysizes";
</script>
<main class="defaultMargin">
	<ul>
		<li>
			<Link href="https://tf2.gamebanana.com"><img alt="GameBanana Logo" src="https://icons.duckduckgo.com/ip2/gamebanana.com.ico"/> GameBanana</Link>
		</li>
	<li>
		<Link href="http://mods.tf"><img alt="GameBanana Logo" src="https://icons.duckduckgo.com/ip2/mods.tf.ico"/> Mods.tf</Link>
	</li>
	</ul>
</main>
