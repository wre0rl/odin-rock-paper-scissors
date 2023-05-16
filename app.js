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

  if (outcomes[computerSelection] === playerSelection) {
    computerScore += 1;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (outcomes[playerSelection] === computerSelection) {
    playerScore += 1;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return 'Draw!';
  }
}

function showWinner(playerScore, computerScore) {
  const finalScore = `Player: ${playerScore}\nComputer: ${computerScore}\n`
  if (playerScore > computerScore) {
    return `${finalScore}Player is the final winner! Congrats!`;
  } else if (computerScore > playerScore) {
    return `${finalScore}Computer is the final winner!`;
  } else {
    return `${finalScore}The final result is draw!`;
  }
}

let playerScore = 0;
let computerScore = 0;
function game() {
  let round = 0;
  const playerSelection = prompt('Pick your choice!');
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection.toLowerCase(), computerSelection));
  round++;
  console.log(showWinner(playerScore, computerScore));
}

game();

