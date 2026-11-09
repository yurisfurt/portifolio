import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProjectCatalog } from './components/ProjectCatalog';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { TopControls } from './components/TopControls';
import { SectionId, Project } from './types';
import { PERSONAL_INFO } from './data/portfolioData';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Menu, ArrowRight } from 'lucide-react';

function PortfolioContent() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<SectionId>('inicio');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved === 'dark';
    }
    // Default: light mode as requested
    return false;
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Theme synchronization and persistence
  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#1B2933] text-[#F5F2EC] antialiased selection:bg-[#F08F79]/20 selection:text-[#F5F2EC]';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-[#F7F5F1] text-[#223747] antialiased selection:bg-[#E67E67]/20 selection:text-[#223747]';
    }
  }, [isDark]);

  // Scroll spy for active section
  useEffect(() => {
    const sectionIds: SectionId[] = ['inicio', 'projetos', 'sobre-mim', 'contato'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex bg-[#F7F5F1] dark:bg-[#1B2933] text-[#223747] dark:text-[#F5F2EC] transition-colors relative">
      {/* Top Right Controls: PT/EN & Light/Dark Theme Switch */}
      <TopControls
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* Structural Sidebar Integrated into Left Edge */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        isMobileOpen={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
      />

      {/* Main Content Area */}
      <main
        className={`flex-1 transition-all duration-300 ease-in-out min-w-0
          ${isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}
          px-6 sm:px-12 lg:px-16 py-8 sm:py-12
        `}
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Mobile-Only Header Bar */}
          <div className="md:hidden flex items-center justify-between pb-4 mb-6 border-b border-[#E3DED7] dark:border-[#364C59]">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/foto_linda_d96a6bf9.jpg"
                alt="Yuri Furtwaengler"
                className="w-9 h-9 rounded-full object-cover border border-[#E3DED7] dark:border-[#364C59]"
              />
              <div>
                <span className="block text-sm font-bold tracking-tight text-[#223747] dark:text-[#F5F2EC]">
                  {PERSONAL_INFO.shortName}
                </span>
                <span className="block text-[10px] font-mono text-[#5B7382] dark:text-[#9EB3BF]">
                  Engenheiro de Produção
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsMobileOpen(true)}
              className="p-1.5 text-[#223747] dark:text-[#F5F2EC] rounded-md border border-[#E3DED7] dark:border-[#364C59] bg-[#FFFFFF] dark:bg-[#283B47]"
              title="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* SECTION 1: INÍCIO (Editorial Minimal Hero with Yuri's Photo, Name & Profession) */}
          <section id="inicio" className="pt-4 sm:pt-10 pb-16 scroll-mt-20">
            <div className="space-y-6">
              {/* Profile Card / Header with Yuri's Photo, Name & Profession */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#283B47] border border-[#E3DED7] dark:border-[#364C59] shadow-2xs">
                <div className="relative shrink-0">
                  <img
                    src="/assets/aistudio/foto_linda_d96a6bf9.jpg"
                    alt={PERSONAL_INFO.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#E3DED7] dark:border-[#364C59] shadow-xs"
                  />
                  <div
                    className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#E5A94C] dark:bg-[#E8B665] border-2 border-[#FFFFFF] dark:border-[#283B47]"
                    title="Disponível para projetos"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#E67E67] dark:text-[#F08F79] font-semibold">
                    Portfólio Profissional
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#223747] dark:text-[#F5F2EC]">
                    {PERSONAL_INFO.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono font-medium text-[#223747]/90 dark:text-[#F5F2EC]/90">
                    {PERSONAL_INFO.role}
                  </p>
                  <p className="text-[11px] font-mono text-[#5B7382] dark:text-[#9EB3BF]">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Main Headline & Statement */}
              <div className="max-w-2xl space-y-4 pt-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#223747] dark:text-[#F5F2EC] tracking-tight leading-[1.12]">
                  {t.hero.headline}
                </h1>

                <p className="text-base sm:text-lg text-[#5B7382] dark:text-[#9EB3BF] leading-relaxed">
                  {t.hero.subheadline}
                </p>

                {/* Single Primary Action Button in Coral Accent */}
                <div className="pt-2">
                  <button
                    onClick={() => handleNavigate('projetos')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E67E67] hover:bg-[#d66b54] dark:bg-[#F08F79] dark:hover:bg-[#fc9f8a] text-white dark:text-[#1B2933] text-xs font-bold rounded-lg transition-colors shadow-xs"
                  >
                    <span>{t.hero.ctaProjects}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: PROJETOS (3 Primary Projects + Demais Trabalhos List) */}
          <section id="projetos" className="py-12 border-t border-[#E3DED7] dark:border-[#364C59] scroll-mt-6">
            <ProjectCatalog onSelectProject={(project) => setSelectedProject(project)} />
          </section>

          {/* SECTION 3: SOBRE MIM (With Presentative Education and Merged Competencies) */}
          <AboutSection />

          {/* SECTION 4: CONTATO */}
          <ContactSection />

          {/* Clean Editorial Footer */}
          <footer className="py-10 mt-14 border-t border-[#E3DED7] dark:border-[#364C59] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#5B7382] dark:text-[#9EB3BF]">
            <div>
              {PERSONAL_INFO.shortName} · {t.footer.role}
            </div>
            <div>
              <a href="#inicio" className="hover:text-[#E67E67] dark:hover:text-[#F08F79] transition-colors">
                {t.footer.backToTop}
              </a>
            </div>
          </footer>
        </div>
      </main>

      {/* Case Study Modal with Embedded Rastrigin 3D and Defesa Civil Dashboard */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
