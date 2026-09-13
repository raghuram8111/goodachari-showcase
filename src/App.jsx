import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ApproachSection from './components/ApproachSection';
import PrototypeSection from './components/PrototypeSection';
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

function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Top Navigation */}
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

        {/* 5. Prototype Workflow (9-Step Interactive Pipeline) */}
        <WorkflowDiagram />

        {/* 6. Technology Stack (Organized by Architectural Layer) */}
        <TechStack />

        {/* 7. Prototype Architecture (Data Flow Pipeline) */}
        <ArchitectureDiagram />

        {/* 8. Prototype Screenshots (Inside the Prototype Gallery + Lightbox) */}
        <ScreenshotGallery />

        {/* 9. Demo Video (Prototype Demonstration) */}
        <VideoSection />

        {/* 10. Prototype vs Final Solution (Strategic Comparison Matrix) */}
        <PrototypeVsFinal />

        {/* 11. Final System Workflow (Government-Scale Automated Pipeline) */}
        <FinalSystemWorkflow />

        {/* 12. Future Integrations (What Comes Next) */}
        <FutureIntegrations />

        {/* 13. Role-Based Access Control (RBAC Tree) */}
        <RBACDiagram />

        {/* 14. Potential Impact (Why This Matters) */}
        <ImpactSection />

        {/* 15. References & Documentation */}
        <ReferencesSection />
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
