/*
 Desenvolvido por Jonathan Laco
 GitHub: https://github.com/jonathan-laco

 Este código foi projetado para ser usado em conjunto com os arquivos index.html e index.css,
 a fim de proporcionar uma experiência completa e aprimorada.

 Início do código principal...
*/
let playerScore = 0;
let computerScore = 0;
let round = 1;

function play(playerChoice) {
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  let result;
  let computerResponse;

  if (playerChoice === computerChoice) {
    result = "Empate!";
  } else if (
    (playerChoice === 1 && computerChoice === 2) ||
    (playerChoice === 2 && computerChoice === 3) ||
    (playerChoice === 3 && computerChoice === 1)
  ) {
    playerScore++;
    result = "Você venceu esta rodada!";
  } else {
    computerScore++;
    result = "O computador venceu esta rodada!";
  }

  // Obter resposta da escolha do computador
  if (computerChoice === 1) {
    computerResponse = "O computador escolheu Pedra!";
  } else if (computerChoice === 2) {
    computerResponse = "O computador escolheu Papel!";
  } else {
    computerResponse = "O computador escolheu Tesoura!";
  }

  document.getElementById("player-score").textContent = "Jogador: " + playerScore;
  document.getElementById("computer-score").textContent = "Computador: " + computerScore;

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

  // Desabilitar os botões de escolha
  const choices = document.getElementsByClassName("choice");
  for (let i = 0; i < choices.length; i++) {
    choices[i].disabled = true;
  }

  // Desabilitar o botão de reiniciar partida
  document.getElementById("restart-btn").disabled = false;
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;

  document.getElementById("player-score").textContent = "Jogador: 0";
  document.getElementById("computer-score").textContent = "Computador: 0";

  const resultElement = document.getElementById("result");
  resultElement.textContent = "";
  resultElement.style.fontFamily = "Crimson Text";

  const choices = document.getElementsByClassName("choice");
  for (let i = 0; i < choices.length; i++) {
    choices[i].disabled = false;
  }

  document.getElementById("restart-btn").disabled = true;
}

window.onload = function () {
  document.getElementById("restart-btn").disabled = true;
};

//alert explicando o jogo, toda vez que a pagina for recarregada
alert("Bem-vindo(a) ao nosso jogo de Pedra-Papel-Tesoura! O objetivo é vencer o seu adversário, que no caso é o computador, em uma competição de melhor de 3. Isso significa que o jogo só será concluído quando você ou o computador ganharem 3 partidas.")