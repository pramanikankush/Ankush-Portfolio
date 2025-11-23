import React from 'react';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  demoLink: string;
  repoLink: string;
}

const projects: Project[] = [
  {
    title: "LexAI",
    category: "Legal RAG Advisor",
    description: "An intelligent legal document analysis system powered by Retrieval-Augmented Generation. Provides instant legal insights, case analysis, and document review with AI-driven precision.",
    tech: ["Next.js", "Gemini AI", "RAG", "TypeScript"],
    image: "/images/projects/lexai-project.png",
    demoLink: "https://legal-rag-2.vercel.app/",
    repoLink: "https://github.com/pramanikankush/legal-rag-2.git"
  },
  {
    title: "YouTube Stats Tracker Builder",
    category: "Chrome Extension",
    description: "Generate custom YouTube Chrome extensions instantly. Track channel statistics, subscriber counts, and video analytics in real-time with a personalized dashboard experience.",
    tech: ["Chrome API", "YouTube API", "TypeScript", "React"],
    image: "/images/projects/youtube-stats-preview.png",
    demoLink: "https://youtube-stats-extension-builder.vercel.app/",
    repoLink: "https://github.com/pramanikankush/Youtube-stats-extension-builder.git"
  },
  {
    title: "Plant Health Analyzer",
    category: "AI-Powered Agriculture",
    description: "AI-powered disease detection and treatment system for plants. Upload plant images to receive instant diagnosis, treatment plans, progress tracking, and location-based alerts with PDF reports.",
    tech: ["Gemini AI", "Python", "Flask", "Computer Vision"],
    image: "/images/projects/plant-health-preview.png",
    demoLink: "https://plant-health-analyzer-1.onrender.com/",
    repoLink: "https://github.com/pramanikankush/Plant-Health-Analyzer.git"
  },
  {
    title: "Smart Invoice Scanner",
    category: "Document Intelligence",
    description: "AI-powered invoice extraction and management system. Automatically scan, extract, edit, and verify invoice data with dashboard analytics and Excel export capabilities powered by Google Gemini AI.",
    tech: ["Gemini AI", "Python", "Flask", "OCR"],
    image: "/images/projects/invoice-scanner-preview.png",
    demoLink: "https://your-invoice.onrender.com/",
    repoLink: "https://github.com/pramanikankush/your-invoice.git"
  },
  {
    title: "Personal Cloud Storage",
    category: "Cloud Platform",
    description: "AI-powered file organization and secure cloud storage platform. Features intelligent file management, payment integration, responsive design, and smart search capabilities powered by Google Generative AI.",
    tech: ["Next.js", "Gemini AI", "Stripe", "Clerk Auth"],
    image: "/images/projects/personal-cloud-preview.png",
    demoLink: "https://personal-cloud-two.vercel.app/",
    repoLink: "https://github.com/pramanikankush/personal-cloud.git"
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="relative py-16 md:py-20 bg-brand-dark text-white overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></span>
              <span className="font-mono text-xs text-brand-orange tracking-widest uppercase">System Deployments</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              SELECTED <br /> <span className="text-neutral-800 stroke-text">WORKS</span>
            </h2>
          </div>
          <div className="hidden md:block mb-2">
            <span className="font-mono text-xs text-neutral-500">INDEX: 001 - 005</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 hover:border-brand-orange/40 rounded-sm overflow-hidden flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(255,85,0,0.1)]"
            >

              {/* Image Container */}
              <div className="relative h-48 overflow-hidden border-b border-neutral-800/50 bg-black">
                {/* Orange overlay that disappears on hover */}
                <div className="absolute inset-0 bg-brand-orange/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                {/* Darken overlay */}
                <div className="absolute inset-0 bg-neutral-950/30 group-hover:bg-transparent transition-colors duration-700 z-10"></div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 scale-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />

                {/* Category Tag Overlay */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/5 rounded-full">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-300">{project.category}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2 text-neutral-100 group-hover:text-brand-orange transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono uppercase px-2 py-1 bg-neutral-800/50 border border-neutral-700 text-neutral-400 rounded-sm group-hover:border-neutral-600 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6 pt-6 border-t border-neutral-800 group-hover:border-neutral-700/50 transition-colors">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-brand-orange transition-colors">
                      Live View
                      <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors">
                      Codebase
                      <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decoration */}
        <div className="mt-12 flex flex-col items-center justify-center opacity-30">
          <div className="h-16 w-px bg-gradient-to-b from-transparent via-brand-orange to-transparent"></div>
          <span className="mt-4 font-mono text-[10px] tracking-widest text-brand-orange">END OF SECTION</span>
        </div>

      </div>
    </section>
  );
};