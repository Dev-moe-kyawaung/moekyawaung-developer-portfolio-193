import React from 'react';
import { Milestone } from '../data/timelineData';
import { Play, Pause, ChevronLeft, ChevronRight, GitCommit } from 'lucide-react';

interface ScrubberProps {
  milestones: Milestone[];
  activeIndex: number;
  onSelectIndex: (index: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const TimelineScrubber: React.FC<ScrubberProps> = ({
  milestones,
  activeIndex,
  onSelectIndex,
  isPlaying,
  onTogglePlay,
}) => {
  const activeMilestone = milestones[activeIndex] || milestones[0];

  return (
    <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-3.5 shadow-xl backdrop-blur-md mb-8">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={onTogglePlay}
            aria-label={isPlaying ? 'Pause narrative scrub' : 'Play narrative scrub'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-mono transition"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Pause Auto-Scrub</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                <span>Auto Walkthrough</span>
              </>
            )}
          </button>

          <div className="flex items-center bg-zinc-800/60 rounded-lg p-0.5 border border-zinc-700/80">
            <button
              onClick={() => onSelectIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="p-1 hover:bg-zinc-700 rounded disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300"
              title="Previous milestone"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono px-2 text-zinc-400">
              {activeIndex + 1} / {milestones.length}
            </span>
            <button
              onClick={() => onSelectIndex(Math.min(milestones.length - 1, activeIndex + 1))}
              disabled={activeIndex === milestones.length - 1}
              className="p-1 hover:bg-zinc-700 rounded disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300"
              title="Next milestone"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Current Anchor preview */}
        <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
          <span className="text-zinc-500">ACTIVE COMMIT:</span>
          <code className="text-amber-400 bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-800/40">
            {activeMilestone.commitHash}
          </code>
          <span className="text-zinc-500">|</span>
          <span className="text-emerald-400 font-medium truncate max-w-[200px] sm:max-w-[320px]">
            {activeMilestone.year} {activeMilestone.quarter}: {activeMilestone.title}
          </span>
        </div>
      </div>

      {/* Scrub bar line with commit markers */}
      <div className="relative pt-2 pb-1">
        {/* Track Line */}
        <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-linear-to-r from-emerald-500 via-sky-500 to-amber-500 transition-all duration-300 rounded-full"
            style={{
              width: `${(activeIndex / Math.max(1, milestones.length - 1)) * 100}%`
            }}
          />
        </div>

        {/* Markers */}
        <div className="relative flex justify-between items-center mt-2 px-1">
          {milestones.map((m, idx) => {
            const isCurrent = idx === activeIndex;
            const isPassed = idx < activeIndex;

            return (
              <button
                key={m.id}
                onClick={() => onSelectIndex(idx)}
                className="group relative flex flex-col items-center focus:outline-hidden"
              >
                {/* Node pin */}
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center border-2 transition-all ${
                    isCurrent
                      ? 'bg-emerald-400 border-zinc-950 ring-4 ring-emerald-500/30 scale-125 z-10'
                      : isPassed
                      ? 'bg-zinc-700 border-zinc-600 text-zinc-300 group-hover:bg-zinc-600'
                      : 'bg-zinc-900 border-zinc-700 text-zinc-600 group-hover:border-zinc-500'
                  }`}
                >
                  <GitCommit className={`w-3 h-3 ${isCurrent ? 'text-zinc-950' : 'text-zinc-400'}`} />
                </div>

                {/* Marker label */}
                <div className="mt-1.5 text-center">
                  <span
                    className={`block text-[11px] font-mono leading-none transition ${
                      isCurrent
                        ? 'text-emerald-300 font-semibold'
                        : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}
                  >
                    {m.year}
                  </span>
                  <span
                    className={`block text-[9px] font-mono uppercase transition ${
                      isCurrent ? 'text-amber-400 font-medium' : 'text-zinc-600'
                    }`}
                  >
                    {m.quarter}
                  </span>
                </div>

                {/* Tooltip on hover */}
                <div className="absolute bottom-12 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity bg-zinc-950 border border-zinc-700 text-zinc-200 text-[11px] font-mono py-1 px-2 rounded shadow-2xl whitespace-nowrap z-20">
                  <div className="text-emerald-400 font-medium">{m.tag}</div>
                  <div className="text-zinc-400 text-[10px]">{m.title.slice(0, 36)}...</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
