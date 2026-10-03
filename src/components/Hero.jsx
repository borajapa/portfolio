import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Sparkles, 
  ChevronDown,
  Terminal,
  Code2,
  Cpu,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero() {
  const { lang, t } = useLanguage();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = portfolioData.roles[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCelebrate = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#a855f7', '#06b6d4']
    });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Ambient Radial Glows */}
      <div className="ambient-glow w-[500px] h-[500px] bg-indigo-600/20 top-[-100px] left-1/2 -translate-x-1/2" />
      <div className="ambient-glow w-[400px] h-[400px] bg-cyan-600/10 top-[20%] right-[-100px]" />
      <div className="ambient-glow w-[350px] h-[350px] bg-purple-600/15 bottom-0 left-[-80px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 shadow-inner mb-6 text-xs text-zinc-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium">{portfolioData.profile.status[lang]}</span>
        </motion.div>

        {/* Avatar + Monogram Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-6"
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500 shadow-glow">
            <img 
              src={portfolioData.profile.avatar}
              alt={portfolioData.profile.name}
              className="w-full h-full rounded-full object-cover bg-zinc-950 border-2 border-zinc-950"
            />
            <div className="absolute -bottom-1 -right-1 bg-zinc-950 p-1.5 rounded-full border border-zinc-800 text-indigo-400">
              <Code2 className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

        {/* Greeting & Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-zinc-400 text-sm sm:text-base font-mono mb-2 tracking-wide">
            {t.hero.greeting}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
            João Henrique{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">
              Ferreira
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Rotating Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <div className="flex items-center gap-2 font-mono text-lg sm:text-2xl text-indigo-300 font-semibold px-4 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
            <Terminal className="w-5 h-5 text-indigo-400" />
            <motion.span
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {roles[currentRoleIndex]}
            </motion.span>
          </div>
        </motion.div>

        {/* High impact bio summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed mb-8"
        >
          {portfolioData.profile.bioShort[lang]}
        </motion.p>

        {/* Location & Quick Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 text-xs font-mono text-zinc-400 mb-8"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
            {portfolioData.profile.location[lang]}
          </span>
          <span>•</span>
          <span className="text-zinc-400">
            BB Seguros / MAPFRE • Coopersystem
          </span>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium text-sm shadow-glow transition-all duration-300 hover:scale-[1.02]"
          >
            <span>{t.hero.ctaProjects}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-medium text-sm transition-all duration-300 hover:scale-[1.02]"
          >
            <span>{t.hero.ctaContact}</span>
          </button>

          <a
            href={portfolioData.profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCelebrate}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-300 font-mono text-xs transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-indigo-400" />
            <span>{t.hero.ctaResume}</span>
          </a>
        </motion.div>

        {/* Key Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl"
        >
          {portfolioData.profile.stats.map((stat, i) => (
            <div 
              key={i} 
              className="glass-panel p-3.5 rounded-xl text-left border-zinc-800/80 hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 leading-snug">
                {stat.label[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollTo('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 text-xs font-mono transition-colors"
        >
          <span>{t.hero.scrollHint}</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.button>

      </div>
    </section>
  );
}
