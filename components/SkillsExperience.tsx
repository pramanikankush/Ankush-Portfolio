import React from 'react';
import { Skill } from '../types';

const skills: Skill[] = [
    { name: 'Large Language Models (LLMs)', level: 95 },
    { name: 'Agentic Workflows (LangChain)', level: 90 },
    { name: 'RAG Architecture', level: 92 },
    { name: 'Prompt Engineering', level: 88 },
    { name: 'Vector Databases (Pinecone/Chroma)', level: 85 },
    { name: 'Fine-tuning & PEFT (LoRA)', level: 87 },
    { name: 'Python & PyTorch', level: 85 },
    { name: 'React & TypeScript', level: 80 },
    { name: 'Multi-Agent Systems (AutoGen)', level: 83 },
    { name: 'Embeddings & Semantic Search', level: 90 },
    { name: 'Google Gemini API', level: 92 },
    { name: 'OpenAI API & GPT Models', level: 88 },
];

export const SkillsExperience: React.FC = () => {
    return (
        <section className="relative w-full py-20 md:py-24 bg-brand-paper text-neutral-900">
            <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-center leading-[0.9]">
                        Skills
                    </h2>
                </div>

                <div className="flex justify-center">

                    {/* Skills Section */}
                    <div className="w-full max-w-6xl">
                        <div className="mb-12 relative text-center">
                            <h3 className="font-hand text-5xl md:text-6xl text-neutral-800 transform -rotate-2 inline-block">
                                Engineer Skills
                                <svg className="absolute -right-8 bottom-0 w-8 h-8 text-neutral-800 hidden md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 14l-7 7m0 0l-7-7" />
                                </svg>
                            </h3>
                        </div>

                        {/* Two Column Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="group opacity-0 animate-fadeInUp"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        animationFillMode: 'forwards'
                                    }}
                                >
                                    <div className="flex justify-between mb-2 font-bold text-base md:text-lg tracking-tight">
                                        <span>{skill.name}</span>
                                    </div>
                                    <div className="h-4 w-full bg-neutral-300 relative overflow-hidden">
                                        <div
                                            className="h-full bg-brand-orange relative z-10 transition-all duration-1000 ease-out transform origin-left"
                                            style={{
                                                width: `${skill.level}%`,
                                                animationDelay: `${index * 0.1 + 0.3}s`
                                            }}
                                        ></div>
                                        {/* The black tip/remainder visual */}
                                        <div className="absolute top-0 right-0 h-full bg-neutral-900 w-[15%] md:w-[10%]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};