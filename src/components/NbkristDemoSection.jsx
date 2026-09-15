import React, { useState } from 'react';
import { ShieldCheck, Maximize2, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { NBKRIST_DEMO } from '../data/showcaseData';
import LightboxModal from './LightboxModal';

function EvidenceCard({ card, onClick, large }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all overflow-hidden flex flex-col shadow-sm"
    >
      <div className={`relative ${large ? 'aspect-[4/3]' : 'aspect-[4/3]'} bg-slate-100 dark:bg-slate-950 flex items-center justify-center overflow-hidden`}>
        {!imgError ? (
          <img
            src={card.path}
            alt={card.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="p-6 text-center space-y-2">
            <ImageIcon className="w-8 h-8 text-cyan-500 mx-auto opacity-70" />
            <div className="text-sm font-mono text-slate-700 dark:text-slate-300 font-medium">
              {card.title}
            </div>
          </div>
        )}

        {/* Phase Label */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-slate-900/85 text-xs font-mono font-bold text-white border border-slate-700/60 shadow">
          {card.label}
        </span>

        {/* Hover Inspect */}
        <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 shadow">
            <Maximize2 className="w-3.5 h-3.5" /> Inspect
          </span>
        </div>
      </div>

      <div className="p-5">
        <h4 className="text-sm font-bold font-mono text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
          {card.title}
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
          {card.caption || card.desc}
        </p>
      </div>
    </div>
  );
}

export default function NbkristDemoSection() {
  const [selectedModalCard, setSelectedModalCard] = useState(null);

  const cards = NBKRIST_DEMO.sequenceCards;
  const beforeCard = cards.find(c => c.id === 'nbkrist-before');
  const afterCard = cards.find(c => c.id === 'nbkrist-after');
  const detectedCard = cards.find(c => c.id === 'nbkrist-detected');
  const verificationCard = cards.find(c => c.id === 'nbkrist-verification');

  const openModal = (card) => {
    setSelectedModalCard({
      id: card.id,
      title: card.title,
      category: `NBKRIST AOI • ${card.label}`,
      path: card.path,
      summary: card.desc,
      features: [
        "NBKRIST Campus Area of Interest",
        "Sentinel-2 Surface Reflectance (L2A)",
      ],
    });
  };

  return (
    <section id="nbkrist-demo" className="py-24 bg-slate-50 dark:bg-[#070b12] border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="w-[92%] lg:w-[94%] max-w-[1480px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">
            {NBKRIST_DEMO.title}
          </h2>
          <h3 className="text-lg sm:text-xl font-semibold text-emerald-600 dark:text-emerald-400 font-mono mt-2">
            {NBKRIST_DEMO.subheading}
          </h3>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            {NBKRIST_DEMO.overview}
          </p>
        </div>

        {/* Key Finding Callout */}
        <div className="mb-16 p-5 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-500/30 space-y-2 max-w-4xl">
          <div className="flex items-center gap-2 text-sm font-mono font-bold text-emerald-700 dark:text-emerald-400">
            <ShieldCheck className="w-5 h-5 flex-shrink-0" />
            <span>Key Demonstration Outcome</span>
          </div>
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed pl-7 font-sans">
            {NBKRIST_DEMO.keyFinding}
          </p>
        </div>

        {/* BEFORE → AFTER (large side-by-side) */}
        <div className="mb-16">
          <div className="mb-6">
            <h3 className="text-xl font-bold font-mono text-slate-900 dark:text-white">
              Before & After Observations
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
              NBKRIST Campus AOI — Sentinel-2 Surface Reflectance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {beforeCard && (
              <EvidenceCard card={beforeCard} onClick={() => openModal(beforeCard)} large />
            )}
            {afterCard && (
              <EvidenceCard card={afterCard} onClick={() => openModal(afterCard)} large />
            )}
          </div>
        </div>

        {/* DETECTED CHANGE + VERIFICATION */}
        <div className="mb-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold font-mono text-slate-900 dark:text-white">
              Detected Change & Verification
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {detectedCard && (
              <EvidenceCard card={detectedCard} onClick={() => openModal(detectedCard)} large />
            )}
            {verificationCard && (
              <EvidenceCard card={verificationCard} onClick={() => openModal(verificationCard)} large />
            )}
          </div>

          <p className="mt-6 text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed max-w-3xl">
            {NBKRIST_DEMO.humanVerificationNote}
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedModalCard && (
        <LightboxModal
          screenshot={selectedModalCard}
          onClose={() => setSelectedModalCard(null)}
        />
      )}
    </section>
  );
}
