"use strict";

let playerScore = 0;
let computerScore = 0;

// randomize a pick for the computer between rock, paper or scissor
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

// my idea of the algorithm
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

// const calcScore = function () {
//   if (score.includes("win")) {
//     playerScore++;
//     return playerScore;
//   } else if (score.includes("lose")) {
//     computerScore++;
//     return computerScore;
//   }
// };

// run the algorithm 5 times and print it into the console
const game = function () {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      `Round ${i + 1}: Choose between: rock, paper or scissor`
    );
    const computerSelection = computerPlay();
    const score = playRound(playerSelection, computerSelection);
    console.log(score);
    // added an if-statement to calculate the score based on the words win, lose and draw
    if (score.includes("win")) {
      playerScore++;
      console.log(`${playerScore}, ${computerScore}`);
    } else if (score.includes("lose")) {
      computerScore++;
      console.log(`${playerScore}, ${computerScore}`);
    } else if (score.includes("draw")) {
      // computerScore += 0;
      // playerScore += 0;
      console.log(`${playerScore}, ${computerScore}`);
    }
  }
};

console.log(game());
