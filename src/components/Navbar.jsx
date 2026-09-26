import React, { useState, useEffect } from 'react';
import { FaBars, FaXmark, FaDownload, FaFilePdf, FaTerminal } from 'react-icons/fa6';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active link highlight on scroll
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'resume', 'contact'];
      const scrollPos = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/90 dark:bg-[#080d1a]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-emerald-500/50 group-hover:border-emerald-400 transition-colors shadow-sm bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full animate-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 tracking-tight group-hover:text-emerald-500 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  dev
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                Python Full Stack • Django
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/60 border border-slate-300/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 shadow-sm border border-emerald-500/30'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700/80 transition-all shadow-sm"
              title="Preview resume in modal"
            >
              <FaFilePdf className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              <span>Preview CV</span>
            </button>

            <a
              href={personalInfo.resumePath}
              download="Amaan_Shaikh_Resume.pdf"
              id="nav-resume-cta"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-glow-sm hover:shadow-glow transition-all transform active:scale-95"
            >
              <FaDownload className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl text-slate-800 dark:text-slate-300 bg-slate-200 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/80"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 dark:bg-[#080d1a]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-5 pt-3 pb-6 space-y-3 shadow-2xl transition-all animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                {personalInfo.status}
              </span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">MCA Sem 3</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center gap-2 px-3 py-2.5 text-xs font-semibold rounded-lg text-slate-800 dark:text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700/80"
            >
              <FaFilePdf className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              <span>Preview Resume</span>
            </button>

            <a
              href={personalInfo.resumePath}
              download="Amaan_Shaikh_Resume.pdf"
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl text-white bg-emerald-600 hover:bg-emerald-500 shadow-glow-sm"
            >
              <FaDownload className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
