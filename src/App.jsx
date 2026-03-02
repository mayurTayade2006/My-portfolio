import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import GlassmorphicArrayBackground from './components/GlassmorphicArrayBackground';
import GeometricWaveBackground from './components/GeometricWaveBackground';
import CodingProfiles from './components/CodingProfiles';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#050510] text-[#F9FAFB] font-outfit relative">
      <Navbar />
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Gradient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-purple-600/20 blur-[120px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />

        {/* New 3D Geometric Wave Animation for Hero */}
        <GeometricWaveBackground />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        {/* CSS Grid Layering seamlessly aligns sticking background behind scrolling content */}
        <div className="grid grid-cols-1 grid-rows-1 w-full">
          <div className="col-start-1 row-start-1 z-0 pointer-events-none">
            <div className="sticky top-0 h-screen w-full">
              <GlassmorphicArrayBackground />
            </div>
          </div>

          <div className="col-start-1 row-start-1 z-10">
            <About />
            <Projects />
            <CodingProfiles />
            <Skills />
            <Experience />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
