import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Languages, 
  Sparkles, 
  Calendar,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

export default function Education() {
  const { lang, t } = useLanguage();

  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.education.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {t.education.title}
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education & Certs Cards (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {portfolioData.education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl glass-panel-hover border-zinc-800/80"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-indigo-400">
                      {item.badge[lang]}
                    </span>
                    <span className="text-sm font-semibold text-zinc-300">
                      {item.institution}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {item.degree[lang]}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.desc[lang]}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Languages & Communication (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border-zinc-800/80">
              <div className="flex items-center gap-2 text-white font-mono font-semibold mb-6 pb-3 border-b border-zinc-800">
                <Languages className="w-5 h-5 text-indigo-400" />
                <span>{t.education.languagesTitle}</span>
              </div>

              <div className="space-y-6">
                {portfolioData.languages.map((langItem, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white font-semibold">
                        {langItem.name[lang]}
                      </span>
                      <span className="text-indigo-400">
                        {langItem.level[lang]}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${langItem.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-800/60 text-xs text-zinc-400 leading-relaxed">
                Pronto para atuar em times locais ou distribuídos internacionalmente com documentação e comunicação técnica em inglês.
              </div>
            </div>

            {/* Quick Summary Pill */}
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 text-xs font-mono text-zinc-400 space-y-2">
              <div className="text-indigo-300 font-semibold flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Perfil T-Shaped</span>
              </div>
              <p className="leading-normal">
                Profundidade técnica em backend Java & microsserviços + amplitude em frontend moderno, usabilidade e visão de negócios.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
