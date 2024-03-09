function getComputerChoice() {
  let game = ["Rock", "Paper", "Scissors"];
  let pick = game[Math.floor(Math.random() * 3)];
  //   console.log(pick);
  return pick;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper or Scissors?")
  let hand = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();
  console.log(`Computer selects ${computerSelection}`);
  console.log(`Player selects ${hand}`);
  if (hand === "paper" && computerSelection === "Rock") {
    console.log("You win! Paper beats rock");
  } else if (hand === "paper" && computerSelection === "Scissors") {
    console.log("You lose! Scissors beats Paper");
  } else if (hand === "paper" && computerSelection === "Paper") {
    console.log("Paper, Paper. It's a Tie! Try again.");
  }
}

playRound();
