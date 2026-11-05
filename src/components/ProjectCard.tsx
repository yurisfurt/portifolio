import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, CheckCircle2, FlaskConical } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

// Minimal technical graphic previews for each project
const ProjectVisualPreview: React.FC<{ project: Project }> = ({ project }) => {
  if (project.id === 'defesa-civil-dashboard') {
    return (
      <div className="w-full h-44 sm:h-48 bg-slate-100 dark:bg-[#070b10] border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-center relative overflow-hidden group-hover:opacity-95 transition-opacity">
        <svg viewBox="0 0 400 180" className="w-full h-full p-5 opacity-85" preserveAspectRatio="xMidYMid meet">
          {/* Header Bar */}
          <rect x="30" y="20" width="340" height="24" rx="4" fill="#ffffff" className="dark:fill-[#0e1622]" stroke="#94a3b8" strokeWidth="0.75" />
          <line x1="45" y1="32" x2="140" y2="32" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
          <line x1="320" y1="32" x2="350" y2="32" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />

          {/* Metric cards */}
          <rect x="30" y="55" width="105" height="45" rx="4" fill="#ffffff" className="dark:fill-[#0e1622]" stroke="#94a3b8" strokeWidth="0.75" />
          <line x1="42" y1="72" x2="85" y2="72" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="42" y1="84" x2="115" y2="84" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

          <rect x="145" y="55" width="110" height="45" rx="4" fill="#ffffff" className="dark:fill-[#0e1622]" stroke="#94a3b8" strokeWidth="0.75" />
          <line x1="157" y1="72" x2="200" y2="72" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="157" y1="84" x2="230" y2="84" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

          <rect x="265" y="55" width="105" height="45" rx="4" fill="#ffffff" className="dark:fill-[#0e1622]" stroke="#94a3b8" strokeWidth="0.75" />
          <line x1="277" y1="72" x2="320" y2="72" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="277" y1="84" x2="350" y2="84" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

          {/* Table / List layout */}
          <rect x="30" y="110" width="340" height="50" rx="4" fill="#ffffff" className="dark:fill-[#0e1622]" stroke="#94a3b8" strokeWidth="0.75" />
          <line x1="45" y1="125" x2="355" y2="125" stroke="#cbd5e1" className="dark:stroke-slate-800" strokeWidth="1" />
          <line x1="45" y1="142" x2="355" y2="142" stroke="#cbd5e1" className="dark:stroke-slate-800" strokeWidth="1" />
        </svg>

        <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white/90 dark:bg-black/70 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
          Painel de Indicadores PDCE
        </span>
      </div>
    );
  }

  if (project.id === 'sap-implementation') {
    return (
      <div className="w-full h-44 sm:h-48 bg-slate-100 dark:bg-[#070b10] border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-center relative overflow-hidden group-hover:opacity-95 transition-opacity">
        <svg viewBox="0 0 400 180" className="w-full h-full p-6 opacity-85" preserveAspectRatio="xMidYMid meet">
          {/* TOTVS to SAP Migration representation */}
          <rect x="50" y="60" width="100" height="60" rx="6" fill="#ffffff" className="dark:fill-[#0e1622]" stroke="#94a3b8" strokeWidth="1" />
          <text x="100" y="95" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="monospace" fontWeight="bold">TOTVS</text>

          {/* Central transition arrow */}
          <path d="M 170 90 L 230 90" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
          <circle cx="200" cy="90" r="3" fill="#10b981" />

          <rect x="250" y="60" width="100" height="60" rx="6" fill="#ffffff" className="dark:fill-[#0e1622]" stroke="#10b981" strokeWidth="1.2" />
          <text x="300" y="95" textAnchor="middle" fill="#10b981" fontSize="13" fontFamily="monospace" fontWeight="bold">SAP</text>
        </svg>

        <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white/90 dark:bg-black/70 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
          Transição de ERP Corporativo
        </span>
      </div>
    );
  }

  if (project.id === 'rastrigin-optimization') {
    return (
      <div className="w-full h-44 sm:h-48 bg-slate-100 dark:bg-[#070b10] border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-center relative overflow-hidden group-hover:opacity-95 transition-opacity">
        <svg viewBox="0 0 400 180" className="w-full h-full p-4 opacity-85" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="contourGradR" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#0284c7" stopOpacity="0.08" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="400" height="180" fill="url(#contourGradR)" />
          {/* Contour isolines */}
          <ellipse cx="200" cy="90" rx="140" ry="55" fill="none" stroke="#64748b" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
          <ellipse cx="200" cy="90" rx="100" ry="38" fill="none" stroke="#64748b" strokeWidth="0.75" opacity="0.5" />
          <ellipse cx="200" cy="90" rx="65" ry="24" fill="none" stroke="#64748b" strokeWidth="0.75" opacity="0.6" />
          <ellipse cx="200" cy="90" rx="30" ry="12" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.8" />
          
          {/* Trajectory */}
          <path
            d="M 85 45 Q 120 110 160 80 T 200 90"
            fill="none"
            stroke="#0f172a"
            className="dark:stroke-slate-100"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="85" cy="45" r="3.5" fill="#64748b" />
          <circle cx="135" cy="90" r="2.5" fill="#64748b" />
          <circle cx="200" cy="90" r="4" fill="#10b981" />
        </svg>

        <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white/90 dark:bg-black/70 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
          Superfície multimodal 3D interativa
        </span>
      </div>
    );
  }

  // Default schematic preview
  return (
    <div className="w-full h-44 sm:h-48 bg-slate-100 dark:bg-[#070b10] border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-center relative overflow-hidden group-hover:opacity-95 transition-opacity">
      <svg viewBox="0 0 320 140" className="w-full h-full p-4 opacity-75" preserveAspectRatio="xMidYMid meet">
        <line x1="30" y1="70" x2="290" y2="70" stroke="#64748b" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
        <rect x="40" y="50" width="45" height="40" rx="6" fill="#ffffff" className="dark:fill-[#0e1622]" stroke="#94a3b8" strokeWidth="0.75" />
        <rect x="135" y="50" width="45" height="40" rx="6" fill="#ffffff" className="dark:fill-[#0e1622]" stroke="#94a3b8" strokeWidth="0.75" />
        <rect x="230" y="50" width="45" height="40" rx="6" fill="#ffffff" className="dark:fill-[#0e1622]" stroke="#94a3b8" strokeWidth="0.75" />
      </svg>
      <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white/90 dark:bg-black/70 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-800">
        Diagrama técnico preliminar
      </span>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(project)}
      className="group cursor-pointer rounded-xl bg-white dark:bg-[#0d1219] border border-slate-200 dark:border-slate-800/80 overflow-hidden flex flex-col justify-between transition-all hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs"
    >
      <div>
        <ProjectVisualPreview project={project} />

        <div className="p-5">
          {/* Category & Provenance */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>{project.categoryLabel}</span>
            {project.provenance === 'cv_confirmado' ? (
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                Realização
              </span>
            ) : (
              <span className="text-[10px] text-slate-400 dark:text-slate-500">
                Estudo
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mt-1">
            {project.title}
          </h3>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>

          {/* Main Technologies */}
          <div className="flex flex-wrap items-center gap-1.5 mt-3">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono text-slate-500 dark:text-slate-400"
              >
                {tag}{idx < Math.min(2, project.tags.length - 1) ? ' ·' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="px-5 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs">
        <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px]">
          {project.specs?.[0]?.value || 'Detalhes disponíveis'}
        </span>

        <span className="inline-flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          <span>Ver projeto</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};
