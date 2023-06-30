/* eslint-disable */
/* eslint-enable no-warning-comments */
/* Utilities for CFG files

	Remember: All of this is compiled, none of this is available in-game.

	All processing of lines stops at // or at any point in a function line after a //
		//This is a regular CFG comment.
		//@if $variable == "Hello World" //This is a comment within a function comment.

	Variables start with a dollar sign: $variableName
	Variable key and value are separated with an equals sign: =
	Variables can contain whatever, so long as they are in quotes, and stop once they hit either a double slash // or end of the line.
	Variables not in quotes are invalid, except for:
		$variableName;
		Math symbols like add +, subtract -, divide /, multiply *, modulo %, power of ^, square root _, and factorial !
			Plus, dash, slash, asterisk, percent, caret, underscore, and exclamation mark, respectively.
			Can encase equations in brackets ()
		numbers
		arrays

		Math symbols must have a space between them and the value
		Square root and factorial takes only one paremeter
		Example Math Variables
		//$add = 1 + 2 // 3
		//$subtract = 3 - 2 // 1
		//$divide = 8 / 2 // 4
		//$multiply = 3 * 2 // 6
		//$modulo = 14 % 7 // 0
		//$power = 6 ^ 2 // 36
		//$root = 25 _ // 5
		//$factor = 5 ! // 120

	Variables can also be blank, to be defined later.
		//$nonBlankVariable = "Text"
		//$blankVariable
	Variables that start and end with brackets [] denote an array, a comma seperated list of things.
		To get the length of an array, use #:
		//$array = ["hello", "world"]
		echo Array has #array; items.
	Access array items with $array[number];. Arrays start at one. Negative numbers access the array from the end.
		//$array = ["hello", "world"]
		echo $array[1]; $array[2];
	Can go beyond an array's bounds to add new items
		//$array = ["hello", "world"]
		//$array[3] = "Good morning"
		//@for 1, #array;
		echo $array[$index]
		//@end
	When consuming a variable, end with a semicolon.
	To declare a variable:
		//$key1 = "enter"
		//$key2 = "space"
	To declare a variable with a variable:
		//$keys = [$key1;, $key2;]
	Can access an array variable with a variable:
		//$data = ["hello", "world"]
		//$number = 2
		echo $data[$number;]
	Variable names connot contain a dollar sign or a semicolon.

	Function Declaration:
		Everything past @function and until @end will be interpreted as a callable block of code.
		To call it, add //@functionName to a line along with any required parameters.
		Paremeters are separated by a comma.
		Functions must have a space after their name.
		The first parameter is always the function name, not a variable.
		Variables are scoped. Variables set inside the function cannot be used outside of it.
		To echo out something in the final CFG file, don't comment out the line
		Function variables can have a default. variable = "some text"
		Functions can check if a variable is defined for different actions
		May include other functions.

	Example:
	//@function functionName, keyBind, actions, minusActions
	//@if $minusActions
	bind "+$keyBind" "$actions"
	bind "-$keyBind" "$minusActions"
	@else
	bind "$keyBind" "$actions"
	//@end

	For loop
		Parameters:
		first is the index variable
		second is what the index variable starts as
		third is how many loops. Can only be a positive or negative number
		and fourth is the step size to increment (or decrement) the index
		index variable, start, end, step (can be omitted)
	//@for index, 1, 5, 1
	alias "$index;" "Hello $index;"
	//@end

	Switch Statement:

	//@switch $variable;
	//@case sentry
	build 2 0
	//@case dispenser
	build 0 0
	//@end

	If statement
		includes else statement, runs until end statement, like functions.
		no else if. Just use	//@else
								//@if
		Comparision operators:
			= equals
			~= not equal
			> more than
			< less than
			>= more or equal
			<= less or equal
			~> not more than
			~< not less than
			~<= not less than or equal
			~>= not more than or equal
			~ compare types.
				Types available are: "string", "number", "boolean", "array"
			& combine with next comparison, both comparisons must be true to succeed
			| combine with next comparison, either comparisons can be true to succeed
		If no operator is used, will assume your checking if a variable is not blank.
		true or false can be used if just looking for truthyness.
		You cannot compare two different types. Use ~ to compare types
		If statements are strictly for comparisons. To do math, use a variable declaration.


	//@if $someVariable; = "Hello"
	echo "World"
	//@else
	echo "$someVariable;"
	//@end

	Import statement
	//@import file.cfg
	Allows inlining text from another CFG file.
	Importing happens first, so any variables and function defined there are then available in your script after the import statement.
		//$variable = "Hello"
		echo $variable; // Hello
		//@import file.cfg // This file has a //$variable = "World" inside it
		echo $variable; // World
	WARNING: Care must be taken to not take imports at face value:
		Save an import chain, then if one import statement matches a file name in the chain, refuse to compile.

	Note for compiler:
		When compiling, save input that are echoed out as //>
		Lines that start with //> mean that a line was used to generate the output.
		Add actual echoed lines before the //@end, this way, the compiler knows what is safe to delete when re-opening the CFG file for editing.

		If a line doesn't start with //@, //$, or //>, it's a regular line. // is a regular comment
		In all non comment lines, look for $, read until a semicolon, then replace with any matching variables.
		If you need to output a dollar sign, use two dollar signs $$

	All functions can omit the double slash while editing in an IDE.
		A function call: @someFunction
		Will be turned into //@someFunction inside the CFG file.
		A variable: $hello = "world"
		Turns into: //$hello = "world"
	This allows metadata to be preserved in the same CFG file, as // in a CFG is a real comment, and is ignored by the Source Engine
	Add an extra slash before a function in the final CFG file when commenting out functions.
		//@function in an IDE equals ///@function in the CFG file.
		@function in an IDE still equals //@function in the CFG file.

	Full Example (As if it were imported from GameBanana):
	Source File:

	TODO: Create example script

*/
//TODO: Create validation for compiling CFG files.