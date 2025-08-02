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

// --- LÓGICA PARA EL CARRUSEL DE FONDO EN EL HERO ---

// 1. Array con las rutas de tus imágenes
//    ¡Asegúrate de que estas rutas coincidan con tus archivos!
const heroImages = [
    'img/bg-img/paris-fotor.jpg',
    'img/bg-img/newyork-fotor.jpg',
    'img/bg-img/canada-fotor.jpg',
    'img/bg-img/londres-fotor.jpg'
];

// 2. Seleccionamos la sección 'hero'
const heroSection = document.getElementById('hero');

// 3. Establecemos la primera imagen del carrusel al cargar la página
heroSection.style.backgroundImage = `url('${heroImages[0]}')`;

// 4. Variable para llevar la cuenta de la imagen actual
let currentImageIndex = 0;

// 5. Función para cambiar la imagen
function changeBackgroundImage() {
    // Calculamos el índice de la siguiente imagen, volviendo al inicio si llega al final
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    
    // Obtenemos la URL de la nueva imagen
    const newImageUrl = heroImages[currentImageIndex];
    
    // Cambiamos el fondo de la sección
    heroSection.style.backgroundImage = `url('${newImageUrl}')`;
}

// 6. Usamos setInterval para llamar a la función cada 5 segundos (5000 milisegundos)
setInterval(changeBackgroundImage, 5000);