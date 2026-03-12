import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LogIn, Mail, Lock, ArrowRight, Chrome } from 'lucide-react';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const redirectPath = localStorage.getItem('redirectAfterLogin') || '/dashboard';
      localStorage.removeItem('redirectAfterLogin');
      window.history.pushState({}, '', redirectPath);
      window.dispatchEvent(new Event('popstate'));
    } catch (err: any) {
      setError(err.message || 'Failed to log in');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      await signInWithPopup(auth, googleProvider);
      const redirectPath = localStorage.getItem('redirectAfterLogin') || '/dashboard';
      localStorage.removeItem('redirectAfterLogin');
      window.history.pushState({}, '', redirectPath);
      window.dispatchEvent(new Event('popstate'));
    } catch (err: any) {
      setError(err.message || 'Failed to log in with Google');
    }
  };

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-brand p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md brutal-card bg-white p-8 md:p-12"
      >
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-accent border-4 border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <LogIn className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-display uppercase">Welcome Back</h1>
          <p className="font-bold text-slate-500 mt-2">Log in to your portal</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border-4 border-red-600 text-red-600 font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-display uppercase tracking-wider block">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-4 border-black font-bold focus:bg-brand outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-display uppercase tracking-wider block">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-4 border-black font-bold focus:bg-brand outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full brutal-btn flex items-center justify-center !text-xl disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Log In'}
            <ArrowRight className="ml-2 w-6 h-6" />
          </button>
        </form>

        <div className="mt-10">
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-4 border-black"></div>
            </div>
            <span className="relative px-4 bg-white font-display text-sm uppercase">Or continue with</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button 
              onClick={handleGoogleLogin}
              className="brutal-btn-secondary flex items-center justify-center !py-3"
            >
              <Chrome className="w-5 h-5 mr-2" />
              Google
            </button>
          </div>
        </div>

        <p className="text-center mt-10 font-bold">
          Don't have an account? <a href="/register" className="text-accent underline decoration-2 underline-offset-4">Join us today</a>
        </p>
      </motion.div>
    </div>
  );
}
