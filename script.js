const btn = document.querySelectorAll("button");
const playerResults = document.querySelector(".playerResults");
const computerResults = document.querySelector(".computerResults");
const gamePicks = document.querySelector(".gamePicks");
const points = document.querySelector(".points");

let playerCount = 0;
let computerCount = 0;

function playGame() {
  if (playerCount === 0 && computerCount === 0) {
    gamePicks.textContent = "Please make your choice.";
  } else if (playerCount < "5" || computerCount < "5") {
    points.textContent = `Player: ${playerCount} Computer: ${computerCount}`;
  } else {
    return (points.textContent = `Final results are Player: ${playerCount} Computer: ${computerCount}`);
  }
  playRound();
}
playGame();

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelects();
  console.log(`Player selects ${playerSelection}`);
  computerSelection = getComputerChoice();
  console.log(` computer Selects ${computerSelection}`);
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    gamePicks.textContent = "You win! Rock beats Scissors.";
    playerCount = playerCount + 1;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    gamePicks.textContent = "You lose! Paper beats Rock.";
    computerCount = computerCount + 1;
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    gamePicks.textContent = "Rock, Rock. It's a tie. Try again.";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    gamePicks.textContent = "You win! Paper beats Rock.";
    playerCount = playerCount + 1;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    gamePicks.textContent = "You lose! Scissors beats Paper";
    computerCount = computerCount + 1;
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    gamePicks.textContent = "Paper, Paper. It's a Tie! Try again.";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    gamePicks.textContent = "You win! Scissors beats Paper.";
    playerCount = playerCount + 1;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    gamePicks.textContent = "You lose! Rock beats Scissors.";
    computerCount = computerCount + 1;
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
    gamePicks.textContent = "Scissors, Scissors. It's a tie. Try again.";
  }
    playGame();
}


function playerSelects() {
  btn.forEach((button) => {
    button.addEventListener("click", () => {
      let playerSelection = button.value;
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
