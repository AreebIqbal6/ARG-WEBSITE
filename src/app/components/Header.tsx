"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import CertificateVerifyModal from './ui/CertificateVerifyModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 rounded-full px-5 md:px-7 py-3 ${
          isScrolled 
            ? 'bg-[#030906]/80 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]' 
            : 'bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
        }`}>
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="bg-white rounded-xl p-1 shadow-sm border border-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/arg_logo.png" 
                alt="ARG Registrars Pakistan Logo" 
                width={36} 
                height={36} 
                className="object-contain w-8 h-8"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm md:text-base tracking-wider text-white leading-tight">
                ARG REGISTRARS
              </span>
              <span className="font-sans text-[9px] tracking-[0.28em] uppercase font-bold text-[#34D399] leading-tight">
                PAKISTAN
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-sans font-medium text-xs tracking-wider text-gray-300">
            <Link href="/" className="hover:text-[#34D399] transition-colors duration-300 relative group py-2">
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#34D399] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            
            <div className="group relative cursor-pointer flex items-center gap-1.5 hover:text-[#34D399] transition-colors duration-300 py-2">
              SERVICES 
              <ChevronDown size={13} className="group-hover:rotate-180 transition-transform duration-300 text-[#34D399]" />
              
              {/* Dropdown glass menu */}
              <div className="absolute top-full left-0 mt-3 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 rounded-2xl p-3 flex flex-col gap-1.5 glass-panel shadow-[0_16px_50px_rgba(0,0,0,0.8)] border border-white/10 bg-[#06150D]/95">
                <Link href="/services" className="text-gray-200 hover:text-[#34D399] hover:bg-white/5 px-3 py-2 rounded-xl text-xs font-medium transition-all">All Certification Services</Link>
                <Link href="/services" className="text-gray-200 hover:text-[#34D399] hover:bg-white/5 px-3 py-2 rounded-xl text-xs font-medium transition-all">ISO 9001 / 14001 / 45001</Link>
                <Link href="/audits" className="text-gray-200 hover:text-[#34D399] hover:bg-white/5 px-3 py-2 rounded-xl text-xs font-medium transition-all">C-TPAT Supply Chain Audits</Link>
                <Link href="/audits" className="text-gray-200 hover:text-[#34D399] hover:bg-white/5 px-3 py-2 rounded-xl text-xs font-medium transition-all">Factory Technical Evaluations</Link>
              </div>
            </div>

            <Link href="/audits" className="hover:text-[#34D399] transition-colors duration-300 relative group py-2">
              AUDITS
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#34D399] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <Link href="/about" className="hover:text-[#34D399] transition-colors duration-300 relative group py-2">
              ABOUT US
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#34D399] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <Link href="/contact" className="hover:text-[#34D399] transition-colors duration-300 relative group py-2">
              OFFICES &amp; CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#34D399] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsVerifyOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium font-sans text-xs tracking-wider transition-all duration-300 text-gray-300 hover:text-white glass-panel hover:border-emerald-400/40 hover:bg-white/[0.06] cursor-pointer"
            >
              <ShieldCheck size={14} className="text-[#34D399]" />
              <span>VERIFY CERTIFICATE</span>
            </button>

            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold font-sans text-xs tracking-wider transition-all duration-300 bg-gradient-to-r from-[#00873E] to-[#059669] text-white hover:shadow-[0_0_25px_rgba(0,135,62,0.6)] hover:scale-105 border border-emerald-400/30"
            >
              <span>GET QUOTE</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-white hover:text-[#34D399] transition-colors relative z-50" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#030906]/95 border-t border-white/10 text-white backdrop-blur-2xl flex flex-col items-center py-8 gap-5 font-sans z-40 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          >
            <Link href="/" className="text-base font-bold tracking-widest hover:text-[#34D399] transition-colors" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
            <Link href="/services" className="text-base font-bold tracking-widest hover:text-[#34D399] transition-colors" onClick={() => setMobileMenuOpen(false)}>SERVICES</Link>
            <Link href="/audits" className="text-base font-bold tracking-widest hover:text-[#34D399] transition-colors" onClick={() => setMobileMenuOpen(false)}>AUDITS</Link>
            <Link href="/about" className="text-base font-bold tracking-widest hover:text-[#34D399] transition-colors" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>
            <Link href="/contact" className="text-base font-bold tracking-widest hover:text-[#34D399] transition-colors" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
            <div className="flex flex-col gap-3 w-4/5 max-w-xs mt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsVerifyOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold tracking-wider glass-panel text-white hover:border-emerald-400/40"
              >
                <ShieldCheck size={15} className="text-[#34D399]" />
                <span>VERIFY CERTIFICATE</span>
              </button>
              <Link 
                href="/contact" 
                className="w-full text-center px-7 py-3 rounded-xl font-bold text-xs tracking-widest transition-all bg-[#00873E] text-white hover:bg-[#059669] shadow-[0_0_20px_rgba(0,135,62,0.5)]" 
                onClick={() => setMobileMenuOpen(false)}
              >
                REQUEST AN AUDIT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Official Certificate Verification Modal */}
      <CertificateVerifyModal
        isOpen={isVerifyOpen}
        onClose={() => setIsVerifyOpen(false)}
      />
    </header>
  );
}
