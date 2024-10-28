let currentIndex = 0;
let images = [];

// Configura el carrusel con imágenes desde el XML cargado
function setupCarousel(imgUrls) {
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = ''; // Limpia el contenido
    images = imgUrls; // Asigna las imágenes al array de imágenes

    // Añade cada imagen al carrusel
    imgUrls.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Imagen del coche";
        img.classList.add("carousel-image");
        img.style.display = "none"; // Inicialmente oculta todas las imágenes
        carousel.appendChild(img);
    });

    // Muestra la primera imagen si hay alguna
    if (images.length > 0) {
        currentIndex = 0; // Inicializa el índice
        carousel.children[currentIndex].style.display = "block"; // Muestra la primera imagen
    }
}

// Cambia al índice de la imagen deseado
function updateCarousel() {
    const carousel = document.getElementById("carousel");
    // Oculta todas las imágenes
    for (let i = 0; i < carousel.children.length; i++) {
        carousel.children[i].style.display = "none";
    }
    // Muestra la imagen actual
    carousel.children[currentIndex].style.display = "block";
}

// Función para pasar a la imagen siguiente
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length; // Avanza al siguiente índice
    updateCarousel();
}

// Función para retroceder a la imagen anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Retrocede al índice anterior
    updateCarousel();
}
