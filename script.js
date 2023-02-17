let canvas = document.getElementById("gameCanvas");
let canvasWidth = document.getElementById("canvasWidth").valueAsNumber;
let canvasHeight = document.getElementById("canvasHeight").valueAsNumber;
let sqsize = 50;
canvas.width = canvasWidth * sqsize;
canvas.height = canvasHeight * sqsize;

let context = canvas.getContext("2d");
let herox = 1;
let heroy = 2;

let img = new Image();
img.src = "house.png"  

let housex = Math.floor(Math.random() * canvasWidth);
let housey = Math.floor(Math.random() * canvasHeight);

let hero = new Image();
hero.src = "hero.png"
function drawMapAndHero() {
    context.fillStyle = "white";
    context.fillRect(0,0, canvasWidth * sqsize, canvasHeight * sqsize);
    context.drawImage(hero, herox * sqsize, heroy * sqsize, sqsize, sqsize);
    context.drawImage(img, housex * sqsize, housey * sqsize, sqsize, sqsize);
for (let i = 0; i < canvasWidth; i++) {
	for (let j = 0; j < canvasHeight; j++) {
	
		context.strokeRect(i * sqsize, j * sqsize, sqsize, sqsize);
		}
	}
}

drawMapAndHero();

function moveUp() {
    heroy--;
    drawMapAndHero();

    }
    function moveDown() {
    heroy++
    drawMapAndHero();
    }
    function moveLeft() {
    herox--;
    drawMapAndHero();
    }
    function moveRight() {
    herox++;
    drawMapAndHero();
    }

document.onkeypress = function(e) { 
    let key = e.key;
    switch(key) {
    case "w": moveUp(); break;
    case "s": moveDown(); break;
    case "a": moveLeft(); break;
    case "d": moveRight(); break;
    
    
    }
    }

canvas.onclick = function(e) {
    let mousePosX = e.x - e.originalTarget.offsetLeft;
    let mousePosY = e.y  - e.originalTarget.offsetTop;
    
    herox = Math.floor(mousePosX / sqsize);
    heroy = Math.floor(mousePosY / sqsize);
    
    drawMapAndHero();
}