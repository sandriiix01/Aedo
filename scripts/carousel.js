const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let currentIndex = 0;

const updateSlidePosition = () => {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

const moveToNextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
};

const moveToPrevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
};

nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);

// Ajustar el tamaño de las diapositivas al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('resize', updateSlidePosition);
updateSlidePosition();