# Skills Section Update and Digital Twin Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace existing skills in the portfolio with a new set of 12 advanced agentic AI skills and keep the Gemini AI digital twin synchronized with these capabilities.

**Architecture:** Update the typescript definitions to support descriptions on skills, update the frontend Skills component to list the new items with their descriptions inline preserving the orange color theme, and update the system prompt in the Gemini API integration file.

**Tech Stack:** React 19, TypeScript, Vite, Gemini AI API

---

### Task 1: Update Types Definition

**Files:**
- Modify: `types.ts`

- [ ] **Step 1: Add description field to Skill interface**
  
  Modify the `Skill` interface in `types.ts` to include an optional `description: string`.
  
  Code to replace:
  ```typescript
  export interface Skill {
    name: string;
    level: number; // 0 to 100
  }
  ```
  
  Replacement code:
  ```typescript
  export interface Skill {
    name: string;
    level: number; // 0 to 100
    description?: string;
  }
  ```

- [ ] **Step 2: Verify changes compile**
  
  Run: `npm run build`
  Expected output: Compilation succeeds without typescript errors.

- [ ] **Step 3: Commit**
  
  Run: `git add types.ts; git commit -m "chore: add description to Skill type"`

---

### Task 2: Update Frontend Skills component

**Files:**
- Modify: `components/SkillsExperience.tsx`

- [ ] **Step 1: Define new 12 skills**
  
  Update the skills array inside `components/SkillsExperience.tsx`.
  
  Code to replace:
  ```typescript
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
  ```
  
  Replacement code:
  ```typescript
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
  ```

- [ ] **Step 2: Render descriptions in Layout**
  
  Modify the JSX markup inside `components/SkillsExperience.tsx` to render descriptions inline below titles.
  
  Code to replace:
  ```tsx
                                      <div className="flex justify-between mb-2 font-bold text-base md:text-lg tracking-tight">
                                          <span>{skill.name}</span>
                                      </div>
                                      <div className="h-4 w-full bg-neutral-300 relative overflow-hidden">
  ```
  
  Replacement code:
  ```tsx
                                      <div className="flex justify-between mb-1 font-bold text-base md:text-lg tracking-tight">
                                          <span>{skill.name}</span>
                                      </div>
                                      {skill.description && (
                                          <p className="text-neutral-600 text-xs md:text-sm leading-relaxed mb-3 font-light">
                                              {skill.description}
                                          </p>
                                      )}
                                      <div className="h-4 w-full bg-neutral-300 relative overflow-hidden">
  ```

- [ ] **Step 3: Verify changes compile**
  
  Run: `npm run build`
  Expected output: Compilation succeeds without typescript errors.

- [ ] **Step 4: Commit**
  
  Run: `git add components/SkillsExperience.tsx; git commit -m "feat: render updated skills with descriptions"`

---

### Task 3: Update Gemini Service Prompt

**Files:**
- Modify: `services/geminiService.ts`

- [ ] **Step 1: Update the TECHNICAL_SKILLS section**
  
  Modify the Gemini System Prompt inside `services/geminiService.ts` to replace old skills list with the new 12 skills.
  
  Code to replace:
  ```typescript
  TECHNICAL_SKILLS:
  - **Languages**: Python, TypeScript, JavaScript
  - **AI/ML**: LangChain, AutoGen, RAG, Fine-tuning, Prompt Engineering
  - **Frameworks**: React, Next.js, Flask, TensorFlow, PyTorch
  - **APIs**: Google Gemini AI, OpenAI, YouTube API, Chrome Extensions API
  - **Tools**: Git, Docker, Vercel, Render, Netlify
  - **Specialties**: Agentic workflows, multi-agent systems, document intelligence, computer vision
  ```
  
  Replacement code:
  ```typescript
  TECHNICAL_SKILLS:
  - **Loop Engineering**: Designing autonomous agent loops that run, observe, and retry until a goal is met
  - **Agentic AI & Multi-Agent Systems**: Using specialized agents coordinated by an orchestration layer
  - **ReAct & Reason-Act-Observe Patterns**: Standard reasoning frameworks where agents reason, act, and loop
  - **Inference-Time Compute Engineering**: Budgeting tokens, steps, and loop depth to optimize quality vs cost
  - **Advanced RAG & Sufficient Context Agents**: Dynamic, loop-driven retrieval for long-horizon tasks
  - **Tool-Use & Code-Generation Agents**: Agents writing, debugging, testing, and committing code in loops
  - **Harness & Context Engineering**: Building scheduling, memory, plugins, and skills around agent loops
  - **Verification, Guardrails, and Maker–Checker**: Generating vs verifying agents with confidence thresholds
  - **Enterprise-Grade Agent Architectures**: Layered designs with permissions, audit logs, and fallbacks
  - **Observability & Evaluation for Loops**: Tracing loop steps, token usage, runaway prevention, and cost
  - **Safety & Prompt-Injection Resilience**: Preventing loop hijacking and handling direct/indirect injections
  - **Loop Design Roles**: Designing systems that prompt agents on schedule and verify outcomes
  - **Languages & Frameworks**: Python, TypeScript, React, Next.js, Flask, PyTorch, Google Gemini API
  ```

- [ ] **Step 2: Commit changes**
  
  Run: `git add services/geminiService.ts; git commit -m "feat: sync digital twin system instructions with new skills"`

---

### Task 4: Verify and Build

**Files:**
- Test: Build tool runs

- [ ] **Step 1: Run production build check**
  
  Run: `npm run build`
  Expected output: Compilation succeeds and creates compressed output assets.

- [ ] **Step 2: Verify git diff is clean and consistent**
  
  Run: `git status`
  Expected output: No uncommitted untracked files except expected changes.
