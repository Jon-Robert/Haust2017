"use strict";
// tengi p5 library við javascriptið mitt
new p5();

// geri 2darray sem tekur colums og rows
function make2DArray(cols, rows) {
	// by til array sem hefur viss mikið af colums
	var arr = new Array(cols);
	//fyrir hvert colum geri það array með viss mikið af rows
	for (var i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	// skila array
	return arr;
}



// geri varibles
var grid;
var cols;
var rows;
// hver reitur er 20px
var w = 20;
// fjöldi bees
var totalBees = 50;

function setup() {
	// bý til canvas sem er 401px 
	createCanvas(401, 401);
	// tek breidd og deili með reiti/w til að fá x margar cols og rows og floor er til að hafa slétta tölu
	cols = floor(width / w);
	rows = floor(height / w);
	// sem er viss stórt og nota cols og rows varible sem stærðinn
	grid = make2DArray(cols, rows);
	// geri forlykkju sem býr til grid sem er 20 x 20 stórt
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			// bý til hvern reit inni í grid sem sendir gögn í cell function
			grid[i][j] = new Cell(i, j, w);
		}
	}

	// er array
	var options = [];
	// fer í gegnum allt grid
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			// og set alla möguleika staðsetningar inn í það
			options.push([i,j]);
		}
	}
	

	// velja totalbees staðsetningar
  	for (var n = 0; n < totalBees; n++) {
  		// að gefa mér random option
	    var index = floor(random(options.length));
	    //það sem eg er að velja úr option
	    var choice = options[index];
	    // gefur mér x og y staðsetningu
	    var i = choice[0];
	    var j = choice[1];
	    // fjarlægi staðsetningu svo það er ekki enn möguleiki
	    options.splice(index, 1);
	    // geri það að bee með x og y staðsetningu
	    grid[i][j].bee = true;
  	}


  // fer yfir alla reiti og tel hversu marga bee nágranna þeir hafa
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			// function til að telja nágranna 
			grid[i][j].countBees();
		}
	}
	
}
// function leikur lokið
function gameOver() {
	// renn í gegnum allt grid 
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			// sýni allt saman
			grid[i][j].revealed = true;
		}
	}
}

// ýta á mús
function mousePressed() {
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			// tek staðsetningu og athuga hvaða reit ég ýtti á sýni svo rétta reit
			if (grid[i][j].contains(mouseX, mouseY)) {
				// sýni rétta reit sem ýtt var á 
				grid[i][j].reveal();
				// ef það er bee rennur function sem sýnir allt og leikur þá búinn
				if (grid[i][j].bee) {
					gameOver();
				}
			}
		}
	}
}




function draw() {
	// bakgrunnur hvítur
	background(255);
	// sýna hvað er í cells
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j].show();
		}
	}
}



