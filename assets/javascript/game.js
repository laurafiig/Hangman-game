
//Array of correct answers
var answers=["Washington","Adams","Jefferson","Madison","Lincoln","Roosevelt","Kennedy","Reagan","Clinton","Obama"]

// starter values for variable display
var numWins = 0
var remGuess = 10
var letters =[]

// select random answer
var answer = answers[Math.floor(Math.random()*answers.length)];

// convert to underscore word
var ansUs = answer.replace(/./gi, "_");

// split underscores into array
var ansUsArray = ansUs.split("");

// convert answer to uppercase
var ansCap = answer.toUpperCase();

// link to sound file
var sound1 = new Audio("hail_to_the_chief.mp3");

// populate fields in html with starting values
document.getElementById("word").innerHTML= ansUs;
document.getElementById("guesses").innerHTML = remGuess;
document.getElementById("wins").innerHTML = numWins;

// capture key input, make capital letter
document.onkeyup = function(guess) {
	guessCap = String.fromCharCode(guess.keyCode).toUpperCase();
	
	// check if letter guessed previously
	chkUsed = letters.indexOf(guessCap);
	if (chkUsed === -1) {              
	
		// add to letters used array
		letters.push(guessCap);
		document.getElementById("letters").innerHTML = letters;
	
		// check if correct guess
		if (ansCap.includes(guessCap) === true) {
	
			// search answer for location of guessed letter
			pos = [];
			for(var i=0; i<ansCap.length;i++) {
				if (ansCap[i] === guessCap) pos.push(i);
			}
	
			// replace underscore in word and re-populate html
			for(i=0; i<pos.length; i++) {
				ansUsArray[pos[i]] = guessCap
			}
			ansUs = ansUsArray.join("");
			document.getElementById("word").innerHTML= ansUs;	
	
			// check for game won
			if (ansCap === ansUs) {
			
				//increase number of wins, update on screen
				numWins++;
				document.getElementById("wins").innerHTML = numWins;
			
				//winner graphics and sound
				document.getElementById("youwin1").innerHTML = "CONGRATS! You Win!";
				document.getElementById("youwin2").innerHTML = "The answer is:";
				document.getElementById("youwin3").innerHTML = ansCap;
				sound1.play();
				
				//reset game board on win
				remGuess = 10
				document.getElementById("guesses").innerHTML = remGuess;
				answer = answers[Math.floor(Math.random()*answers.length)];
				ansUs = answer.replace(/./gi, "_");
				ansUsArray = ansUs.split("");
				document.getElementById("word").innerHTML= ansUs;
				letters =[]
				document.getElementById("letters").innerHTML = letters;
				ansCap = answer.toUpperCase();
				} 
			
		} else {
		//subtract from guesses remaining total and update html
		remGuess--;
		document.getElementById("guesses").innerHTML = remGuess;

		//check for out of guesses
		if (remGuess < 1) {
			
			//try again graphics
			document.getElementById("youwin1").innerHTML = "Out of Guesses!";
			document.getElementById("youwin2").innerHTML = "Please try again. The correct answer was:";
			document.getElementById("youwin3").innerHTML = ansCap;
			
			//reset game board on loss
			remGuess = 10
			document.getElementById("guesses").innerHTML = remGuess;
			answer = answers[Math.floor(Math.random()*answers.length)];
			ansUs = answer.replace(/./gi, "_");
			ansUsArray = ansUs.split("");
			document.getElementById("word").innerHTML= ansUs;
			letters =[]
			document.getElementById("letters").innerHTML = letters;
			ansCap = answer.toUpperCase();	
		}	

		}

	}

}
	