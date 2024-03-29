```mermaid
flowchart TD
	classDef default stroke:#000

	bootstrap{{Bootstrapper}}
		style bootstrap fill:#0f0
	subgraph browser[Browser]
		 extension[Browser Extension] -- Native Host API --> bridge[Extension Bridge]
	end
	subgraph app[Application]
		service[Background Service]
		subgraph ui[Frontend]
			frontend[App]
			library([Custom Libraries])
				style library fill:#fff
			micro([Micro Frontends])
				style micro fill:#fff,color:#000
		end
	end


	update(Is there an update available?)
		style update fill:#0af,color:#fff
	doUpdate[Download and Install]
	start([Start service and frontend])

	bootstrap --> update -- Yes --> doUpdate --> start
	update -- No --> start

	start --> app
	service <-- Web Socket--> frontend
	service <-- Web Socket ----> bridge

	library & micro --- frontend
```
- **Bootstrapper** - This will be the first part of the program package the user will use, but will not have any interface, other than a few command line switches. Will be written in Go. Will act as an installer on first boot, as well as an updater. This will be necessary for a Steam release. This allows the Service program to gracefully shutdown before updating, similar to what Wallpaper Engine does. This program will also allow switching to different branches of the Provisions Mod Loader, like a beta or canary build.
- **Provisions Mod Manager Frontend** - This is the primary program the user will interact with. I am currently unsure if I want to continue building with [Tauri](https://tauri.app/) (Rust backend), as I can’t wrap my head around some of it’s concepts; at least not in any timely manner. I’ve found [Wails](https://wails.io/) (Go backend) as a potential replacement. Neutralino.js was also considered, but has much less features currently, and has a JavaScript backend, but I’ve opted not to use it and Electron as having a JavaScript backend is slow. Electron’s also quite heavy in terms of file size, considering it packs in an entire Node runtime and Chromium.
	- The frontend UI will be [Svelte](https://svelte.dev), as I find it extremely easy to use. If this didn’t exist, I might have considered Vue.
	- Wails is not a perfect contender, as it doesn’t seem it has the same amount of security as Tauri. Tauri as explicit file path permissions that must be defined at compile time. If it’s not defined, we can’t access it, making it much more secure.
- **Background Service** - This will be the program that actually manages all of the files, as well as communicates to other parts of Provisions via web sockets. This service will handle downloading mods, organizing mod files according to user preferences (enabled/disabled, load order, utility functions, etc.), and a web socket server for communicating between the user facing frontend, and the web browser extension.
- **Extension Bridge** - This program will act as a translator for the background service, and the actual web extension. This program needs to be stateless, other than a few initialization settings, such as the web socket port that the service is configured to use. This program acts like a CLI for the web browser to use, connecting to the background service via web sockets, sending commands to actually enable one click mod installations.
	- This programs lifetime will be completely managed by the web browser, so it can not do anything that requires state, as it can be terminated at any time, like when the user closes the browser. The only exception is which port to connect to the web socket server on; this can be initialized on program start up with a saved variable in the extension’s storage.
	- The extension could also enable toggles and an uninstall button on webpages. See [Gnome Shell Extensions](https://extensions.gnome.org/) website for an example.
- **Web Extension** - A small program (or programs - one for each type of browser, Chromium versus Firefox), that will have to be installed in the user’s browser to enable one-click installation buttons.
- **Library** - Two separate libraries, one written in Go, the other in JavaScript, that will be used by the background service. The JavaScript version will not be used, but will be built for completeness sake. (Meaning this is low priority) These will handle VPK and other file formats. These also may use other developers’ works. Potential candidates: [VPK2 (JavaScript)](https://www.npmjs.com/package/vpk2), [VPK (Go)](https://pkg.go.dev/github.com/galaco/vpk2). These packages will help, but it’s not enough. In order to enable large performance increases, we need to cache results, as well as create files that we can simply swap in and out, rather than recreating entire VPK archives when a user enable or disables a mod. This means creating VPK archives based on mods, and *not* optimizing for file compactness.
	- All files will merged into one single VPK archive, “provisions_dir.vpk”, and its subsequent numbered archives. This also should have a knock on effect of never needing to copy the localization files into the mod archive, to fix a bug when you have too many mods loaded at once.
	- I also have a theory that I can embed metadata in VPK archives, and simply not reference it in the VPK directory.
- **Micro-frontends** - These will be the supplemental utility functions inside the frontend, such as the Scripting IDE, or the Pyroland manager. These should operate completely independent of the rest of the project, and export themselves as components; probably in Svelte, as this the the UI framework that will be used on the frontend.

