import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Curriculum from './pages/Curriculum';
import CurriculumDetail from './pages/CurriculumDetail';
import CapsLessons from './pages/CapsLessons';
import Dashboard from './pages/Dashboard';
import CourseView from './pages/CourseView';
import SearchResults from './pages/SearchResults';
import Login from './pages/Login';
import Register from './pages/Register';
import { motion, AnimatePresence } from 'motion/react';
import { useFirebase } from './FirebaseContext';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  const { user, loading, isAuthReady } = useFirebase();

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    // Intercept link clicks for SPA navigation
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.href.startsWith(window.location.origin)) {
        const url = new URL(anchor.href);
        
        // If it's a hash link on the same page, let the browser handle it
        if (url.pathname === window.location.pathname && url.hash) {
          return;
        }

        e.preventDefault();
        window.history.pushState({}, '', url.pathname + url.search + url.hash);
        setPath(url.pathname);
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const navigateTo = (newPath: string) => {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
  };

  const renderPage = () => {
    if (!isAuthReady) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    const protectedRoutes = ['/dashboard', '/course', '/curriculum'];
    const isProtected = protectedRoutes.some(route => path.startsWith(route));

    if (isProtected && !user && !loading) {
      // Redirect to login but save the intended destination
      localStorage.setItem('redirectAfterLogin', path);
      setTimeout(() => navigateTo('/login'), 0);
      return <Login />;
    }

    if (path.startsWith('/dashboard')) return <Dashboard />;
    if (path.startsWith('/course')) return <CourseView />;
    if (path === '/curriculum/caps') return <CapsLessons />;
    if (path.startsWith('/curriculum/')) return <CurriculumDetail />;
    if (path === '/search') return <SearchResults />;
    if (path === '/login') return <Login />;
    if (path === '/register') return <Register />;

    switch (path) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/curriculum':
        return <Curriculum />;
      default:
        return <Home />;
    }
  };

  const isDashboard = path.startsWith('/dashboard');

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Header currentPath={path} />}
      <AnimatePresence mode="wait">
        <motion.div
          key={path}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {!isDashboard && (
        <footer className="bg-black text-white py-20 border-t-8 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-brand border-4 border-black flex items-center justify-center font-display text-2xl text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">C</div>
                  <span className="text-3xl font-display uppercase tracking-tighter">Cable and Internet School</span>
                </div>
                <p className="text-slate-400 max-w-md mb-8 text-lg font-medium">
                  We want to help everyone in the world learn for free. Join us and let's learn together!
                </p>
                <div className="text-sm font-bold uppercase tracking-widest text-slate-500">
                  &copy; {new Date().getFullYear()} Tsalosesha Pty Ltd.
                </div>
              </div>
              <div>
                <h4 className="font-display text-xl uppercase mb-8 text-brand">What we teach</h4>
                <ul className="space-y-4 text-slate-400 text-lg font-medium">
                  <li><a href="/curriculum" className="hover:text-brand transition-colors">School Lessons</a></li>
                  <li><a href="/curriculum" className="hover:text-brand transition-colors">University Prep</a></li>
                  <li><a href="/curriculum" className="hover:text-brand transition-colors">Short Courses</a></li>
                  <li><a href="/curriculum" className="hover:text-brand transition-colors">Skill Building</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-xl uppercase mb-8 text-brand">Say Hello</h4>
                <ul className="space-y-4 text-slate-400 text-lg font-medium">
                  <li>Mmabatho, South Africa</li>
                  <li>018 384 5534</li>
                  <li>hello@cableinternetschool.org</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
