// Archivo: app.js

// 1. Seleccionamos los elementos del DOM que necesitamos controlar
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('main-nav');

// 2. Añadimos un "escuchador de eventos" al botón
// Esto le dice al navegador: "Oye, cuando alguien haga clic en 'hamburgerBtn'..."
hamburgerBtn.addEventListener('click', () => {
    // 3. "...ejecuta esta acción"
    // classList.toggle() es como un interruptor de luz:
    // Si la clase 'nav-active' está, la quita. Si no está, la pone.
    navMenu.classList.toggle('nav-active');
});