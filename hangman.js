var inquirer = require("inquirer");
var game = require("./game.js");

var hangman = new game();

hangman.load();
hangman.serve();

function isLetter(str) {
	var isletter = false;
    return str.length === 1 && str.match(/[a-z]/i);
}


function inquire() {

inquirer
	.prompt([
	{
		type: "input",
		message: "Enter a single letter",
		name: "letter"

	}

		]).then(function(result){

			if (isLetter(result.letter)) {
				hangman.guess(result.letter);
			}
			else {
				console.log("Please choose a letter!");
			}
			inquire();

	});


}

inquire();