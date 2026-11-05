import React from 'react';
import {
  Home,
  BarChart2,
  Layers,
  Briefcase,
  User,
  Mail,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Github,
  Linkedin,
  Code
} from 'lucide-react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SidebarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Início', icon: Home },
  { id: 'projetos', label: 'Projetos', icon: BarChart2 },
  { id: 'competencias', label: 'Competências', icon: Layers },
  { id: 'experiencia', label: 'Experiência', icon: Briefcase },
  { id: 'sobre-mim', label: 'Sobre mim', icon: User },
  { id: 'contato', label: 'Contato', icon: Mail }
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onNavigate,
  isCollapsed,
  onToggleCollapse,
  isDark,
  onToggleTheme,
  isMobileOpen,
  onCloseMobile
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      {/* Structural Integrated Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 transition-all duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          ${isCollapsed ? 'md:w-20' : 'md:w-64'}
          w-72 flex flex-col justify-between
          bg-white dark:bg-[#0c1017] text-slate-800 dark:text-slate-200
          border-r border-slate-200 dark:border-slate-800/80
        `}
      >
        {/* Top Header & Brand */}
        <div className="p-5">
          <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800/80">
            <div className="flex items-center gap-3 overflow-hidden">
              {/* Minimal Code Badge */}
              <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0">
                <Code className="w-4 h-4" />
              </div>

              {!isCollapsed && (
                <div className="min-w-0 transition-opacity duration-200">
                  <span className="block text-sm font-bold text-slate-900 dark:text-white tracking-tight truncate">
                    {PERSONAL_INFO.name}
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 truncate font-mono">
                    {PERSONAL_INFO.role}
                  </span>
                </div>
              )}
            </div>

            {/* Desktop Collapse Toggle */}
            <button
              onClick={onToggleCollapse}
              className="hidden md:flex p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-md transition-colors"
              title={isCollapsed ? 'Expandir navegação' : 'Recolher navegação'}
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="mt-5 space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onCloseMobile();
                  }}
                  title={isCollapsed ? item.label : undefined}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all group relative text-left
                    ${
                      isActive
                        ? 'text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-900/60 font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/60 dark:hover:bg-slate-900/30'
                    }
                    ${isCollapsed ? 'justify-center px-0' : ''}
                  `}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300'
                    }`}
                  />

                  {!isCollapsed && (
                    <span className="truncate">{item.label}</span>
                  )}

                  {/* Tooltip on collapsed state */}
                  {isCollapsed && (
                    <span className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-slate-100 text-[11px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md">
                      {item.label}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Bar: Theme & Socials */}
        <div className="p-5 border-t border-slate-200 dark:border-slate-800/80 space-y-3">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900/40 transition-colors
              ${isCollapsed ? 'justify-center px-0' : ''}
            `}
            title={isDark ? 'Tema claro' : 'Tema escuro'}
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                {!isCollapsed && <span>Tema claro</span>}
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-slate-500 shrink-0" />
                {!isCollapsed && <span>Tema escuro</span>}
              </>
            )}
          </button>

          {/* Social Links */}
          {!isCollapsed ? (
            <div className="flex items-center gap-3 px-2 pt-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
