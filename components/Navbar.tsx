import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-exclusion text-white pointer-events-none">
        {/* Logo */}
        <div className="pointer-events-auto font-black tracking-tighter text-2xl cursor-pointer select-none" onClick={() => scrollTo('hero')}>
          AP<span className="text-brand-orange">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="pointer-events-auto hidden md:flex gap-8 font-mono text-sm tracking-widest uppercase">
          <button onClick={() => scrollTo('about')} className="hover:text-brand-orange transition-colors duration-300 font-bold">About</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-brand-orange transition-colors duration-300 font-bold">Skills</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-brand-orange transition-colors duration-300 font-bold">Projects</button>
          <button onClick={() => scrollTo('agent')} className="hover:text-brand-orange transition-colors duration-300 font-bold">Agent</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-brand-orange transition-colors duration-300 font-bold">Contact</button>
        </div>

        {/* Mobile Hamburger */}
        <button className="pointer-events-auto md:hidden space-y-1.5 p-2 group" onClick={() => setIsOpen(true)}>
          <div className="w-8 h-0.5 bg-current group-hover:bg-brand-orange transition-colors"></div>
          <div className="w-6 h-0.5 bg-current ml-auto group-hover:bg-brand-orange transition-colors"></div>
          <div className="w-8 h-0.5 bg-current group-hover:bg-brand-orange transition-colors"></div>
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`fixed inset-0 bg-brand-dark z-[60] flex flex-col items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute top-6 right-6 text-white p-4 hover:text-brand-orange transition-colors" onClick={() => setIsOpen(false)}>
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <div className="flex flex-col gap-8 text-center text-white font-black text-5xl tracking-tighter">
           <button onClick={() => scrollTo('about')} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-orange hover:to-white transition-all">About</button>
           <button onClick={() => scrollTo('skills')} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-orange hover:to-white transition-all">Skills</button>
           <button onClick={() => scrollTo('projects')} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-orange hover:to-white transition-all">Projects</button>
           <button onClick={() => scrollTo('agent')} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-orange hover:to-white transition-all">Agent</button>
           <button onClick={() => scrollTo('contact')} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-orange hover:to-white transition-all">Contact</button>
        </div>

        <div className="absolute bottom-10 text-neutral-500 font-mono text-xs">
            PROTOCOL // v2.5
        </div>
      </div>
    </>
  );
};