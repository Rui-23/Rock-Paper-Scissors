const buttons = document.querySelectorAll('button');
const results = document.querySelector('.result');
const scoreOfPlayer = document.querySelector('#playerScore');
const scoreOfComputer = document.querySelector('#computerScore');
const btnWrapper = document.querySelector('.btnContainer');
const replay = document.querySelector('.replay');

let playerScore = 0;
let computerScore = 0;

for (i = 0; i < 3; i++) {
  buttons[i].addEventListener('click', (e) => {
    let playerSelection = e.target.textContent.toLowerCase();
    //console.log(playerSelection);
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });
}

function getComputerChoice() {
  let computerSelection = randomChoice();
  return computerSelection;
}

function randomChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let choice;
  if (randomNumber === 0) {
    choice = 'rock';
  } else if (randomNumber === 1) {
    choice = 'paper';
  } else if (randomNumber === 2) {
    choice = 'scissors';
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    result = "Computer wins!";
    computerScore += 1;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result = "You win!";
    playerScore += 1;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = "You win!";
    playerScore += 1;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result = "Computer wins!";
    computerScore += 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result = "Computer wins!";
    computerScore += 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result = "You win!";
    playerScore += 1;
  } else if (playerSelection === computerSelection) {
    result = "It's a tie!";
  }

  /*
  console.log("Your move: " + playerSelection);
  console.log("Computer's move: " + computerSelection);
  console.log(result);
  */
 
  scoreOfPlayer.textContent = "Your total score: " + playerScore;
  scoreOfComputer.textContent = "Computer's total score: "+ computerScore;
  
  if (playerScore < 5 && computerScore < 5) {
    showResults(playerSelection, computerSelection, result);
  } else if (playerScore > computerScore && playerScore === 5) {
    results.textContent = "The final winner is You! 🙌"
    btnWrapper.style.display = "none";
    playAgain();
  } else if (computerScore > playerScore && computerScore === 5) {
    results.textContent = "The final winner is Computer! 👀"
    btnWrapper.style.display = "none";
    playAgain();
  }
}

function showResults(playerSelection, computerSelection, result) {
  if (playerSelection === 'rock') {
    playerSelection = '✊🏻';
  } else if (playerSelection === 'paper') {
    playerSelection = '🖐🏻';
  } else if (playerSelection === 'scissors') {
    playerSelection = '✌🏻';
  }

  if (computerSelection === 'rock') {
    computerSelection = '✊🏻';
  } else if (computerSelection === 'paper') {
    computerSelection = '🖐🏻';
  } else if (computerSelection === 'scissors') {
    computerSelection = '✌🏻';
  }

  results.textContent = `Results: You select ${playerSelection}. Computer chooses ${computerSelection}. ${result}`;
}

function playAgain() {
  replay.style.display = "block";
  replay.addEventListener('click', () => {
    playerScore = computerScore = 0;
    scoreOfPlayer.textContent = "Your score: " + playerScore;
    scoreOfComputer.textContent = "Computer's score: "+ computerScore;
    results.textContent = "Results:"
    btnWrapper.style.display = "block";
    replay.style.display = "none";
  });
}