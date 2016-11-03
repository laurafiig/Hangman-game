//note to self - re sketch out the nesting of the various conditionals
//	first	check if letter already used, then iterate guess count and letters guessed
//	second	check if answer is correct, replace on screen.  multiple places if neccesary
//	third	check if answer is complete, winner text and music, hit any key to restart??

//Array of correct answers
var answers=["Washington","Adams","Jefferson","Madison","Lincoln","Roosevelt","Kennedy","Reagan","Clinton","Obama"]

// other variables needed

var numWins = 0
var remGuess = 15
var letters =[]

//select random answer, convert to proper length array of spaces, populate word field
//!!!!still leaves me with the commas!!!!

var answer = answers[Math.floor(Math.random()*answers.length)];
var ansUs = answer.replace(/./gi, "_");
var ansUsArray = ansUs.split("");
var ansCap = answer.toUpperCase();
var ansArray = ansCap.split("");

// poulate fields in html with starting values
document.getElementById("word").innerHTML= ansUsArray;
document.getElementById("guesses").innerHTML = remGuess;
document.getElementById("wins").innerHTML = numWins;

//actions when key is clicked:
//  check if already used
//	add to letters used array
//	subtract from guesses remaining total
//	check array for correct letter
//  replace if correct

//make input capital letter
document.onkeyup = function(guess) {
	var guessCap = String.fromCharCode(guess.keyCode).toUpperCase();
	
//check if used
var chkUsed = letters.indexOf(guessCap);

if (chkUsed === -1) {

	//add to letters used array
	letters.push(guessCap);
	document.getElementById("letters").innerHTML = letters;

	//subtract from guesses remaining total
	remGuess--;
	document.getElementById("guesses").innerHTML = remGuess;

} else alert ("You guessed this letter already.  Please try again.");	

}	

//check answer

//similar to??
//if (myFarm[i].charAt(0) === "c" || myFarm[i].charAt(0) === "o") {

//replace on screen
	
//need stop when out of guesses

//when all letters are matched:
//	alert you win
//  play hail to the cheif
//	start over









