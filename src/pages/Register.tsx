import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UserPlus, Mail, Lock, User, ArrowRight, GraduationCap } from 'lucide-react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'STUDENT'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Create user profile in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        fullName: formData.name,
        email: formData.email,
        role: formData.role,
        createdAt: new Date().toISOString()
      });

      const redirectPath = localStorage.getItem('redirectAfterLogin') || '/dashboard';
      localStorage.removeItem('redirectAfterLogin');
      window.history.pushState({}, '', redirectPath);
      window.dispatchEvent(new Event('popstate'));
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-accent p-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl brutal-card bg-white p-8 md:p-12"
      >
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-brand border-4 border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <UserPlus className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-4xl font-display uppercase">Join Our School</h1>
          <p className="font-bold text-slate-500 mt-2">Start your learning journey today</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border-4 border-red-600 text-red-600 font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-display uppercase tracking-wider block">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 border-4 border-black font-bold focus:bg-brand outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-display uppercase tracking-wider block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 border-4 border-black font-bold focus:bg-brand outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-display uppercase tracking-wider block">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="password" 
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full pl-12 pr-4 py-4 border-4 border-black font-bold focus:bg-brand outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-display uppercase tracking-wider block">I am a...</label>
            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button"
                onClick={() => setFormData({...formData, role: 'STUDENT'})}
                className={`p-4 border-4 border-black font-display text-lg flex items-center justify-center transition-all ${formData.role === 'STUDENT' ? 'bg-brand shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white hover:bg-slate-50'}`}
              >
                <GraduationCap className="w-6 h-6 mr-2" />
                Student
              </button>
              <button 
                type="button"
                onClick={() => setFormData({...formData, role: 'TEACHER'})}
                className={`p-4 border-4 border-black font-display text-lg flex items-center justify-center transition-all ${formData.role === 'TEACHER' ? 'bg-brand shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white hover:bg-slate-50'}`}
              >
                <User className="w-6 h-6 mr-2" />
                Teacher
              </button>
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full brutal-btn flex items-center justify-center !text-xl disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
              <ArrowRight className="ml-2 w-6 h-6" />
            </button>
          </div>
        </form>

        <div className="mt-10 pt-10 border-t-4 border-black text-center">
          <p className="font-bold">
            Already have an account? <a href="/login" className="text-accent underline decoration-2 underline-offset-4">Log in here</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
