import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 md:py-24 border-t border-[#D8D4CC]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 space-y-4"
        >
          <div className="inline-flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              01 // ACADEMICS
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate leading-[1.15]">
            Education
          </h2>

          <p className="text-sm text-slate-muted leading-relaxed">
            Academic qualifications and educational history from schooling through integrated engineering.
          </p>

          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#D8D4CC] space-y-2 shadow-card-soft mt-6">
            <span className="text-xs font-mono uppercase tracking-wider text-terracotta font-bold">
              CURRENT STATUS
            </span>
            <p className="font-serif text-xl font-bold text-slate">
              Integrated M.Tech, CSE
            </p>
            <p className="text-xs text-slate-muted">
              Sri Sairam Engineering College • 8.56 CGPA
            </p>
          </div>
        </motion.div>

        {/* Right Education Cards */}
        <div className="lg:col-span-8 space-y-5">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="editorial-card p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-[8px] bg-terracotta-light text-terracotta flex items-center justify-center shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-slate">
                    {item.institution}
                  </h3>
                  <p className="text-sm font-medium text-terracotta">
                    {item.degree}
                  </p>
                  <p className="text-xs text-slate-muted font-mono">
                    Score / CGPA: <strong className="text-slate font-semibold">{item.score}</strong>
                  </p>
                </div>
              </div>

              <div className="self-start sm:self-center">
                <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-[8px] bg-[#EAE6DF] border border-[#D8D4CC] text-slate-muted">
                  {item.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
