import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles,
  ChevronRight,
  TrendingUp,
  Award,
  Layers
} from 'lucide-react';

export default function Experience() {
  const { lang, t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.experience.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {t.experience.title}
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {portfolioData.experiences.map((exp, index) => {
            const hasProgression = Boolean(exp.progression && exp.progression.length > 0);
            const isCurrent = exp.period[lang].includes('Present') || exp.period[lang].includes('Presente');

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Node on vertical timeline */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isCurrent 
                      ? 'bg-indigo-500 border-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.8)]' 
                      : 'bg-zinc-900 border-zinc-600 group-hover:border-indigo-400 group-hover:bg-indigo-900'
                  }`} 
                />

                {/* Main Card */}
                <div className="glass-panel p-6 sm:p-8 rounded-2xl glass-panel-hover border-zinc-800/80">
                  
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pb-6 border-b border-zinc-800/80">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                              {exp.company}
                            </h3>
                            {exp.totalDuration && (
                              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                                {exp.totalDuration[lang]}
                              </span>
                            )}
                          </div>
                          {exp.project && (
                            <div className="text-xs font-mono text-zinc-400 mt-0.5">
                              Projeto: <span className="text-indigo-400 font-semibold">{exp.project}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-300">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        {exp.period[lang]}
                      </span>
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-950/60 border border-zinc-800/60 text-zinc-400 text-[11px]">
                        <MapPin className="w-3 h-3 text-zinc-500" />
                        {typeof exp.location === 'object' ? exp.location[lang] : exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description summary */}
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                    {exp.description[lang]}
                  </p>

                  {/* Career Progression Ladder (If available) */}
                  {hasProgression && (
                    <div className="mb-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider mb-3">
                        <TrendingUp className="w-4 h-4" />
                        <span>Progressão de Carreira na Coopersystem</span>
                      </div>

                      <div className="relative border-l-2 border-indigo-500/30 ml-3 pl-5 space-y-6">
                        {exp.progression.map((step, sIdx) => (
                          <div key={sIdx} className="relative group/step">
                            {/* Sub-node */}
                            <div 
                              className={`absolute -left-[27px] top-1 w-3 h-3 rounded-full border-2 ${
                                step.current 
                                  ? 'bg-emerald-400 border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.8)]' 
                                  : 'bg-zinc-800 border-zinc-600'
                              }`}
                            />

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm sm:text-base font-bold text-white">
                                  {step.role[lang]}
                                </h4>
                                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                                  step.current 
                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-semibold' 
                                    : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                                }`}>
                                  {step.badge[lang]}
                                </span>
                              </div>

                              <span className="text-xs font-mono text-zinc-400">
                                {step.period[lang]}
                              </span>
                            </div>

                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-1">
                              {step.details[lang]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights (For items without progression) */}
                  {!hasProgression && exp.highlights && (
                    <div className="mb-6 space-y-2">
                      <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                        {t.experience.keyHighlights}
                      </div>
                      <ul className="space-y-1.5">
                        {exp.highlights[lang].map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                            <ChevronRight className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack badges */}
                  <div className="pt-4 border-t border-zinc-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
