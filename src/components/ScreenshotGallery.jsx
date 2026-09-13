import React, { useState } from 'react';
import { Maximize2, ShieldCheck, Image as ImageIcon } from 'lucide-react';
import { SCREENSHOTS } from '../data/showcaseData';
import LightboxModal from './LightboxModal';

// Clean Minimalist Wireframe Placeholder
function PlaceholderGraphic({ file, title }) {
  return (
    <div className="w-full h-full p-5 flex flex-col justify-between bg-slate-100 dark:bg-slate-950 font-mono text-xs border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <span className="uppercase tracking-wider font-semibold text-slate-800 dark:text-slate-300">{title}</span>
        <span className="text-slate-400 dark:text-slate-500">PROTOTYPE VIEW</span>
      </div>

      <div className="my-auto text-center space-y-2 py-4">
        <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mx-auto text-slate-500">
          <ImageIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
        </div>
        <div className="text-[11px] text-slate-700 dark:text-slate-300 font-sans">
          Awaiting real prototype screenshot
        </div>
        <div className="text-[10px] text-cyan-700 dark:text-cyan-400 bg-white dark:bg-slate-900 px-2 py-1 rounded inline-block border border-slate-200 dark:border-slate-800">
          /assets/screenshots/{file}
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 border-t border-slate-200 dark:border-slate-900 pt-2">
        <span>Click to inspect details</span>
        <Maximize2 className="w-3 h-3 text-slate-400" />
      </div>
    </div>
  );
}

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
          <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            07 / Prototype Interface
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">
            Inside the Prototype
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            Screenshot catalog of the implemented prototype modules. Click any card to inspect the full-resolution view.
          </p>
        </div>

        {/* Verification Note */}
        <div className="mb-12 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs font-mono text-slate-800 dark:text-slate-300 leading-relaxed">
            In accordance with our engineering honesty guidelines, we do not present fabricated mockups as real satellite results. Each card links directly to its live asset file at <code className="text-cyan-700 dark:text-cyan-300 font-mono">/public/assets/screenshots/[name].png</code>.
          </p>
        </div>

        {/* Screenshot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCREENSHOTS.map((item) => {
            const hasError = imgErrorState[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedScreenshot(item)}
                className="group cursor-pointer rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all overflow-hidden flex flex-col shadow-sm"
              >
                {/* Image Container with Fallback */}
                <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-950 overflow-hidden flex items-center justify-center">
                  {!hasError ? (
                    <img
                      src={item.path}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-200"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <PlaceholderGraphic file={item.file} title={item.title} />
                  )}

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-900/90 text-[10px] font-mono text-cyan-300 border border-slate-700/60 shadow">
                    {item.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans line-clamp-2">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="truncate max-w-[180px]">{item.file}</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedScreenshot && (
        <LightboxModal
          screenshot={selectedScreenshot}
          onClose={() => setSelectedScreenshot(null)}
        />
      )}
    </section>
  );
}
