
//Array of correct answers
var answers=["Washington","Adams","Jefferson","Madison","Lincoln","Roosevelt","Kennedy","Reagan","Clinton","Obama"]
// starter values for variable display
var numWins = 0
var remGuess = 15
var letters =[]
//select random answer, convert to proper length array of spaces, populate word field
var answer = answers[Math.floor(Math.random()*answers.length)];
//convert to underscores
var ansUs = answer.replace(/./gi, "_");
//split underscores into array
var ansUsArray = ansUs.split("");
// combine array into string (don't need here)
//var ansDisplay = ansUsArray.join("")
// convert answer to uppercase
var ansCap = answer.toUpperCase();
//split answer into array, not needed for now
//var ansArray = ansCap.split("");
// populate fields in html with starting values
document.getElementById("word").innerHTML= ansUs;
document.getElementById("guesses").innerHTML = remGuess;
document.getElementById("wins").innerHTML = numWins;
//actions when key is clicked:

//	check array for correct letter
//  replace if correct

//make key input capital letter
document.onkeyup = function(guess) {
	var guessCap = String.fromCharCode(guess.keyCode).toUpperCase();
//check if guessed previously
var chkUsed = letters.indexOf(guessCap);
if (chkUsed === -1) {              
	//check if correct guess
	if (ansCap.includes(guessCap) === true) {
			//check for game won
			if (ansCap === ansUs) {
				//winner graphic
				document.getElementById("youwin1").innerHTML = "CONGRATS";
				document.getElementById("youwin2").innerHTML = "You Win!";
				document.getElementById("youwin3").innerHTML = "The answer is:";
				document.getElementById("youwin4").innerHTML = ansCap;
			}
		//replace in current word array
		//search answer for guessed letter
		var pos = [];
		for(var i=0; i<ansCap.length;i++) {
    		if (ansCap[i] === guessCap) pos.push(i);
		}
		//replace underscored in word and re-pop
		for(i=0; i<pos.length; i++) {
			ansUsArray[pos[i]] = guessCap
		}
		var ansUs = ansUsArray.join("");
		document.getElementById("word").innerHTML= ansUs;
		console.log("answer is " + ansCap);
		console.log("guess is " + ansUs);
	}

	//add to letters used array
	letters.push(guessCap);
	document.getElementById("letters").innerHTML = letters;

	//subtract from guesses remaining total
	remGuess--;
	document.getElementById("guesses").innerHTML = remGuess;

//already guessed alert
} else { alert ("You guessed this letter already.  Please try again.");	 

}

}	


	
//need stop when out of guesses

//when all letters are matched:
//	alert you win
//  play hail to the cheif
//	start over









