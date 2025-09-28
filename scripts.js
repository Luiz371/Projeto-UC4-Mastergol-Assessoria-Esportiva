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
  
});
