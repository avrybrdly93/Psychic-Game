// Setting variables
let alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
let compGuess = alphabetArray[Math.floor(Math.random()*alphabetArray.length)];
let userGuess;
let userGuessArray = [];
let wins = 0;
let losses = 0;
let guessesLeft = 10;

// creating a function that picks up key pressed by user for every click
function keyPress(event) {
    let userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    userGuessArray.push(userGuess);

    // Checks if the user wins
    if (userGuess === compGuess) {
        console.log("You win! The correct letter was " + compGuess);
        wins++;
        guessesLeft = 10;
        compGuess = alphabetArray[Math.floor(Math.random()*alphabetArray.length)];
        userGuessArray.length = 0;
    }
    else {
        guessesLeft--;
    }
    
    // Once user has guessed ten times unsuccessfully, they lose, and the game resets
    if(userGuessArray.length === 10) {
        guessesLeft = 10;
        losses++;
        userGuessArray.length = 0;
        console.log("You lose, you now have " + losses + " losses.");
    }

    //setting HTML elements to javascript objects for readability
    let guessesSoFarArray = document.getElementById("guesses-so-far");
    let lossesElement = document.getElementById("losses");
    let winsElement = document.getElementById("wins");
    let guessesLeftElement = document.getElementById("guesses-left");

    // Changes HTML elements based on game data
    guessesSoFarArray.innerHTML = "Your Guesses so far: " + userGuessArray;
    lossesElement.innerHTML = "Losses: " + losses;
    winsElement.innerHTML = "Wins: " + wins;
    guessesLeftElement.innerHTML = "Guesses Left: " + guessesLeft;


    console.log(compGuess);
}
