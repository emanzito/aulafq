document.getElementById("submeter").addEventListener("click", form);

function form() {
  var coiso = document.getElementById("caixa").value;
  if (coiso === "") {
    window.alert("Por favor, preenche o campo!");
    return;
  } else if (coiso === "Não gosto de Física, prefiro algo mais interessante e útil.") {
    window.alert("Parabéns monco, concluiste o desafio!");
  } else {
    window.alert("A frase está incorreta, burro!");
  }
}
