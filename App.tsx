import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Transition } from './components/Transition';
import { Contact } from './components/Contact';

// Lazy load heavy components
const SkillsExperience = lazy(() => import('./components/SkillsExperience').then(m => ({ default: m.SkillsExperience })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const AiAgent = lazy(() => import('./components/AiAgent').then(m => ({ default: m.AiAgent })));

// Loading fallback component
const LoadingFallback: React.FC = () => (
  <div className="w-full min-h-[400px] flex items-center justify-center bg-brand-dark">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
      <span className="text-neutral-500 font-mono text-sm">Loading...</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-brand-dark overflow-x-hidden relative">
      <Navbar />

      <div id="hero">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <Transition />

      <div id="skills">
        <Suspense fallback={<LoadingFallback />}>
          <SkillsExperience />
        </Suspense>
      </div>

      <div id="projects">
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
      </div>

      <div id="agent">
        <Suspense fallback={<LoadingFallback />}>
          <AiAgent />
        </Suspense>
      </div>

      <Contact />
    </main>
  );
};

export default App;