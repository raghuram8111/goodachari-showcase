import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-slate-900/90 hover:bg-cyan-500 border border-cyan-500/40 hover:border-cyan-400 text-cyan-400 hover:text-slate-950 shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 group font-mono text-xs flex items-center gap-2"
    >
      <ArrowUp className="w-4 h-4" />
      <span className="hidden sm:inline font-bold">TOP</span>
    </button>
  );
}
