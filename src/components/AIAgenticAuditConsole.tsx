import React, { useState } from 'react';
import { Milestone } from '../data/timelineData';
import { 
  Sparkles, 
  BrainCircuit, 
  RefreshCw, 
  Activity, 
  ShieldAlert, 
  Zap,
  Terminal,
  CheckCircle2,
  Sliders
} from 'lucide-react';

interface AIConsoleProps {
  milestones: Milestone[];
  activeMilestone: Milestone;
}

export const AIAgenticAuditConsole: React.FC<AIConsoleProps> = ({
  milestones,
  activeMilestone
}) => {
  const [selectedTarget, setSelectedTarget] = useState<string>(activeMilestone.id);
  const [queryPrompt, setQueryPrompt] = useState<string>('Synthesize overarching technical debt reduction across the 4-year mobile lineage.');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [customResponse, setCustomResponse] = useState<string | null>(null);

  const current = milestones.find(m => m.id === selectedTarget) || activeMilestone;

  const handleRunAgent = () => {
    setIsSimulating(true);
    setCustomResponse(null);
    setTimeout(() => {
      setIsSimulating(false);
      setCustomResponse(
        `Agentic Audit Completed. Analysed 43 repositories and ${milestones.length} core architecture milestones. Result: System maintains 0 God-Classes, 99.8% offline durability, and full Zero-Trust keystore protection. Next proactive recommendation: Deploy WebAssembly (Wasm) fallback for on-device TFLite quantization.`
      );
    }, 900);
  };

  return (
    <div className="bg-zinc-950 border border-purple-900/50 rounded-xl p-5 lg:p-6 shadow-2xl relative overflow-hidden">
      {/* Background subtle grid styling */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b0764_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-900/40 pb-4 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-purple-900/50 border border-purple-700/60 flex items-center justify-center text-purple-300">
            <BrainCircuit className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-bold text-zinc-100 font-mono flex items-center gap-1.5">
                AGENTIC ARCHITECTURE AUDITOR
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                CLAUDE-3.7-SONNET ENGINE
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Autonomous Trade-off Evaluator & System Evolution Synthesis
            </p>
          </div>
        </div>

        {/* Milestone Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
            <Sliders className="w-3.5 h-3.5" /> Target:
          </span>
          <select
            value={selectedTarget}
            onChange={(e) => setSelectedTarget(e.target.value)}
            className="bg-zinc-900 text-xs font-mono text-zinc-200 border border-purple-900/60 rounded px-2.5 py-1.5 focus:outline-hidden focus:border-purple-500"
          >
            {milestones.map((m) => (
              <option key={m.id} value={m.id}>
                {m.year} {m.quarter} — {m.title.slice(0, 32)}...
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* AI Telemetry Dashboard Panels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 relative z-10">
        {/* Panel 1: Trade-Off Analysis */}
        <div className="p-4 rounded-lg bg-zinc-900/70 border border-purple-900/30">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-purple-300 font-semibold flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-purple-400" />
              Evolution Vector
            </span>
            <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800">
              Verified
            </span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            {current.aiInsights.systemEvolution}
          </p>
          <div className="mt-3 pt-2 border-t border-zinc-800/80 text-[11px] font-mono text-purple-400">
            Node: {current.tag} (Hash: {current.commitHash})
          </div>
        </div>

        {/* Panel 2: Anti-Fragility & Failure Prevention */}
        <div className="p-4 rounded-lg bg-zinc-900/70 border border-purple-900/30">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-amber-400 font-semibold flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              Failure Modes Defeated
            </span>
            <span className="text-[10px] text-amber-300 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800">
              Resilient
            </span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            {current.aiInsights.failureModesPrevented}
          </p>
          <div className="mt-3 pt-2 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400">
            Risk Mitigation: <span className="text-emerald-400 font-medium">{current.aiInsights.migrationRiskScore} Overhead</span>
          </div>
        </div>

        {/* Panel 3: Agentic Recommendation */}
        <div className="p-4 rounded-lg bg-zinc-900/70 border border-purple-900/30">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-sky-300 font-semibold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-sky-400" />
              Agentic Trade-Off Synthesis
            </span>
            <span className="text-[10px] text-sky-400 bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-800">
              Optimal
            </span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed italic">
            "{current.aiInsights.tradeoffSynthesis}"
          </p>
          <div className="mt-3 pt-2 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400">
            Primary Stack: <span className="text-zinc-200">{current.stack.slice(0, 3).join(', ')}</span>
          </div>
        </div>
      </div>

      {/* Interactive Agent Query Console */}
      <div className="mt-5 p-4 rounded-lg bg-black/80 border border-zinc-800 relative z-10">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
          <span className="flex items-center gap-1.5 text-purple-300">
            <Terminal className="w-3.5 h-3.5" />
            Query Architectural Narrative Engine
          </span>
          <span className="text-[10px] text-zinc-500">Autonomous Reasoning Pipeline</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={queryPrompt}
            onChange={(e) => setQueryPrompt(e.target.value)}
            className="flex-1 bg-zinc-900/90 text-xs font-mono text-zinc-200 px-3 py-2 rounded border border-zinc-700/80 focus:outline-hidden focus:border-purple-500"
            placeholder="Ask agentic questions about migration risks, latency deltas, or design patterns..."
          />
          <button
            onClick={handleRunAgent}
            disabled={isSimulating}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-900 text-white text-xs font-mono rounded flex items-center justify-center gap-1.5 transition cursor-pointer"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Auditing AST...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Run Agent Audit</span>
              </>
            )}
          </button>
        </div>

        {customResponse && (
          <div className="mt-3 p-3 rounded bg-purple-950/40 border border-purple-800/60 text-xs font-mono text-purple-200 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-emerald-400 font-semibold block text-[11px]">CLAUDE 3.7 SYNTHESIS REPORT:</span>
              <p className="text-zinc-200 font-sans leading-relaxed">{customResponse}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
