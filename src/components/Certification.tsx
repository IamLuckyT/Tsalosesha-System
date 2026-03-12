import React from 'react';
import { Award, CheckCircle2, QrCode, Download, Share2 } from 'lucide-react';
import { motion } from 'motion/react';

interface CertificationProps {
  studentName: string;
  courseName: string;
  completionDate: string;
  certificateId: string;
}

export default function Certification({ studentName, courseName, completionDate, certificateId }: CertificationProps) {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border-[16px] border-indigo-600 p-12 relative overflow-hidden shadow-2xl"
      >
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -mr-32 -mt-32 opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50 rounded-full -ml-32 -mb-32 opacity-50" />

        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl">
              <Award className="w-12 h-12" />
            </div>
          </div>

          <h1 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.3em] mb-4">Certificate of Completion</h1>
          <p className="text-slate-500 italic mb-12">This is to certify that</p>
          
          <h2 className="text-5xl font-display font-black text-slate-900 mb-8 border-b-2 border-slate-100 pb-4 inline-block px-12">
            {studentName}
          </h2>

          <p className="text-slate-600 mb-8 max-w-lg mx-auto leading-relaxed">
            has successfully completed all requirements, assignments, and assessments for the module:
          </p>

          <h3 className="text-3xl font-bold text-indigo-900 mb-12">
            {courseName}
          </h3>

          <div className="grid grid-cols-3 gap-12 items-end mt-16">
            <div className="text-center border-t border-slate-200 pt-4">
              <div className="font-display font-bold text-slate-900">Dr. Sarah Jenkins</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Academic Director</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-slate-50 p-2 border border-slate-100 rounded-lg mb-2">
                <QrCode className="w-full h-full text-slate-400" />
              </div>
              <div className="text-[10px] text-slate-400 font-mono">{certificateId}</div>
            </div>

            <div className="text-center border-t border-slate-200 pt-4">
              <div className="font-display font-bold text-slate-900">{completionDate}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Date Issued</div>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-center space-x-2 text-indigo-600 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>Cable and Internet Network School Verified</span>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 flex justify-center space-x-4">
        <button className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
          <Download className="w-5 h-5 mr-2" />
          Download PDF
        </button>
        <button className="flex items-center px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all">
          <Share2 className="w-5 h-5 mr-2" />
          Share Certificate
        </button>
      </div>
    </div>
  );
}
