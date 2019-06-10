
        
// VARIABLES
// ==========================================================================

var wins = 0;
var losses = 0;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alreadyGuessedArray = [];
var guesses = 10;

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text")
var guessesLeft = document.getElementById("guesses-left");

document.onkeyup = function(event) {
    guesses-= 1; 

var userGuess = event.key.toUpperCase();

// console.log("User guess: " + userGuess);

var letter = letters[Math.floor(Math.random() * letters.length)];

// console.log("Computer's choice: " + letter);
    
// while guesses >= 0 the following should occur 
if (userGuess === letter) {
    alert("You guessed it");
    wins++;
} else {
    losses++;
     
    if (!alreadyGuessedArray.includes(userGuess)) {
        alreadyGuessedArray.push(userGuess);
    }     
};

// does not start game over after correct letter is guessed
// does not stop game after the max of 10 guesses are used up
// does not stop user from entering other keyboard characters besides letters



winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesText.innerHTML = "Letters guessed so far: " + alreadyGuessedArray;
guessesLeft.textContent = "Number of guesses left: " + guesses;

}