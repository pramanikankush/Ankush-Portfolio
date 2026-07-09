import React from 'react';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  demoLink: string;
  repoLink: string;
  backendLink?: string;
}

const projects: Project[] = [
  {
    title: "Text-to-SQL Enterprise",
    category: "SQL RAG Analytics",
    description: "Natural language to SQL analytics platform with safe execution, schema understanding, and a Streamlit UI.",
    tech: ["FastAPI", "Streamlit", "SQLAlchemy", "ChromaDB", "Python", "Groq/Gemini"],
    image: "/images/projects/text-to-sql-preview.png",
    demoLink: "https://text-to-sql-enterprise-rag-u44ae2is6ppvvu77kxn5qh.streamlit.app",
    repoLink: "https://github.com/pramanikankush/Text-To-Sql-Enterprise-RAG"
  },
  {
    title: "BioMed RAG",
    category: "Medical AI SaaS",
    description: "Production-grade Medical RAG SaaS platform featuring hybrid dense-sparse search, reciprocal rank fusion (RRF), real-time Web Search, and admin diagnostics dashboard.",
    tech: ["FastAPI", "Bootstrap", "FAISS", "Cohere", "Groq", "Llama 3"],
    image: "/images/projects/biomed-rag-preview.png",
    demoLink: "https://biomed-rag-1.onrender.com",
    repoLink: "https://github.com/pramanikankush/BioMed-RAG"
  },
  {
    title: "AI Resume ATS Platform",
    category: "HR AI Screening",
    description: "Applicant Tracking System with semantic matching via FAISS vector search, keyword overlap, automated scoring, batch processing, and PDF report generation.",
    tech: ["FastAPI", "Streamlit", "FAISS", "Groq", "Gemini AI", "ReportLab"],
    image: "/images/projects/ats-platform-preview.png",
    demoLink: "https://ai-resume-ats-ho41.onrender.com/",
    repoLink: "https://github.com/pramanikankush/AI-Resume-ATS"
  },
  {
    title: "Code Explainer Enterprise",
    category: "AI Code Analytics",
    description: "Production-ready GenAI platform for deep code understanding, Big-O complexity analysis, security smell detection, and automated JUnit test generation. Note: Wake Backend first to spin up the API if cold.",
    tech: ["FastAPI", "Next.js", "Gemini AI", "Pydantic", "Tailwind", "Docker"],
    image: "/images/projects/code-explainer-preview.png",
    demoLink: "https://ai-code-explainer-frontend.onrender.com",
    repoLink: "https://github.com/pramanikankush/AI-Code-Explainer-",
    backendLink: "https://ai-code-explainer-backend.onrender.com/health"
  },
  {
    title: "Personal Cloud Storage",
    category: "Cloud Platform",
    description: "AI-powered file organization and secure cloud storage platform. Features intelligent file management, payment integration, responsive design, and smart search capabilities powered by Google Generative AI.",
    tech: ["Next.js", "Gemini AI", "Stripe", "Clerk Auth"],
    image: "/images/projects/personal-cloud-preview.png",
    demoLink: "https://personal-cloud-two.vercel.app/",
    repoLink: "https://github.com/pramanikankush/personal-cloud.git"
  },
  {
    title: "DocuMind",
    category: "Document Intelligence",
    description: "AI-powered document intelligence. Upload PDFs, extract text, split into overlapping semantic chunks, embed using Google's Gemini embeddings, and chat with context grounding.",
    tech: ["Streamlit", "Gemini AI", "FAISS", "Python", "Docker"],
    image: "/images/projects/documind-preview.png",
    demoLink: "https://cslvjnce36qtji4n7nrstq.streamlit.app/",
    repoLink: "https://github.com/pramanikankush/DocuMind"
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
            <span className="font-mono text-xs text-neutral-500">INDEX: 001 - 006</span>
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
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 scale-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
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
                    {project.backendLink && (
                      <a href={project.backendLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange hover:text-white transition-colors">
                        Wake Backend
                        <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      </a>
                    )}
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