export type SectionId = 'inicio' | 'projetos' | 'competencias' | 'sobre-mim' | 'contato';

export type Language = 'pt' | 'en';

export type ProjectCategory = 'todos' | 'otimizacao' | 'automacao' | 'analytics';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'otimizacao' | 'automacao' | 'analytics';
  categoryLabel: string;
  summary: string;
  tags: string[];
  specs?: { label: string; value: string }[];
  featured?: boolean;
  featuredType?: 'rastrigin' | 'n8n' | 'dashboard';
  imageLabel?: string;
  provenance?: 'cv_confirmado' | 'estudo_em_validacao';
  provenanceLabel?: string;
  challenge: string;
  solution: string;
  methodology: string[];
  techStack: string[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    description: string;
    tools: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  course: string;
  institution: string;
  period?: string;
  location?: string;
  description?: string;
}

export interface OtherWorkItem {
  id: string;
  title: string;
  categoryBadge: string;
  badgeVariant?: 'primary' | 'secondary' | 'neutral';
  description: string;
  tags: string[];
  imageSrc?: string;
  secondaryImageSrc?: string;
  imageCaption?: string;
  secondaryImageCaption?: string;
  isTradeHighlight?: boolean;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  metrics?: { label: string; value: string }[];
  statusLabel?: string;
}

export type CodeSnippetItem = OtherWorkItem;
