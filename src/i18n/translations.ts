import { Project, SkillCategory, EducationItem } from '../types';

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
  };
  projects: {
    sectionTitle: string;
    sectionSubtitle: string;
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
  skills: {
    sectionTitle: string;
    sectionSubtitle: string;
    filterAll: string;
  };
  about: {
    sectionTitle: string;
    sectionSubtitle: string;
    p1: string;
    p2: string;
    p3: string;
    educationTitle: string;
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
    subheadline: 'Engenheiro de Produção com experiência em processos industriais, projetos, análise de dados e melhoria contínua. Atuação na integração entre processos, tecnologia e análise para desenvolver soluções práticas e apoiar a tomada de decisão.',
    ctaProjects: 'Ver projetos'
  },
  projects: {
    sectionTitle: 'Projetos',
    sectionSubtitle: 'Estudos de caso em otimização matemática, fluxos de automação e modelagem de dados.',
    filterAll: 'Todos',
    filterOptimization: 'Otimização & PCP',
    filterAutomation: 'Automação & Processos',
    filterAnalytics: 'Análise de Dados & BI',
    viewProject: 'Ver projeto',
    technicalStudy: 'Estudo técnico',
    confirmedDeliverable: 'Realização',
    specDetailsAvailable: 'Especificações técnicas disponíveis',
    modalTitle: 'Estudo Técnico',
    overview: 'Visão Geral',
    challenge: 'Contexto & Desafio',
    solution: 'Solução Implementada',
    methodology: 'Metodologia & Etapas',
    techStack: 'Tecnologias & Metodologias',
    close: 'Fechar',
    copyCode: 'Copiar',
    codeCopied: 'Copiado',
    interactive3DTitle: 'Simulação Interativa 3D (Arraste para rotacionar)',
    interactive3DSubtitle: 'Explore a rotação e convergência dos algoritmos diretamente na tela',
    interactive3DActive: 'Controles ativos'
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
  skills: {
    sectionTitle: 'Competências',
    sectionSubtitle: 'Tecnologias e metodologias agrupadas por aplicação prática.',
    filterAll: 'Todas'
  },
  about: {
    sectionTitle: 'Sobre Mim',
    sectionSubtitle: 'Formação em Engenharia de Produção e Técnico em Informática, com atuação em processos industriais, dados e tecnologia.',
    p1: 'Sou Engenheiro de Produção com experiência prática em processos industriais, projetos, análise de dados e melhoria contínua.',
    p2: 'Minha atuação é focada na integração entre processos, tecnologia e análise para desenvolver soluções práticas, aumentar a eficiência operacional e apoiar a tomada de decisões estratégicas.',
    p3: 'Possuo vivência em implantação e transição de sistemas corporativos (como a implementação do SAP na Intelbras durante a migração do TOTVS), análise e modelagem de processos em chão de fábrica e construção de ferramentas para centralização e acompanhamento de dados.',
    educationTitle: 'Formação Acadêmica',
    specialtyLabel: 'Especialidade',
    specialtyValue: 'Engenharia de Produção & Análise de Dados',
    locationLabel: 'Localização',
    languagesLabel: 'Idiomas',
    nativeLevel: 'Nativo',
    intermediateLevel: 'Intermediário',
    status: 'Disponível para novos projetos e oportunidades'
  },
  contact: {
    sectionTitle: 'Contato',
    sectionSubtitle: 'Canais diretos para contato, colaborações técnicas ou oportunidades.',
    emailLabel: 'E-mail',
    phoneLabel: 'Telefone',
    locationLabel: 'Localização',
    copyEmail: 'Copiar e-mail',
    emailCopied: 'E-mail copiado',
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
    role: 'Engenheiro de Produção | Analista de Processos e Dados',
    backToTop: 'Voltar ao topo ↑'
  },
  projectList: [
    {
      id: 'defesa-civil-dashboard',
      title: 'Central de Informações & Dashboard — Defesa Civil de SC',
      subtitle: 'Programa Defesa Civil na Escola (PDCE)',
      category: 'analytics',
      categoryLabel: 'Análise de Dados & BI',
      featured: true,
      featuredType: 'dashboard',
      imageLabel: 'Painel gerencial Defesa Civil (projeto real)',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Comprovado em currículo',
      summary: 'Criação de uma solução para centralização, organização e visualização de informações do Programa Defesa Civil na Escola (PDCE), com ferramenta de acompanhamento e consulta com indicadores e filtros para facilitar a análise de dados.',
      tags: ['Dashboards', 'Indicadores e KPIs', 'Visualização de Dados', 'Filtros Dinâmicos', 'Gestão da Informação'],
      specs: [
        { label: 'Organização', value: 'Defesa Civil de Santa Catarina' },
        { label: 'Programa', value: 'Defesa Civil na Escola (PDCE)' },
        { label: 'Finalidade', value: 'Centralização e Análise de Indicadores' }
      ],
      challenge: 'Acompanhar a evolução das iniciativas e participantes do Programa Defesa Civil na Escola de forma centralizada e ágil para subsidiar a tomada de decisão das equipes.',
      solution: 'Desenvolvimento de uma ferramenta unificada de consulta e acompanhamento de informações, permitindo cruzamento de dados, filtros por região e visualização clara de indicadores estratégicos.',
      methodology: [
        'Levantamento de requisitos junto aos responsáveis pelo programa PDCE',
        'Estruturação e padronização das fontes de informações coletadas',
        'Desenvolvimento de painel visual com indicadores e filtros de consulta rápida',
        'Validação das visualizações para suporte à tomada de decisão'
      ],
      techStack: ['Dashboards', 'Indicadores & KPIs', 'Organização de Dados', 'Gestão de Informações']
    },
    {
      id: 'rastrigin-optimization',
      title: 'Otimização Computacional: Função de Rastrigin',
      subtitle: 'Algoritmos Heurísticos & Otimização Global',
      category: 'otimizacao',
      categoryLabel: 'Otimização Matemática',
      featured: true,
      featuredType: 'rastrigin',
      imageLabel: 'Superfície matemática multimodal 3D',
      provenance: 'estudo_em_validacao',
      provenanceLabel: 'Estudo técnico em validação',
      summary: 'Implementação e estudo comparativo de algoritmos de otimização global (Algoritmos Genéticos, Particle Swarm e Gradiente c/ Momentum) aplicados à função multimodal de Rastrigin, com visualizador 3D interativo.',
      tags: ['Python', 'NumPy', 'SciPy', 'Algoritmos Genéticos', 'PSO', 'Visualização 3D'],
      specs: [
        { label: 'Domínio', value: 'Espaço bidimensional / n-dimensional' },
        { label: 'Mínimo Global', value: 'f(0, 0) = 0' },
        { label: 'Linguagem', value: 'Python / SciPy / NumPy' }
      ],
      challenge: 'A função de Rastrigin é altamente não-convexa e possui múltiplos mínimos locais. Métodos de descida puramente locais tendem a convergir prematuramente.',
      solution: 'Implementação de algoritmos populacionais (PSO e Algoritmos Genéticos) em Python com controle de convergência, analisando a capacidade de escape de ótimos locais.',
      methodology: [
        'Modelagem analítica da função f(x) = 20 + ∑(xi² - 10·cos(2π·xi))',
        'Configuração de operadores de mutação e recombinação em algoritmos genéticos',
        'Ajuste de inércia e parâmetros cognitivos/sociais no Particle Swarm Optimization',
        'Plotagem e renderização 3D das trajetórias de convergência dos algoritmos'
      ],
      techStack: ['Python', 'NumPy', 'SciPy Optimize', 'Matplotlib', 'TypeScript / Canvas 3D'],
      codeSnippet: {
        language: 'python',
        filename: 'rastrigin_optimizer.py',
        code: `import numpy as np

def rastrigin(x, A=10):
    """Função de teste multimodal de Rastrigin n-dimensional."""
    n = len(x)
    return A * n + np.sum(x**2 - A * np.cos(2 * np.pi * x))

def particle_swarm_optimization(cost_func, dim=2, num_particles=30, max_iter=80):
    """Implementação básica de PSO para otimização contínua."""
    w, c1, c2 = 0.72, 1.49, 1.49
    pos = np.random.uniform(-5.12, 5.12, (num_particles, dim))
    vel = np.random.uniform(-1.0, 1.0, (num_particles, dim))
    pbest = pos.copy()
    pbest_scores = np.array([cost_func(p) for p in pos])
    gbest = pbest[np.argmin(pbest_scores)]
    gbest_score = np.min(pbest_scores)
    
    trajectory = [gbest.copy()]
    for _ in range(max_iter):
        r1, r2 = np.random.rand(num_particles, dim), np.random.rand(num_particles, dim)
        vel = w * vel + c1 * r1 * (pbest - pos) + c2 * r2 * (gbest - pos)
        pos = np.clip(pos + vel, -5.12, 5.12)
        
        scores = np.array([cost_func(p) for p in pos])
        better_mask = scores < pbest_scores
        pbest[better_mask] = pos[better_mask]
        pbest_scores[better_mask] = scores[better_mask]
        
        if np.min(pbest_scores) < gbest_score:
            gbest = pbest[np.argmin(pbest_scores)]
            gbest_score = np.min(pbest_scores)
        trajectory.append(gbest.copy())
        
    return gbest, gbest_score, np.array(trajectory)`
      }
    },
    {
      id: 'sap-implementation',
      title: 'Transição e Implementação do SAP — Intelbras',
      subtitle: 'Processos Industriais & Mudança de ERP Corporativo',
      category: 'automacao',
      categoryLabel: 'Processos & Sistemas',
      featured: true,
      featuredType: 'dashboard',
      imageLabel: 'Mapeamento de processos e transição de sistema',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Comprovado em currículo',
      summary: 'Participação na implementação do SAP na Intelbras S.A. durante a transição do sistema TOTVS para o SAP, integrando necessidades de processos industriais a soluções tecnológicas corporativas.',
      tags: ['SAP', 'TOTVS', 'Processos Industriais', 'Integração de Sistemas', 'Melhoria Contínua'],
      specs: [
        { label: 'Empresa', value: 'Intelbras S.A.' },
        { label: 'Transição', value: 'TOTVS para SAP' },
        { label: 'Escopo', value: 'Processos Industriais e Operações' }
      ],
      challenge: 'Garantir a continuidade e aderência dos fluxos operacionais industriais durante a migração de um sistema legado TOTVS para a plataforma corporativa SAP.',
      solution: 'Atuação na análise de aderência de processos, mapeamento de requisitos industriais e suporte à estruturação de fluxos operacionais mais eficientes no novo ambiente.',
      methodology: [
        'Mapeamento dos fluxos de trabalho industriais existentes',
        'Identificação de lacunas de processo e parametrização entre TOTVS e SAP',
        'Validação de operações e suporte aos usuários-chave na transição',
        'Acompanhamento de indicadores de estabilidade operacional pós-migração'
      ],
      techStack: ['SAP', 'TOTVS', 'Mapeamento de Processos', 'PCP', 'Melhoria Contínua']
    },
    {
      id: 'pcp-production-scheduling',
      title: 'Simulação & Balanceamento de Linha (PCP)',
      subtitle: 'Pesquisa Operacional & Engenharia de Produção',
      category: 'otimizacao',
      categoryLabel: 'Otimização & PCP',
      imageLabel: 'Esquema de fluxo de postos e takt time',
      provenance: 'estudo_em_validacao',
      provenanceLabel: 'Estudo técnico em validação',
      summary: 'Modelo computacional para análise de tempos de ciclo, identificação de postos de trabalho gargalo e balanceamento de linha em ambiente fabril.',
      tags: ['Python', 'PCP', 'Teoria das Filas', 'Mapeamento de Processos'],
      specs: [
        { label: 'Área', value: 'Planejamento e Controle da Produção' },
        { label: 'Metodologia', value: 'Simulação de Eventos Discretos' }
      ],
      challenge: 'Avaliar o impacto de variações nos tempos de ciclo sobre o acúmulo de material intermediário e capacidade de entrega da linha de produção.',
      solution: 'Modelagem analítica dos postos de trabalho e buffers para estimar a capacidade real e sugerir alocação balanceada de recursos.',
      methodology: [
        'Mapeamento de tempos de ciclo e postos de trabalho',
        'Cálculo de takt time e balanceamento estocástico',
        'Simulação de cenários com ajustes de postos'
      ],
      techStack: ['Python', 'SimPy', 'PCP', 'Engenharia de Produção']
    },
    {
      id: 'n8n-automation-pipeline',
      title: 'Automação de Pipelines & Integração com n8n',
      subtitle: 'Webhooks, APIs & Tratamento de Dados',
      category: 'automacao',
      categoryLabel: 'Automação de Processos',
      imageLabel: 'Diagrama de fluxo de automação',
      provenance: 'estudo_em_validacao',
      provenanceLabel: 'Estudo técnico em validação',
      summary: 'Estruturação de fluxos de integração automatizados conectando entradas via webhooks, tratamento de dados em Python, armazenamento em banco relacional e distribuição de notificações.',
      tags: ['n8n', 'Webhooks', 'REST APIs', 'PostgreSQL', 'Python'],
      specs: [
        { label: 'Orquestrador', value: 'n8n em Docker' },
        { label: 'Camada de Dados', value: 'PostgreSQL' }
      ],
      challenge: 'Integrar fontes de dados heterogêneas sem depender de rotinas manuais de cópia ou intervenções repetitivas.',
      solution: 'Criação de pipelines orientados a eventos com validação de schemas JSON, tratamento de exceções e persistência em banco relacional.',
      methodology: [
        'Padronização de formatos de payload de entrada',
        'Configuração de nós condicionais e tratamento de erros',
        'Persistência estruturada em tabelas analíticas'
      ],
      techStack: ['n8n', 'Python', 'PostgreSQL', 'Webhooks', 'Docker']
    },
    {
      id: 'logistics-vrp-routing',
      title: 'Roteamento de Veículos (Vehicle Routing Problem)',
      subtitle: 'Algoritmos Heurísticos em Grafos',
      category: 'otimizacao',
      categoryLabel: 'Otimização Matemática',
      imageLabel: 'Grafo de roteamento logístico',
      provenance: 'estudo_em_validacao',
      provenanceLabel: 'Estudo técnico em validação',
      summary: 'Abordagem algorítmica para o problema de roteamento de entregas com restrições operacionais e sequenciamento de paradas.',
      tags: ['Python', 'Pesquisa Operacional', 'Heurísticas', 'Grafos'],
      specs: [
        { label: 'Problema', value: 'Roteamento de Veículos (VRP)' },
        { label: 'Abordagem', value: 'Heurísticas Construtivas' }
      ],
      challenge: 'Definição de sequências de atendimento minimizando o trajeto total em malha viária com múltiplos destinos.',
      solution: 'Aplicação de heurísticas combinatórias e refinamento local para ordenação eficiente de itinerários.',
      methodology: [
        'Estruturação da matriz de distâncias',
        'Geração de rotas iniciais por economia de trajeto',
        'Refinamento por busca local'
      ],
      techStack: ['Python', 'NetworkX', 'NumPy', 'Pesquisa Operacional']
    }
  ],
  skillCategories: [
    {
      id: 'processos-melhoria',
      title: 'Processos & Melhoria Contínua',
      description: 'Metodologias e práticas para análise, padronização e aumento de eficiência operacional.',
      skills: [
        {
          name: 'Análise e Otimização de Processos',
          description: 'Diagnóstico de fluxos operacionais, identificação de gargalos e desenvolvimento de soluções práticas para eficiência.',
          tools: ['Mapeamento de Processos', 'Análise de Fluxos', 'Melhoria Contínua']
        },
        {
          name: 'PCP (Planejamento e Controle da Produção)',
          description: 'Apoio a atividades de planejamento, controle de capacidade fabril, takt time e acompanhamento de ordens.',
          tools: ['PCP', 'Balanceamento', 'Capacidade Fabril']
        },
        {
          name: 'Projetos Industriais',
          description: 'Atuação em projetos industriais voltados à melhoria contínua e eficiência operacional.',
          tools: ['Projetos Industriais', 'Estruturação Operacional']
        },
        {
          name: 'Metodologias de Qualidade & Organização',
          description: 'Aplicação de práticas de padronização, organização e melhoria contínua no ambiente industrial.',
          tools: ['5S', 'Melhoria Contínua', 'Padronização']
        }
      ]
    },
    {
      id: 'dados-visualizacao',
      title: 'Análise & Visualização de Dados',
      description: 'Transformação de dados operacionais em painéis e relatórios para apoio à tomada de decisão.',
      skills: [
        {
          name: 'Análise e Visualização de Dados',
          description: 'Construção de ferramentas de acompanhamento, relatórios e consolidação de informações.',
          tools: ['Dashboards', 'Visualização de Dados', 'Relatórios']
        },
        {
          name: 'Indicadores e KPIs',
          description: 'Estruturação de métricas de desempenho operacional, acompanhamento de metas e identificação de variações.',
          tools: ['KPIs Operacionais', 'Métricas de Processo']
        },
        {
          name: 'Power BI & Looker Studio',
          description: 'Criação de painéis analíticos interativos com filtros e visões gerenciais para consulta ágil.',
          tools: ['Power BI', 'Looker Studio']
        },
        {
          name: 'SQL & Excel Avançado',
          description: 'Consultas a bancos relacionais e elaboração de planilhas dinâmicas para análise e suporte diário.',
          tools: ['SQL', 'Excel']
        }
      ]
    },
    {
      id: 'tecnologia-automacao',
      title: 'Tecnologia & Automação',
      description: 'Aplicação de programação e sistemas corporativos na resolução de problemas industriais.',
      skills: [
        {
          name: 'Automação e Tecnologia',
          description: 'Integração entre necessidades dos processos industriais e soluções tecnológicas para operações mais eficientes.',
          tools: ['Automação', 'Integração de Sistemas']
        },
        {
          name: 'Python',
          description: 'Desenvolvimento de scripts para tratamento de dados, automações de tarefas e modelagem de algoritmos.',
          tools: ['Python', 'Tratamento de Dados', 'Scripts']
        },
        {
          name: 'Implantação de Sistemas (SAP / TOTVS)',
          description: 'Experiência em projetos de implantação e transição de ERP corporativo no contexto operacional.',
          tools: ['SAP', 'TOTVS', 'Transição de Sistemas']
        },
        {
          name: 'Formação Técnica em Informática',
          description: 'Base sólida em lógica de programação, arquitetura de sistemas e suporte técnico pelo SENAI.',
          tools: ['SENAI', 'Lógica de Programação', 'Sistemas']
        }
      ]
    },
    {
      id: 'gestao-metodos',
      title: 'Gestão de Projetos & Metodologias Ágeis',
      description: 'Organização de entregas, comunicação com equipes e condução de iniciativas de mudança.',
      skills: [
        {
          name: 'Gestão de Projetos',
          description: 'Condução de iniciativas com acompanhamento de cronogramas, partes interessadas e entregáveis.',
          tools: ['Gestão de Projetos', 'Planejamento']
        },
        {
          name: 'Scrum & Kanban',
          description: 'Utilização de métodos ágeis e quadros visuais para priorização de demandas e controle de fluxo.',
          tools: ['Scrum', 'Kanban']
        },
        {
          name: 'Gestão de Suporte & Operações',
          description: 'Experiência prévia em atendimento e processos de pós-venda, incluindo relacionamento direto.',
          tools: ['Suporte', 'Pós-Venda', 'Atendimento']
        }
      ]
    }
  ],
  education: [
    {
      course: 'Engenharia de Produção',
      institution: 'Anhanguera',
      period: '02/2016 – 12/2021',
      location: 'São José, Santa Catarina'
    },
    {
      course: 'Técnico em Informática',
      institution: 'SENAI',
      period: '09/2015 – 07/2017',
      location: 'São José, Santa Catarina'
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
    subheadline: 'Production Engineer with experience in industrial processes, engineering projects, data analysis, and continuous improvement. Focused on integrating process design, technology, and analytics to build practical solutions and support decision-making.',
    ctaProjects: 'View projects'
  },
  projects: {
    sectionTitle: 'Projects',
    sectionSubtitle: 'Case studies in mathematical optimization, automated workflows, and data modeling.',
    filterAll: 'All',
    filterOptimization: 'Optimization & Production',
    filterAutomation: 'Automation & Processes',
    filterAnalytics: 'Data Analytics & BI',
    viewProject: 'View project',
    technicalStudy: 'Technical study',
    confirmedDeliverable: 'Deliverable',
    specDetailsAvailable: 'Technical specifications available',
    modalTitle: 'Technical Case Study',
    overview: 'Overview',
    challenge: 'Context & Challenge',
    solution: 'Implemented Solution',
    methodology: 'Methodology & Steps',
    techStack: 'Technologies & Frameworks',
    close: 'Close',
    copyCode: 'Copy',
    codeCopied: 'Copied',
    interactive3DTitle: 'Interactive 3D Simulation (Click and drag to rotate)',
    interactive3DSubtitle: 'Explore algorithm convergence and surface exploration in real-time',
    interactive3DActive: 'Controls active'
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
  skills: {
    sectionTitle: 'Core Competencies',
    sectionSubtitle: 'Technologies and methodologies grouped by practical application.',
    filterAll: 'All'
  },
  about: {
    sectionTitle: 'About Me',
    sectionSubtitle: 'Background in Production Engineering and IT, working at the intersection of industrial processes, data, and technology.',
    p1: 'I am a Production Engineer with practical experience in industrial operations, engineering projects, data analysis, and continuous improvement.',
    p2: 'My work focuses on connecting process design, technological tools, and analytical models to deliver pragmatic solutions, improve operational efficiency, and support strategic decision-making.',
    p3: 'I have hands-on experience in enterprise systems transition and deployment (such as participating in the SAP rollout at Intelbras during the TOTVS migration), shop-floor process modeling, and building custom tools for data consolidation and tracking.',
    educationTitle: 'Education & Credentials',
    specialtyLabel: 'Specialty',
    specialtyValue: 'Production Engineering & Data Analytics',
    locationLabel: 'Location',
    languagesLabel: 'Languages',
    nativeLevel: 'Native',
    intermediateLevel: 'Intermediate',
    status: 'Available for projects and opportunities'
  },
  contact: {
    sectionTitle: 'Contact',
    sectionSubtitle: 'Direct channels for inquiries, technical collaborations, or professional opportunities.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    copyEmail: 'Copy email',
    emailCopied: 'Email copied',
    socialLabel: 'Professional Profiles',
    formTitle: 'Send a Message',
    nameField: 'Name',
    namePlaceholder: 'Your name',
    emailField: 'Email',
    emailPlaceholder: 'your.email@example.com',
    messageField: 'Message',
    messagePlaceholder: 'Tell me about your project or inquiry...',
    sendButton: 'Send message',
    sendingButton: 'Sending...',
    successTitle: 'Message sent successfully.',
    successMessage: 'Thank you for reaching out! I will get back to you shortly via email.'
  },
  footer: {
    role: 'Production Engineer | Process & Data Analyst',
    backToTop: 'Back to top ↑'
  },
  projectList: [
    {
      id: 'defesa-civil-dashboard',
      title: 'Information Hub & Dashboard — Santa Catarina Civil Defense',
      subtitle: 'Civil Defense in Schools Program (PDCE)',
      category: 'analytics',
      categoryLabel: 'Data Analytics & BI',
      featured: true,
      featuredType: 'dashboard',
      imageLabel: 'Civil Defense management dashboard',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Confirmed in resume',
      summary: 'Development of a centralized solution for organizing, querying, and visualizing data from the Civil Defense in Schools Program (PDCE), providing tracking tools, indicators, and regional filters for data-informed decisions.',
      tags: ['Dashboards', 'Indicators & KPIs', 'Data Visualization', 'Dynamic Filters', 'Information Management'],
      specs: [
        { label: 'Organization', value: 'Civil Defense of Santa Catarina' },
        { label: 'Program', value: 'Civil Defense in Schools (PDCE)' },
        { label: 'Objective', value: 'Data Centralization & Indicators' }
      ],
      challenge: 'Centralizing initiative records and participant tracking across schools throughout the state in an agile, accessible visual format for leadership teams.',
      solution: 'Created a unified consultation and tracking tool with regional drill-downs, cross-filtering, and clear strategic indicators to support program governance.',
      methodology: [
        'Requirements gathering with PDCE program stakeholders',
        'Standardization and cleansing of collected data sources',
        'Dashboard layout design featuring fast-filter criteria',
        'Validation of views to support ongoing program decisions'
      ],
      techStack: ['Dashboards', 'Indicators & KPIs', 'Data Structuring', 'Management Information Systems']
    },
    {
      id: 'rastrigin-optimization',
      title: 'Computational Optimization: Rastrigin Function',
      subtitle: 'Heuristic Algorithms & Global Optimization',
      category: 'otimizacao',
      categoryLabel: 'Mathematical Optimization',
      featured: true,
      featuredType: 'rastrigin',
      imageLabel: '3D multimodal mathematical surface',
      provenance: 'estudo_em_validacao',
      provenanceLabel: 'Technical study in validation',
      summary: 'Implementation and benchmark study of global optimization algorithms (Genetic Algorithms, Particle Swarm Optimization, and Momentum Gradient Descent) applied to the multimodal Rastrigin function, featuring an interactive 3D visualizer.',
      tags: ['Python', 'NumPy', 'SciPy', 'Genetic Algorithms', 'PSO', '3D Visualization'],
      specs: [
        { label: 'Domain', value: '2D / n-dimensional space' },
        { label: 'Global Minimum', value: 'f(0, 0) = 0' },
        { label: 'Language', value: 'Python / SciPy / NumPy' }
      ],
      challenge: 'The Rastrigin test function is highly non-convex with numerous local minima. Local gradient methods tend to get trapped prematurely before discovering the global basin.',
      solution: 'Built population-based stochastic algorithms (PSO and Genetic Algorithms) in Python with convergence tracking to evaluate their ability to escape local optima.',
      methodology: [
        'Analytical modeling of the function f(x) = 20 + ∑(xi² - 10·cos(2π·xi))',
        'Configuration of mutation and crossover genetic operators',
        'Inertia weight and cognitive/social parameter tuning in PSO',
        '3D surface projection and convergence trajectory rendering'
      ],
      techStack: ['Python', 'NumPy', 'SciPy Optimize', 'Matplotlib', 'TypeScript / Canvas 3D'],
      codeSnippet: {
        language: 'python',
        filename: 'rastrigin_optimizer.py',
        code: `import numpy as np

def rastrigin(x, A=10):
    """Multimodal n-dimensional Rastrigin benchmark function."""
    n = len(x)
    return A * n + np.sum(x**2 - A * np.cos(2 * np.pi * x))

def particle_swarm_optimization(cost_func, dim=2, num_particles=30, max_iter=80):
    """Basic PSO implementation for continuous numerical optimization."""
    w, c1, c2 = 0.72, 1.49, 1.49
    pos = np.random.uniform(-5.12, 5.12, (num_particles, dim))
    vel = np.random.uniform(-1.0, 1.0, (num_particles, dim))
    pbest = pos.copy()
    pbest_scores = np.array([cost_func(p) for p in pos])
    gbest = pbest[np.argmin(pbest_scores)]
    gbest_score = np.min(pbest_scores)
    
    trajectory = [gbest.copy()]
    for _ in range(max_iter):
        r1, r2 = np.random.rand(num_particles, dim), np.random.rand(num_particles, dim)
        vel = w * vel + c1 * r1 * (pbest - pos) + c2 * r2 * (gbest - pos)
        pos = np.clip(pos + vel, -5.12, 5.12)
        
        scores = np.array([cost_func(p) for p in pos])
        better_mask = scores < pbest_scores
        pbest[better_mask] = pos[better_mask]
        pbest_scores[better_mask] = scores[better_mask]
        
        if np.min(pbest_scores) < gbest_score:
            gbest = pbest[np.argmin(pbest_scores)]
            gbest_score = np.min(pbest_scores)
        trajectory.append(gbest.copy())
        
    return gbest, gbest_score, np.array(trajectory)`
      }
    },
    {
      id: 'sap-implementation',
      title: 'SAP Rollout & Transition — Intelbras',
      subtitle: 'Industrial Processes & Corporate ERP Migration',
      category: 'automacao',
      categoryLabel: 'Processes & Systems',
      featured: true,
      featuredType: 'dashboard',
      imageLabel: 'Process mapping and ERP transition',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Confirmed in resume',
      summary: 'Participated in the SAP ERP rollout at Intelbras S.A. during the enterprise transition from legacy TOTVS to SAP, bridging shop-floor industrial needs with enterprise software workflows.',
      tags: ['SAP', 'TOTVS', 'Industrial Processes', 'Systems Integration', 'Continuous Improvement'],
      specs: [
        { label: 'Company', value: 'Intelbras S.A.' },
        { label: 'Transition', value: 'TOTVS to SAP' },
        { label: 'Scope', value: 'Industrial Operations & Processes' }
      ],
      challenge: 'Ensuring manufacturing process continuity and operational compliance while migrating critical manufacturing flows from TOTVS to SAP.',
      solution: 'Analyzed process adherence, mapped shop-floor requirements, and supported users during rollout to build structured, efficient operational routines.',
      methodology: [
        'Mapping existing manufacturing workflows',
        'Identifying functional gaps between TOTVS and SAP configurations',
        'Validating floor operations and training key stakeholders',
        'Monitoring operational stability KPIs post-go-live'
      ],
      techStack: ['SAP', 'TOTVS', 'Process Mapping', 'Production Control', 'Continuous Improvement']
    },
    {
      id: 'pcp-production-scheduling',
      title: 'Line Balancing & Production Simulation (PCP)',
      subtitle: 'Operations Research & Production Engineering',
      category: 'otimizacao',
      categoryLabel: 'Optimization & Production',
      imageLabel: 'Workstation flow and takt time balance',
      provenance: 'estudo_em_validacao',
      provenanceLabel: 'Technical study in validation',
      summary: 'Computational model for cycle time analysis, bottleneck identification, and line balancing in a manufacturing line setting.',
      tags: ['Python', 'Production Control', 'Queueing Theory', 'Process Mapping'],
      specs: [
        { label: 'Domain', value: 'Production Planning & Control' },
        { label: 'Methodology', value: 'Discrete Event Simulation' }
      ],
      challenge: 'Assessing how cycle time variability influences work-in-progress (WIP) accumulation and delivery schedule reliability.',
      solution: 'Constructed an analytical simulation of workstation buffers and throughput to identify bottleneck stations and suggest balanced configurations.',
      methodology: [
        'Measuring workstation cycle times and operational flow',
        'Takt time calculation and stochastic balance estimation',
        'Scenario testing with simulated workstation rearrangements'
      ],
      techStack: ['Python', 'SimPy', 'PCP', 'Industrial Engineering']
    },
    {
      id: 'n8n-automation-pipeline',
      title: 'Automated Pipeline & Integration with n8n',
      subtitle: 'Webhooks, APIs & Data Processing',
      category: 'automacao',
      categoryLabel: 'Process Automation',
      imageLabel: 'Automation workflow node diagram',
      provenance: 'estudo_em_validacao',
      provenanceLabel: 'Technical study in validation',
      summary: 'Architecture of automated integration flows linking incoming webhook triggers, Python data cleansing, relational database commits, and alert dispatchers.',
      tags: ['n8n', 'Webhooks', 'REST APIs', 'PostgreSQL', 'Python'],
      specs: [
        { label: 'Engine', value: 'n8n on Docker' },
        { label: 'Database', value: 'PostgreSQL' }
      ],
      challenge: 'Eliminating manual data handoffs between disconnected platforms without relying on repetitive spreadsheet copy-paste.',
      solution: 'Engineered event-driven pipelines with JSON schema verification, automated retries, and structured relational persistence.',
      methodology: [
        'Payload format standardization',
        'Conditional routing node setup with error traps',
        'Structured database table upserts and logging'
      ],
      techStack: ['n8n', 'Python', 'PostgreSQL', 'Webhooks', 'Docker']
    },
    {
      id: 'logistics-vrp-routing',
      title: 'Vehicle Routing Problem (VRP)',
      subtitle: 'Heuristic Graph Algorithms',
      category: 'otimizacao',
      categoryLabel: 'Mathematical Optimization',
      imageLabel: 'Logistics network routing graph',
      provenance: 'estudo_em_validacao',
      provenanceLabel: 'Technical study in validation',
      summary: 'Algorithmic approach to multi-stop delivery route optimization subject to capacity constraints and sequential visitation rules.',
      tags: ['Python', 'Operations Research', 'Heuristics', 'Graphs'],
      specs: [
        { label: 'Problem', value: 'Vehicle Routing Problem (VRP)' },
        { label: 'Approach', value: 'Constructive Heuristics' }
      ],
      challenge: 'Determining optimal stop sequences to minimize total travel distance across a multi-destination road network.',
      solution: 'Applied combinatorial savings heuristics paired with local search improvements to produce cost-effective delivery paths.',
      methodology: [
        'Distance matrix generation across nodes',
        'Initial route generation via savings heuristics',
        'Iterative 2-opt local search refinement'
      ],
      techStack: ['Python', 'NetworkX', 'NumPy', 'Operations Research']
    }
  ],
  skillCategories: [
    {
      id: 'processos-melhoria',
      title: 'Processes & Continuous Improvement',
      description: 'Frameworks and methodologies for operational analysis, standardization, and productivity gains.',
      skills: [
        {
          name: 'Process Analysis & Optimization',
          description: 'Evaluating workflow bottlenecks, diagnosing root causes, and designing pragmatic shop-floor improvements.',
          tools: ['Process Mapping', 'Flow Analysis', 'Continuous Improvement']
        },
        {
          name: 'Production Planning & Control (PCP)',
          description: 'Capacity calculation, workstation takt time balancing, and manufacturing order tracking.',
          tools: ['Production Control', 'Line Balancing', 'Factory Capacity']
        },
        {
          name: 'Industrial Projects',
          description: 'Execution of industrial engineering initiatives aimed at sustained efficiency and operational safety.',
          tools: ['Industrial Projects', 'Operational Design']
        },
        {
          name: 'Quality & Workplace Organization',
          description: 'Implementation of standard operating procedures, 5S culture, and continuous improvement methods.',
          tools: ['5S', 'Standardization', 'Continuous Improvement']
        }
      ]
    },
    {
      id: 'dados-visualizacao',
      title: 'Data Analytics & Visualization',
      description: 'Transforming operational data into actionable dashboards and management reports.',
      skills: [
        {
          name: 'Data Analysis & Visual Analytics',
          description: 'Building consolidated operational tracking reports and data exploration interfaces.',
          tools: ['Dashboards', 'Data Visualization', 'Reporting']
        },
        {
          name: 'Indicators & KPIs',
          description: 'Structuring performance metrics, monitoring variance against targets, and identifying trends.',
          tools: ['Operational KPIs', 'Process Metrics']
        },
        {
          name: 'Power BI & Looker Studio',
          description: 'Developing interactive analytical reports with dynamic filters and intuitive drill-down views.',
          tools: ['Power BI', 'Looker Studio']
        },
        {
          name: 'SQL & Advanced Excel',
          description: 'Writing relational database queries and building dynamic spreadsheets for day-to-day decisions.',
          tools: ['SQL', 'Excel']
        }
      ]
    },
    {
      id: 'tecnologia-automacao',
      title: 'Technology & Automation',
      description: 'Applying programming and enterprise software to solve tangible operational challenges.',
      skills: [
        {
          name: 'Automation & Technology',
          description: 'Bridging industrial process requirements with software solutions for structured workflows.',
          tools: ['Automation', 'Systems Integration']
        },
        {
          name: 'Python',
          description: 'Writing scripts for data cleaning, repetitive task automation, and algorithm prototyping.',
          tools: ['Python', 'Data Wrangling', 'Automation Scripts']
        },
        {
          name: 'Enterprise Systems Deployment (SAP / TOTVS)',
          description: 'Experience in corporate ERP rollout and migration within manufacturing environments.',
          tools: ['SAP', 'TOTVS', 'ERP Migration']
        },
        {
          name: 'IT Technical Background',
          description: 'Solid foundation in systems architecture, programming logic, and technical support from SENAI.',
          tools: ['SENAI', 'Programming Logic', 'Systems']
        }
      ]
    },
    {
      id: 'gestao-metodos',
      title: 'Project Management & Agile Methods',
      description: 'Coordinating deliverables, facilitating cross-functional communication, and managing change.',
      skills: [
        {
          name: 'Project Management',
          description: 'Leading initiatives with structured milestones, stakeholder updates, and delivery timelines.',
          tools: ['Project Management', 'Planning']
        },
        {
          name: 'Scrum & Kanban',
          description: 'Employing visual task boards and agile cadences to prioritize operational work and control flow.',
          tools: ['Scrum', 'Kanban']
        },
        {
          name: 'Operations & Support Management',
          description: 'Prior experience managing post-sales workflows, client communication, and resolution tracking.',
          tools: ['Operations Support', 'Client Communication']
        }
      ]
    }
  ],
  education: [
    {
      course: 'Production Engineering (B.S.)',
      institution: 'Anhanguera',
      period: '02/2016 – 12/2021',
      location: 'São José, Santa Catarina, Brazil'
    },
    {
      course: 'IT Technician',
      institution: 'SENAI',
      period: '09/2015 – 07/2017',
      location: 'São José, Santa Catarina, Brazil'
    }
  ]
};
