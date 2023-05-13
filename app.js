Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function getComputerChoice() {
  const el = ['rock', 'paper', 'scissors'];
  return el.random();
}

function playRound(playerSelection, computerSelection) {
  const outcomes = {
    rock: 'scissors', // Rock beats Scissors
    paper: 'rock', // Paper beats Rock
    scissors: 'paper' // Scissors beats Paper 
  };

  console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);

  if (outcomes[computerSelection] === playerSelection) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (outcomes[playerSelection] === computerSelection) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return 'Draw!';
  }
}
 
const playerSelection = "Scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));