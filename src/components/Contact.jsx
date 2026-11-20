import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[#D8D4CC]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="editorial-card p-8 sm:p-14 max-w-4xl mx-auto text-center space-y-8 relative overflow-hidden"
      >
        <div className="space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[8px] bg-[#EAE6DF] border border-[#D8D4CC] text-xs font-semibold text-terracotta mb-2">
            <span className="w-2 h-2 rounded-full bg-terracotta"></span>
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate leading-[1.12]">
            Let's create something meaningful.
          </h2>

          <p className="text-base sm:text-lg text-slate-muted max-w-2xl mx-auto leading-relaxed font-normal pt-2">
            Seeking opportunities in Computer Science and Engineering to apply front-end development, data analysis, and database management.
          </p>
        </div>

        {/* Exact Contact & Profile Cards from Resume */}
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left text-xs relative z-10">
          <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#D8D4CC] flex items-start gap-3">
            <Phone className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
            <div>
              <p className="font-mono uppercase font-bold text-stone">PHONE</p>
              <a href={`tel:${personal.phone}`} className="font-semibold text-slate text-sm mt-0.5 hover:text-terracotta transition-colors block">
                {personal.phone}
              </a>
            </div>
          </div>

          <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#D8D4CC] flex items-start gap-3">
            <Mail className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
            <div>
              <p className="font-mono uppercase font-bold text-stone">EMAIL</p>
              <a href={`mailto:${personal.email}`} className="font-semibold text-slate text-sm mt-0.5 hover:text-terracotta transition-colors block">
                {personal.email}
              </a>
            </div>
          </div>

          <div className="p-4 rounded-[8px] bg-[#FAF8F5] border border-[#D8D4CC] flex items-start gap-3 sm:col-span-2 lg:col-span-1">
            <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
            <div>
              <p className="font-mono uppercase font-bold text-stone">RESIDENCE</p>
              <p className="font-medium text-slate leading-tight mt-0.5">{personal.address}</p>
            </div>
          </div>
        </div>

        {/* Online Profiles */}
        <div className="pt-4 border-t border-[#D8D4CC] flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-muted relative z-10">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-terracotta transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub (kirithikasrini)</span>
          </a>

          <span className="text-stone">•</span>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-terracotta transition-colors"
          >
            <Linkedin className="w-4 h-4 text-terracotta" />
            <span>LinkedIn (Kirithika Srinivasan)</span>
          </a>

          <span className="text-stone">•</span>

          <a
            href={personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-terracotta transition-colors"
          >
            <Code2 className="w-4 h-4 text-terracotta" />
            <span>LeetCode (kirithika_srini04)</span>
          </a>
        </div>

      </motion.div>
    </section>
  );
}
