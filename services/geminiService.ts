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

// Persistent Response Cache in LocalStorage
class ResponseCache {
  private cache = new Map<string, { response: string; timestamp: number }>();
  private maxSize = 100;
  private maxAge = 24 * 60 * 60 * 1000; // 24 hours persistence

  constructor() {
    this.loadFromLocalStorage();
  }

  private loadFromLocalStorage(): void {
    try {
      const data = typeof window !== 'undefined' ? localStorage.getItem('gemini_chat_cache') : null;
      if (data) {
        const parsed = JSON.parse(data);
        this.cache = new Map(Object.entries(parsed));
      }
    } catch (e) {
      console.error("Error loading cache from localStorage:", e);
    }
  }

  private saveToLocalStorage(): void {
    try {
      if (typeof window !== 'undefined') {
        const obj = Object.fromEntries(this.cache.entries());
        localStorage.setItem('gemini_chat_cache', JSON.stringify(obj));
      }
    } catch (e) {
      console.error("Error saving cache to localStorage:", e);
    }
  }

  get(key: string): string | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    // Check if expired
    if (Date.now() - entry.timestamp > this.maxAge) {
      this.cache.delete(key);
      this.saveToLocalStorage();
      return null;
    }

    return entry.response;
  }

  set(key: string, response: string): void {
    // Implement LRU by deleting oldest if at capacity
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) this.cache.delete(firstKey);
    }

    this.cache.set(key, { response, timestamp: Date.now() });
    this.saveToLocalStorage();
  }

  clear(): void {
    this.cache.clear();
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('gemini_chat_cache');
      }
    } catch (e) {}
  }
}

// Client-side Rate Limiter to prevent API exhaustion
class RateLimiter {
  private requests: number[] = [];
  private maxRequests = 5; // 5 requests
  private windowMs = 60 * 1000; // per 1 minute window

  checkLimit(): boolean {
    const now = Date.now();
    // Keep only timestamps within window
    this.requests = this.requests.filter(timestamp => now - timestamp < this.windowMs);
    
    if (this.requests.length >= this.maxRequests) {
      return false; // Rate limited
    }

    this.requests.push(now);
    return true;
  }

  getSecondsToWait(): number {
    if (this.requests.length === 0) return 0;
    const oldest = this.requests[0];
    const elapsed = Date.now() - oldest;
    return Math.max(1, Math.ceil((this.windowMs - elapsed) / 1000));
  }
}

// Static Responses to bypass API calls for simple greetings and common queries
const getStaticResponse = (message: string): string | null => {
  const clean = message.toLowerCase().trim();
  
  // Greetings bypass
  const greetings = ['hi', 'hello', 'hey', 'yo', 'greetings', 'hola', 'hi protocol', 'hello protocol', 'hi there', 'hello there', 'hey there'];
  if (greetings.includes(clean)) {
    return "**Identity verified. Protocol v2.5 initialized.**\n\nHello! I am Ankush's digital twin. How can I assist you with his skills, projects, or experience today?";
  }

  // Name / Identity bypass
  if (clean === 'who are you' || clean === 'what is your name' || clean.includes('your name') || clean.includes('who you are')) {
    return "I am **Protocol**, the AI Digital Twin of Ankush Pramanik. I am powered by Gemini 2.5 Flash and have comprehensive knowledge of Ankush's agentic AI projects, engineering skills, and experience.";
  }

  // Contact / Socials bypass
  if (clean === 'contact' || clean.includes('how to contact') || clean.includes('email') || clean.includes('socials') || clean === 'contact ankush' || clean.includes('contact info')) {
    return "You can initialize contact with Ankush Pramanik through the following nodes:\n\n" +
      "• 📧 **Email**: [ankushpramanik@gmail.com](mailto:ankushpramanik@gmail.com)\n" +
      "• 💼 **LinkedIn**: [ankush-pramanik](https://www.linkedin.com/in/ankush-pramanik-853565259/)\n" +
      "• 🐙 **GitHub**: [pramanikankush](https://github.com/pramanikankush)\n" +
      "• 📸 **Instagram**: [@_.ankusshhhh._](https://www.instagram.com/_.ankusshhhh._/)";
  }

  // All Projects bypass
  if (clean === 'show all projects' || clean === 'projects' || clean === 'show projects' || clean.includes('what projects') || clean.includes('your projects') || clean.includes('tell me about your projects')) {
    return "Here are the selected projects Ankush has built:\n\n" +
      "1. **LexAI - Legal RAG Advisor**\n" +
      "   Intelligent legal document analysis with RAG architecture.\n" +
      "   • [Live Demo](https://legal-rag-2.vercel.app/) | [GitHub](https://github.com/pramanikankush/legal-rag-2.git)\n\n" +
      "2. **YouTube Stats Tracker Builder**\n" +
      "   Chrome extension generator for YouTube channel analytics.\n" +
      "   • [Live Demo](https://youtube-stats-extension-builder.vercel.app/) | [GitHub](https://github.com/pramanikankush/Youtube-stats-extension-builder.git)\n\n" +
      "3. **Plant Health Analyzer**\n" +
      "   AI-powered plant disease detection system.\n" +
      "   • [Live Demo](https://plant-health-analyzer-1.onrender.com/) | [GitHub](https://github.com/pramanikankush/Plant-Health-Analyzer.git)\n\n" +
      "4. **Smart Invoice Scanner**\n" +
      "   AI invoice extraction and management platform.\n" +
      "   • [Live Demo](https://your-invoice.onrender.com/) | [GitHub](https://github.com/pramanikankush/your-invoice.git)\n\n" +
      "5. **Personal Cloud Storage**\n" +
      "   AI-powered file management with Stripe payments.\n" +
      "   • [Live Demo](https://personal-cloud-two.vercel.app/) | [GitHub](https://github.com/pramanikankush/personal-cloud.git)";
  }

  // Specific project bypasses
  if (clean.includes('lexai')) {
    return "**LexAI - Legal RAG Advisor**\n\n" +
      "An intelligent legal document analysis system powered by Retrieval-Augmented Generation (RAG). It provides instant legal insights, case analysis, and document review with AI-driven precision.\n\n" +
      "• **Tech Stack**: Next.js, Gemini AI, RAG, TypeScript\n" +
      "• [Live Demo](https://legal-rag-2.vercel.app/)\n" +
      "• [GitHub Repository](https://github.com/pramanikankush/legal-rag-2.git)";
  }

  if (clean.includes('youtube stats') || clean.includes('youtube tracker') || clean.includes('chrome extension')) {
    return "**YouTube Stats Tracker Builder**\n\n" +
      "Generate custom YouTube Chrome extensions instantly. Track channel statistics, subscriber counts, and video analytics in real-time with a personalized dashboard experience.\n\n" +
      "• **Tech Stack**: Chrome API, YouTube API, TypeScript, React\n" +
      "• [Live Demo](https://youtube-stats-extension-builder.vercel.app/)\n" +
      "• [GitHub Repository](https://github.com/pramanikankush/Youtube-stats-extension-builder.git)";
  }

  if (clean.includes('plant health') || clean.includes('plant disease') || clean.includes('agriculture')) {
    return "**Plant Health Analyzer**\n\n" +
      "AI-powered disease detection and treatment system for plants. Upload plant images to receive instant diagnosis, treatment plans, progress tracking, and location-based alerts with PDF reports.\n\n" +
      "• **Tech Stack**: Gemini AI, Python, Flask, Computer Vision\n" +
      "• [Live Demo](https://plant-health-analyzer-1.onrender.com/)\n" +
      "• [GitHub Repository](https://github.com/pramanikankush/Plant-Health-Analyzer.git)";
  }

  if (clean.includes('invoice scanner') || clean.includes('ocr') || clean.includes('invoice scanner')) {
    return "**Smart Invoice Scanner**\n\n" +
      "AI-powered invoice extraction and management system. Automatically scan, extract, edit, and verify invoice data with dashboard analytics and Excel export capabilities.\n\n" +
      "• **Tech Stack**: Gemini AI, Python, Flask, OCR\n" +
      "• [Live Demo](https://your-invoice.onrender.com/)\n" +
      "• [GitHub Repository](https://github.com/pramanikankush/your-invoice.git)";
  }

  if (clean.includes('personal cloud') || clean.includes('cloud storage') || clean.includes('file management')) {
    return "**Personal Cloud Storage**\n\n" +
      "AI-powered file organization and secure cloud storage platform. Features intelligent file management, payment integration, responsive design, and smart search capabilities.\n\n" +
      "• **Tech Stack**: Next.js, Gemini AI, Stripe, Clerk Auth\n" +
      "• [Live Demo](https://personal-cloud-two.vercel.app/)\n" +
      "• [GitHub Repository](https://github.com/pramanikankush/personal-cloud.git)";
  }

  return null;
};

// Singleton chat session manager
class GeminiChatManager {
  private static instance: GeminiChatManager;
  private chat: any = null;
  private ai: any = null;
  private cache = new ResponseCache();
  private rateLimiter = new RateLimiter();
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
    const cacheKey = message.toLowerCase().trim();

    // 1. Check static responses first (completely free)
    const staticRes = getStaticResponse(message);
    if (staticRes) {
      return staticRes;
    }

    // 2. Check rate limit
    if (!this.rateLimiter.checkLimit()) {
      const waitTime = this.rateLimiter.getSecondsToWait();
      return `⚠️ **Rate Limit Threshold Exceeded**\n\nProtocol system is cooling down to conserve token quota. Please retry in **${waitTime}s** to avoid API token exhaustion.`;
    }

    // 3. Check persistent localStorage cache
    const cachedResponse = this.cache.get(cacheKey);
    if (cachedResponse) {
      return cachedResponse;
    }

    // 4. Check if there's already a pending request (debouncing duplicate clicks)
    if (this.pendingRequests.has(cacheKey)) {
      return this.pendingRequests.get(cacheKey)!;
    }

    // 5. Execute API request
    const requestPromise = this.executeRequest(message, retries);
    this.pendingRequests.set(cacheKey, requestPromise);

    try {
      const response = await requestPromise;
      // Do not cache system malfunctions
      if (response && !response.startsWith("System Malfunction:") && !response.startsWith("Error:")) {
        this.cache.set(cacheKey, response);
      }
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

          // Reset chat session on error to avoid corrupted state
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