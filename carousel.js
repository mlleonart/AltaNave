let currentIndex = 0;
let images = []; // Asegúrate de que 'images' tenga las URLs cargadas

// Configura el carrusel con imágenes desde el XML cargado
function setupCarousel(images) {
    const carouselContainer = document.getElementById("carousel-images");
    carouselContainer.innerHTML = ""; // Limpiar el contenedor

    // Cargar imágenes en el carrusel
    images.forEach((img) => {
        const link = document.createElement("a");
        link.href = img.large;
        link.target = "_blank";

        const thumbImg = document.createElement("img");
        thumbImg.src = img.thumb;
        thumbImg.alt = "Car Thumbnail";
        thumbImg.classList.add("carousel-image");

        link.appendChild(thumbImg);
        carouselContainer.appendChild(link);
    });

    let currentIndex = 0;

    // Función para actualizar el desplazamiento del carrusel
    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Botones de navegación
    document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    // Mostrar la primera imagen
    updateCarousel();
}


// Cambia al índice de la imagen deseada
function updateCarousel() {
    const carousel = document.getElementById("carousel");

    // Asegúrate de que currentIndex no exceda el número de imágenes
    if (images.length > 0) {
        // Oculta todas las imágenes
        for (let i = 0; i < carousel.children.length; i++) {
            carousel.children[i].style.display = "none"; // Ocultar todas las imágenes
        }
        // Muestra la imagen actual
        carousel.children[currentIndex].style.display = "block"; // Muestra la imagen actual
    }
}

// Función para pasar a la imagen siguiente
function nextSlide() {
    console.log('nextSlide');
    currentIndex = (currentIndex + 1) % images.length; // Avanza al siguiente índice
    updateCarousel();
}

// Función para retroceder a la imagen anterior
function prevSlide() {
    console.log('prevSlide');
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Retrocede al índice anterior
    updateCarousel();
}
