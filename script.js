"use strict";

let playerScore = 0;
let computerScore = 0;

// make a pick for the computer
const computerPlay = function () {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "Rock";
  } else if (choice === 1) {
    return "Paper";
  } else if (choice === 2) {
    return "Scissor";
  }
};

// Idea: Algorithm
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() === "ROCK") {
    const rock = "Rock";
    if (computerSelection === rock) {
      return "It's a draw!";
    } else if (computerSelection === "Paper") {
      return "You lose! Paper beats Rock";
    } else if (computerSelection === "Scissor") {
      return "You win! Rock beats Scissor!";
    }
  } else if (playerSelection.toUpperCase() === "PAPER") {
    const paper = "Paper";
    if (computerSelection === paper) {
      return "It's a draw!";
    } else if (computerSelection === "Scissor") {
      return "You lose! Scissor beats Paper";
    } else if (computerSelection === "Rock") {
      return "You win! Paper beats Rock";
    }
  } else if (playerSelection.toUpperCase() === "SCISSOR") {
    const scissor = "Scissor";
    if (computerSelection === scissor) {
      return "It's a draw!";
    } else if (computerSelection === "Rock") {
      return "You lose! Rock beats Scissor";
    } else if (computerSelection === "Paper") {
      return "You win! Scissor beats Paper";
    }
  } else {
    return "This is not a valid input!";
  }
}

// to count the score of each player
const calcScore = function (score) {
  if (score.includes("win")) {
    playerScore++;
  } else if (score.includes("lose")) {
    computerScore++;
  }
  console.log(`${playerScore}, ${computerScore}`);
};

const game = function () {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      `Round ${i + 1}: Choose between: rock, paper or scissor`
    );
    const computerSelection = computerPlay();
    const score = playRound(playerSelection, computerSelection);
    console.log(score);
    console.log(calcScore(score));
  }
  // decide a winner
  if (playerScore > computerScore) {
    console.log("You have beaten the computer!");
  } else if (playerScore < computerScore) {
    console.log("You lost against the computer! Better luck next time ;)");
  } else {
    console.log("Your scores are equal!");
  }
};

console.log(game());
