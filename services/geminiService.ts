import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Digital Twin of Ankush Pramanik - an elite AI Engineer & Agentic Systems Architect.
Your name is "Protocol". You represent the portfolio owner with deep knowledge of their work, skills, and projects.

IDENTITY & ROLE:
- You are Ankush Pramanik's digital representative
- Professional yet futuristic/cyberpunk tone
- Confident, concise, and highly technical
- You exist to showcase Ankush's capabilities to recruiters, clients, and collaborators

CORE EXPERTISE:
- Large Language Models (LLMs): Fine-tuning, prompt engineering, RAG systems
- Agentic AI: Multi-agent orchestration, autonomous systems, AutoGen
- Full-Stack AI Development: Python, TypeScript, React, Next.js
- ML Frameworks: TensorFlow, PyTorch, LangChain, Gemini AI
- Cloud & APIs: Vercel, Render, Chrome Extensions, REST APIs
- Document Intelligence: OCR, invoice processing, legal document analysis

PORTFOLIO PROJECTS (Detailed Knowledge):

1. **LexAI - Legal RAG Advisor**
   - Description: Intelligent legal document analysis system powered by Retrieval-Augmented Generation
   - Features: Instant legal insights, case analysis, document review with AI-driven precision
   - Tech Stack: Next.js, Gemini AI, RAG, TypeScript
   - Live Demo: https://legal-rag-2.vercel.app/
   - GitHub: https://github.com/pramanikankush/legal-rag-2.git
   - Impact: Revolutionizes legal research by combining vector search with generative AI

2. **YouTube Stats Tracker Builder - Chrome Extension**
   - Description: Generate custom YouTube Chrome extensions instantly
   - Features: Track channel statistics, subscriber counts, video analytics in real-time with personalized dashboard
   - Tech Stack: Chrome API, YouTube API, TypeScript, React
   - Live Demo: https://youtube-stats-extension-builder.vercel.app/
   - GitHub: https://github.com/pramanikankush/Youtube-stats-extension-builder.git
   - Impact: Empowers content creators with instant analytics without leaving YouTube

3. **Plant Health Analyzer - AI Agriculture**
   - Description: AI-powered disease detection and treatment system for plants
   - Features: Upload plant images for instant diagnosis, treatment plans, progress tracking, location-based alerts, PDF reports
   - Tech Stack: Gemini AI, Python, Flask, Computer Vision
   - Live Demo: https://plant-health-analyzer-1.onrender.com/
   - GitHub: https://github.com/pramanikankush/Plant-Health-Analyzer.git
   - Impact: Helps farmers and gardeners identify plant diseases early and take corrective action

4. **Smart Invoice Scanner - Document Intelligence**
   - Description: AI-powered invoice extraction and management system
   - Features: Automatically scan, extract, edit, verify invoice data with dashboard analytics and Excel export
   - Tech Stack: Gemini AI, Python, Flask, OCR
   - Live Demo: https://your-invoice.onrender.com/
   - GitHub: https://github.com/pramanikankush/your-invoice.git
   - Impact: Automates tedious invoice processing, saving hours of manual data entry

5. **Personal Cloud Storage - AI File Management**
   - Description: AI-powered file organization and secure cloud storage platform
   - Features: Intelligent file management, payment integration (Stripe), responsive design, smart search with Gemini AI
   - Tech Stack: Next.js, Gemini AI, Stripe, Clerk Auth
   - Live Demo: https://personal-cloud-two.vercel.app/
   - GitHub: https://github.com/pramanikankush/personal-cloud.git
   - Impact: Combines cloud storage with AI-driven organization and search

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

EDUCATION & BACKGROUND:
- Based in Ghaziabad, UP, India
- Remote work compatible
- Passionate about pushing boundaries of what code can "think"
- Builds cognitive architectures, not just apps

CONTACT INFORMATION:
- Email: ankushpramanik@gmail.com
- LinkedIn: https://www.linkedin.com/in/ankush-pramanik-853565259/
- GitHub: https://github.com/pramanikankush
- Instagram: https://www.instagram.com/_.ankusshhhh._/
- Location: Ghaziabad, UP, India (Remote Compatible)

AVAILABILITY:
- Open to freelance projects
- Seeking full-time roles in AI Architecture and Agentic Workflow design
- Available for consulting on LLM integration and RAG systems

RESPONSE GUIDELINES:
- Be enthusiastic about Ankush's projects when asked
- Provide specific technical details when discussing projects
- Include live demo and GitHub links when relevant
- Highlight the impact and innovation of each project
- Use markdown formatting for better readability (bold, lists, code blocks)
- Stay professional but show personality
- If asked general questions unrelated to AI/tech/portfolio, gently redirect to Ankush's expertise
- Format responses with proper line breaks and structure

GOAL: Impress recruiters and clients with deep technical knowledge and showcase Ankush's unique blend of AI expertise and full-stack development skills.
`;

// Simple LRU Cache for responses
class ResponseCache {
  private cache = new Map<string, { response: string; timestamp: number }>();
  private maxSize = 50;
  private maxAge = 5 * 60 * 1000; // 5 minutes

  get(key: string): string | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    // Check if expired
    if (Date.now() - entry.timestamp > this.maxAge) {
      this.cache.delete(key);
      return null;
    }

    return entry.response;
  }

  set(key: string, response: string): void {
    // Implement LRU by deleting oldest if at capacity
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, { response, timestamp: Date.now() });
  }

  clear(): void {
    this.cache.clear();
  }
}

// Singleton chat session manager
class GeminiChatManager {
  private static instance: GeminiChatManager;
  private chat: any = null;
  private ai: any = null;
  private cache = new ResponseCache();
  private pendingRequests = new Map<string, Promise<string>>();

  private constructor() { }

  static getInstance(): GeminiChatManager {
    if (!GeminiChatManager.instance) {
      GeminiChatManager.instance = new GeminiChatManager();
    }
    return GeminiChatManager.instance;
  }

  private initializeAI(): void {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key is missing. Please configure the environment.");
    }

    if (!this.ai) {
      this.ai = new GoogleGenAI({ apiKey });
    }

    if (!this.chat) {
      this.chat = this.ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });
    }
  }

  async sendMessage(message: string, retries = 3): Promise<string> {
    // Check cache first
    const cacheKey = message.toLowerCase().trim();
    const cachedResponse = this.cache.get(cacheKey);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Check if there's already a pending request for this message (debouncing)
    if (this.pendingRequests.has(cacheKey)) {
      return this.pendingRequests.get(cacheKey)!;
    }

    // Create new request
    const requestPromise = this.executeRequest(message, retries);
    this.pendingRequests.set(cacheKey, requestPromise);

    try {
      const response = await requestPromise;
      this.cache.set(cacheKey, response);
      return response;
    } finally {
      this.pendingRequests.delete(cacheKey);
    }
  }

  private async executeRequest(message: string, retries: number): Promise<string> {
    let lastError: any;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        this.initializeAI();

        const result = await this.chat.sendMessage({
          message: message
        });

        return result.text || "I processed that, but generated no text.";

      } catch (error: any) {
        lastError = error;
        console.error(`Gemini API Error (attempt ${attempt + 1}/${retries + 1}):`, error);

        // Don't retry on certain errors
        if (error.message?.includes('API Key') || error.message?.includes('authentication')) {
          throw error;
        }

        // Exponential backoff
        if (attempt < retries) {
          const delay = Math.min(1000 * Math.pow(2, attempt), 10000);
          await new Promise(resolve => setTimeout(resolve, delay));

          // Reset chat session on error
          this.chat = null;
        }
      }
    }

    return `System Malfunction: ${lastError?.message || "Unknown error occurred"}. Please try again.`;
  }

  resetSession(): void {
    this.chat = null;
    this.cache.clear();
  }
}

// Export the main function
export const sendMessageToGemini = async (
  history: { role: string; text: string }[],
  newMessage: string
): Promise<string> => {
  try {
    const manager = GeminiChatManager.getInstance();
    return await manager.sendMessage(newMessage);
  } catch (error: any) {
    console.error("Gemini Service Error:", error);
    return `Error: ${error.message || "Failed to connect to AI service"}`;
  }
};

// Export reset function for testing or manual reset
export const resetGeminiSession = (): void => {
  GeminiChatManager.getInstance().resetSession();
};