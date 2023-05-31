<script lang="ts">
	import { i18n } from "$lib/js/i18n.js";
	import { title } from "$lib/js/title.js";
	$: title.set($i18n.t("sources:page-sources"));
	import { currentPage } from "$lib/js/page.js";
	currentPage.set("sources");
	import Link from "$lib/components/Link.comp.svelte";
	type Sources = {
		links: Array<{
			translation: string
			favicon?: string,
			url: string,
			alt: string
		}>,
		logo: {
			url: string,
			width: number,
			height: number,
			alt: string,
			class?: string
		},
		url: string
	}
	let translations: Record<string, string> = {
		// Must have default values, or we get an error.
		tf2: "",
		tf2c: "",
		of: "",
		pf2: "",
		gamebanana: "",
		mods: "",
		grid: "",
		gamebananaalt: "",
		modsalt: "",
		gridalt: ""
	};
	$: translations = {
		tf2: $i18n.t("game-tf2"),
		tf2c: $i18n.t("game-tf2c"),
		of: $i18n.t("game-of"),
		pf2: $i18n.t("game-pf2"),
		gamebanana: $i18n.t("sources:gamebanana"),
		mods: $i18n.t("sources:modstf"),
		grid: $i18n.t("sources:grid"),
		gamebananaalt: $i18n.t("sources:gamebanana-alt"),
		modsalt: $i18n.t("sources:modstf-alt"),
		gridalt: $i18n.t("sources:grid-alt")
	};
	let gb = {
			translation: "gamebanana",
			favicon: "https://icons.duckduckgo.com/ip2/gamebanana.com.ico",
			alt: ""
		},
		modstf = {
			translation: "mods",
			favicon: "https://icons.duckduckgo.com/ip2/mods.tf.ico",
			alt: ""
		},
		grid = {
			translation: "grid",
			favicon: "https://icons.duckduckgo.com/ip2/steamgriddb.com.ico",
			alt: ""
		},
		source: Array<Sources>;
	$: {
		gb.alt = translations.gamebananaalt;
		modstf.alt = translations.modsalt;
		grid.alt = translations.gridalt;
		source = [
			{
				links: [
					{
						...gb,
						url: "https://tf2.gamebanana.com"
					},
					{
						...modstf,
						url: "https://mods.tf"
					},
					{
						...grid,
						url: "https://www.steamgriddb.com/game/10602"
					}
				],
				logo: {
					url: "/images/copyrighted_images/tf2.png",
					alt: translations.tf2,
					width: 512,
					height: 128
				},
				url: "https://steampowered.com/app/440"
			},
			{
				links: [
					{
						...gb,
						url: "https://gamebanana.com/games/5418"
					},
					{
						...grid,
						url: "https://www.steamgriddb.com/game/5262654"
					}
				],
				logo: {
					url: "/images/copyrighted_images/tf2c.png",
					alt: translations.tf2c,
					width: 3000,
					height: 959
				},
				url: "https://tf2classic.com"
			},
			{
				links: [
					{
						...gb,
						url: "https://gamebanana.com/games/7286"
					},
					{
						...grid,
						url: "https://www.steamgriddb.com/game/5248803"
					}
				],
				logo: {
					url: "/images/copyrighted_images/of.png",
					alt: translations.of,
					width: 2089,
					height: 384,
					class: "of-logo"
				},
				url: "https://openfortress.fun"
			},
			{
				links: [
					{
						...gb,
						url: "https://gamebanana.com/games/7748"
					},
					{
						...grid,
						url: "https://www.steamgriddb.com/game/5262280"
					}
				],
				logo: {
					url: "/images/copyrighted_images/pf2.webp",
					alt: translations.pf2,
					width: 1400,
					height: 500
				},
				url: "https://prefortress.com"
			}
		];
	}
</script>
<div class="defaultMargin main">
	{#each source as card}
		<div>
			<Link href={card.url}>
				<h1><img class={card.logo.class + " logo"} src={card.logo.url} alt={card.logo.alt} width={card.logo.width} height={card.logo.height} loading="lazy"></h1>
			</Link>
			<ul>
				{#each card.links as link}
					<li>
						<Link href={link.url}>{#if link.favicon}<img class="favicon" src={link.favicon} alt={link.alt} loading="lazy">{/if}{translations[link.translation]}</Link>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
<style lang="postcss">
	@property --defaultMargin {
		syntax: "<length>";
	}
	@property --backgroundColorAlt {
		syntax: "<color>";
	}
	@property --textColor {
		syntax: "<color>";
	}
	.main {
		display: flex;
		flex-flow: row wrap;
		gap: var(--defaultMargin);
		justify-content: center;
		padding-inline: 2.5rem;
	}
	.main > div {
		border-radius: var(--defaultMargin);
		border: 1px solid gray;
		padding-inline: var(--defaultMargin);
		padding-block: var(--defaultMargin);
		flex-grow: 1;
		background-color: var(--backgroundColorAlt);
		color: var(--textColor);
	}
	.main h1 {
		margin-block-start: 0;
		min-block-size: 5.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.main img.logo {
		inline-size: 16rem;
		margin-block: auto;
		block-size: auto;
	}
	/* stylelint-disable-next-line rem-over-px/rem-over-px, color-hex-case -- rem-over-px: This is how the drop shadow is defined on openfortress.com. color-hex-case: This works apparently. */
	$ofDropShadow: drop-shadow(4px 4px 0 #574168c0);
	/* stylelint-disable-next-line a11y/selector-pseudo-class-focus -- Handled in next rule. */
	:global(a:hover) {
		& img.logo {
			filter: brightness(125%);
		}
		& img.of-logo {
			filter: brightness(125%) $ofDropShadow;
		}
	}
	:global(a:focus-visible) {
		& img.logo {
			filter: brightness(125%);
		}
		& img.of-logo {
			filter: brightness(125%) $ofDropShadow;
		}
	}
	.of-logo {
		filter: $ofDropShadow;
	}
	$gap: 0.45rem;
	.favicon {
		margin-inline-end: $gap;
	}
	li {
		/* stylelint-disable-next-line rem-over-px/rem-over-px -- Size of favicon. */
		margin-inline-start: calc(16px + $gap);
	}
	li:has(.favicon) {
		marker-style: none;
		margin-inline-start: 0;
	}
</style>