import React from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { OtherWorksSection } from './OtherWorksSection';
import { useLanguage } from '../context/LanguageContext';
import { Layers } from 'lucide-react';

interface ProjectCatalogProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectCatalog: React.FC<ProjectCatalogProps> = ({ onSelectProject }) => {
  const { t } = useLanguage();
  const allProjects = t.projectList;

  return (
    <div className="space-y-12">
      {/* ========================================================
          PROJECTS CATALOG: Ennobled Title with Symbol (No Filters)
         ======================================================== */}
      <div>
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#223747] dark:text-[#F5F2EC] flex items-center gap-3">
            <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-[#E67E67] dark:text-[#F08F79] shrink-0" />
            <span>{t.projects.sectionTitle}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5B7382] dark:text-[#9EB3BF] mt-1.5">
            {t.projects.sectionSubtitle}
          </p>
        </div>

        {/* Grid of Key Projects (3 Primary Authentic Deliverables) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

        {/* Demais Trabalhos (Compact List Format) */}
        <OtherWorksSection />
      </div>
    </div>
  );
};
