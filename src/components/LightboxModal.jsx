import React, { useEffect } from 'react';
import { X, Image as ImageIcon, CheckCircle, Info } from 'lucide-react';

export default function LightboxModal({ screenshot, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!screenshot) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800">
              {screenshot.category}
            </span>
            <h3 className="text-lg font-bold font-mono text-white">
              {screenshot.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Path: {screenshot.path}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Image View Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="relative w-full min-h-[360px] sm:min-h-[460px] bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden">
            {/* Real Image or Engineered Fallback */}
            <img
              src={screenshot.path}
              alt={`${screenshot.title} Prototype Screenshot`}
              className="max-h-[60vh] w-auto max-w-full object-contain rounded"
              onError={(e) => {
                // If missing, show clear placeholder canvas
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById(`lightbox-fallback-${screenshot.id}`);
                if (fallback) fallback.style.display = 'flex';
              }}
            />

            {/* Fallback container if file not yet uploaded */}
            <div
              id={`lightbox-fallback-${screenshot.id}`}
              className="hidden flex-col items-center justify-center p-8 text-center space-y-4 max-w-lg"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="space-y-1">
                <div className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  Placeholder Asset Reference
                </div>
                <div className="font-mono text-xs text-cyan-400 bg-slate-900 px-3 py-1 rounded border border-slate-800 inline-block">
                  {screenshot.path}
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                To show your live prototype screenshot here, drop your image file into the project at:
                <br />
                <code className="text-slate-300 text-[11px] font-mono mt-1 block">
                  /public{screenshot.path}
                </code>
              </p>
              <div className="p-3 rounded bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300 text-left w-full space-y-1">
                <span className="text-cyan-400 font-bold block">Summary of this view:</span>
                <p>{screenshot.summary}</p>
              </div>
            </div>
          </div>

          {/* Screenshot Detailed Explanations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="md:col-span-2 space-y-2">
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                Technical Specification & View Description
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {screenshot.summary}
              </p>
            </div>

            <div className="space-y-2 p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-mono text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                Key Components
              </span>
              <ul className="space-y-1.5">
                {screenshot.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>GODACHARI • Prototype Screenshot Inspector</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
