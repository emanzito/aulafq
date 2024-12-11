import { tempoRestante, formatarTempo } from "./cronometro.js";

const penalizacao = 240; // Tempo a ser reduzido (4 minutos em segundos)

function form() {
  const caixa = document.getElementById("caixa").value;
  const mensagem = document.getElementById("mensagem");
  const resultado = document.getElementById("resultado");
  const imagem = document.getElementById("imagem");

  if (caixa === "") {
    alert("Por favor, preenche o campo!");
  } else if (caixa === "A física prova que cair no chão é ciência, não azar.") {
    mensagem.textContent = "Parabéns, concluíste o desafio!";
    imagem.classList.add("mostrar");
    resultado.style.display = "block";
    setTimeout(() => {
      resultado.style.opacity = "1";
    }, 10);
  } else {
    alert("A frase está incorreta!");
    if (tempoRestante > 0) {
      tempoRestante -= penalizacao; // Reduz 4 minutos do tempo restante
      if (tempoRestante <= 0) tempoRestante = 0; // Evita valores negativos
      const cronometro = document.getElementById("cronometro");
      cronometro.textContent = formatarTempo(tempoRestante); // Atualiza o cronômetro na tela
    }
  }
}

export { form };
