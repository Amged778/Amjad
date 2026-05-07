import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navigation } from './components/Navigation';
import { SocialSidebar } from './components/SocialSidebar';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { HeroSection } from './components/HeroSection';
import { WorkSection } from './components/WorkSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ToolsSection } from './components/ToolsSection';
import { ContactSection } from './components/ContactSection';
import { GlobalMouseGlow } from './components/GlobalMouseGlow';
import { Preloader } from './components/Preloader';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Preloader />
      <div className="relative w-full bg-[#05020a] selection:bg-[#9d4edd] selection:text-white text-sans">
        
        {/* 1. Fixed Background Image */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://res.cloudinary.com/da6bl2ofx/image/upload/v1777937188/ChatGPT_Image_May_3_2026_05_20_18_AM_rmqpwv.png')` }}
          />
          {/* Overlay gradient to blend the rest of the sections */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05020a]/80 to-[#05020a]" />
        </div>

        {/* 2. Global UI Overlay Layers */}
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Navigation />
          <SocialSidebar />
          <WhatsAppWidget />
        </div>

      {/* 3. Scrollable Content */}
      <div className="relative z-10">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <ToolsSection />
        <ContactSection />
      </div>

      <GlobalMouseGlow />

      {/* Cinematic Vignette */}
      <div className="fixed inset-0 z-[100] pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />
      
      <SpeedInsights />
    </div>
    </>
  );
}
