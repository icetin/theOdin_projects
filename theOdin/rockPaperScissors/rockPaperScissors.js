// Let computer randomly choose from an array of choices
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randInd = Math.floor(Math.random() * choices.length);
console.log(choices[randInd]);
return choices[randInd];
}

const computerSelection = getComputerChoice().toLowerCase();
const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Both players chose the same thing: It's a draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Human player wins! Rock beats Scissors."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Human player wins! Paper beats Rock."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Human player wins! Scissors beat Paper."
    } else return "Computer player wins!"
};

console.log(playRound(playerSelection, computerSelection));

