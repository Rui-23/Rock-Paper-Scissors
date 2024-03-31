function getPlayerChoice() {
  let userInput = prompt("Your move:");
  if (userInput === null) {
    alert("You did't make your move!");
    return userInput = "No move";
  } 

  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || 
      userInput === 'paper' || 
      userInput === 'scissors') {
    return userInput;
  } else {
    alert("Invalid Move! Try again.");
    return userInput = "Wrong move";
  }
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
  let result = ' ';

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    result = "Computer wins!";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result = "You win!🎉🎉🎉";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = "You win!🎉🎉🎉";
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result = "Computer wins!";
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result = "Computer wins!";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result = "You win!🎉🎉🎉";
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    result = "It's a tie!";
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    result = "It's a tie!";
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    result = "It's a tie!"
  }
  
  console.log("Your move: " + playerSelection);
  console.log("Computer's move: " + computerSelection);
  console.log(result);
  
 showResults(playerSelection, computerSelection, result);
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
  playerChoice.textContent += playerSelection;
  computerChoice.textContent += computerSelection;
  resultPanel.textContent += result;
  resultPanel.style.backgroundColor = "pink";
}

function playGame(rounds) {
  for (i = 1; i <= rounds;i++) {
    console.log("Round " + i);
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }    
}

let playerChoice = document.querySelector('.playerChoice');
let computerChoice = document.querySelector('.computerChoice');
let resultPanel = document.querySelector('.result');
const btn = document.querySelector('button');
const div = document.querySelector('div');
const para = document.createElement('p');
div.append(para);


//const playerSelection = getPlayerChoice();
//const computerSelection = getComputerChoice();
//playRound(playerSelection, computerSelection);
btn.addEventListener('click', (e) => playGame(2));