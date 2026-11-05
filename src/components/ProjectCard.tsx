import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

// Minimal technical graphic previews for each project
const ProjectVisualPreview: React.FC<{ project: Project }> = ({ project }) => {
  if (project.id === 'rastrigin-optimization') {
    return (
      <div className="w-full h-44 sm:h-52 bg-slate-100 dark:bg-[#070b10] border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-center relative overflow-hidden group-hover:opacity-95 transition-opacity">
        {/* Subtle contour & trajectory SVG */}
        <svg viewBox="0 0 400 200" className="w-full h-full p-4 opacity-85" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="contourGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#0284c7" stopOpacity="0.08" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="400" height="200" fill="url(#contourGrad)" />
          {/* Contour isolines */}
          <ellipse cx="200" cy="100" rx="140" ry="60" fill="none" stroke="#64748b" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
          <ellipse cx="200" cy="100" rx="100" ry="42" fill="none" stroke="#64748b" strokeWidth="0.75" opacity="0.5" />
          <ellipse cx="200" cy="100" rx="65" ry="28" fill="none" stroke="#64748b" strokeWidth="0.75" opacity="0.6" />
          <ellipse cx="200" cy="100" rx="30" ry="14" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.8" />
          
          {/* Optimization trajectory */}
          <path
            d="M 85 45 Q 120 120 160 85 T 200 100"
            fill="none"
            stroke="#0f172a"
            className="dark:stroke-slate-100"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          {/* Nodes */}
          <circle cx="85" cy="45" r="3.5" fill="#64748b" />
          <circle cx="135" cy="95" r="2.5" fill="#64748b" />
          <circle cx="170" cy="88" r="2.5" fill="#64748b" />
          <circle cx="200" cy="100" r="4.5" fill="#10b981" />
        </svg>

        <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-white/80 dark:bg-black/60 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
          Superfície matemática · Prévia
        </span>
      </div>
    );
  }

  if (project.id === 'n8n-automation-pipeline') {
    return (
      <div className="w-full h-44 sm:h-52 bg-slate-100 dark:bg-[#070b10] border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-center relative overflow-hidden group-hover:opacity-95 transition-opacity">
        <svg viewBox="0 0 400 200" className="w-full h-full p-6 opacity-85" preserveAspectRatio="xMidYMid meet">
          {/* Node connector line */}
          <line x1="60" y1="100" x2="340" y2="100" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.5" />
          
          {/* Node 1: Webhook */}
          <rect x="35" y="75" width="50" height="50" rx="8" fill="#ffffff" className="dark:fill-[#0d131c]" stroke="#94a3b8" strokeWidth="1" />
          <circle cx="60" cy="100" r="6" fill="#64748b" />

          {/* Node 2: Transform */}
          <rect x="130" y="75" width="50" height="50" rx="8" fill="#ffffff" className="dark:fill-[#0d131c]" stroke="#94a3b8" strokeWidth="1" />
          <rect x="148" y="94" width="14" height="12" fill="#64748b" rx="2" />

          {/* Node 3: Database */}
          <rect x="225" y="75" width="50" height="50" rx="8" fill="#ffffff" className="dark:fill-[#0d131c]" stroke="#94a3b8" strokeWidth="1" />
          <ellipse cx="250" cy="94" rx="8" ry="3" fill="#64748b" />
          <ellipse cx="250" cy="106" rx="8" ry="3" fill="#64748b" />

          {/* Node 4: Alert / Dispatch */}
          <rect x="315" y="75" width="50" height="50" rx="8" fill="#ffffff" className="dark:fill-[#0d131c]" stroke="#10b981" strokeWidth="1.2" />
          <circle cx="340" cy="100" r="5" fill="#10b981" />
        </svg>

        <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-white/80 dark:bg-black/60 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
          Fluxo de integração · Prévia
        </span>
      </div>
    );
  }

  if (project.id === 'operational-analytics-dashboard') {
    return (
      <div className="w-full h-44 sm:h-52 bg-slate-100 dark:bg-[#070b10] border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-center relative overflow-hidden group-hover:opacity-95 transition-opacity">
        <svg viewBox="0 0 400 200" className="w-full h-full p-5 opacity-85" preserveAspectRatio="xMidYMid meet">
          {/* Dashboard grid cards */}
          <rect x="40" y="35" width="95" height="42" rx="4" fill="#ffffff" className="dark:fill-[#0d131c]" stroke="#94a3b8" strokeWidth="0.75" />
          <line x1="50" y1="52" x2="80" y2="52" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="64" x2="110" y2="64" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

          <rect x="150" y="35" width="95" height="42" rx="4" fill="#ffffff" className="dark:fill-[#0d131c]" stroke="#94a3b8" strokeWidth="0.75" />
          <line x1="160" y1="52" x2="190" y2="52" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
          <line x1="160" y1="64" x2="220" y2="64" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

          <rect x="260" y="35" width="100" height="42" rx="4" fill="#ffffff" className="dark:fill-[#0d131c]" stroke="#94a3b8" strokeWidth="0.75" />
          <line x1="270" y1="52" x2="300" y2="52" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
          <line x1="270" y1="64" x2="330" y2="64" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

          {/* Lower Chart */}
          <rect x="40" y="90" width="320" height="75" rx="4" fill="#ffffff" className="dark:fill-[#0d131c]" stroke="#94a3b8" strokeWidth="0.75" />
          <path
            d="M 60 145 L 110 128 L 160 135 L 210 115 L 260 120 L 310 102 L 340 106"
            fill="none"
            stroke="#64748b"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-white/80 dark:bg-black/60 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
          Painel analítico · Prévia
        </span>
      </div>
    );
  }

  // Generic technical diagram preview for other projects
  return (
    <div className="w-full h-40 bg-slate-100 dark:bg-[#070b10] border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-center relative overflow-hidden group-hover:opacity-95 transition-opacity">
      <svg viewBox="0 0 300 120" className="w-full h-full p-4 opacity-75" preserveAspectRatio="xMidYMid meet">
        <line x1="30" y1="60" x2="270" y2="60" stroke="#64748b" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
        <rect x="45" y="40" width="40" height="40" rx="6" fill="#ffffff" className="dark:fill-[#0d131c]" stroke="#94a3b8" strokeWidth="0.75" />
        <rect x="130" y="40" width="40" height="40" rx="6" fill="#ffffff" className="dark:fill-[#0d131c]" stroke="#94a3b8" strokeWidth="0.75" />
        <rect x="215" y="40" width="40" height="40" rx="6" fill="#ffffff" className="dark:fill-[#0d131c]" stroke="#94a3b8" strokeWidth="0.75" />
        <path d="M 85 60 L 130 60" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)" />
        <path d="M 170 60 L 215 60" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)" />
      </svg>
      <span className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-white/80 dark:bg-black/60 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-800">
        Diagrama técnico provisório
      </span>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(project)}
      className="group cursor-pointer rounded-xl bg-white dark:bg-[#0d1219] border border-slate-200 dark:border-slate-800/80 overflow-hidden flex flex-col justify-between transition-all hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm"
    >
      <div>
        <ProjectVisualPreview project={project} />

        <div className="p-5">
          {/* Category */}
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {project.categoryLabel}
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mt-1">
            {project.title}
          </h3>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>
      </div>

      {/* Footer Specs & Action */}
      <div className="px-5 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono text-[11px]">
          {project.specs?.[0] ? (
            <span>{project.specs[0].label}: {project.specs[0].value}</span>
          ) : (
            <span>{project.techStack.slice(0, 2).join(' · ')}</span>
          )}
        </div>

        <span className="inline-flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          <span>Ver estudo</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};
