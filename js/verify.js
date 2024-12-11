let tempoRestante = localStorage.getItem("tempoRestante") ? parseInt(localStorage.getItem("tempoRestante")) : 3600; // 1 hora em segundos

function formatarTempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const seg = segundos % 60;
  return `${minutos < 10 ? "0" : ""}${minutos}:${seg < 10 ? "0" : ""}${seg}`;
}

function iniciarCronometro() {
  const cronometro = document.getElementById("cronometro");
  cronometro.textContent = formatarTempo(tempoRestante);

  const intervalo = setInterval(() => {
    if (tempoRestante > 0) {
      tempoRestante--;
      localStorage.setItem("tempoRestante", tempoRestante); // Atualiza no localStorage
      cronometro.textContent = formatarTempo(tempoRestante);
    } else {
      clearInterval(intervalo);
      localStorage.removeItem("tempoRestante"); // Remove ao esgotar
      cronometro.textContent = "Tempo esgotado!";
      alert("O tempo acabou! Não conseguiste completar o desafio.");
    }
  }, 1000);
}

window.onload = iniciarCronometro;

// Funções de verificação, agora com a redução do tempo
function verificarResposta(respostaCorreta, inputId, mensagemCorreta, tempoReduzido) {
  const input = document.getElementById(inputId).value;
  const res = document.getElementById("resultado");

  if (input.trim() === "") {
    window.alert("Por favor, preenche o campo!");
    return;
  }

  if (input === respostaCorreta) {
    res.innerHTML = mensagemCorreta;
  } else {
    res.innerHTML = "A resposta está incorreta.";
    tempoRestante -= tempoReduzido; // Reduz tempo
    if (tempoRestante < 0) tempoRestante = 0; // Evita que o tempo seja negativo
    localStorage.setItem("tempoRestante", tempoRestante); // Atualiza no localStorage
    alert(`Resposta incorreta! Tempo reduzido em ${tempoReduzido / 60} minutos.`);
  }
}

// Agora as funções de verificação podem ser chamadas dessa forma:
function verify1() {
  verificarResposta(
    "velocidade/aceleração",
    "box",
    "Parabéns, a resposta está correta, aqui a palavra: A!",
    240 // 4 minutos
  );
}

function verify2() {
  verificarResposta("movimento circular/centro", "box", "Parabéns, a resposta está correta, aqui a palavra: física!", 240);
}

function verify3() {
  verificarResposta(
    "É a variação da velocidade num determinado intervalo de tempo",
    "box",
    "Parabéns, a resposta está correta, aqui a palavra: prova!",
    240
  );
}

function verify4() {
  verificarResposta("w = f x d x cos a", "box", "Parabéns, a resposta está correta, aqui a palavra: que!", 240);
}

function verify5() {
  verificarResposta("2500N", "box", "Parabéns, a resposta está correta, aqui a palavra: cair", 240);
}

function verify6() {
  verificarResposta("p = m x g", "box", "Parabéns, a resposta está correta, aqui a palavra: no!", 240);
}

function verify7() {
  verificarResposta("29,4m/s", "box", "Parabéns, a resposta está correta, aqui a palavra: chão!", 240);
}

function verify8() {
  verificarResposta("1,70 x 10^10", "box", "Parabéns, a resposta está correta, aqui a palavra: é!", 240);
}

function verify9() {
  verificarResposta("8000N", "box", "Parabéns, a resposta está correta, aqui a palavra: ciência!", 240);
}

function verify10() {
  verificarResposta(
    "20,4m",
    "box",
    "Parabéns, a resposta está correta, aqui a palavra: não azar! Coloca agora todas as palavras que juntas-te no formulário",
    240
  );
}
