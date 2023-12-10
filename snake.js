const juego = document.getElementById('juego');
const ctx = juego.getContext('2d');
let velocidad = 500;
let serpiente = [{x: 160, y: 200}];
let fruta = {x: 120, y: 200};
let dx = 20;
let dy = 0;
let cambiarDireccion = false;

function dibujarSerpienteParte(serpienteParte) {
    ctx.fillStyle = 'green';
    ctx.strokestyle = 'darkgreen';
    ctx.fillRect(serpienteParte.x, serpienteParte.y, 10, 10);
    ctx.strokeRect(serpienteParte.x, serpienteParte.y, 10, 10);
}

function dibujarSerpiente() {
    serpiente.forEach(dibujarSerpienteParte);
}

function moverSerpiente() {
    const cabeza = {x: serpiente[0].x + dx, y: serpiente[0].y + dy};
    serpiente.unshift(cabeza);

    const haComidoFruta = serpiente[0].x === fruta.x && serpiente[0].y === fruta.y;
    if (haComidoFruta) {
        velocidad *= 0.9; // Aumentar la velocidad
        generarFruta();
    } else {
        serpiente.pop();
    }
}

function cambiarDireccionEvento(evento) {
    const teclasIzquierda = 37;
    const teclasArriba = 38;
    const teclasDerecha = 39;
    const teclasAbajo = 40;

    if (cambiarDireccion) return;
    cambiarDireccion = true;

    const teclaPresionada = evento.keyCode;
    const irArriba = dy === -20;
    const irAbajo = dy === 20;
    const irDerecha = dx === 20;
    const irIzquierda = dx === -20;

    if (teclaPresionada === teclasIzquierda && !irDerecha) {
        dx = -20;
        dy = 0;
    }
    if (teclaPresionada === teclasArriba && !irAbajo) {
        dx = 0;
        dy = -20;
    }
    if (teclaPresionada === teclasDerecha && !irIzquierda) {
        dx = 20;
        dy = 0;
    }
    if (teclaPresionada === teclasAbajo && !irArriba) {
        dx = 0;
        dy = 20;
    }
}

function generarFruta() {
    fruta.x = Math.floor(Math.random() * (juego.width / 20)) * 20;
    fruta.y = Math.floor(Math.random() * (juego.height / 20)) * 20;
}

// Definir la imagen de la fruta
let imagenFruta = new Image();
imagenFruta.src = 'data:image/jpeg;base64,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'; // Reemplaza con la ruta a tu imagen

function dibujarFruta() {
    ctx.drawImage(imagenFruta, fruta.x, fruta.y, 20, 20);
}


function limpiarCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, juego.width, juego.height);
}

function principal() {
    if (finDelJuego()) return;
    cambiarDireccion = false;
    setTimeout(function onTick() {
        limpiarCanvas();
        dibujarFruta();
        moverSerpiente();
        dibujarSerpiente();
        principal();
    }, velocidad);
}

function finDelJuego() {
    for (let i = 4; i < serpiente.length; i++) {
        if (serpiente[i].x === serpiente[0].x && serpiente[i].y === serpiente[0].y) return true;
    }
    const chocarParedIzquierda = serpiente[0].x < 0;
    const chocarParedDerecha = serpiente[0].x > juego.width - 20;
    const chocarParedArriba = serpiente[0].y < 0;
    const chocarParedAbajo = serpiente[0].y > juego.height - 20;
    return chocarParedIzquierda || chocarParedDerecha || chocarParedArriba || chocarParedAbajo;
}

generarFruta();
document.addEventListener("keydown", cambiarDireccionEvento);
principal();