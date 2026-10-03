import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 border-t border-zinc-900 bg-zinc-950/60 text-zinc-500 text-xs font-mono relative">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Author */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-zinc-300 font-semibold">
              {portfolioData.profile.name}
            </div>
            <div className="text-[11px] text-zinc-400">
              © {new Date().getFullYear()} • {t.contact.rightsReserved}
            </div>
          </div>
        </div>

        {/* Center: Tech note */}
        <div className="text-center sm:text-left text-zinc-400">
          Vite • React • Tailwind CSS • Framer Motion
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
          title="Voltar ao topo / Back to top"
        >
          <ArrowUp className="w-4 h-4 text-indigo-400" />
          <span className="hidden sm:inline text-[11px]">Top</span>
        </button>

      </div>
    </footer>
  );
}
