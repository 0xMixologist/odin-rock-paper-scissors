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
    

