import React from 'react';
import Hero from '../components/Hero';
import { BookOpen, GraduationCap, Globe, Zap, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const FEATURES = [
  {
    icon: GraduationCap,
    title: "School Lessons",
    description: "Get help with all your school subjects from Grade R to Grade 12.",
    color: "bg-brand"
  },
  {
    icon: BookOpen,
    title: "University Help",
    description: "Study for your degree with our easy-to-follow university modules.",
    color: "bg-accent"
  },
  {
    icon: Zap,
    title: "AI Study Buddy",
    description: "Ask our AI tutor anything, anytime. It's like having a teacher in your pocket.",
    color: "bg-brand"
  },
  {
    icon: Globe,
    title: "Learn Anywhere",
    description: "Our site works even if your internet is slow. Learn from home or school.",
    color: "bg-accent"
  },
  {
    icon: ShieldCheck,
    title: "Good Teachers",
    description: "All our lessons are made by real teachers who know their stuff.",
    color: "bg-brand"
  },
  {
    icon: Award,
    title: "Get Certificates",
    description: "Finish a course and get a certificate to show what you've learned.",
    color: "bg-accent"
  }
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl lg:text-6xl font-sans font-bold text-slate-900 mb-6">
              Why learn with us?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We make learning fun and easy. Here is what you get when you join our school.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand/20`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Preview */}
      <section id="pick-your-level" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-sans font-bold text-slate-900 mb-6">
                Our Programs
              </h2>
              <p className="text-xl text-slate-600">
                Structured learning resources aligned with international standards and local requirements.
              </p>
            </div>
            <a href="/curriculum" className="mt-8 lg:mt-0 flex items-center text-brand font-bold text-lg hover:text-accent transition-colors">
              See All Levels
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'School (CAPS)', id: 'caps' },
              { name: 'Cambridge', id: 'cambridge' },
              { name: 'International IB', id: 'ib' },
              { name: 'University', id: 'university' }
            ].map((level, i) => (
              <div 
                key={i} 
                className="group cursor-pointer"
                onClick={() => {
                  window.history.pushState({}, '', `/curriculum/${level.id}`);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
              >
                <div className="aspect-[4/5] bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden relative border border-slate-100">
                  <img
                    src={`https://picsum.photos/seed/${level.name}/800/1000`}
                    alt={level.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                    <h4 className="text-2xl font-bold text-white">{level.name}</h4>
                    <p className="text-white/70 mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      Explore Courses
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="ready-to-start" className="py-32 bg-brand text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl lg:text-7xl font-sans font-bold mb-10">
            Ready to start?
          </h2>
          <p className="text-2xl font-medium mb-12 text-white/80">
            Join thousands of other students and start learning today. It's free to join!
          </p>
          <a href="/register" className="bg-white text-brand px-16 py-6 rounded-full text-2xl font-bold hover:bg-slate-50 transition-all shadow-2xl shadow-black/20 inline-block">
            Create Your Account
          </a>
        </div>
      </section>
    </main>
  );
}
