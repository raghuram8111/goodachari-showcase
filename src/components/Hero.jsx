import React from 'react';
import { ArrowRight, Play, Satellite, Compass, ShieldCheck } from 'lucide-react';
import { PROJECT_INFO } from '../data/showcaseData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-geo-grid border-b border-slate-800/80">
      {/* Subtle decorative background gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Coordinate & Telemetry Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400 border-b border-slate-800/60 pb-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-slate-300">SYSTEM STATUS:</span>
            <span className="text-emerald-400 font-semibold">PROTOTYPE ONLINE</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 hidden sm:inline">REF: WGS 84 / EPSG:4326</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden md:inline">SENSOR INGEST: SENTINEL-2 + LANDSAT</span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="text-cyan-400 font-semibold tracking-wide">SIH 2026 TECHNICAL DOSSIER</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small SIH 2026 Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Satellite className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span className="font-semibold tracking-wide">{PROJECT_INFO.eventBadge}</span>
              <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
              <span className="text-slate-400">Engineering Showcase</span>
            </div>

            {/* Project Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-mono">
                {PROJECT_INFO.name}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-cyan-300 tracking-tight">
                {PROJECT_INFO.title}
              </h2>
            </div>

            {/* Short Tagline */}
            <p className="text-lg sm:text-xl font-medium text-slate-200 border-l-2 border-cyan-500 pl-4 py-1 italic">
              "{PROJECT_INFO.tagline}"
            </p>

            {/* Supporting Explanation */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {PROJECT_INFO.description}
            </p>

            {/* Clarification callout */}
            <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-400 font-mono space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>EVALUATION TRANSPARENCY NOTICE</span>
              </div>
              <p className="text-slate-400 leading-normal">
                This website is our official <strong>Prototype & Technical Showcase</strong> for the SIH 2026 evaluation jury. It presents our working proof-of-concept, architectural flows, and transparent evolution toward the broader government solution.
              </p>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#prototype"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-sm font-bold shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Prototype</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 hover:border-slate-600 font-mono text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
                <span>Watch Demo</span>
              </a>

              <a
                href="#prototype-vs-final"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
              >
                View Prototype vs Final Comparison
              </a>
            </div>
          </div>

          {/* Geospatial HUD / Orbit Motif (Right 5 cols) - Explicitly decorative */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl bg-slate-950/80 border border-slate-800 p-5 shadow-2xl hud-corner-tl hud-corner-br">
              {/* Decorative disclaimer badge */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4 font-mono text-[10px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GEOSPATIAL ORBITAL SIMULATION</span>
                </div>
                <span className="text-slate-400 text-[10px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  DECORATIVE HUD
                </span>
              </div>

              {/* Central Radar / Reticle Simulation Graphic */}
              <div className="relative w-full aspect-square max-w-[340px] mx-auto rounded-lg bg-[#070b12] border border-slate-800 flex items-center justify-center overflow-hidden">
                {/* Concentric distance rings */}
                <div className="absolute w-[80%] h-[80%] rounded-full border border-slate-800/90 border-dashed animate-spin-slow"></div>
                <div className="absolute w-[55%] h-[55%] rounded-full border border-cyan-500/20"></div>
                <div className="absolute w-[30%] h-[30%] rounded-full border border-emerald-500/30"></div>

                {/* Coordinate Crosshairs */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-slate-800"></div>
                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-slate-800"></div>

                {/* Rotating sweep cone */}
                <div className="absolute inset-0 bg-radar-sweep animate-spin" style={{ animationDuration: '8s' }}></div>

                {/* Simulated Detection Markers (Illustrative) */}
                <div className="absolute top-[28%] left-[62%] group cursor-default">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-cyan-400 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                  </div>
                  <div className="absolute left-3 -top-3 font-mono text-[9px] bg-slate-900/90 text-cyan-300 border border-cyan-500/40 px-1.5 py-0.5 rounded whitespace-nowrap shadow">
                    AOI-1: REFLECTANCE DELTA
                  </div>
                </div>

                <div className="absolute bottom-[32%] left-[25%] group cursor-default">
                  <div className="relative flex items-center justify-center">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </div>
                  <div className="absolute left-3 -top-3 font-mono text-[9px] bg-slate-900/90 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.5 rounded whitespace-nowrap shadow">
                    AOI-2: STABLE VEGETATION
                  </div>
                </div>

                {/* Center Target Indicator */}
                <div className="relative z-10 flex flex-col items-center justify-center bg-slate-950/90 p-2.5 rounded border border-cyan-500/50 shadow-lg">
                  <Satellite className="w-5 h-5 text-cyan-400 mb-1" />
                  <span className="font-mono text-[9px] text-slate-300">ORBIT TRACK</span>
                  <span className="font-mono text-[8px] text-cyan-400 font-bold">PASS #0492</span>
                </div>

                {/* Corner Coordinates */}
                <span className="absolute top-2 left-2 font-mono text-[8px] text-slate-400">
                  N 21° 08' 32"
                </span>
                <span className="absolute bottom-2 right-2 font-mono text-[8px] text-slate-400">
                  E 79° 05' 18"
                </span>
              </div>

              {/* HUD Telemetry Strip */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800 text-center font-mono">
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                  <div className="text-[10px] text-slate-400">CONSTELLATION</div>
                  <div className="text-xs font-semibold text-slate-200">S2 + L8/9</div>
                </div>
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                  <div className="text-[10px] text-slate-400">PROCESSING</div>
                  <div className="text-xs font-semibold text-cyan-400">Multi-Band Δ</div>
                </div>
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                  <div className="text-[10px] text-slate-400">SPATIAL DB</div>
                  <div className="text-xs font-semibold text-emerald-400">PostGIS 3.x</div>
                </div>
              </div>

              <div className="mt-3 text-[10px] text-slate-400 text-center font-mono italic">
                * Illustrative interface graphic. Real prototype screens are documented below.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
