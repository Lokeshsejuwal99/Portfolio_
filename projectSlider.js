let slideIndex = 0;
const slides = document.querySelectorAll('.project-slide');

function moveSlide(step) {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + step + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
}
