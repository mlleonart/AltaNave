document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const imagesContainer = document.getElementById("carousel-images");
    
    let currentSlide = 0;

    function updateCarousel() {
        const totalSlides = slides.length;
        const offset = -currentSlide * 100; // Calcular el desplazamiento
        imagesContainer.style.transform = `translateX(${offset}%)`;
        
        // Mantener los botones habilitados según el índice actual
        prevBtn.style.display = currentSlide === 0 ? "none" : "block";
        nextBtn.style.display = currentSlide === totalSlides - 1 ? "none" : "block";
    }

    prevBtn.addEventListener("click", () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateCarousel();
        }
    });

    updateCarousel(); // Llamar a la función al cargar para configurar la vista inicial
});
