import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  FolderGit2, 
  Layers, 
  ArrowUpRight,
  Code2
} from 'lucide-react';

export default function Projects() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: t.projects.all },
    { id: 'fullstack', label: t.projects.fullstack },
    { id: 'frontend', label: t.projects.frontend },
    { id: 'backend', label: t.projects.backend },
  ];

  const filteredProjects = portfolioData.projects.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.projects.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              {t.projects.title}
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-zinc-800 self-start md:self-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === opt.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-zinc-800/80 glass-panel-hover group"
              >
                <div>
                  {/* Card Top: Category badge & links */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400">
                      <Code2 className="w-3 h-3 text-indigo-400" />
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                          title={t.projects.viewCode}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 hover:text-white transition-colors"
                          title={t.projects.viewDemo}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-indigo-400" />
                  </h3>
                  <div className="text-xs font-mono text-indigo-400/90 mb-3">
                    {project.subtitle[lang]}
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {project.description[lang]}
                  </p>
                </div>

                <div>
                  {/* Highlight pill / stat */}
                  {project.stats && (
                    <div className="mb-4 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{project.stats[lang]}</span>
                    </div>
                  )}

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
