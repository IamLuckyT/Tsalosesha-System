import React from 'react';
import { CURRICULUM_TYPES } from '../constants';
import { ChevronRight, Book, GraduationCap, Globe, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Curriculum() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h1 className="text-6xl lg:text-8xl font-display text-black mb-8">What can you learn?</h1>
          <p className="text-2xl font-bold text-black max-w-2xl">
            We have lessons for all school grades, university subjects, and fun short courses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CURRICULUM_TYPES.map((type, i) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="brutal-card overflow-hidden group"
            >
              <div className="h-40 bg-brand border-b-4 border-black p-8 flex items-end">
                <h3 className="text-3xl font-display text-black">{type.name}</h3>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center text-lg font-bold">
                    <div className="w-10 h-10 bg-white border-4 border-black flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-black" />
                    </div>
                    <span>All Grades & Levels</span>
                  </div>
                  <div className="flex items-center text-lg font-bold">
                    <div className="w-10 h-10 bg-white border-4 border-black flex items-center justify-center mr-4">
                      <Book className="w-6 h-6 text-black" />
                    </div>
                    <span>Lots of Subjects</span>
                  </div>
                  <div className="flex items-center text-lg font-bold">
                    <div className="w-10 h-10 bg-white border-4 border-black flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6 text-black" />
                    </div>
                    <span>AI Tutor Help</span>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    window.history.pushState({}, '', `/curriculum/${type.id}`);
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="mt-10 brutal-btn w-full flex items-center justify-center"
                >
                  See Lessons
                  <ArrowRight className="ml-2 w-6 h-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hierarchical Explanation - Simplified */}
        <div className="mt-32 bg-accent border-8 border-black p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] text-white">
          <h2 className="text-4xl lg:text-6xl font-display mb-16 text-center">How to find a lesson</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { label: 'School Type', desc: 'Like CAPS or IB' },
              { label: 'Your Grade', desc: 'Like Grade 10' },
              { label: 'Subject', desc: 'Like Math' },
              { label: 'Topic', desc: 'Like Fractions' },
              { label: 'Lesson', desc: 'Watch & Learn' }
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 bg-white text-black border-4 border-black flex items-center justify-center font-display text-3xl mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {i + 1}
                </div>
                <h4 className="text-xl font-display mb-2">{step.label}</h4>
                <p className="text-sm font-bold opacity-80">{step.desc}</p>
                {i < 4 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-white">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
