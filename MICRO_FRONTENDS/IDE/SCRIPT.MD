# CFG Script Version 1
Scripting for Source Engine CFG files. Compiled only, no runtime scripts.
This is for version 1 of the scripting system.
Version system is as folllows:

- Simple number, no dots. No Semver.
- Odd numbers are for beta versions. These are unstable, but can contain behaviour breaking changes.
- Even numbers are for stable versions. Nothing can change the behaviour of the outputted code once the version specification has been finalized. Updates that fix bugs are still accepted. Bug fixes do not need a version bump, but should still be pushed to the next version for testing first, then can be backported.

All functions must be inside a comment, a comment is a line that starts with //. All functions must also start with an @ sign, to distinguish from regular comments.

Some characters have special meaning. To escape, use backslash \\.

Examples:
- @ - Denotes the start of function.
- \ - Escape character, use to disable any other special character.

DEV NOTE: When compiling text used to create output, use the same file, and use `//>`, followed by the text. Use `//@end` to mark the end of outputted text.


Example:

- The following source:

    ```cfg
    //@version(1)
    alias "hello" "echo Hello World"
    //@for (1, 1, 10)
    //@eval("echo " + index)
    hello
    //@end
    bind space +jump
    ```
    Compiles to:
    ```cfg
    //@compiled(1)
    alias "Hello" "echo Hello World"
    //@for (1, 1, 5)
    //>@eval("echo " + index)
    //>hello
    echo 1
    hello
    echo 2
    hello
    echo 3
    hello
    echo 4
    hello
    echo 5
    hello
    //@end
    bind space +jump
    ```

TODO: Make sure every single function and dynamic variable as a real working example that can be copy/pasted.

## Compiled data

Source code is stored first, all as a comment. Output is then placed after.

`//@-->`
This is the start of the compiled document. TODO: add file hash? one each of the source and output?

## Functions

`//@version (1)`
This is required to be at the top of the .cfg file before any other function, otherwise scripting will not be enabled.
DEV NOTE: When compiling, replace with `//@compiled(1)`. Only decompile scripts that start with this function. Use the version number to run the appropriate decompiler version.

`//@function (name, [...arguments])`
Denotes the following content is part of a reusable piece of code, up until the next `//@end`.
Created function can then be called where ever statements are evaluated.
You cannot redefine functions. As such, any functions listed here cannot be used for anything else.

`//@return (statement)`
Returns the evaluated statement. If in a function. Acts as an early `//@end`.

`//@end`
Denotes the end of a multi-line function.
TODO: Should eval be renamed to print or echo?
`//@eval(statement)`

Example:
- `//@eval(1+2)` 3
- `//@eval("Hello" + get(version))` Hello1

`//@if (statement, [...more])`
If all arguments are true, runs the next part of the code up until `//@end` or `//@else`.
Can include multiple comparisions.
	DEV NOTE: The if function doesn't actually compare anything, only checks if all given arguments are true. The compiler translates the statements into true or false before running the function.
Operators are as follows:

- `=` - Compare equality.
- `!=` - Compare inequality.
- `>` - Compare if greater than.
- `<` - Compare if less than.
- `>=` - Compare if greater than or equals.
- `<=` - Compare if less than or equals.

Example:
- `//@if ("Green" = "Red")` False
- `//@if (1 < 2, 15 > 10)` True

`//@else`
If the previous if statement was false, run the code here up until the next `//@end`.
TODO: Should we allow more than one function on the same line?

TODO: Discard current variable implementation. Use `//@name=value`.
		Arrays: `//@name=[value1,value2]`
		Access Arrays: `name:position`
		New function: `//@length` for getting array length.
		Functions use the same scope. Cannot create a variable if a function with the same name exists.
		How do we handle scope? If exists, overwrite? Take a page from Batch scripting with `setlocal`? `//@scope`?

### Variables

Set a variable with `//@name=value`.

- The name can be anything you want, so long as it isn’t already a function or a dynamic variable. Values can strings, numbers or arrays.

- Create arrays by surrounding values with square brackets: `//@array=["value one", "value two"]`.

- Array items can be accessed with a colon followed by a number, after the variable name: `//@if ( array:1 == "value one")`.

- Arrays start at 1.

- Text after the colon is evaluated, allowing programmable access to an array.
	```cfg
	//@team=["BLU", "RED", "YLW", "GRN"]
	//@for (1, 1, length("team"))
	//	@if (team:index == "RED")
	//		echo "RED RULES!"
	//	@else
	//		@if (team:index == "BLU")
	//			echo "BLU SUCKS!"
	//		@else
	//			@eval("echo \"Never heard of" + team:index + "!\"")
	//		@end
	//	@end
	//@end
	```

`//@delete (name)`
Delete a variable.

`//@exists (name)`
Returns true if a variable exists.

`//@const (name, value, [...more])`
Defines a constant.
Constants can be deleted with `//@delete`.

`//@for (start, step, end)`
Implicitly sets a variable called index. Index is an array. If you nest a for loop in a for loop, the second position of the array will be the index of the second for loop.
Will run the next part of the code up until the next `//@end`, `//@break` or `//@continue`

Example:
- `//@for (1, 1, 10)` This will loop more 10 times.
- `//@for (0, -1, -15)` This will loop 16 times. Note that we're using negatives. This allows us to have index as a negative for use in our script.

`//@break`
Breaks out of a loop early.

`//@continue`
Stop executing the current iteration of loop.

`//@switch (statement)`
Fancy if else statement. Enables `@case (statement, [...more])`. If given an array, `//@case` will run if a matching value exists anywhere in the array.
`//@case (statement, [...more])`
If the statement matches the previous switch statement, run the code up until the next `//@case` or `//@end`.
Will run the code if any of the statements passed to case match the switch statement.
Can also process arrays.
`//@else` Can be used if none of the cases return true.

Example:
```cfg
//@switch (get(game))
	// TODO: Switch to different variable system?
	//@case ("tf2", "tf2c", "pf2", "of")
		echo Welcome Team Fortress 2 player!
	//@case ("csgo", "css", "cs1.6")
		echo Hello, Counter Strike player!
	//@else
		echo Hello, Source Engine player! I don't know what game you're playing!
//@end
```

`//@widescreen`
Runs the next part of code if the screen is widescreen up until `//@end` or `//@else`.
For more control, look at the width, height, and ratio dynamic variables.

`//@emit(text, r, g, b)`
Automatically creates a closed caption on compile, and then emits it when this section of code it called.
Accepts an array, with the first position being a string, while the other three accepts numbers. If no colour values are given, defaults to white (255, 255, 255).

## Mod Functions

If a script is run under a mod's install step, these functions are also available.

`//@copy (file, path)`
Grabs a file from the mod archive and copies to somewhere else into the archive. Cannot escape outside of mod root.
Paths must be absolute.
Prefix path with "v:" to access virtual files created via `//@write`.
Use with dynamic variables and an if function to enable special features.
When installing, all original files are preserved. So when changing a mod’s installed sub mods, the install script will always have a clean start to work with. This means you can overwrite files. See metadata.json `exlucde` property to exclude files/folders from being installed. These files will not be a part of the mod installation, but are still accessible to the install script, allowing the use of `//@copy`, to put files where they would be a part of the install.

`//@write (file, text, [line])`
Write out to a virtual file. Can then be written to disk via `//@copy`.
DEV NOTE: Use [Vinyl](https://www.npmjs.com/package/vinyl)?

`//@submod (id)`
Runs the next part of code if the submod is installed, up until `//@end` or `//@else`.
ID should be the ID defined in metadata.json.

`//@submodswitch`
See `//@switch`. Unlike switch, all statements in `//@case` must be true. Use the dynamic variable mods_sub together with the normal switch function if you need the other behaviour. Statements in case should be submod IDs.

Example:

```
//@submodswitch
//@case ("my-mod.widescreen")
//@copy ("widescreen/hud.res", "hud/hud.res")
//@case ("my-mod.alternate-design")
//@copy ("alt/hud_image.vtf", "hud/hud_image.vtf")
//@end
```



`//@mod (id)`
Runs the next part of code if an external mod is installed, up until `//@end` or `//@else`.
Used for enabling compatibility with other mods.
ID should be the ID defined in metadata.json.

`//@import (cfg file)`
Grabs all the text from a CFG file, and appends just after this function. Only can get CFG files supplied with your mod, or sub mods. TODO: Should we allow imports outside of install scripts? Security concerns?

`//@install (submod id)`
Automatically installs a sub mod, supressing user confirmation. Use in combo with dynamic variables and other functions.
Example:

```
//@widescreen
//@install (my-mod.widescreen)
//@end
```
For example, you could use `//@mod ("peer.mod")` to install a submod that enables compatibility between your mod and theirs.

`//@lang(default)`
See `//@switch`. Use `//@case`, can only take one argument, a iso-639-1 code. `//@else` is not used.
`default` is also a `iso-639-1` code.

`//@input(type, label, options, default, [image])`
Runs the next part of the code if input is set to true, up until `//@end` or `//@else`.
TODO: How to handle input? Should we collect all input functions for execution until the rest of the script has been parsed?
Input types are as follows:

- `checkbox` - Options are as follows: `[text]`
- `radio` - Options are as follows: `[text, …more]`. Each one is a separate option. Default should be a number corresponding to the selected option. Implicitly sets the variable `index`.
- `color` or `colour` - Options are as follows: `[return type]`. Return types are `hex`, `rgb`, or `hsl`. Implicitly sets the variable `index` with an array.

Could use `//@lang` to populate some variables for using in `text`. Text is what will be displayed to a user upon install.
Image is a path to a image file in the mod archive. This is displayed next to the options.

`//@error(text)`
Fail the installation of the mod. This will be ignored if not in an `//@if`, `//@switch`, `//@submod`, or `//@submodswitch` function.

## Dynamic Variables

Several pre-defined variables are available globally. They cannot be set or deleted.
TODO: How to populate variables? If compiling thru CLI, environment variables? If thru API, should caller be required to pass an object with filled-in variables?
DEV NOTE: Variables with an asterisk must be filled in by the host, otherwise they will be blank strings.

- `version`* - returns an version number of the scripting environment. This is set via the `//@version` function.
- `time`* - Returns the current time at compile time. Will be formated according to compiler settings.
- `date`* - Returns the current date at compile time. Will be formated according to compiler settings.
- `unixtime` - Returns an integer of the current time.
- `game` - Returns a string of which game we're compiling for. Expected values are "tf2", "tf2c", "pf2", "of", "tf2v", "tf", "tfc", "csgo", "css", "cs2", "cs1.6", "dod", "l4d", "l4d2", "dota2", "portal", "portal2", "portal:mel", "portal:reloaded", "portal:time", "portal:tag", "fof", "titan", "titan2", "apex", "doi", "alienswarm", "hl2", "hl", "hl:dm", "blackmesa", "stanley", "gmod" and "unknown". More may be added. If more are added, version will not be changed.
- `error` - Returns a string of the why the last function failed. Unused as of version 1 of the scripting system, the script won't compile if there's an error.
- `file`* - Returns a string of the CFG file name. If a cfg file is imported, this may be different from what you expect.
- `path`* - Returns a string of the CFG file path, up to the script root; typically the cfg folder, or the custom folder. Maps may also be the script root.
- `bind_key`* - Returns a string of what's currently bound to that key. Replace "key" with a valid key binding. These variables can change depending on where in the compilation the variable is accessed. Remember, this is not runtime scripting, these cannot be accessed while playing. Let's say you bind a key in autoexec.cfg, and access this variable, then later, you bind a different command in a engineer.cfg, each time, the string will be different. These variables first inherit from config.cfg. (or config_default.cfg if config.cfg doesn't exist.), Then autoexec.cfg, then server.cfg, map cfgs, then class cfgs, in that order. Using the `exec` command or the `//@import` function will override this order.
	TODO: Add named array items. EX: `//@name:"named position"="Value"`
- `pyrovision`* - Returns an array of maps that currently have pyrovision enabled.
- `maps`* - Returns an array of maps currently installed.
- `maps_workshop`* - Returns an array of workshop maps currently installed.
- `maps_local`* - Returns an array of maps that are not part of game installation.
- `maps_download`* - Returns an array of maps that have been downloaded from servers.
- `cfg`* - Returns an array of every cfg that has been compiled so far, starting with autoexec.cfg and whatever it imports, then class files, then map files. NOTE: This may not be available in version 1, depending on complexity.
- `mods`* - Returns an array of names of currently installed mods.
- `mods_id`* - Returns an array of mod IDs of currently installed mods. Replace Id with number to get the source of the mod, if any.
- `mod_sub`* - If script is a part of a mod, returns an array of installed sub mods.
- `width`* - Returns a number of the width of the screen, in pixels.
- `height`* - Returns a number of the height of the screen, in pixels.
- `ratio`* - Returns a string of the screen resolution ratio. Typically 16:9, 16:10, 4:3, 21:9.
- `accent`* - Returns the accent from the OS, in an array, split into different formats. In order, the values are R, G, B, H, S, L, plus hexadecimal of both. In total, 12 values.
- `scheme`* - Returns "dark" or "light" from OS.
- `install` Returns true if the script is being run as a mod’s install step. Use with the [mod functions](#Mod Functions) above. This allows an install script to also be used as a regular script. (Usable while running the game.)





One more thing, if for whatever reason this is ever integrated into the Source Engine, you shouldn’t need to prefix everything with //. We do this now because we don’t want the Source Engine to run all this non-sense “code”. We want this so we can integrate all the code into a single file, rather than having a source code file and a compiled file. Think of it like progressive enhancement.
