import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProjectCatalog } from './components/ProjectCatalog';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { SectionId, Project } from './types';
import { PERSONAL_INFO } from './data/portfolioData';
import { Menu, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('inicio');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Theme synchronization
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#0a0e14] text-slate-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-[#fafafa] text-slate-900 antialiased selection:bg-emerald-500/20 selection:text-emerald-700';
    }
  }, [isDark]);

  // Scroll spy to detect active section automatically
  useEffect(() => {
    const sectionIds: SectionId[] = ['inicio', 'projetos', 'competencias', 'experiencia', 'sobre-mim', 'contato'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

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
    <div className="min-h-screen flex bg-[#fafafa] dark:bg-[#0a0e14] text-slate-900 dark:text-slate-100 transition-colors">
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
          {/* Mobile-Only Minimal Header Bar */}
          <div className="md:hidden flex items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
            <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </span>
            <button
              onClick={() => setIsMobileOpen(true)}
              className="p-1.5 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-800"
              title="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* SECTION 1: INÍCIO (Minimal, Clean Hero) */}
          <section id="inicio" className="pt-6 sm:pt-14 pb-16 scroll-mt-20">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                {PERSONAL_INFO.headline}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {PERSONAL_INFO.subheadline}
              </p>

              {/* Single Primary Action Button in Highlight */}
              <div className="pt-2">
                <button
                  onClick={() => handleNavigate('projetos')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
                >
                  <span>Ver projetos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </section>

          {/* SECTION 2: PROJETOS (Portfolio Cards Grid) */}
          <section id="projetos" className="py-12 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-6">
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Projetos
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Estudos de caso em otimização matemática, fluxos de automação e modelagem de dados.
              </p>
            </div>

            <ProjectCatalog onSelectProject={(project) => setSelectedProject(project)} />
          </section>

          {/* SECTION 3: COMPETÊNCIAS */}
          <SkillsSection />

          {/* SECTION 4: EXPERIÊNCIA PROFISSIONAL */}
          <ExperienceSection />

          {/* SECTION 5: SOBRE MIM */}
          <AboutSection />

          {/* SECTION 6: CONTATO */}
          <ContactSection />

          {/* Clean Editorial Footer */}
          <footer className="py-10 mt-14 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 dark:text-slate-500">
            <div>
              {PERSONAL_INFO.name} · {PERSONAL_INFO.role}
            </div>
            <div>
              <a href="#inicio" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                Voltar ao topo ↑
              </a>
            </div>
          </footer>
        </div>
      </main>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
