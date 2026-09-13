import React from 'react';
import { Layers, Satellite, Cpu, MapPin, Database, FileCheck, AlertOctagon, Bell, UserCheck, ShieldAlert } from 'lucide-react';
import { FINAL_SOLUTION_CONCEPT_STEPS } from '../data/showcaseData';

export default function ApproachSection() {
  const renderStepIcon = (index) => {
    switch (index) {
      case 0: return <Satellite className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 1: return <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 2: return <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 3: return <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 4: return <Database className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 5: return <FileCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 6: return <AlertOctagon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 7: return <Bell className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 8: return <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      default: return <Satellite className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="approach" className="py-24 bg-slate-50 dark:bg-[#080c14] border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="w-[92%] lg:w-[94%] max-w-[1480px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            02 / Solution Concept
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">
            From Satellite Change to Actionable Intelligence
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            The end-to-end vision links automated Earth observation directly to statutory verification and jurisdictional enforcement.
          </p>
        </div>

        {/* Clear Scope Labeling Callout */}
        <div className="mb-12 p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-500/30 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <span className="font-mono font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-300">
              Final Solution Concept
            </span>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              This diagram represents the broader <strong>Final Solution</strong> for full-scale government deployment. What has been concretely executed in our working proof-of-concept on the NBKRIST campus is detailed separately in the <strong>Current Prototype</strong> section below.
            </p>
          </div>
        </div>

        {/* Visual Workflow Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3">
          {FINAL_SOLUTION_CONCEPT_STEPS.map((item, index) => {
            const isLast = index === FINAL_SOLUTION_CONCEPT_STEPS.length - 1;
            return (
              <div
                key={item.step}
                className={`p-4 rounded-xl border flex flex-col justify-between transition-colors ${
                  isLast
                    ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-500/40'
                    : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] font-bold text-slate-400 dark:text-slate-500">
                      0{item.step}
                    </span>
                    <div className="p-1.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      {renderStepIcon(index)}
                    </div>
                  </div>

                  <h3 className="text-xs font-bold text-slate-900 dark:text-white font-mono mb-1 leading-snug">
                    {item.name}
                  </h3>
                </div>

                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed pt-3 border-t border-slate-200 dark:border-slate-800/80 font-sans mt-3">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
