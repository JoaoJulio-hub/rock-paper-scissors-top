/*
Coded by Joao Julio, June 30th 2023
*/

const winnerScore = 5

const plays = ["rock", "paper", "scissors"]

// Random computer play
function getComputerChoice() {
 return plays[Math.floor(Math.random() * 3)]
}


// Start round
function round(playerSelection, computerSelection) {
 const playerSelectionLower = playerSelection.toLowerCase()
 if(playerSelectionLower === computerSelection) {
  return `Draw! ${playerSelectionLower} ties with ${computerSelection}`
 } else {
  if(playerSelectionLower === "rock" && computerSelection === "scissors" || playerSelectionLower === "scissors" && computerSelection === "paper" || 
  playerSelectionLower === "paper" && computerSelection === "rock") {
   return `You won! ${playerSelectionLower} beats ${computerSelection}`
  } else {
   return `You lost! ${playerSelectionLower} is beaten by ${computerSelection}`
  }
 }
}

// Start game
function game() {
 let playerScore = 0, computerScore = 0

 while(playerScore != winnerScore && computerScore != winnerScore) {
  let input = prompt("rock, paper, or scissors?")
  let roundResult = round(input, getComputerChoice())
  if(roundResult.includes("won")) {
   playerScore++
  } else if (roundResult.includes("lost")) {
   computerScore++
  }
  console.log(`Computer Score: ${computerScore} : Player Score: ${playerScore}`)
 }

 let result = playerScore > computerScore  ? "You won the game!" : "You lost to the computer!"

 return result
}

console.log(game());