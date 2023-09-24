//Gets the random generated computer choice
//When you call the getComputerChoice() function, it will return a random choice for the computer
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice;
  }
  
  //Plays one round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
      return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
  }