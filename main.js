let humanScore = 0;
let computerScore = 0;
let buttons = document.querySelector(".js-buttons");
const score = document.querySelector(".js-score");
const message1 = document.querySelector("#message1");
const message2 = document.querySelector("#message2");
const pscore = document.querySelector("#player-score");
const cscore = document.querySelector("#computer-score");
const result = document.querySelector("#result");
//const display = document.createElement("div");
//const message = document.createElement("span");

function computerMove() {
  let value = Math.random();
  let compMove;
  if (value < 0.33) {
    compMove = 'rock'
  } else if (value >= 0.33 && value < 0.66) {
    compMove = 'paper'
  } else {
    compMove = 'scissors'
  }
  return compMove;
}

    
buttons.addEventListener("click", getPlayerMove);

function getPlayerMove(e) {
  //avoid page reload
  e.preventDefault();
  let playerMove;
  let target = e.target;

  switch (target.id) {
    case 'rock':
      playerMove = 'rock';
      break;
    case 'paper':
      playerMove = 'paper';
      break;
    case 'scissors':
      playerMove = 'scissors';
      break;
  }

  message2.textContent = playRound(computerMove(), playerMove);
  pscore.textContent = humanScore.toString();
  cscore.textContent = computerScore.toString();

  checkRestart();

}

function playRound (compMove, playerMove) {
  let result;
  message1.textContent = `Computer played ${compMove}, and user played ${playerMove}`; 
  if (compMove === playerMove) {
    return "Tie";
  } else if (compMove === "scissors" && playerMove === "paper") {
    computerScore += 1;
    return "You lose, scissors beats paper!";
  } else if (compMove === "rock" && playerMove === "scissors") {
    computerScore += 1;
    return "You lose, rock beats scissors";
  } else if (compMove === "paper" && playerMove === "rock") {
    computerScore += 1;
    return "You lose, paper beats scissors";
  } else {
    console.log(`Computer played ${compMove}, and user played ${playerMove}`)
    humanScore += 1;
    return "You win";
  }
}

function checkRestart() {
  if (humanScore === 5) {
    result.textContent = "You win the game!";
    buttons.removeEventListener("click", getPlayerMove);
    buttons.addEventListener("click", restart);
    return;
  } else if (computerScore === 5) {
    result.textContent = "Computer wins the game!";
    buttons.removeEventListener("click", getPlayerMove);
    buttons.addEventListener("click", restart);
    return;
  } else {
    return;
  }
}

function restart() {

  message1.textContent = "";
  message2.textContent = "";
  humanScore = 0;
  computerScore = 0;
  pscore.textContent = "0";
  cscore.textContent = "0";
  result.textContent = "";

  buttons.removeEventListener("click", restart);
  buttons.addEventListener("click", getPlayerMove);

  return;

}

  

    

