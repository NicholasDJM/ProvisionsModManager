<!-- eslint-disable @intlify/svelte/no-raw-text -- Not text. -->
<svelte:head>
	<style lang="postcss">
		@property --navRailComputed {
			inherits: true;
			syntax: "<position>";
		}
		@property --menuCornerSize {
			inherits: true;
			syntax: "<length>";
		}
		#navrail:not(.open) {
			inset-inline-start: calc(var(--navRailComputed) - var(--menuCornerSize)) !important;
		}
		#corner:not(.open) {
			inset-inline-start: var(--navRailComputed) !important;
		}
		#cornerRtl:not(.open) {
			inset-inline-start: var(--navRailComputed) !important;
		}
		main.content {
			margin-inline-start: 0 !important;
		}
	</style>
</svelte:head>
