<script lang="ts">
	/* eslint-disable-next-line unicorn/prevent-abbreviations -- Variable is named src so I can use a shortcut in svelte. */
	export let src: string,
		alt: string,
		title: string,
		description: string;
</script>
<div class="card">
	<div class="img">
		<img {src} {alt}/>
	</div>
	<div class="text">
		<span class="title">{title}</span>
		<p class="description">{description}</p>
	</div>
</div>
<style>
	.description {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: break-spaces;
		display: inline-block;
		/* stylelint-disable-next-line plugin/non-zero-length-expect-unit -- Unit not needed */
		-webkit-line-clamp: 4;
		/* stylelint-disable-next-line plugin/non-zero-length-expect-unit -- Unit not needed */
		line-clamp: 4;
	}
	.title {
		padding-block-start: 5px;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: bold;
		font-size: 20px;
		text-align: center;
	}
	.img {
		overflow: hidden;
		inline-size: 256px;
		aspect-ratio: 1;
		border-radius: 0 0 5px 5px;
	}
	img {
		inline-size: 256px;
	}
	.card {
		max-inline-size: 256px;
		display: grid;
		grid-template-rows: auto auto;
		border-radius: 20px;
		overflow: hidden;
		background-color: var(--accentColor);
		color: var(--textColor);
		&:hover, &:focus-within {
			cursor: pointer;
			box-shadow: 0 0 20px 1px var(--accentColor);
			transition: (--menuSpeed);
		}
	}
	.text {
		display: grid;
		padding-inline: 5px;
	}
</style>