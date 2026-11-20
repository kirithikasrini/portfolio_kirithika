import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, FileDown, Copy, Check, ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ConnectModal({ isOpen, onClose }) {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#2E3440]/50 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#FAF8F5] border border-[#D8D4CC] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6 overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-[8px] text-slate-muted hover:text-slate hover:bg-[#EAE6DF] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-1.5 text-left pr-8">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-terracotta-light text-terracotta text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse"></span>
                <span>OPEN TO WORK & ROLES</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate">
                Let's Connect
              </h3>
              <p className="text-sm text-slate-muted">
                Reach out directly via email, phone, or download my verified resume.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-3">
              
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#F2EFEA] border border-[#D8D4CC] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[8px] bg-terracotta-light text-terracotta flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone font-bold block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-semibold text-slate hover:text-terracotta transition-colors break-all"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <button
                    onClick={copyEmail}
                    className="px-3 py-1.5 rounded-[8px] border border-[#A9A39A] text-xs font-medium text-slate hover:border-terracotta hover:text-terracotta transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-white"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-terracotta" /> : <Copy className="w-3.5 h-3.5 text-stone" />}
                    <span>{copiedEmail ? "Copied" : "Copy"}</span>
                  </button>
                  <a
                    href={`mailto:${personal.email}`}
                    className="px-3 py-1.5 rounded-[8px] bg-terracotta text-white text-xs font-medium hover:bg-terracotta-hover transition-colors inline-flex items-center gap-1"
                  >
                    <span>Mail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[#F2EFEA] border border-[#D8D4CC] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[8px] bg-terracotta-light text-terracotta flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone font-bold block">
                      PHONE NUMBER
                    </span>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-sm font-semibold text-slate hover:text-terracotta transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <button
                    onClick={copyPhone}
                    className="px-3 py-1.5 rounded-[8px] border border-[#A9A39A] text-xs font-medium text-slate hover:border-terracotta hover:text-terracotta transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-white"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-terracotta" /> : <Copy className="w-3.5 h-3.5 text-stone" />}
                    <span>{copiedPhone ? "Copied" : "Copy"}</span>
                  </button>
                  <a
                    href={`tel:${personal.phone}`}
                    className="px-3 py-1.5 rounded-[8px] bg-terracotta text-white text-xs font-medium hover:bg-terracotta-hover transition-colors inline-flex items-center gap-1"
                  >
                    <span>Call</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Download Resume Button */}
            <div className="pt-2">
              <a
                href="/Kirithika_Srinivasan_Resume.pdf"
                download="Kirithika_Srinivasan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary py-3.5 text-sm sm:text-base font-semibold shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <FileDown className="w-5 h-5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Quick Links & Location */}
            <div className="pt-4 border-t border-[#D8D4CC] flex flex-wrap items-center justify-between text-xs text-slate-muted">
              <div className="flex items-center gap-1 text-stone">
                <MapPin className="w-3.5 h-3.5 text-terracotta" />
                <span>Chennai, TN, India</span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate hover:text-terracotta transition-colors inline-flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span className="text-stone">•</span>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate hover:text-terracotta transition-colors inline-flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
