import React, { useState } from 'react';
import { Search, Menu, User, LogIn, Phone, MapPin, ArrowLeft, LogOut } from 'lucide-react';
import { APP_NAME, CONTACT_INFO } from '../constants';
import { useFirebase } from '../FirebaseContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, profile } = useFirebase();

  const handleBack = () => {
    window.history.back();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new Event('popstate'));
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main header */}
        <div className="flex justify-between items-center h-20">
          {/* Logo & Back Button */}
          <div className="flex items-center space-x-4">
            {currentPath && currentPath !== '/' && (
              <button 
                onClick={handleBack}
                className="p-2 text-slate-600 hover:text-brand transition-colors"
                title="Go Back"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            )}
            <a href="/" className="flex items-center">
              <span className="font-sans font-bold text-3xl text-brand tracking-tight">
                {APP_NAME}
              </span>
            </a>
          </div>

          {/* Navigation & Auth */}
          <div className="flex items-center space-x-8">
            <nav className="hidden lg:flex space-x-8 font-semibold text-slate-600">
              <a href="/" className="hover:text-brand transition-colors">Home</a>
              <a href="/curriculum" className="hover:text-brand transition-colors">Programs</a>
              <a href="/about" className="hover:text-brand transition-colors">About</a>
              {user ? (
                <>
                  <a href="/dashboard" className="hover:text-brand transition-colors">Dashboard</a>
                  <button onClick={handleLogout} className="hover:text-brand transition-colors flex items-center cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <a href="/login" className="hover:text-brand transition-colors">Login</a>
              )}
            </nav>

            <div className="flex items-center">
              {user ? (
                <div className="flex items-center space-x-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                  <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white font-bold">
                    {profile?.fullName?.charAt(0) || user.email?.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-bold text-sm hidden sm:inline">{profile?.fullName || 'User'}</span>
                </div>
              ) : (
                <a href="/register" className="bg-brand text-white px-8 py-2.5 rounded-full font-bold hover:bg-accent transition-all shadow-lg shadow-brand/20">
                  Register
                </a>
              )}
              <button 
                onClick={toggleMenu}
                className="ml-4 p-2 text-slate-600 lg:hidden"
                aria-label="Toggle Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 space-y-4 font-semibold text-slate-600">
            <a href="/" className="p-2 hover:text-brand">Home</a>
            <a href="/curriculum" className="p-2 hover:text-brand">Programs</a>
            <a href="/about" className="p-2 hover:text-brand">About</a>
            {user ? (
              <>
                <a href="/dashboard" className="p-2 hover:text-brand">Dashboard</a>
                <button onClick={handleLogout} className="p-2 hover:text-brand text-left">Logout</button>
              </>
            ) : (
              <>
                <a href="/login" className="p-2 hover:text-brand">Login</a>
                <a href="/register" className="p-2 hover:text-brand">Register</a>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
