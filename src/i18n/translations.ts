import { Project, SkillCategory, EducationItem, CodeSnippetItem, OtherWorkItem } from '../types';

export interface Translations {
  nav: {
    inicio: string;
    projetos: string;
    competencias: string;
    sobreMim: string;
    contato: string;
    expand: string;
    collapse: string;
    themeLight: string;
    themeDark: string;
    switchLang: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaProjects: string;
    ctaContact: string;
  };
  projects: {
    sectionTitle: string;
    sectionSubtitle: string;
    flagshipBadge: string;
    flagshipTitle: string;
    flagshipSubtitle: string;
    flagshipDescription: string;
    flagshipDeveloper: string;
    flagshipStats: { label: string; value: string }[];
    flagshipExploreBtn: string;
    filterAll: string;
    filterOptimization: string;
    filterAutomation: string;
    filterAnalytics: string;
    viewProject: string;
    technicalStudy: string;
    confirmedDeliverable: string;
    specDetailsAvailable: string;
    modalTitle: string;
    overview: string;
    challenge: string;
    solution: string;
    methodology: string;
    techStack: string;
    close: string;
    copyCode: string;
    codeCopied: string;
    interactive3DTitle: string;
    interactive3DSubtitle: string;
    interactive3DActive: string;
    benchmarkGraphTitle: string;
    benchmarkGraphSubtitle: string;
  };
  snippets: {
    sectionTitle: string;
    sectionSubtitle: string;
    emptyPhotoNotice: string;
    viewCode: string;
    copyCode: string;
    copied: string;
    languageLabel: string;
    viewDetails: string;
    hideDetails: string;
    statusReady: string;
    previewModalTitle: string;
    close: string;
  };
  otherWorks: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewDetails: string;
    hideDetails: string;
    viewCode: string;
    copyCode: string;
    copied: string;
    statusReady: string;
    previewModalTitle: string;
    close: string;
  };
  rastrigin: {
    badge: string;
    minimum: string;
    title: string;
    instruction: string;
    algoMomentum: string;
    algoPso: string;
    algoGenetic: string;
    rotateHint: string;
    costLabel: string;
    iterationLabel: string;
    convergenceTitle: string;
    convergenceSubtitle: string;
    play: string;
    pause: string;
    reset: string;
    step: string;
    surface3dView: string;
    convergenceView: string;
    minReached: string;
  };
  about: {
    sectionTitle: string;
    sectionSubtitle: string;
    p1: string;
    p2: string;
    p3: string;
    educationTitle: string;
    educationSummary: string;
    educationItems: {
      course: string;
      institution: string;
      focus: string;
    }[];
    skillsTitle: string;
    skillsSubtitle: string;
    competencyDomains: {
      title: string;
      description: string;
      items: string[];
    }[];
    stackLabel: string;
    specialtyLabel: string;
    specialtyValue: string;
    locationLabel: string;
    languagesLabel: string;
    nativeLevel: string;
    intermediateLevel: string;
    status: string;
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    copyEmail: string;
    emailCopied: string;
    socialLabel: string;
    formTitle: string;
    nameField: string;
    namePlaceholder: string;
    emailField: string;
    emailPlaceholder: string;
    messageField: string;
    messagePlaceholder: string;
    sendButton: string;
    sendingButton: string;
    successTitle: string;
    successMessage: string;
  };
  footer: {
    role: string;
    backToTop: string;
  };
  projectList: Project[];
  snippetList: CodeSnippetItem[];
  otherWorksList: OtherWorkItem[];
  skillCategories: SkillCategory[];
  education: EducationItem[];
}

export const translationsPt: Translations = {
  nav: {
    inicio: 'Início',
    projetos: 'Projetos',
    competencias: 'Competências',
    sobreMim: 'Sobre mim',
    contato: 'Contato',
    expand: 'Expandir menu',
    collapse: 'Recolher menu',
    themeLight: 'Tema claro',
    themeDark: 'Tema escuro',
    switchLang: 'Mudar para Inglês'
  },
  hero: {
    headline: 'Dados que geram soluções.',
    subheadline: 'Engenheiro de Produção especializado em modelagem de dados, otimização matemática e automação de processos. Desenvolvimento de ferramentas práticas que transformam operações e sustentam a tomada de decisão.',
    ctaProjects: 'Ver projetos em destaque',
    ctaContact: 'Fale comigo'
  },
  projects: {
    sectionTitle: 'Projetos em Destaque',
    sectionSubtitle: 'Soluções desenvolvidas com foco em visualização analítica, otimização computacional e integração de fluxos.',
    flagshipBadge: 'Projeto Principal · Central de Dados Governamental',
    flagshipTitle: 'Central de Dados — Programa Defesa Civil na Escola',
    flagshipSubtitle: 'Painel Estadual de Consulta Escolar e Docente (SC)',
    flagshipDescription: 'Dashboard desenvolvido com a Defesa Civil de SC para auxiliar os professores de todas as escolas do estado na consulta do cadastro da escola e dos docentes no programa, integrando a planilha oficial ao ecossistema Google com foco em praticidade e zero custo adicional ao órgão público.',
    flagshipDeveloper: 'Projeto desenvolvido com apoio técnico de Eng. Yuri Furtwaengler',
    flagshipStats: [
      { label: 'Público-alvo', value: 'Escolas e Professores de SC' },
      { label: 'Integração', value: 'Planilha Oficial + Google' },
      { label: 'Sustentabilidade', value: 'Ferramenta Gratuita · Custo Zero' }
    ],
    flagshipExploreBtn: 'Ver Estudo de Caso Completo',
    filterAll: 'Todos (3)',
    filterOptimization: 'Otimização Matemática',
    filterAutomation: 'Automação n8n',
    filterAnalytics: 'Análise de Dados & BI',
    viewProject: 'Ver detalhes',
    technicalStudy: 'Estudo técnico',
    confirmedDeliverable: 'Realização autoral',
    specDetailsAvailable: 'Especificações técnicas disponíveis',
    modalTitle: 'Estudo Técnico',
    overview: 'Visão Geral',
    challenge: 'Contexto & Desafio',
    solution: 'Solução Implementada',
    methodology: 'Metodologia & Etapas',
    techStack: 'Tecnologias & Metodologias',
    close: 'Fechar',
    copyCode: 'Copiar código',
    codeCopied: 'Copiado para a área de transferência',
    interactive3DTitle: 'Visualizador 3D Simplificado · Resultados Reais (runs.csv)',
    interactive3DSubtitle: 'Compare o ganho (×) de cada estratégia e clique nas colunas para ver os 5 desafios',
    interactive3DActive: '35/35 runs validadas',
    benchmarkGraphTitle: 'Smart Heuristic · Dividir o trabalho. Medir o resultado.',
    benchmarkGraphSubtitle: 'Busca sequencial (7,99 s) vs Busca distribuída TREE (3,21 s) · Mediana de 5 desafios por configuração'
  },
  snippets: {
    sectionTitle: 'Demais Trabalhos',
    sectionSubtitle: 'Automações, ferramentas utilitárias e rotinas práticas desenvolvidas para resolver desafios operacionais e analíticos específicos.',
    emptyPhotoNotice: 'Preview gráfico em breve',
    viewCode: 'Ver código',
    copyCode: 'Copiar código',
    copied: 'Copiado!',
    languageLabel: 'Linguagem',
    viewDetails: 'Ver detalhes & código',
    hideDetails: 'Recolher',
    statusReady: 'Praticamente Pronto & Alta Eficiência',
    previewModalTitle: 'Registro Visual & Código do Utilitário',
    close: 'Fechar'
  },
  otherWorks: {
    sectionTitle: 'Demais Trabalhos',
    sectionSubtitle: 'Automações, ferramentas utilitárias e rotinas práticas desenvolvidas para resolver desafios operacionais e analíticos específicos.',
    viewDetails: 'Ver detalhes & código',
    hideDetails: 'Recolher',
    viewCode: 'Ver código',
    copyCode: 'Copiar código',
    copied: 'Copiado!',
    statusReady: 'Praticamente Pronto & Alta Eficiência',
    previewModalTitle: 'Registro Visual & Código do Utilitário',
    close: 'Fechar'
  },
  rastrigin: {
    badge: 'Função de Teste de Rastrigin',
    minimum: 'f(0, 0) = 0 · Mínimo Global',
    title: 'Simulador de Otimização Multimodal',
    instruction: 'Arraste com o mouse para rotacionar a superfície tridimensional 360°',
    algoMomentum: 'Gradiente c/ Momentum',
    algoPso: 'Particle Swarm (PSO)',
    algoGenetic: 'Genético (AG)',
    rotateHint: 'Rotacionar: Clique e arraste',
    costLabel: 'Custo f(x, y)',
    iterationLabel: 'Iteração',
    convergenceTitle: 'Curva de Convergência da Função Objetivo',
    convergenceSubtitle: 'Evolução do valor objetivo até o mínimo global',
    play: 'Executar',
    pause: 'Pausar',
    reset: 'Reiniciar',
    step: 'Passo',
    surface3dView: 'Superfície 3D',
    convergenceView: 'Convergência',
    minReached: 'Mínimo alcançado'
  },
  about: {
    sectionTitle: 'Sobre Mim & Competências',
    sectionSubtitle: 'Foco em modelagem analítica, otimização computacional e automação de processos.',
    p1: '',
    p2: 'Atuação prática na entrega de painéis e portais integrados ao ecossistema Google (Google Apps Script e Sheets), estudos de computação paralela em Python e automações orientadas a eventos em n8n.',
    p3: 'Busco sempre eliminar atritos operacionais, estruturar dados dispersos em visões claras e construir ferramentas que realmente auxiliem as equipes na tomada de decisões seguras e embasadas.',
    educationTitle: 'Formação & Fundamentos Técnicos',
    educationSummary: 'Sólida base combinando a visão gerencial e quantitativa da Engenharia de Produção com o conhecimento prático em computação e arquitetura de sistemas.',
    educationItems: [
      {
        course: 'Engenharia de Produção (Bacharelado)',
        institution: 'Anhanguera Educacional',
        focus: 'Pesquisa operacional, gestão de processos industriais, modelagem quantitativa e melhoria contínua.'
      },
      {
        course: 'Formação Técnica em Informática & Processos',
        institution: 'SENAI',
        focus: 'Lógica computacional, arquitetura de sistemas, modelagem de dados e tecnologia aplicada.'
      }
    ],
    skillsTitle: 'Competências Essenciais',
    skillsSubtitle: 'Domínios técnicos consolidados através de prática em projetos reais e modelagem computacional.',
    competencyDomains: [
      {
        title: 'Análise de Dados & BI',
        description: 'Construção de centrais de dados, dashboards gerenciais, modelagem de indicadores (KPIs), estruturação de dados públicos e de operações.',
        items: ['Dashboards Interativos', 'KPIs & Indicadores Estratégicos', 'SQL', 'Tratamento de Dados', 'Power BI & Looker Studio']
      },
      {
        title: 'Otimização & Pesquisa Operacional',
        description: 'Algoritmos metaheurísticos e computacionais para exploração de superfícies não-lineares, balanceamento e resolução de problemas complexos.',
        items: ['Algoritmos Genéticos (AG)', 'Particle Swarm (PSO)', 'NumPy / SciPy', 'Funções Multimodais', 'Modelagem em Python']
      },
      {
        title: 'Automação em n8n & Google Apps Script',
        description: 'Orquestração de pipelines em n8n (webhooks, APIs e PostgreSQL) e desenvolvimento de portais e fluxos automatizados em Google Apps Script.',
        items: ['n8n Workflow Automation', 'Google Apps Script', 'Webhooks & REST APIs', 'Google Sheets & PostgreSQL', 'Python Scripts']
      }
    ],
    stackLabel: 'Tecnologias & Ferramentas',
    specialtyLabel: 'Especialidade',
    specialtyValue: 'Engenharia de Produção & Análise de Dados',
    locationLabel: 'Localização',
    languagesLabel: 'Idiomas',
    nativeLevel: 'Português (Nativo)',
    intermediateLevel: 'Inglês (Intermediário)',
    status: 'Disponível para projetos técnicos e novas oportunidades'
  },
  contact: {
    sectionTitle: 'Contato',
    sectionSubtitle: 'Canais diretos para contato, colaborações técnicas ou oportunidades.',
    emailLabel: 'E-mail',
    phoneLabel: 'Telefone',
    locationLabel: 'Localização',
    copyEmail: 'Copiar e-mail',
    emailCopied: 'E-mail copiado!',
    socialLabel: 'Perfis Profissionais',
    formTitle: 'Enviar uma Mensagem',
    nameField: 'Nome',
    namePlaceholder: 'Seu nome',
    emailField: 'E-mail',
    emailPlaceholder: 'seu.email@exemplo.com',
    messageField: 'Mensagem',
    messagePlaceholder: 'Descreva seu projeto ou mensagem...',
    sendButton: 'Enviar mensagem',
    sendingButton: 'Enviando...',
    successTitle: 'Mensagem enviada com sucesso.',
    successMessage: 'Obrigado pelo contato! Retornarei em breve no seu e-mail.'
  },
  footer: {
    role: 'Engenheiro de Produção | Dados & Automação',
    backToTop: 'Voltar ao topo ↑'
  },
  // 3 Primary authentic projects
  projectList: [
    {
      id: 'defesa-civil-dashboard',
      title: 'Central de Dados & Portal de Inscrições — PDCE 2027',
      subtitle: 'Consulta Escolar + Portal de Inscrições em Google Apps Script (SC)',
      category: 'analytics',
      categoryLabel: 'Análise de Dados & Google Apps Script',
      featured: true,
      featuredType: 'dashboard',
      imageLabel: 'Central & Portal PDCE 2027',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Projeto Real Desenvolvido',
      summary: 'Ecossistema desenvolvido com a Defesa Civil de SC unindo a Central de Dados PDCE 2027 (consulta do cadastro de escolas e professores em todo o estado) ao Portal de Inscrições PDCE 2027 em Google Apps Script — com inscrição online, download de cola de respostas por regra de negócio e página de dúvidas.',
      tags: ['Google Apps Script', 'Google Sheets', 'Portal de Inscrições', 'Central de Dados', 'Defesa Civil SC'],
      specs: [
        { label: 'Entidade', value: 'Defesa Civil de Santa Catarina' },
        { label: 'Ecossistema', value: 'Central 2027 + Portal de Inscrições' },
        { label: 'Tecnologia', value: 'Google Apps Script & Sheets (Custo Zero)' }
      ],
      challenge: 'Possibilitar inscrições escolares/docentes e consulta rápida de informações para todas as escolas de SC, além de orientar participantes com regras de preenchimento e dúvidas sem contratar sistemas pagos de alto custo.',
      solution: 'Integração completa da planilha oficial da Defesa Civil ao ecossistema Google: Portal de Inscrições em Google Apps Script (cadastro, download de cola de respostas baseada em regra e página de dúvidas) conectado diretamente à Central de Dados 2027.',
      methodology: [
        'Portal de Inscrições PDCE 2027 em Google Apps Script para cadastro da unidade escolar e dos professores participantes',
        'Download automatizado da cola de respostas seguindo regras de validação para orientar o preenchimento correto',
        'Página dedicada para dúvidas frequentes integrada ao mesmo ambiente web gratuito do órgão público',
        'Sincronização automática com a planilha oficial e consulta na Central 2027 por Município, Escola, COREDEC, CRE e COMPDEC'
      ],
      techStack: ['Google Apps Script', 'Google Sheets', 'Dashboards Interativos', 'Portal Web', 'Solução Custo Zero']
    },
    {
      id: 'rastrigin-optimization',
      title: 'Otimização Computacional & Busca Distribuída (TREE)',
      subtitle: 'Smart Heuristic · Speedup 2,49× e Análise Paramétrica 3D',
      category: 'otimizacao',
      categoryLabel: 'Otimização Matemática',
      featured: true,
      featuredType: 'rastrigin',
      imageLabel: 'Smart Heuristic · 2,49× Ganho',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Demonstração de Engenharia',
      summary: 'Benchmark de busca computacional distribuída sobre 35 execuções reais (7 configurações × 5 desafios). A estratégia TREE com 4 processos e bloco 16.384 reduziu a mediana de 7,99 s (sequencial) para 3,21 s — ganho de 2,49× (59,8% menos tempo) contra 1,04× da divisão fixa.',
      tags: ['Python', 'Multiprocessing', 'TREE Partitioning', 'Benchmark 3D', 'SHA-256 Search'],
      specs: [
        { label: 'Ganho Medido', value: '2,49× (59,8% menos tempo)' },
        { label: 'Mediana Seq vs TREE', value: '7,99 s vs 3,21 s (~982k aval/s)' },
        { label: 'Validação (runs.csv)', value: '35/35 buscas validadas' }
      ],
      challenge: 'Na divisão estática por faixas (static), workers terminam em tempos diferentes ou avaliam não-determinismos mais distantes (~6,93 s / 1,15× com 2 proc e 7,68 s / 1,04× com 4 proc), desperdiçando paralelismo.',
      solution: 'Particionamento dinâmico TREE sob demanda com blocos de 16.384 e 131.072: mantém os processos ocupados até encontrar o menor nonce válido, alcançando 1,77× (2 proc) e 2,49× (4 proc) com bloco 16.384.',
      methodology: [
        '35 execuções pareadas (5 desafios × 7 configurações: sequential, static 2/4p e tree 2/4p × 16k/131k) registradas em runs.csv',
        'Comparação por mediana de tempo total (elapsed_s): Sequencial 7,99 s · Fixa 2p 6,93 s (1,15×) · Fixa 4p 7,68 s (1,04×)',
        'Resultados TREE: 2p/131k = 4,76 s (1,68×) · 2p/16k = 4,52 s (1,77×) · 4p/131k = 3,43 s (2,33×) · 4p/16k = 3,21 s (2,49×)',
        'Taxa agregada superior a 982 mil a 1,16 milhão de avaliações/s com 100% de digests validados (35/35)'
      ],
      techStack: ['Python', 'Multiprocessing', 'TREE Scheduling', 'CSV Telemetry', 'Canvas 3D']
    },
    {
      id: 'n8n-automation-pipeline',
      title: 'Automações de Fluxos: n8n & Google Apps Script',
      subtitle: 'Pipelines Orientados a Eventos (n8n) + Portais e Regras em Google Apps Script',
      category: 'automacao',
      categoryLabel: 'Automação em n8n & Apps Script',
      featured: true,
      featuredType: 'n8n',
      imageLabel: 'n8n & Google Apps Script',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Projeto Desenvolvido',
      summary: 'Desenvolvimento de automações completas em n8n (webhooks, tratamento em Python, PostgreSQL e alertas) e em Google Apps Script — incluindo o fluxo da Defesa Civil (PDCE 2027) com portal de inscrição, download de cola de respostas por regra, página de dúvidas e sincronização automática com planilha e central.',
      tags: ['n8n', 'Google Apps Script', 'Webhooks & APIs', 'Google Sheets', 'PostgreSQL'],
      specs: [
        { label: 'Orquestradores', value: 'n8n & Google Apps Script' },
        { label: 'Caso Real (Apps Script)', value: 'Portal PDCE 2027 + Cola por Regra' },
        { label: 'Integração & Dados', value: 'Webhooks, Sheets, PostgreSQL & Python' }
      ],
      challenge: 'Eliminar rotinas manuais de cadastro, validação, resposta a dúvidas e consolidação de dados entre formulários, APIs e painéis operacionais sem gerar custos altos de infraestrutura.',
      solution: 'Combinação de pipelines orientados a eventos em n8n (webhooks, sanitização em Python, gravação em PostgreSQL e notificações) com automações serverless em Google Apps Script (portal de inscrições, regra de geração/download da cola de respostas, página de dúvidas e e-mails automáticos).',
      methodology: [
        'Em Google Apps Script (Defesa Civil): criação do portal de inscrição, download de cola de respostas seguindo regra de validação, página de dúvidas e sincronia com Sheets/Central',
        'Em n8n: orquestração visual de fluxos conectados a Webhooks HTTP, APIs REST e disparo automático de notificações',
        'Camadas de tratamento e validação de payloads em Python e JavaScript (Apps Script)',
        'Persistência estruturada em Google Sheets ou PostgreSQL com logs e tratamento de exceções'
      ],
      techStack: ['n8n', 'Google Apps Script', 'Google Sheets', 'Webhooks', 'PostgreSQL', 'Python']
    }
  ],
  // Demais Trabalhos (Lista compacta e minimizada)
  otherWorksList: [
    {
      id: 'trade-controller',
      title: 'App Trade Controller — Controlador de Estratégias',
      categoryBadge: 'Controlador Quant · Crypto (Binance) & MT5',
      badgeVariant: 'secondary',
      statusLabel: '5 Telas · Laboratório Quant',
      isTradeHighlight: true,
      description: 'Aplicação desktop para parametrização, simulação e controle de estratégias de trade em Cripto (Binance) e Ações (MT5). Reúne catálogo modular de estratégias (da S001 à S021), simulação realista de spread/slippage/latência, histórico de trades, gráficos de Win Rate por estratégia e Scanner Semanal com backtest sem look-ahead.',
      tags: ['Python', 'Binance & MT5', '21 Estratégias (S001–S021)', 'Backtest & Scanner', 'Desktop GUI'],
      imageSrc: './assets/aistudio/image_2ac28b9b.png',
      imageCaption: 'Aba Operação — Seleção Binance/MT5, simulação de spread/slippage/latência e métricas em tempo real',
      gallery: [
        {
          src: './assets/aistudio/image_2ac28b9b.png',
          label: '1. Operação',
          caption: 'Aba Operação — Seleção de bot (Binance/MT5), estratégia S004, parâmetros de simulação e painel de métricas'
        },
        {
          src: './assets/aistudio/image_2a28bf6b.png',
          label: '2. Estratégias',
          caption: 'Laboratório de Estratégias — Catálogo modular (Price Action, Stop, Trailing, Lucro) com seleção direta para o motor'
        },
        {
          src: './assets/aistudio/image_820967a1.png',
          label: '3. Histórico',
          caption: 'Histórico de Execuções — Registro consolidado de 1.045 trades com ativo, estratégia, preços, lucro líquido e capital'
        },
        {
          src: './assets/aistudio/image_503110e6.png',
          label: '4. Relatórios',
          caption: 'Relatórios de Assertividade — Comparativo tabular e gráfico de Win Rate (%) por estratégia (S004, S012.1, S014, S021)'
        },
        {
          src: './assets/aistudio/image_4e2c4bc1.png',
          label: '5. Scanner Semanal',
          caption: 'Scanner Semanal — Ranking de ativos por score, validação sem look-ahead (backtest) e envio automático no Telegram'
        }
      ],
      metrics: [
        { label: 'Mercados & Simulação', value: 'Binance & MT5 · Spread, Slippage e Latência' },
        { label: 'Módulos Integrados', value: 'Operação, Catálogo, Histórico, Relatórios & Scanner' },
        { label: 'Base Registrada', value: '1.045 trades e 21 famílias de estratégias' }
      ],
      strategySummary: {
        title: 'Resumo das Estratégias Desenvolvidas (S001–S021)',
        subtitle: 'Evolução incremental das regras de entrada e saída para controle de risco, taxas e assertividade:',
        groups: [
          {
            name: 'Base & Reversão',
            range: 'S001 – S003',
            summary: 'Desvio padrão simples (1 e 1.1), derivada direta (2) e primeiro filtro híbrido de desvio + derivada (3) usados como controle.'
          },
          {
            name: 'Híbridas Benchmark',
            range: 'S004 – S005',
            summary: 'S004 (Desvio + Derivada Confirmada) é a linha de base principal; 4.1 e 5 ajustam seletividade por desvio extremo e força mínima.'
          },
          {
            name: 'Proteção & Lucro Real',
            range: 'S006 – S009.1',
            summary: 'Evolução de Stop Loss clássico para saídas baseadas no lucro líquido real após taxas, com destaque para 8.1 e 9.1.'
          },
          {
            name: 'Trailing Profit',
            range: 'S010 – S012.1',
            summary: 'Captura de movimentos estendidos protegendo o lucro mínimo garantido ao recuo (ex.: S012.1 Trailing Stop Smart Min Buy).'
          },
          {
            name: 'Roadmap Quant & Score',
            range: 'S013 – S021',
            summary: 'Filtros planejados e em teste com ATR/volatilidade, confirmação por candles, score multicritério (S020) e ajuste via backtest (S021).'
          }
        ]
      }
    },
    {
      id: 'arbitragem-ciclo-exchanges',
      title: 'Simulador de Arbitragem em Ciclo entre Exchanges',
      categoryBadge: 'Script Python · CCXT Multi-Exchanges',
      badgeVariant: 'neutral',
      statusLabel: 'Código Utilitário',
      isTradeHighlight: false,
      description: 'Script em Python (CCXT) que consulta diversas corretoras e redes de transferência para simular em ciclo o resultado de comprar em uma loja, transferir para outra pela rede mais barata e vender na seguinte, enviando alertas via Telegram.',
      tags: ['Python', 'CCXT', 'Arbitragem em Ciclo', 'Taxas de Rede', 'Telegram'],
      imageSrc: './assets/aistudio/image_770b08b3.png',
      imageCaption: 'Script Python CCXT: consulta de redes entre corretoras e simulação de ciclo com alertas no Telegram',
      metrics: [
        { label: 'Dinâmica', value: 'Compra → Transferência → Venda em Ciclo' },
        { label: 'Exchanges Consultadas', value: 'Binance, KuCoin, Kraken, Bybit, Gate.io...' },
        { label: 'Critério de Rede', value: 'Menor Taxa de Saque/Depósito + Telegram' }
      ],
      codeSnippet: {
        language: 'python',
        filename: 'arbitragem_ciclo_ccxt.py',
        code: `import os
from dotenv import load_dotenv
import ccxt

# Confere redes comuns e estima o menor custo de transferência entre exchanges
def encontrar_melhor_rede_para_transferencia(moeda, ex1, ex2):
    try:
        ex1.load_markets()
        ex2.load_markets()
        net1 = ex1.currencies[moeda].get("networks", {})
        net2 = ex2.currencies[moeda].get("networks", {})

        comuns = set(net1.keys()) & set(net2.keys())
        melhores = []
        for rede in comuns:
            fee1 = net1[rede].get("withdrawFee", float('inf'))
            fee2 = net2[rede].get("withdrawFee", float('inf'))
            if not net1[rede].get("withdrawEnabled") or not net2[rede].get("depositEnabled"):
                continue
            melhores.append((rede, fee1 + fee2))
        melhores.sort(key=lambda x: x[1])
        return melhores[0] if melhores else None
    except Exception as e:
        print(f"[Erro] encontrar_melhor_rede_para_transferencia: {e}")
        return None`
      }
    },
    {
      id: 'conversor-imagens-pdf',
      title: 'Conversor de Imagens & Unificador de PDFs (Desktop GUI)',
      categoryBadge: 'Desktop GUI · Utilitário Python',
      badgeVariant: 'primary',
      statusLabel: 'Utilitário Desktop',
      description: 'Ferramenta desktop desenvolvida para conversão em lote de imagens (JPEG, WEBP, PNG com ajuste fino de compressão e qualidade) e módulo integrado para unificação ágil de múltiplos arquivos PDF em documento único.',
      tags: ['Python', 'CustomTkinter', 'Pillow', 'PyPDF', 'Desktop GUI'],
      imageSrc: './assets/aistudio/image_6457b4b7.png',
      imageCaption: 'Interface ConversorImagens v1.0 (Abas de Conversão em Lote e Juntador de PDFs)',
      metrics: [
        { label: 'Formatos Suportados', value: 'JPEG, WEBP, PNG' },
        { label: 'Controle de Saída', value: 'Compressão & Qualidade (0-100%)' },
        { label: 'Módulo PDF', value: 'Mesclagem Instantânea' }
      ],
      codeSnippet: {
        language: 'python',
        filename: 'conversor_imagens_gui.py',
        code: `import os
from PIL import Image

def batch_convert(source_folder, output_format="WEBP", quality=90):
    for root, _, files in os.walk(source_folder):
        for f in files:
            if f.lower().endswith(('.png', '.jpg', '.jpeg')):
                in_path = os.path.join(root, f)
                out_path = os.path.join(root, f"{os.path.splitext(f)[0]}.{output_format.lower()}")
                with Image.open(in_path) as img:
                    img.save(out_path, output_format, quality=quality, optimize=True)`
      }
    },
    {
      id: 'gov-compras-pipeline',
      title: 'Ingestão & Auditoria de Dados Públicos (compras.gov.br)',
      categoryBadge: 'Pipeline ETL · API Rest & Pandas',
      badgeVariant: 'neutral',
      statusLabel: 'Pipeline de Dados',
      description: 'Script em Python com Requests e Pandas consumindo a API oficial de Compras do Governo Federal (dadosabertos.compras.gov.br), convertendo payloads em DataFrames para estruturação tabular e auditoria de itens materiais.',
      tags: ['Python', 'Pandas', 'Requests', 'REST API', 'Dados Abertos'],
      imageSrc: './assets/aistudio/image_46ca9823.png',
      imageCaption: 'Script Python gov.py consultando módulo de materiais da API Compras do Governo Federal',
      metrics: [
        { label: 'Fonte Oficial', value: 'dadosabertos.compras.gov.br' },
        { label: 'Estruturação', value: 'Pandas DataFrames' },
        { label: 'Aplicação', value: 'Auditoria de Materiais e Preços' }
      ],
      codeSnippet: {
        language: 'python',
        filename: 'gov.py',
        code: `import requests
import pandas as pd

url = "https://dadosabertos.compras.gov.br/modulo-material/4_consultarItemMaterial"

response = requests.get(url)
dados = response.json()

df = pd.DataFrame(dados['resultado'])
print(df.info())
print(df.head())
print(dados.keys())`
      }
    }
  ],
  get snippetList() {
    return this.otherWorksList;
  },
  skillCategories: [],
  education: [
    {
      course: 'Engenharia de Produção (Bacharelado)',
      institution: 'Anhanguera Educacional',
      description: 'Pesquisa operacional, gestão de processos e modelagem quantitativa.'
    },
    {
      course: 'Técnico em Informática & Processos',
      institution: 'SENAI',
      description: 'Lógica computacional, arquitetura de sistemas e automação.'
    }
  ]
};

export const translationsEn: Translations = {
  nav: {
    inicio: 'Home',
    projetos: 'Projects',
    competencias: 'Skills',
    sobreMim: 'About me',
    contato: 'Contact',
    expand: 'Expand menu',
    collapse: 'Collapse menu',
    themeLight: 'Light theme',
    themeDark: 'Dark theme',
    switchLang: 'Mudar para Português'
  },
  hero: {
    headline: 'Data that drives solutions.',
    subheadline: 'Production Engineer specializing in data modeling, mathematical optimization, and process automation. Crafting practical tools that streamline operations and empower confident decision-making.',
    ctaProjects: 'View featured projects',
    ctaContact: 'Get in touch'
  },
  projects: {
    sectionTitle: 'Featured Projects',
    sectionSubtitle: 'Practical solutions developed across data visualization, computational optimization, and workflow automation.',
    flagshipBadge: 'Flagship Project · Government Data Hub',
    flagshipTitle: 'Civil Defense in Schools — Data & Intelligence Hub',
    flagshipSubtitle: 'Statewide School & Teacher Lookup Dashboard (SC, Brazil)',
    flagshipDescription: 'Dashboard developed with Santa Catarina Civil Defense to help teachers from every school across the state look up their school and faculty registration status in the program, integrating the agency spreadsheet with the Google ecosystem using free tooling already available to the public sector.',
    flagshipDeveloper: 'Project developed with technical support from Eng. Yuri Furtwaengler',
    flagshipStats: [
      { label: 'Target Users', value: 'All SC Schools & Teachers' },
      { label: 'Integration', value: 'Official Sheet + Google' },
      { label: 'Sustainability', value: 'Zero-Cost Public Tooling' }
    ],
    flagshipExploreBtn: 'Explore Full Case Study',
    filterAll: 'All (3)',
    filterOptimization: 'Mathematical Optimization',
    filterAutomation: 'n8n Automation',
    filterAnalytics: 'Data Analytics & BI',
    viewProject: 'View details',
    technicalStudy: 'Technical study',
    confirmedDeliverable: 'Authentic project',
    specDetailsAvailable: 'Technical specifications available',
    modalTitle: 'Technical Case Study',
    overview: 'Overview',
    challenge: 'Context & Challenge',
    solution: 'Implemented Solution',
    methodology: 'Methodology & Key Steps',
    techStack: 'Technologies & Frameworks',
    close: 'Close',
    copyCode: 'Copy code',
    codeCopied: 'Copied to clipboard',
    interactive3DTitle: 'Simplified 3D Explorer · Measured CSV Results (runs.csv)',
    interactive3DSubtitle: 'Compare strategy gains (×) and click any 3D pillar to inspect the 5 challenges',
    interactive3DActive: '35/35 valid runs',
    benchmarkGraphTitle: 'Smart Heuristic · Split the work. Measure the result.',
    benchmarkGraphSubtitle: 'Sequential search (7.99 s) vs Distributed TREE search (3.21 s) · Median of 5 challenges per config'
  },
  snippets: {
    sectionTitle: 'Other Works',
    sectionSubtitle: 'Automations, practical utility tools, and hands-on routines built to solve targeted operational and analytical challenges.',
    emptyPhotoNotice: 'Visual preview coming soon',
    viewCode: 'View code',
    copyCode: 'Copy code',
    copied: 'Copied!',
    languageLabel: 'Language',
    viewDetails: 'View details & code',
    hideDetails: 'Collapse',
    statusReady: 'Production-Ready & High-Efficiency',
    previewModalTitle: 'Visual Record & Source Code',
    close: 'Close'
  },
  otherWorks: {
    sectionTitle: 'Other Works',
    sectionSubtitle: 'Automations, practical utility tools, and hands-on routines built to solve targeted operational and analytical challenges.',
    viewDetails: 'View details & code',
    hideDetails: 'Collapse',
    viewCode: 'View code',
    copyCode: 'Copy code',
    copied: 'Copied!',
    statusReady: 'Production-Ready & High-Efficiency',
    previewModalTitle: 'Visual Record & Source Code',
    close: 'Close'
  },
  rastrigin: {
    badge: 'Rastrigin Benchmark Function',
    minimum: 'f(0, 0) = 0 · Global Minimum',
    title: 'Multimodal Optimization Simulator',
    instruction: 'Click and drag with your mouse to rotate the 3D surface 360°',
    algoMomentum: 'Gradient w/ Momentum',
    algoPso: 'Particle Swarm (PSO)',
    algoGenetic: 'Genetic Algorithm (GA)',
    rotateHint: 'Rotate: Click & drag',
    costLabel: 'Cost f(x, y)',
    iterationLabel: 'Iteration',
    convergenceTitle: 'Objective Function Convergence Curve',
    convergenceSubtitle: 'Trajectory of the objective value towards the global minimum',
    play: 'Run',
    pause: 'Pause',
    reset: 'Reset',
    step: 'Step',
    surface3dView: '3D Surface',
    convergenceView: 'Convergence',
    minReached: 'Minimum reached'
  },
  about: {
    sectionTitle: 'About & Core Competencies',
    sectionSubtitle: 'Focused on analytical modeling, computational optimization, and process automation.',
    p1: '',
    p2: 'Hands-on delivery across Google ecosystem dashboards and portals (Google Apps Script & Sheets), Python parallel computing benchmarks, and event-driven automation workflows in n8n.',
    p3: 'My goal is always to eliminate operational friction, turn unstructured data into actionable clarity, and craft software solutions that support dependable, evidence-based decisions.',
    educationTitle: 'Education & Technical Foundation',
    educationSummary: 'A solid foundation pairing the strategic and quantitative mindset of Production Engineering with applied technical training in systems and computation.',
    educationItems: [
      {
        course: 'Production Engineering (B.S.)',
        institution: 'Anhanguera Educacional',
        focus: 'Operations research, industrial process design, quantitative modeling, and continuous improvement.'
      },
      {
        course: 'Technical Degree in Computer Science & Processes',
        institution: 'SENAI',
        focus: 'Programming logic, systems architecture, relational data, and applied industrial automation.'
      }
    ],
    skillsTitle: 'Core Capabilities',
    skillsSubtitle: 'Key technical competencies consolidated through real-world projects and computational modeling.',
    competencyDomains: [
      {
        title: 'Data Analytics & BI',
        description: 'Building centralized data hubs, executive dashboards, KPI modeling, and data cleansing for operational intelligence.',
        items: ['Interactive Dashboards', 'KPIs & Operational Metrics', 'SQL Queries', 'Data Wrangling', 'Power BI & Looker Studio']
      },
      {
        title: 'Optimization & Operations Research',
        description: 'Metaheuristic and computational algorithms for navigating complex nonlinear landscapes, line balancing, and decision models.',
        items: ['Genetic Algorithms (GA)', 'Particle Swarm (PSO)', 'NumPy / SciPy', 'Multimodal Functions', 'Python Modeling']
      },
      {
        title: 'Automation with n8n & Google Apps Script',
        description: 'Orchestrating event-driven pipelines in n8n (webhooks, APIs, PostgreSQL) and building automated web portals and rule-based workflows in Google Apps Script.',
        items: ['n8n Workflow Automation', 'Google Apps Script', 'Webhooks & REST APIs', 'Google Sheets & PostgreSQL', 'Python Scripts']
      }
    ],
    stackLabel: 'Core Stack & Technologies',
    specialtyLabel: 'Specialty',
    specialtyValue: 'Production Engineering & Data Analytics',
    locationLabel: 'Location',
    languagesLabel: 'Languages',
    nativeLevel: 'Portuguese (Native)',
    intermediateLevel: 'English (Intermediate)',
    status: 'Available for technical projects and new opportunities'
  },
  contact: {
    sectionTitle: 'Contact',
    sectionSubtitle: 'Direct channels for inquiries, technical collaboration, or opportunities.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    copyEmail: 'Copy email',
    emailCopied: 'Email copied!',
    socialLabel: 'Professional Profiles',
    formTitle: 'Send a Message',
    nameField: 'Name',
    namePlaceholder: 'Your name',
    emailField: 'Email',
    emailPlaceholder: 'your.email@example.com',
    messageField: 'Message',
    messagePlaceholder: 'Describe your project or inquiry...',
    sendButton: 'Send message',
    sendingButton: 'Sending...',
    successTitle: 'Message sent successfully.',
    successMessage: 'Thank you for getting in touch! I will reply shortly to your email.'
  },
  footer: {
    role: 'Production Engineer | Data & Automation',
    backToTop: 'Back to top ↑'
  },
  projectList: [
    {
      id: 'defesa-civil-dashboard',
      title: 'Data Hub & Registration Portal — PDCE 2027',
      subtitle: 'School Lookup Hub + Google Apps Script Registration Portal (SC)',
      category: 'analytics',
      categoryLabel: 'Data Analytics & Google Apps Script',
      featured: true,
      featuredType: 'dashboard',
      imageLabel: 'PDCE 2027 Hub & Portal',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Authentic Project',
      summary: 'Ecosystem built with Santa Catarina Civil Defense uniting the PDCE 2027 Data Hub (statewide school and teacher lookup) with the PDCE 2027 Registration Portal in Google Apps Script — supporting online registration, rule-based downloadable answer-key cheat sheets, and a dedicated FAQ page.',
      tags: ['Google Apps Script', 'Google Sheets', 'Registration Portal', 'Data Hub', 'SC Civil Defense'],
      specs: [
        { label: 'Entity', value: 'Civil Defense of Santa Catarina' },
        { label: 'Ecosystem', value: '2027 Data Hub + Registration Portal' },
        { label: 'Platform', value: 'Google Apps Script & Sheets (Zero Cost)' }
      ],
      challenge: 'Enabling statewide school and faculty enrollment alongside fast registration lookup and clear participant guidance without commissioning high-cost custom software and maintenance.',
      solution: 'End-to-end integration linking Civil Defense’s official spreadsheet to free Google ecosystem tooling: a Google Apps Script Registration Portal (enrollment, rule-based answer-key download, and FAQ page) synced directly with the 2027 Data Hub.',
      methodology: [
        'PDCE 2027 Registration Portal in Google Apps Script for school unit and teacher enrollment',
        'Automated answer-key cheat sheet ("cola de respostas") download governed by custom validation rules',
        'Built-in FAQ / Q&A page hosted within the same zero-cost public agency environment',
        'Live sync with the official spreadsheet and 2027 Data Hub filtering by City, School, COREDEC, CRE, and COMPDEC'
      ],
      techStack: ['Google Apps Script', 'Google Sheets', 'Interactive Dashboards', 'Web Portal', 'Zero-Cost Solution']
    },
    {
      id: 'rastrigin-optimization',
      title: 'Computational Optimization & Distributed Search (TREE)',
      subtitle: 'Smart Heuristic · 2.49× Speedup & 3D Parameter Analysis',
      category: 'otimizacao',
      categoryLabel: 'Mathematical Optimization',
      featured: true,
      featuredType: 'rastrigin',
      imageLabel: 'Smart Heuristic · 2.49× Gain',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Engineering Demonstration',
      summary: 'Distributed search benchmark across 35 real runs (7 configs × 5 trials). Dynamic TREE scheduling with 4 processes and 16,384 block size reduced median runtime from 7.99 s (sequential) to 3.21 s — a 2.49× speedup (59.8% less time) vs 1.04× for fixed splitting.',
      tags: ['Python', 'Multiprocessing', 'TREE Partitioning', '3D Benchmark', 'SHA-256 Search'],
      specs: [
        { label: 'Measured Gain', value: '2.49× (59.8% less time)' },
        { label: 'Median Seq vs TREE', value: '7.99 s vs 3.21 s (~982k eval/s)' },
        { label: 'Validation (runs.csv)', value: '35/35 validated searches' }
      ],
      challenge: 'Under static range splitting, worker threads hit uneven search paths and distant nonces (6.93 s / 1.15× with 2 proc and 7.68 s / 1.04× with 4 proc), leaving CPU parallelism underutilized.',
      solution: 'Dynamic TREE block partitioning on demand (16,384 and 131,072 chunk sizes) keeps workers balanced until the earliest valid nonce is found, reaching 1.77× (2 proc) and 2.49× (4 proc) at 16,384.',
      methodology: [
        '35 paired runs (5 trials × 7 configs: sequential, static 2/4p, and tree 2/4p × 16k/131k) logged in runs.csv',
        'Median total elapsed time comparison: Sequential 7.99 s · Fixed 2p 6.93 s (1.15×) · Fixed 4p 7.68 s (1.04×)',
        'TREE medians: 2p/131k = 4.76 s (1.68×) · 2p/16k = 4.52 s (1.77×) · 4p/131k = 3.43 s (2.33×) · 4p/16k = 3.21 s (2.49×)',
        'Aggregate throughput from 982k to 1.16M eval/s with 100% validated digests (35/35)'
      ],
      techStack: ['Python', 'Multiprocessing', 'TREE Scheduling', 'CSV Telemetry', 'Canvas 3D']
    },
    {
      id: 'n8n-automation-pipeline',
      title: 'Workflow Automation: n8n & Google Apps Script',
      subtitle: 'Event-Driven Pipelines (n8n) + Google Apps Script Portals & Rules',
      category: 'automacao',
      categoryLabel: 'n8n & Apps Script Automation',
      featured: true,
      featuredType: 'n8n',
      imageLabel: 'n8n & Google Apps Script',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Developed Project',
      summary: 'End-to-end automation engineering using n8n (webhooks, Python processing, PostgreSQL, alerts) and Google Apps Script — including the Civil Defense PDCE 2027 workflow with online registration portal, rule-based answer-key download, FAQ page, and automated spreadsheet/dashboard sync.',
      tags: ['n8n', 'Google Apps Script', 'Webhooks & APIs', 'Google Sheets', 'PostgreSQL'],
      specs: [
        { label: 'Platforms', value: 'n8n & Google Apps Script' },
        { label: 'Real Case (Apps Script)', value: 'PDCE 2027 Portal + Rule-Based File' },
        { label: 'Integration & Data', value: 'Webhooks, Sheets, PostgreSQL & Python' }
      ],
      challenge: 'Eliminating manual registration handling, validation, Q&A guidance, and multi-source synchronization across forms, APIs, and operational dashboards without costly infrastructure.',
      solution: 'Combining event-driven n8n pipelines (HTTP webhooks, Python sanitization, PostgreSQL persistence, and automated alerts) with serverless Google Apps Script automations (registration portal, rule-governed answer-key download, FAQ page, and automated emails).',
      methodology: [
        'In Google Apps Script (Civil Defense): built the registration portal, rule-based answer-key cheat sheet generator, FAQ page, and live sync to Sheets/Data Hub',
        'In n8n: visual workflow orchestration connecting HTTP Webhooks, REST APIs, and instant operational alerting',
        'Payload validation and transformation layers implemented in Python and JavaScript (Apps Script)',
        'Structured storage in Google Sheets or PostgreSQL with error handling and execution logging'
      ],
      techStack: ['n8n', 'Google Apps Script', 'Google Sheets', 'Webhooks', 'PostgreSQL', 'Python']
    }
  ],
  // Other Works (Compact, minimized list)
  otherWorksList: [
    {
      id: 'trade-controller',
      title: 'App Trade Controller — Strategy Controller',
      categoryBadge: 'Strategy Controller · Crypto (Binance) & MT5',
      badgeVariant: 'secondary',
      statusLabel: '5 Screens · Quant Lab',
      isTradeHighlight: true,
      description: 'Desktop application for configuring, simulating, and controlling trading strategies across Crypto (Binance) and Equities (MT5). Combines a modular strategy catalog (S001 to S021), realistic spread/slippage/latency simulation, trade history, strategy Win Rate charts, and a Weekly Scanner with look-ahead-free backtesting.',
      tags: ['Python', 'Binance & MT5', '21 Strategies (S001–S021)', 'Backtest & Scanner', 'Desktop GUI'],
      imageSrc: './assets/aistudio/image_2ac28b9b.png',
      imageCaption: 'Operation Tab — Binance/MT5 selection, spread/slippage/latency simulation, and live metrics',
      gallery: [
        {
          src: './assets/aistudio/image_2ac28b9b.png',
          label: '1. Operation',
          caption: 'Operation Tab — Bot selector (Binance/MT5), S004 strategy, simulation parameters, and live metrics panel'
        },
        {
          src: './assets/aistudio/image_2a28bf6b.png',
          label: '2. Strategies',
          caption: 'Strategy Lab — Modular catalog (Price Action, Stop, Trailing, Profit) with direct engine activation'
        },
        {
          src: './assets/aistudio/image_820967a1.png',
          label: '3. History',
          caption: 'Execution History — Consolidated log of 1,045 trades with symbol, strategy, timestamps, net profit, and equity'
        },
        {
          src: './assets/aistudio/image_503110e6.png',
          label: '4. Reports',
          caption: 'Accuracy Reports — Tabular breakdown and Win Rate (%) bar chart across strategies (S004, S012.1, S014, S021)'
        },
        {
          src: './assets/aistudio/image_4e2c4bc1.png',
          label: '5. Weekly Scanner',
          caption: 'Weekly Scanner — Asset ranking by score, look-ahead-free backtest validation, and automatic Telegram alerts'
        }
      ],
      metrics: [
        { label: 'Markets & Simulation', value: 'Binance & MT5 · Spread, Slippage & Latency' },
        { label: 'Integrated Modules', value: 'Operation, Catalog, History, Reports & Scanner' },
        { label: 'Tracked Dataset', value: '1,045 trades across 21 strategy families' }
      ],
      strategySummary: {
        title: 'Strategy Overview (S001–S021)',
        subtitle: 'Incremental evolution of entry and exit rules balancing fee awareness, risk control, and win rate:',
        groups: [
          {
            name: 'Baseline & Reversion',
            range: 'S001 – S003',
            summary: 'Simple standard deviation (1 & 1.1), raw derivative (2), and initial hybrid deviation + derivative filter (3) kept as baselines.'
          },
          {
            name: 'Hybrid Benchmarks',
            range: 'S004 – S005',
            summary: 'S004 (Deviation + Confirmed Derivative) serves as the primary benchmark; 4.1 and 5 refine entry selectivity.'
          },
          {
            name: 'Protection & Net Profit',
            range: 'S006 – S009.1',
            summary: 'Shift from classic Stop Loss toward fee-aware exits anchored on real net position profit (highlighting 8.1 and 9.1).'
          },
          {
            name: 'Trailing Profit',
            range: 'S010 – S012.1',
            summary: 'Captures extended upside while locking a guaranteed minimum profit on pullbacks (e.g., S012.1 Trailing Stop Smart Min Buy).'
          },
          {
            name: 'Quant Roadmap & Score',
            range: 'S013 – S021',
            summary: 'Volatility/ATR filters, multi-candle confirmation, multi-factor scoring (S020), and backtest-driven tuning (S021).'
          }
        ]
      }
    },
    {
      id: 'arbitragem-ciclo-exchanges',
      title: 'Cross-Exchange Cycle Arbitrage Simulator',
      categoryBadge: 'Python Script · CCXT Multi-Exchange',
      badgeVariant: 'neutral',
      statusLabel: 'Utility Script',
      isTradeHighlight: false,
      description: 'Python (CCXT) script that checks prices and transfer networks across multiple exchanges to simulate buying on one platform, transferring via the lowest-fee network to another, and selling on the next in a cycle, with Telegram alerts.',
      tags: ['Python', 'CCXT', 'Cycle Arbitrage', 'Network Fees', 'Telegram'],
      imageSrc: './assets/aistudio/image_770b08b3.png',
      imageCaption: 'CCXT Python Script: multi-exchange network lookup and cycle simulation with Telegram notifications',
      metrics: [
        { label: 'Cycle Flow', value: 'Buy → Transfer → Sell Cycle' },
        { label: 'Exchanges Checked', value: 'Binance, KuCoin, Kraken, Bybit, Gate.io...' },
        { label: 'Routing Criterion', value: 'Lowest Transfer Fee + Telegram' }
      ],
      codeSnippet: {
        language: 'python',
        filename: 'arbitragem_ciclo_ccxt.py',
        code: `import os
from dotenv import load_dotenv
import ccxt

# Finds common networks and estimates lowest transfer cost between exchanges
def encontrar_melhor_rede_para_transferencia(moeda, ex1, ex2):
    try:
        ex1.load_markets()
        ex2.load_markets()
        net1 = ex1.currencies[moeda].get("networks", {})
        net2 = ex2.currencies[moeda].get("networks", {})

        comuns = set(net1.keys()) & set(net2.keys())
        melhores = []
        for rede in comuns:
            fee1 = net1[rede].get("withdrawFee", float('inf'))
            fee2 = net2[rede].get("withdrawFee", float('inf'))
            if not net1[rede].get("withdrawEnabled") or not net2[rede].get("depositEnabled"):
                continue
            melhores.append((rede, fee1 + fee2))
        melhores.sort(key=lambda x: x[1])
        return melhores[0] if melhores else None
    except Exception as e:
        print(f"[Erro] encontrar_melhor_rede_para_transferencia: {e}")
        return None`
      }
    },
    {
      id: 'conversor-imagens-pdf',
      title: 'Batch Image Converter & PDF Merger (Desktop GUI)',
      categoryBadge: 'Desktop GUI · Python Utility',
      badgeVariant: 'primary',
      statusLabel: 'Desktop Utility',
      description: 'Desktop application built with CustomTkinter for high-speed batch image processing (JPEG, WEBP, PNG with fine compression & quality tuning) and integrated utility for sequential multi-PDF merging into a unified file.',
      tags: ['Python', 'CustomTkinter', 'Pillow', 'PyPDF', 'Desktop GUI'],
      imageSrc: './assets/aistudio/image_6457b4b7.png',
      imageCaption: 'ConversorImagens v1.0 UI (Batch Image Conversion Tabs and PDF Merger)',
      metrics: [
        { label: 'Supported Formats', value: 'JPEG, WEBP, PNG' },
        { label: 'Output Control', value: 'Compression & Quality (0-100%)' },
        { label: 'PDF Module', value: 'Instant Multi-Document Merge' }
      ],
      codeSnippet: {
        language: 'python',
        filename: 'conversor_imagens_gui.py',
        code: `import os
from PIL import Image

def batch_convert(source_folder, output_format="WEBP", quality=90):
    for root, _, files in os.walk(source_folder):
        for f in files:
            if f.lower().endswith(('.png', '.jpg', '.jpeg')):
                in_path = os.path.join(root, f)
                out_path = os.path.join(root, f"{os.path.splitext(f)[0]}.{output_format.lower()}")
                with Image.open(in_path) as img:
                    img.save(out_path, output_format, quality=quality, optimize=True)`
      }
    },
    {
      id: 'gov-compras-pipeline',
      title: 'Public Procurement Data Ingestion (compras.gov.br)',
      categoryBadge: 'ETL Pipeline · REST API & Pandas',
      badgeVariant: 'neutral',
      statusLabel: 'Data Pipeline',
      description: 'Python script utilizing Requests and Pandas querying the Brazilian Federal Government Open Procurement API (dadosabertos.compras.gov.br), structuring JSON payloads into analytical DataFrames for material item auditing.',
      tags: ['Python', 'Pandas', 'Requests', 'REST API', 'Open Data'],
      imageSrc: './assets/aistudio/image_46ca9823.png',
      imageCaption: 'Python gov.py script querying Federal Procurement API materials endpoint',
      metrics: [
        { label: 'Official Source', value: 'dadosabertos.compras.gov.br' },
        { label: 'Structure', value: 'Pandas DataFrames' },
        { label: 'Application', value: 'Material Item & Pricing Audit' }
      ],
      codeSnippet: {
        language: 'python',
        filename: 'gov.py',
        code: `import requests
import pandas as pd

url = "https://dadosabertos.compras.gov.br/modulo-material/4_consultarItemMaterial"

response = requests.get(url)
dados = response.json()

df = pd.DataFrame(dados['resultado'])
print(df.info())
print(df.head())
print(dados.keys())`
      }
    }
  ],
  get snippetList() {
    return this.otherWorksList;
  },
  skillCategories: [],
  education: [
    {
      course: 'Production Engineering (B.S.)',
      institution: 'Anhanguera Educacional',
      description: 'Operations research, process design, and quantitative modeling.'
    },
    {
      course: 'Technical Degree in Computer Science & Processes',
      institution: 'SENAI',
      description: 'Programming logic, systems architecture, and automation.'
    }
  ]
};
