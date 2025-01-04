const scrollButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    Button.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
const scrollButton = document.getElementById('scroll-to-top');


