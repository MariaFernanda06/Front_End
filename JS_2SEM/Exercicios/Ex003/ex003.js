const canvas = document.querySelector("#pintarCanvas");
const posicao = document.querySelector("p");
canvas.width = 800;
canvas.height = 600;
const ctx = canvas.getContext("2d");

var X = canvas.width / 2
var Y = canvas.height / 2
var quadrado = 50;


function desenhar()
{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillRect(X, Y, quadrado, quadrado);

    document.querySelector('h1').innerHTML = `X = ${X}  Y = ${Y}`
}

const visor = document.querySelector("#visor");


document.addEventListener("keydown", (event) => {
    if(event.key === "a" || event.key === "A") {
        if(X > 0){
            X -= 10;
            desenhar();
        }
    }
    else if(event.key === "d" || event.key === "D") {
        if(X < 800){
            X += 10;
            desenhar();
        }
    }
    if(event.key === "w" || event.key === "W") {
        if(Y > 0){
            Y -= 10;
            desenhar();
        }
    }
    else if(event.key === "s" || event.key === "S") {
        if(Y < 800){
            Y += 10;
            desenhar();
        }
    }
});

desenhar()



