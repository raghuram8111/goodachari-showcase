import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, ChevronRight } from 'lucide-react';
import { PROTOTYPE_WORKFLOW_STEPS } from '../data/showcaseData';

export default function WorkflowDiagram() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROTOTYPE_WORKFLOW_STEPS[activeStepIndex];

  return (
    <section id="workflow" className="py-24 bg-slate-50 dark:bg-[#080c14] border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="w-[92%] lg:w-[94%] max-w-[1480px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            04 / Step-by-Step Execution
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">
            Prototype Workflow
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            The core execution pipeline implemented within our prototype: from satellite raster acquisition down to investigator decision.
          </p>
        </div>

        {/* 9-Step Horizontal Navigation Strip */}
        <div className="mb-10 overflow-x-auto pb-2">
          <div className="flex items-center gap-2 min-w-[780px] border-b border-slate-200 dark:border-slate-800/60 pb-3">
            {PROTOTYPE_WORKFLOW_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center gap-2 px-3 py-2 rounded font-mono text-xs transition-colors ${
                    isActive
                      ? 'bg-cyan-600 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold shadow-sm'
                      : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-800/60'
                  }`}
                >
                  <span>{step.number}</span>
                  <span className="whitespace-nowrap">{step.title}</span>
                  {idx < PROTOTYPE_WORKFLOW_STEPS.length - 1 && (
                    <ChevronRight className={`w-3 h-3 ${isActive ? 'text-white dark:text-slate-900' : 'text-slate-400 dark:text-slate-600'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Left Detail Panel */}
          <div className="lg:col-span-7 p-7 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                Step {activeStep.number} of 09
              </span>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                Phase: Processing & Triage
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-mono mb-2">
                {activeStep.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {activeStep.summary}
              </p>
            </div>

            {/* Technical Mechanism */}
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 space-y-1 text-xs">
              <span className="font-mono font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block">
                Technical Mechanism:
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {activeStep.technicalDetail}
              </p>
            </div>

            {/* Input & Output */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-slate-500 dark:text-slate-400 uppercase text-[10px]">Data Inputs:</span>
                <div className="text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-950/60 p-2.5 rounded border border-slate-200 dark:border-slate-800/60">
                  {activeStep.inputs}
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 dark:text-slate-400 uppercase text-[10px]">Produced Output:</span>
                <div className="text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-slate-950/60 p-2.5 rounded border border-cyan-200 dark:border-slate-800/60">
                  {activeStep.output}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 font-mono text-xs">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30 text-slate-700 dark:text-slate-300 transition-colors"
              >
                ← Previous Step
              </button>
              <span className="text-slate-500 dark:text-slate-400">
                {activeStepIndex + 1} / 9
              </span>
              <button
                disabled={activeStepIndex === PROTOTYPE_WORKFLOW_STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(PROTOTYPE_WORKFLOW_STEPS.length - 1, prev + 1))}
                className="px-3 py-1.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 font-bold disabled:opacity-30 transition-colors"
              >
                Next Step →
              </button>
            </div>
          </div>

          {/* Right Workflow Steps List */}
          <div className="lg:col-span-5 p-5 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
              Workflow Sequence
            </span>
            <div className="space-y-1.5">
              {PROTOTYPE_WORKFLOW_STEPS.map((s, idx) => (
                <div
                  key={s.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-2.5 rounded border cursor-pointer transition-colors flex items-center justify-between text-xs font-mono ${
                    activeStepIndex === idx
                      ? 'bg-slate-100 dark:bg-slate-800/90 border-cyan-500/50 text-cyan-700 dark:text-cyan-200 font-medium'
                      : 'bg-transparent border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 dark:text-slate-500 font-semibold">{s.number}</span>
                    <span>{s.title}</span>
                  </div>
                  {idx === 8 && (
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Verdict</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DECISION STATES BLOCK */}
        <div className="rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          <div className="max-w-3xl mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono">
              Operational Decision States (Step 09)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-sans">
              Following multi-band detection and high-resolution optical inspection, the human investigator assigns one of three definitive operational states:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Confirmed */}
            <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 text-sm font-bold font-mono text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>CONFIRMED</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                Verified genuine ground alteration (e.g., unauthorized construction, ground clearing, boundary encroachment). Escalated for formal statutory review or field enforcement.
              </p>
            </div>

            {/* Rejected */}
            <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 text-sm font-bold font-mono text-rose-700 dark:text-rose-400">
                <XCircle className="w-4 h-4" />
                <span>REJECTED</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                Determined as a false positive caused by seasonal agricultural harvesting, soil moisture variations, or cloud boundary artifacts. Dismissed with audit record.
              </p>
            </div>

            {/* Uncertain */}
            <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 text-sm font-bold font-mono text-amber-700 dark:text-amber-400">
                <HelpCircle className="w-4 h-4" />
                <span>UNCERTAIN</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                Ambiguous spectral or optical signature. Queued for scheduled re-examination on the subsequent satellite pass or physical spot-check by field officers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
