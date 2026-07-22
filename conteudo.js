/* =====================================================================
   PAINEL DE CONTROLE — ARAGÃO CORRETOR DE IMÓVEIS
   Tudo que aparece no site é editado AQUI. Não é preciso mexer no HTML.
   Depois de editar, salve o arquivo e atualize a página no navegador.
   ===================================================================== */

const CONTEUDO = {

  /* ---------- 1. IDENTIDADE ---------- */
  marca: {
    nome: "Cesar Aragão",
    primeiro_nome: "Cesar",          // usado nas mensagens de WhatsApp
    sobrenome: "Corretor de Imóveis",
    cargo: "Corretor e Avaliador Imobiliário",
    creci: "CRECI F-7828",
    cidade: "Lucas do Rio Verde",
    estado: "MT",
    atuacao: "Lucas do Rio Verde e região",
    instagram: "cesararagaocorretor",
    /* Redes sociais — aparecem no rodapé e na seção do corretor.
       Para tirar uma, apague o bloco { ... } dela. */
    redes: [
      { rede: "instagram", rotulo: "@cesararagaocorretor",   url: "https://www.instagram.com/cesararagaocorretor" },
      { rede: "instagram", rotulo: "@aragaocorretorimoveis", url: "https://www.instagram.com/aragaocorretorimoveis" },
      { rede: "facebook",  rotulo: "Cesar Aragão",           url: "https://www.facebook.com/share/1CxBP9J67D/" },
      { rede: "facebook",  rotulo: "Aragão Corretor",        url: "https://www.facebook.com/share/193y4UZAgw/" }
    ],
    whatsapp: "5565999640786",                   // (65) 99964-0786
    whatsappVisivel: "(65) 99964-0786",
    email: "cesaraaragao@gmail.com",
    ano_inicio: 2016                             // <-- ano em que começou no ramo
  },

  /* ---------- 2. ABERTURA ---------- */
  hero: {
    etiqueta: "Lucas do Rio Verde e região · MT",
    titulo_1: "O imóvel certo",
    titulo_2: "para a sua",
    titulo_3: "próxima fase.",
    texto: "Compra, venda e avaliação de casas, apartamentos, terrenos e áreas comerciais, com acompanhamento pessoal até a escritura.",
    cta: "Falar no WhatsApp",
    cta_secundario: "Ver imóveis disponíveis",
    selos: ["Corretor com CRECI ativo", "Avaliação imobiliária", "Atendimento pessoal"]
  },

  /* ---------- 2b. BUSCA DO TOPO ---------- */
  busca: {
    titulo: "Encontre seu imóvel",
    faixas: [
      { rotulo: "Qualquer valor", min: 0, max: 0 },
      { rotulo: "Até R$ 300 mil", min: 0, max: 300000 },
      { rotulo: "R$ 300 a 600 mil", min: 300000, max: 600000 },
      { rotulo: "R$ 600 mil a 1 mi", min: 600000, max: 1000000 },
      { rotulo: "Acima de R$ 1 mi", min: 1000000, max: 0 }
    ]
  },

  /* ---------- 2c. SERVIÇOS ---------- */
  servicos: [
    { titulo: "Comprar", texto: "Seleção filtrada pelo seu orçamento e pela sua rotina, com visita acompanhada e documentação conferida antes da proposta." },
    { titulo: "Vender", texto: "Preço definido por comparação real de mercado, anúncio profissional e triagem de interessados até a escritura." },
    { titulo: "Avaliar", texto: "Parecer técnico de valor para venda, inventário, partilha, garantia bancária ou decisão de investimento." }
  ],

  /* ---------- 3. FAIXA CORRIDA (marquee) ---------- */
  faixa: [
    "Casas", "Apartamentos", "Terrenos", "Chácaras", "Salas comerciais",
    "Barracões", "Áreas rurais", "Avaliação imobiliária", "Financiamento"
  ],

  /* ---------- 4. PERFIL DO CORRETOR ---------- */
  perfil: {
    etiqueta: "Quem atende você",
    titulo: "Não vendo imóvel. Resolvo decisão de patrimônio.",
    paragrafos: [
      "Sou corretor e avaliador imobiliário em Lucas do Rio Verde. Meu trabalho começa antes do anúncio: entender por que você está comprando, vendendo ou investindo, e o que esse imóvel precisa fazer pela sua vida nos próximos dez anos.",
      "Acompanho de perto a variação de preço por bairro, o ritmo dos lançamentos e a liquidez de cada região da cidade. É esse acervo de informação que evita que você pague caro na compra ou anuncie errado na venda.",
      "Cada negociação é conduzida por mim do primeiro contato à assinatura: visita, documentação, proposta, financiamento, escritura e registro."
    ],
    foto: FOTO_CORRETOR.retrato,     // imagem embutida em foto-corretor.js
    avatar: FOTO_CORRETOR.avatar,
    assinatura: "Cesar Aragão · CRECI F-7828",

    /* Cargos e registros — aparecem em destaque na seção do corretor */
    credenciais: [
      { rotulo: "Registro profissional", valor: "CRECI F-7828" },
      { rotulo: "Conselheiro Fiscal",    valor: "Gestão 2025–2027" },
      { rotulo: "Área de atuação",       valor: "Lucas do Rio Verde-MT e Região" },
      { rotulo: "Delegado Municipal",    valor: "Gestão 2025–2027" }
    ]
  },

  /* ---------- 5. NÚMEROS ---------- */
  numeros: [
    { valor: "10", sufixo: "anos", rotulo: "atuando no mercado imobiliário" },
    { valor: "300", sufixo: "+",   rotulo: "imóveis negociados na região" },
    { valor: "150", sufixo: "+",   rotulo: "avaliações e pareceres emitidos" },
    { valor: "100", sufixo: "%",   rotulo: "das negociações acompanhadas por ele" }
  ],

  /* ---------- 6. COMO FUNCIONA (etapas reais, em ordem) ---------- */
  processo: {
    etiqueta: "Do primeiro contato à chave na mão",
    titulo: "O caminho é o mesmo para todo mundo. E ele é curto.",
    etapas: [
      { titulo: "Leitura do seu caso",
        texto: "Conversa direta para entender orçamento, prazo, uso do imóvel e condição de crédito. Sai daqui uma lista curta e realista." },
      { titulo: "Seleção e visita",
        texto: "Você visita apenas o que passa no filtro. Cada visita vem com histórico do imóvel, situação da documentação e comparativo de preço no bairro." },
      { titulo: "Proposta e negociação",
        texto: "Faço a ponte com o proprietário com argumento de mercado na mão. Preço, condição de pagamento e prazo de entrega negociados por escrito." },
      { titulo: "Documentação e fechamento",
        texto: "Matrícula, certidões, financiamento, contrato e escritura acompanhados até a entrega das chaves." }
    ]
  },

  /* ---------- 7. IMÓVEIS ----------
     finalidade: sempre "venda" — o corretor não trabalha com locação
     tipo: Casa, Apartamento, Terreno, Chácara, Sala comercial, Barracão, Área rural
     fotos: [] — ex.: ["fotos/casa1.jpg", "fotos/casa2.jpg"]
     Para tirar um imóvel do ar, basta apagar o bloco { ... } dele.
  ------------------------------------ */
  imoveis: [
    {
      codigo: "LRV-001",
      titulo: "Casa alto padrão em condomínio fechado",
      finalidade: "venda",
      tipo: "Casa",
      bairro: "Residencial Bandeirantes",
      cidade: "Lucas do Rio Verde",
      area: 280,
      terreno: 420,
      dormitorios: 3,
      suites: 1,
      banheiros: 3,
      vagas: 2,
      preco: "R$ 1.250.000",
      destaque: true,
      descricao: "Projeto arquitetônico assinado, área gourmet integrada, piscina aquecida e acabamento em porcelanato retificado. Condomínio com portaria 24h.",
      itens: ["Piscina", "Área gourmet", "Portaria 24h", "Aquecimento solar", "Mobiliada"],
      fotos: []
    },
    {
      codigo: "LRV-002",
      titulo: "Apartamento 2 dormitórios próximo ao centro",
      finalidade: "venda",
      tipo: "Apartamento",
      bairro: "Centro",
      cidade: "Lucas do Rio Verde",
      area: 68,
      terreno: 0,
      dormitorios: 2,
      suites: 1,
      banheiros: 2,
      vagas: 1,
      preco: "R$ 420.000",
      destaque: false,
      descricao: "Andar alto, sol da manhã, sacada com churrasqueira. Prédio com elevador e salão de festas, a três quadras da avenida principal.",
      itens: ["Elevador", "Sacada com churrasqueira", "Salão de festas"],
      fotos: []
    },
    {
      codigo: "LRV-003",
      titulo: "Terreno comercial em avenida de fluxo",
      finalidade: "venda",
      tipo: "Terreno",
      bairro: "Parque das Emas",
      cidade: "Lucas do Rio Verde",
      area: 0,
      terreno: 600,
      dormitorios: 0,
      suites: 0,
      banheiros: 0,
      vagas: 0,
      preco: "R$ 690.000",
      destaque: false,
      descricao: "Esquina plana, 20m de frente, pronta para construir. Zoneamento comercial e toda a infraestrutura de rede já instalada.",
      itens: ["Esquina", "Plano", "Zoneamento comercial"],
      fotos: []
    },
    {
      codigo: "LRV-004",
      titulo: "Barracão logístico às margens da rodovia",
      finalidade: "venda",
      tipo: "Barracão",
      bairro: "Distrito Industrial",
      cidade: "Lucas do Rio Verde",
      area: 900,
      terreno: 2000,
      dormitorios: 0,
      suites: 0,
      banheiros: 2,
      vagas: 8,
      preco: "R$ 2.400.000",
      destaque: true,
      descricao: "Pé-direito de 8 metros, escritório interno climatizado, pátio de manobra para carreta e energia trifásica.",
      itens: ["Pé-direito 8m", "Pátio para carreta", "Energia trifásica", "Escritório interno"],
      fotos: []
    },
    {
      codigo: "LRV-005",
      titulo: "Casa térrea pronta para morar",
      finalidade: "venda",
      tipo: "Casa",
      bairro: "Jardim Primavera",
      cidade: "Lucas do Rio Verde",
      area: 120,
      terreno: 300,
      dormitorios: 3,
      suites: 1,
      banheiros: 2,
      vagas: 2,
      preco: "R$ 520.000",
      destaque: false,
      descricao: "Quintal murado, churrasqueira e garagem coberta para dois carros. Rua tranquila, perto de escola e mercado.",
      itens: ["Quintal murado", "Churrasqueira", "Garagem coberta"],
      fotos: []
    },
    {
      codigo: "LRV-006",
      titulo: "Chácara com casa sede a 12 km da cidade",
      finalidade: "venda",
      tipo: "Chácara",
      bairro: "Zona rural",
      cidade: "Lucas do Rio Verde",
      area: 180,
      terreno: 20000,
      dormitorios: 3,
      suites: 1,
      banheiros: 2,
      vagas: 4,
      preco: "R$ 980.000",
      destaque: false,
      descricao: "Dois hectares com pomar formado, poço artesiano, galpão e casa sede em alvenaria. Acesso por estrada cascalhada.",
      itens: ["Poço artesiano", "Pomar formado", "Galpão", "Energia rural"],
      fotos: []
    }
  ],

  /* ---------- 8. AVALIAÇÃO IMOBILIÁRIA ---------- */
  avaliacao: {
    etiqueta: "Serviço técnico",
    titulo: "Quanto vale, de verdade, o seu imóvel?",
    texto: "Anúncio acima do mercado encalha; abaixo, queima patrimônio. A avaliação cruza vendas recentes comparáveis, padrão construtivo, estado de conservação e liquidez do bairro para chegar a um valor que se sustenta na mesa de negociação e diante do banco.",
    itens: [
      "Comparativo com vendas fechadas no mesmo bairro",
      "Análise de padrão construtivo e conservação",
      "Faixa de preço para anúncio e piso de negociação",
      "Parecer por escrito, com fotos e memória de cálculo"
    ],
    cta: "Solicitar avaliação do meu imóvel"
  },

  /* ---------- 9. DEPOIMENTOS ---------- */
  depoimentos: [
    { texto: "Anunciei minha casa por sete meses com outra pessoa e nada. Ele reposicionou o preço e vendeu em 40 dias.", autor: "Cliente — venda de residência", bairro: "Bairro Cidade Nova" },
    { texto: "Comprei meu primeiro apartamento sem entender nada de financiamento. Ele resolveu a papelada toda comigo.", autor: "Cliente — primeira compra", bairro: "Centro" },
    { texto: "Precisei vender rápido para fechar outra compra. Ele achou comprador e segurou as duas pontas até a escritura.", autor: "Cliente — venda casada", bairro: "Parque das Emas" }
  ],

  /* ---------- 10. FORMULÁRIO (as respostas vão para o WhatsApp) ---------- */
  formulario: {
    etiqueta: "Comece por aqui",
    titulo: "Três perguntas e eu já sei como te ajudar.",
    objetivos: ["Quero comprar", "Quero vender", "Quero investir", "Quero avaliar meu imóvel"],
    tipos: ["Casa", "Apartamento", "Terreno", "Chácara", "Comercial", "Ainda não sei"],
    prazos: ["O quanto antes", "Nos próximos 3 meses", "Neste ano", "Só pesquisando"]
  },

  /* ---------- 11. RODAPÉ ---------- */
  rodape: {
    frase: "Atendimento em Lucas do Rio Verde e Região.",
    horario: "Segunda a sexta, 8h às 18h · Sábado, 8h às 12h",
    endereco: "Lucas do Rio Verde — MT"
  }
};
