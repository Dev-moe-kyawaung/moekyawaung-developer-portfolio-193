import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Award, 
  ExternalLink,
  Layers,
  ArrowRightLeft,
  FileCheck,
  Film,
  FileDown,
  Sun,
  Moon,
  Compass,
  Globe,
  Command,
  PanelsTopLeft
} from 'lucide-react';
import { PROFILE_INFO } from '../data/timelineData';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  activeCount: number;
  totalCount: number;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  categories: string[];
  systemMode: 'documentary' | 'deep-inspection';
  setSystemMode: (mode: 'documentary' | 'deep-inspection') => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: 'dark' | 'blueprint' | 'light';
  setTheme: (t: 'dark' | 'blueprint' | 'light') => void;
  onOpenCompare: () => void;
  onOpenCertificates: () => void;
  onOpenReel: () => void;
  onOpenWhitepaper: () => void;
  experience: 'audit' | 'atlas' | 'ledger';
  setExperience: (experience: 'audit' | 'atlas' | 'ledger') => void;
  onOpenCommand: () => void;
}

const HERO_ROLES = [
  'Senior Android Architect',
  'Offline-First WAL Engineer',
  'Edge AI & TFLite Specialist',
  'Zero-Trust Systems Designer'
];

export const TimelineHeader: React.FC<HeaderProps> = ({
  activeCount,
  totalCount,
  selectedCategory,
  onSelectCategory,
  categories,
  systemMode,
  setSystemMode,
  language,
  setLanguage,
  theme,
  setTheme,
  onOpenCompare,
  onOpenCertificates,
  onOpenReel,
  onOpenWhitepaper,
  experience,
  setExperience,
  onOpenCommand
}) => {
  const t = TRANSLATIONS[language];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth typing effect
  useEffect(() => {
    const current = HERO_ROLES[roleIndex];
    const updateRate = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedRole.length < current.length) {
        setDisplayedRole(current.substring(0, displayedRole.length + 1));
      } else if (!isDeleting && displayedRole.length === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayedRole.length > 0) {
        setDisplayedRole(current.substring(0, displayedRole.length - 1));
      } else if (isDeleting && displayedRole.length === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % HERO_ROLES.length);
      }
    }, updateRate);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <header className="border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md sticky top-0 z-40 transition-colors">
      {/* Top telemetry bar */}
      <div className="border-b border-zinc-800/80 px-4 lg:px-8 py-2 text-xs font-mono text-zinc-400 flex flex-wrap items-center justify-between gap-3 bg-zinc-950">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t.systemAuditRecord}
          </span>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <span className="text-zinc-500 hidden sm:inline">ID: ARCH-MKA-2022-2026</span>
          <span className="text-zinc-700 hidden md:inline">|</span>
          <span className="text-zinc-500 hidden md:inline">KERNEL: REACT-19 // CLEAN-ARCH</span>
        </div>

        {/* Global Toolbar: Lang, Theme, Quick Tools */}
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          {/* Language Switcher */}
          <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded px-1.5 py-0.5">
            <Globe className="w-3 h-3 text-zinc-400 mr-1" />
            <button
              onClick={() => setLanguage('en')}
              className={`px-1.5 py-0.5 text-[10px] rounded transition ${language === 'en' ? 'bg-zinc-800 text-emerald-400 font-bold' : 'text-zinc-400'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('my')}
              className={`px-1.5 py-0.5 text-[10px] rounded transition ${language === 'my' ? 'bg-zinc-800 text-amber-400 font-bold' : 'text-zinc-400'}`}
            >
              မြန်မာ
            </button>
            <button
              onClick={() => setLanguage('th')}
              className={`px-1.5 py-0.5 text-[10px] rounded transition ${language === 'th' ? 'bg-zinc-800 text-sky-400 font-bold' : 'text-zinc-400'}`}
            >
              ไทย
            </button>
          </div>

          {/* Theme Palette Switcher */}
          <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded px-1.5 py-0.5">
            <button
              onClick={() => setTheme('dark')}
              className={`p-1 rounded text-[11px] transition ${theme === 'dark' ? 'bg-zinc-800 text-emerald-400' : 'text-zinc-500'}`}
              title="Obsidian Dark"
            >
              <Moon className="w-3 h-3" />
            </button>
            <button
              onClick={() => setTheme('blueprint')}
              className={`p-1 rounded text-[11px] transition ${theme === 'blueprint' ? 'bg-zinc-800 text-sky-400' : 'text-zinc-500'}`}
              title="Blueprint Cyan"
            >
              <Compass className="w-3 h-3" />
            </button>
            <button
              onClick={() => setTheme('light')}
              className={`p-1 rounded text-[11px] transition ${theme === 'light' ? 'bg-zinc-800 text-amber-400' : 'text-zinc-500'}`}
              title="Monochrome Paper"
            >
              <Sun className="w-3 h-3" />
            </button>
          </div>

          <span className="text-zinc-700 hidden sm:inline">|</span>

          <button
            onClick={onOpenCommand}
            className="hidden items-center gap-1 rounded border border-zinc-700 bg-zinc-900 px-2 py-1 font-mono text-[10px] text-zinc-400 transition hover:border-zinc-600 hover:text-zinc-100 sm:flex cursor-pointer"
            title="Open command palette (Ctrl/Cmd + K)"
          >
            <Command className="h-3 w-3 text-emerald-400" />
            <span>Command</span>
            <kbd className="ml-1 rounded bg-zinc-800 px-1 text-[9px] text-zinc-500">⌘K</kbd>
          </button>
          <button
            onClick={onOpenCommand}
            className="flex h-6 w-6 items-center justify-center rounded border border-zinc-700 bg-zinc-900 text-zinc-400 sm:hidden cursor-pointer"
            aria-label="Open portfolio command centre"
          >
            <Command className="h-3 w-3 text-emerald-400" />
          </button>

          {/* Gravatar verified badge */}
          <a 
            href={PROFILE_INFO.gravatarUrl} 
            target="_blank" 
            rel="noreferrer"
            className="text-amber-400 hover:text-amber-300 flex items-center gap-1 underline decoration-amber-500/40 text-[11px]"
          >
            Gravatar Verified
            <ExternalLink className="w-3 h-3 inline" />
          </a>
        </div>
      </div>

      {/* Main hero & bio bar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="relative group shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-900 shadow-xl ring-2 ring-zinc-800/80">
                <img 
                  src={PROFILE_INFO.avatar} 
                  alt={PROFILE_INFO.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778747384/image-1_f6zlmk.jpg';
                  }}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-zinc-950 flex items-center justify-center" title="Open to Work 🟢">
                <span className="sr-only">Active</span>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 flex items-center gap-2">
                  {PROFILE_INFO.name}
                </h1>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 text-emerald-400 border border-zinc-700 flex items-center gap-1 min-w-[200px]">
                  <span className="text-zinc-500">&gt;</span>
                  <span>{displayedRole}</span>
                  <span className="animate-pulse">_</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-zinc-400 mt-1.5 font-mono">
                <span className="flex items-center gap-1 text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  {PROFILE_INFO.location}
                </span>
                <span className="text-zinc-700 hidden sm:inline">•</span>
                <button
                  onClick={onOpenCertificates}
                  className="flex items-center gap-1 text-amber-300 hover:text-amber-200 underline decoration-amber-500/50 cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  {PROFILE_INFO.credentialsCount}
                </button>
              </div>

              <p className="text-xs text-zinc-400 mt-1 line-clamp-1 italic font-sans">
                "{PROFILE_INFO.philosophy}"
              </p>
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onOpenCompare}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 text-xs font-mono flex items-center gap-1.5 transition cursor-pointer"
            >
              <ArrowRightLeft className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.compareMilestones}</span>
            </button>

            <button
              onClick={onOpenCertificates}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 text-xs font-mono flex items-center gap-1.5 transition cursor-pointer"
            >
              <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.viewCertificates}</span>
            </button>

            <button
              onClick={onOpenReel}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 text-xs font-mono flex items-center gap-1.5 transition cursor-pointer"
            >
              <Film className="w-3.5 h-3.5 text-sky-400" />
              <span>Visual Reel</span>
            </button>

            <button
              onClick={onOpenWhitepaper}
              className="px-3 py-1.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-800/60 text-xs font-mono flex items-center gap-1.5 transition cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-400" />
              <span>PDF Whitepaper</span>
            </button>
          </div>
        </div>

        {/* Filter Pills & View Mode Bar */}
        <div className="mt-4 pt-4 border-t border-zinc-850 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full text-xs">
            <span className="text-zinc-500 font-mono text-[11px] mr-1 flex items-center gap-1">
              <Layers className="w-3 h-3" /> {t.stackFilter}:
            </span>
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-3 py-1 rounded-full text-xs font-mono transition cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-zinc-100 text-zinc-950 font-semibold'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              {t.allMilestones} ({totalCount})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-medium'
                    : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <div className="hidden items-center bg-zinc-900 border border-zinc-800 rounded p-0.5 lg:flex">
              <PanelsTopLeft className="ml-1 h-3 w-3 text-zinc-500" />
              <button
                onClick={() => setExperience('audit')}
                className={`px-2 py-0.5 text-[10px] rounded transition cursor-pointer ${experience === 'audit' ? 'bg-zinc-800 text-emerald-400 font-semibold' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Audit
              </button>
              <button
                onClick={() => setExperience('atlas')}
                className={`px-2 py-0.5 text-[10px] rounded transition cursor-pointer ${experience === 'atlas' ? 'bg-zinc-800 text-sky-400 font-semibold' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Atlas
              </button>
              <button
                onClick={() => setExperience('ledger')}
                className={`px-2 py-0.5 text-[10px] rounded transition cursor-pointer ${experience === 'ledger' ? 'bg-zinc-800 text-amber-400 font-semibold' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Ledger
              </button>
            </div>
            <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded px-1 py-0.5">
              <button
                onClick={() => setSystemMode('documentary')}
                className={`px-2 py-0.5 text-[11px] rounded transition cursor-pointer ${
                  systemMode === 'documentary' 
                    ? 'bg-zinc-800 text-emerald-400 font-semibold' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {t.documentary}
              </button>
              <button
                onClick={() => setSystemMode('deep-inspection')}
                className={`px-2 py-0.5 text-[11px] rounded transition cursor-pointer ${
                  systemMode === 'deep-inspection' 
                    ? 'bg-zinc-800 text-amber-400 font-semibold' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {t.deepTelemetry}
              </button>
            </div>
            <span className="text-zinc-500">
              {t.showing} <strong className="text-zinc-200">{activeCount}</strong> {t.ofRecords} {totalCount}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
