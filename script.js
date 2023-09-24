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

  //5 rounds of gameplay
function game() {
  let playerScore = 0;
  let computerScore = 0;
//This function is responsible for playing the game. It initializes two variables to keep track of the player's and computer's scores: playerScore and computerScore.

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose rock, paper, or scissors");
    //This line prompts the player to enter their choice ("rock," "paper," or "scissors") using the prompt function.
    const computerSelection = getComputerChoice();
    // It calls the getComputerChoice() function to generate a random choice for the computer, which is stored in the computerSelection variable.
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! You win the game.");
  } else if (playerScore < computerScore) {
    console.log("Sorry, you lose the game.");
  } else {
    console.log("It's a tie! The game ends in a draw.");
  }
}
game();