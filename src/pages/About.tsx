import React from 'react';
import { motion } from 'motion/react';
import { Globe, Target, Heart, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-brand border-b-8 border-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl sm:text-9xl font-display text-black mb-8"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-black max-w-3xl mx-auto leading-tight"
          >
            "We want to help the world learn by making sure everyone can get good lessons, no matter where they live."
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-display text-black mb-8">Lessons for everyone</h2>
              <p className="text-2xl font-bold text-black mb-8 leading-tight">
                We started this school because we believe every kid should be able to learn. We make lessons for school, university, and even short courses for fun.
              </p>
              <p className="text-2xl font-bold text-black mb-12 leading-tight">
                Our site is built to work for you. You can watch videos, read books, and talk to our AI study buddy whenever you need help.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="brutal-card p-6 bg-white">
                  <div className="w-12 h-12 bg-brand border-4 border-black flex items-center justify-center mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-display mb-2">Our Goal</h4>
                  <p className="font-bold text-sm">To help kids everywhere learn and grow.</p>
                </div>
                <div className="brutal-card p-6 bg-white">
                  <div className="w-12 h-12 bg-accent border-4 border-black flex items-center justify-center mb-4 text-white">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-display mb-2">Our Heart</h4>
                  <p className="font-bold text-sm">We care about your future.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000"
                  alt="Students in classroom"
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-brand border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-3 hidden sm:block max-w-xs">
                <div className="flex items-center space-x-4 mb-4">
                  <Sparkles className="w-10 h-10 text-black fill-black" />
                  <div className="font-display text-2xl">Smart Learning</div>
                </div>
                <p className="font-bold text-sm">"Learning is the best way to change your life and the world."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact - Simplified */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-7xl font-display text-black mb-20">We are growing fast!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: 'Countries', value: '45+' },
              { label: 'Lessons', value: '12,000+' },
              { label: 'Happy Students', value: 'Join us!' }
            ].map((stat, i) => (
              <div key={i} className="brutal-card p-12 bg-white">
                <div className="text-6xl font-display text-accent mb-4">{stat.value}</div>
                <div className="text-2xl font-bold text-black">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
