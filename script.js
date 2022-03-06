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
    playerScoreBoard.textContent = playerScore;
  } else if (score.includes("lose")) {
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }
};

const defineComputer = function (computerSelection) {
  if (computerSelection === "Rock") {
    computerChoice.textContent = "Rock";
  } else if (computerSelection === "Paper") {
    computerChoice.textContent = "Paper";
  } else if (computerSelection === "Scissor") {
    computerChoice.textContent = "Scissor";
  }
};

const defineWinner = function (playerScore, computerScore) {
  if (playerScore === 5 && playerScore > computerScore) {
    winner.textContent = "You won against the Computer! Congratulations!";
  } else if (computerScore === 5 && playerScore < computerScore) {
    winner.textContent = "You lost, better luck next time! :)";
  }
};

// const game = function () {
//   for (let i = 0; i < 5; i++) {
//     // let playerSelection = prompt(
//     //   `Round ${i + 1}: Choose between: rock, paper or scissor`
//     // );
//     const computerSelection = computerPlay();
//     const score = playRound(playerSelection, computerSelection);
//     console.log(score);
//     console.log(calcScore(score));
//   }
//   // decide a winner
//   if (playerScore > computerScore) {
//     console.log("You have beaten the computer!");
//   } else if (playerScore < computerScore) {
//     console.log("You lost against the computer! Better luck next time ;)");
//   } else {
//     console.log("Your scores are equal!");
//   }
// };

// console.log(game());

// declaring variables DOM
// Buttons
const rockchoice = document.getElementById("rockchoice");
const paperchoice = document.getElementById("paperchoice");
const scissorchoice = document.getElementById("scissorchoice");

// ? Computer
const computerChoice = document.getElementById("computerselect");

// Scoreboard
const playerScoreBoard = document.getElementById("playerscoreboard");
const computerScoreBoard = document.getElementById("computerscoreboard");

const winner = document.getElementById("winner");

// addEventListener to three buttons
rockchoice.addEventListener("click", function () {
  const computerSelection = computerPlay();
  defineComputer(computerSelection);
  const score = playRound("Rock", computerSelection);
  calcScore(score);
  defineWinner(playerScore, computerScore);
});

paperchoice.addEventListener("click", function () {
  const computerSelection = computerPlay();
  defineComputer(computerSelection);
  const score = playRound("Paper", computerSelection);
  calcScore(score);
  defineWinner(playerScore, computerScore);
});

scissorchoice.addEventListener("click", function () {
  const computerSelection = computerPlay();
  defineComputer(computerSelection);
  const score = playRound("Scissor", computerSelection);
  calcScore(score);
  defineWinner(playerScore, computerScore);
});
