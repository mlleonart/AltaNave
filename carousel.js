let currentIndex = 0;
let images = [];

// Configura el carrusel con imágenes desde el XML cargado
function setupCarousel(imgUrls) {
    images = imgUrls;
    const carousel = document.getElementById("carousel");

    carousel.innerHTML = ''; // Limpia el contenido

    // Añade cada imagen al carrusel
    images.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        carousel.appendChild(img);
    });

    updateCarousel();
}

// Cambia al índice de la imagen deseado
function updateCarousel() {
    const carousel = document.getElementById("carousel");
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Función para pasar a la imagen siguiente
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

// Función para retroceder a la imagen anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}
