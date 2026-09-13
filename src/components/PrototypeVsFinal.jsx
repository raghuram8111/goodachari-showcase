import React from 'react';
import { Check, ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';
import { PROTOTYPE_VS_FINAL } from '../data/showcaseData';

export default function PrototypeVsFinal() {
  const { prototype, finalVision } = PROTOTYPE_VS_FINAL;

  return (
    <section id="final-vision" className="py-20 bg-[#0a0e17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-sm bg-cyan-500"></span>
            <span>09 / Strategic Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            From Prototype to Final System
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            A transparent architectural contrast distinguishing what has been concretely implemented in the working prototype versus our broader government-scale roadmap.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: CURRENT PROTOTYPE */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-emerald-500/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Status Ribbon */}
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-2">
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Working Prototype
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-bold font-mono text-white">
                  {prototype.title}
                </h3>
              </div>
              <p className="text-xs font-mono text-emerald-400 mb-6">
                Active Proof-of-Concept Baseline (SIH 2026 Deliverable)
              </p>

              <div className="space-y-3.5">
                {prototype.points.map((pt, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-mono text-slate-100">
                        {pt.text}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {pt.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span className="text-emerald-400 font-semibold">Status: 100% Functioning</span>
              <span>Scope: Demonstration AOI</span>
            </div>
          </div>

          {/* Right Column: FINAL VISION (Future Expansion) */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-cyan-500/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Status Ribbon */}
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-2">
              <span className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Future Government Scale
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Globe2 className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold font-mono text-white">
                  {finalVision.title}
                </h3>
              </div>
              <p className="text-xs font-mono text-cyan-400 mb-6">
                Target Nationwide Deployment & Statutory Integration
              </p>

              <div className="space-y-3.5">
                {finalVision.points.map((pt, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-start gap-3 group hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-mono text-slate-100 group-hover:text-cyan-200 transition-colors">
                        {pt.text}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {pt.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span className="text-cyan-400 font-semibold">Planned for Operational Scale</span>
              <span>Scope: Statewide / National</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
