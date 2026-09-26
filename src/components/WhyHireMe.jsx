import React from 'react';
import { FaTerminal, FaCheck } from 'react-icons/fa6';
import TechIcon from './TechIcon';
import { whyHireMeCards } from '../data/portfolioData';

const WhyHireMe = () => {
  return (
    <section id="why-hire-me" className="py-20 relative bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <FaTerminal className="w-3 h-3" />
            <span>05 // Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100 tracking-tight">
            Why Hire Me?
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Honest, grounded qualifications demonstrating engineering capability, full-stack readiness, and professional dedication
          </p>
        </div>

        {/* 4 Recruiter Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyHireMeCards.map((card, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TechIcon name={card.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold font-heading text-slate-900 dark:text-slate-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                <FaCheck className="w-3 h-3" />
                <span>Verified in Work Samples</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyHireMe;
