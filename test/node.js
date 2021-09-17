var Japt = require("../src/japt-interpreter");
var fs = require("fs");

Japt.run(
	fs.readFileSync(process.argv[2], "utf-8"),	// Japt code
	fs.readFileSync(0, "utf-8").split("\n").map(x => `"${x}"`).join("\n"),	// inputs
	false,		// safe mode
	null,		// function run after transpiling
	function (output) { // function run after program runs successfully
		if (Japt.implicit_output) process.stdout.write(String(output));
	},
	function (error) { // function run after program errors
		throw error;
	}
);