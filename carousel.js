let currentIndex = 0;
let images = []; // Asegúrate de que 'images' tenga las URLs cargadas

// Configura el carrusel con imágenes desde el XML cargado
function setupCarousel(imgUrls) {
    const carousel = document.getElementById("carousel");
    
    // Verificar si el elemento del carrusel existe en el DOM
    if (!carousel) {
        console.error("El contenedor del carrusel no se encontró en el DOM.");
        return;
    }

    // Limpiar el contenedor antes de agregar nuevas imágenes
    carousel.innerHTML = "";
images = imgUrls; // Guarda las imágenes en la variable global
    imgUrls.forEach((img) => {
        // Crear enlace que apunta a la versión grande
        const link = document.createElement("a");
        link.href = img.large; // Usa la URL grande para el enlace
        link.target = "_blank"; // Abrir en una nueva pestaña al hacer clic

        // Crear imagen en miniatura para el carrusel
        const thumbImg = document.createElement("img");
        thumbImg.src = img.thumb; // Usa la miniatura como imagen de previsualización
        thumbImg.alt = "Car Thumbnail";
        thumbImg.classList.add("carousel-image");

        // Verificar si thumbImg es un elemento HTML antes de añadir el evento
        if (thumbImg instanceof HTMLElement) {
            thumbImg.addEventListener("click", (event) => {
                event.preventDefault(); // Evita redirigir al hacer clic en la miniatura
                // Lógica adicional al hacer clic en la miniatura, si es necesario
            });
        }

        // Añadir la miniatura al enlace y el enlace al contenedor del carrusel
        link.appendChild(thumbImg);
        carousel.appendChild(link);
    });

    updateCarousel(); // Asegúrate de que esta función esté definida y actualice el carrusel.

    // Muestra la primera imagen solo si hay al menos una en el carrusel
    if (carousel.children.length > 0) {
        carousel.children[0].style.display = "block"; // Muestra la primera imagen
    }
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
