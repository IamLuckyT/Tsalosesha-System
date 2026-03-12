import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, User, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AITutorProps {
  context: string;
  moduleName: string;
}

export default function AITutor({ context, moduleName }: AITutorProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Hi! I'm your AI Tutor for ${moduleName}. How can I help you today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `Context: ${context}\n\nUser Question: ${userMessage}` }] }
        ],
        config: {
          systemInstruction: `You are a friendly AI tutor for the "Cable and Internet Network School". 
          Your goal is to help students understand the module: ${moduleName}.
          Context about the module: ${context}
          
          Guidelines:
          1. Use very simple English. No big words.
          2. Don't give the answers. Help the student find the answer.
          3. Be super nice and patient.
          4. If they ask about games or movies, say "Let's get back to learning!" in a fun way.`,
        }
      });

      setMessages(prev => [...prev, { role: 'model', text: response.text || "Oops, something went wrong. Try again!" }]);
    } catch (error) {
      console.error("AI Tutor Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting. Check your internet!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 w-20 h-20 bg-brand border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all z-50 group"
        >
          <Bot className="w-10 h-10 text-black group-hover:scale-110 transition-transform" />
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent border-4 border-black rounded-full animate-pulse" />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-8 right-8 w-full max-w-md bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden z-50 flex flex-col h-[600px]"
          >
            {/* Header */}
            <div className="bg-brand p-6 border-b-8 border-black flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase">AI Tutor</h3>
                  <p className="text-xs font-bold uppercase opacity-70">Ready to help!</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-2 border-4 border-black bg-white transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 border-4 border-black font-medium text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                    msg.role === 'user' 
                      ? 'bg-accent text-white' 
                      : 'bg-white text-black'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-black rounded-full animate-bounce" />
                      <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-white border-t-8 border-black">
              <div className="relative flex space-x-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-6 py-4 bg-slate-100 border-4 border-black font-medium text-lg focus:outline-none focus:bg-white transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="px-6 py-4 bg-brand border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 disabled:opacity-50 transition-all"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
              <p className="text-[10px] font-bold uppercase text-slate-400 mt-4 text-center">
                I'm an AI, so I might make mistakes.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
