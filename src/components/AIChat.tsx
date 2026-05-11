import { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Bot, User, Trash2, Minimize2, Maximize2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CV_DATA } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: `Hello! I'm SP's Assistant. You can ask me anything about his projects, education, or skills!` }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `Answer the following question about Satya Prakash based on this CV data: ${JSON.stringify(CV_DATA)}. Be professional, friendly, and concise. Question: ${input}` }] }
        ],
        config: {
          systemInstruction: "You are SP's Assistant, an AI built for Satya Prakash, a CSE AI & ML student. Your goal is to provide information about his background, projects (SP's Assistant, Money Manager Pro, Nanocomposite Green Synthesis, Personal Portfolio Website), skills (Python, Java, Vibe Coding, ML), and education based on the provided CV data.",
        }
      });

      const assistantMessage: Message = { role: 'assistant', content: response.text || "I'm sorry, I couldn't process that right now." };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having some trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: 'assistant', content: "Chat cleared! How else can I help you today?" }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '60px' : '500px'
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white dark:bg-navy-dark border border-gold/30 rounded-2xl shadow-2xl overflow-hidden w-[350px] md:w-[400px] flex flex-col mb-4"
          >
            {/* Header */}
            <div className="bg-navy p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold rounded-lg">
                  <Sparkles size={16} className="text-navy-dark" />
                </div>
                <span className="font-display font-semibold tracking-wide">SP's Assistant</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsMinimized(!isMinimized)} className="hover:opacity-70">
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div 
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream/30"
                >
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`p-2 rounded-full h-fit ${msg.role === 'user' ? 'bg-navy text-white' : 'bg-gold text-navy-dark'}`}>
                          {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                        </div>
                        <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                          msg.role === 'user' 
                          ? 'bg-navy text-white rounded-tr-none' 
                          : 'bg-white text-navy-dark border border-gold/20 shadow-sm rounded-tl-none'
                        }`}>
                          {msg.content}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white p-3 rounded-2xl border border-gold/20 shadow-sm flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gold/20 bg-white">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask about Satya..."
                      className="w-full pl-4 pr-12 py-3 bg-cream/50 rounded-xl border border-gold/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm"
                    />
                    <button 
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="absolute right-2 p-2 bg-navy text-white rounded-lg hover:bg-gold hover:text-navy-dark transition-colors disabled:opacity-30"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                  <button 
                    onClick={clearChat}
                    className="mt-2 text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-1 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={10} /> Clear conversation
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
        className={`p-4 bg-navy text-gold rounded-full shadow-xl flex items-center gap-2 hover:bg-navy-dark transition-all border-2 border-gold/20 ${isOpen && 'hidden'}`}
      >
        <Bot size={24} />
        <span className="font-semibold text-sm pr-2">Ask SP's Assistant</span>
      </motion.button>
    </div>
  );
}
