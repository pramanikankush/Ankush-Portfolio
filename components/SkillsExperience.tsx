import React from 'react';
import { Skill } from '../types';

const skills: Skill[] = [
    { name: 'Loop Engineering', level: 95, description: 'Designing autonomous agent loops that run, observe, and retry until a goal is met, instead of manually prompting each step.' },
    { name: 'Agentic AI & Multi-Agent Systems', level: 92, description: 'Using specialized agents (planner, coder, tester, reviewer) coordinated by an orchestration layer for complex workflows.' },
    { name: 'ReAct & Reason-Act-Observe Patterns', level: 90, description: 'Standard reasoning frameworks where agents reason, act with tools, observe results, and loop until a stop condition.' },
    { name: 'Inference-Time Compute Engineering', level: 88, description: 'Treating tokens, steps, and loop depth as budgeted resources, optimizing for quality vs cost and latency.' },
    { name: 'Advanced RAG & Sufficient Context Agents', level: 91, description: 'Dynamic, loop-driven retrieval that fetches just enough context for long-horizon tasks and self-corrects answers.' },
    { name: 'Tool-Use & Code-Generation Agents', level: 94, description: 'Agents that write, debug, test, and commit code, call APIs, and run CI inside loops (e.g., Claude Code, Copilot, Codex).' },
    { name: 'Harness & Context Engineering', level: 87, description: 'Building the “harness” (scheduling, memory, plugins, skills) around agents, not just prompts, so loops run reliably.' },
    { name: 'Verification, Guardrails, and Maker–Checker', level: 89, description: 'Separating generating agents from verifying agents, adding confidence thresholds and deterministic checks before acting.' },
    { name: 'Enterprise-Grade Agent Architectures', level: 85, description: 'Layered designs with permissions, audit logs, evaluation checkpoints, fallbacks, and policy enforcement for production agents.' },
    { name: 'Observability & Evaluation for Loops', level: 86, description: 'Tracing each loop step, token usage, and decisions; measuring success/failure; and managing costs and runaway loops.' },
    { name: 'Safety & Prompt-Injection Resilience', level: 90, description: 'Handling direct, indirect, and chained prompt injections, preventing loop hijacking, and stopping agents from self-trusting bad outputs.' },
    { name: 'From Prompt Engineering to Loop Design Roles', level: 88, description: 'New career paths like loop engineer / agentic systems engineer, where the skill is designing systems that prompt agents on schedule and verify outcomes.' }
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
                                    className="group opacity-0 animate-fadeInUp flex flex-col justify-between"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        animationFillMode: 'forwards'
                                    }}
                                >
                                    <div>
                                        <div className="flex justify-between mb-1 font-bold text-base md:text-lg tracking-tight">
                                            <span>{skill.name}</span>
                                        </div>
                                        {skill.description && (
                                            <p className="text-neutral-600 text-xs md:text-sm leading-relaxed mb-3 font-light">
                                                {skill.description}
                                            </p>
                                        )}
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