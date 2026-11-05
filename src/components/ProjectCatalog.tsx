import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface ProjectCatalogProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectCatalog: React.FC<ProjectCatalogProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<ProjectCategory>('todos');

  const allProjects = [...FEATURED_PROJECTS, ...OTHER_PROJECTS];

  const filteredProjects =
    filter === 'todos'
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1 p-0.5 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 self-start">
        <button
          onClick={() => setFilter('todos')}
          className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
            filter === 'todos'
              ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          Todos ({allProjects.length})
        </button>
        <button
          onClick={() => setFilter('otimizacao')}
          className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
            filter === 'otimizacao'
              ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          Otimização & PCP
        </button>
        <button
          onClick={() => setFilter('automacao')}
          className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
            filter === 'automacao'
              ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          Automação & ETL
        </button>
        <button
          onClick={() => setFilter('analytics')}
          className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
            filter === 'analytics'
              ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          Análise de Dados & BI
        </button>
      </div>

      {/* Grid of Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={onSelectProject}
          />
        ))}
      </div>
    </div>
  );
};
