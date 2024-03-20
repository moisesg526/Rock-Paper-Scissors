let playerCount = 0;
let computerCount = 0;

function getComputerChoice() {
  let game = ["Rock", "Paper", "Scissors"];
  let pick = game[Math.floor(Math.random() * 3)];
  //   console.log(pick);
  return pick;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

  computerSelection = getComputerChoice();
  console.log(
    `Computer selects ${computerSelection} player selects ${playerSelection}`
  );
  if (playerSelection === "rock" && computerSelection === "Scissors") {
    console.log("You win! Rock beats Scissors.");
    playerCount++;
    return "You win! Rock beats Scissors.";
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    console.log("You lose! Paper beats Rock.");
    computerCount++;
    return "You lose! Paper beats Rock.";
  } else if (playerSelection === "rock" && computerSelection === "Rock") {
    console.log("Rock, Rock. It's a tie. Try again.");
    return "Rock, Rock. It's a tie. Try again.";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    console.log("You win! Paper beats Rock.");
    playerCount++;
    return "You win! Paper beats Rock.";
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    console.log("You lose! Scissors beats Paper");
    computerCount++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    console.log("Paper, Paper. It's a Tie! Try again.");
    return "Paper, Paper. It's a Tie! Try again.";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    console.log("You win! Scissors beats Paper.");
    playerCount++;
    return "You win! Scissors beats Paper.";
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    console.log("You lose! Rock beats Scissors.");
    computerCount++;
    return "You lose! Rock beats Scissors.";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "Scissors"
  ) {
    console.log("Scissors, Scissors. It's a tie. Try again.");
    return "Scissors, Scissors. It's a tie. Try again.";
  } else {
    console.log("Not a good entry. Please pick Rock, Paper, or Scissors.");
    return "Not a good entry. Please pick Rock, Paper, or Scissors.";
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(`Player: ${playerCount} Computer: ${computerCount}`);
  }
}

playGame();

// Buttons With Event Listeners

const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", playRound);

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", playRound);

const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", playRound);
