import React, { useState } from 'react';
import { Play, Info } from 'lucide-react';

export default function VideoSection() {
  const [videoError, setVideoError] = useState(false);
  const videoPath = '/assets/demo/prototype-demo.mp4';

  return (
    <section id="demo" className="py-24 bg-slate-50 dark:bg-[#080c14] border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="w-[92%] lg:w-[94%] max-w-[1480px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">
            PROTOTYPE DEMONSTRATION
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            See the GOODACHARI prototype in action.
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm dark:shadow-xl">
            <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
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

              {videoError && (
                <div className="p-8 text-center flex flex-col items-center justify-center space-y-4 max-w-md">
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 flex items-center justify-center shadow-sm">
                    <Play className="w-6 h-6 text-cyan-600 dark:text-cyan-400 fill-current translate-x-0.5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold font-mono text-slate-900 dark:text-white">
                      Demo Video
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    The prototype demonstration video is being prepared.
                  </p>
                </div>
              )}
            </div>

            {/* Caption */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-sm font-sans text-slate-600 dark:text-slate-400">
              <Info className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
              <span>End-to-end demonstration of the current prototype workflow.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
