import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRightLeft,
  CheckCircle2,
  FileDown,
  Film,
  GitCommit,
  Keyboard,
  LayoutTemplate,
  Search,
  X
} from 'lucide-react';
import { Milestone } from '../data/timelineData';

export type ExperienceMode = 'audit' | 'atlas' | 'ledger';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  milestones: Milestone[];
  onSelectMilestone: (index: number) => void;
  onSetExperience: (mode: ExperienceMode) => void;
  onOpenCompare: () => void;
  onOpenCertificates: () => void;
  onOpenReel: () => void;
  onOpenWhitepaper: () => void;
}

interface Command {
  id: string;
  label: string;
  hint: string;
  group: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  milestones,
  onSelectMilestone,
  onSetExperience,
  onOpenCompare,
  onOpenCertificates,
  onOpenReel,
  onOpenWhitepaper
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      window.setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen, onClose]);

  const commands = useMemo<Command[]>(() => {
    const general: Command[] = [
      {
        id: 'view-audit',
        label: 'Open Audit Timeline',
        hint: 'Original documentary inspection layout',
        group: 'Experience views',
        icon: <LayoutTemplate className="h-4 w-4 text-emerald-400" />,
        action: () => onSetExperience('audit')
      },
      {
        id: 'view-atlas',
        label: 'Open Cinematic Architecture Atlas',
        hint: 'Visual long-form narrative layout',
        group: 'Experience views',
        icon: <Film className="h-4 w-4 text-sky-400" />,
        action: () => onSetExperience('atlas')
      },
      {
        id: 'view-ledger',
        label: 'Open Engineering Ledger',
        hint: 'Compact executive decision reading mode',
        group: 'Experience views',
        icon: <GitCommit className="h-4 w-4 text-amber-400" />,
        action: () => onSetExperience('ledger')
      },
      {
        id: 'compare',
        label: 'Compare architecture decision records',
        hint: 'Side-by-side ADR diff',
        group: 'Portfolio tools',
        icon: <ArrowRightLeft className="h-4 w-4 text-amber-400" />,
        action: onOpenCompare
      },
      {
        id: 'certificates',
        label: 'Open verified certificates registry',
        hint: '82+ Programming Hub credentials',
        group: 'Portfolio tools',
        icon: <CheckCircle2 className="h-4 w-4 text-emerald-400" />,
        action: onOpenCertificates
      },
      {
        id: 'whitepaper',
        label: 'Export executive architecture dossier',
        hint: 'Print or save as PDF',
        group: 'Portfolio tools',
        icon: <FileDown className="h-4 w-4 text-purple-400" />,
        action: onOpenWhitepaper
      },
      {
        id: 'reel',
        label: 'Open cinematic visual reel',
        hint: 'Documentary visual references',
        group: 'Portfolio tools',
        icon: <Film className="h-4 w-4 text-sky-400" />,
        action: onOpenReel
      }
    ];

    const milestoneCommands = milestones.map((milestone, index) => ({
      id: milestone.id,
      label: `${milestone.year} ${milestone.quarter} — ${milestone.title}`,
      hint: `${milestone.commitHash} · ${milestone.category}`,
      group: 'Timeline jumps',
      icon: <GitCommit className="h-4 w-4 text-zinc-400" />,
      action: () => onSelectMilestone(index)
    }));

    return [...general, ...milestoneCommands];
  }, [milestones, onOpenCertificates, onOpenCompare, onOpenReel, onOpenWhitepaper, onSelectMilestone, onSetExperience]);

  const normalized = query.trim().toLowerCase();
  const visibleCommands = commands.filter((command) =>
    `${command.label} ${command.hint} ${command.group}`.toLowerCase().includes(normalized)
  );

  if (!isOpen) return null;

  let lastGroup = '';

  return (
    <div className="fixed inset-0 z-[70] bg-black/70 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <div
        className="mx-auto mt-[9vh] max-w-2xl overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950 shadow-2xl animate-[softReveal_220ms_ease-out]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800 px-4 py-3">
          <Search className="h-5 w-5 text-emerald-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search views, tools, or architecture milestones..."
            className="min-w-0 flex-1 bg-transparent font-mono text-sm text-zinc-100 outline-hidden placeholder:text-zinc-500"
          />
          <button onClick={onClose} className="rounded p-1 text-zinc-500 transition hover:bg-zinc-900 hover:text-zinc-200 cursor-pointer" aria-label="Close command palette">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[58vh] overflow-y-auto p-2">
          {visibleCommands.length === 0 ? (
            <div className="px-3 py-10 text-center font-mono text-xs text-zinc-500">No command or milestone matches "{query}".</div>
          ) : (
            visibleCommands.map((command) => {
              const renderGroup = command.group !== lastGroup;
              lastGroup = command.group;

              return (
                <React.Fragment key={command.id}>
                  {renderGroup && <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">{command.group}</p>}
                  <button
                    onClick={() => {
                      command.action();
                      onClose();
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition hover:bg-zinc-900 cursor-pointer"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">{command.icon}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-zinc-200">{command.label}</span>
                      <span className="mt-0.5 block truncate font-mono text-[11px] text-zinc-500">{command.hint}</span>
                    </span>
                  </button>
                </React.Fragment>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-zinc-800 px-4 py-2.5 font-mono text-[10px] text-zinc-500">
          <span className="flex items-center gap-1.5"><Keyboard className="h-3.5 w-3.5" /> Press Esc to close</span>
          <span>Architecture command centre</span>
        </div>
      </div>
    </div>
  );
};