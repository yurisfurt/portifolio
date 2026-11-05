import React from 'react';
import {
  Home,
  BarChart2,
  Layers,
  User,
  Mail,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Github,
  Linkedin,
  Code,
  Globe
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
  isDark,
  onToggleTheme,
  isMobileOpen,
  onCloseMobile
}) => {
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { id: 'inicio' as SectionId, label: t.nav.inicio, icon: Home },
    { id: 'projetos' as SectionId, label: t.nav.projetos, icon: BarChart2 },
    { id: 'competencias' as SectionId, label: t.nav.competencias, icon: Layers },
    { id: 'sobre-mim' as SectionId, label: t.nav.sobreMim, icon: User },
    { id: 'contato' as SectionId, label: t.nav.contato, icon: Mail }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-[#243746]/40 backdrop-blur-xs z-40 md:hidden transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      {/* Structural Integrated Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 transition-all duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          ${isCollapsed ? 'md:w-20' : 'md:w-64'}
          w-72 flex flex-col justify-between
          bg-[#FFFFFF] dark:bg-[#2D3B44] text-[#243746] dark:text-[#E7E9E6]
          border-r border-[#DCE4E1] dark:border-[#344A52]
        `}
      >
        {/* Top Header & Brand */}
        <div className="p-5">
          <div className="flex items-center justify-between pb-5 border-b border-[#DCE4E1] dark:border-[#344A52]">
            <div className="flex items-center gap-3 overflow-hidden">
              {/* Minimalist Petrol Badge */}
              <div className="w-8 h-8 rounded-lg bg-[#F5F3EF] dark:bg-[#202C34] border border-[#DCE4E1] dark:border-[#344A52] flex items-center justify-center text-[#243746] dark:text-[#E7E9E6] shrink-0">
                <Code className="w-4 h-4 text-[#668B91] dark:text-[#89ABB0]" />
              </div>

              {!isCollapsed && (
                <div className="min-w-0 transition-opacity duration-200">
                  <span className="block text-sm font-bold text-[#243746] dark:text-[#E7E9E6] tracking-tight truncate">
                    {PERSONAL_INFO.shortName}
                  </span>
                  <span className="block text-[11px] text-[#668B91] dark:text-[#89ABB0] truncate font-mono">
                    {PERSONAL_INFO.shortRole}
                  </span>
                </div>
              )}
            </div>

            {/* Desktop Collapse Toggle */}
            <button
              onClick={onToggleCollapse}
              className="hidden md:flex p-1.5 text-[#668B91] hover:text-[#243746] dark:text-[#89ABB0] dark:hover:text-[#E7E9E6] rounded-md transition-colors"
              title={isCollapsed ? t.nav.expand : t.nav.collapse}
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* Navigation Items (Without Experiência) */}
          <nav className="mt-5 space-y-1">
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
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all group relative text-left
                    ${
                      isActive
                        ? 'text-[#243746] dark:text-[#E7E9E6] bg-[#DCE4E1]/60 dark:bg-[#344A52] font-semibold'
                        : 'text-[#668B91] dark:text-[#89ABB0] hover:text-[#243746] dark:hover:text-[#E7E9E6] hover:bg-[#F5F3EF] dark:hover:bg-[#202C34]/40'
                    }
                    ${isCollapsed ? 'justify-center px-0' : ''}
                  `}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? 'text-[#243746] dark:text-[#E7E9E6]' : 'text-[#668B91] dark:text-[#89ABB0] group-hover:text-[#243746] dark:group-hover:text-[#E7E9E6]'
                    }`}
                  />

                  {!isCollapsed && (
                    <span className="truncate">{item.label}</span>
                  )}

                  {/* Tooltip on collapsed state */}
                  {isCollapsed && (
                    <span className="absolute left-full ml-2 px-2.5 py-1 bg-[#243746] text-[#E7E9E6] dark:bg-[#202C34] text-[11px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md">
                      {item.label}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Bar: Language Switcher, Theme & Socials */}
        <div className="p-5 border-t border-[#DCE4E1] dark:border-[#344A52] space-y-3">
          {/* Language Switcher Button (PT / EN) */}
          <button
            onClick={toggleLanguage}
            className={`w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-xs font-mono font-medium text-[#243746] dark:text-[#E7E9E6] hover:bg-[#F5F3EF] dark:hover:bg-[#202C34]/50 border border-[#DCE4E1] dark:border-[#344A52] transition-colors
              ${isCollapsed ? 'justify-center px-0' : 'justify-between'}
            `}
            title={t.nav.switchLang}
          >
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#668B91] dark:text-[#89ABB0] shrink-0" />
              {!isCollapsed && <span>{language === 'pt' ? 'Português' : 'English'}</span>}
            </div>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#DCE4E1]/70 dark:bg-[#344A52] uppercase font-bold text-[#243746] dark:text-[#E7E9E6]">
              {language.toUpperCase()}
            </span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-[#668B91] dark:text-[#89ABB0] hover:text-[#243746] dark:hover:text-[#E7E9E6] hover:bg-[#F5F3EF] dark:hover:bg-[#202C34]/40 transition-colors
              ${isCollapsed ? 'justify-center px-0' : ''}
            `}
            title={isDark ? t.nav.themeLight : t.nav.themeDark}
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-[#89ABB0] shrink-0" />
                {!isCollapsed && <span>{t.nav.themeLight}</span>}
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-[#668B91] shrink-0" />
                {!isCollapsed && <span>{t.nav.themeDark}</span>}
              </>
            )}
          </button>

          {/* Social Links */}
          {!isCollapsed ? (
            <div className="flex items-center gap-3 px-2 pt-1 text-xs text-[#668B91] dark:text-[#89ABB0] font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#243746] dark:hover:text-[#E7E9E6] transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-[#DCE4E1] dark:text-[#344A52]">·</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#243746] dark:hover:text-[#E7E9E6] transition-colors flex items-center gap-1.5"
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
                className="p-1.5 text-[#668B91] hover:text-[#243746] dark:text-[#89ABB0] dark:hover:text-[#E7E9E6] transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-[#668B91] hover:text-[#243746] dark:text-[#89ABB0] dark:hover:text-[#E7E9E6] transition-colors"
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
