import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Sparkles,
  ChevronRight
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
                <div className="glass-panel p-6 sm:p-7 rounded-2xl glass-panel-hover border-zinc-800/80">
                  
                  {/* Top Bar: Company, Role, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {exp.role[lang]}
                        </h3>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {t.experience.present}
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-indigo-400 flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        {exp.period[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Main Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                    {exp.description[lang]}
                  </p>

                  {/* Key Highlights / Bullets */}
                  <div className="mb-5 space-y-2">
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
