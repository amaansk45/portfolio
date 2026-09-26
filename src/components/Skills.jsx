import React, { useState } from 'react';
import { FaTerminal, FaLayerGroup } from 'react-icons/fa6';
import TechIcon from './TechIcon';
import { skills, skillCategories } from '../data/portfolioData';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills =
    activeTab === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <FaTerminal className="w-3 h-3" />
            <span>02 // Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100 tracking-tight">
            Technical Arsenal & Stack
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Categorized developer competencies focused on Python backend engineering, database modeling, and modern frontends
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeTab === category.id
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-glow-sm'
                  : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:border-emerald-500/40 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/50 group transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Level Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TechIcon
                      name={skill.icon}
                      className="w-5 h-5"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                    {skill.level}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-base font-bold font-heading text-slate-900 dark:text-slate-100 mb-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Skill Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Category Footer Indicator */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="capitalize">{skill.category}</span>
                <span className="text-emerald-600 dark:text-emerald-400/80 text-[10px] font-bold">● Active Stack</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Note strip */}
        <div className="mt-12 glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              <FaLayerGroup className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Full-Stack Architecture & Clean Code Standards
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Strict adherence to MVC/MVT patterns, relational database normalization, and secure RESTful endpoint design.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 transition-colors"
          >
            See in Projects &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

export default Skills;
