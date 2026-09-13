import React from 'react';
import { ExternalLink } from 'lucide-react';
import { REFERENCES_LIST } from '../data/showcaseData';

export default function ReferencesSection() {
  return (
    <section id="references" className="py-24 bg-[#080c14] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            14 / Standards & Citations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            References & Standards
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed font-sans">
            Technical manuals, Earth observation specifications, spatial database references, and research literature underpinning the Godachari architecture.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REFERENCES_LIST.map((ref, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-cyan-400 mb-2 block">
                  {ref.category}
                </span>

                <h3 className="text-sm font-bold font-mono text-white mb-2 leading-snug">
                  {ref.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4 font-sans">
                  {ref.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 text-[11px] truncate max-w-[180px]">
                  {ref.source}
                </span>
                <a
                  href={ref.linkPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 text-[11px]"
                >
                  Documentation <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
