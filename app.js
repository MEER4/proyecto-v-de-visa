// --- LÓGICA DEL MENÚ HAMBURGUESA ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('main-nav');
hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-active');
});

const navLinks = document.querySelectorAll('#main-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav-active');
    });
});

// --- LÓGICA DEL CARRUSEL DE FONDO ---
const heroImages = [
    'img/bg-img/paris-fotor.jpg',
    'img/bg-img/newyork-fotor.jpg',
    'img/bg-img/canada-fotor.jpg',
    'img/bg-img/londres-fotor.jpg'
];
const heroSection = document.getElementById('hero');
heroSection.style.backgroundImage = `url('${heroImages[0]}')`;
let currentImageIndex = 0;
function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    const newImageUrl = heroImages[currentImageIndex];
    heroSection.style.backgroundImage = `url('${newImageUrl}')`;
}
setInterval(changeBackgroundImage, 5000);


// ===============================================
// --- LÓGICA PARA EL MODAL DE SERVICIOS (NUEVO) ---
// ===============================================

// 1. Almacén de datos con la información de cada servicio
const serviceData = {
    'usa': {
        title: "Asesoría Completa para tu Visa de Turismo a EE.UU. (B1/B2)",
        intro: "Esta visa es para personas que desean entrar a los Estados Unidos de manera temporal por negocios (B1), por turismo, placer o para recibir tratamiento médico (B2).",
        requisitos: [
            "Pasaporte vigente.",
            "Formulario DS-160 completado.",
            "Foto reciente con las especificaciones consulares.",
            "Demostración de lazos económicos y sociales con la República Dominicana (arraigo)."
        ],
        incluye: [
            "Llenado profesional del formulario DS-160.",
            "Creación de perfil consular y gestión de pago de tasa.",
            "Programación de citas (CAS y Embajada).",
            "Asesoría y preparación personalizada para la entrevista.",
            "Organización estratégica de tu expediente de solicitud."
        ],
        faq: [
            { q: "¿Necesito tener un vuelo comprado?", a: "No, no es recomendable comprar vuelos o hacer reservaciones que no sean cancelables hasta que no tenga la visa aprobada." },
            { q: "¿Qué demuestro como arraigo?", a: "El arraigo se demuestra con lazos fuertes con su país, como trabajo estable, propiedades, familia, estudios, etc." }
        ],
        cta: "Iniciar mi Trámite de Visa Americana"
    },
    'schengen': {
        title: "Asesoría para Visa del Espacio Schengen",
        intro: "La visa Schengen te permite viajar hasta por 90 días en un período de 180 días dentro del Espacio Schengen, que comprende 27 países europeos.",
        // ...puedes añadir el resto de la información aquí
        requisitos: ["Pasaporte con vigencia mínima de 3 meses después del viaje.", "Itinerario de viaje detallado.", "Prueba de alojamiento.", "Seguro médico de viaje con cobertura mínima de 30,000 euros."],
        incluye: ["Análisis de perfil.", "Llenado de formulario.", "Gestión de cita.", "Revisión de documentos."],
        faq: [{ q: "¿Puedo trabajar con esta visa?", a: "No, la visa de turista Schengen no permite trabajar." }],
        cta: "Iniciar mi Trámite de Visa Schengen"
    }
    // ...puedes añadir 'estudiante', 'peticiones', etc. de la misma forma
};


// 2. Seleccionar los elementos del DOM
const serviceCards = document.querySelectorAll('.servicio-card');
const modalOverlay = document.getElementById('service-modal-overlay');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal-btn');

// 3. Función para abrir el modal con la info correcta
function openModal(serviceId) {
    const data = serviceData[serviceId];
    if (!data) return; // Si no hay datos para ese servicio, no hace nada

    // Construir el HTML interno del modal dinámicamente
    modalBody.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.intro}</p>
        
        <h4>Requisitos Clave</h4>
        <ul>
            ${data.requisitos.map(item => `<li>${item}</li>`).join('')}
        </ul>
        
        <h4>Nuestro Servicio Incluye</h4>
        <ul>
            ${data.incluye.map(item => `<li>${item}</li>`).join('')}
        </ul>
        
        <h4>Preguntas Frecuentes</h4>
        ${data.faq.map(item => `<p><strong>${item.q}</strong><br>${item.a}</p>`).join('')}

        <a href="#contacto" class="btn-principal" style="margin-top: 2rem; display: inline-block;">${data.cta}</a>
    `;

    // Mostrar el modal y bloquear el scroll del fondo
    modalOverlay.classList.add('active');
    document.body.classList.add('modal-open');
}

// 4. Función para cerrar el modal
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// 5. Añadir los "escuchadores de eventos"
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const serviceId = card.dataset.service; // Obtenemos el id del data-attribute
        openModal(serviceId);
    });
});

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (event) => {
    // Cierra el modal solo si se hace clic en el fondo oscuro
    if (event.target === modalOverlay) {
        closeModal();
    }
});