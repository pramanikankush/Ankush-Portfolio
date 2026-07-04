# Design Spec: Skills Section and Digital Twin Sync Update

Update the portfolio skills section with 12 advanced agentic AI skills and synchronize the Gemini Digital Twin's system instructions with these new skills.

## Proposed Changes

### 1. Type Update
Modify `types.ts` to include `description` field for `Skill`.

```typescript
export interface Skill {
  name: string;
  level: number;
  description?: string;
}
```

### 2. Frontend Skills component Update
Modify `components/SkillsExperience.tsx` to define the 12 skills:

1. **Loop Engineering** (95%) - Designing autonomous agent loops that run, observe, and retry until a goal is met, instead of manually prompting each step.
2. **Agentic AI & Multi-Agent Systems** (92%) - Using specialized agents (planner, coder, tester, reviewer) coordinated by an orchestration layer for complex workflows.
3. **ReAct & Reason-Act-Observe Patterns** (90%) - Standard reasoning frameworks where agents reason, act with tools, observe results, and loop until a stop condition.
4. **Inference-Time Compute Engineering** (88%) - Treating tokens, steps, and loop depth as budgeted resources, optimizing for quality vs cost and latency.
5. **Advanced RAG & Sufficient Context Agents** (91%) - Dynamic, loop-driven retrieval that fetches just enough context for long-horizon tasks and self-corrects answers.
6. **Tool-Use & Code-Generation Agents** (94%) - Agents that write, debug, test, and commit code, call APIs, and run CI inside loops (e.g., Claude Code, Copilot, Codex).
7. **Harness & Context Engineering** (87%) - Building the “harness” (scheduling, memory, plugins, skills) around agents, not just prompts, so loops run reliably.
8. **Verification, Guardrails, and Maker–Checker** (89%) - Separating generating agents from verifying agents, adding confidence thresholds and deterministic checks before acting.
9. **Enterprise-Grade Agent Architectures** (85%) - Layered designs with permissions, audit logs, evaluation checkpoints, fallbacks, and policy enforcement for production agents.
10. **Observability & Evaluation for Loops** (86%) - Tracing each loop step, token usage, and decisions; measuring success/failure; and managing costs and runaway loops.
11. **Safety & Prompt-Injection Resilience** (90%) - Handling direct, indirect, and chained prompt injections, preventing loop hijacking, and stopping agents from self-trusting bad outputs.
12. **From Prompt Engineering to Loop Design Roles** (88%) - New career paths like loop engineer / agentic systems engineer, where the skill is designing systems that prompt agents on schedule and verify outcomes.

### 3. Layout Rendering
Update layout inside `components/SkillsExperience.tsx` to render the description text underneath the title in a subtle tone to preserve the existing paper-based design styling:

```tsx
<div className="flex justify-between mb-1 font-bold text-base md:text-lg tracking-tight">
    <span>{skill.name}</span>
</div>
{skill.description && (
    <p className="text-neutral-600 text-xs md:text-sm leading-relaxed mb-3 font-light">
        {skill.description}
    </p>
)}
```

### 4. Digital Twin Prompt Update
Update the `TECHNICAL_SKILLS` section in the system prompt inside `services/geminiService.ts` to replace the old skills with the 12 new core capabilities.

## Verification Plan

### Automated
1. Run `npm run build` to verify there are no compilation or configuration issues.

### Manual
1. Verify the layout looks clean on mobile and desktop breakpoints.
2. Ask the digital twin "What are your skills?" and verify it lists the updated 12 skills.
