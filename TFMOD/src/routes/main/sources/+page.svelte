<script lang="ts">
	import { i18n } from "$lib/js/i18n.js";
	import { title } from "$lib/js/title.js";
	$: title.set($i18n.t("sources:page-sources"));
	import { currentPage } from "$lib/js/page.js";
	currentPage.set("sources");
	import Link from "$lib/components/Link.svelte";
	let translations: Record<string, string>;
	$: translations = {
		tf2: $i18n.t("game-tf2"),
		tf2c: $i18n.t("game-tf2c"),
		of: $i18n.t("game-of"),
		pf2: $i18n.t("game-pf2")
	};
</script>
<main class="defaultMargin">
	<div>
		<Link href="https://steampowered.com/app/440">
			<h1><img class="logo" alt={translations.tf2} src="/images/copyrighted_images/tf2.png" width="512" height="128"/></h1>
		</Link>
		<ul>
			<li>
				<Link href="https://tf2.gamebanana.com"><img alt="GameBanana Logo" src="https://icons.duckduckgo.com/ip2/gamebanana.com.ico" loading="lazy"/> GameBanana</Link>
			</li>
			<li>
				<Link href="http://mods.tf"><img alt="GameBanana Logo" src="https://icons.duckduckgo.com/ip2/mods.tf.ico" loading="lazy"/> Mods.tf</Link>
			</li>
		</ul>
	</div>
	<div>
		<Link href="https://tf2classic.com">
			<h1><img class="logo" alt={translations.tf2c} src="/images/copyrighted_images/tf2c.png" width="3000" height="959"/></h1>
		</Link>
		<ul>
			<li>
				<Link href="https://www.gamebanana.com/games/5418"><img alt="GameBanana Logo" src="https://icons.duckduckgo.com/ip2/gamebanana.com.ico" loading="lazy"/> GameBanana</Link>
			</li>
		</ul>
	</div>
	<div>
		<Link href="https://openfortress.fun">
			<h1><img class="logo" alt={translations.of} src="/images/copyrighted_images/of.png" width="2089" height="384"/></h1>
		</Link>
		<ul>
			<li>
				<Link href="https://www.gamebanana.com/games/7286"><img alt="GameBanana Logo" src="https://icons.duckduckgo.com/ip2/gamebanana.com.ico" loading="lazy"/> GameBanana</Link>
			</li>
		</ul>
	</div>
	<div>
		<Link href="https://prefortress.com">
			<h1><img class="logo" alt={translations.pf2} src="/images/copyrighted_images/pf2.webp" width="1400" height="500"/></h1>
		</Link>
		<ul>
			<li>
				<Link href="https://www.gamebanana.com/games/7748"><img alt="GameBanana Logo" src="https://icons.duckduckgo.com/ip2/gamebanana.com.ico" loading="lazy"/> GameBanana</Link>
			</li>
		</ul>
	</div>
</main>
<style lang="postcss">
	@property --defaultMargin {
		syntax: "<length>";
	}
	@property --dark {
		syntax: "<color>";
	}
	main {
		display: flex;
		flex-flow: row wrap;
		gap: var(--defaultMargin);
		justify-content: center;
		padding-inline: 2.5rem;
	}
	main > div {
		border-radius: var(--defaultMargin);
		border: 1px solid gray;
		padding-inline: var(--defaultMargin);
		padding-block: var(--defaultMargin);
		flex-grow: 1;
		background-color: var(--dark);
	}
	main h1 {
		margin-block-start: 0;
		min-block-size: 5.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	main img.logo {
		inline-size: 16rem;
		margin-block: auto;
		block-size: auto;
	}
	/* stylelint-disable-next-line a11y/selector-pseudo-class-focus -- Handled in next rule. */
	:global(a:hover) {
		& img.logo {
			filter: brightness(125%);
		}
	}
	:global(a:focus-visible) {
		& img.logo {
			filter: brightness(125%);
		}
	}
</style>