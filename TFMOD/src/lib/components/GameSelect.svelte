<script context="module" lang="ts">
	export interface GameIcon {
		icon: string,
		translation: string,
		alt: string,
		selected: boolean
	}
</script>
<script lang="ts">
	import { load as iconLoad } from "$lib/js/loadIcon";
	let localIcons: Record<string, string> = {tf2: "", tf2c: "", pf2: "", of: "", tf2v: ""};
	async function loadIcons() {
		localIcons.tf2 = (await iconLoad("tf2")) || "";
		localIcons.tf2c = (await iconLoad()) || "";
		localIcons.pf2 = (await iconLoad("pf2")) || "";
		localIcons.of = (await iconLoad("of")) || "";
		localIcons.tf2v = (await iconLoad("tf2v")) || "";
	}
	//TODO: Switch to static images rather than loading from files? What about copyright?
	// eslint-disable-next-line unicorn/prefer-top-level-await -- Not available in this context.
	loadIcons();
	export let open = false,
		icons: GameIcon[] = [],
		size = "25";
		// TODO: Delay showing rest of icons until transition is done.
			//NOTE: Look into animationEnd https://www.w3schools.com/jsref/event_animationend.asp
			// Also apply this to the nav rail as well, might simplify code.
		// TODO: Fix squishing on open. Fix with delay? see todo above
		// TODO: Add click event.
		// NOTE: When menu is closed, clicking on icon should cycle thru profiles, otherwise, it should select that profile.
		// TODO: Add tooltip with game name.
		// TODO: Forcibly expand menu before squishing icons.
		// TODO: Switch to index based selection? or name based? hard code values or let consumer create values? should we encapsulate logic or delagate to consumer?
		// TODO: Decide a maximun for icons per row, and adjust accordingly.
</script>
<div class="main" class:open style="--count:{icons.length}">
	{#if icons.length}
		{#each icons as icon}
			<a href="#game" class="icon" class:selected={icon.selected} class:show={open || icon.selected}>
				<img src={localIcons[icon.icon]} alt={icon.alt} width={size} height={size}/>
			</a>
		{/each}
	{/if}
</div>
<style lang="postcss">
	@property --transition {
		syntax: "<time>";
		inherits: true;
	}
	@property --count {
		syntax: "<number>";
		inherits: true;
	}
	@property --light {
		syntax: "<color>";
		inherits: true;
	}
	.main {
		--columns: auto;

		display: flex;
		transition: var(--transition);
		justify-content: space-between;
		flex-flow: row nowrap;
	}
	.icon {
		padding-inline: 0.5rem;
		padding-block: 0.5rem;
		display: none;
		border-radius: 50%;
		justify-content: center;
		align-content: center;
		aspect-ratio: 1;
		img {
			max-inline-size: 100%;
		}
		&:hover, &:focus-visible {
			background-color: white;
			box-shadow: 0 0 0.8rem 1px var(--light);
		}
	}
	.selected {
		background-color: white;
		&:hover, &:focus-visible {
			box-shadow: 0 0 0.8rem 1px var(--light);
		}
	}
	.show {
		display: flex;
	}
</style>