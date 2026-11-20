import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Code2, QrCode, ShieldCheck, Mail, FileDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="pt-12 md:pt-16 lg:pt-20 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Editorial Typography & Resume Objective */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Small Intro */}
          <div className="inline-flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-stone">
              HELLO, I'M
            </span>
            <span className="w-8 h-[1px] bg-stone"></span>
          </div>

          {/* Heading & Terracotta Script Accent */}
          <div className="space-y-1">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate leading-[1.08]">
              {personal.name}
            </h1>
            <p className="font-script text-3xl sm:text-4xl lg:text-5xl text-terracotta font-medium tracking-wide pt-1">
              {personal.scriptTitle}
            </p>
          </div>

          {/* Objective Statement from Resume in Soft Chalk Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#D8D4CC] shadow-card-soft space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-terracotta font-bold">
              CAREER OBJECTIVE
            </span>
            <p className="text-sm sm:text-base text-slate-muted leading-relaxed font-normal">
              {personal.objective}
            </p>
          </div>

          {/* CTA Buttons - Strictly using 8px radius */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="btn-primary px-6 py-3 text-sm cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            {/* Direct PDF Download Button */}
            <a
              href="/Kirithika_Srinivasan_Resume.pdf"
              download="Kirithika_Srinivasan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-6 py-3 text-sm cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-terracotta" />
              <span>Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone" />
            </a>
          </div>

          {/* Direct Social Links from Resume */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-[8px] bg-[#FAF8F5] border border-[#D8D4CC] inline-flex items-center gap-2 text-xs font-semibold text-slate hover:border-terracotta hover:text-terracotta transition-colors shadow-2xs"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-[8px] bg-[#FAF8F5] border border-[#D8D4CC] inline-flex items-center gap-2 text-xs font-semibold text-slate hover:border-terracotta hover:text-terracotta transition-colors shadow-2xs"
            >
              <Linkedin className="w-4 h-4 text-terracotta" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-[8px] bg-[#FAF8F5] border border-[#D8D4CC] inline-flex items-center gap-2 text-xs font-semibold text-slate hover:border-terracotta hover:text-terracotta transition-colors shadow-2xs"
            >
              <Code2 className="w-4 h-4 text-terracotta" />
              <span>LeetCode</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="px-3.5 py-2 rounded-[8px] bg-[#FAF8F5] border border-[#D8D4CC] inline-flex items-center gap-2 text-xs font-semibold text-slate hover:border-terracotta hover:text-terracotta transition-colors shadow-2xs"
            >
              <Mail className="w-4 h-4 text-terracotta" />
              <span>{personal.email}</span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Floating Digital Identity Card with Connected Lanyard Rope */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end pt-4"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [-1.5, 0.5, -1.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-sm flex flex-col items-center"
          >
            {/* LANYARD ROPE STRAP & CLASP ASSEMBLY */}
            <div className="w-full flex flex-col items-center relative z-20 pointer-events-none -mb-3">
              {/* Lanyard Fabric Ribbon / Rope extending from the top */}
              <div className="h-20 w-8 relative flex justify-center overflow-hidden">
                {/* Hanging Terracotta Lanyard Strap with subtle stitch lines */}
                <div className="w-4 h-full bg-[#B9572F] shadow-xs relative flex justify-between px-[1px]">
                  <div className="w-[1px] h-full bg-[#9E4623] opacity-75"></div>
                  <div className="w-[1px] h-full bg-[#9E4623] opacity-75"></div>
                  {/* Woven strap texture */}
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:3px_3px]"></div>
                </div>
              </div>

              {/* Metallic Swivel Hook & Clip */}
              <div className="flex flex-col items-center -mt-1">
                {/* Silver Swivel Ring */}
                <div className="w-5 h-2.5 rounded-t-full border-2 border-[#A9A39A] bg-gradient-to-b from-[#FAF8F5] to-[#D8D4CC]"></div>
                {/* Metallic Clip Body */}
                <div className="w-3.5 h-4 bg-gradient-to-b from-[#FAF8F5] via-[#D8D4CC] to-[#A9A39A] rounded-[2px] border border-[#A9A39A] shadow-xs"></div>
                {/* Hook clasp going through the slot */}
                <div className="w-2 h-3.5 border-2 border-[#827E76] rounded-b-full bg-[#FAF8F5] -mt-0.5"></div>
              </div>
            </div>

            {/* THE ID CARD */}
            <div className="w-full bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#D8D4CC] shadow-id-soft relative overflow-hidden">
              
              {/* Badge Slot Cutout (Punch Hole for Lanyard Clip) */}
              <div className="w-10 h-2 rounded-full bg-[#EAE6DF] border border-[#D8D4CC] mx-auto -mt-2 mb-4 shadow-inner flex items-center justify-center">
                <div className="w-3 h-0.5 bg-[#827E76] rounded-full opacity-60"></div>
              </div>

              {/* Subtle Terracotta Watermark Corner */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-terracotta-light to-transparent rounded-bl-full pointer-events-none opacity-80"></div>

              {/* ID Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D8D4CC]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-terracotta"></div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-slate-muted font-semibold">
                    SRI SAIRAM ENG. COLLEGE
                  </span>
                </div>
                <div className="w-7 h-5 rounded-[4px] bg-[#EAE6DF] border border-stone flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-terracotta"></span>
                </div>
              </div>

              {/* Portrait & Details */}
              <div className="pt-6 pb-5 flex flex-col items-center text-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-terracotta/20 rounded-2xl blur-xs"></div>
                  <img
                    src={personal.photoUrl}
                    alt={personal.name}
                    className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl object-cover object-top border-2 border-[#FAF8F5] shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-terracotta text-white p-1.5 rounded-full shadow-md" title="Integrated M.Tech, CSE Scholar">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-5 space-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate">
                    {personal.name}
                  </h3>
                  <p className="text-xs font-semibold text-terracotta font-mono uppercase tracking-wider">
                    Integrated M.Tech, CSE
                  </p>
                  <p className="text-xs text-slate-muted pt-0.5">
                    Academic CGPA: <strong className="text-slate font-bold">{personal.cgpa}</strong>
                  </p>
                </div>
              </div>

              {/* QR Graphic & Location */}
              <div className="pt-4 border-t border-[#D8D4CC] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#EAE6DF] border border-[#D8D4CC] p-1.5 flex items-center justify-center">
                    <QrCode className="w-full h-full text-slate" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-muted">
                      LOCATION
                    </p>
                    <p className="text-xs font-mono font-bold text-slate">
                      Chennai, TN, India
                    </p>
                  </div>
                </div>

                {/* Decorative Slate Barcode */}
                <div className="flex gap-0.5 h-8 items-end opacity-60">
                  <div className="w-0.5 h-8 bg-slate"></div>
                  <div className="w-1 h-8 bg-slate"></div>
                  <div className="w-0.5 h-6 bg-slate"></div>
                  <div className="w-1.5 h-8 bg-slate"></div>
                  <div className="w-0.5 h-7 bg-slate"></div>
                  <div className="w-0.5 h-8 bg-slate"></div>
                  <div className="w-1 h-8 bg-slate"></div>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
