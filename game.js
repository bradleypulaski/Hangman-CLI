var word = require("./word.js");
var fs = require("fs");

function game() {
	this.remainingGuesses = 10;
	this.wins = 0;
	this.losses = 0;
	this.word = new word();
	this.chosen = [];

	this.win = function() {
		this.wins++;
		console.log("You Win!");
		this.load();
	}

	this.lose = function() {
		this.losses++;
		console.log("You Lose!");
		this.load();
	}

	this.guess = function(letter) {
		var correct = false;
		this.chosen.push(letter);
		for (var key in this.word.letters) {
			var l = this.word.letters[key];
			if (!l.visible && letter == l.name) {
				correct = true;
				l.reveal();
			}
		}
		if (correct) {

		} else {
			this.remainingGuesses--;
		}
		this.check();
		this.serve();
	}

	this.check = function() {
		if (this.remainingGuesses <= 0) {
			this.lose();
		} else {
			var allvisible = this.finishedWord();
			if (allvisible) {
				this.win();
			}
		}
	}

	this.finishedWord = function() {
		var allvisible = true;
		for (var key in this.word.letters) {
			var l = this.word.letters[key];
			if (!l.visible) {
				allvisible = false;
 			}
		}
		return allvisible;
	}

	this.serve = function() {
		var w = this.word;
		var build;
		for(var key in w.letters) {

			var l = w.letters[key];
			if (typeof l !== 'undefined') {
	 			if (l.visible) {
					build += l.name + " ";
				} else {
					build += "_ ";
				}
			}
		}
		build = build.replace("undefined", "");
		console.log("Wins: " + this.wins);
		console.log("Losses: " + this.losses);
		console.log("Chosen Letters: " + this.chosen.join(","));
		console.log("Remaining Guesses: " + this.remainingGuesses);
		console.log(build);
	}

	this.load = function() {
		this.remainingGuesses = 10;
		this.chosen = [];
		var content = fs.readFileSync("words.json");
		var json = JSON.parse(content);
		var rng = this.lrng(json.length);
		var word = json[rng];
 		this.word.reset();
		this.word.init(word);
	}

	this.lrng = function(max) {
		var random = Math.floor(Math.random() * max) + 1;
		return random - 1; 
	}


}

module.exports = game;