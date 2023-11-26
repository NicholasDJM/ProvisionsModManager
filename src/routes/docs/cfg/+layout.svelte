<script>
	import "./functions.css";
</script>
<!-- <nav>
	<h1>CFGScript</h1>
	<a href="/docs">Home</a>
	<a href="/docs/cfg">Documentation</a>
</nav> -->
<slot/>
<style>
	body {
		font-size: 1rem;
		font-family: sans-serif;
		background-color: rgb(50 50 50 / 1);
		color: white;
	}
	nav {
		overflow: hidden;
		max-inline-size: 80ch;
		block-size: 50px;
		padding: 1rem;
		margin-inline: auto;
		/* max-inline-size: 80ch; */
	}
	nav h1 {
		display: inline;
		margin-inline-end: 1rem;
	}
	nav a:any-link {
		color: white;
		text-decoration: none;
	}
	nav a:any-link:hover, nav a:any-link:focus-visible {
		color: skyblue;
		text-decoration: underline;
	}
</style>