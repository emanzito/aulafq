function form() {
  const caixa = document.getElementById("caixa").value; // Obtém o valor do input
  const mensagem = document.getElementById("mensagem"); // Elemento de mensagem
  const imagem = document.getElementById("imagemPopup"); // Div com a imagem
  const confetis = document.getElementById("confetis"); // Div com o GIF de confetes
  const musica = document.getElementById("musica"); // Elemento de áudio

  if (caixa.trim() === "") {
    alert("Por favor, preenche o campo!");
  } else if (caixa === "A física prova que cair no chão é ciência, não azar") {
    window.alert("Parabéns, completas-te o desafio!");
    imagem.style.display = "block"; // Mostra a imagem
    confetis.style.display = "block"; // Mostra o GIF de confetes
    musica.play(); // Toca a música
  } else {
    alert("A frase está incorreta!");
  }
}

export { form };
