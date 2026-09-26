import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-base font-bold font-heading text-slate-900 dark:text-slate-100">
              {personalInfo.name} — Python Full Stack Developer
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Django & REST API Specialist • MCA Semester 3 Scholar
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-blue-600 border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Amaan"
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-rose-600 border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
              title="Back to top"
            >
              <FaArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Tech Stack Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono text-center sm:text-left">
          <p>
            &copy; 2026 Amaan Shaikh. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 justify-center">
            <span>Built with React.js, Tailwind CSS & Python passion</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
