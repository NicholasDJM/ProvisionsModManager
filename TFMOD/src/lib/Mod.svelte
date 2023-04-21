<script lang="ts">
	/* eslint-disable-next-line unicorn/prevent-abbreviations -- No */
	import jq from "jquery";
	import Switch from "./Switch.svelte";
	export let srcset: string,
		sizes: string,
		/* eslint-disable-next-line unicorn/prevent-abbreviations -- Variable is named src so I can use a shortcut in svelte. */
		src: string,
		alt: string,
		name: string,
		author: string,
		description: string,
		conflicts: number,
		enabled: boolean,
		position: number,
		md5: string;
</script>
<main class="modItem">
	<a href={"/main/mods?id=" + md5}>
		<div class="picture">
			<picture class={enabled ? "" : "disabled"}>
				<source
					{srcset}
					{sizes}
				/>
				<img {src} {alt}>
			</picture>
		</div>
	</a>
	<div class="content">
		<a href={"/main/mods?id=" + md5}>
			<div class="text">
				<div class="title"><h1>{name}</h1><p class="center">{author}</p></div>
				<p>{description}</p>
			</div>
		</a>
		<div class="info">
			<Switch bind:enabled={enabled}/>
			<div class="conflicts" data-conflicts={conflicts}>Conflicts: {conflicts}</div>
			<input type="number" value={position}/>
		</div>
	</div>
</main>
<style>
	main.modItem {
		display: grid;
		grid-template-columns: auto 1fr;
		overflow: hidden;
		user-select: none;
		border: 1px solid var(--accentColorAlt);
		background-color: var(--accentColorAlt);
		&:hover, &:focus-visible {
			box-shadow: 0 0 3px 3px var(--accentColorAlt);
		}
	}
	a:link, a:visited, a:active {
		color: var(--textColor);
		text-decoration: none;
	}
	.picture {
		inline-size: 128px;
		block-size: 128px;
		overflow: hidden;
	}
	picture {
		transition: var(--transition);

		/* transform: scale(50%) translate(-50%, -50%); */
		&.disabled {
			filter: grayscale(100%);
		}
		&>img {
			inline-size: 256px;
			block-size: 256px;
			object-fit: cover;
		}
	}
	.content {
		--height: 40px;

		display: grid;
		grid-template-rows: 1fr var(--height);
	}
	.text {
		padding-inline: 8px;
	}
	.title {
		display: grid;
		grid-template-columns: auto auto;
		text-overflow: ellipsis;
		line-height: 20px;
		overflow: hidden;
		white-space: no-wrap;
		& .center {
			display: flex;
			justify-content: left;
			align-items: center;
		}
	}
	.info {
		display: grid;
		grid-template-columns: auto 1fr auto;
	}
	.conflicts {
		--gradientPosition: 40%;

		border-block-start: 1px solid var(--color-grey-1);
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		min-inline-size: 50px;
		background: var(--color-green-2);
		&::after {
			content: "Conflicts";
			position: fixed;
			inset-block-start: -20px;
		}
	}
	/* input[type="number"] {
		border-end-end-radius: 20px;
		border-block-start: 1px solid var(--color-grey-1);
	} */
</style>