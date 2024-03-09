function getComputerChoice() {
  let game = ["Rock", "Paper", "Scissors"];
  let pick = game[Math.floor(Math.random() * 3)];
  //   console.log(pick);
  return pick;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper or Scissors?");
  let hand = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();
  console.log(`Computer selects ${computerSelection}`);
  console.log(`Player selects ${playerSelection}`);
  if (hand === "rock" && computerSelection === "Scissors") {
    console.log("You win! Rock beats Scissors.");
  } else if (hand === "rock" && computerSelection === "Paper") {
    console.log("You lose! Paper beats Rock.");
  } else if (hand === "rock" && computerSelection === "Rock") {
    console.log("Rock, Rock. It's a tie. Try again.");
  } else if (hand === "paper" && computerSelection === "Rock") {
    console.log("You win! Paper beats Rock.");
  } else if (hand === "paper" && computerSelection === "Scissors") {
    console.log("You lose! Scissors beats Paper");
  } else if (hand === "paper" && computerSelection === "Paper") {
    console.log("Paper, Paper. It's a Tie! Try again.");
  } else if (hand === "scissors" && computerSelection === "Paper") {
    console.log("You win! Scissors beats paper.");
  } else if (hand === "scissors" && computerSelection === "Rock") {
    console.log("You lose! Rock beats Scissors.");
  } else if (hand === "scissors" && computerSelection === "Scissors") {
    console.log("Scissors, Scissors. It's a tie. Try again.");
  } else {
    console.log("Not a good entry. Please pick Rock, Paper, or Scissors.")
  }
}

playRound();
