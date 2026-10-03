import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Instagram, 
  Sparkles,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const email = portfolioData.profile.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#6366f1', '#a855f7', '#06b6d4', '#10b981']
    });

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl p-8 sm:p-12 border-zinc-800 shadow-2xl relative overflow-hidden"
        >
          {/* Ambient Glow in Card */}
          <div className="ambient-glow w-[300px] h-[300px] bg-indigo-600/15 -top-20 -right-20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left Column: Direct email & copy */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-indigo-400 font-semibold tracking-wider">
                  {t.contact.emailLabel}
                </span>
                <div className="mt-2 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <a
                      href={`mailto:${email}`}
                      className="text-base sm:text-lg font-mono font-semibold text-white hover:text-indigo-300 transition-colors truncate block"
                    >
                      {email}
                    </a>
                    <span className="text-xs text-zinc-500 font-mono">
                      {portfolioData.profile.status[lang]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 text-xs font-mono font-medium transition-all hover:scale-105 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>{t.contact.copyEmail}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}?subject=Contato%20via%20Portfolio`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium shadow-glow transition-all hover:scale-105"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.contact.sendMessage}</span>
                </a>
              </div>

              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-mono text-emerald-400 flex items-center gap-1.5"
                >
                  <span>{t.contact.copied}</span>
                </motion.div>
              )}
            </div>

            {/* Right Column: Social Links & Location */}
            <div className="space-y-6 md:border-l md:border-zinc-800/80 md:pl-8">
              <div>
                <span className="text-xs font-mono uppercase text-zinc-400 font-semibold tracking-wider">
                  {t.contact.locationLabel}
                </span>
                <div className="mt-2 flex items-center gap-2 text-zinc-300 text-sm">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>{portfolioData.profile.location[lang]}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-zinc-400 font-semibold tracking-wider">
                  {t.contact.socialsLabel}
                </span>
                
                <div className="mt-3 flex flex-col gap-2">
                  <a
                    href={portfolioData.profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-indigo-500/40 hover:bg-zinc-900/60 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs font-mono">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={portfolioData.profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-indigo-500/40 hover:bg-zinc-900/60 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs font-mono">GitHub (@borajapa)</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={portfolioData.profile.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-indigo-500/40 hover:bg-zinc-900/60 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Instagram className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs font-mono">Instagram (@joaohkf)</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
