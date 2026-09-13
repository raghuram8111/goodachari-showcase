import React from 'react';
import { ExternalLink } from 'lucide-react';
import { REFERENCES_LIST } from '../data/showcaseData';

export default function ReferencesSection() {
  return (
    <section id="references" className="py-20 bg-[#080c14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-sm bg-cyan-500"></span>
            <span>14 / Documentation & Literature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            References & Standards
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Technical manuals, Earth observation specifications, spatial database references, and research literature underpinning the Godachari architecture.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REFERENCES_LIST.map((ref, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                    {ref.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    REF-0{idx + 1}
                  </span>
                </div>

                <h3 className="text-sm font-bold font-mono text-white mb-2 leading-snug">
                  {ref.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {ref.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 text-[11px] truncate max-w-[180px]">
                  {ref.source}
                </span>
                <a
                  href={ref.linkPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 text-[11px]"
                >
                  Docs <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
