# CFG Script Version 2

Greatly simplified syntax over version 1.
See version 1 for list of functions.

Script source is saved at the bottom of the output, as comments, thus the file has both the compiled output and the source code in the same file.
Starts with `//@version(2)`

All lines are interpreted, encase in quotes to turn off.
- `Echo \"1 + 1\"` An escaped quotation. The `1 + 1` will still be interpreted.
- `cl_hud_minmode $enableMinMode` A variable's contents replaces the variable name at compile.

Special characters can be escaped with backslash. `\`

Function calls start with `@` and ends with `()`, and can begin in a line. If a function does not take any arguments, it ends with a space.
Some functions will also start a implicit block. Blocks are only run if the function determines it should run. For the if function, if the statement inside it's `()` returns true.
- `@if (1 + 1 == 2)` An if function, creates a block, up until `@else` or `@end`.
- `@widescreen` Creates a block, up until `@end`.

Variables can be defined with `$` and `=`. Variable names must be alphanumeric, and can also contain `_`, `+`, `-`, and `.`.
Variables contents can be one of:
- `$array = ["Complex", "Array", true, false, 1, 2 ,3]` An array.
- `$number = 1` A number.
- `$boolean = true` A boolean, (true or false).
- `$keyedArray = ["Named": "Array"]` A keyed array.
- `$string = "Hello World"` A non interpreted string.

Arrays can be accessed with `[]`: `$array[3]` Will return the third item in the array. If the contents in the brackets is not a number, it will instead look for a matching key.
To use a variable, simply reference it: `@if ($boolean == true)`.


