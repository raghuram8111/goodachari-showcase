import React, { useState } from 'react';
import { Play, Film, Info } from 'lucide-react';

export default function VideoSection() {
  const [videoError, setVideoError] = useState(false);
  const videoPath = '/assets/demo/prototype-demo.mp4';

  return (
    <section id="demo" className="py-24 bg-[#080c14] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            08 / Demonstration
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            Prototype Demonstration
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed font-sans">
            "The demonstration shows the implemented prototype workflow from satellite imagery and change detection through verification and investigation."
          </p>
        </div>

        {/* Video Player Box */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-xl">
            {/* Player Top Bar */}
            <div className="px-5 py-3 border-b border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300 font-semibold">prototype-demo.mp4</span>
              </div>
              <span className="text-slate-500 text-[11px]">
                SIH 2026 Walkthrough
              </span>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center">
              {!videoError ? (
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-contain"
                  onError={() => setVideoError(true)}
                >
                  <source src={videoPath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}

              {/* Placeholder Fallback */}
              {videoError && (
                <div className="p-8 text-center flex flex-col items-center justify-center space-y-4 max-w-md">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                    <Play className="w-6 h-6 text-cyan-400 fill-cyan-400 translate-x-0.5" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold font-mono text-white">
                      Prototype Demo Coming Soon
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">
                      Target File: /public{videoPath}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Our live prototype screen recording demonstrating the automated ingestion, raster differencing, AOI clipping, and investigator review workflow is being prepared for upload.
                  </p>
                </div>
              )}
            </div>

            {/* Video Footer Note */}
            <div className="p-4 bg-slate-900/40 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="font-sans">Screen recording of prototype execution and case verification workflow.</span>
              </div>
              <span className="text-slate-500">Duration: ~3-5 mins</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
