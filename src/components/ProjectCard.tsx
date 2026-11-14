import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

// Minimal technical graphic previews using the new palette
const ProjectVisualPreview: React.FC<{ project: Project }> = ({ project }) => {
  if (project.id === 'defesa-civil-dashboard') {
    return (
      <div className="w-full h-44 sm:h-48 bg-[#F7F5F1] dark:bg-[#1B2933] border-b border-[#E3DED7] dark:border-[#364C59] relative overflow-hidden group-hover:opacity-95 transition-opacity">
        <img
          src="./assets/aistudio/image_89f17629.png"
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2933]/50 via-transparent to-transparent pointer-events-none" />
        <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-[#223747] dark:text-[#F5F2EC] bg-[#FFFFFF]/90 dark:bg-[#1B2933]/90 px-2 py-0.5 rounded border border-[#E3DED7] dark:border-[#364C59] backdrop-blur-xs">
          {project.imageLabel || 'Central Oficial PDCE'}
        </span>
      </div>
    );
  }

  if (project.id === 'rastrigin-optimization') {
    return (
      <div className="w-full h-44 sm:h-48 bg-[#0E1A2A] border-b border-[#E3DED7] dark:border-[#364C59] relative overflow-hidden group-hover:opacity-95 transition-opacity flex items-center justify-center p-1">
        <img
          src="./assets/aistudio/overview_337417fc.png"
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A2A]/60 via-transparent to-transparent pointer-events-none" />
        <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-[#223747] dark:text-[#F5F2EC] bg-[#FFFFFF]/90 dark:bg-[#1B2933]/90 px-2 py-0.5 rounded border border-[#E3DED7] dark:border-[#364C59] backdrop-blur-xs">
          {project.imageLabel || 'Smart Heuristic · 2,49× Ganho'}
        </span>
      </div>
    );
  }

  // n8n workflow demo
  return (
    <div className="w-full h-44 sm:h-48 bg-[#1B2933] border-b border-[#E3DED7] dark:border-[#364C59] relative overflow-hidden group-hover:opacity-95 transition-opacity">
      <img
        src="./assets/aistudio/Video%20Project%202.gif"
        alt="Demonstração animada do fluxo de automação n8n"
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-[#223747] dark:text-[#F5F2EC] bg-[#FFFFFF]/90 dark:bg-[#1B2933]/90 px-2 py-0.5 rounded border border-[#E3DED7] dark:border-[#364C59]">
        {project.imageLabel || 'Demonstração do fluxo n8n'}
      </span>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const { t } = useLanguage();

  return (
    <article
      onClick={() => onSelect(project)}
      className="group cursor-pointer rounded-xl bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59] overflow-hidden flex flex-col justify-between transition-all hover:border-[#D96B27] dark:hover:border-[#F28C38] hover:shadow-md"
    >
      <div>
        <ProjectVisualPreview project={project} />

        <div className="p-5">
          {/* Category & Provenance */}
          <div className="flex items-center justify-between text-xs font-mono text-[#5B7382] dark:text-[#9EB3BF]">
            <span>{project.categoryLabel}</span>
            <span className="text-[10px] text-[#223747] dark:text-[#F5F2EC] font-semibold bg-[#F7F5F1] dark:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59] px-1.5 py-0.5 rounded">
              {project.provenanceLabel || t.projects.confirmedDeliverable}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-[#223747] dark:text-[#F5F2EC] group-hover:text-[#D96B27] dark:group-hover:text-[#F28C38] transition-colors mt-1.5 leading-snug">
            {project.title}
          </h3>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-[#223747]/80 dark:text-[#F5F2EC]/80 mt-2 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>

          {/* Main Technologies */}
          <div className="flex flex-wrap items-center gap-1.5 mt-3">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono text-[#5B7382] dark:text-[#9EB3BF]"
              >
                {tag}{idx < Math.min(2, project.tags.length - 1) ? ' ·' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="px-5 pb-5 pt-3 border-t border-[#E3DED7] dark:border-[#364C59] flex items-center justify-between text-xs">
        <span className="text-[#5B7382] dark:text-[#9EB3BF] font-mono text-[11px] truncate max-w-[65%]">
          {project.specs?.[0]?.value || t.projects.specDetailsAvailable}
        </span>

        <span className="inline-flex items-center gap-1 font-semibold text-[#223747] dark:text-[#F5F2EC] group-hover:text-[#D96B27] dark:group-hover:text-[#F28C38] transition-colors shrink-0">
          <span>{t.projects.viewProject}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};
