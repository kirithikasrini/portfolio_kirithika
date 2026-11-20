import React from 'react';
import { motion } from 'framer-motion';
import { Github, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-[#D8D4CC]">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
            03 // PORTFOLIO
          </span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate leading-[1.12]">
          Projects
        </h2>
        <p className="text-base text-slate-muted mt-3 leading-relaxed">
          Technical projects featured directly on resume spanning computer vision, web applications, and exploratory data analytics.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="editorial-card p-7 sm:p-8 flex flex-col justify-between space-y-6 group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-[8px] text-xs font-semibold bg-terracotta-light text-terracotta">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-stone font-medium">
                  PROJECT 0{index + 1}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate group-hover:text-terracotta transition-colors">
                {project.title}
              </h3>

              {/* Tools from Resume */}
              <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                <span className="text-xs font-mono uppercase text-stone font-semibold mr-1 self-center">
                  Tools:
                </span>
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-medium px-2.5 py-1 rounded-[8px] bg-[#EAE6DF] border border-[#D8D4CC] text-slate"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Clean Narrative Paragraph */}
              <p className="mt-4 pt-4 border-t border-[#D8D4CC] text-sm sm:text-base text-slate-muted leading-relaxed font-normal">
                {project.bullets.join(' ')}
              </p>
            </div>

            {/* Links - Buttons adhering strictly to 8px border-radius */}
            <div className="pt-4 border-t border-[#D8D4CC] flex flex-wrap items-center justify-between gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-4 py-2 text-xs sm:text-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              {project.publicationUrl && (
                <a
                  href={project.publicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-terracotta hover:underline inline-flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Springer DOI</span>
                </a>
              )}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
