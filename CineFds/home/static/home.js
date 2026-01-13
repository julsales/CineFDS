const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

console.log('Sliders encontrados:', slider.length);
console.log('Botão prev:', btnPrev);
console.log('Botão next:', btnNext);

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}

if (btnNext && btnPrev && slider.length > 0) {
  btnNext.addEventListener('click', nextSlider);
  btnPrev.addEventListener('click', prevSlider);
  
  // Inicializar o primeiro slide
  showSlider();
  
  setInterval(nextSlider, 5000);
} else {
  console.error('Elementos do banner não encontrados!');
}

