"use strict";




function Cell(i, j, w) {
	this.i = i;
	this.j = j;
	this.x = i*w; // reikna pixel location
	this.y = j*w; // reikna pixel location
	this.w = w;
	//  total varible fyrir neighbur í countbees
	this.neighborCount = 0;
	// hvort það er bee í reitinum
	this.bee = false;
	// að sýna ekki innihaldið á reitinum
	this.revealed = false;
}


// prototype sýna 
Cell.prototype.show = function() {
	stroke(0);
	noFill();
	// bý til hring 
	rect(this.x, this.y, this.w, this.w);
	// reiturinn er sýndur 
	if (this.revealed) {
		// ef það er bee 
		if (this.bee) {
			//læt bee vera ljósgrár
			fill(200);
			// teikna ég hring til að segja að það er bee 
			ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
		} else {
			// annars teikna ljósgráan kassa 
			fill(200);
			rect(this.x, this.y, this.w, this.w);
			// aðeins skrifa ef nágranni er meira en 0
			if (this.neighborCount > 0) {	
				// text í center á reiti
				textAlign(CENTER);
				fill(0);
				// skrifa fjöldi nágranna og laga staðsetningu
				text(this.neighborCount, this.x +this.w * 0.5, this.y + this.w - 6);
			}
		}
	}
	
};

// telja nágranna
Cell.prototype.countBees = function() {
	// ef það er bee þá skila -1
	if (this.bee) {
		this.neighborCount = -1;
		return;
	}
	var total = 0;
	// fer yfir alla nágranna
	for (var xoff = -1; xoff <= 1; xoff++) {
		for (var yoff = -1; yoff <=  1; yoff++) {
			var i = this.i + xoff;
			var j = this.j + yoff;
			// fyrir offset ef hann er 0,0 það og hann tékkar hvort það er reitur uppi og til hliðar ef ekki það ekkert ef það er þá heldur hann áfram / offset
			if (i > -1 && i < cols && j > -1 && j < rows) {
				// þetta er allir nágrannar sem ég vill skoða
				var neighbor = grid[i][j];
				// ef nágranni hefur bee á að bæta total
				if (neighbor.bee) {
					total++;
				}
			}	
		}	
	}
	// skila total
	this.neighborCount = total;
};
// hvort innihald þessa cell punktur
Cell.prototype.contains = function(x, y) {
	// er x og y á milli x1 og x2 og y1 og y2 
	// og skila 
	return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
};
// sýna reitinn
Cell.prototype.reveal = function() {
	//geri reitinn sýnilegann
	this.revealed = true;
	// ef það er enginn nágrannar
	if (this.neighborCount == 0) {
		// starta function floodfill
		this.floodFill();

	}
};

// flooofill function
Cell.prototype.floodFill = function() {
	// fer yfir alla nágranna
	for (var xoff = -1; xoff <= 1; xoff++) {
		for (var yoff = -1; yoff <=  1; yoff++) {
			var i = this.i + xoff;
			var j = this.j + yoff;
			// fyrir offset ef hann er 0,0 það og hann tékkar hvort það er reitur uppi og til hliðar ef ekki það ekkert ef það er þá heldur hann áfram / offset
			if (i > -1 && i < cols && j > -1 && j < rows) {
				var neighbor = grid[i][j];
				// ef neighbor er ekki bee og ekki hefur verið sýnt annars infitive loop í gangi
				if (!neighbor.bee && !neighbor.revealed) {
					// sýna það
					neighbor.reveal();
				}
			}	
		}	
	}
};


