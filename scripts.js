// scripts.js

// Efeito fade-in ao rolar a página
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.2;
    if(top < screen){
      el.classList.add("visible");
    }
  });
});
