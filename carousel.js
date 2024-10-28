let currentIndex = 0;
let images = [];

// Configura el carrusel con imágenes desde el XML cargado
function setupCarousel(imgUrls) { 
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = ''; // Limpia el contenido

    // Añade cada imagen al carrusel
    imgUrls.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Imagen del coche";
        img.classList.add("carousel-image");

        // Agregar evento de clic para pantalla completa
        img.addEventListener("click", () => {
            const fullScreenContainer = document.getElementById("full-screen-container");
            const fullScreenImage = document.getElementById("full-screen-image");
            fullScreenImage.src = url; // Cambia la imagen a pantalla completa
            fullScreenContainer.style.display = "flex"; // Muestra el contenedor
        });

        carousel.appendChild(img);
    });

    updateCarousel(); // Asegúrate de que esta función esté definida y actualice el carrusel según sea necesario.
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
