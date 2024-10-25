let currentSlide = 0;

document.addEventListener("DOMContentLoaded", function() {
    showSlide(currentSlide);
});

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = imgElement.src; // Carga la imagen seleccionada en el modal
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
