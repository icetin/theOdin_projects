// Let computer randomly choose from an array of possible choices
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randInd = Math.floor(Math.random() * choices.length);
console.log(choices[randInd]);
return choices[randInd];
}

// Score keeping variables
let humanScore = 0; 
let compScore = 0; 
let aDraw = 0; 

// Actual game round
function playRound() {
    const computerSelection = getComputerChoice().toLowerCase();
    const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

    if (playerSelection === computerSelection) {
        aDraw++;
        return "Both players chose the same thing: It's a draw!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        humanScore++;
        return "Human player wins! Rock beats Scissors."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        humanScore++;
        return "Human player wins! Paper beats Rock."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        humanScore++;
        return "Human player wins! Scissors beat Paper."
    } else {
        compScore++;
        return "Computer player wins!"
    }
}

// A 5 round game
function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound());
        console.log(
            `Score list:\n
            Human Player: ${humanScore}\n
            Computer: ${compScore}\n
            Draw: ${aDraw}`
            )
    }
};

// Initiate a complete game
game();

// End game total score display
function decideWinner() {
    if (humanScore > compScore) {
        console.log(`Human player has won the game! Total score is:\n
        Human player: ${humanScore}\n
        Computer: ${compScore}`);
    } else if (compScore > humanScore) {
        console.log(`Computer player has won the game with a score of ${compScore} against ${humanScore}.`);
    } else console.log("Game has ended with a DRAW! Refresh the page to play again.")
};

// Show the total score at the end of the game
decideWinner();


// Further development needed:
// How to prompt again 
// when a non accepted value entered 
// into the prompt field