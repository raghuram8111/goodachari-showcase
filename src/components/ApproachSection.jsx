import React from 'react';
import { ArrowDown, Layers, Satellite, Cpu, MapPin, Database, FileCheck, AlertOctagon, Bell, UserCheck, ShieldAlert } from 'lucide-react';
import { FINAL_SOLUTION_CONCEPT_STEPS } from '../data/showcaseData';

export default function ApproachSection() {
  const renderStepIcon = (index) => {
    switch (index) {
      case 0: return <Satellite className="w-4 h-4 text-cyan-400" />;
      case 1: return <Layers className="w-4 h-4 text-cyan-400" />;
      case 2: return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 3: return <MapPin className="w-4 h-4 text-cyan-400" />;
      case 4: return <Database className="w-4 h-4 text-cyan-400" />;
      case 5: return <FileCheck className="w-4 h-4 text-cyan-400" />;
      case 6: return <AlertOctagon className="w-4 h-4 text-cyan-400" />;
      case 7: return <Bell className="w-4 h-4 text-cyan-400" />;
      case 8: return <UserCheck className="w-4 h-4 text-emerald-400" />;
      default: return <Satellite className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="approach" className="py-20 bg-[#080c14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-sm bg-cyan-500"></span>
            <span>02 / Conceptual Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            From Satellite Change to Actionable Intelligence
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            The end-to-end vision links continuous Earth observation directly to statutory verification and jurisdictional enforcement.
          </p>
        </div>

        {/* Clear Scope Labeling Callout */}
        <div className="mb-10 p-4 rounded-lg bg-cyan-950/30 border border-cyan-500/40 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
                Final Solution Concept
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-200 border border-cyan-600/50">
                Target Full-Scale Roadmap
              </span>
            </div>
            <p className="text-xs text-slate-300">
              <strong>Notice:</strong> This visual diagram illustrates the complete, broader final solution architecture. It clarifies the target pipeline for a full-scale government deployment. What has been concretely executed in our working proof-of-concept is detailed separately in the <strong>Current Prototype</strong> section below.
            </p>
          </div>
        </div>

        {/* Visual Workflow Chain (Responsive Grid / Stepper) */}
        <div className="relative">
          {/* Desktop connecting guide line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/20 via-cyan-500/40 to-emerald-500/30 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3 relative z-10">
            {FINAL_SOLUTION_CONCEPT_STEPS.map((item, index) => {
              const isLast = index === FINAL_SOLUTION_CONCEPT_STEPS.length - 1;
              return (
                <div
                  key={item.step}
                  className={`flex flex-col p-3.5 rounded-xl border transition-all ${
                    isLast
                      ? 'bg-emerald-950/30 border-emerald-500/50 hover:border-emerald-400'
                      : 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-slate-400">
                      0{item.step}
                    </span>
                    <div className="p-1.5 rounded-md bg-slate-800 border border-slate-700/60">
                      {renderStepIcon(index)}
                    </div>
                  </div>

                  <h3 className="text-xs font-bold text-white font-mono mb-1 leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-[11px] text-slate-400 leading-tight mt-auto pt-2 border-t border-slate-800/80">
                    {item.desc}
                  </p>

                  {/* Down arrow on mobile / tablet */}
                  {!isLast && (
                    <div className="lg:hidden flex justify-center pt-2 mt-2 border-t border-slate-800/60">
                      <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Narrative */}
        <div className="mt-8 p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400 font-mono flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-cyan-400 font-semibold">Core Principle:</span> The automated engine handles continuous ingestion, raster differencing, and parcel association; officers focus strictly on high-confidence verified anomalies.
          </div>
          <a
            href="#prototype"
            className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-4 whitespace-nowrap"
          >
            Inspect What We Built In The Prototype →
          </a>
        </div>
      </div>
    </section>
  );
}
