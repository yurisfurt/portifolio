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
      <div className="w-full h-44 sm:h-48 bg-[#F5F3EF] dark:bg-[#202C34] border-b border-[#DCE4E1] dark:border-[#344A52] flex items-center justify-center relative overflow-hidden group-hover:opacity-95 transition-opacity">
        <svg viewBox="0 0 400 180" className="w-full h-full p-5 opacity-90" preserveAspectRatio="xMidYMid meet">
          {/* Header Bar */}
          <rect x="30" y="20" width="340" height="22" rx="4" fill="#FFFFFF" stroke="#DCE4E1" strokeWidth="1" className="dark:fill-[#2D3B44] dark:stroke-[#344A52]" />
          <line x1="45" y1="31" x2="140" y2="31" stroke="#243746" className="dark:stroke-[#E7E9E6]" strokeWidth="2" strokeLinecap="round" />
          <line x1="320" y1="31" x2="350" y2="31" stroke="#668B91" className="dark:stroke-[#89ABB0]" strokeWidth="2" strokeLinecap="round" />

          {/* Metric cards */}
          <rect x="30" y="52" width="105" height="44" rx="4" fill="#FFFFFF" stroke="#DCE4E1" strokeWidth="1" className="dark:fill-[#2D3B44] dark:stroke-[#344A52]" />
          <line x1="42" y1="68" x2="85" y2="68" stroke="#668B91" className="dark:stroke-[#89ABB0]" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="42" y1="80" x2="115" y2="80" stroke="#DCE4E1" className="dark:stroke-[#344A52]" strokeWidth="1.5" strokeLinecap="round" />

          <rect x="145" y="52" width="110" height="44" rx="4" fill="#FFFFFF" stroke="#DCE4E1" strokeWidth="1" className="dark:fill-[#2D3B44] dark:stroke-[#344A52]" />
          <line x1="157" y1="68" x2="200" y2="68" stroke="#668B91" className="dark:stroke-[#89ABB0]" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="157" y1="80" x2="230" y2="80" stroke="#DCE4E1" className="dark:stroke-[#344A52]" strokeWidth="1.5" strokeLinecap="round" />

          <rect x="265" y="52" width="105" height="44" rx="4" fill="#FFFFFF" stroke="#DCE4E1" strokeWidth="1" className="dark:fill-[#2D3B44] dark:stroke-[#344A52]" />
          <line x1="277" y1="68" x2="320" y2="68" stroke="#668B91" className="dark:stroke-[#89ABB0]" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="277" y1="80" x2="350" y2="80" stroke="#DCE4E1" className="dark:stroke-[#344A52]" strokeWidth="1.5" strokeLinecap="round" />

          {/* Table list */}
          <rect x="30" y="106" width="340" height="52" rx="4" fill="#FFFFFF" stroke="#DCE4E1" strokeWidth="1" className="dark:fill-[#2D3B44] dark:stroke-[#344A52]" />
          <line x1="45" y1="122" x2="355" y2="122" stroke="#DCE4E1" className="dark:stroke-[#344A52]" strokeWidth="1" />
          <line x1="45" y1="138" x2="355" y2="138" stroke="#DCE4E1" className="dark:stroke-[#344A52]" strokeWidth="1" />
        </svg>

        <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-[#243746] dark:text-[#E7E9E6] bg-[#FFFFFF]/90 dark:bg-[#202C34]/90 px-2 py-0.5 rounded border border-[#DCE4E1] dark:border-[#344A52]">
          {project.imageLabel || 'Painel de Indicadores PDCE'}
        </span>
      </div>
    );
  }

  if (project.id === 'sap-implementation') {
    return (
      <div className="w-full h-44 sm:h-48 bg-[#F5F3EF] dark:bg-[#202C34] border-b border-[#DCE4E1] dark:border-[#344A52] flex items-center justify-center relative overflow-hidden group-hover:opacity-95 transition-opacity">
        <svg viewBox="0 0 400 180" className="w-full h-full p-6 opacity-90" preserveAspectRatio="xMidYMid meet">
          <rect x="50" y="60" width="100" height="60" rx="6" fill="#FFFFFF" stroke="#DCE4E1" strokeWidth="1" className="dark:fill-[#2D3B44] dark:stroke-[#344A52]" />
          <text x="100" y="95" textAnchor="middle" fill="#668B91" className="dark:fill-[#89ABB0]" fontSize="12" fontFamily="monospace" fontWeight="bold">TOTVS</text>

          <path d="M 170 90 L 230 90" stroke="#243746" className="dark:stroke-[#E7E9E6]" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="200" cy="90" r="3.5" fill="#668B91" className="dark:fill-[#89ABB0]" />

          <rect x="250" y="60" width="100" height="60" rx="6" fill="#FFFFFF" stroke="#243746" strokeWidth="1.5" className="dark:fill-[#2D3B44] dark:stroke-[#89ABB0]" />
          <text x="300" y="95" textAnchor="middle" fill="#243746" className="dark:fill-[#E7E9E6]" fontSize="13" fontFamily="monospace" fontWeight="bold">SAP</text>
        </svg>

        <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-[#243746] dark:text-[#E7E9E6] bg-[#FFFFFF]/90 dark:bg-[#202C34]/90 px-2 py-0.5 rounded border border-[#DCE4E1] dark:border-[#344A52]">
          {project.imageLabel || 'ERP Rollout'}
        </span>
      </div>
    );
  }

  if (project.id === 'rastrigin-optimization') {
    return (
      <div className="w-full h-44 sm:h-48 bg-[#F5F3EF] dark:bg-[#202C34] border-b border-[#DCE4E1] dark:border-[#344A52] flex items-center justify-center relative overflow-hidden group-hover:opacity-95 transition-opacity">
        <svg viewBox="0 0 400 180" className="w-full h-full p-4 opacity-90" preserveAspectRatio="xMidYMid meet">
          <ellipse cx="200" cy="90" rx="140" ry="55" fill="none" stroke="#DCE4E1" className="dark:stroke-[#344A52]" strokeWidth="0.8" strokeDasharray="3 3" />
          <ellipse cx="200" cy="90" rx="100" ry="38" fill="none" stroke="#668B91" className="dark:stroke-[#89ABB0]" strokeWidth="0.8" opacity="0.6" />
          <ellipse cx="200" cy="90" rx="65" ry="24" fill="none" stroke="#668B91" className="dark:stroke-[#89ABB0]" strokeWidth="1" opacity="0.8" />
          <ellipse cx="200" cy="90" rx="30" ry="12" fill="none" stroke="#243746" className="dark:stroke-[#E7E9E6]" strokeWidth="1.5" />

          {/* Trajectory */}
          <path
            d="M 85 45 Q 120 110 160 80 T 200 90"
            fill="none"
            stroke="#243746"
            className="dark:stroke-[#E7E9E6]"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="85" cy="45" r="3.5" fill="#668B91" className="dark:fill-[#89ABB0]" />
          <circle cx="135" cy="90" r="2.5" fill="#668B91" className="dark:fill-[#89ABB0]" />
          <circle cx="200" cy="90" r="4.5" fill="#243746" className="dark:fill-[#E7E9E6]" />
        </svg>

        <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-[#243746] dark:text-[#E7E9E6] bg-[#FFFFFF]/90 dark:bg-[#202C34]/90 px-2 py-0.5 rounded border border-[#DCE4E1] dark:border-[#344A52]">
          {project.imageLabel || 'Superfície 3D'}
        </span>
      </div>
    );
  }

  // Default schematic preview for others
  return (
    <div className="w-full h-44 sm:h-48 bg-[#F5F3EF] dark:bg-[#202C34] border-b border-[#DCE4E1] dark:border-[#344A52] flex items-center justify-center relative overflow-hidden group-hover:opacity-95 transition-opacity">
      <svg viewBox="0 0 320 140" className="w-full h-full p-4 opacity-80" preserveAspectRatio="xMidYMid meet">
        <line x1="30" y1="70" x2="290" y2="70" stroke="#DCE4E1" className="dark:stroke-[#344A52]" strokeWidth="1" strokeDasharray="3 3" />
        <rect x="40" y="50" width="45" height="40" rx="5" fill="#FFFFFF" stroke="#668B91" strokeWidth="1" className="dark:fill-[#2D3B44] dark:stroke-[#89ABB0]" />
        <rect x="135" y="50" width="45" height="40" rx="5" fill="#FFFFFF" stroke="#668B91" strokeWidth="1" className="dark:fill-[#2D3B44] dark:stroke-[#89ABB0]" />
        <rect x="230" y="50" width="45" height="40" rx="5" fill="#FFFFFF" stroke="#243746" strokeWidth="1.2" className="dark:fill-[#2D3B44] dark:stroke-[#E7E9E6]" />
      </svg>
      <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-[#243746] dark:text-[#E7E9E6] bg-[#FFFFFF]/90 dark:bg-[#202C34]/90 px-2 py-0.5 rounded border border-[#DCE4E1] dark:border-[#344A52]">
        {project.imageLabel || 'Diagrama técnico'}
      </span>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const { t } = useLanguage();

  return (
    <article
      onClick={() => onSelect(project)}
      className="group cursor-pointer rounded-xl bg-[#FFFFFF] dark:bg-[#2D3B44] border border-[#DCE4E1] dark:border-[#344A52] overflow-hidden flex flex-col justify-between transition-all hover:border-[#668B91] dark:hover:border-[#89ABB0] hover:shadow-xs"
    >
      <div>
        <ProjectVisualPreview project={project} />

        <div className="p-5">
          {/* Category & Provenance */}
          <div className="flex items-center justify-between text-xs font-mono text-[#668B91] dark:text-[#89ABB0]">
            <span>{project.categoryLabel}</span>
            {project.provenance === 'cv_confirmado' ? (
              <span className="text-[10px] text-[#243746] dark:text-[#E7E9E6] font-semibold bg-[#DCE4E1]/50 dark:bg-[#344A52] px-1.5 py-0.5 rounded">
                {t.projects.confirmedDeliverable}
              </span>
            ) : (
              <span className="text-[10px] text-[#668B91] dark:text-[#89ABB0]">
                {t.projects.technicalStudy}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-[#243746] dark:text-[#E7E9E6] group-hover:text-[#668B91] dark:group-hover:text-[#89ABB0] transition-colors mt-1.5">
            {project.title}
          </h3>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-[#243746]/80 dark:text-[#E7E9E6]/80 mt-2 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>

          {/* Main Technologies */}
          <div className="flex flex-wrap items-center gap-1.5 mt-3">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono text-[#668B91] dark:text-[#89ABB0]"
              >
                {tag}{idx < Math.min(2, project.tags.length - 1) ? ' ·' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="px-5 pb-5 pt-3 border-t border-[#DCE4E1] dark:border-[#344A52] flex items-center justify-between text-xs">
        <span className="text-[#668B91] dark:text-[#89ABB0] font-mono text-[11px] truncate max-w-[65%]">
          {project.specs?.[0]?.value || t.projects.specDetailsAvailable}
        </span>

        <span className="inline-flex items-center gap-1 font-semibold text-[#243746] dark:text-[#E7E9E6] group-hover:text-[#668B91] dark:group-hover:text-[#89ABB0] transition-colors shrink-0">
          <span>{t.projects.viewProject}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};
