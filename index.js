/*
Coded by Joao Julio, June 30th 2023
*/

const winnerScore = 5

const plays = ["rock", "paper", "scissors"]

let computerScore = 0;
let playerScore = 0;

// Random computer play
function getComputerChoice() {
 return plays[Math.floor(Math.random() * 3)];
}

// round event listner
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
 button.addEventListener('click', () => {
  round(button.textContent);
 })
})

// Reset Score
function resetGame() {
 computerScore = 0;
 playerScore = 0;
 document.querySelector('.computer-score').textContent = 0;
 document.querySelector('.player-score').textContent = 0;
}

function round(playerSelection) {
 const playerSelectionLower = playerSelection.toLowerCase();
 const computerSelection = getComputerChoice();
 const playMessage = document.querySelector('.play-text-container')
 if(playerSelectionLower === computerSelection) {
  playMessage.textContent = `Draw! ${playerSelectionLower} ties with ${computerSelection}`;
 } else {
  if(playerSelectionLower === "rock" && computerSelection === "scissors" || playerSelectionLower === "scissors" && computerSelection === "paper" || 
  playerSelectionLower === "paper" && computerSelection === "rock") {
   playMessage.textContent = `You won! ${playerSelectionLower} beats ${computerSelection}`;
   playerScore++;
   document.querySelector('.player-score').textContent = parseInt(document.querySelector('.player-score').textContent) + 1;
  } else {
   playMessage.textContent = `You lost! ${playerSelectionLower} is beaten by ${computerSelection}`;
   computerScore++;
   document.querySelector('.computer-score').textContent = parseInt(document.querySelector('.computer-score').textContent) + 1;
  }
 }
 finishGame();
}

// Finish and restart game
function finishGame() {
 if(playerScore == 5 || computerScore == 5) {
  let result = playerScore > computerScore  ? "You won the game!" : "You lost to the computer!";
  const playMessage = document.querySelector('.play-text-container');
  playMessage.textContent = result;
  resetGame();
 }
}