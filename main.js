let prompt_message = "Make your move! "
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let value = Math.random();
  let compMove;
  if (value < 0.33) {
    compMove = "Rock"
  } else if (value >= 0.33 && value < 0.66) {
    compMove = "Paper"
  } else {
    compMove = "Scissors"
  }
  return compMove;
}

    
function getHumanChoice(message) {
  let input = prompt(message);
  let fchar = input[0].toUpperCase();
  let rest = (input.slice(1, input.length)).toLowerCase();
  let playerMove = fchar + rest;
  if (playerMove != "Rock" && playerMove != "Paper" && playerMove != "Scissors") { 
    return 1;
  } else {
    return playerMove;
  }
}


function playRound (compMove, playerMove) {
  let result;
  if (compMove === playerMove) {
    console.log(`Computer played ${compMove}, and user played ${playerMove}`)
    return "Tie";
  } else if (compMove === "Scissors" && playerMove === "Paper") {
    console.log(`Computer played ${compMove}, and user played ${playerMove}`)
    computerScore += 1;
    return "You lose, scissors beats paper!";
  } else if (compMove === "Rock" && playerMove === "Scissors") {
    console.log(`Computer played ${compMove}, and user played ${playerMove}`)
    computerScore += 1;
    return "You lose, rock beats scissors";
  } else if (compMove === "Paper" && playerMove === "Rock") {
    console.log(`Computer played ${compMove}, and user played ${playerMove}`)
    computerScore += 1;
    return "You lose, paper beats scissors";
  } else {
    console.log(`Computer played ${compMove}, and user played ${playerMove}`)
    humanScore += 1;
    return "You win";
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound (getComputerChoice(), getHumanChoice(prompt_message));
  }
  if (computerScore > humanScore) {
    return `The computer wins the game. Score -> Computer: ${computerScore} Human: ${humanScore}`;
  } else if (computerScore < humanScore) {
    return `You win the game. Score -> Computer: ${computerScore} Human: ${humanScore}`;
  } else {
    return "It's a tie";
  }
}


console.log(playGame());

