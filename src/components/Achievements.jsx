import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, BookOpen, ExternalLink, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { awards, publications } = portfolioData;

  return (
    <section id="awards" className="py-16 md:py-24 border-t border-[#D8D4CC]">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
            05 // RECOGNITION & RESEARCH
          </span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate leading-[1.12]">
          Awards, Certificates & Publications
        </h2>
        <p className="text-base text-slate-muted mt-3 leading-relaxed">
          Hackathon wins, peer-reviewed research publications, and professional NPTEL recognitions.
        </p>
      </div>

      {/* Publications Banner */}
      <div className="mb-10">
        {publications.map((pub, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="editorial-card p-7 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D8D4CC] pb-4 mb-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-8 rounded-[8px] bg-terracotta-light text-terracotta flex items-center justify-center font-bold">
                  <BookOpen className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-terracotta font-bold">
                  PEER-REVIEWED PUBLICATION
                </span>
              </div>
              <span className="text-xs font-mono text-slate-muted px-3 py-1 rounded-[8px] bg-[#EAE6DF] border border-[#D8D4CC] self-start sm:self-center">
                {pub.date}
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate">
              {pub.title}
            </h3>

            <p className="text-sm text-terracotta font-mono mt-1">
              {pub.venue}
            </p>

            <p className="text-sm text-slate-muted mt-3 leading-relaxed">
              {pub.summary}
            </p>

            <div className="pt-4 mt-4 border-t border-[#D8D4CC]">
              <a
                href={pub.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-terracotta hover:underline inline-flex items-center gap-1.5"
              >
                <span>{pub.doiText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Awards & Certificates Grid - Formatted as Paragraphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="editorial-card p-7 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-[8px] bg-terracotta-light text-terracotta flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-muted px-3 py-1 rounded-[8px] bg-[#EAE6DF] border border-[#D8D4CC]">
                  {item.date}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate group-hover:text-terracotta transition-colors pt-1">
                {item.title}
              </h3>

              <p className="text-sm font-semibold text-terracotta font-mono">
                {item.honor}
              </p>

              {/* Clean Narrative Paragraph */}
              <p className="pt-2 text-xs sm:text-sm text-slate-muted leading-relaxed font-normal">
                {item.bullets.join(' ')}
              </p>
            </div>

            <div className="pt-4 border-t border-[#D8D4CC] mt-5 flex items-center gap-1.5 text-xs text-terracotta font-semibold">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>Verified Achievement</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
