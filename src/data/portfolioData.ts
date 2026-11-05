import { Project, SkillCategory, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Yuri Furtwaengler',
  role: 'Dados & Engenharia',
  email: 'yurifurtp@gmail.com',
  github: 'https://github.com/yurifurtp',
  linkedin: 'https://linkedin.com/in/yurifurtwaengler',
  headline: 'Dados que geram soluções.',
  subheadline: 'Engenharia, análise de dados e desenvolvimento de ferramentas para problemas reais.',
  shortBio: 'Engenheiro de Produção com foco em transformar dados operacionais em decisões estratégicas. Especialista em otimização matemática computacional, desenvolvimento de dashboards e automação de fluxos de trabalho.',
  location: 'Brasil',
  status: 'Disponível para novos projetos e colaborações'
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'rastrigin-optimization',
    title: 'Otimização Computacional: Função de Rastrigin',
    subtitle: 'Algoritmos Heurísticos & Otimização Global',
    category: 'otimizacao',
    categoryLabel: 'Otimização Matemática',
    featured: true,
    featuredType: 'rastrigin',
    imageLabel: 'Visualização da superfície matemática (provisória)',
    summary: 'Implementação e estudo comparativo de algoritmos de otimização global (Algoritmos Genéticos, Particle Swarm e Gradiente c/ Momentum) aplicados à função multimodal de Rastrigin.',
    tags: ['Python', 'NumPy', 'SciPy', 'Algoritmos Genéticos', 'PSO'],
    specs: [
      { label: 'Domínio', value: 'Espaço 2D / n-dimensional' },
      { label: 'Mínimo Global', value: 'f(0, 0) = 0' },
      { label: 'Linguagem', value: 'Python / SciPy' }
    ],
    challenge: 'A função de Rastrigin possui alta não-convexidade e múltiplos mínimos locais. Métodos puramente locais tendem a convergir prematuramente sem alcançar a bacia do mínimo global.',
    solution: 'Implementação de algoritmos populacionais e estocásticos (PSO e Algoritmos Genéticos) em Python com controle de convergência, analisando a capacidade de escape de ótimos locais.',
    methodology: [
      'Modelagem analítica da função f(x) = 20 + ∑(xi² - 10·cos(2π·xi))',
      'Configuração de operadores de mutação e recombinação em algoritmos genéticos',
      'Ajuste de inércia e parâmetros cognitivos/sociais no Particle Swarm Optimization',
      'Plotagem das trajetórias de convergência para comparação algorítmica'
    ],
    techStack: ['Python', 'NumPy', 'SciPy Optimize', 'Matplotlib 3D', 'DEAP'],
    codeSnippet: {
      language: 'python',
      filename: 'rastrigin_optimizer.py',
      code: `import numpy as np
from scipy.optimize import minimize

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
    title: 'Automação de Pipelines com n8n',
    subtitle: 'Integrações de APIs & Tratamento ETL',
    category: 'automacao',
    categoryLabel: 'Automação de Processos',
    featured: true,
    featuredType: 'n8n',
    imageLabel: 'Diagrama de nós do fluxo n8n (provisório)',
    summary: 'Estruturação de fluxos de integração automatizados conectando entradas via webhooks, tratamento de dados em Python, armazenamento em banco relacional e distribuição de notificações.',
    tags: ['n8n', 'Webhooks', 'REST APIs', 'PostgreSQL', 'Python ETL', 'Docker'],
    specs: [
      { label: 'Orquestrador', value: 'n8n em Docker' },
      { label: 'Persistência', value: 'PostgreSQL' },
      { label: 'Entradas', value: 'Webhooks & APIs REST' }
    ],
    challenge: 'Necessidade de integrar fontes de dados heterogêneas sem depender de transferências manuais de arquivos ou intervenções operacionais repetitivas.',
    solution: 'Criação de pipelines orientados a eventos no n8n com validação de formato JSON, tratamento de exceções com retentativas automáticas e sincronização direta no banco de dados.',
    methodology: [
      'Mapeamento dos fluxos de dados de entrada e padronização dos esquemas de dados',
      'Configuração de nós de validação condicional e tratamento de erros',
      'Integração via webhooks autenticados com API Keys',
      'Persistência estruturada em tabelas relacionais'
    ],
    techStack: ['n8n', 'PostgreSQL', 'Docker', 'Python', 'Node.js', 'Webhooks']
  },
  {
    id: 'operational-analytics-dashboard',
    title: 'Dashboards Analíticos & Visualização de Dados',
    subtitle: 'Modelagem Dimensional & BI',
    category: 'analytics',
    categoryLabel: 'Análise de Dados & BI',
    featured: true,
    featuredType: 'dashboard',
    imageLabel: 'Interface de painel analítico (provisória)',
    summary: 'Construção de painéis para acompanhamento de dados operacionais, com modelagem dimensional de tabelas fato/dimensão e métricas calculadas.',
    tags: ['Power BI', 'SQL', 'Python', 'DAX', 'Modelagem Dimensional'],
    specs: [
      { label: 'Modelagem', value: 'Star Schema' },
      { label: 'Ferramenta Principal', value: 'Power BI / SQL' },
      { label: 'Camada de Dados', value: 'PostgreSQL / Views' }
    ],
    challenge: 'Consolidar dados dispersos de produção e operações para facilitar consultas gerenciais sem gerar lentidão nas fontes transacionais.',
    solution: 'Estruturação de modelo analítico baseado em tabelas dimensionais (Star Schema), consultas otimizadas em SQL e dashboards focados em clareza visual e rápida interpretação.',
    methodology: [
      'Modelagem relacional e estruturação de medidas analíticas com DAX',
      'Elaboração de hierarquias temporais e filtros cruzados',
      'Aplicação de design focado em redução de ruído cognitivo'
    ],
    techStack: ['Power BI', 'DAX', 'PostgreSQL', 'Python', 'SQL Server']
  }
];

export const OTHER_PROJECTS: Project[] = [
  {
    id: 'pcp-production-scheduling',
    title: 'Simulação & Balanceamento de Linha (PCP)',
    subtitle: 'Pesquisa Operacional & Engenharia de Produção',
    category: 'otimizacao',
    categoryLabel: 'Otimização & PCP',
    imageLabel: 'Esquema de fluxo de postos (provisório)',
    summary: 'Modelo computacional para análise de tempos de ciclo, identificação de postos de trabalho gargalo e balanceamento de linha em ambiente fabril.',
    tags: ['Python', 'SimPy', 'PCP', 'Teoria das Filas'],
    specs: [
      { label: 'Metodologia', value: 'Simulação de Eventos Discretos' },
      { label: 'Biblioteca', value: 'SimPy / Python' }
    ],
    challenge: 'Avaliar o impacto de variações estocásticas nos tempos de montagem sobre o acúmulo de material intermediário em processo.',
    solution: 'Simulação computacional modelando operadores, buffers intermediários e postos de trabalho para estimar a capacidade teórica e real da linha.',
    methodology: ['Mapeamento de tempos e movimentos', 'Ajuste de distribuições estatísticas aos tempos de ciclo', 'Simulação de cenários alternativos'],
    techStack: ['Python', 'SimPy', 'Pandas', 'SciPy Stats']
  },
  {
    id: 'etl-financial-pipeline',
    title: 'Pipeline de Conciliação e Tratamento de Dados',
    subtitle: 'Python, Bancos de Dados & APIs',
    category: 'automacao',
    categoryLabel: 'Automação & ETL',
    imageLabel: 'Fluxo de dados de conciliação (provisório)',
    summary: 'Script para cruzamento automatizado entre registros transacionais e fontes externas, identificando divergências e inconsistências cadastrais.',
    tags: ['Python', 'PostgreSQL', 'APIs REST', 'Pandas'],
    specs: [
      { label: 'Execução', value: 'Rotinas Agendadas / Batch' },
      { label: 'Tratamento', value: 'Python / Pandas' }
    ],
    challenge: 'Conferência manual de registros sujeita a erros operacionais e demora na consolidação das informações.',
    solution: 'Rotina de extração via API, normalização de campos e algoritmo de correspondência (matching) para associação entre registros com log de auditoria.',
    methodology: ['Extração segura de dados via API', 'Normalização de padrões e tratamento de strings', 'Geração de relatórios com divergências'],
    techStack: ['Python', 'PostgreSQL', 'Pandas', 'Docker']
  },
  {
    id: 'logistics-vrp-routing',
    title: 'Roteamento de Veículos (Vehicle Routing Problem)',
    subtitle: 'Algoritmos Heurísticos em Grafos',
    category: 'otimizacao',
    categoryLabel: 'Otimização Matemática',
    imageLabel: 'Grafo de roteamento logístico (provisório)',
    summary: 'Abordagem algorítmica para o problema de roteamento de entregas com restrições de capacidade e sequenciamento de paradas.',
    tags: ['Python', 'Heurísticas', 'Pesquisa Operacional', 'NetworkX'],
    specs: [
      { label: 'Problema', value: 'Roteamento de Veículos (VRP)' },
      { label: 'Abordagem', value: 'Heurística Construtiva + 2-Opt' }
    ],
    challenge: 'Definição de sequências de atendimento minimizando o trajeto total em malha viária com múltiplos destinos.',
    solution: 'Aplicação da heurística de Clarke-Wright combinada com busca local 2-opt para refinamento dos roteiros de transporte.',
    methodology: ['Construção de matriz de distâncias', 'Geração de rotas iniciais por economia de distância', 'Refinamento por busca local'],
    techStack: ['Python', 'NetworkX', 'NumPy']
  },
  {
    id: 'executive-sales-bi',
    title: 'Modelagem de Dados e Relatórios de Vendas',
    subtitle: 'Consultas SQL & Visualização Analítica',
    category: 'analytics',
    categoryLabel: 'Análise de Dados & BI',
    imageLabel: 'Esquema de modelo de dados (provisório)',
    summary: 'Estruturação de consultas SQL analíticas e dashboards para análise de histórico de pedidos, periodicidade de compras e distribuição por canal.',
    tags: ['SQL', 'Power BI', 'Python', 'Modelagem Dimensional'],
    specs: [
      { label: 'Linguagem', value: 'SQL / DAX' },
      { label: 'Estrutura', value: 'Modelo Dimensional' }
    ],
    challenge: 'Acesso desorganizado aos dados de pedidos dificultava a geração ágil de relatórios gerenciais consolidados.',
    solution: 'Criação de views analíticas no banco de dados e relatórios focados em visualização clara de séries temporais e segmentações.',
    methodology: ['Criação de tabelas analíticas intermediárias', 'Definição de métricas de recorrência', 'Construção de painel interativo'],
    techStack: ['SQL', 'PostgreSQL', 'Power BI', 'Python']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'dados-bi',
    title: 'Análise de Dados & BI',
    description: 'Transformação de dados brutos em inteligência acionável e painéis visuais para suporte à decisão.',
    skills: [
      {
        name: 'Python para Dados',
        level: 'Avançado',
        description: 'Manipulação intensiva, limpeza de dados complexos, análises exploratórias e vetorização com Pandas e NumPy.',
        tools: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
      },
      {
        name: 'SQL & Bancos Relacionais',
        level: 'Avançado',
        description: 'Consultas analíticas complexas, subqueries, Window Functions, modelagem dimensional e otimização de índices.',
        tools: ['PostgreSQL', 'MySQL', 'SQL Server', 'DBeaver']
      },
      {
        name: 'Power BI & Visualização',
        level: 'Avançado',
        description: 'Modelagem Star Schema, fórmulas DAX avançadas, relatórios gerenciais e métricas de desempenho corporativo.',
        tools: ['Power BI', 'DAX', 'Power Query (M)', 'Data Storytelling']
      },
      {
        name: 'Estatística Aplicada',
        level: 'Intermediário/Avançado',
        description: 'Estatística descritiva e inferencial, testes de hipótese, análise de correlação e regressão aplicada a negócios.',
        tools: ['Testes A/B', 'SciPy Stats', 'Modelos Preditivos']
      }
    ]
  },
  {
    id: 'otimizacao-engenharia',
    title: 'Otimização Matemática & Engenharia',
    description: 'Modelagem de problemas complexos com restrições e busca de soluções ótimas para eficiência operacional.',
    skills: [
      {
        name: 'Pesquisa Operacional',
        level: 'Avançado',
        description: 'Programação Linear, Inteira e Mista aplicadas a alocação de recursos, mix de produção e planejamento de corte.',
        tools: ['PuLP', 'SciPy Optimize', 'Simplex', 'Branch & Bound']
      },
      {
        name: 'Algoritmos Heurísticos & Meta-heurísticas',
        level: 'Avançado',
        description: 'Otimização global para problemas multimodais e NP-difíceis: Algoritmos Genéticos (AG), Particle Swarm (PSO) e Annealing.',
        tools: ['Algoritmos Genéticos', 'PSO', 'Busca Tabu', 'Simulated Annealing']
      },
      {
        name: 'Engenharia de Produção & PCP',
        level: 'Avançado',
        description: 'Mapeamento de Fluxo de Valor, Teoria das Restrições, dimensionamento de estoques (EOQ, Estoque de Segurança) e OEE.',
        tools: ['VSM', 'OEE', 'Kanban', 'Balanceamento de Linha']
      },
      {
        name: 'Simulação de Eventos Discretos',
        level: 'Intermediário',
        description: 'Simulação computacional de linhas de produção, análise de filas e identificação de gargalos dinâmicos.',
        tools: ['SimPy', 'Teoria das Filas', 'Análise de Sensibilidade']
      }
    ]
  },
  {
    id: 'automacao-ferramentas',
    title: 'Automação & Integrações',
    description: 'Eliminação de tarefas manuais repetitivas através de pipelines orquestrados e integração de sistemas.',
    skills: [
      {
        name: 'n8n & Orquestração de Fluxos',
        level: 'Avançado',
        description: 'Construção de fluxos lógicos assíncronos, gerenciamento de estado, nós condicionais e automações corporativas.',
        tools: ['n8n', 'Node-based Automation', 'Error Workflows']
      },
      {
        name: 'Webhooks & APIs REST',
        level: 'Avançado',
        description: 'Consumo e disponibilização de endpoints seguros, autenticação Bearer/API Key, tratamento de rate limits e JSON parsing.',
        tools: ['REST APIs', 'Webhooks', 'HTTP Clients', 'Postman']
      },
      {
        name: 'Infraestrutura & Containers',
        level: 'Intermediário',
        description: 'Empacotamento de soluções em containers Docker, gerenciamento de serviços com docker-compose e rotinas cron.',
        tools: ['Docker', 'Docker Compose', 'Linux / Bash', 'Git']
      },
      {
        name: 'Scripts de Automação',
        level: 'Avançado',
        description: 'Desenvolvimento de scripts Python e Node.js para raspagem controlada, ETL agendado e sanitização de dados.',
        tools: ['Python Requests', 'BeautifulSoup', 'Node.js', 'Cron']
      }
    ]
  },
  {
    id: 'desenvolvimento-web',
    title: 'Desenvolvimento & Ferramentas',
    description: 'Construção de interfaces modernas para disponibilizar ferramentas analíticas diretamente aos usuários.',
    skills: [
      {
        name: 'TypeScript & JavaScript',
        level: 'Intermediário/Avançado',
        description: 'Desenvolvimento estruturado, manipulação de estado, tipagem estática e consumo de APIs assíncronas.',
        tools: ['TypeScript', 'ESNext', 'Node.js', 'NPM']
      },
      {
        name: 'React & Frontend Moderno',
        level: 'Intermediário/Avançado',
        description: 'Criação de Single Page Applications responsivas, componentes modulares e visualizações interativas.',
        tools: ['React', 'Hooks', 'Vite', 'Tailwind CSS']
      },
      {
        name: 'Controle de Versão & Boas Práticas',
        level: 'Avançado',
        description: 'Versionamento com Git, documentação de repositórios, code review e entrega de código limpo e manutenível.',
        tools: ['Git', 'GitHub', 'Clean Code', 'Modular Architecture']
      }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'intelbras',
    role: 'Engenharia de Processos & Análise Operacional',
    company: 'Intelbras',
    period: 'Experiência Corporativa',
    location: 'Brasil',
    description: 'Atuação em ambiente industrial de alta demanda, focada em análise de dados de manufatura, padronização e aumento da eficiência operacional.',
    highlights: [
      'Análise de indicadores de desempenho operacional e identificação quantitativa de perdas de produtividade.',
      'Desenvolvimento de planilhas dinâmicas e automações para consolidação diária de dados da linha fabril.',
      'Aplicação de conceitos de Engenharia de Produção (Lean Manufacturing, 5S e Kaizen) para balanceamento e redução de tempos de parada.'
    ],
    skills: ['Análise de Dados Operacionais', 'Engenharia de Produção', 'Lean', 'Excel Avançado', 'Controle de Processos']
  },
  {
    id: 'trade-engine-studio',
    role: 'Desenvolvimento de Soluções & Análise de Dados',
    company: 'Trade Engine Studio',
    period: 'Experiência Profissional',
    location: 'Remoto',
    description: 'Criação de ferramentas computacionais, pipelines de processamento de dados e scripts analíticos voltados a dados quantitativos e automação.',
    highlights: [
      'Construção de pipelines de extração e tratamento de dados com Python e bancos relacionais.',
      'Desenvolvimento de algoritmos e testes de performance para avaliação de regras analíticas.',
      'Automatização de relatórios gerenciais e rotinas de conferência de dados com foco em precisão e escalabilidade.'
    ],
    skills: ['Python', 'SQL', 'Automação de Pipelines', 'Modelagem Quantitativa', 'Git']
  },
  {
    id: 'consultoria-projetos',
    role: 'Projetos de Engenharia & Consultoria de Otimização',
    company: 'Projetos Independentes & Acadêmicos',
    period: 'Projetos Contínuos',
    location: 'Brasil',
    description: 'Desenvolvimento de estudos aplicados em otimização matemática (Rastrigin, Roteamento, PCP) e criação de dashboards analíticos customizados.',
    highlights: [
      'Implementação de meta-heurísticas (Algoritmos Genéticos e PSO) para resolução de problemas de teste não-lineares multimodais.',
      'Estruturação de dashboards em Power BI e interfaces interativas em React para tomada de decisão em tempo real.',
      'Orquestração de integrações com n8n integrando formulários, bancos de dados e notificações automatizadas.'
    ],
    skills: ['Otimização Heurística', 'n8n', 'Power BI', 'Modelagem Matemática', 'React / TypeScript']
  }
];
