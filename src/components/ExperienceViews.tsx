import React, { useMemo, useState } from 'react';
import { Milestone, PROFILE_INFO } from '../data/timelineData';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ChevronDown,
  ChevronUp,
  CircleDot,
  Clock3,
  Code2,
  FileCheck2,
  Film,
  GitBranch,
  Layers3,
  Zap
} from 'lucide-react';

interface PremiumViewProps {
  milestones: Milestone[];
  activeIndex: number;
  onSelectIndex: (index: number) => void;
  onOpenCertificates: () => void;
  onOpenReel: () => void;
  onOpenCompare: () => void;
}

const nextIndex = (index: number, length: number) => (index + 1) % length;
const previousIndex = (index: number, length: number) => (index - 1 + length) % length;

export const CinematicAtlas: React.FC<PremiumViewProps> = ({
  milestones,
  activeIndex,
  onSelectIndex,
  onOpenCertificates,
  onOpenReel,
  onOpenCompare
}) => {
  const active = milestones[activeIndex] || milestones[0];

  return (
    <div className="space-y-14">
      <section className="relative min-h-[620px] overflow-hidden border-y border-zinc-800 bg-zinc-950 sm:min-h-[680px]">
        <img
          src={PROFILE_INFO.bannerImage}
          alt="Moe Kyaw Aung visual architecture documentary"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-zinc-950/30" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-4 pb-10 pt-28 lg:px-8 sm:min-h-[680px] sm:pb-14">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-emerald-400">
              MKA / ARCHITECTURE ATLAS / 2022-2026
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Build systems that stay calm when the world gets noisy.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              A cinematic field record of mobile, cloud, security, and edge-AI architecture from Tachileik to Bangkok.
              Each chapter documents a boundary made explicit, a failure mode removed, and an outcome measured.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById('atlas-chapters')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-emerald-400 px-4 py-2.5 font-mono text-xs font-bold text-zinc-950 transition hover:bg-emerald-300 cursor-pointer"
              >
                Explore the evolution
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={onOpenReel}
                className="inline-flex items-center gap-2 border border-zinc-500/70 bg-zinc-950/20 px-4 py-2.5 font-mono text-xs font-semibold text-zinc-100 transition hover:border-zinc-300 cursor-pointer"
              >
                <Film className="h-3.5 w-3.5 text-sky-300" />
                Watch visual reel
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="atlas-chapters" className="scroll-mt-24">
        <div className="border-b border-zinc-800 pb-5 sm:flex sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">Selected chapter</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
              Architecture as a narrative, not a changelog.
            </h2>
          </div>
          <button
            onClick={onOpenCompare}
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-amber-400 hover:text-amber-300 sm:mt-0 cursor-pointer"
          >
            <GitBranch className="h-3.5 w-3.5" />
            Compare decision records
            <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>

        <div className="mt-6 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative min-h-[360px] overflow-hidden bg-zinc-900 sm:min-h-[440px]">
            {active.image && (
              <img
                key={active.id}
                src={active.image}
                alt={active.title}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 animate-[softReveal_700ms_ease-out]"
              />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/25 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 font-mono text-xs text-zinc-200">
              <div className="text-emerald-400">{active.year} / {active.quarter} / {active.tag}</div>
              <div className="mt-1 text-zinc-400">Commit snapshot: {active.commitHash}</div>
            </div>
          </div>

          <article className="flex flex-col justify-between border-t border-zinc-800 pt-5 lg:border-t-0 lg:pt-0">
            <div>
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                <span className="text-amber-400">{active.category}</span>
                <span className="text-zinc-700">/</span>
                <span>{active.status} system</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                {active.title}
              </h3>
              <p className="mt-3 font-mono text-xs leading-relaxed text-zinc-400 sm:text-sm">
                {active.subtitle}
              </p>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                {active.summary}
              </p>
              <div className="mt-6 border-l-2 border-emerald-400 pl-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">Architecture decision</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300">{active.decisionDriver}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-5">
              <div className="flex flex-wrap gap-1.5">
                {active.stack.slice(0, 5).map((item) => (
                  <span key={item} className="font-mono text-[10px] text-zinc-400">{item}</span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectIndex(previousIndex(activeIndex, milestones.length))}
                  className="p-2 text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-100 cursor-pointer"
                  aria-label="Previous chapter"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <span className="font-mono text-xs text-zinc-500">{String(activeIndex + 1).padStart(2, '0')} / {String(milestones.length).padStart(2, '0')}</span>
                <button
                  onClick={() => onSelectIndex(nextIndex(activeIndex, milestones.length))}
                  className="p-2 text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-100 cursor-pointer"
                  aria-label="Next chapter"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-8 grid gap-x-6 border-t border-zinc-800 pt-5 sm:grid-cols-2 lg:grid-cols-4">
          {active.metrics.map((metric) => (
            <div key={metric.label} className="py-3 first:pt-0 sm:first:pt-3">
              <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">{metric.label}</div>
              <div className="mt-1 text-sm font-semibold text-zinc-200">{metric.after}</div>
              <div className="mt-1 font-mono text-xs text-emerald-400">{metric.delta}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-800 py-8 sm:py-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Chapter index</p>
            <h2 className="mt-2 text-xl font-bold text-zinc-100">Seven milestones. One continuous practice.</h2>
          </div>
          <button
            onClick={onOpenCertificates}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-amber-400 hover:text-amber-300 cursor-pointer"
          >
            <FileCheck2 className="h-3.5 w-3.5" />
            Inspect 82+ verified credentials
            <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>
        <div className="mt-6 flex overflow-x-auto border-t border-zinc-800">
          {milestones.map((milestone, index) => (
            <button
              key={milestone.id}
              onClick={() => onSelectIndex(index)}
              className={`min-w-[172px] border-r border-zinc-800 px-4 py-4 text-left transition cursor-pointer last:border-r-0 ${
                index === activeIndex ? 'bg-emerald-500/10' : 'hover:bg-zinc-900/70'
              }`}
            >
              <div className={`font-mono text-xs ${index === activeIndex ? 'text-emerald-400' : 'text-zinc-500'}`}>
                {milestone.year} {milestone.quarter}
              </div>
              <div className="mt-2 text-xs font-semibold leading-snug text-zinc-200">{milestone.title}</div>
              <div className="mt-2 font-mono text-[10px] text-zinc-500">{milestone.commitHash}</div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export const EngineeringLedger: React.FC<PremiumViewProps> = ({
  milestones,
  activeIndex,
  onSelectIndex,
  onOpenCertificates,
  onOpenReel,
  onOpenCompare
}) => {
  const [openId, setOpenId] = useState<string>(milestones[activeIndex]?.id || milestones[0]?.id || '');
  const totalImpact = useMemo(
    () => milestones.flatMap((milestone) => milestone.metrics).filter((metric) => metric.positive).length,
    [milestones]
  );

  return (
    <div className="space-y-10">
      <section className="border-y border-zinc-800 py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400">Engineering ledger / audit edition</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] text-zinc-100 sm:text-5xl">
              The decisions behind the delivery.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              A research-oriented reading mode for executives, reviewers, and architecture interview panels. Every line carries context,
              constraints, risk posture, and a measurable production signal.
            </p>
          </div>
          <div className="border-l border-zinc-800 pl-5 font-mono text-xs text-zinc-400">
            <div className="flex justify-between border-b border-zinc-800 py-2"><span>Decision records</span><strong className="text-zinc-100">{milestones.length}</strong></div>
            <div className="flex justify-between border-b border-zinc-800 py-2"><span>Measured wins</span><strong className="text-emerald-400">{totalImpact}</strong></div>
            <div className="flex justify-between py-2"><span>Verified credentials</span><button onClick={onOpenCertificates} className="text-amber-400 hover:text-amber-300 cursor-pointer">82+</button></div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4 border-b border-zinc-800 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Layers3 className="h-4 w-4 text-emerald-400" />
            <h3 className="font-mono text-sm font-bold text-zinc-100">DECISION LEDGER</h3>
          </div>
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <button onClick={onOpenCompare} className="text-amber-400 hover:text-amber-300 cursor-pointer">Compare ADRs</button>
            <button onClick={onOpenReel} className="text-sky-400 hover:text-sky-300 cursor-pointer">Visual reference reel</button>
          </div>
        </div>

        <div className="divide-y divide-zinc-800">
          {milestones.map((milestone, index) => {
            const isOpen = milestone.id === openId;
            const isActive = index === activeIndex;

            return (
              <article key={milestone.id} className={`transition ${isActive ? 'bg-emerald-500/5' : ''}`}>
                <button
                  onClick={() => {
                    setOpenId(isOpen ? '' : milestone.id);
                    onSelectIndex(index);
                  }}
                  className="grid w-full grid-cols-[72px_1fr_auto] gap-4 py-5 text-left sm:grid-cols-[110px_1fr_175px_auto] cursor-pointer"
                >
                  <div className="font-mono text-xs text-emerald-400">{milestone.year}<span className="block text-zinc-500">{milestone.quarter}</span></div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-bold text-zinc-100 sm:text-base">{milestone.title}</h4>
                      {isActive && <CircleDot className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />}
                    </div>
                    <p className="mt-1 line-clamp-1 text-xs text-zinc-500 sm:text-sm">{milestone.subtitle}</p>
                  </div>
                  <div className="hidden font-mono text-[11px] text-zinc-500 sm:block">
                    <span className="text-amber-400">{milestone.commitHash}</span>
                    <span className="mt-1 block">{milestone.category}</span>
                  </div>
                  {isOpen ? <ChevronUp className="h-4 w-4 text-zinc-500" /> : <ChevronDown className="h-4 w-4 text-zinc-500" />}
                </button>

                {isOpen && (
                  <div className="grid gap-6 border-t border-zinc-800 py-5 sm:grid-cols-[1.15fr_0.85fr] animate-[softReveal_280ms_ease-out]">
                    <div>
                      <p className="text-sm leading-relaxed text-zinc-300">{milestone.summary}</p>
                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div className="border-l border-rose-400/80 pl-3">
                          <p className="font-mono text-[10px] uppercase tracking-widest text-rose-400">Before</p>
                          <p className="mt-1 text-xs leading-relaxed text-zinc-400">{milestone.archBefore}</p>
                        </div>
                        <div className="border-l border-emerald-400/80 pl-3">
                          <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">After</p>
                          <p className="mt-1 text-xs leading-relaxed text-zinc-400">{milestone.archAfter}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l border-zinc-800 pl-4">
                      <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-purple-300"><BrainCircuit className="h-3.5 w-3.5" /> AI synthesis</p>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-400">{milestone.aiInsights.systemEvolution}</p>
                      <p className="mt-4 flex items-start gap-1.5 font-mono text-xs text-emerald-400"><Zap className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {milestone.aiInsights.agenticTakeaway}</p>
                      <a href={milestone.repoUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-sky-400 hover:text-sky-300">
                        <Code2 className="h-3.5 w-3.5" /> Inspect source repository <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col justify-between gap-4 border-y border-zinc-800 py-6 font-mono text-xs sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 text-zinc-400"><Clock3 className="h-4 w-4 text-emerald-400" /> All decisions are ordered chronologically and mapped to production telemetry.</div>
        <button onClick={onOpenCertificates} className="text-amber-400 hover:text-amber-300 cursor-pointer">Review certificates registry →</button>
      </section>
    </div>
  );
};