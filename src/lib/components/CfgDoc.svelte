<script lang="ts" context="module" type="module">
	export interface Documentation {
		name: string,
		arguments: {
			name: string,
			description: string,
			type: string,
			required: boolean
		}[],
		description: string | string[],
		block?: boolean,
		example?: string,
		install?: boolean
	}
</script>
<script lang="ts" type="module">
	import hljs from "highlight.js"
	import { onMount } from "svelte";
	export let data: Documentation;

	let argText: string = "";
	for (const arg of data.arguments) {
		if (argText.length === 0) {
			argText = arg.name;
		} else {
			argText = `${argText}, ${arg.name}`
		}
	}
	const title = `@${data.name}(${argText})${data.block?" {}":""}`
	hljs.registerLanguage("cfgscript_v1", function() {
		return {
			case_insensitive: true,
			contains: [
				{
					className: "string",
					begin: "\"",
					end: "\"",
					relevance: 0
				},
				hljs.COMMENT(
					"//",
					"\n",
					{
						className: "comment"
					}
				),
				{
					keywords: [
						"version",
						"function",
						"return",
						"if",
						"else",
						"for",
						"break",
						"continue",
						"match",
						"case",
						"resolution",
						"widescreen",
						"alias",
						"type",
						"error",
						"mod",
						"install",
						"declare",
						"import",
						"export",
						"eval"
					],
					begin: "@",
					end: /\W/,
					className: "keyword",
					relevance: 1
				},
				{
					begin: /\$\w+/,
					end: /\W/,
					className: "variable"
				},
				{
					begin: /{/,
					className: "brackets"
				},
				{
					begin: /}/,
					className: "brackets"
				}
			]
		}
	})
	onMount(()=>{
		document.querySelectorAll(".example").forEach(value => {
			const element = value as HTMLPreElement;
			if (element.dataset.highlighted === undefined)
				hljs.highlightElement(element);
		})
	})
	function copy(event: MouseEvent) {
		const target = event.currentTarget as HTMLAnchorElement;
		navigator.clipboard.writeText(target.href);
		target.scrollIntoView({"behavior": "smooth"});
	}
</script>
<article data-name={data.name} data-text={argText} data-block={data.block}>
	<a class="title" href="#{data.name}" on:click={copy}>
		<h1>
			{title} <span class="hover">#</span>
		</h1>
	</a>
	<p class="block">{data.block ? "Function expects a block to follow." : ""}</p>
	<p class="block">{data.install ? "Function is only available to mod install scripts. Make sure your mod is ready to use with out install scripts, as players may disable install scripts." : ""}</p>
	{#each data.arguments as arg}
		<p>
			<code class="argument">{arg.name}</code>
			<code class="type">
			{#if arg.required}
				&LT;{arg.type}&GT;
			{:else}
				[{arg.type}]
			{/if}
			</code>
		{arg.description}</p>
	{/each}
	{#if Array.isArray(data.description)}
		{#each data.description as line}
			<p>{line}</p>
		{/each}
	{:else}
		<p>{data.description}</p>
	{/if}
	{#if data.example}
		<pre class="example language-cfgscript_v1">{data.example}</pre>
	{/if}
</article>
<style lang="postcss">
	* {
		tab-size: 4;
	}
	.title {
		inline-size: 100%;
		display: block;
		/* stylelint-disable-next-line rem-over-px/rem-over-px -- It's acceptable. */
		border-block-end: 2px solid white;
		font-size: 2rem;
	}
	.title h1{
		font-size: 1em;
		margin-block: 0;
		position: relative;
	}
	.hover {
		position: absolute;
		inset-inline-start: -1.5ch;
		inset-block-end: 0;
		visibility: hidden;
	}
	.title:hover .hover, .title:focus .hover {
		visibility: visible;
	}
	.argument {
		padding-inline: 0.5rem;
		padding-block: 0.1rem;
		padding-inline-end: 1rem;
		background-color: white;
		color: black;
		clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
	}
	.type {
		color: lightgreen;
		font-size: 1rem;
	}
	.block:not(:empty) {
		color: black;
		background-color: orange;
		padding-inline: 0.25rem;
		padding-block: 0.25rem;
	}
	.example:not(:empty) {
		margin-inline: 1rem;
		background-color: black;
		padding: 1rem;
		border-radius: 5px;
		overflow: auto;
	}
	a {
		color: currentColor;
		text-decoration: none;
	}
	a:hover, a:focus-visible {
		color: skyblue;
	}
	:global(.hljs-string) {
		color: lightgreen;
	}
	:global(.hljs-variable) {
		color: skyblue;
	}
	:global(.hljs-keyword) {
		color: rgb(255 57 70 / 1);
	}
	:global(.hljs-comment) {
		color: grey;
	}
	:global(.hljs-brackets) {
		color: orange;
	}
</style>