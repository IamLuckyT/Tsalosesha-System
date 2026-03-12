import React from 'react';
import { LayoutDashboard, BookOpen, Users, Settings, LogOut, Award, BarChart3, MessageSquare, Plus } from 'lucide-react';

interface SidebarProps {
  role: 'ADMIN' | 'TEACHER' | 'STUDENT';
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ role, activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    // Student Menu
    { id: 'overview', label: 'Overview', icon: LayoutDashboard, roles: ['STUDENT'] },
    { id: 'lessons', label: 'Lessons', icon: BookOpen, roles: ['STUDENT'] },
    { id: 'resources', label: 'Resources', icon: Plus, roles: ['STUDENT'] },

    // Teacher Menu
    { id: 'overview', label: 'Overview', icon: LayoutDashboard, roles: ['TEACHER'] },
    { id: 'announcements', label: 'Announcements', icon: MessageSquare, roles: ['TEACHER'] },
    { id: 'lessons', label: 'Lessons', icon: BookOpen, roles: ['TEACHER'] },
    { id: 'resources', label: 'Resources', icon: Plus, roles: ['TEACHER'] },

    // Admin Menu
    { id: 'overview', label: 'Overview', icon: LayoutDashboard, roles: ['ADMIN'] },
    { id: 'users', label: 'Users', icon: Users, roles: ['ADMIN'] },
    { id: 'subjects', label: 'Subjects', icon: BookOpen, roles: ['ADMIN'] },
    { id: 'lessons', label: 'Lessons', icon: BookOpen, roles: ['ADMIN'] },
    { id: 'resources', label: 'Resources', icon: Plus, roles: ['ADMIN'] },
    { id: 'announcements', label: 'Announcements', icon: MessageSquare, roles: ['ADMIN'] },
    { id: 'workshops', label: 'Workshops', icon: Award, roles: ['ADMIN'] },
    { id: 'settings', label: 'System Settings', icon: Settings, roles: ['ADMIN'] },
  ];

  const filteredItems = menuItems.filter(item => item.roles.includes(role));

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.dispatchEvent(new Event('auth-update'));
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <aside className="w-72 bg-white flex flex-col h-full border-r border-slate-100">
      <div className="p-8">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white font-sans font-bold text-xl shadow-lg shadow-brand/20">C</div>
          <span className="font-sans font-bold text-2xl text-slate-900 tracking-tight">Portal</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-4 px-6 py-3 rounded-xl font-bold transition-all ${
              activeTab === item.id 
                ? 'bg-brand text-white shadow-lg shadow-brand/20' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-brand'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-4 px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
