document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0; // Índice de la imagen actual
    const slides = document.querySelectorAll('.carousel-slide'); // Todos los slides
    const totalSlides = slides.length; // Número total de slides

    // Función para mostrar el slide actual
    function showSlide(index) {
        const carouselImages = document.getElementById('carousel-images');
        // Ajusta el índice si está fuera de rango
        if (index >= totalSlides) {
            currentSlide = 0; // Volver al primer slide
        } else if (index < 0) {
            currentSlide = totalSlides - 1; // Ir al último slide
        } else {
            currentSlide = index; // Cambiar al slide específico
        }
        // Mueve el contenedor de imágenes
        carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Agregar eventos a los botones
    document.getElementById('prevBtn').addEventListener('click', () => showSlide(currentSlide - 1));
    document.getElementById('nextBtn').addEventListener('click', () => showSlide(currentSlide + 1));

    // Iniciar mostrando el primer slide
    showSlide(currentSlide);
});
