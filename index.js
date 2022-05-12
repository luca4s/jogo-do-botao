// Olá, querido hacker viciado em apertar botões! Este é o código do "jogo", meio bagunçado, eu sei... Mas fazer o que né? Eu tava entediado então decidi programar um jogo no computador da biblioteca.
console.log("Olá, querido hacker viciado em apertar botões! Suponho que você está tentando trapacear neste jogo, correto? Bem, se for assim, tudo bem! Eu vou te dar alguns ''cheat-codes''.\n\n1. botaoApertado = X (troque X pelo valor que você quiser e você poderá mudar o valor de quantos clicks você deu.)\n\n2. setInterval(function() { botao() }, X) (funciona como se fosse um auto-clicker. troque X pelo valor em milisegundos do intervalo entre os clicks.)");
var botaoApertado = 0;
var texto = document.getElementById("texto");
var botao = document.getElementById("botao");
function emClique() {
    botaoApertado += 1;
    botao.innerHTML = `Aperte este botão. (${botaoApertado})`;
    if (botaoApertado > 4999) {
        texto.innerHTML = "SUFICIENTE É SUFICIENTE! Vá tocar grama, ô seu viciado em clicar em um botão aleatório que você achou no computador da escola!";
        botao.style.display = "none";
    } else if (botaoApertado > 2499) {
        texto.innerHTML = "Por favor... SAIA IMEDIATAMENTE.";
    } else if (botaoApertado > 999) {
        texto.innerHTML = "É sério que você apertou este botão mais de 1000 vezes? Você realmente estava entediado para gastar seu tempo com isso.";
    } else if (botaoApertado > 749) {
        texto.innerHTML = "750 vezes!? Certeza que você não está gastando seu tempo com nada?";
    } else if (botaoApertado > 499) {
        texto.innerHTML = "Uau, 500 vezes? Como você se quer achou este ''jogo''?";
    } else if (botaoApertado > 249) {
        texto.innerHTML = "Minha nossa... 250 vezes? Você realmente está viciado.";
    } else if (botaoApertado > 99) {
        texto.innerHTML = "Você realmente se viciou neste ''jogo'' em? Você apertou o botão 100 vezes...";
    } else if (botaoApertado > 49) {
        texto.innerHTML = "50 vezes, bem legal.";
    };
};
//Feito durante o JIM 2022 (10/05/2022).
