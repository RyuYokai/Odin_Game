let roundWinner = "";
let message="";
let messageScore="";
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'rock'
      case 1:
        return 'paper'
      case 2:
        return 'scissors'
    }
  }

function playRound(computerSelection) {
    let playerSelection = prompt("Rock, Paper or Scissors, the choice is your", "");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        roundWinner = "tie";
    }
    if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")    
    ){
        roundWinner = "player";
    }
    if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")    
    ){
        roundWinner = "computer";
    }
    messageRound(roundWinner, playerSelection, computerSelection);
    UpdateScore(roundWinner);
}

function messageRound(roundWinner, playerSelection, computerSelection){
    if (roundWinner == "player"){
        message = `You Win! ${playerSelection} beats ${computerSelection}`;
        return console.log(message)
    }
    if (roundWinner == "computer"){
        message = `You lose! ${computerSelection} beats ${playerSelection}`;
        return console.log(message)
    }
    if (roundWinner == "tie"){
         message = `It's a tie ! ${computerSelection} is the same as ${playerSelection}`;
        return console.log(message)
    }
}

function UpdateScore(roundWinner){
    if (roundWinner === 'player') {
        playerScore++
      } else if (roundWinner === 'computer') {
        computerScore++
      }
    messageScore = `Player: ${playerScore} and Computer: ${computerScore}`;
    console.log(messageScore);
}

function playGame(nbRound){
    for (let i = 0; i < nbRound; i++) {
      computerSelection = getComputerChoice(); 
      console.log('Round: ', i);
      playRound(computerSelection);
    }
    console.log(`The game is over! The final score is Player : ${playerScore} and Computer : ${computerScore}.`)
}

function isGameOver(nbRound) {
    return playerScore === nbRound || computerScore === nbRound
  }

let nbRound = prompt("Enter the number of round you want to play", "");
playGame(nbRound);