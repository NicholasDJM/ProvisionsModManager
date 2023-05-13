To contribute to this project, you must have at minimum, all of the below installed:
 - [VS Code](https://code.visualstudio.com)
 - "ESLint" Extension ([dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint))
 - "Stylelint Plus" Extension ([hex-ci.stylelint-plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus))
 - "Svelte" Extension ([svelte.svelte-vscode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode))
 - "Tauri" Extension ([tauri-apps.tauri-vscode](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode))
 - "Fluent" Extension ([macabeus.vscode-fluent](https://marketplace.visualstudio.com/items?itemName=macabeus.vscode-fluent))
 - [NodeJs](https://nodejs.org)
 - [Rust](https://rust-lang.org)

Additionally, you must set the following settings:
 - For the "ESlint" VS Code Extension:
	```json
	"eslint.validate": [
		"javascript",
		"typescript",
		"svelte"
	]
	```
To set these settings: Press CTRL + COMMA (COMMAND + COMMA on MacOS), then search for the setting (Ex: `eslint.validate`), and edit the value.

Additional reccomended extensions are as follows:
 - "Error Lens" VS Code Extension ([usernamehw.errorlens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens))
 - "Todo Tree" VS Code Extension ([Gruntfuggly.todo-tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree))
 - "Abracadabra, refactor this!" VS Code Extension ([nicoespeon.abracadabra](https://marketplace.visualstudio.com/items?itemName=nicoespeon.abracadabra))
 - "CSS Flexbox Cheatsheet" VS Code Extension ([dzhavat.css-flexbox-cheatsheet](https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet))

To install VS Code Extensions:
 - In VS Code:
 	1. Press `CTRL + SHIFT + X` or `COMMAND + SHIFT + X` on MacOS
		- Or, click the Setting Cog in the bottom corner of the window, and click on Extensions.
		- Or, Press `CTRL + SHIFT + P` or `COMMAND + SHIFT + P` on MacOS, and type in `install` and select `Extensions: Install Extensions`
		- Or, Press `CTRL + SHIFT + P` or `COMMAND + SHIFT + P` on MacOS, then press backspace, and then type in `ext install`
		- Or, Open the View menu (`ALT + V`), and click on Extensions.
 	2. Copy and paste the extension ID into the search bar. (Ex: `dbaeumer.vscode-eslint`)
 - On the command line:
	1. Open a terminal
		- On Windows: Press `WINDOWS + R`, then type `CMD`, then press `ENTER`
	2. Type in `code --install-extension` followed by an Extension ID. (Ex: `code --install-extension dbaeumer.vscode-eslint`)