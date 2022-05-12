var cliques = 0;
var modo = true;
const texto = document.getElementById('texto');
const botao = document.getElementById('botao');
const btnModo = document.getElementById('modo');
const mensagens = {
    50: '50 vezes, bem legal.',
    100: 'Você realmente se viciou neste "jogo" em? Você apertou o botão 100 vezes...',
    250: 'Minha nossa... 250 vezes? Você realmente está viciado.',
    500: 'Uau, 500 vezes? Como você se quer achou este "jogo"?',
    750: '750 vezes!? Certeza que você não está gastando seu tempo com nada?',
    1000: 'É sério que você apertou este botão mais de 1000 vezes? Você realmente estava entediado para gastar seu tempo com isso.',
    2500: 'Por favor... SAIA IMEDIATAMENTE.',
    5000: 'SUFICIENTE É SUFICIENTE! Vá tocar grama, ô seu viciado em clicar em um botão aleatório que você achou em um site aleatório!'
};
function emClique() {
    cliques += 1;
    botao.innerHTML = `Aperte este botão. (${cliques})`;
    if (mensagens[cliques] !== undefined) {
        texto.innerHTML = mensagens[cliques]
    }
};
function modoEscuro() {
    if (modo === true) {
        modo = false
        btnModo.innerHTML = "Desativar Modo Escuro."
        document.body.style = "background-color: black; color: white;"
    } else {
        modo = true
        btnModo.innerHTML = "Ativar Modo Escuro."
        document.body.style = "background-color: white; color: black;"
    }
};
