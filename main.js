let humanScore = 0;
let computerScore = 0;
let buttons = document.querySelector(".js-buttons");
const score = document.querySelector(".js-score");
const message = document.querySelector(".result");
const pscore = document.querySelector("#player-score");
const cscore = document.querySelector("#computer-score");
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
    


  computerMove()
  message.textContent = playRound();
  pscore.textContent = humanScore.toString();
  cscore.textContent = computerScore.toString();

  


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



