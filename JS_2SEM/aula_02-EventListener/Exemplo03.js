//Atribuir valor dos elementos para a variavel
const corSelecionada = document.querySelector("#corSelecionada");
const exibirCor = document.querySelector("#exibirCor");

//função para atualizar a cor exibida, quando alterar a seleção
function atualizarCor()
{
    const corSelecionadaValor = corSelecionada.value;
    exibirCor.textContent = `Cor selecionada: ${corSelecionada.value}`;
    exibirCor.style.color = corSelecionadaValor;
}

//Adicionando um ouvinte de evento change ao select
corSelecionada.addEventListener("change", atualizarCor);