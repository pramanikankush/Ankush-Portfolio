import React, { useState, useRef, useEffect, memo } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useDebounce } from '../hooks/useDebounce';

// Simple markdown parser for AI responses
const parseMarkdown = (text: string) => {
  // Split by code blocks first
  const parts = text.split(/(```[\s\S]*?```)/g);

  return parts.map((part, i) => {
    // Handle code blocks
    if (part.startsWith('```')) {
      const code = part.replace(/```(\w+)?\n?/g, '').replace(/```$/g, '');
      return (
        <pre key={i} className="bg-black/50 p-3 rounded my-2 overflow-x-auto border border-neutral-700">
          <code className="text-xs md:text-sm text-green-400 font-mono">{code}</code>
        </pre>
      );
    }

    // Process inline markdown
    let processed = part;

    // Bold text **text**
    processed = processed.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-white">$1</strong>');

    // Links [text](url)
    processed = processed.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline hover:text-white transition-colors">$1</a>');

    // Inline code `code`
    processed = processed.replace(/`(.+?)`/g, '<code class="bg-black/50 px-1.5 py-0.5 rounded text-sm text-green-400">$1</code>');

    // Bullet points - or *
    processed = processed.replace(/^[\-\*]\s+(.+)$/gm, '<li class="ml-4">• $1</li>');

    return <span key={i} dangerouslySetInnerHTML={{ __html: processed }} />;
  });
};

// Memoized message component to prevent unnecessary re-renders
const MessageBubble = memo<{ msg: ChatMessage; index: number }>(({ msg, index }) => (
  <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div className={`max-w-[85%] p-3 md:p-4 rounded-md ${msg.role === 'user'
      ? 'bg-neutral-800 text-neutral-200 border border-neutral-700'
      : 'bg-brand-orange/10 text-brand-orange border border-brand-orange/30 shadow-[0_0_15px_rgba(255,85,0,0.1)]'
      }`}>
      <div className="text-[8px] md:text-[10px] opacity-50 mb-1 uppercase tracking-wider">
        {msg.role === 'user' ? '> USER' : '> PROTOCOL_AGENT'}
      </div>
      <div className="leading-relaxed break-words">
        {msg.role === 'user' ? (
          <div className="whitespace-pre-wrap">{msg.text}</div>
        ) : (
          <div className="markdown-content">{parseMarkdown(msg.text)}</div>
        )}
      </div>
    </div>
  </div>
));

MessageBubble.displayName = 'MessageBubble';

export const AiAgent: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '**Identity verified. Protocol v2.5 initialized.**\n\nI am Ankush Pramanik\'s digital twin - your gateway to understanding his AI engineering capabilities.\n\nI have comprehensive knowledge of:\n• 6 production-grade AI projects (Text-to-SQL Enterprise, BioMed RAG, AI Resume ATS Platform, Code Explainer Enterprise, DocuMind, and more)\n• Expertise in RAG systems, LLMs, and agentic workflows\n• Full-stack development with Python, TypeScript, React, and Next.js\n\nAsk me anything about Ankush\'s projects, skills, or experience. I can provide live demo links, technical details, and GitHub repositories.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: message };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(messages, message);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    handleSendMessage(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-950 text-white border-t border-neutral-900">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Talk to the <span className="text-brand-orange">Digital Twin</span>
          </h2>
          <p className="text-neutral-500 font-mono text-xs md:text-sm">
            Powered by Google Gemini 2.5 Flash
          </p>
        </div>

        {/* Terminal/Chat Window */}
        <div className="w-full bg-black border border-neutral-800 rounded-lg shadow-[0_0_50px_rgba(255,85,0,0.1)] overflow-hidden flex flex-col h-[80vh] md:h-[600px]">

          {/* Terminal Header */}
          <div className="bg-neutral-900 p-3 flex items-center justify-between border-b border-neutral-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="text-[10px] md:text-xs font-mono text-neutral-500">
              user@portfolio:~/agent_interface
            </div>
            <div className="w-4"></div>
          </div>

          {/* Chat Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 font-mono text-sm md:text-base">
            {messages.map((msg, idx) => (
              <MessageBubble key={idx} msg={msg} index={idx} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-brand-orange/10 text-brand-orange border border-brand-orange/30 p-3 md:p-4 rounded-md">
                  <span className="animate-pulse">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Suggestion Chips */}
          <div className="px-4 py-2 bg-neutral-950 border-t border-neutral-800/40 flex gap-2 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth select-none no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style dangerouslySetInnerHTML={{__html: `
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}} />
            {[
              'What is Loop Engineering?',
              'Tell me about Text-to-SQL Enterprise',
              'Show all projects',
              'How to contact Ankush?'
            ].map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip)}
                disabled={isLoading}
                className="px-3 py-1.5 bg-neutral-900 hover:bg-brand-orange/20 hover:border-brand-orange/40 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 hover:text-white transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-neutral-900 border-t border-neutral-800">
            <div className="flex gap-2 items-center">
              <span className="text-brand-orange font-bold text-lg">{'>'}</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about my experience..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-neutral-600 focus:ring-0 text-sm md:text-base"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="px-3 py-2 md:px-4 md:py-2 bg-neutral-800 hover:bg-brand-orange hover:text-white transition-colors text-neutral-400 font-mono text-[10px] md:text-xs uppercase tracking-widest border border-neutral-700 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Enter
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};