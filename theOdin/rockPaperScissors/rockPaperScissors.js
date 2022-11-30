// Let computer randomly choose from an array of choices
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randInd = Math.floor(Math.random() * choices.length);
console.log(choices[randInd]);
return choices[randInd];
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, Paper or Scissors?");

function playRound(playerSelection, computerSelection) {

}