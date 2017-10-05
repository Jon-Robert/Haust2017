"use strict";

var startItem = document.getElementsByTagName('div')[0];
startItem.setAttribute('class','active'); 

/*
var removeEl = document.getElementsByTagName('div')[2];
//window.console.log(removeEl);
var containerEl = document.getElementsByTagName('main')[0];
//window.console.log(containerEl);
containerEl.removeChild(removeEl);
//window.console.log(containerEl);
*/	

var changeEl = document.getElementsByTagName('div')[1];
var elText = changeEl.firstChild.nodeValue;
elText = elText.replace('Gunnar', 'Jakob');
changeEl.firstChild.nodeValue = elText;


var firstItem = document.getElementsByTagName('div')[0];
var attr = firstItem.getAttribute('class');
var el = document.getElementById('scriptResults');
el.innerHTML = '<p> The first item has a class name: '+attr+'</p>';




// þetta er lína 1
var firstLine = document.createElement('main');
firstLine.setAttribute('id','mainThing');
document.body.appendChild(firstLine);
// þetta er lína 2
var newEl = document.createElement('div');
newEl.setAttribute('class','pizza'); 
var position = document.getElementsByTagName('main')[1];
position.appendChild(newEl);
// þetta er lína 3
var newElName = document.createElement('div');
newElName.setAttribute('class','pizzaName'); 
var nameText = document.createTextNode('Pizza with tons of pepperoni');
newElName.appendChild(nameText);
var secondPosition = document.getElementsByTagName('div')[4];
secondPosition.appendChild(newElName);
// þetta er lína 4
var newElSize = document.createElement('div');
newElSize.setAttribute('class','size'); 
var sizeText = document.createTextNode('L');
newElSize.appendChild(sizeText);
secondPosition.appendChild(newElSize);
// þetta er lína 5
var newElPrice = document.createElement('div');
newElPrice.setAttribute('class','price'); 
var priceText = document.createTextNode('2000');
newElPrice.appendChild(priceText);
secondPosition.appendChild(newElPrice);
// þetta er lína 6
var newElClass = document.createElement('div');
newEl.setAttribute('class','toppingContainer'); 
secondPosition.appendChild(newElClass);
// þetta er lína 7

var names =['pepperoni ','pepperoni ','Cheddar'];
var thirdPosition = document.getElementsByTagName('div')[8];
for (var i = 0; i < names.length; i++) {
	var newElInnerClass = document.createElement('span');
	newElInnerClass.setAttribute('class','topping'); 
	var toppingText = document.createTextNode(names[i]);
	newElInnerClass.appendChild(toppingText);
	thirdPosition.appendChild(newElInnerClass);	
}





/*

XSS  er widespread vulnerability sem hefur áhrif á  marga vef applications 
hættan á bak við XSS er að það leyfir attacker að setja inn content  inn á vefsíðu 
og modify hverning það er sýnt, og force fórnalamb að runna kóða sem attacker 
gaf við loading á síðunni.

*/
















