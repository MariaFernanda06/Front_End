//Atribui a uma variavel o elemento selecionado
canvas = document.querySelector("canvas");

//Definir o tamanho do canvas
canvas.width = 1500;
canvas.height = 800;

//A variavel ctx se torna um objeto onde pode ser atribuidos metodos
ctx = canvas.getContext("2d");

//Atribuimos propiedade e metodos ao nosso
//Posições (X, Y, Width, Heigth)
ctx.fillStyle = "red"
ctx.fillRect(100, 80, 150, 200)
ctx.fillStyle = "rgba(0, 255,0,0.5)"
ctx.fillRect(200, 100, 500, 100)
ctx.fillStyle = "blue"
ctx.fillRect(100, 500, 600, 100)
ctx.fillStyle = "purple"
ctx.fillRect(100, 400, 600, 100)

//Desenhando uma linha
//Inicio do desenho
ctx.beginPath();
//Posição de início da linha
ctx.moveTo(50, 450);
ctx.lineTo(700, 50);
ctx.lineTo(500, 300);
ctx.lineTo(700, 300);
ctx.fillStyle = "black"
ctx.stroke();
ctx.closePath();

//Criando um circulo 
//Posições para criação
//x, y, raio, anguloinicial, angulofinal
ctx.beginPath();
ctx.arc(400, 450, 100, 0, Math.PI * 2);
ctx.fillStyle = "black"
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(400, 650, 50, 0, Math.PI * 2);
ctx.fillStyle = "red"
ctx.stroke();
ctx.fill();
ctx.closePath();

//Deixando as posições randomicas
for(var i = 0; i < 10; i++)
{
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    ctx.beginPath();
    //ctx.arc(x, y, Math.random() * 100, 0, Math.PI * 2);
    ctx.arc(400, 400, Math.random() * 100, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 0, 225, 0.5)"
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}



//meu desenho
ctx.fillStyle = "pink"
ctx.fillRect(900, 200, 250, 250)
ctx.fillStyle = "pink"
ctx.fillRect(870, 200, 30, 70)
ctx.fillStyle = "pink"
ctx.fillRect(1150, 200, 30, 70)
ctx.fillStyle = "white"
ctx.fillRect(1080, 300, 60, 30)
ctx.fillStyle = "white"
ctx.fillRect(910, 300, 60, 30)
ctx.fillStyle = "black"
ctx.fillRect(900, 300, 35, 30)
ctx.fillStyle = "black"
ctx.fillRect(1115, 300, 35, 30)
ctx.fillStyle = "#ffebf2"
ctx.fillRect(975, 350, 100, 70)
ctx.fillStyle = "#ff97c2"
ctx.fillRect(975, 365, 35, 30)
ctx.fillStyle = "#ff97c2"
ctx.fillRect(1040, 365, 35, 30)





