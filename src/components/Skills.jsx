import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Brain, BarChart2, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      title: "Programming Languages",
      items: skills.programming,
      icon: Code
    },
    {
      title: "Web Technologies",
      items: skills.web,
      icon: Layout
    },
    {
      title: "Database Systems",
      items: skills.database,
      icon: Database
    },
    {
      title: "Data Science & Machine Learning",
      items: skills.dataScience,
      icon: Brain
    },
    {
      title: "Mathematical & Statistical Tools",
      items: skills.tools,
      icon: BarChart2
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-[#D8D4CC]">
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
            04 // TOOLKIT
          </span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate leading-[1.12]">
          Skills
        </h2>
        <p className="text-base text-slate-muted mt-3 leading-relaxed">
          Technical proficiencies exactly as highlighted on resume.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="editorial-card p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-[#D8D4CC] mb-5">
                  <div className="w-10 h-10 rounded-[8px] bg-terracotta-light text-terracotta flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-xs font-semibold bg-[#EAE6DF] border border-[#D8D4CC] text-slate"
                    >
                      <Check className="w-3.5 h-3.5 text-terracotta" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
