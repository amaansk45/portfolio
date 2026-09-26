import React from 'react';
import {
  FaGraduationCap,
  FaRocket,
  FaTerminal,
  FaArrowRight,
} from 'react-icons/fa6';
import { personalInfo, quickStats } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <FaTerminal className="w-3 h-3" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100 tracking-tight">
            Driven by Logic, Focused on Scale
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Bridging foundational computer application scholarship with hands-on full stack software engineering
          </p>
        </div>

        {/* Content Grid: Narrative & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <FaGraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-slate-100">
                  Background & Career Trajectory
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Kadi Sarva Vishwavidyalaya (KSV), Gandhinagar
                </p>
              </div>
            </div>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              I am currently pursuing my{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">
                MCA (Semester 3)
              </strong>{' '}
              with a current CPI of{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                7.44
              </span>
              . With an established background from my BCA graduation (6.86 CGPA), my academic journey has been defined by a deep passion for web architectures and practical programming.
            </p>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              Over the past few years, I have concentrated heavily on{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">
                Python and Django development
              </strong>
              , building complete full-stack web applications that handle real-world challenges — from relational database schemas with MySQL to secure authentication, role-based access control, and RESTful APIs.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-mono mb-1.5 flex items-center gap-1.5">
                <FaRocket className="w-3.5 h-3.5" /> Career Goal
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                {personalInfo.careerGoal}
              </p>
            </div>

            {/* Core Competencies List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px]">
                  ✓
                </span>
                <span>Django MVT & Django REST Framework</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px]">
                  ✓
                </span>
                <span>React.js & Tailwind CSS Frontend</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px]">
                  ✓
                </span>
                <span>Relational Databases (MySQL & SQL)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px]">
                  ✓
                </span>
                <span>Continuous Learning & Fast Adaptability</span>
              </div>
            </div>

          </div>

          {/* Right Column: Key Statistics & Snapshot Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="grid grid-cols-2 gap-4">
              {quickStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
                >
                  <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {stat.label}
                  </span>
                  <div className="my-2">
                    <span className="text-3xl font-extrabold font-heading text-emerald-600 dark:text-emerald-400">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Education & Location Mini-Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                  Recruiter Snapshot
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                  Ready to Interview
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Current Degree:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    MCA (Semester 3)
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">University:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Kadi Sarva Vishwavidyalaya
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Location:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Gandhinagar, Gujarat
                  </span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Target Roles:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    Python / Django / Full Stack
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  <span>Connect for roles or internships</span>
                  <FaArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
