let nativeMessage = require("chrome-native-messaging"),
	fs = require("node:fs");

function messageHandler(message, push, done) {
	switch (message[0]) {
		case "install": {
			fs.appendFile("tfmod.command.install.txt", message[1] + "," + message[2], error => {
				if (error) {
					push(["Failed to write file: " + error, message]);
				} else {
					push(["Install command sent.", message]);
				}
			});
			break;
		}
		default: {
			push(["Invalid command.", message]);
		}
	}
	done();
}

process.stdin
	.pipe(new nativeMessage.Input())
	.pipe(new nativeMessage.Transform(messageHandler))
	.pipe(new nativeMessage.Output())
	.pipe(process.stdout);
