//Atribuir valor dos elementos para a variavel
const paisSelecionado = document.querySelector("#paisSelecionado");
const exibirPais = document.querySelector("#exibirPais");

const informacoesPaises = {
    brasil: {
        nome: "Brasil",
        capital: "Brasília",
        populacao: "209 milhões",
        idioma: "Português"
    },

    eua: {
        nome: "Estados Unidos",
        capital: "Washington, D.C.",
        populacao: "331 milhões",
        idioma: "Inglês"
    },

    canada: {
        nome: "Canadá",
        capital: "Ottawa",
        populacao: "37 milhões",
        idioma: "Inglês"
    },

    japao: {
        nome: "Japão",
        capital: "Tóquio",
        populacao: "13,96 milhões",
        idioma: "Japonês"
    },
}

//função para atualizar a cor exibida, quando alterar a seleção
function atualizarInformacoesPaises() {
    const valorPaisSelecionado = paisSelecionado.value;
    if (valorPaisSelecionado == "") {
        exibirPais.textContent = ``
    } else {
        exibirPais.textContent = `País: ${informacoesPaises[valorPaisSelecionado].nome}, Capital: ${informacoesPaises[valorPaisSelecionado].capital}, Populção: ${informacoesPaises[valorPaisSelecionado].populacao}, Idioma: ${informacoesPaises[valorPaisSelecionado].idioma}`
    }
}

paisSelecionado.addEventListener("change", atualizarInformacoesPaises);

