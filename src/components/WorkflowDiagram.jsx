import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, Shield, ChevronRight } from 'lucide-react';
import { PROTOTYPE_WORKFLOW_STEPS } from '../data/showcaseData';

export default function WorkflowDiagram() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROTOTYPE_WORKFLOW_STEPS[activeStepIndex];

  return (
    <section id="workflow" className="py-20 bg-[#080c14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-sm bg-cyan-500"></span>
            <span>04 / Step-by-Step Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            Prototype Workflow
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            The end-to-end execution pipeline implemented within our prototype: from raw satellite raster acquisition to human investigator determination.
          </p>
        </div>

        {/* 9-Step Horizontal Navigation Strip */}
        <div className="mb-8 overflow-x-auto pb-3">
          <div className="flex items-center gap-2 min-w-[800px] border-b border-slate-800/80 pb-3">
            {PROTOTYPE_WORKFLOW_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md font-mono text-xs transition-all ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800'
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-slate-900 font-extrabold' : 'text-cyan-400'}`}>
                    {step.number}
                  </span>
                  <span className="whitespace-nowrap">{step.title}</span>
                  {idx < PROTOTYPE_WORKFLOW_STEPS.length - 1 && (
                    <ChevronRight className={`w-3 h-3 ${isActive ? 'text-slate-900' : 'text-slate-600'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Left Detail Panel (7 cols) */}
          <div className="lg:col-span-7 p-6 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-800 text-cyan-300 font-mono text-xs font-bold">
                  STEP {activeStep.number} OF 09
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900">
                  {activeStep.statusBadge}
                </span>
              </div>
              <span className="font-mono text-xs text-slate-400">
                Phase: Processing & Triage
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white font-mono mb-3">
              {activeStep.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeStep.summary}
            </p>

            {/* Technical Detail Box */}
            <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 mb-6 space-y-2">
              <span className="font-mono text-[11px] font-bold uppercase text-cyan-400 tracking-wider block">
                Technical Mechanism:
              </span>
              <p className="text-xs font-mono text-slate-300 leading-relaxed">
                {activeStep.technicalDetail}
              </p>
            </div>

            {/* Input & Output telemetry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-slate-400 uppercase text-[10px]">Data Inputs:</span>
                <div className="text-slate-200 bg-slate-950/60 p-2 rounded border border-slate-800/80">
                  {activeStep.inputs}
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 uppercase text-[10px]">Produced Output:</span>
                <div className="text-cyan-300 bg-cyan-950/20 p-2 rounded border border-cyan-900/40">
                  {activeStep.output}
                </div>
              </div>
            </div>

            {/* Step Prev/Next Controls */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-xs font-mono text-slate-300 transition-colors"
              >
                ← Previous Step
              </button>
              <span className="text-xs font-mono text-slate-400">
                {activeStepIndex + 1} / 9
              </span>
              <button
                disabled={activeStepIndex === PROTOTYPE_WORKFLOW_STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(PROTOTYPE_WORKFLOW_STEPS.length - 1, prev + 1))}
                className="px-3 py-1.5 rounded bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 disabled:hover:bg-cyan-600 text-xs font-mono font-bold text-slate-950 transition-colors"
              >
                Next Step →
              </button>
            </div>
          </div>

          {/* Right Workflow Overview Matrix (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block mb-3">
                Full Workflow Sequence
              </span>
              <div className="space-y-2">
                {PROTOTYPE_WORKFLOW_STEPS.map((s, idx) => (
                  <div
                    key={s.number}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-2.5 rounded-lg border cursor-pointer transition-all flex items-center justify-between text-xs font-mono ${
                      activeStepIndex === idx
                        ? 'bg-cyan-950/40 border-cyan-500/60 text-cyan-200'
                        : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                        activeStepIndex === idx ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {s.number}
                      </span>
                      <span>{s.title}</span>
                    </div>
                    {idx === 8 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                        Verdict
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DECISION STATES HIGHLIGHT BLOCK (Mandated Requirement) */}
        <div className="rounded-xl bg-slate-950 border border-slate-800 p-6 shadow-xl">
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-1">
              <Shield className="w-4 h-4" />
              <span>Step 09 Decision Outcomes</span>
            </div>
            <h3 className="text-xl font-bold text-white font-mono">
              Operational Decision States in Prototype
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Following multi-band detection and high-resolution optical inspection, the human investigator assigns one of three definitive operational states:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Confirmed */}
            <div className="p-5 rounded-xl bg-emerald-950/10 border border-emerald-500/40 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold font-mono text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>CONFIRMED</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Actionable
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Verified genuine ground alteration (e.g., unauthorized structure, deforestation, boundary encroachment). Escalated for formal statutory verification or field enforcement.
              </p>
            </div>

            {/* Rejected */}
            <div className="p-5 rounded-xl bg-rose-950/10 border border-rose-500/40 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold font-mono text-rose-400">
                  <XCircle className="w-5 h-5" />
                  <span>REJECTED</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
                  Dismissed
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Determined as a false positive caused by seasonal agricultural harvesting, ephemeral soil moisture fluctuations, or cloud boundary artifacts. Dismissed with audit record.
              </p>
            </div>

            {/* Uncertain */}
            <div className="p-5 rounded-xl bg-amber-950/10 border border-amber-500/40 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold font-mono text-amber-400">
                  <HelpCircle className="w-5 h-5" />
                  <span>UNCERTAIN</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                  Pending Verification
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ambiguous spectral or optical signature. Queued for scheduled re-examination on the subsequent satellite pass or physical spot-check by field officers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
