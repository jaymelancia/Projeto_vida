const botoes = document.querySelectorAll(".botao")
const textos = document.querySelectorAll(".aba-conteudo")
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
        textos[i].classList.add("ativo")
    }
    console.log(botoes);
}
const contadores = document.querySelectorAll("contador")
const tempoObjetivo1 = new Date("2045-28-12T23:59:59")
const tempoObjetivo2 = new Date("2042-28-12T23:59:59")
const tempoObjetivo3 = new Date("2029-28-12T23:59:59")
const tempoObjetivo4 = new Date("2070-28-12T23:59:59")