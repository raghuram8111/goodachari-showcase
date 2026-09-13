import React from 'react';
import { Check, ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';
import { PROTOTYPE_VS_FINAL } from '../data/showcaseData';

export default function PrototypeVsFinal() {
  const { prototype, finalVision } = PROTOTYPE_VS_FINAL;

  return (
    <section id="final-vision" className="py-24 bg-[#0a0e17] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            09 / Strategic Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            From Prototype to Final System
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed font-sans">
            A transparent architectural comparison distinguishing what has been implemented in the working prototype versus the broader government-scale roadmap.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: CURRENT PROTOTYPE */}
          <div className="p-7 rounded-xl bg-slate-900/60 border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-xl font-bold font-mono text-white">
                    {prototype.title}
                  </h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-300">
                  Implemented Baseline
                </span>
              </div>

              <div className="space-y-3 mt-6">
                {prototype.points.map((pt, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold font-mono text-slate-100">
                        {pt.text}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 font-sans leading-relaxed">
                        {pt.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span className="text-emerald-400 font-medium">Status: Functioning Proof-of-Concept</span>
              <span>Scope: Demonstration AOI</span>
            </div>
          </div>

          {/* Right Column: FINAL VISION */}
          <div className="p-7 rounded-xl bg-slate-900/60 border border-cyan-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-xl font-bold font-mono text-white">
                    {finalVision.title}
                  </h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-300">
                  Government Target
                </span>
              </div>

              <div className="space-y-3 mt-6">
                {finalVision.points.map((pt, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-start gap-3"
                  >
                    <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold font-mono text-slate-100">
                        {pt.text}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 font-sans leading-relaxed">
                        {pt.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span className="text-cyan-400 font-medium">Status: Target Operational Architecture</span>
              <span>Scope: Statewide / National</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
