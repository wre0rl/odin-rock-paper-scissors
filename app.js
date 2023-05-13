Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function getComputerChoice() {
  const el = ['Rock', 'Paper', 'Scissors'];
  return el.random();
}

function playRound(playerSelection, computerSelection) {
  return `Player: ${playerSelection}, Computer: ${computerSelection}`;
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));