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
    flagshipSubtitle: 'Painel Estadual de Acompanhamento Escolar & Indicadores (SC)',
    flagshipDescription: 'Solução centralizada para consolidação, cruzamento e consulta das informações das escolas participantes do programa nos municípios catarinenses. Permite filtragem dinâmica por Município, COREDEC, CRE e COMPDEC, monitorando status de adesão, capacitação de novos professores e métricas de impacto educacional.',
    flagshipDeveloper: 'Projeto desenvolvido com apoio técnico de Eng. Yuri Furtwaengler',
    flagshipStats: [
      { label: 'Abrangência Territorial', value: '295 Municípios de SC' },
      { label: 'Estrutura de Filtragem', value: 'COREDEC / CRE / COMPDEC' },
      { label: 'Monitoramento', value: 'INEP, Professores & Alunos' }
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
    interactive3DTitle: 'Simulação Interativa 3D (Clique e arraste para rotacionar)',
    interactive3DSubtitle: 'Explore a rotação e convergência dos algoritmos diretamente na tela',
    interactive3DActive: 'Visualizador ativo',
    benchmarkGraphTitle: 'Benchmark Real de Speedup: Paralelo vs Sequencial (PAR/SEQ)',
    benchmarkGraphSubtitle: 'Curva experimental de aceleração em janela de 60s escalando de 2 até 9 workers'
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
    sectionSubtitle: 'Engenheiro de Produção conectando rigor industrial, modelagem analítica e automação computacional.',
    p1: 'Sou Engenheiro de Produção com atuação centrada na interseção entre processos industriais, inteligência de dados e tecnologia aplicada. Minha abordagem une a visão sistêmica da engenharia à capacidade técnica de desenvolver ferramentas práticas de software.',
    p2: 'Tenho experiência no desenho e na entrega de soluções reais: desde a concepção de centrais de visualização estratégica para a gestão pública (como o painel estadual da Defesa Civil de SC) até o desenvolvimento de algoritmos heurísticos para otimização matemática e pipelines automatizados de dados com orquestração ágil.',
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
        title: 'Automação & Integração de Fluxos',
        description: 'Orquestração de pipelines de dados orientados a eventos, integração de APIs, webhooks e eliminação de tarefas manuais repetitivas.',
        items: ['n8n Workflow Automation', 'Webhooks & REST APIs', 'PostgreSQL', 'Scripts Python', 'Integração de Sistemas']
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
      title: 'Central de Dados — Programa Defesa Civil na Escola',
      subtitle: 'Painel Estadual de Acompanhamento & Indicadores Educacionais',
      category: 'analytics',
      categoryLabel: 'Análise de Dados & BI',
      featured: true,
      featuredType: 'dashboard',
      imageLabel: 'Central Oficial PDCE · SC',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Projeto Real Desenvolvido',
      summary: 'Desenvolvimento da Central de Dados do Programa Defesa Civil na Escola (PDCE) de Santa Catarina, centralizando as informações de instituições de ensino, controle de adesão e formação de professores nos 295 municípios.',
      tags: ['Dashboards', 'Indicadores & KPIs', 'Defesa Civil SC', 'Gestão Pública', 'Filtros Dinâmicos'],
      specs: [
        { label: 'Entidade', value: 'Defesa Civil de Santa Catarina' },
        { label: 'Apoio Técnico', value: 'Eng. Yuri Furtwaengler' },
        { label: 'Escopo', value: '295 Municípios do Estado de SC' }
      ],
      challenge: 'Unificar a base cadastral e de acompanhamento de todas as escolas estaduais e municipais participantes do PDCE em uma interface ágil de consulta para a coordenação estadual, COREDEC e COMPDEC.',
      solution: 'Estruturação de um painel de acesso centralizado com navegação geográfica, filtros por município, código INEP, situação de cadastro docente e relatórios instantâneos de formação.',
      methodology: [
        'Levantamento das variáveis prioritárias com a coordenação do programa PDCE',
        'Padronização e validação das bases de dados municipais e códigos INEP',
        'Construção da interface visual de acesso com botões setoriais de filtragem rápida (Município, COREDEC, CRE, COMPDEC)',
        'Integração de canais de suporte e métricas de professores formados para 2026'
      ],
      techStack: ['Dashboards Estratégicos', 'KPIs & Indicadores', 'Modelagem de Dados', 'Gestão de Informações']
    },
    {
      id: 'rastrigin-optimization',
      title: 'Otimização Computacional & Benchmarking (Rastrigin)',
      subtitle: 'Speedup Efetivo (PAR/SEQ) & Algoritmos Heurísticos 3D',
      category: 'otimizacao',
      categoryLabel: 'Otimização Matemática',
      featured: true,
      featuredType: 'rastrigin',
      imageLabel: 'Benchmark Speedup PAR/SEQ (2.8x c/ 9 workers)',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Implementação Computacional',
      summary: 'Estudo experimental e benchmark de computação concorrente aplicado à otimização da função multimodal de Rastrigin, demonstrando speedup efetivo de até 2.8x com 9 workers em regime paralelo versus sequencial, além de visualizador 3D interativo.',
      tags: ['Python', 'Multiprocessing', 'Speedup Benchmark', 'Algoritmos Genéticos', 'Canvas 3D'],
      specs: [
        { label: 'Speedup Máximo', value: '~2.8x (PAR/SEQ em 60s)' },
        { label: 'Escala de Workers', value: '2 a 9 Workers Concorrentes' },
        { label: 'Mínimo Global', value: 'f(0, 0) = 0' }
      ],
      challenge: 'Avaliar empiricamente os ganhos de aceleração (speedup efetivo) na busca heurística paralela contra a execução sequencial em cenários de alta dimensionalidade multimodal.',
      solution: 'Implementação de benchmark com pool de workers concorrentes (2 a 9 workers) registrando a curva de speedup real até 2.8x, acoplado ao modelo tridimensional de exploração da superfície de Rastrigin.',
      methodology: [
        'Modelagem analítica da função f(x) = 20 + ∑(xi² - 10·cos(2π·xi))',
        'Execução de testes controlados de 60s comparando tempos PAR versus SEQ',
        'Coleta de métricas e traçado da curva de speedup efetivo por número de workers',
        'Renderização 3D da superfície e simulação interativa das trajetórias de convergência'
      ],
      techStack: ['Python', 'Multiprocessing', 'NumPy / SciPy', 'Matplotlib', 'Canvas 3D'],
      codeSnippet: {
        language: 'python',
        filename: 'poc_rastrigin_tree_bench.py',
        code: `import time
from multiprocessing import Pool
import numpy as np

def rastrigin(x, A=10):
    return A * len(x) + np.sum(x**2 - A * np.cos(2 * np.pi * x))

def worker_search(args):
    seed, max_iter, dim = args
    np.random.seed(seed)
    best_x = np.random.uniform(-5.12, 5.12, dim)
    best_val = rastrigin(best_x)
    for _ in range(max_iter):
        cand = best_x + np.random.normal(0, 0.25, dim)
        cand = np.clip(cand, -5.12, 5.12)
        val = rastrigin(cand)
        if val < best_val:
            best_x, best_val = cand, val
    return best_val

def run_bench(workers=4, runs_per_worker=25, window_sec=60):
    start = time.time()
    args = [(i, 2000, 10) for i in range(workers * runs_per_worker)]
    with Pool(processes=workers) as pool:
        results = pool.map(worker_search, args)
    elapsed = time.time() - start
    return min(results), elapsed`
      }
    },
    {
      id: 'n8n-automation-pipeline',
      title: 'Automação de Pipelines & Integrações com n8n',
      subtitle: 'Fluxos Orientados a Eventos, Webhooks & Tratamento de Dados',
      category: 'automacao',
      categoryLabel: 'Automação de Processos',
      featured: true,
      featuredType: 'n8n',
      imageLabel: 'Arquitetura de nós n8n',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Projeto Desenvolvido',
      summary: 'Arquitetura de fluxos de integração automatizados conectando gatilhos via webhooks, tratamento de dados em Python, armazenamento em banco relacional (PostgreSQL) e disparo de alertas operacionais sem intervenção manual.',
      tags: ['n8n', 'Webhooks', 'REST APIs', 'PostgreSQL', 'Python'],
      specs: [
        { label: 'Orquestrador', value: 'n8n Workflow Engine' },
        { label: 'Camada de Dados', value: 'PostgreSQL Relacional' },
        { label: 'Tratamento', value: 'Python / JSON Schema' }
      ],
      challenge: 'Conectar fontes de dados heterogêneas e fluxos de atendimento sem recorrer a processos manuais de importação ou planilhas estáticas suscetíveis a erro humano.',
      solution: 'Construção de pipelines automáticos orientados a eventos com roteamento condicional de nós, validação de schema JSON, persistência estruturada e notificações instantâneas.',
      methodology: [
        'Mapeamento dos gatilhos de entrada via Webhooks HTTP',
        'Criação de nós de sanitização e enriquecimento de dados em Python',
        'Gravação transacional em banco de dados relacional PostgreSQL',
        'Configuração de tratamento de exceções e alarmística de falha'
      ],
      techStack: ['n8n', 'Python', 'PostgreSQL', 'Webhooks', 'Docker']
    }
  ],
  // Demais Trabalhos (Lista compacta e minimizada)
  otherWorksList: [
    {
      id: 'trade-controller',
      title: 'App Trade Controller & Estratégias Algorítmicas (Cripto & Ações)',
      categoryBadge: 'Cripto & Ações · Binance & MT5',
      badgeVariant: 'secondary',
      statusLabel: 'Praticamente Pronto & Alta Eficiência',
      isTradeHighlight: true,
      description: 'Plataforma de alta eficiência para modelagem, backtesting e execução de estratégias de trade (Binance e MT5). Conta com parametrização de spread/slippage, estratégia S004 (Desvio + Derivada Confirmada), roteamento automático do melhor caminho de taxas de rede entre exchanges (CCXT) e alarmística em tempo real no Telegram.',
      tags: ['Python', 'CCXT', 'Binance & MT5', 'Algoritmos Quant', 'Telegram Bot'],
      imageSrc: '/assets/aistudio/image_2ac28b9b.png',
      imageCaption: 'Interface de Operação App Trade Controller v1.0 (Estratégia S004, Win Rate, Profit Factor e Drawdown)',
      secondaryImageSrc: '/assets/aistudio/image_ee79f82c.png',
      secondaryImageCaption: 'Backend Python CCXT: Otimização de taxas de rede entre Binance/Kucoin/Kraken e alertas Telegram',
      metrics: [
        { label: 'Mercados', value: 'Binance (Cripto) & MT5 (Ações)' },
        { label: 'Roteamento CCXT', value: '10 Exchanges (Menor Taxa)' },
        { label: 'Alarmística', value: 'Bot Telegram em Tempo Real' }
      ],
      codeSnippet: {
        language: 'python',
        filename: 'trade_network_router.py',
        code: `import os
import datetime
from dotenv import load_dotenv
import ccxt

# Encontra o melhor caminho de transferência rede entre exchanges
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
            total_fee = fee1 + fee2
            melhores.append((rede, total_fee))
        melhores.sort(key=lambda x: x[1])
        return melhores[0] if melhores else None
    except Exception as e:
        print(f"[Erro] encontrar_melhor_rede_para_transferencia: {e}")
        return None

def enviar_mensagem_telegram(mensagem):
    import requests
    bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
    chat_id = os.getenv("TELEGRAM_CHAT_ID")
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    requests.post(url, json={"chat_id": chat_id, "text": mensagem})`
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
      imageSrc: '/assets/aistudio/image_6457b4b7.png',
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
      imageSrc: '/assets/aistudio/image_46ca9823.png',
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
    flagshipSubtitle: 'Statewide School Monitoring & Indicator Dashboard (SC, Brazil)',
    flagshipDescription: 'Centralized analytics solution for tracking, cross-referencing, and querying school data across all 295 municipalities of Santa Catarina state. Features dynamic regional drill-downs by Municipality, COREDEC, CRE, and COMPDEC, monitoring enrollment status, teacher certifications, and educational safety metrics.',
    flagshipDeveloper: 'Project developed with technical support from Eng. Yuri Furtwaengler',
    flagshipStats: [
      { label: 'Geographic Coverage', value: '295 SC Municipalities' },
      { label: 'Regional Filters', value: 'COREDEC / CRE / COMPDEC' },
      { label: 'Monitored Entities', value: 'INEP Codes, Teachers & Students' }
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
    interactive3DTitle: 'Interactive 3D Simulation (Click & drag to rotate)',
    interactive3DSubtitle: 'Explore algorithm convergence and 3D surface exploration in real-time',
    interactive3DActive: 'Visualizer active',
    benchmarkGraphTitle: 'Empirical Speedup Benchmark: Parallel vs Sequential (PAR/SEQ)',
    benchmarkGraphSubtitle: 'Experimental acceleration curve over 60s scaling from 2 up to 9 workers'
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
    sectionTitle: 'About Me & Core Competencies',
    sectionSubtitle: 'Production Engineer uniting industrial systems thinking, analytical data modeling, and practical automation.',
    p1: 'I am a Production Engineer working at the intersection of industrial operations, data intelligence, and applied software technology. My approach pairs systemic engineering rigor with the hands-on capability to build functioning computational tools.',
    p2: 'I have practical experience developing real deliverables: from engineering strategic executive dashboards for public management (such as the Santa Catarina Civil Defense statewide portal) to implementing heuristic algorithms for multimodal optimization and event-driven automation pipelines.',
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
        title: 'Automation & Workflow Integration',
        description: 'Orchestrating event-driven data pipelines, webhook connectors, API integrations, and eliminating repetitive manual workflows.',
        items: ['n8n Workflow Automation', 'Webhooks & REST APIs', 'PostgreSQL', 'Python Scripts', 'Systems Integration']
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
      title: 'Civil Defense in Schools — Data & Intelligence Hub',
      subtitle: 'Statewide School Monitoring & Indicator Dashboard',
      category: 'analytics',
      categoryLabel: 'Data Analytics & BI',
      featured: true,
      featuredType: 'dashboard',
      imageLabel: 'Official PDCE Portal · SC',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Authentic Project',
      summary: 'Development of the Civil Defense in Schools Program (PDCE) Data Hub for Santa Catarina, centralizing institution records, program adoption, and teacher certification metrics across 295 municipalities.',
      tags: ['Dashboards', 'KPIs & Metrics', 'SC Civil Defense', 'Public Governance', 'Dynamic Filters'],
      specs: [
        { label: 'Entity', value: 'Civil Defense of Santa Catarina' },
        { label: 'Technical Support', value: 'Eng. Yuri Furtwaengler' },
        { label: 'Scope', value: '295 Municipalities across SC' }
      ],
      challenge: 'Centralizing school records, program onboarding, and teacher training metrics into a high-responsiveness query tool for statewide coordinators and regional agencies (COREDEC / COMPDEC).',
      solution: 'Engineered a unified operational dashboard with geographic drill-downs, municipality filtering, INEP code lookups, teacher certification tracking, and direct support integration.',
      methodology: [
        'Defining core variables and indicators with PDCE state program leaders',
        'Validating municipal data records, school listings, and INEP codes',
        'Designing an ergonomic query interface with dedicated regional filter buttons (Municipality, COREDEC, CRE, COMPDEC)',
        'Connecting support channels and tracking teacher progress indicators for 2026'
      ],
      techStack: ['Executive Dashboards', 'KPIs & Metrics', 'Data Modeling', 'Information Management']
    },
    {
      id: 'rastrigin-optimization',
      title: 'Computational Optimization & Benchmarking (Rastrigin)',
      subtitle: 'Effective Speedup (PAR/SEQ) & 3D Heuristic Algorithms',
      category: 'otimizacao',
      categoryLabel: 'Mathematical Optimization',
      featured: true,
      featuredType: 'rastrigin',
      imageLabel: 'Benchmark Speedup PAR/SEQ (2.8x w/ 9 workers)',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Computational Implementation',
      summary: 'Empirical benchmark and concurrent computing study applied to multimodal Rastrigin optimization, demonstrating effective speedup of up to 2.8x with 9 workers in parallel versus sequential mode, along with an interactive 3D visualizer.',
      tags: ['Python', 'Multiprocessing', 'Speedup Benchmark', 'Genetic Algorithms', 'Canvas 3D'],
      specs: [
        { label: 'Max Speedup', value: '~2.8x (PAR/SEQ in 60s)' },
        { label: 'Worker Scaling', value: '2 to 9 Concurrent Workers' },
        { label: 'Global Minimum', value: 'f(0, 0) = 0' }
      ],
      challenge: 'Empirically evaluating acceleration gains (effective speedup) in parallel heuristic search versus single-thread sequential runs across multimodal landscapes.',
      solution: 'Constructed an empirical benchmark using a multiprocessing worker pool (2 to 9 workers) plotting the real speedup curve up to 2.8x, paired with a 3D Rastrigin trajectory visualizer.',
      methodology: [
        'Analytical definition of f(x) = 20 + ∑(xi² - 10·cos(2π·xi))',
        'Executing controlled 60s benchmarks comparing parallel vs sequential runtimes',
        'Measuring worker scalability and plotting empirical PAR/SEQ speedup curves',
        'Interactive 3D surface projection and convergence trajectory exploration'
      ],
      techStack: ['Python', 'Multiprocessing', 'NumPy / SciPy', 'Matplotlib', 'Canvas 3D'],
      codeSnippet: {
        language: 'python',
        filename: 'poc_rastrigin_tree_bench.py',
        code: `import time
from multiprocessing import Pool
import numpy as np

def rastrigin(x, A=10):
    return A * len(x) + np.sum(x**2 - A * np.cos(2 * np.pi * x))

def worker_search(args):
    seed, max_iter, dim = args
    np.random.seed(seed)
    best_x = np.random.uniform(-5.12, 5.12, dim)
    best_val = rastrigin(best_x)
    for _ in range(max_iter):
        cand = best_x + np.random.normal(0, 0.25, dim)
        cand = np.clip(cand, -5.12, 5.12)
        val = rastrigin(cand)
        if val < best_val:
            best_x, best_val = cand, val
    return best_val

def run_bench(workers=4, runs_per_worker=25, window_sec=60):
    start = time.time()
    args = [(i, 2000, 10) for i in range(workers * runs_per_worker)]
    with Pool(processes=workers) as pool:
        results = pool.map(worker_search, args)
    elapsed = time.time() - start
    return min(results), elapsed`
      }
    },
    {
      id: 'n8n-automation-pipeline',
      title: 'Automated Pipelines & Integration with n8n',
      subtitle: 'Event-Driven Workflows, Webhooks & Data Cleansing',
      category: 'automacao',
      categoryLabel: 'Process Automation',
      featured: true,
      featuredType: 'n8n',
      imageLabel: 'n8n node architecture',
      provenance: 'cv_confirmado',
      provenanceLabel: 'Developed Project',
      summary: 'Architecture of automated integration flows connecting webhook entrypoints, Python data normalization, relational storage (PostgreSQL), and automated operational alerts with zero manual handoffs.',
      tags: ['n8n', 'Webhooks', 'REST APIs', 'PostgreSQL', 'Python'],
      specs: [
        { label: 'Orchestrator', value: 'n8n Workflow Engine' },
        { label: 'Data Store', value: 'Relational PostgreSQL' },
        { label: 'Transformation', value: 'Python / JSON Schema' }
      ],
      challenge: 'Connecting disparate data sources and service flows without relying on error-prone manual spreadsheets or fragile copy-pasting.',
      solution: 'Engineered event-driven pipelines with JSON schema verification, conditional node routing, transactional relational database commits, and automated alert dispatchers.',
      methodology: [
        'Mapping inbound triggers via HTTP Webhooks',
        'Configuring Python data transformation and cleaning nodes',
        'Structured database transactions in PostgreSQL',
        'Implementing exception routing and retry mechanisms'
      ],
      techStack: ['n8n', 'Python', 'PostgreSQL', 'Webhooks', 'Docker']
    }
  ],
  // Other Works (Compact, minimized list)
  otherWorksList: [
    {
      id: 'trade-controller',
      title: 'App Trade Controller & Algorithmic Strategies (Crypto & Equities)',
      categoryBadge: 'Crypto & Equities · Binance & MT5',
      badgeVariant: 'secondary',
      statusLabel: 'Production-Ready & High-Efficiency',
      isTradeHighlight: true,
      description: 'High-efficiency platform for strategy modeling, backtesting, and automated execution (Binance & MT5). Features spread/slippage parameter tuning, S004 strategy (Deviation + Confirmed Derivative), dynamic least-cost transfer fee network routing across 10+ exchanges (CCXT), and instant Telegram alerting.',
      tags: ['Python', 'CCXT', 'Binance & MT5', 'Quant Algorithms', 'Telegram Bot'],
      imageSrc: '/assets/aistudio/image_2ac28b9b.png',
      imageCaption: 'Operation Interface: App Trade Controller v1.0 (S004 Strategy, Win Rate, Profit Factor, Drawdown)',
      secondaryImageSrc: '/assets/aistudio/image_ee79f82c.png',
      secondaryImageCaption: 'Python CCXT Backend: Inter-exchange network fee routing and Telegram alerting engine',
      metrics: [
        { label: 'Markets', value: 'Binance (Crypto) & MT5 (Equities)' },
        { label: 'CCXT Routing', value: '10 Exchanges (Lowest Fee)' },
        { label: 'Alerting', value: 'Real-Time Telegram Bot' }
      ],
      codeSnippet: {
        language: 'python',
        filename: 'trade_network_router.py',
        code: `import os
import datetime
from dotenv import load_dotenv
import ccxt

# Finds optimal network transfer path between exchanges
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
            total_fee = fee1 + fee2
            melhores.append((rede, total_fee))
        melhores.sort(key=lambda x: x[1])
        return melhores[0] if melhores else None
    except Exception as e:
        print(f"[Erro] encontrar_melhor_rede_para_transferencia: {e}")
        return None

def enviar_mensagem_telegram(mensagem):
    import requests
    bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
    chat_id = os.getenv("TELEGRAM_CHAT_ID")
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    requests.post(url, json={"chat_id": chat_id, "text": mensagem})`
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
      imageSrc: '/assets/aistudio/image_6457b4b7.png',
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
      imageSrc: '/assets/aistudio/image_46ca9823.png',
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
