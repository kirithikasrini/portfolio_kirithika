import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ConnectModal from './ConnectModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const { personal } = portfolioData;

  const navLinks = [
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Awards & Research', href: '#awards' },
    { name: 'Volunteering', href: '#volunteering' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#F2EFEA]/90 backdrop-blur-md border-b border-[#D8D4CC] transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand */}
          <a href="#hero" className="group flex items-center gap-3">
            <img
              src={personal.photoUrl}
              alt={personal.name}
              className="w-10 h-10 rounded-full object-cover border border-[#A9A39A] shadow-xs group-hover:border-terracotta transition-colors"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-slate tracking-tight group-hover:text-terracotta transition-colors">
                Kirithika Srinivasan
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-muted">
                Integrated M.Tech, CSE • 8.56 CGPA
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-terracotta transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-terracotta hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA Button (Opens Dialog Modal) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsConnectModalOpen(true)}
              className="btn-primary text-xs sm:text-sm px-5 py-2.5 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Connect</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-[8px] text-slate hover:bg-[#EAE6DF] transition-colors cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#F2EFEA] border-b border-[#D8D4CC] px-6 py-5 shadow-lg overflow-hidden"
            >
              <div className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-serif font-medium text-slate py-2 border-b border-[#D8D4CC]/60 hover:text-terracotta transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsConnectModalOpen(true);
                  }}
                  className="btn-primary text-sm py-2.5 mt-2 w-full cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Connect with Me</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Connect Dialog Box Modal */}
      <ConnectModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
      />
    </>
  );
}
