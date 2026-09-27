import React, { useState } from 'react';
import { Milestone } from '../data/timelineData';
import { X, ArrowRightLeft, ShieldCheck, AlertCircle, Sparkles, Code2 } from 'lucide-react';

interface ModalProps {
  milestones: Milestone[];
  isOpen: boolean;
  onClose: () => void;
}

export const MilestoneComparisonModal: React.FC<ModalProps> = ({
  milestones,
  isOpen,
  onClose
}) => {
  const [leftId, setLeftId] = useState<string>(milestones[0]?.id || '');
  const [rightId, setRightId] = useState<string>(milestones[milestones.length - 1]?.id || '');

  if (!isOpen) return null;

  const left = milestones.find(m => m.id === leftId) || milestones[0];
  const right = milestones.find(m => m.id === rightId) || milestones[milestones.length - 1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-zinc-800 flex items-center justify-between sticky top-0 bg-zinc-950/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-mono text-zinc-100">
                ARCHITECTURE DECISION RECORD (ADR) DIFF ANALYZER
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Side-by-side technical evolution & trade-off vector audit
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-700/60 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Milestone Dropdown Selectors */}
        <div className="p-5 bg-zinc-900/60 border-b border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-mono text-zinc-400 block mb-1">
              BASE SPECIFICATION (LEFT):
            </label>
            <select
              value={leftId}
              onChange={(e) => setLeftId(e.target.value)}
              className="w-full bg-zinc-950 text-xs font-mono text-zinc-200 border border-zinc-700 rounded-lg p-2.5 focus:border-emerald-500"
            >
              {milestones.map(m => (
                <option key={m.id} value={m.id}>
                  {m.year} {m.quarter} — {m.title.slice(0, 40)}...
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-mono text-zinc-400 block mb-1">
              COMPARISON TARGET (RIGHT):
            </label>
            <select
              value={rightId}
              onChange={(e) => setRightId(e.target.value)}
              className="w-full bg-zinc-950 text-xs font-mono text-zinc-200 border border-zinc-700 rounded-lg p-2.5 focus:border-amber-500"
            >
              {milestones.map(m => (
                <option key={m.id} value={m.id}>
                  {m.year} {m.quarter} — {m.title.slice(0, 40)}...
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Side-by-side comparison body */}
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
          {/* Left Column */}
          <div className="space-y-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800">
            <div className="border-b border-zinc-800 pb-2">
              <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold block">
                {left.tag} · {left.year} {left.quarter}
              </span>
              <h4 className="text-sm font-bold text-zinc-100 font-sans mt-0.5">{left.title}</h4>
              <p className="text-[11px] text-zinc-400 font-sans mt-1">{left.summary}</p>
            </div>

            <div>
              <span className="text-zinc-500 text-[10px] block mb-1">CORE STACK</span>
              <div className="flex flex-wrap gap-1">
                {left.stack.map(s => (
                  <span key={s} className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px] border border-zinc-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-emerald-400 text-[10px] flex items-center gap-1 font-semibold mb-1">
                <ShieldCheck className="w-3.5 h-3.5" /> ARCHITECTURAL GAINS
              </span>
              <ul className="space-y-1 font-sans text-[11px] text-zinc-300">
                {left.tradeoffs.gains.map((g, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-400">✓</span> {g}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-amber-400 text-[10px] flex items-center gap-1 font-semibold mb-1">
                <AlertCircle className="w-3.5 h-3.5" /> SACRIFICES / OVERHEAD
              </span>
              <ul className="space-y-1 font-sans text-[11px] text-zinc-300">
                {left.tradeoffs.sacrifices.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-400">⚠</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-zinc-800">
              <span className="text-purple-400 text-[10px] flex items-center gap-1 font-semibold mb-0.5">
                <Sparkles className="w-3.5 h-3.5" /> AI AGENTIC PERSPECTIVE
              </span>
              <p className="text-[11px] text-zinc-400 font-sans italic">
                "{left.aiInsights.agenticTakeaway}"
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800">
            <div className="border-b border-zinc-800 pb-2">
              <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold block">
                {right.tag} · {right.year} {right.quarter}
              </span>
              <h4 className="text-sm font-bold text-zinc-100 font-sans mt-0.5">{right.title}</h4>
              <p className="text-[11px] text-zinc-400 font-sans mt-1">{right.summary}</p>
            </div>

            <div>
              <span className="text-zinc-500 text-[10px] block mb-1">CORE STACK</span>
              <div className="flex flex-wrap gap-1">
                {right.stack.map(s => (
                  <span key={s} className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px] border border-zinc-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-emerald-400 text-[10px] flex items-center gap-1 font-semibold mb-1">
                <ShieldCheck className="w-3.5 h-3.5" /> ARCHITECTURAL GAINS
              </span>
              <ul className="space-y-1 font-sans text-[11px] text-zinc-300">
                {right.tradeoffs.gains.map((g, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-400">✓</span> {g}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-amber-400 text-[10px] flex items-center gap-1 font-semibold mb-1">
                <AlertCircle className="w-3.5 h-3.5" /> SACRIFICES / OVERHEAD
              </span>
              <ul className="space-y-1 font-sans text-[11px] text-zinc-300">
                {right.tradeoffs.sacrifices.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-400">⚠</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-zinc-800">
              <span className="text-purple-400 text-[10px] flex items-center gap-1 font-semibold mb-0.5">
                <Sparkles className="w-3.5 h-3.5" /> AI AGENTIC PERSPECTIVE
              </span>
              <p className="text-[11px] text-zinc-400 font-sans italic">
                "{right.aiInsights.agenticTakeaway}"
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Diff computed against git tree SHA revisions</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition cursor-pointer"
          >
            Close Diff Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
