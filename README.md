# 🤖 AI Engineer Portfolio - Ankush Pramanik

<div align="center">

**A cutting-edge AI Engineer portfolio featuring an interactive Gemini-powered digital twin**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Gemini AI](https://img.shields.io/badge/Gemini-2.5_Flash-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)

[Live Demo](#) • [View Projects](#projects) • [Talk to AI Agent](#agent)

</div>

---

## ✨ Features

### 🎯 Core Capabilities
- **🤖 AI Digital Twin**: Interactive chat powered by Google Gemini 2.5 Flash with comprehensive portfolio knowledge
- **📱 Fully Responsive**: Mobile-first design with seamless desktop experience
- **⚡ Optimized Performance**: Code splitting, lazy loading, and aggressive compression
- **🎨 Modern Design**: Cyberpunk-inspired UI with smooth animations and transitions
- **🚀 Production Ready**: Configured for instant deployment on Vercel and Netlify

### 🧠 AI Agent Features
- **Markdown Parsing**: Renders bold text, links, code blocks, and lists beautifully
- **Deep Knowledge**: Knows all 5 portfolio projects with live demo links and GitHub repos
- **Smart Caching**: LRU cache prevents redundant API calls
- **Retry Logic**: Exponential backoff for robust error handling
- **Session Management**: Persistent chat sessions with conversation history

### 📊 Portfolio Sections
1. **Hero** - Eye-catching landing with gradient text effects
2. **About** - Personal introduction with creative sketch design
3. **Skills** - Animated skill bars showcasing AI/ML expertise
4. **Projects** - 5 production-grade AI projects with live demos
5. **AI Agent** - Interactive digital twin chat interface
6. **Contact** - Social links and availability status

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Google Gemini API Key** ([Get one free](https://ai.google.dev/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pramanikankush/genai-portfolio.git
   cd genai-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local and add your API key
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

---

## 📦 Build & Deploy

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview

# Analyze bundle size
npm run build:analyze
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pramanikankush/genai-portfolio)

**Or using CLI:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
npm run deploy:vercel
```

**Environment Variables:**
- Add `GEMINI_API_KEY` in Vercel Dashboard → Settings → Environment Variables

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pramanikankush/genai-portfolio)

**Or using CLI:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
npm run deploy:netlify
```

**Environment Variables:**
- Add `GEMINI_API_KEY` in Netlify Dashboard → Site Settings → Environment Variables

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **TypeScript 5.8** - Type-safe development
- **Tailwind CSS** - Utility-first styling (CDN)
- **Vite 6** - Lightning-fast build tool

### AI & APIs
- **Google Gemini 2.5 Flash** - Conversational AI agent
- **@google/genai SDK** - Official Gemini API client

### Optimization
- **React.lazy()** - Code splitting for heavy components
- **Terser** - JavaScript minification
- **Gzip & Brotli** - Compression for faster loads
- **LRU Cache** - Smart API response caching

---

## 📊 Performance Metrics

### Before Optimization
- 📦 Bundle size: ~800KB
- ⏱️ Initial load: ~3-4s
- 🎨 First Contentful Paint: ~2s

### After Optimization ✅
- 📦 Main bundle: **< 500KB** (gzipped)
- ⏱️ Initial load: **< 2s**
- 🎨 First Contentful Paint: **< 1.5s**
- 🖼️ Largest Contentful Paint: **< 2.5s**

### Optimization Techniques
- ✅ Code splitting with React.lazy()
- ✅ Lazy loading for Projects, Skills, and AI Agent
- ✅ Gzip & Brotli compression
- ✅ Terser minification with console removal
- ✅ Manual chunk splitting (react-vendor, gemini-vendor)
- ✅ LRU cache for API responses
- ✅ Request debouncing to prevent duplicates
- ✅ Exponential backoff retry logic

---

## 📱 Responsive Design

All components are fully responsive with mobile-first design:

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Hero | ✅ | ✅ | ✅ |
| Navbar | ✅ (Hamburger) | ✅ | ✅ (Full menu) |
| About | ✅ | ✅ | ✅ |
| Skills | ✅ (1 col) | ✅ (1 col) | ✅ (2 cols) |
| Projects | ✅ (1 col) | ✅ (2 cols) | ✅ (3 cols) |
| AI Agent | ✅ (80vh) | ✅ | ✅ (600px) |
| Contact | ✅ | ✅ | ✅ |

**Breakpoints:**
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

---

## 🎨 Featured Projects

### 1. **LexAI - Legal RAG Advisor**
Intelligent legal document analysis with RAG architecture
- 🔗 [Live Demo](https://legal-rag-2.vercel.app/)
- 💻 [GitHub](https://github.com/pramanikankush/legal-rag-2.git)

### 2. **YouTube Stats Tracker Builder**
Chrome extension generator for YouTube analytics
- 🔗 [Live Demo](https://youtube-stats-extension-builder.vercel.app/)
- 💻 [GitHub](https://github.com/pramanikankush/Youtube-stats-extension-builder.git)

### 3. **Plant Health Analyzer**
AI-powered plant disease detection system
- 🔗 [Live Demo](https://plant-health-analyzer-1.onrender.com/)
- 💻 [GitHub](https://github.com/pramanikankush/Plant-Health-Analyzer.git)

### 4. **Smart Invoice Scanner**
OCR-based invoice extraction and management
- 🔗 [Live Demo](https://your-invoice.onrender.com/)
- 💻 [GitHub](https://github.com/pramanikankush/your-invoice.git)

### 5. **Personal Cloud Storage**
AI-powered file organization with Stripe integration
- 🔗 [Live Demo](https://personal-cloud-two.vercel.app/)
- 💻 [GitHub](https://github.com/pramanikankush/personal-cloud.git)

---

## 🔧 Troubleshooting

### TypeScript Errors
```bash
# Reinstall dependencies
npm install
```

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node version (should be 18+)
node --version
```

### API Key Issues
Ensure `.env.local` exists with:
```env
GEMINI_API_KEY=your_actual_api_key_here
```

### Chat Not Working
1. Check browser console for errors
2. Verify API key is set correctly
3. Check Network tab for failed requests
4. Try refreshing the page to reset session

### Mobile Menu Not Opening
- Ensure JavaScript is enabled
- Check for console errors
- Clear browser cache

---

## 📁 Project Structure

```
genai-portfolio/
├── components/
│   ├── About.tsx           # About section with sketch design
│   ├── AiAgent.tsx         # AI chat interface with markdown parsing
│   ├── Contact.tsx         # Contact section with social links
│   ├── Hero.tsx            # Landing hero with gradient text
│   ├── Navbar.tsx          # Responsive navigation
│   ├── Projects.tsx        # Project showcase grid
│   ├── SkillsExperience.tsx # Animated skill bars
│   └── Transition.tsx      # Section transition component
├── hooks/
│   ├── useDebounce.ts      # Debounce hook for API calls
│   └── useIntersectionObserver.ts # Scroll animations
├── services/
│   └── geminiService.ts    # Gemini API integration
├── utils/
│   └── imageOptimizer.ts   # Image optimization utilities
├── public/
│   ├── images/             # Project screenshots & assets
│   └── favicon.png         # AP logo favicon
├── App.tsx                 # Main app with lazy loading
├── index.html              # HTML entry point
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies & scripts
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests

---

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

---

## 👨‍💻 About the Developer

**Ankush Pramanik** - AI Engineer & Agentic Systems Architect

- 🌐 Based in Ghaziabad, UP, India (Remote Compatible)
- 💼 Open for freelance projects and full-time roles
- 🎯 Specializing in RAG systems, LLMs, and multi-agent workflows

### Connect
- 📧 Email: [ankushpramanik@gmail.com](mailto:ankushpramanik@gmail.com)
- 💼 LinkedIn: [ankush-pramanik](https://www.linkedin.com/in/ankush-pramanik-853565259/)
- 🐙 GitHub: [pramanikankush](https://github.com/pramanikankush)
- 📸 Instagram: [@_.ankusshhhh._](https://www.instagram.com/_.ankusshhhh._/)

---

<div align="center">

**Built with ❤️ using React, TypeScript, and Google Gemini AI**

⭐ Star this repo if you found it helpful!

</div>
