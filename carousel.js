let currentIndex = 0;
let images = [];

// Configura el carrusel con imágenes desde el XML cargado
function setupCarousel(imgUrls) {
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = ''; // Limpia el contenido

    // Añade cada imagen al carrusel
    imgUrls.forEach((url) => {
        const link = document.createElement("a"); // Crear un enlace
        link.href = url; // Apuntar al URL de la imagen
        link.target = "_blank"; // Abrir en una nueva pestaña

        const img = document.createElement("img");
        img.src = url;
        img.alt = "Imagen del coche";
        img.classList.add("carousel-image");

        link.appendChild(img); // Agregar la imagen al enlace
        carousel.appendChild(link); // Agregar el enlace al carrusel
    });

    updateCarousel(); // Asegúrate de que esta función esté definida y actualice el carrusel según sea necesario.

    // Muestra la primera imagen si hay alguna
    if (images.length > 0) {
        carousel.children[0].style.display = "block"; // Muestra la primera imagen
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
