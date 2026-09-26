import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
  FaDownload,
  FaPython,
  FaReact,
  FaFilePdf,
} from 'react-icons/fa6';
import { SiDjango, SiMysql } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ onOpenResumeModal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 radial-glow-emerald pointer-events-none opacity-40 dark:opacity-60" />
      <div className="absolute top-1/3 right-10 w-80 h-80 radial-glow-cyan pointer-events-none opacity-30 dark:opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Recruiter CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold tracking-wide shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Open to Work • MCA Semester 3</span>
            </div>

            {/* Heading & Main Title */}
            <div className="space-y-2">
              <p className="text-slate-600 dark:text-slate-400 font-mono text-sm sm:text-base tracking-wide">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-slate-900 dark:text-slate-100 leading-[1.1]">
                Amaan Shaikh
              </h1>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-emerald font-heading">
                  Python Full Stack Developer
                </h2>
                <span className="hidden sm:inline-block text-slate-400 dark:text-slate-500 text-2xl font-light">|</span>
                <span className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-heading">
                  Django Developer
                </span>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              I build modern, scalable and user-friendly web applications using{' '}
              <span className="text-slate-900 dark:text-white font-semibold underline decoration-emerald-500/50 underline-offset-4">
                Python
              </span>
              ,{' '}
              <span className="text-slate-900 dark:text-white font-semibold underline decoration-emerald-500/50 underline-offset-4">
                Django
              </span>
              ,{' '}
              <span className="text-slate-900 dark:text-white font-semibold underline decoration-cyan-500/50 underline-offset-4">
                React
              </span>{' '}
              and modern web technologies.
            </p>

            {/* Quick Highlights Pills for Recruiters */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 shadow-sm">
                <span className="text-emerald-500 font-mono">📍</span> Gandhinagar, Gujarat
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 shadow-sm">
                <span className="text-amber-500 font-mono">🎓</span> MCA CPI: 7.44
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 shadow-sm">
                <span className="text-sky-500 font-mono">⚡</span> RESTful APIs & MVT
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                id="hero-projects-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-glow hover:shadow-glow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <FaArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Amaan_Shaikh_Resume.pdf"
                id="hero-resume-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/90 border border-slate-300 dark:border-slate-700/80 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <FaDownload className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="hidden md:inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Preview resume directly in browser"
              >
                <FaFilePdf className="w-3.5 h-3.5" />
                <span>Preview CV</span>
              </button>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-3 pt-3">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono mr-1">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-emerald-600 border border-slate-200 dark:border-slate-700/80 transition-all shadow-sm"
              >
                <FaGithub className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-blue-600 border border-slate-200 dark:border-slate-700/80 transition-all shadow-sm"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-rose-600 border border-slate-200 dark:border-slate-700/80 transition-all shadow-sm"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                aria-label="Call Amaan"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-emerald-600 border border-slate-200 dark:border-slate-700/80 transition-all shadow-sm"
              >
                <FaPhone className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Animated Developer Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-end pt-8 lg:pt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[460px] mx-auto flex flex-col items-center justify-end group">
              
              {/* Layer 1: Ambient Neon Cyber Halo Behind Animated Person */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-emerald-500/30 via-teal-500/25 to-cyan-500/25 blur-3xl pointer-events-none animate-pulse-slow" />
              
              {/* Layer 2: Decorative Concentric Cyber Tech Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] sm:w-[400px] sm:h-[400px] rounded-full border border-emerald-500/30 dark:border-emerald-500/30 pointer-events-none" />
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full border border-cyan-500/30 border-dashed pointer-events-none animate-spin" 
                style={{ animationDuration: '35s' }} 
              />
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[270px] sm:h-[270px] rounded-full border border-emerald-400/20 border-dotted pointer-events-none animate-spin" 
                style={{ animationDuration: '25s', animationDirection: 'reverse' }} 
              />

              {/* Layer 3: Cool 3D Animated Developer Persona (Cutout) */}
              <div className="relative z-10 w-full flex items-end justify-center animate-float">
                <img
                  src={personalInfo.avatarAnimated}
                  alt={`${personalInfo.name} - Cool 3D Animated Developer Character`}
                  className="w-auto h-[470px] sm:h-[540px] lg:h-[590px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] dark:drop-shadow-[0_25px_50px_rgba(16,185,129,0.32)] transform group-hover:scale-[1.03] transition-all duration-500 ease-out select-none"
                  loading="eager"
                />
              </div>

              {/* Layer 4: Floating Holographic Badges & Cyber Terminal Popups */}
              
              {/* Top-Left Badge: Academic & CPI */}
              <div className="absolute top-6 -left-3 sm:-left-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700/80 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-800 dark:text-emerald-400">
                  MCA '26 • CPI 7.44
                </span>
              </div>

              {/* Top-Right Badge: Python & Django Full Stack */}
              <div className="absolute top-8 -right-3 sm:-right-6 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700/80 shadow-xl backdrop-blur-md animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <SiDjango className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Django 5.x</span>
                    <FaPython className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                    MVT & REST APIs
                  </p>
                </div>
              </div>

              {/* Mid-Left Badge: Holographic Live Code Terminal */}
              <div className="absolute top-44 -left-4 sm:-left-8 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 text-emerald-400 border border-emerald-500/30 shadow-2xl backdrop-blur-md font-mono text-[11px] animate-float" style={{ animationDelay: '2s' }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-slate-400">$</span>
                <span className="text-white">python</span>
                <span>manage.py</span>
                <span className="text-emerald-400">run</span>
              </div>

              {/* Mid-Left Badge: React.js */}
              <div className="absolute bottom-16 -left-4 sm:-left-7 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700/80 shadow-xl backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <FaReact className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">React.js</span>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                    Frontend & State
                  </p>
                </div>
              </div>

              {/* Mid-Right Badge: MySQL & DRF */}
              <div className="hidden sm:flex absolute bottom-20 -right-4 sm:-right-6 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700/80 shadow-lg backdrop-blur-md animate-float" style={{ animationDelay: '3s' }}>
                <SiMysql className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span className="text-[11px] font-mono font-semibold text-slate-800 dark:text-slate-200">
                  MySQL & DRF
                </span>
              </div>

              {/* Bottom Centered Floating Status Pill */}
              <div className="absolute -bottom-3 z-20 left-1/2 -translate-x-1/2 w-auto whitespace-nowrap px-4 py-2 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-emerald-500/40 shadow-2xl backdrop-blur-md flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold font-heading text-slate-900 dark:text-white">
                  {personalInfo.name}
                </span>
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-[9px] font-black" title="Verified Engineer">
                  ✓
                </span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-medium pl-1 border-l border-slate-300 dark:border-slate-700">
                  Open to Work
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
