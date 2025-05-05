const botao = document.getElementById("mensagemBtn");
const areaMensagem = document.getElementById("mensagemArea");

botao.addEventListener("click", function() {

  if (areaMensagem.textContent === "") {
    areaMensagem.textContent = "''Quando pensar em desistir, lembre-se do que lhe fez começar!''";
  } else {
    areaMensagem.textContent = "";
  }
});