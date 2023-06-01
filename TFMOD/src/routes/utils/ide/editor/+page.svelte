<script async lang="ts">
	import { AceEditor } from "svelte-ace";
	import "brace/theme/monokai";
	import "../mode-source-cfg.js";
	import jq from "jquery";
	import FolderOpen from "svelte-material-icons/FolderOpenOutline.svelte";
	import Save from "svelte-material-icons/ContentSave.svelte";
	import { confirm } from "@tauri-apps/api/dialog";
	import { appWindow } from "@tauri-apps/api/window";
	import { onMount, onDestroy } from "svelte";
	// @ts-expect-error -- Can't do anything about missing types.
	import { LocalStorage } from "combo-storage";
	let timer: ReturnType<typeof setInterval>;
	onMount(() => {
		const interval = 100;
		timer = setInterval(async () => {
			if (LocalStorage.get("window-focus") === appWindow.label) {
				LocalStorage.set("window-focus", "");
				await appWindow.setFocus();
			}
		}, interval);
	});
	onDestroy(() => {
		clearInterval(timer);
	});
	import KeyboardQwerty from "$lib/components/Keyboard-Qwerty.comp.svelte";
	// const windowSize = async () => await appWindow.innerSize();
	let text = "[\n\t\"Hello World\",\n\t\"This is a JSON Document\"\n]";
	const menuBarHeight = "55",
		buttonSize = "20",
		size = buttonSize + "px";
	// let editorHeight: string;
	LocalStorage.set("editorKeyboardStyle", "");
	jq(() => {
		jq(".menu").css("height", menuBarHeight + "px");
		jq(".toolbar").css("height", buttonSize + "px");
		/* windowSize().then(data=>{
		   	editorHeight = `calc(100vh - ${menuBarHeight}px)`
		   })
		   jq(":root").css("block-size", "100%"); */
	});
	addEventListener("beforeunload", (event) => {
		event.preventDefault();
		//const result = await confirm("There are unsaved documents. Are you sure you want to quit?", {title: "CFG IDE", type: "warning"});
		return event.returnValue = "";
	});
	/*function unload(event: Event) {
		console.log("hello");
		event.preventDefault();
		//const result = await confirm("There are unsaved documents. Are you sure you want to quit?", {title: "CFG IDE", type: "warning"});
		return event.returnValue = "";
	}
	*/
</script>
<!-- <button on:click={unload}>Close</button> -->
<div class="menu n" style="background:#272822">
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
	<div style="height:100%">
		<div class="editor">
			<AceEditor lang="source-cfg" theme="monokai" value={text} on:input={object => {
				text = object.details; console.log(object.details);
			}} width="100%" height="100%"/>
		</div>
	</div>
</div>
<details>
	<summary>Key Bind Finder</summary>
	<KeyboardQwerty/>
</details>
<style lang="postcss">
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
