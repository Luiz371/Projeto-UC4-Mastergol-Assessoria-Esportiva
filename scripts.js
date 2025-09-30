// ===================== Lista de Serviços =====================
const servicos = [
  {
    titulo: "Treinamento Físico",
    imagem: "Midia/Gemini_Generated_Image_treinamento fisico 1.png",
    descricao: "Oferecemos programas de treinamento físico estruturados e progressivos, adaptados a cada faixa etária e nível de desenvolvimento. Nossos treinos focam resistência, força, agilidade e prevenção de lesões, garantindo que os atletas estejam preparados para a alta performance em campo."
  },
  {
    titulo: "Treinamento Técnico",
    imagem: "Midia/Gemini_Generated_Image_Treinamento-Tecnico1.png",
    descricao: "Desenvolvemos habilidades técnicas específicas do futebol, como controle de bola, passes, finalizações, dribles e posicionamento tático. Cada jovem recebe atenção individual para aprimorar suas habilidades e alcançar o máximo de seu potencial."
  },
  {
    titulo: "Acompanhamento Psicológico",
    imagem: "Midia/Gemini_Generated_Image_AcompanhamentoPsicologico.png",
    descricao: "Contamos com profissionais especializados em psicologia esportiva que trabalham a confiança, concentração, motivação e controle emocional dos atletas. Nosso objetivo é formar jovens mentalmente preparados para os desafios dentro e fora dos campos."
  },
  {
    titulo: "Acompanhamento Médico Completo",
    imagem: "Midia/Gemini_Generated_Image_aompanhamento-nutricional.png",
    descricao: "Oferecemos suporte completo para a saúde dos atletas, com acompanhamento de nutricionista para planos alimentares personalizados que melhoram energia, recuperação e desempenho, além de seguro saúde e acompanhamento médico especializado, garantindo bem-estar físico e prevenção de lesões."
  },
  {
    titulo: "Programa Bolsa de Talentos Mastergol",
    imagem: "Midia/Gemini_Generated_Image_Bolsa da mastergol.png",
    descricao: "Oferecemos oportunidades para jovens de todas as classes sociais por meio de nosso programa de inclusão. A Mastergol capta talentos de qualquer lugar, oferecendo apoio especial a jovens de comunidades vulneráveis, preparando-os para crescer dentro e fora do futebol."
  },
  {
    titulo: "Consultorias e Orientação Profissional",
    imagem: "Midia/Gemini_Generated_Image_orientacao-profissiona-exclusiva.png",
    descricao: "Oferecemos atendimentos personalizados, workshops e análises específicas para atletas ou equipes, combinados com planejamento estratégico de carreira. Apoiamos o jovem em negociações, definição de metas e tomadas de decisão, garantindo desenvolvimento completo dentro e fora de campo."
  },
  {
    titulo: "Captação e Seleção",
    imagem: "Midia/Gemini_Generated_Image_Captação e Seleção.png",
    descricao: "Identificamos jovens talentos com potencial para o futebol profissional. Avaliamos habilidades técnicas, desempenho físico e perfil comportamental, oferecendo oportunidades para que os atletas se destaquem dentro e fora de campo."
  },
  {
    titulo: "Participação em Campeonatos",
    imagem: "Midia/Gemini_Generated_Image_Campeonatos.png",
    descricao: "Promovemos a participação em campeonatos internos e externos, proporcionando experiência competitiva real. Essa prática permite que os atletas se destaquem, sejam observados por clubes e desenvolvam habilidades importantes para a carreira profissional."
  }
];

// ===================== Fade-in com IntersectionObserver =====================
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

function checkFadeIn() {
  const elementos = document.querySelectorAll('.fade-in');
  elementos.forEach(el => {
    if (isInViewport(el)) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // anima apenas uma vez
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".card, .service-card-advanced").forEach(card => observer.observe(card));
});

// ===================== Paginação e Renderização de Cards =====================
let indiceAtual = 0;
const cardsPorPagina = 4;

function renderCards() {
  const container = document.getElementById("servicosContainer");
  container.innerHTML = "";

  const start = indiceAtual * cardsPorPagina;
  const end = start + cardsPorPagina;
  const subset = servicos.slice(start, end);

  subset.forEach(servico => {
    const card = document.createElement("div");
    card.classList.add("card", "fade-in");
    card.innerHTML = `
      <img src="${servico.imagem}" alt="${servico.titulo}" class="card-img">
      <h3>${servico.titulo}</h3>
      <p>${servico.descricao}</p>
    `;
    container.appendChild(card);
  });

  // Aplica fade-in e clique expandir nos cards recém-criados
  checkFadeIn();
  enableCardClick();
}

// Navegação
document.getElementById("proximo").addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % Math.ceil(servicos.length / cardsPorPagina);
  renderCards();
});

document.getElementById("anterior").addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + Math.ceil(servicos.length / cardsPorPagina)) % Math.ceil(servicos.length / cardsPorPagina);
  renderCards();
});

// ===================== Clique para expandir cards =====================
function enableCardClick() {
  const allCards = document.querySelectorAll(".card, .service-card-advanced");
  allCards.forEach(card => {
    card.addEventListener("click", () => {
      // Fecha qualquer outro card expandido
      allCards.forEach(c => { if (c !== card) c.classList.remove("expanded"); });
      // Alterna o estado do card clicado
      card.classList.toggle("expanded");
    });
  });

  grupo.forEach(servico => {
    const card = document.createElement("div");
    card.classList.add("card", "fade-in"); // adiciona fade-in aqui
    card.innerHTML = `
      <img src="${servico.imagem}" alt="${servico.titulo}" class="card-img">
      <h3>${servico.titulo}</h3>
      <div class="descricao">${servico.descricao}</div>
    `;
    card.addEventListener("click", () => {
      card.classList.toggle("expanded");
    });
    container.appendChild(card);
  });
}

// ===================== Inicialização =====================
document.addEventListener("DOMContentLoaded", () => {
  renderCards();      // Renderiza primeiros cards
  enableCardClick();  // Ativa clique para cards estáticos (se houver)
});

const cardHeaders = document.querySelectorAll('#marketing .card-header');

cardHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    document.querySelectorAll('#marketing .card-content').forEach(c => {
      if (c !== content) c.style.maxHeight = null; // fecha outros cards
    });

    if (content.style.maxHeight) {
      content.style.maxHeight = null; // fecha o card clicado
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // abre o card
    }
  });
});


document.querySelectorAll('#tabela-cargos td.salario').forEach(td => {
  const valor = parseFloat(td.textContent);
  td.textContent = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
});



