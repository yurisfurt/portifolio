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
          src="/assets/aistudio/image_89f17629.png"
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
      <div className="w-full h-44 sm:h-48 bg-[#FFFFFF] dark:bg-[#1B2933] border-b border-[#E3DED7] dark:border-[#364C59] relative overflow-hidden group-hover:opacity-95 transition-opacity flex items-center justify-center p-2">
        <img
          src="/assets/aistudio/poc_rastrigin_tree_bench_speedup_efetivo_60s_vs_workers_f13b9833.png"
          alt={project.title}
          className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2933]/40 via-transparent to-transparent pointer-events-none" />
        <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-[#223747] dark:text-[#F5F2EC] bg-[#FFFFFF]/90 dark:bg-[#1B2933]/90 px-2 py-0.5 rounded border border-[#E3DED7] dark:border-[#364C59] backdrop-blur-xs">
          {project.imageLabel || 'Benchmark Speedup (2.8x)'}
        </span>
      </div>
    );
  }

  // Default schematic (n8n pipeline)
  return (
    <div className="w-full h-44 sm:h-48 bg-[#F7F5F1] dark:bg-[#1B2933] border-b border-[#E3DED7] dark:border-[#364C59] flex items-center justify-center relative overflow-hidden group-hover:opacity-95 transition-opacity">
      <svg viewBox="0 0 360 160" className="w-full h-full p-4 opacity-90" preserveAspectRatio="xMidYMid meet">
        {/* Webhook trigger */}
        <rect x="25" y="60" width="70" height="40" rx="6" fill="#FFFFFF" stroke="#E67E67" strokeWidth="1" className="dark:fill-[#283B47] dark:stroke-[#F08F79]" />
        <text x="60" y="84" textAnchor="middle" fill="#223747" className="dark:fill-[#F5F2EC]" fontSize="10" fontFamily="monospace" fontWeight="600">Webhook</text>

        <line x1="95" y1="80" x2="145" y2="80" stroke="#E67E67" className="dark:stroke-[#F08F79]" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="145,80 137,76 137,84" fill="#E67E67" className="dark:fill-[#F08F79]" />

        {/* n8n Router & Python processing */}
        <rect x="145" y="45" width="85" height="70" rx="6" fill="#FFFFFF" stroke="#223747" strokeWidth="1.5" className="dark:fill-[#283B47] dark:stroke-[#F5F2EC]" />
        <text x="187" y="75" textAnchor="middle" fill="#223747" className="dark:fill-[#F5F2EC]" fontSize="12" fontFamily="monospace" fontWeight="bold">n8n</text>
        <text x="187" y="93" textAnchor="middle" fill="#E67E67" className="dark:fill-[#F08F79]" fontSize="9" fontFamily="monospace">Pipeline</text>

        <line x1="230" y1="80" x2="275" y2="80" stroke="#E67E67" className="dark:stroke-[#F08F79]" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="275,80 267,76 267,84" fill="#E67E67" className="dark:fill-[#F08F79]" />

        {/* Postgres DB destination */}
        <rect x="275" y="60" width="65" height="40" rx="6" fill="#FFFFFF" stroke="#E5A94C" strokeWidth="1" className="dark:fill-[#283B47] dark:stroke-[#E8B665]" />
        <text x="307" y="84" textAnchor="middle" fill="#223747" className="dark:fill-[#F5F2EC]" fontSize="10" fontFamily="monospace" fontWeight="600">PostgreSQL</text>
      </svg>
      <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-[#223747] dark:text-[#F5F2EC] bg-[#FFFFFF]/90 dark:bg-[#1B2933]/90 px-2 py-0.5 rounded border border-[#E3DED7] dark:border-[#364C59]">
        {project.imageLabel || 'Arquitetura n8n'}
      </span>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const { t } = useLanguage();

  return (
    <article
      onClick={() => onSelect(project)}
      className="group cursor-pointer rounded-xl bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59] overflow-hidden flex flex-col justify-between transition-all hover:border-[#E67E67] dark:hover:border-[#F08F79] hover:shadow-md"
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
          <h3 className="text-base font-bold text-[#223747] dark:text-[#F5F2EC] group-hover:text-[#E67E67] dark:group-hover:text-[#F08F79] transition-colors mt-1.5 leading-snug">
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

        <span className="inline-flex items-center gap-1 font-semibold text-[#223747] dark:text-[#F5F2EC] group-hover:text-[#E67E67] dark:group-hover:text-[#F08F79] transition-colors shrink-0">
          <span>{t.projects.viewProject}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};
