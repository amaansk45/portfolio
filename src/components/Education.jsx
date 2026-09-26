import React from 'react';
import {
  FaGraduationCap,
  FaCalendarDays,
  FaLocationDot,
  FaTerminal,
  FaTrophy,
} from 'react-icons/fa6';
import { education, certifications } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <FaTerminal className="w-3 h-3" />
            <span>04 // Academic Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100 tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Verified academic milestones and continuous technical learning trajectory
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formal Degrees Timeline (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 relative overflow-hidden transition-all duration-300"
              >
                {/* Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {item.status}
                  </span>

                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <FaCalendarDays className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    {item.duration}
                  </span>
                </div>

                {/* Degree Title & Performance */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-slate-100">
                    {item.degree}
                  </h3>
                  <span className="text-xs sm:text-sm font-bold font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 self-start sm:self-auto">
                    {item.performance}
                  </span>
                </div>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {item.institution}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaLocationDot className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    {item.location}
                  </span>
                </div>

                {/* Highlights List */}
                <ul className="space-y-1.5 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                  {item.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2"
                    >
                      <span className="text-emerald-500 mt-0.5">&bull;</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: Certifications & Hackathons (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
                <FaTrophy className="w-4 h-4 text-amber-500" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
                  Certifications & Events
                </h4>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-200">
                        {cert.title}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/20">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {cert.issuer}
                    </p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug pt-1">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/20 text-center">
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  Continuous Up-skilling: Currently deep-diving into Docker, Redis caching, and microservices with Django.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
