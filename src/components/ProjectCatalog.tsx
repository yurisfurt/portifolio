import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCatalogProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectCatalog: React.FC<ProjectCatalogProps> = ({ onSelectProject }) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ProjectCategory>('todos');

  const allProjects = t.projectList;

  const filteredProjects =
    filter === 'todos'
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FFFFFF] dark:bg-[#2D3B44] rounded-lg border border-[#DCE4E1] dark:border-[#344A52] self-start shadow-2xs">
        <button
          onClick={() => setFilter('todos')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
            filter === 'todos'
              ? 'bg-[#243746] text-[#FFFFFF] dark:bg-[#E7E9E6] dark:text-[#202C34] shadow-xs font-semibold'
              : 'text-[#668B91] hover:text-[#243746] dark:text-[#89ABB0] dark:hover:text-[#E7E9E6]'
          }`}
        >
          {t.projects.filterAll} ({allProjects.length})
        </button>
        <button
          onClick={() => setFilter('analytics')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
            filter === 'analytics'
              ? 'bg-[#243746] text-[#FFFFFF] dark:bg-[#E7E9E6] dark:text-[#202C34] shadow-xs font-semibold'
              : 'text-[#668B91] hover:text-[#243746] dark:text-[#89ABB0] dark:hover:text-[#E7E9E6]'
          }`}
        >
          {t.projects.filterAnalytics}
        </button>
        <button
          onClick={() => setFilter('otimizacao')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
            filter === 'otimizacao'
              ? 'bg-[#243746] text-[#FFFFFF] dark:bg-[#E7E9E6] dark:text-[#202C34] shadow-xs font-semibold'
              : 'text-[#668B91] hover:text-[#243746] dark:text-[#89ABB0] dark:hover:text-[#E7E9E6]'
          }`}
        >
          {t.projects.filterOptimization}
        </button>
        <button
          onClick={() => setFilter('automacao')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
            filter === 'automacao'
              ? 'bg-[#243746] text-[#FFFFFF] dark:bg-[#E7E9E6] dark:text-[#202C34] shadow-xs font-semibold'
              : 'text-[#668B91] hover:text-[#243746] dark:text-[#89ABB0] dark:hover:text-[#E7E9E6]'
          }`}
        >
          {t.projects.filterAutomation}
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
