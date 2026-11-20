import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-[#D8D4CC]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 space-y-4"
        >
          <div className="inline-flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              02 // INDUSTRY TENURES
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate leading-[1.15]">
            Experience
          </h2>

          <p className="text-sm text-slate-muted leading-relaxed">
            Professional internships in front-end development and master data management.
          </p>
        </motion.div>

        {/* Right Experience Cards as Paragraphs */}
        <div className="lg:col-span-8">
          <div className="relative border-l-2 border-[#D8D4CC] ml-4 sm:ml-6 pl-8 sm:pl-10 space-y-10">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Node in Terracotta */}
                <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 w-5 h-5 rounded-full bg-[#FAF8F5] border-4 border-terracotta shadow-sm group-hover:scale-125 transition-transform"></div>

                <div className="editorial-card p-6 sm:p-7 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D8D4CC] pb-3">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate group-hover:text-terracotta transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-terracotta font-mono pt-0.5">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-muted self-start sm:self-center">
                      <span className="px-3 py-1 rounded-[8px] bg-[#EAE6DF] border border-[#D8D4CC]">
                        {item.period}
                      </span>
                      <span className="px-2.5 py-1 rounded-[8px] bg-terracotta-light text-terracotta font-semibold">
                        {item.mode}
                      </span>
                    </div>
                  </div>

                  {/* Clean Narrative Paragraph */}
                  <p className="text-sm sm:text-base text-slate-muted leading-relaxed font-normal pt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
