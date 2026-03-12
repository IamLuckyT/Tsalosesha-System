import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { motion } from 'motion/react';
import { BookOpen, Users, Award, Clock, TrendingUp, Plus, Search, Star, GraduationCap, ArrowLeft, Upload, FileText, BarChart3, MessageSquare, Menu, ChevronRight, Video, CheckCircle, Download, Settings } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [role, setRole] = useState<'ADMIN' | 'TEACHER' | 'STUDENT'>('ADMIN');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleBackToSite = () => {
    window.location.href = '/';
  };

  const myLessons = [
    { id: 'fet-math', name: 'Mathematics', grade: 'Grade 12', progress: 45, image: 'https://picsum.photos/seed/math/400/300' },
    { id: 'fet-ps', name: 'Physical Sciences', grade: 'Grade 12', progress: 20, image: 'https://picsum.photos/seed/science/400/300' },
    { id: 'fet-ls', name: 'Life Sciences', grade: 'Grade 12', progress: 0, image: 'https://picsum.photos/seed/bio/400/300' },
  ];

  const stats = [
    { label: 'My Lessons', value: myLessons.length.toString(), icon: BookOpen, color: 'text-brand', bg: 'bg-brand/10' },
    { label: 'Time Spent', value: '12h', icon: Clock, color: 'text-accent', bg: 'bg-accent/10' },
    { label: 'My Score', value: '78%', icon: TrendingUp, color: 'text-brand', bg: 'bg-brand/10' },
    { label: 'Certificates', value: '2', icon: Award, color: 'text-accent', bg: 'bg-accent/10' },
  ];

  const renderStudentOverview = () => (
    <div className="space-y-12">
      <div className="bg-brand p-10 rounded-3xl text-white shadow-xl shadow-brand/20">
        <h2 className="text-3xl font-bold mb-4">Welcome back, Student!</h2>
        <p className="text-lg opacity-90">Ready to continue your CAPS learning journey? Here's your summary.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <Star className="w-6 h-6 text-brand fill-brand" />
            </div>
            <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-900">Available Subjects</h2>
            <button onClick={() => setActiveTab('lessons')} className="text-brand font-bold hover:text-accent transition-colors">View All</button>
          </div>
          <div className="p-8 space-y-4">
            {['Mathematics', 'Physical Sciences', 'Life Sciences'].map((subject) => (
              <div key={subject} className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-all cursor-pointer group">
                <span className="font-bold text-slate-700">{subject}</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-900">Quick Links</h2>
          </div>
          <div className="p-8 grid grid-cols-2 gap-4">
            {['Past Papers', 'Study Guides', 'Worksheets', 'Formula Sheets'].map((link) => (
              <button key={link} onClick={() => setActiveTab('resources')} className="p-4 rounded-2xl bg-slate-50 font-bold text-slate-700 hover:bg-brand hover:text-white transition-all text-center">
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStudentLessons = () => (
    <div className="space-y-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">CAPS Lessons</h2>
        <div className="flex space-x-4 w-full sm:w-auto">
          <select className="flex-1 sm:w-48 px-4 py-2 rounded-xl border border-slate-200 font-bold outline-none focus:ring-2 focus:ring-brand/20">
            <option>Grade 10</option>
            <option>Grade 11</option>
            <option>Grade 12</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
        <div className="flex items-center space-x-4 mb-8 text-sm font-bold uppercase text-slate-400">
          <span>Grade 10</span>
          <ChevronRight className="w-4 h-4" />
          <span>Mathematics</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-brand">Term 1</span>
        </div>

        <div className="space-y-4">
          {['Algebra', 'Functions', 'Geometry'].map((topic, i) => (
            <div key={topic} className="p-6 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-all cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center font-bold text-brand text-xl">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{topic}</h3>
                </div>
                <div className="flex space-x-6">
                  <div className="flex items-center space-x-2 text-sm font-bold text-slate-400">
                    <Video className="w-4 h-4" />
                    <span>Video</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-bold text-slate-400">
                    <FileText className="w-4 h-4" />
                    <span>Notes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStudentResources = () => (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Study Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Study Guides', icon: BookOpen, color: 'bg-brand' },
          { title: 'Past Exam Papers', icon: FileText, color: 'bg-accent' },
          { title: 'Worksheets', icon: GraduationCap, color: 'bg-brand' },
          { title: 'Formula Sheets', icon: TrendingUp, color: 'bg-accent' },
          { title: 'Revision Videos', icon: Video, color: 'bg-brand' },
        ].map((res, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
            <div className={`w-16 h-16 ${res.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand/20`}>
              <res.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{res.title}</h3>
            <p className="text-slate-500 mb-6 leading-relaxed">Access the latest CAPS aligned materials.</p>
            <button className="w-full bg-slate-50 text-slate-700 py-3 rounded-xl font-bold hover:bg-brand hover:text-white transition-all">Download</button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTeacherOverview = () => (
    <div className="space-y-12">
      <div className="bg-accent p-10 rounded-3xl text-white shadow-xl shadow-accent/20">
        <h2 className="text-3xl font-bold mb-4">Teacher Dashboard</h2>
        <p className="text-lg opacity-90">Manage your classes and access teaching materials aligned with CAPS.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Recent Announcements</h3>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="font-bold text-sm text-slate-800">New Curriculum Update - Term 2</p>
              <p className="text-xs font-bold text-slate-400 mt-1">2h ago</p>
            </div>
          </div>
          <button onClick={() => setActiveTab('announcements')} className="mt-6 text-sm font-bold text-brand hover:text-accent transition-colors">View All</button>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Upcoming Workshops</h3>
          <div className="p-4 bg-brand/5 rounded-2xl border border-brand/10">
            <p className="font-bold text-sm text-brand">Digital Teaching Strategies</p>
            <p className="text-xs font-bold text-brand/60 mt-1">Tomorrow @ 14:00</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-6">New Teaching Tools</h3>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">Check out the latest assessment rubrics.</p>
          <button onClick={() => setActiveTab('resources')} className="w-full bg-brand text-white py-3 rounded-xl font-bold hover:bg-accent transition-all">Explore</button>
        </div>
      </div>
    </div>
  );

  const renderTeacherAnnouncements = () => (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Announcements</h2>
      <div className="space-y-6">
        {[
          { title: 'Curriculum Updates', desc: 'New guidelines for Grade 12 Mathematics Term 3.', type: 'Department Notice' },
          { title: 'Training Session', desc: 'Join our upcoming webinar on AI in the classroom.', type: 'Professional Development' },
          { title: 'Education Webinar', desc: 'Strategies for supporting struggling learners.', type: 'Event' },
        ].map((ann, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-slate-900">{ann.title}</h3>
              <span className="px-3 py-1 bg-brand/10 text-brand rounded-full text-xs font-bold uppercase">{ann.type}</span>
            </div>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{ann.desc}</p>
            <button className="text-brand font-bold hover:text-accent transition-colors">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTeacherLessons = () => (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Teaching Materials</h2>
        <button className="bg-brand text-white px-6 py-3 rounded-xl font-bold hover:bg-accent transition-all flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Upload Lesson</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-8">Grade 10 Mathematics - Term 1</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {['Algebra', 'Functions'].map((topic) => (
            <div key={topic} className="p-6 rounded-2xl border border-slate-100 hover:border-brand/30 transition-all">
              <h4 className="text-lg font-bold text-slate-800 mb-6">{topic}</h4>
              <div className="space-y-3">
                {['Lesson Plan', 'Teaching Slides', 'Worksheet', 'Classroom Activities'].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white transition-all group cursor-pointer">
                    <span className="font-bold text-sm text-slate-600 group-hover:text-brand">{item}</span>
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-brand" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTeacherResources = () => (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Teacher Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Assessment Rubrics', icon: BarChart3 },
          { title: 'Teaching Guides', icon: BookOpen },
          { title: 'Marking Guidelines', icon: CheckCircle },
          { title: 'Curriculum Templates', icon: FileText },
          { title: 'Workshop Recordings', icon: Video },
        ].map((res, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center mb-6 text-brand">
              <res.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">{res.title}</h3>
            <button className="w-full bg-slate-50 text-slate-700 py-3 rounded-xl font-bold hover:bg-brand hover:text-white transition-all">Access</button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAdminOverview = () => (
    <div className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Total Students', value: '1,240', color: 'bg-brand' },
          { label: 'Total Teachers', value: '85', color: 'bg-accent' },
          { label: 'Total Lessons', value: '450', color: 'bg-brand' },
          { label: 'Total Resources', value: '1,120', color: 'bg-accent' },
        ].map((stat, i) => (
          <div key={i} className={`p-8 rounded-3xl shadow-sm border border-slate-100 ${stat.color} text-white`}>
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-sm font-bold uppercase opacity-80">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900">Recent System Activity</h2>
        </div>
        <div className="p-8 space-y-4">
          {[
            'New teacher registration: Prof. Mokoena',
            'Uploaded resource: Grade 12 Physics Term 3 Notes',
            'Scheduled workshop: CAPS Curriculum Alignment 2026',
          ].map((activity, i) => (
            <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-2 h-2 bg-brand rounded-full" />
              <span className="font-bold text-slate-700 text-sm">{activity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAdminUsers = () => (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">User Management</h2>
        <button className="bg-brand text-white px-6 py-3 rounded-xl font-bold hover:bg-accent transition-all">+ Add User</button>
      </div>
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-6 text-sm font-bold text-slate-400 uppercase tracking-wider">Name</th>
                <th className="p-6 text-sm font-bold text-slate-400 uppercase tracking-wider">Email</th>
                <th className="p-6 text-sm font-bold text-slate-400 uppercase tracking-wider">Role</th>
                <th className="p-6 text-sm font-bold text-slate-400 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: 'Admin User', email: 'admin@email', role: 'Admin' },
                { name: 'Teacher User', email: 'teacher@email', role: 'Teacher' },
                { name: 'Student User', email: 'student@email', role: 'Student' },
              ].map((user, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-bold text-slate-700">{user.name}</td>
                  <td className="p-6 font-bold text-slate-400 text-sm">{user.email}</td>
                  <td className="p-6">
                    <span className={`px-3 py-1 rounded-full font-bold text-xs uppercase ${user.role === 'Admin' ? 'bg-slate-900 text-white' : user.role === 'Teacher' ? 'bg-brand/10 text-brand' : 'bg-slate-100 text-slate-600'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-6">
                    <button className="text-brand font-bold text-sm hover:text-accent transition-colors">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAdminSubjects = () => (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Subjects</h2>
        <button className="bg-brand text-white px-6 py-3 rounded-xl font-bold hover:bg-accent transition-all">+ Add Subject</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {['Mathematics', 'Physical Sciences', 'Life Sciences', 'English', 'History'].map((sub) => (
          <div key={sub} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex justify-between items-center group hover:shadow-md transition-all">
            <span className="text-xl font-bold text-slate-800">{sub}</span>
            <div className="flex space-x-2">
              <button className="p-2 rounded-xl border border-slate-100 hover:bg-brand hover:text-white transition-all">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAdminWorkshops = () => (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Workshops & Webinars</h2>
        <button className="bg-brand text-white px-6 py-3 rounded-xl font-bold hover:bg-accent transition-all">Schedule New</button>
      </div>
      <div className="space-y-6">
        {[
          { title: 'CAPS 2026 Orientation', date: 'March 25, 2026', time: '10:00 AM', status: 'Scheduled' },
          { title: 'Digital Literacy for Teachers', date: 'April 02, 2026', time: '02:00 PM', status: 'Draft' },
        ].map((ws, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-all">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{ws.title}</h3>
              <p className="font-bold text-slate-400 text-sm">{ws.date} @ {ws.time}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-4 py-2 rounded-full font-bold text-xs uppercase ${ws.status === 'Scheduled' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-600'}`}>
                {ws.status}
              </span>
              <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all">Manage</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAdminDashboard = () => renderAdminOverview();

  const renderMessages = () => (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Messages</h2>
        <button className="bg-brand text-white px-6 py-3 rounded-xl font-bold hover:bg-accent transition-all">New Message</button>
      </div>
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-slate-400" />
            <input type="text" placeholder="Search conversations..." className="bg-transparent border-none outline-none font-bold text-slate-600 w-full" />
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { from: 'Admin Support', subject: 'Welcome to CAPS System', time: '2h ago', unread: true },
            { from: 'Mr. Smith (Math)', subject: 'Grade 12 Assignment', time: 'Yesterday', unread: false },
            { from: 'System Notification', subject: 'Workshop Reminder', time: '2 days ago', unread: false },
          ].map((msg, i) => (
            <div key={i} className={`p-6 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors ${msg.unread ? 'bg-brand/5' : ''}`}>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white ${msg.unread ? 'bg-brand' : 'bg-slate-300'}`}>
                  {msg.from[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{msg.from}</h4>
                  <p className="text-sm font-bold text-slate-400">{msg.subject}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-slate-400">{msg.time}</p>
                {msg.unread && <div className="w-2.5 h-2.5 bg-brand rounded-full ml-auto mt-2 shadow-lg shadow-brand/40" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Settings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-8">Profile Information</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
              <input type="text" defaultValue="John Doe" className="w-full p-4 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-brand/20" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
              <input type="email" defaultValue="john.doe@example.com" className="w-full p-4 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-brand/20" />
            </div>
            <button className="w-full bg-brand text-white py-4 rounded-xl font-bold hover:bg-accent transition-all">Save Changes</button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-8">Account Preferences</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-slate-700">Email Notifications</span>
              <div className="w-12 h-6 bg-brand rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-slate-700">Dark Mode</span>
              <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden relative">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar 
          role={role} 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setIsSidebarOpen(false);
          }} 
        />
      </div>

      <main className="flex-1 overflow-y-auto">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-100 h-20 flex items-center justify-between px-6 sm:px-10 sticky top-0 z-10">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-slate-600 lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button 
              onClick={handleBackToSite}
              className="p-2 text-slate-600 hover:text-brand transition-colors"
              title="Back to Site"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 capitalize hidden sm:block tracking-tight">{activeTab}</h1>
          </div>
          
          <div className="flex items-center space-x-4 sm:space-x-8">
            <div className="flex bg-slate-100 p-1 rounded-xl hidden sm:flex">
              <button onClick={() => setRole('STUDENT')} className={`px-4 py-1.5 rounded-lg font-bold text-xs transition-all ${role === 'STUDENT' ? 'bg-white text-brand shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>STUDENT</button>
              <button onClick={() => setRole('TEACHER')} className={`px-4 py-1.5 rounded-lg font-bold text-xs transition-all ${role === 'TEACHER' ? 'bg-white text-brand shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>TEACHER</button>
              <button onClick={() => setRole('ADMIN')} className={`px-4 py-1.5 rounded-lg font-bold text-xs transition-all ${role === 'ADMIN' ? 'bg-white text-brand shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>ADMIN</button>
            </div>
            
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="text-right hidden lg:block">
                <div className="text-sm font-bold text-slate-900">John Doe</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{role}</div>
              </div>
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand/20">
                JD
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 sm:p-10">
          {/* Student Tabs */}
          {role === 'STUDENT' && (
            <>
              {activeTab === 'overview' && renderStudentOverview()}
              {activeTab === 'lessons' && renderStudentLessons()}
              {activeTab === 'resources' && renderStudentResources()}
              {activeTab === 'messages' && renderMessages()}
              {activeTab === 'settings' && renderSettings()}
            </>
          )}

          {/* Teacher Tabs */}
          {role === 'TEACHER' && (
            <>
              {activeTab === 'overview' && renderTeacherOverview()}
              {activeTab === 'announcements' && renderTeacherAnnouncements()}
              {activeTab === 'lessons' && renderTeacherLessons()}
              {activeTab === 'resources' && renderTeacherResources()}
              {activeTab === 'messages' && renderMessages()}
              {activeTab === 'settings' && renderSettings()}
            </>
          )}

          {/* Admin Tabs */}
          {role === 'ADMIN' && (
            <>
              {activeTab === 'overview' && renderAdminOverview()}
              {activeTab === 'users' && renderAdminUsers()}
              {activeTab === 'subjects' && renderAdminSubjects()}
              {activeTab === 'lessons' && renderStudentLessons()}
              {activeTab === 'resources' && renderStudentResources()}
              {activeTab === 'announcements' && renderTeacherAnnouncements()}
              {activeTab === 'workshops' && renderAdminWorkshops()}
              {activeTab === 'settings' && renderSettings()}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
