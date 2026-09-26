import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      id="theme-toggle-btn"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl border transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-slate-800/80 border-slate-700 text-yellow-400 hover:bg-slate-700/80 hover:border-yellow-400/40 shadow-sm'
          : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200/80 hover:border-slate-400 shadow-sm'
      } ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      {theme === 'dark' ? (
        <FaSun className="w-4 h-4 transition-transform duration-500 rotate-0 hover:rotate-90 text-amber-400" />
      ) : (
        <FaMoon className="w-4 h-4 transition-transform duration-500 rotate-0 hover:-rotate-12 text-slate-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
