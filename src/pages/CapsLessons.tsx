import React, { useState } from 'react';
import { CAPS_GRADES, CAPS_SUBJECTS } from '../constants';
import { Book, GraduationCap, ArrowRight, Search, Filter, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CapsLessons() {
  const queryGrade = new URLSearchParams(window.location.search).get('grade');
  const [selectedGrade, setSelectedGrade] = useState<string | null>(queryGrade);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSubjects = CAPS_SUBJECTS.filter(subject => {
    const matchesGrade = !selectedGrade || subject.grades.includes(selectedGrade);
    const matchesSearch = subject.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGrade && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-brand border-4 border-black font-display text-sm uppercase mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            South Africa
          </div>
          <h1 className="text-6xl lg:text-8xl font-display text-black mb-8">CAPS Lessons</h1>
          <p className="text-2xl font-bold text-black max-w-2xl">
            Browse through all subjects for the South African National Curriculum.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
              <input
                type="text"
                placeholder="Search for a subject (e.g. Mathematics)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-8 py-6 bg-white border-4 border-black font-bold text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
              />
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="relative h-full">
              <Filter className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
              <select
                value={selectedGrade || ''}
                onChange={(e) => setSelectedGrade(e.target.value || null)}
                className="w-full pl-16 pr-8 py-6 bg-white border-4 border-black font-bold text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] appearance-none focus:outline-none transition-all cursor-pointer"
              >
                <option value="">All Grades</option>
                {CAPS_GRADES.map(grade => (
                  <option key={grade.id} value={grade.id}>{grade.name} ({grade.phase} Phase)</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredSubjects.map((subject, i) => (
              <motion.div
                key={subject.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="brutal-card group cursor-pointer"
                onClick={() => {
                  window.history.pushState({}, '', `/course/${subject.id}`);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
              >
                <div className="h-48 bg-white border-b-4 border-black relative overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${subject.id}/800/600`}
                    alt={subject.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <Book className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-500">
                      {subject.grades.length} Grades Available
                    </span>
                    <div className="w-8 h-8 bg-brand border-2 border-black flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-black" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-display text-black mb-6 group-hover:text-accent transition-colors">
                    {subject.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {subject.grades.map(gId => (
                      <span key={gId} className="px-3 py-1 bg-slate-100 border-2 border-black text-xs font-bold uppercase">
                        {CAPS_GRADES.find(g => g.id === gId)?.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredSubjects.length === 0 && (
          <div className="text-center py-32">
            <div className="inline-block p-12 bg-slate-50 border-8 border-dashed border-slate-200">
              <h3 className="text-4xl font-display text-slate-400 uppercase mb-4">No subjects found</h3>
              <p className="text-xl font-bold text-slate-400">Try searching for something else or change the grade filter.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
