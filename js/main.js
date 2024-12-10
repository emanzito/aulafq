document.getElementById("submeter").addEventListener("click", form);

function form() {
  var coiso = document.getElementById("caixa").value;
  if (coiso === "") {
    window.alert("Por favor, preenche o campo!");
  } else if (coiso === "Não gosto de Física, prefiro algo mais interessante e útil.") {
    window.alert("Parabéns monco, concluíste o desafio!");
  } else {
    window.alert("A frase está incorreta, burro!");
  }
}

let tempoRestante = 45 * 60; // 45 minutos em segundos

function formatarTempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const seg = segundos % 60;
  return `${minutos < 10 ? "0" : ""}${minutos}:${seg < 10 ? "0" : ""}${seg}`;
}

function iniciarCronometro() {
  const cronometro = document.getElementById("cronometro");
  const intervalo = setInterval(() => {
    if (tempoRestante > 0) {
      tempoRestante--;
      cronometro.textContent = formatarTempo(tempoRestante);
    } else {
      clearInterval(intervalo);
      cronometro.textContent = "Tempo esgotado!";
      alert("O tempo acabou! Não conseguiste completar o desafio.");
    }
  }, 1000);
}

window.onload = iniciarCronometro();
