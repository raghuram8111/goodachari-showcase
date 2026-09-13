import React, { useState } from 'react';
import { Maximize2, ShieldCheck } from 'lucide-react';
import { SCREENSHOTS } from '../data/showcaseData';
import LightboxModal from './LightboxModal';

// Technical UI blueprint mockup for each placeholder
function PlaceholderGraphic({ id }) {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-950 font-mono text-[10px]">
      {/* Top Header Mockup */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <span className="text-slate-300 font-bold tracking-wider uppercase text-[9px]">{id}</span>
        </div>
        <span className="text-slate-400 text-[8px]">PROTOTYPE VIEW</span>
      </div>

      {/* Schematic Layout depending on view */}
      {id === 'dashboard' && (
        <div className="space-y-2 my-auto">
          <div className="grid grid-cols-3 gap-1">
            <div className="p-1 rounded bg-slate-800/80 border border-slate-700/60 text-center">
              <span className="text-slate-400 block text-[7px]">ALERTS</span>
              <span className="text-cyan-400 font-bold text-[10px]">14 ACTIVE</span>
            </div>
            <div className="p-1 rounded bg-slate-800/80 border border-slate-700/60 text-center">
              <span className="text-slate-400 block text-[7px]">AOI AREA</span>
              <span className="text-emerald-400 font-bold text-[10px]">1,240 Ha</span>
            </div>
            <div className="p-1 rounded bg-slate-800/80 border border-slate-700/60 text-center">
              <span className="text-slate-400 block text-[7px]">TRIAGE</span>
              <span className="text-amber-400 font-bold text-[10px]">8 PENDING</span>
            </div>
          </div>
          <div className="h-14 rounded bg-slate-800/40 border border-slate-700/40 flex items-center justify-center text-slate-400 text-[8px]">
            [AOI Boundary & Heatmap Layer]
          </div>
        </div>
      )}

      {id === 'change-detection' && (
        <div className="space-y-1.5 my-auto">
          <div className="grid grid-cols-2 gap-1 text-center">
            <div className="h-16 rounded bg-slate-800/60 border border-slate-700/60 p-1 flex flex-col justify-center">
              <span className="text-slate-400 text-[8px]">T1: Baseline (S2)</span>
              <span className="text-slate-400 text-[7px]">2025-10-12</span>
            </div>
            <div className="h-16 rounded bg-cyan-950/40 border border-cyan-700/40 p-1 flex flex-col justify-center">
              <span className="text-cyan-300 text-[8px]">T2: Recent (S2)</span>
              <span className="text-cyan-400 text-[7px]">2026-02-18</span>
            </div>
          </div>
          <div className="h-4 rounded bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400 text-[8px]">
            Δ NDVI / NDBI Reflectance Differential Layer
          </div>
        </div>
      )}

      {id === 'map' && (
        <div className="my-auto space-y-1">
          <div className="h-20 rounded bg-slate-800/30 border border-slate-700/40 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-geo-grid opacity-40"></div>
            <div className="absolute w-12 h-8 border border-emerald-400 bg-emerald-500/20 rounded"></div>
            <div className="absolute top-1 left-2 text-slate-400 text-[8px]">PostGIS GiST Layer</div>
            <div className="absolute bottom-1 right-2 text-cyan-400 text-[8px]">EPSG:4326</div>
          </div>
        </div>
      )}

      {id === 'detected-changes' && (
        <div className="space-y-1 my-auto text-[8px]">
          <div className="p-1 rounded bg-slate-800/60 border border-slate-700/60 flex justify-between">
            <span className="text-slate-300">POLY #102: Veg → Bare</span>
            <span className="text-emerald-400 font-bold">1.42 Ha</span>
          </div>
          <div className="p-1 rounded bg-slate-800/60 border border-slate-700/60 flex justify-between">
            <span className="text-slate-300">POLY #103: Bare → Impervious</span>
            <span className="text-amber-400 font-bold">0.86 Ha</span>
          </div>
          <div className="p-1 rounded bg-slate-800/60 border border-slate-700/60 flex justify-between">
            <span className="text-slate-300">POLY #104: Boundary Shift</span>
            <span className="text-rose-400 font-bold">2.10 Ha</span>
          </div>
        </div>
      )}

      {id === 'alerts' && (
        <div className="space-y-1.5 my-auto text-[8px]">
          <div className="p-1.5 rounded bg-rose-950/40 border border-rose-800/40 flex items-center justify-between">
            <span className="text-rose-300 font-bold">ALERT #49: HIGH CONFIDENCE</span>
            <span className="text-slate-400">10m ago</span>
          </div>
          <div className="p-1.5 rounded bg-amber-950/40 border border-amber-800/40 flex items-center justify-between">
            <span className="text-amber-300 font-bold">ALERT #48: MEDIUM THRESHOLD</span>
            <span className="text-slate-400">2h ago</span>
          </div>
        </div>
      )}

      {id === 'investigation' && (
        <div className="space-y-1.5 my-auto">
          <div className="h-12 rounded bg-slate-800/50 border border-slate-700/60 flex items-center justify-center text-[8px] text-cyan-300">
            [High-Res Esri Optical Context Review]
          </div>
          <div className="grid grid-cols-3 gap-1 text-[7px] text-center">
            <div className="p-1 rounded bg-emerald-950/80 border border-emerald-700 text-emerald-300 font-bold">CONFIRM</div>
            <div className="p-1 rounded bg-rose-950/80 border border-rose-700 text-rose-300 font-bold">REJECT</div>
            <div className="p-1 rounded bg-amber-950/80 border border-amber-700 text-amber-300 font-bold">UNCERTAIN</div>
          </div>
        </div>
      )}

      {id === 'reports' && (
        <div className="space-y-1.5 my-auto">
          <div className="p-2 rounded bg-slate-800/50 border border-slate-700/60 space-y-1 text-[8px]">
            <div className="flex justify-between text-slate-300 font-bold border-b border-slate-700 pb-1">
              <span>REPORT_DOSSIER_2026_09</span>
              <span className="text-cyan-400">PDF / JSON</span>
            </div>
            <div className="text-slate-400 text-[7px]">Spatial Coordinates + Change Δ + Officer Signature</div>
          </div>
        </div>
      )}

      {/* Footer Label */}
      <div className="border-t border-slate-800/80 pt-1.5 flex items-center justify-between text-[8px] text-slate-400">
        <span>Asset: {id}.png</span>
        <span className="text-cyan-400 font-bold flex items-center gap-1">
          Click to Inspect <Maximize2 className="w-2.5 h-2.5" />
        </span>
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
    <section id="screenshots" className="py-20 bg-[#0a0e17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-sm bg-cyan-500"></span>
            <span>07 / System Visuals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            Inside the Prototype
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Responsive screenshot showcase documenting the interface modules of our functioning prototype. Click any card to inspect the full-resolution modal.
          </p>
        </div>

        {/* Evaluation Policy Notice */}
        <div className="mb-10 p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              Verification & Asset Architecture
            </span>
            <p className="text-xs font-mono text-slate-300 leading-relaxed">
              In accordance with our engineering honesty guidelines, we do not present fabricated mockups as real satellite results. Each card links directly to its live asset file at <code className="text-cyan-300 font-mono">/public/assets/screenshots/[name].png</code>.
            </p>
          </div>
        </div>

        {/* Screenshot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCREENSHOTS.map((item) => {
            const hasError = imgErrorState[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedScreenshot(item)}
                className="group cursor-pointer rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/60 transition-all duration-200 overflow-hidden flex flex-col shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                {/* Image Container with Fallback */}
                <div className="relative aspect-[16/10] bg-slate-950 border-b border-slate-800 overflow-hidden flex items-center justify-center">
                  {!hasError ? (
                    <img
                      src={item.path}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <PlaceholderGraphic id={item.id} />
                  )}

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="px-3 py-1.5 rounded bg-cyan-500 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Inspect View
                    </span>
                  </div>

                  {/* Category Pill */}
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm border border-slate-700/80 text-[10px] font-mono text-cyan-300">
                    {item.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold font-mono text-white group-hover:text-cyan-300 transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="truncate max-w-[180px]">{item.file}</span>
                    <span className="text-cyan-400 font-semibold group-hover:translate-x-0.5 transition-transform">
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
