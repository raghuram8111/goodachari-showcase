import React, { useState } from 'react';
import { MapPin, Satellite, Cpu, Layers, FileCheck, Eye, UserCheck, ShieldCheck, Maximize2, Image as ImageIcon } from 'lucide-react';
import { NBKRIST_DEMO } from '../data/showcaseData';
import LightboxModal from './LightboxModal';

// Clean placeholder card for NBKRIST sequence
function SequencePlaceholder({ card, onClick }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all overflow-hidden flex flex-col shadow-sm"
    >
      <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
        {!imgError ? (
          <img
            src={card.path}
            alt={card.title}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-200"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="p-4 text-center space-y-2">
            <ImageIcon className="w-6 h-6 text-cyan-500 mx-auto opacity-70" />
            <div className="text-[11px] font-mono text-slate-700 dark:text-slate-300 font-medium">
              {card.title}
            </div>
            <div className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 bg-slate-200 dark:bg-slate-900 px-2 py-0.5 rounded inline-block">
              {card.file}
            </div>
          </div>
        )}

        {/* Phase Pill */}
        <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-900/85 text-[10px] font-mono font-bold text-cyan-300 border border-slate-700/60 shadow">
          {card.label}
        </span>

        {/* Hover Inspect Indicator */}
        <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-2.5 py-1 rounded bg-cyan-500 text-slate-950 text-xs font-mono font-bold flex items-center gap-1 shadow">
            <Maximize2 className="w-3 h-3" /> Inspect
          </span>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-xs font-bold font-mono text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
            {card.title}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            {card.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function NbkristDemoSection() {
  const [selectedModalCard, setSelectedModalCard] = useState(null);

  const getStepIcon = (icon) => {
    switch (icon) {
      case 'Satellite': return <Satellite className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />;
      case 'MapPin': return <MapPin className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />;
      case 'FileCheck': return <FileCheck className="w-4 h-4 text-teal-500 dark:text-teal-400" />;
      case 'Eye': return <Eye className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />;
      case 'UserCheck': return <UserCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />;
      default: return <Satellite className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="nbkrist-demo" className="py-24 bg-slate-50 dark:bg-[#070b12] border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="content-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            Real-World Prototype Evaluation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">
            {NBKRIST_DEMO.title}
          </h2>
          <h3 className="text-lg sm:text-xl font-medium text-emerald-600 dark:text-emerald-400 font-mono mt-1">
            {NBKRIST_DEMO.subheading}
          </h3>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            "{NBKRIST_DEMO.overview}"
          </p>
        </div>

        {/* Key Verification Finding Callout */}
        <div className="mb-14 p-5 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-500/30 space-y-2">
          <div className="flex items-center gap-2 text-sm font-mono font-bold text-emerald-700 dark:text-emerald-400">
            <ShieldCheck className="w-5 h-5 flex-shrink-0" />
            <span>Key Demonstration Outcome:</span>
          </div>
          <p className="text-sm font-mono text-slate-800 dark:text-slate-200 leading-relaxed pl-7">
            <strong>"{NBKRIST_DEMO.keyFinding}"</strong>
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-7 font-sans">
            "{NBKRIST_DEMO.humanVerificationNote}"
          </p>
        </div>

        {/* 4-Stage Visual Sequence: BEFORE -> AFTER -> DETECTED CHANGE -> VERIFICATION */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Visual Demonstration Sequence (Campus AOI)
            </span>
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
              Sentinel-2 Surface Reflectance
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {NBKRIST_DEMO.sequenceCards.map((card) => (
              <SequencePlaceholder
                key={card.id}
                card={card}
                onClick={() =>
                  setSelectedModalCard({
                    id: card.id,
                    title: card.title,
                    category: `NBKRIST AOI • ${card.label}`,
                    path: card.path,
                    summary: card.desc,
                    features: [
                      "NBKRIST Campus Area of Interest",
                      "Sentinel-2 Surface Reflectance (L2A)",
                      "Demonstrated physical change localization",
                    ],
                  })
                }
              />
            ))}
          </div>
        </div>

        {/* The Real Prototype Story Flow (Input -> AOI -> Analysis -> Detection -> Classification -> Verification -> Investigation) */}
        <div className="p-8 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
          <div className="max-w-3xl mb-8">
            <h4 className="text-lg font-bold font-mono text-slate-900 dark:text-white mb-1">
              The Real Prototype Story: End-to-End Campus Execution
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              Tracing the concrete data pipeline from raw satellite bands to the investigator's verified case file on the NBKRIST campus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
            {NBKRIST_DEMO.storySteps.map((step) => (
              <div
                key={step.phase}
                className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] font-bold text-slate-400">
                      STEP {step.phase}
                    </span>
                    <div className="p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      {getStepIcon(step.icon)}
                    </div>
                  </div>

                  <h5 className="text-xs font-bold font-mono text-slate-900 dark:text-white mb-0.5">
                    {step.title}
                  </h5>
                  <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
                    {step.subtitle}
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 dark:text-slate-400 font-sans leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-800">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal on card click */}
      {selectedModalCard && (
        <LightboxModal
          screenshot={selectedModalCard}
          onClose={() => setSelectedModalCard(null)}
        />
      )}
    </section>
  );
}
