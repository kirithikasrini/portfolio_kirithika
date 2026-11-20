import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#D8D4CC] bg-[#F2EFEA] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-muted font-normal">
        
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-serif font-bold text-slate text-base">
            {personal?.name || "Kirithika Srinivasan"}
          </span>
          <span className="hidden sm:inline text-stone">•</span>
          <p className="text-xs text-stone">
            © {new Date().getFullYear()} All Rights Reserved. Chalk, Slate, Terracotta & Stone brand system.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personal?.github || "https://github.com/kirithikasrini"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta transition-colors text-xs font-medium uppercase tracking-wider text-slate"
          >
            GitHub
          </a>
          <a
            href={personal?.linkedin || "https://www.linkedin.com/in/kirithika-srinivasan-8b3555257"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta transition-colors text-xs font-medium uppercase tracking-wider text-slate"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-[8px] border border-[#D8D4CC] bg-[#FAF8F5] flex items-center justify-center text-slate hover:border-terracotta hover:text-terracotta transition-all shadow-xs cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
