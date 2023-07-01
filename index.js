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

  // Obter resposta da escolha do computador

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
  }

  const restartBtn = document.getElementById("restart-btn");
  restartBtn.disabled = true;
  restartBtn.style.backgroundColor = "#ff0000";
}
