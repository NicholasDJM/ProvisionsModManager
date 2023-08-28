# How to add support for the “Provisions One-Click Install” extension

Your website should include a few meta tags and a download button target for the extension to find.

TODO: finish all of this

## Meta tags

- To enable a different download URL than what is configured in Provisions Mod Manager, add this meta tag below. The URL address should directly lead to file data. This does not support pages with multiple mod versions.

    ```html
    <meta name="provisions:url" content="URL TO DIRECT FILE ACCESS"/>
    ```
    By default, GameBanana's url is `dl.gamebanana.com`

## Data Attributes

- `data-provisions-url` Add this to your element, and the extension will enable click detection on this element. This element should be a button or link to [https://github.com/NicholasDJM/ProvisionsModManager](https://github.com/NicholasDJM/ProvisionsModManager). Once the extension has loaded, it will replace the link with one to enable automatic installation of the mod. The attribute must also have a value of a URL that leads directly to file data. This does not support multiple mod versions, however, you can add multiple buttons with this attribute with different URLs.

## Example script

```html
<a href="https://github.com/NicholasDJM/ProvisionsModManager" class="provisionsLink" data-provisions-url="dl.gamebanana.com/12345">
	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPySURBVFhHvY5rU5NXFIX5WIxfaL/1/2TGFgqoXIKQxEBCLjQhMZg0VwhIRC5WZOxMW2ecttgojj+kXBIEgSQkoKj9G6t77/O+8a2VFvtG98wza+11ztn7tJyhYBLThfb1C2j/4wI6CPFEx/pX0is0z5mgPL9VI8wVOje+Rud6u9BFvot1vcPA27xbPCnBb9UIc4WLm9/g0kbnP5B8k7zORpdis4vOOpv3gR4a2LPVbeAieje70UteEE+Z5Kzd6CPlt2qEuYJt6zJsxUtKdYqXMbDV806v+x7x/FaNMFe4UuzFYLGPtA+DJfIl8qzcF/uVUsY6xKrd4bdqhLmCo2SDY9sGZ6nf4ElLA7BvD4gyTvaCusNv1QhzBdf2IIYJ1zOCVfPD20MGb0A747dqhLmC+5kD7h07qR0jDe+Ah/rG2Q71gp1yJ+Fo3ge8O1cNuOAjvLsM9YSP0TJd/aT8Vo0wVwg8H0Zgd4TUCGWslI8x5IVdt+bdzftA6Pkogg081HsQ3GMdRYg0uEe5Rsjg+a0aYa4Q3vcisucj9ZP6EWb2fVpGUB/hXmCv7vFbNcJcYWJ/TIgeKBXPyn0j+1bpAamW81s14t/LoulphdhBkAgJcSGotExZmTxzMC4ao4zzeHn8LB+Q3frFU0lWwkgw5TCSRIqV+mQ5InmyEtHyiCA98b5Z76HF2tr2Gey/9SJVuYZM+RrSlSjS1Sgyom971kyZ0M6Mmq1MaL2mBrLVCTpnT0q9Y7UfrW2tvNzKH+CiT7TCuWrDZDWGycPriup1TDWgnDRHKv0hK6ErkWOvkavGpZesxqp6F+04985yvax84Fq9gunad5ipxTFDj2YOyRMqU176w4TqielaAjfEk0rOvcqUEvUERh4OnrpcL/mE++EQZmsp5OtJ5Gs6KczWKWOVsxRu1tKiedGk9De55zPutTtz9TQ8v9v/c7le8onRgh236hlh7kip+HqWyGCedJ4zOcsqjjibVGfspc/CW3Ceeble8gl/4SoWjqewcDSFRWFSdIn9MXk6WzzKSb8kmpN+8VixROeBgguWtnMftFwvKz8cKwzj++MZjWmlLxjl74gnFX8Dy+y1LFgY+d/L9ZJPBB+5cfdlnpjF3Rd5rDCa54z9Cp2rnLM8xh95TC/XSz4RfuzBvZdzuHdyCz9oKv6EvZ4rwmvepi3XSz4RfezDjyfzxMLfeaX0p5NFRNf8ON/k5XpZefDEkwB+fn0b91/dJl3CfYY8a2wtQMstH2W5XvQJC2JPgnjw5g4evF5WvFlGnLKPvVwv+UTiaQi//LmCXwn2n2q5Xtbzn1uQfhoW2HOmjj5dWb/4sg0MexV9aLW0/AVNOvqrDXpLLQAAAABJRU5ErkJggg==" height="32px" width="32px">
	<div>
		<span>Install With</span>
		Provisions Mod Manager
	</div>
</a>
<style>
	.provisionsLink {
		--blur: blur(5px);
		--opacity: 0.5;
		background-color: rgb(11 11 11 / var(--opacity));
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 800;
		color: lightgreen;
		padding: 0.5rem;
		backdrop-filter: var(--blur);
		display: inline-flex;
		text-decoration: none;
		flex-flow: row nowrap;
		gap: 0.5rem;
		& img {
			align-self: center;
		}
		& span {
			color: yellow;
			font-size: 0.75rem;
			font-weight: 500;
		}
		&:hover, &:focus-visible {
			--opacity: 1;
		}
		& div {
			display: inline-flex;
			flex-flow: column nowrap;
		}
	}
</style>
```

