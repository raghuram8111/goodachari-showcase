import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import NbkristDemoSection from './components/NbkristDemoSection';
import ScreenshotGallery from './components/ScreenshotGallery';
import WorkflowDiagram from './components/WorkflowDiagram';
import TechStack from './components/TechStack';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import PrototypeVsFinal from './components/PrototypeVsFinal';
import FinalSystemWorkflow from './components/FinalSystemWorkflow';
import FutureIntegrations from './components/FutureIntegrations';
import RBACDiagram from './components/RBACDiagram';
import ImpactSection from './components/ImpactSection';
import ReferencesSection from './components/ReferencesSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function AppContent() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-200 transition-colors">
      {/* Sticky Top Navigation with Light/Dark Mode Toggle */}
      <Navbar />

      {/* Main Evidence-First Showcase Flow */}
      <main className="flex-1 flex flex-col">
        {/* A. HERO */}
        <Hero />

        {/* B. PROTOTYPE DEMONSTRATION / DEMO VIDEO */}
        <VideoSection />

        {/* C. NBKRIST CAMPUS — REAL-WORLD AOI DEMONSTRATION */}
        <NbkristDemoSection />

        {/* D. PROTOTYPE SCREENSHOTS */}
        <ScreenshotGallery />

        {/* E. HOW THE PROTOTYPE WORKS */}
        <WorkflowDiagram />

        {/* F. TECHNICAL ARCHITECTURE */}
        <TechStack />
        <ArchitectureDiagram />

        {/* G. PROTOTYPE → FINAL SYSTEM */}
        <PrototypeVsFinal />

        {/* H. FINAL SYSTEM VISION */}
        <FinalSystemWorkflow />
        <FutureIntegrations />
        <RBACDiagram />

        {/* I. IMPACT / REFERENCES */}
        <ImpactSection />
        <ReferencesSection />
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
