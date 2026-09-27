import { useState, useEffect } from 'react';
import { ARCHITECTURE_TIMELINE } from './data/timelineData';
import { Language, TRANSLATIONS } from './data/translations';
import { TimelineHeader } from './components/TimelineHeader';
import { TimelineScrubber } from './components/TimelineScrubber';
import { MilestoneCard } from './components/MilestoneCard';
import { AIAgenticAuditConsole } from './components/AIAgenticAuditConsole';
import { ArchitectureTopologyVisualizer } from './components/ArchitectureTopologyVisualizer';
import { ArchitecturePostmortems } from './components/ArchitecturePostmortems';
import { BioCredentialsSection } from './components/BioCredentialsSection';
import { ParticleConstellation } from './components/ParticleConstellation';
import { MilestoneComparisonModal } from './components/MilestoneComparisonModal';
import { CertificatesModal } from './components/CertificatesModal';
import { DocumentaryVideoModal } from './components/DocumentaryVideoModal';
import { PrintWhitepaperModal } from './components/PrintWhitepaperModal';
import { CommandPalette, ExperienceMode } from './components/CommandPalette';
import { CinematicAtlas, EngineeringLedger } from './components/ExperienceViews';
import { 
  GitCommit, 
  Info
} from 'lucide-react';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [systemMode, setSystemMode] = useState<'documentary' | 'deep-inspection'>('documentary');
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<'dark' | 'blueprint' | 'light'>('dark');
  const [experience, setExperience] = useState<ExperienceMode>('atlas');

  // Modal dialog states
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);
  const [isReelOpen, setIsReelOpen] = useState(false);
  const [isWhitepaperOpen, setIsWhitepaperOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  const t = TRANSLATIONS[language];

  // Filtered milestones based on stack
  const filteredMilestones = selectedCategory === 'all'
    ? ARCHITECTURE_TIMELINE
    : ARCHITECTURE_TIMELINE.filter(m => m.category === selectedCategory);

  // Available unique categories
  const categories = Array.from(new Set(ARCHITECTURE_TIMELINE.map(m => m.category)));

  // Ensure activeIndex is bounded
  const safeActiveIndex = Math.min(activeIndex, Math.max(0, filteredMilestones.length - 1));
  const activeMilestone = filteredMilestones[safeActiveIndex] || ARCHITECTURE_TIMELINE[0];

  // Auto-walkthrough scrubbing interval
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveIndex(prev => {
          if (prev >= filteredMilestones.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }, 4500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, filteredMilestones.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsCommandOpen(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Handle milestone selection from scrubber or ladder
  const handleSelectMilestone = (index: number) => {
    setActiveIndex(index);
    const targetEl = document.getElementById(`milestone-${filteredMilestones[index]?.id}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Determine theme background colors
  const themeContainerClasses = theme === 'blueprint'
    ? 'bg-slate-950 text-slate-100'
    : theme === 'light'
    ? 'bg-zinc-100 text-zinc-900'
    : 'bg-zinc-950 text-zinc-100';

  return (
    <div data-theme={theme} className={`theme-${theme} min-h-screen relative selection:bg-emerald-500/30 selection:text-emerald-200 font-sans antialiased transition-colors duration-500 ${themeContainerClasses}`}>
      {/* Calm ambient constellation particles */}
      <ParticleConstellation theme={theme} />

      {/* Sticky Top Header */}
      <TimelineHeader
        activeCount={filteredMilestones.length}
        totalCount={ARCHITECTURE_TIMELINE.length}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setActiveIndex(0);
        }}
        categories={categories}
        systemMode={systemMode}
        setSystemMode={setSystemMode}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenCertificates={() => setIsCertificatesOpen(true)}
        onOpenReel={() => setIsReelOpen(true)}
        onOpenWhitepaper={() => setIsWhitepaperOpen(true)}
        experience={experience}
        setExperience={setExperience}
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      <main className={`max-w-7xl mx-auto relative z-10 ${experience === 'atlas' ? 'py-0' : 'px-4 lg:px-8 py-8'}`}>
        {experience === 'audit' && <>
        {/* Documentary Narrative Context Bar */}
        <div className="mb-6 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 font-mono flex flex-col md:flex-row items-start md:items-center justify-between gap-4 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded bg-emerald-950/80 border border-emerald-800/80 text-emerald-400">
              <Info className="w-4 h-4" />
            </span>
            <span>
              {t.documentaryIntent}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-[11px] text-zinc-400">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Live Telemetry
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span> ADR Records
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span> AI Synthesized
            </span>
          </div>
        </div>

        {/* Interactive Scrubbing Console */}
        <TimelineScrubber
          milestones={filteredMilestones}
          activeIndex={safeActiveIndex}
          onSelectIndex={handleSelectMilestone}
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying(!isPlaying)}
        />

        {/* Interactive Topology Visualizer */}
        <ArchitectureTopologyVisualizer />

        {/* AI Agentic Audit & Synthesis Suite */}
        <div className="mb-12">
          <AIAgenticAuditConsole
            milestones={ARCHITECTURE_TIMELINE}
            activeMilestone={activeMilestone}
          />
        </div>

        {/* Chronological Project Ladder Narrative Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-emerald-400" />
              <h2 className="text-xl font-bold tracking-tight text-zinc-100 font-mono">
                {t.chronologicalLadder}
              </h2>
            </div>
            <div className="text-xs font-mono text-zinc-400 flex items-center gap-1">
              <span>{t.ladderOrder}</span>
            </div>
          </div>

          {/* Timeline Ladder Nodes */}
          <div className="relative pl-4 sm:pl-8 border-l border-zinc-800/80 space-y-10 mt-6">
            {filteredMilestones.map((milestone, idx) => {
              const isSelected = idx === safeActiveIndex;

              return (
                <div key={milestone.id} className="relative group">
                  {/* Timeline Commit Marker Pin on left ladder rule */}
                  <button
                    onClick={() => handleSelectMilestone(idx)}
                    aria-label={`Jump to ${milestone.year} ${milestone.quarter}`}
                    className={`absolute -left-[25px] sm:-left-[41px] top-6 w-6 h-6 rounded-full border-2 flex items-center justify-center transition cursor-pointer z-10 ${
                      isSelected
                        ? 'bg-emerald-400 border-zinc-950 ring-4 ring-emerald-500/20 scale-110'
                        : 'bg-zinc-900 border-zinc-700 text-zinc-500 hover:border-emerald-400'
                    }`}
                  >
                    <GitCommit className={`w-3 h-3 ${isSelected ? 'text-zinc-950 font-bold' : 'text-zinc-400'}`} />
                  </button>

                  {/* Milestone Card View */}
                  <MilestoneCard
                    milestone={milestone}
                    isActive={isSelected}
                    systemMode={systemMode}
                    onSelect={() => handleSelectMilestone(idx)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Architectural Postmortems Archive */}
        <div className="mt-14">
          <ArchitecturePostmortems />
        </div>

        {/* Bio, Credential and Identity Verification Section */}
        <BioCredentialsSection />
        </>}

        {experience === 'atlas' && <>
          <CinematicAtlas
            milestones={filteredMilestones}
            activeIndex={safeActiveIndex}
            onSelectIndex={handleSelectMilestone}
            onOpenCertificates={() => setIsCertificatesOpen(true)}
            onOpenReel={() => setIsReelOpen(true)}
            onOpenCompare={() => setIsCompareOpen(true)}
          />
          <div className="px-4 pb-14 pt-14 lg:px-8">
            <AIAgenticAuditConsole
              milestones={ARCHITECTURE_TIMELINE}
              activeMilestone={activeMilestone}
            />
            <div className="mt-14">
              <ArchitecturePostmortems />
            </div>
            <BioCredentialsSection />
          </div>
        </>}

        {experience === 'ledger' && <>
          <EngineeringLedger
            milestones={filteredMilestones}
            activeIndex={safeActiveIndex}
            onSelectIndex={handleSelectMilestone}
            onOpenCertificates={() => setIsCertificatesOpen(true)}
            onOpenReel={() => setIsReelOpen(true)}
            onOpenCompare={() => setIsCompareOpen(true)}
          />
          <div className="mt-14">
            <AIAgenticAuditConsole
              milestones={ARCHITECTURE_TIMELINE}
              activeMilestone={activeMilestone}
            />
          </div>
          <div className="mt-14">
            <ArchitecturePostmortems />
          </div>
          <BioCredentialsSection />
        </>}
      </main>

      {/* Modals & Dialogs */}
      <MilestoneComparisonModal
        milestones={ARCHITECTURE_TIMELINE}
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
      />

      <CertificatesModal
        isOpen={isCertificatesOpen}
        onClose={() => setIsCertificatesOpen(false)}
      />

      <DocumentaryVideoModal
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
      />

      <PrintWhitepaperModal
        isOpen={isWhitepaperOpen}
        onClose={() => setIsWhitepaperOpen(false)}
      />

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        milestones={ARCHITECTURE_TIMELINE}
        onSelectMilestone={(index) => {
          setExperience('audit');
          window.setTimeout(() => handleSelectMilestone(index), 0);
        }}
        onSetExperience={setExperience}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenCertificates={() => setIsCertificatesOpen(true)}
        onOpenReel={() => setIsReelOpen(true)}
        onOpenWhitepaper={() => setIsWhitepaperOpen(true)}
      />
    </div>
  );
}

export default App;
