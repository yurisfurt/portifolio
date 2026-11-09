import { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Yuri Siqueira Furtwaengler',
  shortName: 'Yuri Furtwaengler',
  role: 'Engenheiro de Produção | Analista de Processos e Dados | Melhoria Contínua',
  shortRole: 'Processos, Dados & Automação',
  email: 'yurifurtp@gmail.com',
  location: 'São José, Santa Catarina',
  github: 'https://github.com/yurisfurt',
  linkedin: 'https://www.linkedin.com/in/yuri-siqueira-furtwaengler-8a1667134',
  headline: 'Dados que geram soluções.',
  subheadline: 'Engenheiro de Produção com experiência em processos industriais, projetos, análise de dados e melhoria contínua. Atuação na integração entre processos, tecnologia e análise para desenvolver soluções práticas e apoiar a tomada de decisão.',
  shortBio: 'Engenheiro de Produção com experiência em processos industriais, projetos, análise de dados e melhoria contínua. Atuação na integração entre processos, tecnologia e análise para desenvolver soluções práticas, melhorar a eficiência operacional e apoiar a tomada de decisão. Experiência em projetos de implantação de sistemas, desenvolvimento de soluções para operações industriais e construção de ferramentas de análise e acompanhamento de informações.',
  status: 'Disponível para novos projetos e oportunidades'
};

export const EDUCATION: EducationItem[] = [
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
];

export const LANGUAGES = [
  { language: 'Português', level: 'Nativo' },
  { language: 'Inglês', level: 'Intermediário' }
];

export const FEATURED_PROJECTS: Project[] = [
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
    challenge: 'A função de Rastrigin é altamente não-convexa e possui dezenas de mínimos locais em um intervalo restrito. Métodos de descida puramente locais tendem a convergir prematuramente.',
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
    id: 'n8n-automation-pipeline',
    title: 'Automação de Pipelines & Integração com n8n',
    subtitle: 'Webhooks, APIs & Tratamento de Dados',
    category: 'automacao',
    categoryLabel: 'Automação de Processos',
    featured: true,
    featuredType: 'n8n',
    imageLabel: 'Diagrama de fluxo de automação',
    provenance: 'cv_confirmado',
    provenanceLabel: 'Projeto Desenvolvido',
    summary: 'Estruturação de fluxos de integração automatizados conectando entradas via webhooks, tratamento de dados em Python, armazenamento em banco relacional (PostgreSQL) e distribuição de notificações.',
    tags: ['n8n', 'Webhooks', 'REST APIs', 'PostgreSQL', 'Python'],
    specs: [
      { label: 'Orquestrador', value: 'n8n em Docker' },
      { label: 'Camada de Dados', value: 'PostgreSQL Relacional' },
      { label: 'Tratamento', value: 'Python / JSON Schema' }
    ],
    challenge: 'Integrar fontes de dados heterogêneas sem depender de rotinas manuais de cópia ou intervenções repetitivas.',
    solution: 'Criação de pipelines orientados a eventos com validação de schemas JSON, tratamento de exceções e persistência em banco relacional.',
    methodology: [
      'Padronização de formatos de payload de entrada',
      'Configuração de nós condicionais e tratamento de erros',
      'Persistência estruturada em tabelas analíticas'
    ],
    techStack: ['n8n', 'Python', 'PostgreSQL', 'Webhooks', 'Docker']
  }
];

export const OTHER_PROJECTS: Project[] = [
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
];

export const SKILL_CATEGORIES: SkillCategory[] = [
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
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'intelbras',
    role: 'Analista de Processos Industriais',
    company: 'Intelbras S.A.',
    period: '12/2022 – Atual',
    location: 'Brasil',
    description: 'Atuação em projetos industriais, análise de processos, dados e desenvolvimento de soluções voltadas à melhoria contínua e eficiência operacional.',
    highlights: [
      'Atuação em projetos industriais, análise de processos, dados e desenvolvimento de soluções voltadas à melhoria contínua e eficiência operacional.',
      'Participação na implementação do SAP na Intelbras, durante a transição do sistema TOTVS para o SAP.',
      'Integração entre necessidades dos processos industriais e soluções tecnológicas para apoiar operações mais eficientes e estruturadas.'
    ],
    skills: ['Análise de Processos', 'SAP', 'TOTVS', 'Melhoria Contínua', 'Projetos Industriais', 'Indicadores e KPIs']
  },
  {
    id: 'scitec',
    role: 'Estagiário – Laboratório / Apoio a Processos',
    company: 'Laboratório SCiTec',
    period: '03/2021 – 01/2022',
    location: 'Brasil',
    description: 'Análise de amostras de materiais para ensaios laboratoriais e apoio operacional a rotinas de processos e PCP.',
    highlights: [
      'Análise de amostras de materiais para ensaios, verificando dados e requisitos antes da realização dos ensaios.',
      'Apoio em ensaios químicos, mecânicos e físicos, além de atividades relacionadas a PCP.'
    ],
    skills: ['Apoio a Processos', 'PCP', 'Análise de Materiais', 'Ensaios Físicos e Químicos']
  },
  {
    id: 'kebook',
    role: 'Gestor de Suporte',
    company: 'Kebook',
    period: '04/2018 – 02/2021',
    location: 'Brasil',
    description: 'Gestão de suporte e pós-venda de cursos EAD, incluindo relacionamento direto com instrutores e idealizadores.',
    highlights: [
      'Gestão de suporte e pós-venda de cursos EAD, assegurando resolução ágil de dúvidas e qualidade no atendimento.',
      'Relacionamento contínuo com instrutores e idealizadores de conteúdo para alinhamento operacional.'
    ],
    skills: ['Gestão de Suporte', 'Pós-Venda', 'Comunicação', 'Resolução de Problemas']
  }
];
