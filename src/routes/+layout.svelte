<!-- Modern-Normalize -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/modern-normalize@2.0.0/modern-normalize.css" integrity="sha256-56wdMXYImJ4iFDB0++lft3An8jDoVAxWb11ZZhZyEwg=" crossorigin="anonymous">
<!-- Pico.css -->
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1.5.10/css/pico.css" integrity="sha256-nAqq49sGfYAEfmA8UURavcs1hmBGQsWT8uaFVlr8Z+A=" crossorigin="anonymous"> -->
<!-- Iconoir -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/iconoir@7.0.2/css/iconoir-regular.css" integrity="sha256-+cw3sPnknmIzssZa/mZ4WY9vJ11lriDyjqGydGRbUd8=" crossorigin="anonymous">
<svelte:head>
	<title>Provisions Mod Manager</title>
</svelte:head>
<slot/>
<style lang="postcss">/*
	:root {
		--color: #000000;
		--article-background: rgb(210 205 200 / 1);
		--background-color: rgb(46 42 40 / 1) !important;
		--orange: rgb(153 70 18 / 1);
		--primary: var(--color) !important;
		--primary-hover: rgb(191 87 22 / 1) !important;
		--primary-focus: rgb(181 169 142 / 1) !important;
	}
	article {
		--background-color: var(--article-background) !important;

		background: var(--background-color);
	}
	main {
		padding-block: 0 !important;
		padding-inline: 0 !important;
	}
	footer {
		display:flex;
		flex-flow:row;
		gap:1rem;
		text-align: center;
		justify-content: center;
	}
	body {
		/* Ignore error about syntax. Svelte hasn't been updated to expect this syntax. CSS now supports nested selectors. *
		> nav, > aside {
			position: sticky;
		}
		> nav {
			background-color: rgb(58 52 46 / 1);
			inset-block-start: 0;
		}
		> aside {
			--size: 300px;
	
			background-color: var(--background-color);
			position: fixed;
			inset-block-start: 0;
			inset-inline-start: calc(var(--size) * -1);
			filter: brightness(75%);
			padding-inline: 1rem;
			block-size: 100%;
			min-inline-size: var(--size);
			max-inline-size: 90%;
			z-index: 2;
			transition: var(--transition, 200ms);
			&.show {
				inset-inline-start:0;
			}
		}
		#overlay {
			position: fixed;
			inline-size: 100%;
			block-size: 100%;
			z-index: 1;
			transition: var(--transition, 200ms);
			/* stylelint-disable-next-line rem-over-px/rem-over-px -- It's fine in this use case. *
			backdrop-filter: blur(4px);
		}
		.nav {
			--primary: var(--color) !important;
			display:grid;
			grid-template-columns:1fr 3rem;
			> * {
				/* Nav Links *
				grid-column: span 2;
			}
			>:nth-child(1) {
				/* Menu Title *
				grid-column: 1;
				font-size: 1.25rem;
			}
			>:nth-child(2) {
				/* Menu Close Button *
				grid-column: 2;
				font-size: 2rem;
			}
		}
		.navbar {
			animation-timeline: scroll;
			block-size: var(--scale, 200%);
		}
		@keyframes navbar {
			from: {
				--scale: 200%;
			}
			to {
				--scale: 100%;
			}
		}
	} */
</style>