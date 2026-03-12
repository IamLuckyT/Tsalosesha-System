import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, Globe, BookOpen, Users, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand pt-32 pb-40 lg:pt-48 lg:pb-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl lg:text-8xl font-sans font-bold text-white mb-12 tracking-tight">
            AI-Powered Learning Platform
          </h1>
          
          <div className="space-y-6 mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-white/90">
              Education Without Boundaries
            </h2>
            <p className="text-xl lg:text-2xl font-medium text-white/80 leading-relaxed max-w-3xl mx-auto">
              From CAPS curriculum to Cambridge programs, university degrees to 1000+ short courses — powered by AI to personalize your learning journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="/register" className="bg-accent text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-black/10">
              Start Learning Free
            </a>
            <a href="#demo" className="bg-white text-slate-800 px-12 py-5 rounded-full text-xl font-bold hover:bg-slate-50 transition-all shadow-xl shadow-black/10">
              Watch Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
