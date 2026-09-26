import React, { useState } from 'react';
import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaTerminal,
  FaCheck,
  FaXmark,
} from 'react-icons/fa6';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <FaTerminal className="w-3 h-3" />
            <span>03 // Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100 tracking-tight">
            Production & Academic Work
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Engineered full-stack applications with clean architectures, relational schemas, and responsive user experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Project Mockup Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500 text-slate-950 shadow-md">
                        Primary Project
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Details Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features Checklist */}
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-2">
                      Key Highlights & Architecture:
                    </h4>
                    <ul className="space-y-1.5">
                      {project.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                        >
                          <span className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px]">
                            <FaCheck className="w-2.5 h-2.5" />
                          </span>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Action Buttons: GitHub & Live Demo */}
              <div className="p-6 pt-0 flex flex-wrap items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700/80 transition-colors shadow-sm"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>GitHub Code</span>
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-glow-sm transition-all"
                >
                  <span>Live Demo</span>
                  <FaArrowUpRightFromSquare className="w-3 h-3" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Live Demo / Details Preview Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-slate-100 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Close modal"
              >
                <FaXmark className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
              <div className="font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
                Project Architecture Status:
              </div>
              <div>
                • Built with: {selectedProject.technologies.join(', ')}
              </div>
              <div>
                • Local development repository verified; ready for live deployment / recruiter walkthrough.
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700"
              >
                <FaGithub className="w-3.5 h-3.5" />
                <span>Visit GitHub Repo</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
