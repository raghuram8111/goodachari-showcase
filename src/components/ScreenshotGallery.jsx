import React, { useState } from 'react';
import { Maximize2, Image as ImageIcon } from 'lucide-react';
import { SCREENSHOTS } from '../data/showcaseData';
import LightboxModal from './LightboxModal';

export default function ScreenshotGallery() {
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);
  const [imgErrorState, setImgErrorState] = useState({});

  const handleImageError = (id) => {
    setImgErrorState((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="screenshots" className="py-24 bg-white dark:bg-[#0a0e17] border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="w-[92%] lg:w-[94%] max-w-[1480px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">
            THE PROTOTYPE INTERFACE
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            Real user interface screenshots from the implemented GOODACHARI prototype. Click any image to inspect full resolution.
          </p>
        </div>

        {/* Uniform Grid — all 7 screenshots same size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {SCREENSHOTS.map((item, index) => {
            const hasError = imgErrorState[item.id];
            return (
              <div
                key={item.id}
                onClick={() => setSelectedScreenshot(item)}
                className="group cursor-pointer rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all overflow-hidden flex flex-col shadow-sm"
              >
                {/* Image — fixed aspect ratio identical across all cards */}
                <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-950 overflow-hidden flex items-center justify-center">
                  {!hasError ? (
                    <img
                      src={item.path}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-2 p-6 text-center">
                      <ImageIcon className="w-8 h-8 text-cyan-500 opacity-60" />
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400">{item.title}</span>
                    </div>
                  )}

                  {/* Order badge */}
                  <span className="absolute top-3 left-3 w-6 h-6 rounded-full bg-slate-900/80 text-white text-[11px] font-mono font-bold flex items-center justify-center shadow">
                    {index + 1}
                  </span>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 shadow">
                      <Maximize2 className="w-3.5 h-3.5" /> Inspect
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-5 flex flex-col gap-1">
                  <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedScreenshot && (
        <LightboxModal
          screenshot={selectedScreenshot}
          onClose={() => setSelectedScreenshot(null)}
        />
      )}
    </section>
  );
}
