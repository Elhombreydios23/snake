
// Código JavaScript previo
let puntuacion = 0;

function actualizarPuntuacion() {
    puntuacion += 100;
    document.getElementById('puntuacion').innerText = 'Puntuación: ' + puntuacion;
}

function generarFruta() {
    fruta.x = Math.floor(Math.random() * (juego.width / 20)) * 20;
    fruta.y = Math.floor(Math.random() * (juego.height / 20)) * 20;
    actualizarPuntuacion(); // Actualizar la puntuación cuando se genera una nueva fruta
}

// Resto del código JavaScript previo

document.getElementById('iniciarJuego').addEventListener('click', principal);

document.getElementById('iniciarJuego').addEventListener('click', function() {
    serpiente = [{x: 160, y: 200}]; // Restablecer la serpiente a la posición inicial
    dx = 20; // Restablecer la dirección inicial
    dy = 0;
    puntuacion = 0; // Restablecer la puntuación
    document.getElementById('puntuacion').innerText = 'Puntuación: ' + puntuacion;
    principal(); // Iniciar el juego
});

document.addEventListener('keydown', function(evento) {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(evento.key)) {
        evento.preventDefault();
    }
}, false);
