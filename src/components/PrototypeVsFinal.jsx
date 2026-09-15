import React from 'react';
import { Check, ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';
import { PROTOTYPE_VS_FINAL } from '../data/showcaseData';

export default function PrototypeVsFinal() {
  const { prototype, finalVision } = PROTOTYPE_VS_FINAL;

  return (
    <section id="prototype-vs-final" className="py-24 bg-white dark:bg-[#0a0e17] border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="w-[92%] lg:w-[94%] max-w-[1480px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">
            PROTOTYPE → FINAL SYSTEM
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            A clear distinction between what has been built in the current working prototype versus the proposed government-scale final system.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: CURRENT PROTOTYPE */}
          <div className="p-7 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-emerald-300 dark:border-emerald-500/30 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                    {prototype.title}
                  </h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-medium">
                  {prototype.badge}
                </span>
              </div>

              <div className="space-y-3 mt-6">
                {prototype.points.map((pt, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold font-mono text-slate-900 dark:text-slate-100">
                        {pt.text}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-sans leading-relaxed">
                        {pt.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center justify-between">
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Status: Implemented & Verified</span>
              <span>Scope: NBKRIST Campus AOI</span>
            </div>
          </div>

          {/* Right Column: FINAL VISION */}
          <div className="p-7 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-cyan-300 dark:border-cyan-500/30 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                    {finalVision.title}
                  </h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 font-medium">
                  {finalVision.badge}
                </span>
              </div>

              <div className="space-y-3 mt-6">
                {finalVision.points.map((pt, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-start gap-3"
                  >
                    <ArrowRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold font-mono text-slate-900 dark:text-slate-100">
                        {pt.text}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-sans leading-relaxed">
                        {pt.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center justify-between">
              <span className="text-cyan-700 dark:text-cyan-400 font-semibold">Status: Proposed Future Architecture</span>
              <span>Scope: Statewide / Nationwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
