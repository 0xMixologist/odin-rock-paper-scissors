let prompt_message = "Make your move! "

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

console.log(getComputerChoice());
    
function getHumanChoice(message) {
  let input = prompt(message);
  let fchar = input[0].toUpperCase();
  let rest = (input.slice(1, input.length)).toLowerCase();
  let playerMove = fchar + rest;
  console.log("This is the player move: " + playerMove);
  if (playerMove != "Rock" && playerMove != "Paper" && playerMove != "Scissors") { 
    return 1;
  } else {
    return playerMove;
  }
}

console.log(getHumanChoice(prompt_message));


