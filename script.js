function getComputerChoice() {
  let game = ["Rock", "Paper", "Scissors"];
  let pick = game[Math.floor(Math.random() * 3)];
//   console.log(pick);
  return pick;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = "Paper";
  computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playerSelection);
}

playRound()