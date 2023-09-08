Commands for the web socket server to be built into the TFMOD_SERVICE. See stack.md.
All commands are sent as JSON in the following manner:
```json
{
	"command": "read",
	"length": "64",
	"start": "123"
}
```
```json
{
	"command": "write",
	"data": [
		"1",
		"2",
		"3"
	],
	"append": true
}
```
- `read <absolute file path: string> [length: number = -1] [start: number = 0]`
		Returns either file data up to "length", starting at byte "start", `or returns an error: No permission, doesn't exist, unknown.
- `write <absolute file path: string> <data: uint8array> [append: boolean = false]`
		Returns success or error: no permission, unknown.
- `exists <absolute file path: string>`
	Returns a boolean or error: no permission, unknown.
- `install <source: number> <id: number>`
		Returns success, as well as file hash, or error: failed to download, failed to save, invalid source, unknown.
		May also return extra data on why it failed.
		Source is number starting from -1:
		`-1`: Local Download Folder
		`0`: GameBanana
		`1`: Mods.tf
		`2`: TF2Maps.net
- `uninstall <file hash: string>`
		Returns success or error: unknown.
- `list [source: string, <id:string>]`
		Returns an array of objects of file hashes, names, version numbers, priority, authors, enable status, and source location and id. Will never return an error, only an empty array.
		If source and id are provided, only return that mod's info.
- `init <hashed password: string>`
		Required before using any other command. Returns success, or nothing on error. No other command will return anything if used before this command is sent.
- `enable <file hash: string>`
- `disable <file hash: string>`
		Both deal with enable/disabling mods. Returns success.
- `status [subscribe: boolean]`
		Returns progress of various commands, particularly (un)installation.
	If subscribing, web socket server may send status updates.
- `quit`
		Returns only on error: unknown.
- `pyrovision <sub command: string, [file: string]>`
	- `pyrovision enable <map file name>`
	- `pyrovision disable <map file name>`
	- `pyrovision list`
	- `pyrovision add <map file name>`
	- `pyrovision scan`
	- `pyrovision predict`
	```json
	{
		"command": "pyrovision enable",
		"file": "2fort.bsp"
	}
	```
		`scan` looks for all maps that have not been added.
		`predict` looks inside map files, extracts texture names, and compares them against vanilla and modded files to see if they have pyrovision equivalents.
- `sound [enable: boolean]`
	Clears sound cache files. Returns success or error: unkwown.
	Enable lets the TFMOD_SERVICE clear sound caches after game quit.