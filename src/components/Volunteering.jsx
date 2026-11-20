import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Volunteering() {
  const { volunteering } = portfolioData;

  return (
    <section id="volunteering" className="py-16 md:py-24 border-t border-[#D8D4CC]">
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
            06 // LEADERSHIP & SERVICE
          </span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate leading-[1.12]">
          Volunteer Experience
        </h2>
        <p className="text-base text-slate-muted mt-3 leading-relaxed">
          Campus community service, national hackathon organization, and coordination roles.
        </p>
      </div>

      <div className="space-y-6">
        {volunteering.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="editorial-card p-7 sm:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-[8px] bg-terracotta-light text-terracotta flex items-center justify-center shrink-0 mt-0.5">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-terracotta font-mono">
                    {item.organization}
                  </p>
                </div>

                {/* Clean Narrative Paragraph */}
                <p className="text-sm sm:text-base text-slate-muted leading-relaxed pt-1">
                  {item.bullets.join(' ')}
                </p>
              </div>
            </div>

            <div className="self-start md:self-center shrink-0">
              <span className="text-xs font-mono font-semibold px-3.5 py-1.5 rounded-[8px] bg-[#EAE6DF] border border-[#D8D4CC] text-slate-muted">
                {item.period}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
