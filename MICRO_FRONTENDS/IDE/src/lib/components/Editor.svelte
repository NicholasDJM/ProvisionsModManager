<script lang="ts">
	import { onMount } from "svelte";
	import { EditorView, basicSetup } from "codemirror";
	onMount(()=>{
		let view = new EditorView({
			extensions: [basicSetup],
			parent: document.querySelector("#main")
		})
	})
</script>
<div id="main">
</div>