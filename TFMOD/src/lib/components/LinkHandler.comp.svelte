<script lang="ts" context="module">
	/* BUG: Somewhere in this component, something causes a page crash in Microsoft Edge
		Error: STATUS_ACCESS_VIOLATION
		It's not often, but I've only ever seen it after creating this component.
	*/
	import { onMount, onDestroy } from "svelte";
	import { i18n } from "$lib/js/i18n";
	import { open } from "@tauri-apps/api/shell";
	import { writeText } from "@tauri-apps/api/clipboard";
	let address: string;
	export function openLink(href: string) {
		// console.log("Open", href);
		address = href;
		const data = localStorage.getItem("links"),
			dataParsed = data ? JSON.parse(data) : undefined;
		let saved = false;
		if (dataParsed) {
			for (let index = 0; index < Object.keys(dataParsed).length; index++) {
				if (address === Object.keys(dataParsed)[index]) {
					saved = true;
				}
			}
		}
		if (saved) {
			open(address);
		} else {
			const element = document.querySelector<HTMLDialogElement>("#linkDialog");
			if (element) {
				element.dataset.href = address;
				element.showModal();
			}
		}
	}
</script>
<script lang="ts">
	let checked:boolean;
	const close = () => {
		document.querySelector<HTMLDialogElement>("#linkDialog")?.close();
		checked = false;
	};
	let translations: Record<string, string>,
		timer: ReturnType<typeof setInterval>,
		address2: string;
	// NOTE: Can't set title here because address is not a reactive variable
	/* // Try to uncomment this (add a slash to the start of this line), and look at what eslint has to say.
	$: address2 = address;
	//*/
	// TODO: This gives me an idea! Use this quirk to correct pyroland.svelte! (replace storing maps in localStorage to sotring in a non-reactive variable)
	$: translations = {
		title: "",
		ok: $i18n.t("open"),
		clipboard: $i18n.t("clipboard"),
		cancel: $i18n.t("cancel"),
		ask: $i18n.t("link-no-ask")
	};
	onMount(() => {
		const delay = 50;
		timer = setInterval(() => {
			//
			if (address !== address2) {
				translations.title = $i18n.t("link-title", {address: document.querySelector<HTMLDialogElement>("#linkDialog")?.dataset.href});
				address2 = address;
			}
		}, delay);
	});
	onDestroy(() => {
		clearInterval(timer);
	});
	async function accept() {
		await open(address);
		if (document.querySelector<HTMLInputElement>("#linkCheckbox")?.checked) {
			const data = localStorage.getItem("links"),
				dataParsed = data ? JSON.parse(data) : undefined;
			let saved = false;
			if (dataParsed) {
				console.log(dataParsed);
				console.log(Object.keys(dataParsed));
				for (let i = 0; i < Object.keys(dataParsed).length; i++) {
					if (address === Object.keys(dataParsed)[i]) {
						saved = true;
					}
				}
			}
			if (!saved) {
				localStorage.setItem("links", JSON.stringify({...dataParsed, [address]: true}));
			}
		}
		close();
	}
	async function copy() {
		await writeText(address);
	}
	function cancel() {
		close();
	}
</script>
<dialog id="linkDialog">
	<h1>{translations.title}</h1>
	<div class="controls">
		<label>
			{translations.ask}
			<input type="checkbox" id="linkCheckbox" bind:checked={checked}/>
		</label>
		<button on:click={accept}>{translations.ok}</button>
		<button on:click={copy}>{translations.clipboard}</button>
		<button on:click={cancel}>{translations.cancel}</button>
	</div>
</dialog>
<style lang="postcss">
	h1 {
		font-size: 16pt;
		margin-block: 0;
		margin-block-end: 5rem;
	}
	.controls {
		display-type: grid;
		grid-template-columns: 1fr auto auto auto;
		gap: .5rem;
	}
	dialog {
		border-radius: 0.5rem;
	}
</style>