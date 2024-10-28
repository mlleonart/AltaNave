let currentIndex = 0;
let images = [];

  async function loadCarImagesFromXML(selectedCar) {
    const images = [];

    // Imagen principal
    const mainImage = selectedCar.querySelector("imagen")?.textContent;
    if (mainImage) images.push(mainImage);

    // Imágenes de bloques
    const bloques = selectedCar.querySelectorAll("bloques bloque");
    bloques.forEach((bloque) => {
        const bloqueImage = bloque.querySelector("imagenurl")?.textContent;
        if (bloqueImage) images.push(bloqueImage);
    });


       // Agrega las imágenes de <masimagenes> si existen
    const masImagenes = selectedCar.querySelectorAll("masimagenes imagenurl");
    masImagenes.forEach((img) => {
        images.push(img.textContent);
    });

    // Aleatorizar el arreglo de imágenes
  	images.sort(() => Math.random() - 0.5);

    
        // Configura el carrusel con las imágenes encontradas
    setupCarousel(images);
    
}
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

  // Cerrar la imagen a pantalla completa al hacer clic en ella
const fullScreenContainer = document.getElementById("full-screen-container");
fullScreenContainer.addEventListener("click", () => {
    fullScreenContainer.style.display = "none"; // Oculta el contenedor
});

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
