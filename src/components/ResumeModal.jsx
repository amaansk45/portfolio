import React, { useEffect } from 'react';
import { FaXmark, FaDownload, FaFilePdf, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-[88vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <FaFilePdf className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {personalInfo.name} — Resume Preview
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {personalInfo.role} • MCA Semester 3
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumePath}
              download="Amaan_Shaikh_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors"
            >
              <FaDownload className="w-3 h-3" />
              <span>Download PDF</span>
            </a>
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors"
            >
              <FaArrowUpRightFromSquare className="w-3 h-3" />
              <span className="hidden sm:inline">New Tab</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close resume preview"
            >
              <FaXmark className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / PDF Viewer */}
        <div className="flex-1 bg-slate-100 dark:bg-slate-950 p-2 relative flex flex-col items-center justify-center">
          <iframe
            src={`${personalInfo.resumePath}#toolbar=1&navpanes=0`}
            title="Amaan Shaikh Resume"
            className="w-full h-full rounded-lg border border-slate-200 dark:border-slate-800 shadow-inner"
          />
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-2.5 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Recruiter Ready • Open to Roles & Internships</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-mono font-medium">Status: Available</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
