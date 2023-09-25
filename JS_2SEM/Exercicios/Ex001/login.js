var informacoes = document.querySelector(".progress");
informacoes.style.display = "none";

function animarinformacoes() {

}

function botaoEnviar() {
    var nome = document.getElementById("nomeUsuario").value
    var idade = document.getElementById("idadeUsuario").value
    var cidade = document.getElementById("cidadeUsuario").value
    var Mostrar = document.getElementById("mostrar")

    if (nome == "" || idade == "" || cidade == "") {
        Mostrar.innerHTML = `
    <div class="alert alert-danger fade show mt-3 " role="alert">

    <span> Preencha todos os campos para continuar </span>
    <button type="button" class="btn-close" data-bs-dismiss="alert"</button>

    </div>  
    `
        return

    } else if (idade <= 0 || idade > 190) {
        Mostrar.innerHTML = `
        <div class="alert alert-danger fade show mt-3 " role="alert">
    
        <span> Idade inválida </span>
        <button type="button" class="btn-close" data-bs-dismiss="alert"</button>
    
        </div>  
        `
        return
    }

    var progresso = 0;
    var barra = document.querySelector(".progress-bar");
    informacoes.style.display = "block";

    var intervalo = setInterval(function () {
        if (progresso > 100) {
            //Limpar valor variavel
            clearInterval(intervalo);
            informacoes.style.display = "none";
            Mostrar.innerHTML = `
    <div class="alert alert-success fade show mt-3 " role="alert">

    <span>
    Informações:<br>
    Nome: ${nome}<br>
    Idade: ${idade}<br>
    Cidade: ${cidade}
    </span>

    <button type="button" class="btn-close" data-bs-dismiss="alert"</button>

    </div>  
    `
        }
        else {
            document.querySelector(".progress-bar").innerHTML = `${progresso}%`;
            progresso++; //incrementa na variavel progress
            barra.style.width = progresso + "%";
        }
    }, 50);
}
