import React, { useState } from 'react';
import { Milestone } from '../data/timelineData';
import { 
  GitCommit, 
  Tag, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  ExternalLink,
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  ShieldCheck, 
  Gauge, 
  Code2,
  Cpu,
  Workflow
} from 'lucide-react';

interface MilestoneCardProps {
  milestone: Milestone;
  isActive: boolean;
  systemMode: 'documentary' | 'deep-inspection';
  onSelect: () => void;
}

export const MilestoneCard: React.FC<MilestoneCardProps> = ({
  milestone,
  isActive,
  systemMode,
  onSelect
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'tradeoffs' | 'metrics' | 'agentic'>('architecture');

  return (
    <div
      id={`milestone-${milestone.id}`}
      className={`relative rounded-xl border transition-all duration-300 ${
        isActive 
          ? 'bg-zinc-900/95 border-emerald-500/50 shadow-2xl ring-1 ring-emerald-500/20' 
          : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700/90'
      }`}
    >
      {/* Top documentary annotation banner */}
      <div className="px-5 py-3 border-b border-zinc-800/70 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-amber-400 bg-amber-950/40 border border-amber-800/50 px-2 py-0.5 rounded text-[11px]">
            <GitCommit className="w-3 h-3" />
            commit: {milestone.commitHash}
          </span>
          <span className="flex items-center gap-1 text-emerald-400 bg-emerald-950/30 border border-emerald-800/40 px-2 py-0.5 rounded text-[11px]">
            <Tag className="w-3 h-3" />
            {milestone.tag}
          </span>
          <span className="text-zinc-500">|</span>
          <span className="text-zinc-400 font-semibold">{milestone.year} · {milestone.quarter}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border ${
            milestone.status === 'production' 
              ? 'text-emerald-400 border-emerald-800 bg-emerald-950/20'
              : milestone.status === 'active'
              ? 'text-sky-400 border-sky-800 bg-sky-950/20 animate-pulse'
              : 'text-zinc-400 border-zinc-700 bg-zinc-800'
          }`}>
            Status: {milestone.status}
          </span>
          <span className="text-xs text-purple-400 font-medium px-2 py-0.5 rounded bg-purple-950/40 border border-purple-800/40 hidden sm:inline">
            {milestone.category}
          </span>
        </div>
      </div>

      <div className="p-5 lg:p-6">
        {/* Title and subtitle */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <h3 
              onClick={onSelect}
              className="text-lg lg:text-xl font-bold tracking-tight text-zinc-100 hover:text-emerald-400 transition cursor-pointer flex items-center gap-2"
            >
              {milestone.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono">
              {milestone.subtitle}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2 shrink-0">
            {milestone.repoUrl && (
              <a
                href={milestone.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-mono flex items-center gap-1.5 transition"
              >
                <Code2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Source</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            )}
            {milestone.liveUrl && (
              <a
                href={milestone.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-800/60 text-xs font-mono flex items-center gap-1.5 transition"
              >
                <span>Live Deploy</span>
                <ExternalLink className="w-3 h-3 text-emerald-400" />
              </a>
            )}
          </div>
        </div>

        {/* Narrative Abstract */}
        <div className="mt-4 p-3.5 rounded-lg bg-zinc-950/60 border border-zinc-850 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
          <strong className="text-emerald-400 font-mono text-xs uppercase tracking-wide mr-2">Abstract:</strong>
          {milestone.summary}
        </div>

        {/* Technical stack pills */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-mono text-zinc-500 mr-1 flex items-center gap-1">
            <Layers className="w-3 h-3" /> Stack:
          </span>
          {milestone.stack.map((item) => (
            <span 
              key={item} 
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/60"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Visual Documentation Asset if provided */}
        {milestone.image && (
          <div className="mt-5 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 relative group">
            <div className="h-44 sm:h-56 w-full overflow-hidden">
              <img 
                src={milestone.image} 
                alt={milestone.title} 
                className="w-full h-full object-cover group-hover:scale-102 transition duration-700 opacity-90 group-hover:opacity-100"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="px-3 py-2 bg-zinc-950/90 border-t border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
              <span className="flex items-center gap-1 text-zinc-300">
                <Workflow className="w-3 h-3 text-emerald-400" /> Architectural Artifact Documentation
              </span>
              <span className="text-zinc-500">Cloudinary Snapshot Verified</span>
            </div>
          </div>
        )}

        {/* Documentary Narrative Record quote */}
        <div className="mt-4 border-l-2 border-amber-500/80 pl-3 py-1 bg-amber-950/10 text-xs text-zinc-300 font-mono">
          <div className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider mb-0.5">
            Architecture Decision Record (ADR)
          </div>
          {milestone.narrativeRecord}
        </div>

        {/* Navigation Tabs for Deep Inspection */}
        <div className="mt-6 border-b border-zinc-800 flex items-center gap-2 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-2.5 px-3 border-b-2 font-medium transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            Before vs After Architecture
          </button>

          <button
            onClick={() => setActiveTab('tradeoffs')}
            className={`pb-2.5 px-3 border-b-2 font-medium transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'tradeoffs'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            Trade-offs & Sacrifices
          </button>

          <button
            onClick={() => setActiveTab('metrics')}
            className={`pb-2.5 px-3 border-b-2 font-medium transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'metrics'
                ? 'border-sky-400 text-sky-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Gauge className="w-3.5 h-3.5" />
            Measurable Impact (Telemetry)
          </button>

          <button
            onClick={() => setActiveTab('agentic')}
            className={`pb-2.5 px-3 border-b-2 font-medium transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'agentic'
                ? 'border-purple-400 text-purple-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI Evolution Synthesis
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="pt-4">
          {/* TAB 1: ARCHITECTURE DIFF */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="text-xs text-zinc-400">
                <span className="font-semibold text-zinc-300">Problem Space:</span> {milestone.problemSpace}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                {/* Before */}
                <div className="p-4 rounded-lg bg-rose-950/20 border border-rose-900/40">
                  <div className="flex items-center gap-1.5 text-rose-400 font-semibold mb-2 uppercase text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    Prior Topology (Pre-Evolution)
                  </div>
                  <p className="text-zinc-300 leading-relaxed font-sans text-xs">
                    {milestone.archBefore}
                  </p>
                </div>

                {/* After */}
                <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-900/40">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-2 uppercase text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Evolved Architecture (Current Production)
                  </div>
                  <p className="text-zinc-300 leading-relaxed font-sans text-xs">
                    {milestone.archAfter}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 text-xs font-mono text-zinc-300">
                <span className="text-sky-400 font-medium">Primary Decision Driver:</span> {milestone.decisionDriver}
              </div>
            </div>
          )}

          {/* TAB 2: TRADEOFFS & SACRIFICES */}
          {activeTab === 'tradeoffs' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Gains */}
                <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-900/40">
                  <div className="text-emerald-400 font-semibold uppercase font-mono text-[11px] mb-2.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Architectural Gains & Advantages
                  </div>
                  <ul className="space-y-2">
                    {milestone.tradeoffs.gains.map((gain, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-300">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span>{gain}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sacrifices */}
                <div className="p-4 rounded-lg bg-amber-950/20 border border-amber-900/40">
                  <div className="text-amber-400 font-semibold uppercase font-mono text-[11px] mb-2.5 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    Accepted Sacrifices & Overhead
                  </div>
                  <ul className="space-y-2">
                    {milestone.tradeoffs.sacrifices.map((sac, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-300">
                        <span className="text-amber-400 font-bold shrink-0">⚠</span>
                        <span>{sac}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mitigation */}
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono">
                <span className="text-amber-300 font-medium uppercase text-[10px] tracking-wide block mb-1">
                  Mitigation Strategy Applied:
                </span>
                <p className="text-zinc-300 font-sans">{milestone.tradeoffs.mitigation}</p>
              </div>
            </div>
          )}

          {/* TAB 3: MEASURABLE IMPACT METRICS */}
          {activeTab === 'metrics' && (
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {milestone.metrics.map((m, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 flex flex-col justify-between"
                  >
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1 line-clamp-1">
                      {m.label}
                    </div>
                    <div className="flex items-baseline gap-1.5 my-1 font-mono">
                      <span className="text-xs text-zinc-500 line-through">{m.before}</span>
                      <ArrowRight className="w-3 h-3 text-zinc-600 inline shrink-0" />
                      <span className="text-sm font-semibold text-zinc-100">{m.after}</span>
                    </div>
                    <div className="mt-1 pt-1 border-t border-zinc-850 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-zinc-500 text-[10px]">Net Shift</span>
                      <span className={`font-semibold ${m.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {m.delta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-zinc-500 font-mono italic">
                * Real telemetry captured via Android Profiler, Firebase Performance Monitoring & GitHub CI benchmarks.
              </p>
            </div>
          )}

          {/* TAB 4: AI / AGENTIC EVOLUTION SYNTHESIS */}
          {activeTab === 'agentic' && (
            <div className="p-4 rounded-lg bg-purple-950/20 border border-purple-800/40 space-y-3">
              <div className="flex items-center justify-between border-b border-purple-900/40 pb-2 text-xs font-mono">
                <span className="text-purple-300 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Agentic AI Synthesis (Claude 3.7 Evaluator)
                </span>
                <span className="text-[11px] text-zinc-400">
                  Migration Risk: <strong className="text-emerald-400">{milestone.aiInsights.migrationRiskScore}</strong>
                </span>
              </div>

              <div className="space-y-2 text-xs text-zinc-300">
                <div>
                  <span className="text-purple-300 font-mono font-medium block mb-0.5">System Evolution Arc:</span>
                  <p className="leading-relaxed font-sans">{milestone.aiInsights.systemEvolution}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-zinc-950/60 rounded border border-purple-900/30">
                    <span className="text-amber-400 font-mono text-[11px] block mb-1">Trade-off Synthesis</span>
                    <p className="text-zinc-300 text-xs">{milestone.aiInsights.tradeoffSynthesis}</p>
                  </div>
                  <div className="p-3 bg-zinc-950/60 rounded border border-purple-900/30">
                    <span className="text-rose-400 font-mono text-[11px] block mb-1">Failure Modes Prevented</span>
                    <p className="text-zinc-300 text-xs">{milestone.aiInsights.failureModesPrevented}</p>
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-purple-900/30 text-xs font-mono text-purple-200">
                  <span className="text-purple-400 font-semibold uppercase text-[10px] tracking-wide block mb-0.5">Agentic Architectural Takeaway:</span>
                  <p className="italic">"{milestone.aiInsights.agenticTakeaway}"</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Collapsible deep telemetry toggle for inspection mode */}
        {systemMode === 'deep-inspection' && (
          <div className="mt-4 pt-3 border-t border-zinc-800">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between text-xs font-mono text-zinc-400 hover:text-zinc-200 py-1 transition"
            >
              <span className="flex items-center gap-1.5 text-amber-400">
                <Code2 className="w-3.5 h-3.5" />
                Raw Kernel Log & AST Trace #{milestone.commitHash}
              </span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {isExpanded && (
              <div className="mt-3 p-3.5 bg-black rounded-lg border border-zinc-800 font-mono text-[11px] text-zinc-400 overflow-x-auto space-y-1">
                <div className="text-emerald-400">$ git log -1 --stat {milestone.commitHash}</div>
                <div>Author: Moe Kyaw Aung &lt;moekyawaung2026@gravatar.verified&gt;</div>
                <div>Date:   Thu {milestone.quarter} {milestone.year} 10:14:28 +0700</div>
                <div className="text-zinc-300 mt-2">    feat(arch): decompose subsystem for {milestone.category}</div>
                <div className="text-zinc-500">    - Enforce repository contracts over network boundaries</div>
                <div className="text-zinc-500">    - Apply WAL offline caching with idempotent retry buffers</div>
                <div className="text-zinc-500">    - Bound concurrency threads using Kotlin Dispatchers.IO</div>
                <div className="text-amber-400/80 mt-2">
                  18 files changed, 1,420 insertions(+), 890 deletions(-)
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
