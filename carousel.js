let currentIndex = 0;
let images = []; // Asegúrate de que 'images' tenga las URLs cargadas

// Configura el carrusel con imágenes desde el XML cargado
function setupCarousel(imgUrls) {
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = ''; // Limpia el contenido
    images = imgUrls; // Guarda las imágenes en la variable global

    // Añade cada imagen al carrusel
    imgUrls.forEach((img) => {
        // Crear enlace que apunta a la versión grande
        const link = document.createElement("a"); 
        link.href = img.large; // Usa la URL grande para el enlace
        link.target = "_blank"; // Abrir en una nueva pestaña al hacer clic

        // Crear imagen en miniatura para el carrusel
        const thumbImg = document.createElement("img");
        thumbImg.src = img.thumb; // Usa la miniatura como imagen de previsualización
        thumbImg.alt = "Imagen del coche"; // Descripción alternativa
        thumbImg.style.maxWidth = "100px"; // Tamaño de miniatura
        
        link.appendChild(thumbImg);
        carouselContainer.appendChild(link);
        // img.classList.add("carousel-image");

        // Evitar que el evento de clic del enlace interrumpa el funcionamiento del carrusel
        img.addEventListener("click", (event) => {
            event.stopPropagation(); // Detener la propagación del evento
            link.click(); // Hacer clic en el enlace para abrir la imagen
        });

        link.appendChild(img); // Agregar la imagen al enlace
        carousel.appendChild(link); // Agregar el enlace al carrusel
    });

    updateCarousel(); // Asegúrate de que esta función esté definida y actualice el carrusel.

    // Muestra la primera imagen si hay alguna
    if (imgUrls.length > 0) {
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
