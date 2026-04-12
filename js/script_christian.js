// Inicializa animações
AOS.init({
  duration: 800,
  easing: 'ease-out-back',
  once: false,
  mirror: true
});

// Botão voltar ao topo
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.remove('opacity-0', 'invisible');
    backToTopBtn.classList.add('opacity-100', 'visible');
  } else {
    backToTopBtn.classList.add('opacity-0', 'invisible');
    backToTopBtn.classList.remove('opacity-100', 'visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});