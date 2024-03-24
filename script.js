const letsPlay = document.querySelector(".letsPlay");
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const playerResults = document.querySelector(".playerResults");
const computerResults = document.querySelector(".computerResults");
const gamePicks = document.querySelector(".gamePicks");
const points = document.querySelector(".points");
const winner = document.querySelector(".winner");

let playerCount = 0;
let computerCount = 0;
let playerSelection;

function playGame() {
  if (playerCount === 0 && computerCount === 0) {
    letsPlay.textContent = "Please make your choice.";
  }
  if (playerCount < "5" || computerCount < "5") {
    points.textContent = `Player: ${playerCount} Computer: ${computerCount}`;
  }
  if (playerCount === 5 || computerCount === 5) {
    return (points.textContent = `Final results are Player: ${playerCount} Computer: ${computerCount}`);
  }
}
playGame();

function playRound(playerSelection, computerSelection) {
  console.log(`Player selects ${playerSelection}`);
  computerSelection = getComputerChoice();
  console.log(` computer Selects ${computerSelection}`);
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerResults.textContent = `Player hand is ${playerSelection}`;
    computerResults.textContent = `Computer hand is ${computerSelection}`;
    gamePicks.textContent = "You win! Rock beats Scissors.";
    playerCount += 1;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    playerResults.textContent = `Player hand is ${playerSelection}`;
    computerResults.textContent = `Computer hand is ${computerSelection}`;
    gamePicks.textContent = "You lose! Paper beats Rock.";
    computerCount += 1;
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    playerResults.textContent = `Player hand is ${playerSelection}`;
    computerResults.textContent = `Computer hand is ${computerSelection}`;
    gamePicks.textContent = "Rock, Rock. It's a tie. Try again.";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerResults.textContent = `Player hand is ${playerSelection}`;
    computerResults.textContent = `Computer hand is ${computerSelection}`;
    gamePicks.textContent = "You win! Paper beats Rock.";
    playerCount += 1;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    playerResults.textContent = `Player hand is ${playerSelection}`;
    computerResults.textContent = `Computer hand is ${computerSelection}`;
    gamePicks.textContent = "You lose! Scissors beats Paper";
    computerCount += 1;
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    playerResults.textContent = `Player hand is ${playerSelection}`;
    computerResults.textContent = `Computer hand is ${computerSelection}`;
    gamePicks.textContent = "Paper, Paper. It's a Tie! Try again.";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerResults.textContent = `Player hand is ${playerSelection}`;
    computerResults.textContent = `Computer hand is ${computerSelection}`;
    gamePicks.textContent = "You win! Scissors beats Paper.";
    playerCount += 1;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    playerResults.textContent = `Player hand is ${playerSelection}`;
    computerResults.textContent = `Computer hand is ${computerSelection}`;
    gamePicks.textContent = "You lose! Rock beats Scissors.";
    computerCount += 1;
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
    playerResults.textContent = `Player hand is ${playerSelection}`;
    computerResults.textContent = `Computer hand is ${computerSelection}`;
    gamePicks.textContent = "Scissors, Scissors. It's a tie. Try again.";
  }
  playGame();
}

function selections(e) {
  playerSelection = e.target.value;
  const computerSelection = getComputerChoice;
  playRound(playerSelection, computerSelection);
  gameWon();
}

rockBtn.addEventListener("click", selections);
paperBtn.addEventListener("click", selections);
scissorsBtn.addEventListener("click", selections);

function getComputerChoice() {
  let game = ["Rock", "Paper", "Scissors"];
  let pick = game[Math.floor(Math.random() * 3)];
  return pick;
}

function gameWon() {
  if (playerCount === 5) {
    return (winner.textContent = `You Won! player: ${playerCount} computer: ${computerCount}`);
  } else if (computerCount === 5) {
    return (winner.textContent = `You lost! player: ${playerCount} computer: ${computerCount}`);
  }
}
