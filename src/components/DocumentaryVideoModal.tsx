import React, { useState } from 'react';
import { X, Play, Film, Layers } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  category: string;
  url: string;
  runtime: string;
  narrative: string;
}

const VIDEO_PLAYLIST: VideoItem[] = [
  {
    id: 'vid-ring',
    title: 'Core Ring Telemetry & Dark Spatial Design',
    category: 'Visual Systems',
    url: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779052711/Javier_Black-Dark-Ring.mp4',
    runtime: '0:18',
    narrative: 'Minimalist kinetic orbital motion demonstrating restraint, technical dark tone, and documentary visual balance.'
  },
  {
    id: 'vid-audi',
    title: 'Precision Engineering & Aerodynamic Systems',
    category: 'Hardware & Automotive',
    url: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779052708/AUDI_-_Javier_Pardina_1_gavyon.mp4',
    runtime: '0:22',
    narrative: 'Symbolizing high-throughput deterministic performance, sub-millisecond latencies, and industrial endurance.'
  },
  {
    id: 'vid-coach',
    title: 'Architectural Craftsmanship & Material Design',
    category: 'Design Engineering',
    url: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779031657/COACH_-_Javier_Pardina_gdjsjg.mp4',
    runtime: '0:20',
    narrative: 'Clean ergonomics, tactile feedback, and deliberate detail mirroring senior software craftsmanship.'
  },
  {
    id: 'vid-urban',
    title: 'Urban Distributed Mesh & Cross-Border Mobility',
    category: 'Distributed Computing',
    url: 'https://res.cloudinary.com/dye5qpwii/video/upload/v1779031596/Javier_Pardina_10_wttux4.mp4',
    runtime: '0:25',
    narrative: 'Representing network resilience across edge environments, border transitions, and mobile topologies.'
  }
];

export const DocumentaryVideoModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem>(VIDEO_PLAYLIST[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-mono text-zinc-100 flex items-center gap-2">
                CINEMATIC ARCHITECTURE DOCUMENTARY REEL
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Atmospheric technical visual study · Calm motion aesthetics
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

        {/* Video Player Main Stage */}
        <div className="p-4 sm:p-6 bg-black flex-1 overflow-y-auto">
          <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-video w-full max-h-[460px] mx-auto shadow-2xl">
            <video
              key={selectedVideo.url}
              src={selectedVideo.url}
              controls
              autoPlay
              loop
              playsInline
              className="w-full h-full object-contain"
            />
          </div>

          {/* Current Video Telemetry */}
          <div className="mt-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sky-400 font-bold text-sm font-sans">{selectedVideo.title}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                  {selectedVideo.category}
                </span>
              </div>
              <p className="text-zinc-400 text-xs mt-1 font-sans leading-relaxed">
                {selectedVideo.narrative}
              </p>
            </div>

            <div className="text-[11px] text-zinc-500 whitespace-nowrap shrink-0">
              Runtime: <strong className="text-zinc-300">{selectedVideo.runtime}</strong>
            </div>
          </div>

          {/* Playlist selector */}
          <div className="mt-5">
            <div className="text-xs font-mono text-zinc-500 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> SELECT DOCUMENTARY FOOTAGE:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {VIDEO_PLAYLIST.map((vid) => (
                <button
                  key={vid.id}
                  onClick={() => setSelectedVideo(vid)}
                  className={`p-3 rounded-lg border text-left font-mono text-xs transition cursor-pointer ${
                    selectedVideo.id === vid.id
                      ? 'bg-zinc-900 border-sky-400 text-sky-300 shadow-md ring-1 ring-sky-500/20'
                      : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-zinc-500 uppercase">{vid.category}</span>
                    <Play className="w-3 h-3 text-sky-400" />
                  </div>
                  <div className="font-bold text-zinc-200 truncate">{vid.title}</div>
                  <div className="text-[10px] text-zinc-500 mt-1">{vid.runtime}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
