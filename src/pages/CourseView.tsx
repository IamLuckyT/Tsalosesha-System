import React, { useState } from 'react';
import { Book, Video, FileText, CheckCircle, ChevronRight, Play, Download, ArrowLeft } from 'lucide-react';
import AITutor from '../components/AITutor';
import { motion } from 'motion/react';

export default function CourseView() {
  const [activeLesson, setActiveLesson] = useState(0);
  const path = window.location.pathname;
  const subjectId = path.split('/').pop();

  const handleBackToLessons = () => {
    window.history.back();
  };
  
  // Mock subject name based on ID
  const subjectName = subjectId === 'math' ? 'Mathematics' : 
                      subjectId === 'physical-sciences' ? 'Physical Sciences' : 
                      subjectId === 'life-sciences' ? 'Life Sciences' : 'Subject';

  const lessons = [
    { title: "Welcome to Math!", type: "video", duration: "12 mins" },
    { title: "Fun with Numbers", type: "pdf", duration: "15 pages" },
    { title: "The Secret of Shapes", type: "video", duration: "24 mins" },
    { title: "Quick Quiz", type: "quiz", duration: "10 questions" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={handleBackToLessons}
          className="flex items-center space-x-2 font-display uppercase text-lg mb-8 hover:text-accent group transition-colors"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Lessons</span>
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <div className="aspect-video bg-black flex items-center justify-center relative group">
                <img
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000"
                  alt="Lesson thumbnail"
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <button className="w-24 h-24 bg-brand border-4 border-black flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-black fill-black" />
                </button>
              </div>
              <div className="p-10">
                <div className="inline-block px-4 py-2 bg-brand border-4 border-black font-display text-sm uppercase mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {subjectName} • Grade 12
                </div>
                <h1 className="text-5xl font-display uppercase mb-6">
                  {lessons[activeLesson].title}
                </h1>
                <p className="text-xl font-medium text-slate-700 leading-relaxed mb-10">
                  Let's learn something new today! In this lesson, we'll look at how numbers work together. It's easier than you think, and we'll go step by step.
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <button className="flex items-center px-8 py-4 bg-white border-4 border-black font-display text-lg uppercase hover:bg-brand shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
                    <Download className="w-6 h-6 mr-3" />
                    Get PDF
                  </button>
                  <button className="flex items-center px-8 py-4 bg-white border-4 border-black font-display text-lg uppercase hover:bg-brand shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
                    <FileText className="w-6 h-6 mr-3" />
                    My Notes
                  </button>
                </div>
              </div>
            </div>

            {/* AI Tutor Contextual Info */}
            <div className="bg-brand border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-display text-2xl uppercase mb-4">Need help?</h3>
              <p className="text-lg font-medium">
                Our AI Tutor is ready to help you! If you get stuck, just click the bot icon in the corner and ask anything.
              </p>
            </div>
          </div>

          {/* Sidebar - Course Content */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-display uppercase mb-8 flex items-center">
                <Book className="w-6 h-6 mr-3 text-accent" />
                Lesson List
              </h3>
              <div className="space-y-4">
                {lessons.map((lesson, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveLesson(i)}
                    className={`w-full flex items-center p-5 border-4 border-black transition-all ${
                      activeLesson === i 
                        ? 'bg-brand shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]' 
                        : 'bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-12 h-12 border-4 border-black flex items-center justify-center mr-5 ${
                      activeLesson === i ? 'bg-white text-black' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {lesson.type === 'video' ? <Video className="w-6 h-6" /> : 
                       lesson.type === 'pdf' ? <FileText className="w-6 h-6" /> : 
                       <CheckCircle className="w-6 h-6" />}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-display text-lg uppercase">
                        {lesson.title}
                      </div>
                      <div className="text-sm font-bold text-slate-500">{lesson.duration}</div>
                    </div>
                    {activeLesson === i && <ChevronRight className="w-6 h-6" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-white border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-sm font-display uppercase tracking-widest mb-6 text-slate-500">Your Progress</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-display">25%</span>
                <span className="text-sm font-bold uppercase">1 of 4 done</span>
              </div>
              <div className="w-full bg-slate-100 border-4 border-black h-6">
                <div className="bg-accent h-full w-1/4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Tutor Integration */}
      <AITutor 
        moduleName="Grade 12 Math" 
        context="This module helps students with Grade 12 Math. Keep it simple and fun!"
      />
    </div>
  );
}
