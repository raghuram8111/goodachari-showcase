import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ApproachSection from './components/ApproachSection';
import PrototypeSection from './components/PrototypeSection';
import NbkristDemoSection from './components/NbkristDemoSection';
import WorkflowDiagram from './components/WorkflowDiagram';
import TechStack from './components/TechStack';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import ScreenshotGallery from './components/ScreenshotGallery';
import VideoSection from './components/VideoSection';
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

      {/* Main Showcase Flow */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero / Landing */}
        <Hero />

        {/* 2. The Problem */}
        <ProblemSection />

        {/* 3. Our Approach (Final Solution Concept Workflow) */}
        <ApproachSection />

        {/* 4. Current Prototype (What We Built) */}
        <PrototypeSection />

        {/* 5. Real-World Prototype Demonstration (NBKRIST Campus AOI) */}
        <NbkristDemoSection />

        {/* 6. Prototype Workflow (9-Step Interactive Pipeline) */}
        <WorkflowDiagram />

        {/* 7. Technology Stack (Organized by Architectural Layer) */}
        <TechStack />

        {/* 8. Prototype Architecture (Data Flow Pipeline) */}
        <ArchitectureDiagram />

        {/* 9. Prototype Screenshots (Inside the Prototype Gallery + Lightbox) */}
        <ScreenshotGallery />

        {/* 10. Demo Video (Prototype Demonstration) */}
        <VideoSection />

        {/* 11. Prototype vs Final Solution (Strategic Comparison Matrix) */}
        <PrototypeVsFinal />

        {/* 12. Final System Workflow (Government-Scale Automated Pipeline) */}
        <FinalSystemWorkflow />

        {/* 13. Future Integrations (What Comes Next) */}
        <FutureIntegrations />

        {/* 14. Role-Based Access Control (RBAC Tree) */}
        <RBACDiagram />

        {/* 15. Potential Impact (Why This Matters) */}
        <ImpactSection />

        {/* 16. References & Documentation */}
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
