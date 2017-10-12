"use strict";

function Questions(question,answers,correct)
{
    this.question =question;
    this.answers = answers;
    this.correct = correct;
}
var questions =[
	new Questions("What continent is Iceland",["Europe","North-America","Asia","Australia"],"Europe"),
	new Questions("Who is the Icelandic Prime Minister",["Sigmundur Davíð","Bjarni Ben","Geir H Horde","No Body"],"No Body"),
	new Questions("Is Iceland a Island",["Yeas","NO"],"Yeas")

];

var random = Math.floor(Math.random() * questions.length);   

(function () 
{
	document.getElementById('question').innerHTML = questions[random].question;
	for ( var i = 0; i < questions[random].answers.length; i++) {
		document.getElementById('options').innerHTML += '<button id="btn'+i+'">'+questions[random].answers[i]+'</button>';
	}
}());

document.Body.addEventListener("click",function(event){
	if (event.target.nodeName.toLowerCase() == "button"){window.console.log("clicked",event.target.textContent);}
},false);