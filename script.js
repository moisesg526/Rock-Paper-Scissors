let playerCount = 0;
let computerCount = 0;
function getComputerChoice() {
  let game = ["Rock", "Paper", "Scissors"];
  let pick = game[Math.floor(Math.random() * 3)];
  //   console.log(pick);
  return pick;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = "";

  let hand = playerSelection.toString().toLowerCase();
  computerSelection = getComputerChoice();
  console.log(
    `Computer selects ${computerSelection} player selects ${playerSelection}`
  );
  if (hand === "rock" && computerSelection === "Scissors") {
    console.log("You win! Rock beats Scissors.");
    playerCount++;
    return "You win! Rock beats Scissors.";
  } else if (hand === "rock" && computerSelection === "Paper") {
    console.log("You lose! Paper beats Rock.");
    computerCount++;
    return "You lose! Paper beats Rock.";
  } else if (hand === "rock" && computerSelection === "Rock") {
    console.log("Rock, Rock. It's a tie. Try again.");
    return "Rock, Rock. It's a tie. Try again.";
  } else if (hand === "paper" && computerSelection === "Rock") {
    console.log("You win! Paper beats Rock.");
    playerCount++;
    return "You win! Paper beats Rock.";
  } else if (hand === "paper" && computerSelection === "Scissors") {
    console.log("You lose! Scissors beats Paper");
    computerCount++;
    return "You lose! Scissors beats Paper";
  } else if (hand === "paper" && computerSelection === "Paper") {
    console.log("Paper, Paper. It's a Tie! Try again.");
    return "Paper, Paper. It's a Tie! Try again.";
  } else if (hand === "scissors" && computerSelection === "Paper") {
    console.log("You win! Scissors beats Paper.");
    playerCount++;
    return "You win! Scissors beats Paper.";
  } else if (hand === "scissors" && computerSelection === "Rock") {
    console.log("You lose! Rock beats Scissors.");
    computerCount++;
    return "You lose! Rock beats Scissors.";
  } else if (hand === "scissors" && computerSelection === "Scissors") {
    console.log("Scissors, Scissors. It's a tie. Try again.");
    return "Scissors, Scissors. It's a tie. Try again.";
  } else {
    console.log("Not a good entry. Please pick Rock, Paper, or Scissors.");
    return "Not a good entry. Please pick Rock, Paper, or Scissors.";
  }
}

const rockBtn = document.querySelector("#rock-btn");
computerSelection = getComputerChoice();
rockBtn.addEventListener("click", function () {
  playRound("Rock", computerSelection);
});

const paperBtn = document.querySelector("#paper-btn");
computerSelection = getComputerChoice();
paperBtn.addEventListener("click", function () {
  playRound("Paper", computerSelection);
});
const scissorsBtn = document.querySelector("#scissors-btn");
computerSelection = getComputerChoice();
scissorsBtn.addEventListener("click", function () {
  playRound("Scissors", computerSelection);
});

// function playGame(n, func) {
//   for (let i = 0; i < n; i++) {
//     func = playRound();
//     console.log(`Player: ${playerCount} Computer: ${computerCount}`);
//   }
// }

// playGame(5, playRound);
playRound();
