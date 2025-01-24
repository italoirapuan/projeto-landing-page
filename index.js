// Seleção dos elementos
var setaDireita = document.getElementById("seta-direita");
var setaEsquerda = document.getElementById("seta-esquerda");
var Leonardo = document.getElementById("Leonardo");
var Bruna = document.getElementById("Bruna");

// Função para rolar para a direita
function RolarParaDireita() {
    Leonardo.style.display = "none"; // Oculta o card Leonardo
    Bruna.style.display = "flex";   // Mostra o card Bruna
    setaDireita.style.display = "none"; // Oculta a seta direita
    setaEsquerda.style.display = "flex"; // Mostra a seta esquerda
}

// Função para rolar para a esquerda
function RolarParaEsquerda() {
    Leonardo.style.display = "flex"; // Mostra o card Leonardo
    Bruna.style.display = "none";    // Oculta o card Bruna
    setaDireita.style.display = "flex"; // Mostra a seta direita
    setaEsquerda.style.display = "none"; // Oculta a seta esquerda
}
