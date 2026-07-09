# Design Specification: Add DocuMind Project to Portfolio

## Overview
Add the new project "DocuMind" (AI document intelligence RAG application) to the portfolio web application as a 6th project. Maintain matching layout, styling, and responsiveness (displaying in a 3-column grid).

## Proposed Changes

### 1. components/Projects.tsx
- Add a 6th project entry in the `projects` array.
- Update `INDEX: 001 - 005` range header to `INDEX: 001 - 006` to reflect the total number of projects.
- Preserve all existing styling (neon borders, hover animations, responsive layout).

### 2. components/AiAgent.tsx
- Update the digital twin's welcome message list from 5 to 6 projects.
- Include DocuMind in the welcome list.

### 3. services/geminiService.ts
- Append project details to the `SYSTEM_INSTRUCTION` knowledge base.
- Update the general projects query response list.
- Add specific keyword bypass responses for DocuMind, document intelligence, and PDF chat query triggers.

### 4. README.md
- Add DocuMind to the featured projects section.

## Assets
- Copy uploaded preview image `media__1783575531487.png` from the brain directory to `public/images/projects/documind-preview.png`.
