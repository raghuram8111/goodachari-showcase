import React, { useState } from 'react';
import { Play, Film, Info } from 'lucide-react';

export default function VideoSection() {
  const [videoError, setVideoError] = useState(false);
  const videoPath = '/assets/demo/prototype-demo.mp4';

  return (
    <section id="demo" className="py-20 bg-[#080c14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-sm bg-cyan-500"></span>
            <span>08 / Video Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono">
            Prototype Demonstration
          </h2>
          {/* Required Statement */}
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            "The demonstration shows the implemented prototype workflow from satellite imagery and change detection through verification and investigation."
          </p>
        </div>

        {/* Video Player Box (16:9 responsive) */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden hud-corner-tl hud-corner-br">
            {/* Player Top Bar */}
            <div className="px-5 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-200 font-semibold">prototype-demo.mp4</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 text-[10px] px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800">
                  SIH 2026 Walkthrough
                </span>
              </div>
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

              {/* Placeholder Fallback when MP4 is not yet in directory */}
              {videoError && (
                <div className="p-8 text-center flex flex-col items-center justify-center space-y-4 max-w-md">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-slate-900 border-2 border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                      <Play className="w-8 h-8 text-cyan-400 fill-cyan-400/20 translate-x-0.5" />
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-mono text-white">
                      Prototype Demo Coming Soon
                    </h3>
                    <p className="text-xs font-mono text-cyan-300">
                      Target File: <code className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">{videoPath}</code>
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Our live prototype screen recording demonstrating the automated ingestion, raster differencing, AOI clipping, and investigator review workflow is being prepared for upload.
                  </p>

                  <div className="text-[11px] font-mono text-slate-400 bg-slate-900/90 p-3 rounded-lg border border-slate-800 w-full text-left">
                    <span className="text-cyan-400 font-bold block mb-1">Demonstration Highlights:</span>
                    <ul className="space-y-1 text-slate-300">
                      <li>• Real-time T1 vs T2 split-pane comparison</li>
                      <li>• Threshold adjustment for NDVI reflectance delta</li>
                      <li>• Case status allocation (Confirmed / Rejected)</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Video Footer Note */}
            <div className="p-4 bg-slate-900/60 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Audio commentary and technical subtitles will be enabled on playback.</span>
              </div>
              <span className="text-slate-400 text-[11px]">Duration: ~3-5 mins</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
