var dibujo, lienzo, d, s, c, numeroLineas, puntoInit, puntoEnd;
function inicio(){
    "use strict";
    dibujo = document.getElementById("dibujo");
    lienzo = dibujo.getContext("2d");
    
    numeroLineas = 30;

    d = document.getElementById("diagonales");
    s = document.getElementById("semidiagonales");
    c = document.getElementById("limpiar");

    d.addEventListener("click", drawDiagonals);
    s.addEventListener("click", drawSemiDiagonals);
    c.addEventListener("click", clearCanvas);

    clearCanvas();
}

function clearCanvas(){
    lienzo.clearRect(0, 0, dibujo.width, dibujo.height);
    lienzo.beginPath();
    lienzo.strokeStyle = "#AAA"
    lienzo.moveTo(0, 0);
    lienzo.lineTo(0, dibujo.width);
    lienzo.lineTo(dibujo.width, dibujo.height);
    lienzo.lineTo(dibujo.width, 0);
    lienzo.lineTo(0, 0);
    lienzo.stroke();
    lienzo.closePath();
};

function drawDiagonals(){
    for(var linea=0; linea <= numeroLineas; linea++){
        puntoInit = linea * (dibujo.width / numeroLineas);
        puntoEnd = dibujo.width - puntoInit;
        lienzo.beginPath();
        lienzo.strokeStyle = "#F00"
        lienzo.moveTo(puntoInit, 0);
        lienzo.lineTo(dibujo.width, puntoEnd);
        lienzo.stroke();
        lienzo.closePath();
    }
    for(var linea=0; linea <= numeroLineas; linea++){
        puntoInit = linea * (dibujo.width / numeroLineas);
        puntoEnd = dibujo.width - puntoInit;
        lienzo.beginPath();
        lienzo.strokeStyle = "#F00";
        lienzo.moveTo(0, puntoInit);
        lienzo.lineTo(puntoEnd, dibujo.height);
        lienzo.stroke();
        lienzo.closePath();
    }
    for(var linea=0; linea <= numeroLineas; linea++){
        puntoInit = linea * (dibujo.width / numeroLineas);
        puntoEnd = dibujo.height - puntoInit;
        lienzo.beginPath();
        lienzo.strokeStyle = "#F00";
        lienzo.moveTo(puntoInit, 0);
        lienzo.lineTo(0, puntoInit); 
        lienzo.stroke();
        lienzo.closePath();
    }
    for(var linea=0; linea <= numeroLineas; linea++){
        puntoInit = linea * (dibujo.width / numeroLineas);
        puntoEnd = dibujo.height - puntoInit;
        lienzo.beginPath();
        lienzo.strokeStyle = "#F00";
        lienzo.moveTo(dibujo.width, puntoInit);
        lienzo.lineTo(puntoInit, dibujo.height);
        lienzo.stroke();
        lienzo.closePath();
    }
};

function drawSemiDiagonals(){
    for(var linea=0; linea <= numeroLineas; linea++){
        puntoInit = linea * (dibujo.width / numeroLineas);
        puntoEnd = dibujo.width - puntoInit;
        lienzo.beginPath();
        lienzo.strokeStyle = "#00F";
        lienzo.moveTo(puntoInit, dibujo.height);
        lienzo.lineTo(dibujo.width, puntoEnd); 
        lienzo.stroke();
        lienzo.closePath();
    }
    for(var linea=0; linea <= numeroLineas; linea++){
        puntoInit = linea * (dibujo.width / numeroLineas);
        puntoEnd = dibujo.width - puntoInit;
        lienzo.beginPath();
        lienzo.strokeStyle = "#00F";
        lienzo.moveTo(0, puntoInit);
        lienzo.lineTo(puntoEnd, 0); 
        lienzo.stroke();
        lienzo.closePath();
    }
    for(var linea=0; linea <= numeroLineas; linea++){
        puntoInit = linea * (dibujo.width / numeroLineas);
        puntoEnd = dibujo.width - puntoInit;
        lienzo.beginPath();
        lienzo.strokeStyle = "#00F";
        lienzo.moveTo(puntoInit, 0);
        lienzo.lineTo(dibujo.width, puntoInit); 
        lienzo.stroke();
        lienzo.closePath();
    }
    for(var linea=0; linea <= numeroLineas; linea++){
        puntoInit = linea * (dibujo.width / numeroLineas);
        puntoEnd = dibujo.width - puntoInit;
        lienzo.beginPath();
        lienzo.strokeStyle = "#00F";
        lienzo.moveTo(0, puntoInit);
        lienzo.lineTo(puntoInit, dibujo.height); 
        lienzo.stroke();
        lienzo.closePath();
    }
}