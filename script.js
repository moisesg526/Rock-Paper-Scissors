// Buttons With Event Listeners

// const rockBtn = document.querySelector("#rock-btn");
// rockBtn.addEventListener("click", playRound);

// const paperBtn = document.querySelector("#paper-btn");
// paperBtn.addEventListener("click", playRound);

// const scissorsBtn = document.querySelector("#scissors-btn");
// scissorsBtn.addEventListener("click", playRound);

const btn = document.querySelectorAll("button");
const playerResults = document.querySelector(".playerResults");
const computerResults = document.querySelector(".computerResults");
const gamePicks = document.querySelector(".gamePicks");
const points = document.querySelector(".points");

let playerCount = 0;
let computerCount = 0;

function playGame() {
  if (playerCount < "5" || computerCount < "5") {
    playRound();
    return (points.textContent = `Player: ${playerCount} Computer: ${computerCount}`);
  } else {
    return (points.textContent = `Player: ${playerCount} Computer: ${computerCount}`);
  }
}
playGame();

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelects();
  computerSelection = getComputerChoice();
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    gamePicks.textContent = "You win! Rock beats Scissors.";
    playerCount++;
    return "You win! Rock beats Scissors.";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    gamePicks.textContent = "You lose! Paper beats Rock.";
    computerCount++;
    return "You lose! Paper beats Rock.";
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    gamePicks.textContent = "Rock, Rock. It's a tie. Try again.";
    return "Rock, Rock. It's a tie. Try again.";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    gamePicks.textContent = "You win! Paper beats Rock.";
    playerCount++;
    return "You win! Paper beats Rock.";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    gamePicks.textContent = "You lose! Scissors beats Paper";
    computerCount++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    gamePicks.textContent = "Paper, Paper. It's a Tie! Try again.";
    return "Paper, Paper. It's a Tie! Try again.";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    gamePicks.textContent = "You win! Scissors beats Paper.";
    playerCount++;
    return "You win! Scissors beats Paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    gamePicks.textContent = "You lose! Rock beats Scissors.";
    computerCount++;
    return "You lose! Rock beats Scissors.";
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
    gamePicks.textContent = "Scissors, Scissors. It's a tie. Try again.";
    return "Scissors, Scissors. It's a tie. Try again.";
  } else {
    gamePicks.textContent =
      "Please make your choice.";
    return "Not a good entry. Please pick Rock, Paper, or Scissors.";
  }
}

function playerSelects() {
  btn.forEach(function (button) {
    button.addEventListener("click", function () {
      let playerSelection = this.value;
      playerResults.textContent = `Player selects: ${playerSelection}`;
      computerResults.textContent = `Computer Selects: ${getComputerChoice()}`;
      return playerSelection;
    });
  });
}

function getComputerChoice() {
  let game = ["Rock", "Paper", "Scissors"];
  let pick = game[Math.floor(Math.random() * 3)];
  return pick;
}
