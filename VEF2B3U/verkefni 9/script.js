"use strict";
let counter = 0; 
let right =0;

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



function populate() 
{
	if (counter === 3) 
	{
		document.getElementById('question').innerHTML = "Thank you for the quiz and you got "+right+"/"+counter;
	}
	else
	{
		document.getElementById('question').innerHTML = questions[counter].question;
		document.getElementById('number').innerHTML = counter + 1;
		for ( var i = 0; i < questions[counter].answers.length; i++) 
		{
			document.getElementById('options').innerHTML += '<button id="btn'+i+'">'+questions[counter].answers[i]+'</button>';
		}
		run();
	}
}


function run()	
{

$(document).ready(function(){
	$("button").mouseover(function(){
        $(this).css("background-color", "red");
    });
    $("button").mouseout(function(){
        $(this).css("background-color", "#778897");
    });
    $("button").click(function(){   
        if (questions[counter].correct === $(this).text()) {
        	//window.alert("correct");
        	right++;
        }
        else {
        	//window.alert("wrong");
        	
        }

        document.getElementById('options').innerHTML ="";
        counter++;
    
		
		populate();
		
    });

});
}


populate();