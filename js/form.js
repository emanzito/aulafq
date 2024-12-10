document.getElementById("submeter").addEventListener("click", form);

function form() {
  var coiso = document.getElementById("caixa").value;
  if (coiso === "") {
    window.alert("Por favor, preenche o campo!");
  } else if (coiso === "A física prova que cair no chão é ciência, não azar.") {
    window.alert("Parabéns monco, concluíste o desafio!");
  } else {
    window.alert("A frase está incorreta!");
  }
}
