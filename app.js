Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function getComputerChoice() {
  const el = ['Rock', 'Paper', 'Scissors'];
  return el.random();
}

function playRound(playerSelection, computerSelection) {
  const outcomes = {
    Rock: 'Scissors', // Rock beats Scissors
    Paper: 'Rock', // Paper beats Rock
    Scissors: 'Paper' // Scissors beats Paper 
  };

  if (outcomes[computerSelection] === playerSelection) {
    computerScore += 1;
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  } else if (outcomes[playerSelection] === computerSelection) {
    playerScore += 1;
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else {
    playerScore += 1;
    computerScore += 1;
    console.log('Draw!');
  }
}

function showScore(playerScore, computerScore) {
  const playerScoreContent = document.querySelector('.player-score-content');
  const computerScoreContent = document.querySelector('.computer-score-content');

  playerScoreContent.textContent = playerScore;
  computerScoreContent.textContent = computerScore;
}

function showWinner(playerScore, computerScore) {

  if (playerScore > computerScore) {
    return `Player is the final winner! Congrats!`;
  } else if (computerScore > playerScore) {
    return `Computer is the final winner!`;
  } else {
    return `The final result is draw!`;
  }
}

const btns = document.querySelectorAll('.rpc-button');
const playerChoiceContent = document.querySelector('.player-choice');
const computerChoiceContent = document.querySelector('.computer-choice');

let playerScore = 0;
let computerScore = 0;
let round = 0;

btns.forEach((btn) => {
  btn.addEventListener('click', game);
});

function game() {
  // Get the player and computer selections
  const playerSelection = this.id;
  const computerSelection = getComputerChoice();

  // Render player and computer choice text
  playerChoiceContent.textContent = playerSelection;
  computerChoiceContent.textContent = computerSelection;

  // Play, update and show the score for each round
  playRound(playerSelection, computerSelection);
  showScore(playerScore, computerScore);

  // Count and reset if the round is = 5
  round++;
  if (round === 5) reset();
  console.log(round);
}

function reset() {
  round = 0; 
  playerScore = 0; 
  computerScore = 0
}
