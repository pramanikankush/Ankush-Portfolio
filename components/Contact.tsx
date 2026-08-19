import React from 'react';

export const Contact: React.FC = () => {
   return (
      <section id="contact" className="relative py-24 bg-black text-white overflow-hidden border-t border-neutral-900">
         {/* Abstract line decoration */}
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent opacity-50"></div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
               <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] select-none">
                  READY TO <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-white">DEPLOY?</span>
               </h2>
               <p className="text-neutral-500 font-mono text-sm md:text-base mb-12 max-w-xl mx-auto">
                  I am currently available for freelance projects and full-time roles in AI Architecture and Agentic Workflow design.
               </p>

               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="mailto:ankushpramanik@gmail.com" className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
                     <span>Initialize Contact</span>
                     <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                  <a
                     href="/Ankush_Pramanik_Resume.pdf"
                     download="Ankush_Pramanik_Resume.pdf"
                     className="group inline-flex items-center gap-3 px-8 py-4 border border-brand-orange text-brand-orange font-bold tracking-widest uppercase hover:bg-brand-orange hover:text-white transition-all duration-300 rounded-sm"
                  >
                     <span>Resume</span>
                     <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  </a>
               </div>
            </div>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-neutral-900 pt-12">
               <div className="text-center md:text-left">
                  <h3 className="font-mono text-xs text-neutral-500 mb-4 uppercase tracking-widest">Social Nodes</h3>
                  <div className="flex flex-col gap-3 font-bold text-lg">
                     <a href="https://www.linkedin.com/in/ankush-pramanik-853565259/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">LinkedIn</a>
                     <a href="https://github.com/pramanikankush" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">GitHub</a>
                     <a href="https://www.instagram.com/_.ankusshhhh._/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Instagram</a>
                  </div>
               </div>

               <div className="text-center md:text-left">
                  <h3 className="font-mono text-xs text-neutral-500 mb-4 uppercase tracking-widest">Base of Operations</h3>
                  <p className="font-bold text-lg">Ghaziabad, UP</p>
                  <p className="text-neutral-600 text-sm mt-1">Remote Compatible</p>
               </div>

               <div className="text-center md:text-right flex flex-col justify-end">
                  <p className="font-mono text-xs text-neutral-600 leading-relaxed">
                     &copy; {new Date().getFullYear()} Protocol Systems.<br />
                     All Rights Reserved.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};