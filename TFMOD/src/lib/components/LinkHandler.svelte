<script lang="ts" context="module">
	/* BUG: Somewhere in this component, something causes a page crash in Microsoft Edge
		Error: STATUS_ACCESS_VIOLATION
		It's not often, but I've only ever seen it after creating this component.
	*/
	import { onMount, onDestroy } from "svelte";
	import { i18n } from "$lib/js/stores/store";
	import { open } from "@tauri-apps/api/shell";
	import { writeText } from "@tauri-apps/api/clipboard";
	let address: string | undefined,
		_errorMessage = "",
		show = false;
	function getElement(): HTMLDialogElement {
		return document.querySelector<HTMLDialogElement>("#linkDialog");
	}
	// eslint-disable-next-line unicorn/no-useless-undefined -- Not useless, svelte complains in other files otherwise.
	export function setAddress(href: string | undefined = undefined) {
		const element = getElement();
		if (element) element.dataset.href = href;
		address = href;
	}
	export function previewShow() {
		show = true;
	}
	export function previewHide() {
		show = false;
	}
	const https = "https://",
		http = "http://",
		steamProtocol = "steam://";
	export async function openLink(href: string, bypass = false, steam = false, noSave = false) {
		// NOTE: Set steam to true only when needed.
		// TODO: Disallow saving links when getting links from descriptions of mods. Use noSave.
		const s = href.slice(0, https.length),
			s2 = href.slice(0, http.length);
		if (s !== https && s2 !== http && (steam && s !== steamProtocol)) throw new Error(`Only HTTP(S) ${steam ? "/ STEAM " : ""}addresses are allowed`);
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
		const element = getElement();
		if (!saved && element) {
			element.dataset.href = address;
			if (!element?.hasAttribute("open")) element.showModal();
		}
		if (saved || bypass) await open(address).catch(error => {
			if (error) {
				console.error(error);
				_errorMessage = error;
				if (element && !element.hasAttribute("open")) element.showModal();
			}
		});
	}
</script>
<script lang="ts">
	let checked:boolean,
		element: HTMLDialogElement,
		show2 = false,
		translations: Record<string, string>,
		timer: ReturnType<typeof setInterval>,
		address2: string | undefined,
		errorMessage = "";
	const close = () => {
		element?.close();
		checked = false;
		_errorMessage = "";
	};
	// NOTE: Can't set title here because address is not a reactive variable
	/*// Try to uncomment this (add a slash to the start of this line), and look at what eslint has to say.
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
		element = getElement();
		const delay = 100;
		if (element) {
			timer = setInterval(() => {
				//
				if (address2 !== element?.dataset.href) {
					translations.title = $i18n.t("link-title");
					address2 = element?.dataset.href;
				}
				errorMessage = _errorMessage;
				show2 = show;
			}, delay);
		}
	});
	onDestroy(() => {
		if (timer) clearInterval(timer);
	});
	function accept() {
		openLink(element?.dataset.href || "", true);
		close();
	}
	async function copy() {
		await writeText(element?.dataset.href || "");
	}
	function cancel() {
		close();
	}
</script>
<dialog id="linkDialog">
	<div class="message">
		<h1>{translations.title}</h1>
		<span class="address">{address2}</span>
		<code id="error">{errorMessage}</code>
	</div>
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
<div class="linkPreview" class:fade={!show2} aria-label="Link Preview">
{address2}
</div>
<style lang="postcss">
	.message {
		display: flex;
		flex-flow: column nowrap;
		margin-block-end: 5rem;
	}
	h1 {
		font-size: 16pt;
		margin-block: 0;
	}
	@below sm {
		h1 {
			font-size: 12pt;
		}
	}
	.controls {
		display-type: grid;
		grid-template-columns: 1fr auto auto auto;
		gap: .5rem;
	}
	#error {
		color: red;
	}
	.linkPreview {
		position: fixed;
		inset-block-end: 0;
		inset-inline-end: 0;
		background-color: var(--backgroundColorAlt);
		color: var(--textColor);
		border-inline-start: 1px solid gray;
		border-block-start: 1px solid gray;
		padding-inline: var(--defaultMargin);
		padding-block: 0.1rem;
		border-start-start-radius: 0.5rem;
		pointer-events: none;
		max-inline-size: 100vw;
		z-index: 100;
		&.fade {
			animation-name: fade;
			animation-delay: .5s;
			animation-fill-mode: both;
			animation-duration: var(--transitionReducedMotion);
		}
	}
	@keyframes fade {
		to {
			opacity: 0;
		}
	}
	.address {

	}
</style>