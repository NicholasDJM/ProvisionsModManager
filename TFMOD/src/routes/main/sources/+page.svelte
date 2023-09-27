<script lang="ts">
	import { i18n } from "$lib/js/stores/store";
	import { title } from "$lib/js/stores/store";
	$: title.set($i18n.t("sources:page-sources"));
	import { currentPage } from "$lib/js/stores/store";
	currentPage.set("sources");
	import Link from "$lib/components/Link.svelte";
	interface LinkTypeNoUrl {
		translation: string,
		favicon?: string,
		alt: string
	}
	interface LinkType extends LinkTypeNoUrl {
		url: string
	}
	type Sources = {
		links: Array<LinkType>,
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
	$: {
		translations.tf2 = $i18n.t("game-tf2");
		translations.tf2c = $i18n.t("game-tf2c"); // NOTE: These two must be set in a separate statement so it's available to tf2Wiki
		translations = {
			...translations,
			of: $i18n.t("game-of"),
			pf2: $i18n.t("game-pf2"),
			gamebanana: $i18n.t("sources:gamebanana"),
			mods: $i18n.t("sources:modstf"),
			grid: $i18n.t("sources:grid"),
			gamebananaalt: $i18n.t("sources:gamebanana-alt"),
			modsalt: $i18n.t("sources:modstf-alt"),
			gridalt: $i18n.t("sources:grid-alt"),
			tf2Wiki: $i18n.t("sources:wiki", {game: translations.tf2}),
			tf2cWiki: $i18n.t("sources:wiki", {game: translations.tf2c}),
			tf2maps: $i18n.t("sources:tf2maps"),
			workshop: $i18n.t("sources:workshop")
		};
		console.log(translations);
	}
	let gb: LinkTypeNoUrl = {
		translation: "gamebanana",
		alt: ""
	},
		modstf: LinkTypeNoUrl = {
			translation: "mods",
			alt: ""
		},
		grid: LinkTypeNoUrl = {
			translation: "grid",
			alt: ""
		},
		tf2maps: LinkTypeNoUrl = {
			translation: "tf2maps",
			alt: ""
		},
		source: Array<Sources>;
	function link(address: string, preset: LinkTypeNoUrl): LinkType {
		return {
			...preset,
			url: address
		};
	}
	$: {
		gb.alt = translations.gamebananaalt;
		modstf.alt = translations.modsalt;
		grid.alt = translations.gridalt;
		source = [
			{
				// ==== Team Fortress 2 ====
				links: [
					link("https://tf2.gamebanana.com", gb),
					link("http://mods.tf", modstf),
					link("https://www.tf2maps.net", tf2maps),
					{
						url: "https://steamcommunity.com/app/440/workshop",
						alt: "",
						translation: "workshop"
					},
					link("https://www.steamgriddb.com/game/10602", grid),
					{
						url: "https://wiki.teamfortress.com/wiki/Main_Page",
						translation: "tf2Wiki",
						alt: ""
					}
				],
				logo: {
					url: "/images/copyrighted_images/tf2.webp",
					alt: translations.tf2,
					width: 512,
					height: 128
				},
				url: "https://steampowered.com/app/440"
			},
			{
				// ==== TF2 Classic ====
				links: [
					link("https://gamebanana.com/games/5418", gb),
					link("https://www.steamgriddb.com/game/5262654", grid),
					link("https://wiki.tf2classic.com/wiki/Main_Page", {
						translation: "tf2cWiki",
						alt: ""
					})
				],
				logo: {
					url: "/images/copyrighted_images/tf2c.webp",
					alt: translations.tf2c,
					width: 3000,
					height: 959
				},
				url: "https://tf2classic.com"
			},
			{
				// ==== Open Fortress ====
				links: [
					link("https://gamebanana.com/games/7286", gb),
					link("https://www.steamgriddb.com/game/5248803", grid)
				],
				logo: {
					url: "/images/copyrighted_images/of.webp",
					alt: translations.of,
					width: 2089,
					height: 384,
					class: "of-logo"
				},
				url: "https://openfortress.fun"
			},
			{
				// ==== Pre-Fortress 2 ====
				links: [
					link("https://gamebanana.com/games/7748", gb),
					link("https://www.steamgriddb.com/game/5262280", grid)
				],
				logo: {
					url: "/images/copyrighted_images/pf2.webp",
					alt: translations.pf2,
					width: 1400,
					height: 500
				},
				url: "https://prefortress.com"
			},
			{
				// ==== TF2 Vintage ====
				links: [
					link("https://www.steamgriddb.com/game/5314030", grid)
				],
				logo: {
					url: "/images/copyrighted_images/tf2v.png",
					alt: translations.tf2v,
					width: 1000,
					height: 366
				},
				url: "https://github.com/TF2V/TF2Vintage"
			},
			{
				// ==== Hammer++ ====
				links: [],
				logo: {
					url: "/images/copyrighted_images/hammer.webp",
					alt: translations.hammer,
					width: 825,
					height: 156
				},
				url: "https://ficool2.github.io/HammerPlusPlus-Website"
			}
		];
	}
</script>
<div class="defaultMargin main">
	{#each source as card}
		<div>
			<Link href={card.url} icon={false}>
				<h1><img class="{card.logo.class ?? ""} logo" src={card.logo.url} alt={card.logo.alt} width={card.logo.width} height={card.logo.height} loading="lazy"></h1>
			</Link>
			<div class="center">
				{#each card.links as link}
					<span>
						<Link href={link.url} alt={link.alt}>{translations[link.translation]}</Link>
					</span>
				{/each}
			</div>
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
		flex: 1;
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
	.center {
		display: flex;
		flex-flow: column;
		max-inline-size: max-content;
		gap: 0.25rem;
		& span {
			justify-content: center;
			max-inline-size: max-content;
		}
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
		position: relative;
		inset-block-end: 0;
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