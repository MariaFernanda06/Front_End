//Selecionando o botão pelo ID
const botao = document.querySelector("#botao");
const botao2 = document.querySelector("#botao2");
const botao3 = document.querySelector("#botao3");
const contadorElemento = document.querySelector("#contador");

//Inicializando o contador
let contador = 0;

//Função que será chamada quando o botão for clicado
function aumentarContador() {
    contador++;
    contadorElemento.textContent = contador;
}
function diminuirContador() {

    if (contador <= 0) {
        document.querySelector("#mostrar").innerHTML =
            `<div class="d-flex justify-content-center mt-3">
            <div class="alert alert-danger w-25 d-flex fade show" role="alert">
            <div>
            <span class="bi bi-exclamation-triangle-fill"> O número não pode ser menor que zero</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"</button>
            </div>
            </div> 
            </div> 
            `
        return
    } else {
        contador--;
    }

    contadorElemento.textContent = contador;
}
function zerarContador() {
    contador = 0;
    contadorElemento.textContent = contador;
}


//Adicionando  ouvinte do evento para clique do botão
botao.addEventListener("click", aumentarContador);
botao2.addEventListener("click", diminuirContador);
botao3.addEventListener("click", zerarContador);
