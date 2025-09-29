// Lista de serviços
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
    descricao: "Promovemos a participação em campeonatos internos e externos, proporcionando experiência competitiva real. Essa prática permite que os atletas se destaquem, sejam observados por clubes e desenvolvam habilidades importantes para a carreira profissional"
  }
];

// Configurações
const container = document.getElementById("servicosContainer");
let indiceAtual = 0;
const cardsPorPagina = 4;

// Função para renderizar os cards
function renderCards() {
  container.innerHTML = "";
  const inicio = indiceAtual * cardsPorPagina;
  const fim = inicio + cardsPorPagina;
  const grupo = servicos.slice(inicio, fim);

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

  // Dispara o fade-in logo após renderizar
  handleFadeIn();
}

// Função para o fade-in
function handleFadeIn() {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.2;
    if(top < screen){
      el.classList.add("visible");
    }
  });
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

// Evento scroll para fade-in
document.addEventListener("scroll", handleFadeIn);

// Renderiza os primeiros cards
renderCards();
