"use strict";
let counter = 0; // counts how many cycles I have gone through
let right =0; // counts how many answers were right

function Questions(question,answers,correct)
{
    this.question =question;
    this.answers = answers;
    this.correct = correct;
}
// questions
var questions =[
	new Questions("What continent is Iceland",["Europe","North-America","Asia","Australia"],"Europe"),
	new Questions("Who is the Icelandic Prime Minister",["Sigmundur Davíð","Bjarni Ben","Geir H Horde","No Body"],"No Body"),
	new Questions("Is Iceland a Island",["Yeas","NO"],"Yeas")

];
// function to write out data
function populate() 
{
	if (counter === 3) // if counter has finished 
	{
		// let the user know how many he got right vs the counter
		document.getElementById('question').innerHTML = "Thank you for the quiz and you got "+right+"/"+counter; 
	}
	else // if I have not finished
	{
		// write out data
		document.getElementById('question').innerHTML = questions[counter].question;
		document.getElementById('number').innerHTML = counter + 1;
		for ( var i = 0; i < questions[counter].answers.length; i++) 
		{
			document.getElementById('options').innerHTML += '<button id="btn'+i+'">'+questions[counter].answers[i]+'</button>';
		}
		// start the jquery listener
		run();
	}
}

// function for jquery 
function run()	
{
// listener
$(document).ready(function(){
	// if mouse hovers over the button turns red
	$("button").mouseover(function(){
        $(this).css("background-color", "red");
    });
    // if I leave the button it turns back to original color
    $("button").mouseout(function(){
        $(this).css("background-color", "#778897");
    });
    // if I click the button 
    $("button").on("click",function(){   
    	// check if the guess and the answer are the same 
        if (questions[counter].correct === $(this).text()) {
        	right++; // count correct 
        }
        // clear the current options to pick
        document.getElementById('options').innerHTML ="";
        counter++; // update the counter
		populate(); // generate next question		
    });
});
} // close run function
populate(); // write out the first question



