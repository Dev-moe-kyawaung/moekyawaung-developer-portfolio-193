import React, { useState } from 'react';
import { CERTIFICATES_DATA, CertificateItem } from '../data/certificatesData';
import { X, Search, Award, ExternalLink, CheckCircle, Filter } from 'lucide-react';

interface CertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificatesModal: React.FC<CertModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = [
    'All',
    'Programming Languages',
    'Web Development',
    'Mobile & App Dev',
    'Databases',
    'AI & Data Science',
    'Security & DevOps',
    'Blockchain',
    'Software Engineering',
    'Marketing & Business'
  ];

  const filteredCerts = CERTIFICATES_DATA.filter(cert => {
    const matchesCat = selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.verifyId.includes(searchTerm) ||
      cert.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-6xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/95 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold font-mono text-zinc-100">
                  PROGRAMMING HUB CERTIFICATES REGISTRY
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                  82 VERIFIED CREDENTIALS
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono">
                Official accreditation across 9 engineering domains · Moe Kyaw Aung
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

        {/* Search & Category Filter Toolbar */}
        <div className="p-4 bg-zinc-900/60 border-b border-zinc-800 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by certificate title, ID, or core skills (e.g. Kotlin, Docker, Claude, Clean Arch)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-950 text-xs font-mono text-zinc-200 pl-9 pr-4 py-2.5 rounded-lg border border-zinc-800 focus:outline-hidden focus:border-amber-500"
            />
          </div>

          {/* Categories Pill Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <Filter className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            {categories.map(cat => {
              const count = cat === 'All' 
                ? CERTIFICATES_DATA.length 
                : CERTIFICATES_DATA.filter(c => c.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full font-mono text-xs transition whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-400 text-zinc-950 font-semibold'
                      : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="p-5 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {filteredCerts.length === 0 ? (
            <div className="col-span-full py-12 text-center text-zinc-500 font-mono text-xs">
              No certificates match the criteria "{searchTerm}".
            </div>
          ) : (
            filteredCerts.map((cert: CertificateItem) => (
              <div
                key={cert.id}
                className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 transition flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1">
                    <span className="text-amber-400/90 font-medium">{cert.category}</span>
                    <span>{cert.date}</span>
                  </div>

                  <h4 className="text-sm font-bold text-zinc-200 group-hover:text-amber-300 transition font-sans">
                    {cert.name}
                  </h4>

                  <div className="mt-2 text-[10px] font-mono text-zinc-500">
                    ID: <code className="text-zinc-400">{cert.verifyId}</code>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/70 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    Verified
                  </span>

                  <a
                    href={`https://www.programminghub.io/certificate?id=${cert.verifyId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 hover:text-amber-300 flex items-center gap-1 text-[11px] font-medium underline decoration-amber-500/40"
                  >
                    <span>Verify Hub ↗</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>Showing {filteredCerts.length} of {CERTIFICATES_DATA.length} verified credentials</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-750 rounded-lg transition cursor-pointer"
          >
            Close Registry
          </button>
        </div>
      </div>
    </div>
  );
};
