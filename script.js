let currentImageIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function changeImage(direction) {
    slides[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + direction + slides.length) % slides.length;
    slides[currentImageIndex].classList.add('active');
}

// Iniciar o carrossel exibindo a primeira imagem
slides[currentImageIndex].classList.add('active');
