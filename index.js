/*
Autor: Jonathan Laco
GitHub: https://github.com/jonathan-laco

Este é um jogo simples de Pedra-Papel-Tesoura feito como parte de um projeto para aula da faculdade.

Para uma melhor experiência, certifique-se de executar o arquivo index.js em conjunto com index.css e index.html.

Caso não consiga vincular os arquivos corretamente, você também pode acessar o jogo através do link:
https://jonathanlaco.me/game

Divirta-se jogando!
*/

let playerScore = 0;
let computerScore = 0;
let round = 1;

function play(playerChoice) {
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  let result;
  let computerResponse;

  if (
    (playerChoice === 3 && computerChoice === 1) ||
    (playerChoice === 1 && computerChoice === 2) ||
    (playerChoice === 2 && computerChoice === 3)
  ) {
    playerScore++;
    result = "Você venceu esta rodada!";
  } else if (
    (playerChoice === 1 && computerChoice === 3) ||
    (playerChoice === 2 && computerChoice === 1) ||
    (playerChoice === 3 && computerChoice === 2)
  ) {
    computerScore++;
    result = "O computador venceu esta rodada!";
  } else {
    result = "Empate!";
  }
  
  if (computerChoice === 1) {
    computerResponse = "O computador escolheu Tesoura!";
  } else if (computerChoice === 2) {
    computerResponse = "O computador escolheu Papel!";
  } else {
    computerResponse = "O computador escolheu Pedra!";
  }

  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");
  playerScoreElement.textContent = "Jogador: " + playerScore;
  computerScoreElement.textContent = "Computador: " + computerScore;

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "Rodada " + round + ": " + result + "<br>" + computerResponse;
  resultElement.style.fontFamily = "Crimson Text";

  round++;

  if (playerScore === 3 || computerScore === 3) {
    endGame();
  }
}

function endGame() {
  let finalResult;

  if (playerScore === 3) {
    finalResult = "Você venceu o jogo!";
  } else {
    finalResult = "O computador venceu o jogo!";
  }

  const resultElement = document.getElementById("result");
  resultElement.textContent = finalResult;
  resultElement.style.fontFamily = "Crimson Text";

  const choices = document.getElementsByClassName("choice");
  for (let i = 0; i < choices.length; i++) {
    choices[i].disabled = true;
  }

  const restartBtn = document.getElementById("restart-btn");
  restartBtn.disabled = false;
  restartBtn.style.backgroundColor = "#4caf50";

  const choiceButtons = document.querySelectorAll(".choice");
  choiceButtons.forEach((button) => {
    button.classList.add("game-over");
  });
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");
  playerScoreElement.textContent = "Jogador: " + playerScore;
  computerScoreElement.textContent = "Computador: " + computerScore;

  const resultElement = document.getElementById("result");
  resultElement.textContent = "";
  resultElement.style.fontFamily = "Crimson Text";

  const choices = document.getElementsByClassName("choice");
  for (let i = 0; i < choices.length; i++) {
    choices[i].disabled = false;
    choices[i].classList.remove("game-over");
  }

  const restartBtn = document.getElementById("restart-btn");
  restartBtn.disabled = true;
  restartBtn.style.backgroundColor = "#ff0000";
}

window.onload = function() {
  const restartBtn = document.getElementById("restart-btn");
  restartBtn.disabled = true;
  restartBtn.style.backgroundColor = "#ff0000";
  restartBtn.classList.add("game-over");
};
//
