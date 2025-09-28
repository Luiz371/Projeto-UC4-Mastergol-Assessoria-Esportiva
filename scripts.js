// Fade-in geral (Quem Somos)
document.addEventListener("scroll", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.2;
    if(top < screen){
      el.classList.add("visible");
    }
  });

  // Fade-in para cards de serviços
  const serviceCards = document.querySelectorAll(".service-card-advanced");
  serviceCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.2;
    if(top < screen){
      card.classList.add("visible");
    }
  });

  const logos = document.querySelectorAll('.patrocinadores .logos img');

function fadeInLogos() {
  logos.forEach(logo => {
    const top = logo.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 50) { // ajusta quando começar a aparecer
      logo.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', fadeInLogos);
window.addEventListener('load', fadeInLogos);

});
