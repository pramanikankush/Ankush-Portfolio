import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-brand-dark flex flex-col justify-center items-center overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="z-10 text-center relative px-4 w-full max-w-[100vw]">
        <div className="mb-4 md:mb-2 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 opacity-80">
          <span className="text-white font-light tracking-widest uppercase text-xs md:text-base">Ankush Pramanik</span>
          <span className="hidden md:inline text-neutral-600 font-thin">|</span>
          <span className="text-brand-orange md:text-neutral-400 font-bold md:font-light tracking-wide text-xs md:text-base">AI Architect</span>
        </div>

        {/* The massive text with masking effect */}
        <h1 className="relative font-sans font-black text-[16vw] md:text-[18vw] leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-800 select-none">
          PORT
          <br />
          FOLIO
          
          {/* Floating graphic element */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[100%] md:w-[120%] h-[15%] pointer-events-none mix-blend-exclusion flex items-center justify-center">
             <div className="w-full h-[2px] bg-brand-orange shadow-[0_0_30px_5px_rgba(255,85,0,0.6)]"></div>
          </div>
        </h1>
        
        <p className="mt-6 md:mt-8 text-neutral-500 max-w-[280px] md:max-w-md mx-auto text-xs md:text-base font-mono leading-relaxed">
          Building the bridge between human intent and machine intelligence.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <svg className="w-6 h-6 text-white opacity-50" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};