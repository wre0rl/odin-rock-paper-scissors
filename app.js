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
  } else if (outcomes[playerSelection] === computerSelection) {
    playerScore += 1;
  } else {
    playerScore += 1;
    computerScore += 1;
  }
}

function updateScore(playerScore, computerScore) {
  const playerScoreContent = document.querySelector('.player-score-content');
  const computerScoreContent = document.querySelector('.computer-score-content');

  playerScoreContent.textContent = playerScore;
  computerScoreContent.textContent = computerScore;
}

function updateChoice(playerSelection, computerSelection) {
  playerChoiceContent.textContent = playerSelection;
  computerChoiceContent.textContent = computerSelection;
}

function showWinner(playerScore, computerScore) {
  const modalContent = document.querySelector('.modal-content');

  if (playerScore > computerScore) {
    modalContent.textContent = 'You win!';
  } else if (computerScore > playerScore) {
    modalContent.textContent = 'You lose!';
  } else {
    modalContent.textContent = "It's a draw!";
  }

  modal.showModal();
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

  // Play, update, show the scores and choices for each round
  playRound(playerSelection, computerSelection);
  updateScore(playerScore, computerScore);
  updateChoice(playerSelection, computerSelection);

  // Count and reset if the round is = 5
  round++;
  if (round === 5) showWinner(playerScore, computerScore);
}

function reset() {
  round = 0; 
  playerScore = 0; 
  computerScore = 0;
  updateScore(playerScore, computerScore); // Reset the score text
  updateChoice('?', '?'); // Reset the choice text
}


const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

closeModal.addEventListener('click', () => {
  modal.close();
  reset();
});
