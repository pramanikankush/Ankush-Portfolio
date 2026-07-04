import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-24 bg-brand-paper text-neutral-900 overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-12 items-center">

          {/* Left Content */}
          <div className="md:w-1/2 relative order-2 md:order-1">
            {/* Hand-drawn decorative arrow SVG - positioned relative to container now for mobile safety */}
            <div className="absolute -top-12 md:-top-16 left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0 w-32 h-32 md:w-48 md:h-48 text-neutral-800 pointer-events-none opacity-80 rotate-12 md:rotate-12 hidden md:block">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M40,150 C60,50 150,50 150,150 C150,200 100,200 80,160" strokeDasharray="5,5" />
                <path d="M75,165 L80,160 L85,168" />
                <text x="20" y="40" fontFamily='"Reenie Beanie", cursive' fontSize="40" fill="currentColor" stroke="none">About me</text>
              </svg>
            </div>

            {/* Mobile Only Header text to replace the SVG arrow on small screens */}
            <div className="md:hidden font-hand text-3xl text-neutral-600 mb-4 -rotate-6 text-center">
              About me &darr;
            </div>

            <h2 className="mt-0 md:mt-24 text-4xl md:text-5xl font-bold leading-tight mb-6 md:mb-8 text-center md:text-left">
              Greetings, <span className="text-brand-orange">Humans</span> & <span className="text-neutral-500">Agents</span>.
            </h2>

            <p className="text-base md:text-xl text-neutral-700 leading-relaxed font-light mb-6 text-justify md:text-left">
              I build software that thinks. While others write standard linear code, I design autonomous agent loops that reason, verify, and self-correct until a goal is met.
            </p>
            <p className="text-base md:text-xl text-neutral-700 leading-relaxed font-light text-justify md:text-left">
              From crafting context-rich RAG pipelines to orchestrating specialized multi-agent systems, I focus on building reliable agentic architectures. I am fascinated by loop engineering and inference-time compute budget optimization, building the next generation of cognitive software.
            </p>
          </div>

          {/* Right Image (Profile Sketch) */}
          <div className="w-full md:w-1/2 flex justify-center relative order-1 md:order-2">
            {/* Decorative background elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Layered shadow cards for depth */}
              <div className="absolute w-64 h-[400px] md:w-96 md:h-[600px] bg-neutral-300 rounded-sm rotate-6 opacity-40 blur-sm"></div>
              <div className="absolute w-64 h-[400px] md:w-96 md:h-[600px] bg-neutral-400 rounded-sm -rotate-3 opacity-30 blur-md"></div>
            </div>

            {/* Main image container with creative styling */}
            <div className="relative w-64 h-[400px] md:w-96 md:h-[600px] bg-white grayscale contrast-125 brightness-110 overflow-hidden transform rotate-2 md:rotate-1 transition-all hover:rotate-0 hover:scale-105 duration-500 group">
              {/* Torn paper edge effect */}
              <div className="absolute inset-0 border-8 border-white" style={{
                clipPath: 'polygon(0% 2%, 3% 0%, 7% 2%, 12% 0%, 16% 1%, 20% 0%, 25% 2%, 30% 0%, 34% 1%, 38% 0%, 43% 2%, 47% 0%, 52% 1%, 56% 0%, 61% 2%, 65% 0%, 70% 1%, 74% 0%, 79% 2%, 83% 0%, 88% 1%, 92% 0%, 97% 2%, 100% 0%, 100% 100%, 0% 100%)'
              }}></div>

              {/* Profile sketch portrait */}
              <img
                src="/images/profile-sketch.jpg"
                alt="Profile Sketch"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
              />

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-brand-orange opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-brand-orange opacity-60"></div>

              {/* Subtle vignette effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(240,240,240,0.8)]"></div>

              {/* Tape effect on top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-amber-50 opacity-40 rotate-1 shadow-md" style={{
                background: 'repeating-linear-gradient(90deg, rgba(255,248,220,0.6) 0px, rgba(255,248,220,0.4) 2px, transparent 2px, transparent 4px)'
              }}></div>
            </div>

            {/* Pencil texture overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sketch-header.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>

            {/* Floating decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-2 border-neutral-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-8 h-8 bg-brand-orange opacity-20 rotate-45"></div>
          </div>

        </div>
      </div>
    </section>
  );
};