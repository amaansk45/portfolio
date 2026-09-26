import React from 'react';
import {
  FaDownload,
  FaFilePdf,
  FaEye,
  FaTerminal,
  FaCircleCheck,
} from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';

const Resume = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] radial-glow-emerald pointer-events-none opacity-30 dark:opacity-40" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Resume CTA Container */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800/90 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="md:col-span-8 space-y-5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <FaTerminal className="w-3 h-3" />
                <span>06 // Resume & Credentials</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100 tracking-tight">
                Interested in my profile?
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Download my resume to learn more about my skills, projects and education.
              </p>

              {/* Recruiter Quick Verification Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Immediate availability for interviews</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Full-Stack Python & Django verified</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>MCA Sem 3 (CPI 7.44)</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <FaCircleCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Relational DB & RESTful APIs</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                <a
                  href={personalInfo.resumePath}
                  download="Amaan_Shaikh_Resume.pdf"
                  id="resume-section-download"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <FaDownload className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <button
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700/80 transition-all"
                >
                  <FaEye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Preview in Browser</span>
                </button>
              </div>
            </div>

            {/* Right Side: Document Visual Box (4 cols) */}
            <div className="md:col-span-4 flex items-center justify-center">
              <div className="relative group cursor-pointer" onClick={onOpenResumeModal}>
                <div className="w-48 sm:w-52 h-64 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700/80 p-5 flex flex-col justify-between shadow-2xl group-hover:border-emerald-500/50 group-hover:scale-105 transition-all">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                    <FaFilePdf className="w-6 h-6 text-rose-500" />
                    <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded">
                      PDF &bull; 95 KB
                    </span>
                  </div>

                  <div className="space-y-1.5 my-auto text-center">
                    <p className="text-xs font-bold text-slate-900 dark:text-white font-heading">
                      Amaan Shaikh
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      Curriculum Vitae
                    </p>
                    <div className="w-12 h-0.5 bg-emerald-500 mx-auto rounded my-2" />
                    <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                      Click to Preview
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 text-[10px] text-slate-500 dark:text-slate-400 text-center font-mono">
                    Updated for 2026 Roles
                  </div>
                </div>

                {/* Floating badge */}
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-slate-950 font-bold text-xs shadow-md">
                  ✓
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Resume;
