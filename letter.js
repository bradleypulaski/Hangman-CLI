function letter() {
	this.name;
	this.visible = false;
	this.reveal = function() {
		this.visible = true;
	}
}

module.exports = letter;