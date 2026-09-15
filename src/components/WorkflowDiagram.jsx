import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { PROTOTYPE_WORKFLOW_STEPS } from '../data/showcaseData';

export default function WorkflowDiagram() {
  return (
    <section id="workflow" className="py-24 bg-slate-50 dark:bg-[#080c14] border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="w-[92%] lg:w-[94%] max-w-[1480px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">
            HOW THE PROTOTYPE WORKS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            The sequential data pipeline implemented in the current prototype: from satellite imagery acquisition to authorized human verification.
          </p>
        </div>

        {/* Clean Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-stretch">
          {PROTOTYPE_WORKFLOW_STEPS.map((step, idx) => {
            const isLast = idx === PROTOTYPE_WORKFLOW_STEPS.length - 1;

            return (
              <div key={step.number} className="flex flex-col">
                <div className="flex-1 p-5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                        {step.number}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {step.statusBadge}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {step.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Input:</span>
                    <span className="truncate block">{step.inputs}</span>
                  </div>
                </div>

                {!isLast && (
                  <div className="lg:hidden flex justify-center py-2 text-slate-400 dark:text-slate-600">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Clean Summary Strip */}
        <div className="mt-10 p-5 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 text-center">
          <span className="font-semibold text-slate-900 dark:text-slate-200">Sentinel-2 Imagery</span>
          <span>→</span>
          <span className="font-semibold text-slate-900 dark:text-slate-200">Multi-temporal Comparison</span>
          <span>→</span>
          <span className="font-semibold text-slate-900 dark:text-slate-200">Change Detection</span>
          <span>→</span>
          <span className="font-semibold text-slate-900 dark:text-slate-200">Changed-Zone Identification</span>
          <span>→</span>
          <span className="font-semibold text-slate-900 dark:text-slate-200">High-Resolution Verification</span>
          <span>→</span>
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">Human Verification</span>
        </div>
      </div>
    </section>
  );
}
