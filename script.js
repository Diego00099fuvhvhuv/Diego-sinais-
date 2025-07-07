const linhas = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

const sinalContainer = document.getElementById("sinal-container");
const botao = document.getElementById("gerar-btn");
const beep = document.getElementById("beep");

function gerarSinal() {
  const linha = linhas[Math.floor(Math.random() * linhas.length)];
  const horario = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sinalHTML = `<p>⚡ ${horario} - ${linha.join(" ")}</p>`;
  sinalContainer.innerHTML = sinalHTML + sinalContainer.innerHTML;

  beep.play();
}

botao.addEventListener("click", gerarSinal);
