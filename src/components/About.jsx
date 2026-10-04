import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Scale, 
  Layers, 
  Layout, 
  Terminal, 
  CheckCircle2, 
  Award,
  Sparkles
} from 'lucide-react';

export default function About() {
  const { lang, t } = useLanguage();

  const iconMap = {
    ShieldCheck: ShieldCheck,
    Scale: Scale,
    Layers: Layers,
    Layout: Layout
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.about.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {t.about.title}
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
            {t.about.subtitle}
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl font-semibold text-white font-mono flex items-center gap-2 mb-2">
              <Terminal className="w-5 h-5 text-indigo-400" />
              {portfolioData.about.greeting[lang]}
            </h3>
            
            {portfolioData.about.paragraphs[lang].map((paragraph, index) => (
              <p key={index} className="text-zinc-300">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                📍 {portfolioData.profile.location[lang]}
              </span>
              <span className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                💼 BB Seguros / Coopersystem
              </span>
              <span className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-300">
                ⚖️ Advogado & Desenvolvedor
              </span>
            </div>
          </div>

          {/* Interactive Philosophy Card (Terminal style) */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl overflow-hidden border-zinc-800 shadow-xl">
              {/* Window Header */}
              <div className="bg-zinc-950/80 px-4 py-3 border-b border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400">developer-profile.ts</span>
                <div className="w-8" />
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs space-y-2 text-zinc-300 bg-zinc-950/40">
                <div className="text-zinc-500">{"// Engenharia com rigor e visão multidisciplinar"}</div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">engineer</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">name:</span>{" "}
                  <span className="text-emerald-300">"{portfolioData.profile.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">alias:</span>{" "}
                  <span className="text-indigo-300">"borajapa"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">currentRole:</span>{" "}
                  <span className="text-emerald-300">"Analista II @ Coopersystem"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">careerLadder:</span>{" "}
                  <span className="text-indigo-400">"Estágio ➔ Prog I ➔ Analista I ➔ Analista II"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">formation:</span> [
                  <span className="text-amber-300">"Computer Science"</span>,{" "}
                  <span className="text-amber-300">"Law (LL.B.)"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">coreStack:</span> [
                  <span className="text-cyan-300">"Java"</span>,{" "}
                  <span className="text-cyan-300">"Spring Boot"</span>,{" "}
                  <span className="text-cyan-300">"Node.js"</span>,{" "}
                  <span className="text-cyan-300">"React"</span>,{" "}
                  <span className="text-cyan-300">"TypeScript"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">focus:</span>{" "}
                  <span className="text-emerald-300">"Mission-critical & High Performance"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">motto:</span>{" "}
                  <span className="text-indigo-400">"just keep swimming!"</span>
                </div>
                <div>{"};"}</div>
                <div className="pt-2 text-zinc-500">
                  <span className="text-indigo-400">export default</span> engineer;
                </div>
              </div>
            </div>

            {/* Quote badge */}
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-indigo-950/40 to-transparent border border-indigo-900/40 flex items-center gap-3">
              <span className="text-2xl">🐟</span>
              <div>
                <div className="text-xs font-mono text-indigo-300 font-semibold">
                  "just keep swimming!"
                </div>
                <div className="text-[11px] text-zinc-400">
                  Resiliência, consistência e aprendizado contínuo.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Engineering Pillars */}
        <div>
          <h3 className="text-lg font-semibold text-white font-mono mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-400" />
            {t.about.pillarsTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioData.about.pillars.map((pillar, i) => {
              const IconComponent = iconMap[pillar.icon] || ShieldCheck;
              return (
                <div
                  key={i}
                  className="glass-panel p-5 rounded-2xl glass-panel-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-2">
                      {pillar.title[lang]}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {pillar.desc[lang]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
