import React from 'react';
import {
  Home,
  BarChart2,
  User,
  Mail,
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Code
} from 'lucide-react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

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

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onNavigate,
  isCollapsed,
  onToggleCollapse,
  isMobileOpen,
  onCloseMobile
}) => {
  const { t } = useLanguage();

  const navItems = [
    { id: 'inicio' as SectionId, label: t.nav.inicio, icon: Home },
    { id: 'projetos' as SectionId, label: t.nav.projetos, icon: BarChart2 },
    { id: 'sobre-mim' as SectionId, label: t.nav.sobreMim, icon: User },
    { id: 'contato' as SectionId, label: t.nav.contato, icon: Mail }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-[#1B2933]/50 backdrop-blur-xs z-40 md:hidden transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      {/* Structural Integrated Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 transition-all duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          ${isCollapsed ? 'md:w-20' : 'md:w-64'}
          w-72 flex flex-col justify-between
          bg-[#FFFFFF] dark:bg-[#283B47] text-[#223747] dark:text-[#F5F2EC]
          border-r border-[#E3DED7] dark:border-[#364C59]
        `}
      >
        {/* Top Header & Brand */}
        <div>
          {isCollapsed ? (
            /* Collapsed Header: Centered & Unclipped Icon Button */
            <div className="py-5 px-2 flex justify-center border-b border-[#E3DED7] dark:border-[#364C59]">
              <button
                type="button"
                onClick={onToggleCollapse}
                className="w-11 h-11 rounded-xl bg-[#F7F5F1] dark:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59] flex items-center justify-center text-[#223747] dark:text-[#F5F2EC] hover:border-[#E67E67] dark:hover:border-[#F08F79] transition-all group relative shadow-2xs"
                title={t.nav.expand}
              >
                <Code className="w-5 h-5 text-[#E67E67] dark:text-[#F08F79] group-hover:scale-110 transition-transform" />
                <span className="absolute left-full ml-2.5 px-2.5 py-1 bg-[#223747] text-[#F5F2EC] dark:bg-[#1B2933] text-[11px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md font-mono">
                  {t.nav.expand}
                </span>
              </button>
            </div>
          ) : (
            /* Expanded Header */
            <div className="p-5 border-b border-[#E3DED7] dark:border-[#364C59]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F5F1] dark:bg-[#1B2933] border border-[#E3DED7] dark:border-[#364C59] flex items-center justify-center text-[#223747] dark:text-[#F5F2EC] shrink-0 shadow-2xs">
                    <Code className="w-5 h-5 text-[#E67E67] dark:text-[#F08F79]" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-sm font-bold text-[#223747] dark:text-[#F5F2EC] tracking-tight truncate">
                      {PERSONAL_INFO.shortName}
                    </span>
                    <span className="block text-[11px] text-[#5B7382] dark:text-[#9EB3BF] truncate font-mono">
                      {PERSONAL_INFO.shortRole}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onToggleCollapse}
                  className="hidden md:flex p-1.5 text-[#5B7382] hover:text-[#223747] dark:text-[#9EB3BF] dark:hover:text-[#F5F2EC] rounded-md transition-colors shrink-0"
                  title={t.nav.collapse}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Navigation Items */}
          <nav className="p-3 sm:p-4 space-y-1">
            {navItems.map((item) => {
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
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all group relative text-left
                    ${
                      isActive
                        ? 'text-[#E67E67] dark:text-[#F08F79] bg-[#E67E67]/10 dark:bg-[#F08F79]/15 font-bold shadow-2xs'
                        : 'text-[#5B7382] dark:text-[#9EB3BF] hover:text-[#223747] dark:hover:text-[#F5F2EC] hover:bg-[#F7F5F1] dark:hover:bg-[#1B2933]/50'
                    }
                    ${isCollapsed ? 'justify-center px-0' : ''}
                  `}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? 'text-[#E67E67] dark:text-[#F08F79]' : 'text-[#5B7382] dark:text-[#9EB3BF] group-hover:text-[#223747] dark:group-hover:text-[#F5F2EC]'
                    }`}
                  />

                  {!isCollapsed && (
                    <span className="truncate">{item.label}</span>
                  )}

                  {/* Tooltip on collapsed state */}
                  {isCollapsed && (
                    <span className="absolute left-full ml-2.5 px-2.5 py-1 bg-[#223747] text-[#F5F2EC] dark:bg-[#1B2933] text-[11px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md">
                      {item.label}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Bar: Quiet Social Links */}
        <div className="p-4 border-t border-[#E3DED7] dark:border-[#364C59]">
          {!isCollapsed ? (
            <div className="flex items-center justify-center gap-3 text-xs text-[#5B7382] dark:text-[#9EB3BF] font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E67E67] dark:hover:text-[#F08F79] transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-[#E3DED7] dark:text-[#364C59]">·</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E67E67] dark:hover:text-[#F08F79] transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-[#5B7382] hover:text-[#E67E67] dark:text-[#9EB3BF] dark:hover:text-[#F08F79] transition-colors rounded hover:bg-[#F7F5F1] dark:hover:bg-[#1B2933]"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-[#5B7382] hover:text-[#E67E67] dark:text-[#9EB3BF] dark:hover:text-[#F08F79] transition-colors rounded hover:bg-[#F7F5F1] dark:hover:bg-[#1B2933]"
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
