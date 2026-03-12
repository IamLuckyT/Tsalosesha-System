import React from 'react';
import { ArrowLeft, Book, GraduationCap, Zap, Clock, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function CurriculumDetail() {
  const path = window.location.pathname;
  const typeId = path.split('/').pop();

  const handleBack = () => {
    window.history.back();
  };

  const curriculumInfo: Record<string, { name: string, desc: string, color: string }> = {
    'cambridge': { name: 'Cambridge International', desc: 'World-class education for students aged 5 to 19.', color: 'bg-brand' },
    'ib': { name: 'International Baccalaureate', desc: 'Developing inquiring, knowledgeable and caring young people.', color: 'bg-accent' },
    'university': { name: 'University Modules', desc: 'Support for your degree with simplified module explanations.', color: 'bg-brand' },
    'short-courses': { name: 'Short Courses', desc: 'Quick skills to boost your knowledge in specific areas.', color: 'bg-accent' },
    'skills': { name: 'Skill Building', desc: 'Practical skills for the real world and future careers.', color: 'bg-brand' },
  };

  const info = curriculumInfo[typeId || ''] || { name: 'Curriculum', desc: 'Explore our learning materials.', color: 'bg-brand' };

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={handleBack}
          className="flex items-center space-x-2 font-bold text-slate-600 mb-12 hover:text-brand group transition-colors"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Curriculum</span>
        </button>

        <div className="mb-20">
          <div className={`inline-block px-6 py-2 ${info.color} text-white rounded-full font-bold text-sm uppercase mb-8 shadow-lg shadow-brand/20`}>
            {info.name}
          </div>
          <h1 className="text-5xl lg:text-7xl font-sans font-bold text-slate-900 mb-8 tracking-tight">Coming Soon!</h1>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl leading-relaxed">
            We are working hard with teachers to bring you the best {info.name} lessons. 
            {info.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Clock, title: 'In Production', desc: 'Our team is filming new videos every day.' },
            { icon: Users, title: 'Expert Teachers', desc: 'We only work with the best educators.' },
            { icon: Zap, title: 'AI Ready', desc: 'AI tutoring will be available from day one.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-8">
                <item.icon className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-brand rounded-[3rem] text-white text-center shadow-2xl shadow-brand/20">
          <h2 className="text-4xl font-sans font-bold mb-8">Want to be notified?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Leave your email and we will let you know as soon as the first lessons are live!
          </p>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 px-8 py-4 rounded-full bg-white/10 border border-white/20 font-bold text-white outline-none focus:bg-white focus:text-slate-900 transition-all placeholder:text-white/50"
            />
            <button className="bg-white text-brand px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl shadow-black/10">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
