import React from 'react';
import { ArrowRight, Play, Satellite, Compass, ArrowUpRight } from 'lucide-react';
import { PROJECT_INFO } from '../data/showcaseData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-geo-grid border-b border-slate-800/80">
      {/* Subtle decorative background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Copy (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Satellite className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold tracking-wide">{PROJECT_INFO.eventBadge}</span>
              <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
              <span className="text-slate-400">Technical Showcase</span>
            </div>

            {/* Project Title & Heading */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-mono">
                {PROJECT_INFO.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-cyan-300 tracking-tight">
                {PROJECT_INFO.title}
              </h2>
            </div>

            {/* Short Tagline */}
            <p className="text-base sm:text-lg font-medium text-slate-200 border-l-2 border-cyan-500 pl-3.5 py-0.5 italic">
              "{PROJECT_INFO.tagline}"
            </p>

            {/* Supporting Explanation */}
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              {PROJECT_INFO.description}
            </p>

            {/* IMMEDIATE SCOPE DISTINCTION BLOCK: CURRENT PROTOTYPE vs FINAL VISION */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 shadow-xl space-y-3 font-mono">
              <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800/80 pb-2">
                <span className="font-bold text-slate-200 uppercase tracking-wider">
                  Scope Distinction at a Glance
                </span>
                <span className="text-cyan-400 text-[10px]">
                  Transparent Engineering Roadmap
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Track 1: CURRENT PROTOTYPE */}
                <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                      Current Prototype
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 ml-auto">
                      Working
                    </span>
                  </div>
                  <ul className="text-[11px] text-slate-300 space-y-1 pt-0.5">
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold">›</span>
                      <span><strong>Prototype Data:</strong> Sentinel-2 + Landsat</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold">›</span>
                      <span>Target Demonstration AOI boundaries</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold">›</span>
                      <span>Multi-temporal change detection & triage</span>
                    </li>
                  </ul>
                </div>

                {/* Track 2: FINAL VISION */}
                <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/30 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
                      Final Vision
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 ml-auto">
                      Target
                    </span>
                  </div>
                  <ul className="text-[11px] text-slate-300 space-y-1 pt-0.5">
                    <li className="flex items-start gap-1.5">
                      <span className="text-cyan-400 font-bold">›</span>
                      <span><strong>Target Data:</strong> Official Indian EO (ISRO/Bhuvan)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-cyan-400 font-bold">›</span>
                      <span>Cadastral parcel & land-record lookup</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-cyan-400 font-bold">›</span>
                      <span>Continuous statewide monitoring & RBAC</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#prototype"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Prototype</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 hover:border-slate-600 font-mono text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
                <span>Watch Demo</span>
              </a>

              <a
                href="#final-vision"
                className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-cyan-300 underline underline-offset-4 transition-colors ml-1"
              >
                <span>Full Prototype vs Final Matrix</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Geospatial Simulation HUD (Right 5 cols) - Focused & Clean */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl bg-slate-950/90 border border-slate-800 p-5 shadow-2xl hud-corner-tl hud-corner-br">
              {/* HUD Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 font-mono text-[10px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-semibold text-slate-300">EARTH OBSERVATION TELEMETRY</span>
                </div>
                <span className="text-[9px] bg-slate-900 text-cyan-400 px-2 py-0.5 rounded border border-slate-800">
                  DECORATIVE HUD
                </span>
              </div>

              {/* Central Radar Reticle Simulation */}
              <div className="relative w-full aspect-square max-w-[320px] mx-auto rounded-lg bg-[#070b12] border border-slate-800 flex items-center justify-center overflow-hidden">
                {/* Concentric rings */}
                <div className="absolute w-[80%] h-[80%] rounded-full border border-slate-800/90 border-dashed animate-spin-slow"></div>
                <div className="absolute w-[55%] h-[55%] rounded-full border border-cyan-500/20"></div>
                <div className="absolute w-[30%] h-[30%] rounded-full border border-emerald-500/30"></div>

                {/* Coordinate Crosshairs */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-slate-800"></div>
                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-slate-800"></div>

                {/* Rotating sweep cone */}
                <div className="absolute inset-0 bg-radar-sweep animate-spin" style={{ animationDuration: '8s' }}></div>

                {/* Illustrated Detection Markers */}
                <div className="absolute top-[28%] left-[60%]">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                  </div>
                  <div className="absolute left-3 -top-2.5 font-mono text-[9px] bg-slate-900 text-cyan-300 border border-cyan-500/40 px-1.5 py-0.5 rounded shadow">
                    AOI-1: REFLECTANCE DELTA
                  </div>
                </div>

                <div className="absolute bottom-[30%] left-[25%]">
                  <span className="inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  <div className="absolute left-3 -top-2.5 font-mono text-[9px] bg-slate-900 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.5 rounded shadow">
                    AOI-2: STABLE BASELINE
                  </div>
                </div>

                {/* Center Sensor Badge */}
                <div className="relative z-10 flex flex-col items-center justify-center bg-slate-950/90 p-2.5 rounded border border-cyan-500/50 shadow-lg">
                  <Satellite className="w-5 h-5 text-cyan-400 mb-1" />
                  <span className="font-mono text-[9px] text-slate-300">SENSOR OVERPASS</span>
                  <span className="font-mono text-[8px] text-cyan-400 font-bold">S2 / L8 PASS</span>
                </div>
              </div>

              {/* Data & Stack Strip */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800 text-center font-mono">
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                  <div className="text-[9px] text-slate-400">PROTOTYPE DATA</div>
                  <div className="text-[11px] font-bold text-slate-200">Sentinel-2 + Landsat</div>
                </div>
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                  <div className="text-[9px] text-slate-400">PROCESSING</div>
                  <div className="text-[11px] font-bold text-cyan-400">Multi-Band Δ</div>
                </div>
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                  <div className="text-[9px] text-slate-400">GIS ENGINE</div>
                  <div className="text-[11px] font-bold text-emerald-400">PostgreSQL + PostGIS</div>
                </div>
              </div>

              <div className="mt-3 text-[10px] text-slate-500 text-center font-mono">
                * Illustrative HUD simulation. Live prototype interface screens are cataloged below.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
