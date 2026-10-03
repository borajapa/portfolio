import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { 
  Sparkles, 
  Server, 
  Globe, 
  Smartphone, 
  Cpu, 
  Terminal, 
  Database, 
  Boxes, 
  RefreshCw, 
  Users, 
  PenTool, 
  Brain, 
  Shield,
  Code
} from 'lucide-react';

import { 
  DiJava, 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiPython, 
  DiMongodb, 
  DiHtml5 
} from 'react-icons/di';

import { 
  SiSpringboot, 
  SiTypescript, 
  SiAngular, 
  SiTailwindcss, 
  SiPostgresql, 
  SiDocker, 
  SiGit, 
  SiGraphql, 
  SiFramer 
} from 'react-icons/si';

const iconComponents = {
  // Brand icons
  DiJava,
  SiSpringboot,
  DiNodejs,
  SiTypescript,
  DiPython,
  DiReact,
  DiJavascript1,
  SiAngular,
  SiTailwindcss,
  DiHtml5,
  SiFramer,
  SiPostgresql,
  DiMongodb,
  SiDocker,
  SiGit,
  SiGraphql,

  // Lucide icons
  Server,
  Globe,
  Smartphone,
  Cpu,
  Terminal,
  Database,
  Boxes,
  RefreshCw,
  Users,
  PenTool,
  Brain,
  Shield,
};

export default function Skills() {
  const { lang, t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.skills.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {t.skills.title}
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-panel p-6 sm:p-7 rounded-2xl border-zinc-800/80 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-800/80">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2 font-mono">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    {category.title[lang]}
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, sIdx) => {
                    const IconComponent = iconComponents[skill.icon] || Code;

                    return (
                      <div
                        key={sIdx}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-950/40 border border-zinc-800/60 hover:border-indigo-500/40 hover:bg-zinc-900/60 transition-all duration-200 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-indigo-400 transition-colors text-lg shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="overflow-hidden">
                          <div className="text-xs font-semibold text-zinc-200 group-hover:text-white truncate">
                            {skill.name}
                          </div>
                          <div className="text-[10px] font-mono text-zinc-400 truncate">
                            {skill.level}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-3 border-t border-zinc-800/40 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Production Proven</span>
                <span className="text-emerald-400">● Active stack</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
