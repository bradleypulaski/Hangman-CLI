var letter = require("./letter.js");

function word() {
	this.letters = [];
	this.init = function(word) {
		var array = word.split("");

		for(var key in array) {
 			var l = new letter();
			l.name = array[key];
 			this.letters.push(l);
		}
 	}
	this.reset = function() {
		this.letters = [];
	}
}

module.exports = word;