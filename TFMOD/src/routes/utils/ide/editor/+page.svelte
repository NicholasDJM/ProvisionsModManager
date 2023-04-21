<script lang="ts">
	import { AceEditor } from "svelte-ace";
	import "brace/theme/monokai";
	import "../mode-source-cfg.js";
	import jq from "jquery";
	import FolderOpen from "svelte-material-icons/FolderOpenOutline.svelte";
	import Save from "svelte-material-icons/ContentSave.svelte";
	import { appWindow } from "@tauri-apps/api/window";
	import { confirm } from "@tauri-apps/api/dialog";
	import KeyboardQwerty from "$lib/Keyboard-Qwerty.svelte";
	const windowSize = async () => await appWindow.innerSize();
	windowSize().then(data => console.log(data));
	let text = "[\n\t\"Hello World\",\n\t\"This is a JSON Document\"\n]";
	const menuBarHeight = "55",
		buttonSize = "20",
		size = buttonSize + "px";
	let editorHeight: string;
	import { LocalStorage } from "combo-storage";
	LocalStorage.set("editorKeyboardStyle", "");
	jq(() => {
		jq(".menu").css("height", menuBarHeight + "px");
		jq(".toolbar").css("height", buttonSize + "px");
		/* windowSize().then(data=>{
		   	editorHeight = `calc(100vh - ${menuBarHeight}px)`
		   })
		   jq(":root").css("block-size", "100%"); */
	});
	addEventListener("beforeunload", async (event) => {
		event.preventDefault();
		//const result = await confirm("There are unsaved documents. Are you sure you want to quit?", {title: "CFG IDE", type: "warning"});
		return event.returnValue = "";
	});
	function unload(event) {
		console.log("hello");
		event.preventDefault();
		//const result = await confirm("There are unsaved documents. Are you sure you want to quit?", {title: "CFG IDE", type: "warning"});
		return event.returnValue = "";
	}
</script>
<!-- <button on:click={unload}>Close</button> -->
<div class="menu border-bottom:1px_solid_white" style="background:#272822">
	<button>File</button>
	<div class="toolbar">
		<button><FolderOpen {size}/></button>
		<button><Save {size}/></button>
	</div>
</div>
<div class="panels">
	<aside style="background:#272822">
		<p>text</p>
	</aside>
	<main style="height:100%">
		<div class="editor">
			<AceEditor lang="source-cfg" theme="monokai" value={text} on:input={object => {
text = object.details; console.log(object.details);
}} width="100%" height="100%"/>
		</div>
	</main>
</div>
<details>
	<summary>Key Bind Finder</summary>
	<KeyboardQwerty/>
</details>
<style>
	:root {
		block-size: 100%;
	}
	* {
		box-sizing: border-box;
	}
	.panels {
		display: grid;
		grid-template-columns: 20% 80%;
		color: white;
		block-size: calc(100%);
	}
	.editor {
		block-size:calc(100% * 2);
	}
</style>