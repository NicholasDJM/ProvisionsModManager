export function read(line) {
	return {

	}
}

const defaultMemory = {
	functions: {},
	reserved: {
		"if": "",
		"else": "",
		"version": {
			"version": "number"
		},
		"function": {
			"name": "string",
			"...arg": "any"
		},
		"return": {
			"...arg": "any"
		},
		"end": "",
		"switch": ""
	},
	install: {},
	variable: {},
	dynamic: {
		unixtime: new Date.now(),
		game: "unknown",
		install: false
	}
}

function evaluate(line, memory = {}) {
	let completeMemory = {...defaultMemory, ...memory},
		data = line.replace("\t", "");
	if (!new RegExp("^//@").test(data)) throw new Error("Not a valid function.");
	return data;
}

const yes = "//@Hello",
	no = "@Hello";
try {
	console.log(evaluate(yes));
} catch (error) {
	console.error(error);
}
try {
	console.log(evaluate(no));
} catch (error) {
	console.error(error);
}