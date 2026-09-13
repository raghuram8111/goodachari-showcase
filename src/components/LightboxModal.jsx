import React, { useEffect } from 'react';
import { X, Image as ImageIcon, Info } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-cyan-700 dark:text-cyan-400 px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800">
              {screenshot.category}
            </span>
            <h3 className="text-lg font-bold font-mono text-slate-900 dark:text-white">
              {screenshot.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
              Path: {screenshot.path}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Image View Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="relative w-full min-h-[340px] sm:min-h-[440px] bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center overflow-hidden">
            {/* Real Image or Fallback */}
            <img
              src={screenshot.path}
              alt={`${screenshot.title} Prototype Screenshot`}
              className="max-h-[60vh] w-auto max-w-full object-contain rounded"
              onError={(e) => {
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
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-cyan-500/40 flex items-center justify-center shadow-sm">
                <ImageIcon className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div className="space-y-1">
                <div className="font-mono text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Placeholder Asset Reference
                </div>
                <div className="font-mono text-xs text-cyan-700 dark:text-cyan-400 bg-white dark:bg-slate-900 px-3 py-1 rounded border border-slate-200 dark:border-slate-800 inline-block">
                  {screenshot.path}
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                To show your live prototype screenshot here, place your image file at:
                <br />
                <code className="text-slate-800 dark:text-slate-300 text-[11px] font-mono mt-1 block">
                  /public{screenshot.path}
                </code>
              </p>
              <div className="p-3.5 rounded bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 text-left w-full space-y-1">
                <span className="text-cyan-700 dark:text-cyan-400 font-bold block">Summary of this view:</span>
                <p className="font-sans">{screenshot.summary}</p>
              </div>
            </div>
          </div>

          {/* Screenshot Detailed Explanations */}
          <div className="space-y-2 pt-2">
            <span className="font-mono text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              Technical Specification & View Description
            </span>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {screenshot.summary}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
          <span>GOODACHARI • Prototype Screenshot Inspector</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
