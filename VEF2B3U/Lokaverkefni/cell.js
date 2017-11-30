"use strict";




function Cell(x, y, w) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.bee = true;
	this.revealed = true;
}



Cell.prototype.show = function() {
	stroke(0);
	noFill();
	rect(this.x, this.y, this.w, this.w);
	if (this.revealed) {
		if (this.bee) {
			ellipse(this.x + this.w* 0.5, this.y + this.w* 0.5, this.w* 0.5);
		}
	}
};