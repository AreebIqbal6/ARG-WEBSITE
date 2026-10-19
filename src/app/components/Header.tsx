"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? 'py-2.5' : 'py-5'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 rounded-full px-5 md:px-7 py-2.5 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl border border-gray-200/80 shadow-[0_8px_32px_rgba(6,21,13,0.12)]' 
            : 'bg-black/25 backdrop-blur-md border border-white/15 shadow-none'
        }`}>
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="bg-white rounded-xl p-1 shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
              <Image 
                src="/arg_logo.png" 
                alt="ARG Registrars Pakistan Logo" 
                width={40} 
                height={40} 
                className="object-contain w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-montserrat font-black text-sm md:text-base tracking-wider transition-colors duration-500 leading-tight ${isScrolled ? 'text-[#06150D]' : 'text-white'}`}>
                ARG REGISTRARS
              </span>
              <span className={`font-montserrat text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-bold transition-colors duration-500 leading-tight ${isScrolled ? 'text-[#00873E]' : 'text-[#34D399]'}`}>
                PAKISTAN
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center gap-8 font-montserrat font-bold text-xs tracking-wider transition-colors duration-500 ${isScrolled ? 'text-[#06150D]' : 'text-white'}`}>
            <Link href="/" className="hover:text-[#00873E] transition-colors duration-300">HOME</Link>
            
            <div className="group relative cursor-pointer flex items-center gap-1 hover:text-[#00873E] transition-colors duration-300 py-3">
              SERVICES <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 text-[#00873E]" />
              {/* Dropdown glass menu */}
              <div className={`absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 rounded-2xl p-4 flex flex-col gap-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] ${isScrolled ? 'bg-white/95 backdrop-blur-xl border border-gray-100' : 'bg-[#06150D]/95 backdrop-blur-xl border border-white/10'}`}>
                <Link href="/services" className={`${isScrolled ? 'text-gray-800' : 'text-gray-200'} hover:text-[#00873E] text-xs font-semibold transition-colors py-1`}>All Services</Link>
                <Link href="/services" className={`${isScrolled ? 'text-gray-800' : 'text-gray-200'} hover:text-[#00873E] text-xs font-semibold transition-colors py-1`}>ISO 9001 / 14001 / 45001</Link>
                <Link href="/audits" className={`${isScrolled ? 'text-gray-800' : 'text-gray-200'} hover:text-[#00873E] text-xs font-semibold transition-colors py-1`}>C-TPAT Security Audits</Link>
                <Link href="/audits" className={`${isScrolled ? 'text-gray-800' : 'text-gray-200'} hover:text-[#00873E] text-xs font-semibold transition-colors py-1`}>Technical &amp; Factory Audits</Link>
              </div>
            </div>

            <Link href="/audits" className="hover:text-[#00873E] transition-colors duration-300">AUDITS</Link>
            <Link href="/about" className="hover:text-[#00873E] transition-colors duration-300">ABOUT US</Link>
            <Link href="/contact" className="hover:text-[#00873E] transition-colors duration-300">CONTACT</Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <Link 
              href="/contact" 
              className="px-6 py-2.5 rounded-full font-bold font-montserrat tracking-wide text-xs transition-all duration-300 hover:-translate-y-0.5 bg-[#00873E] text-white hover:bg-[#059669] shadow-[0_4px_18px_rgba(0,135,62,0.35)]"
            >
              GET AN AUDIT QUOTE
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden hover:scale-110 transition-transform relative z-50 p-2 ${isScrolled ? 'text-[#06150D]' : 'text-white'}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#06150D]/95 border-t border-emerald-900/40 text-white backdrop-blur-2xl flex flex-col items-center py-8 gap-5 font-montserrat z-40 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          >
            <Link href="/" className="text-lg font-bold tracking-widest hover:text-[#34D399] transition-colors" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
            <Link href="/services" className="text-lg font-bold tracking-widest hover:text-[#34D399] transition-colors" onClick={() => setMobileMenuOpen(false)}>SERVICES</Link>
            <Link href="/audits" className="text-lg font-bold tracking-widest hover:text-[#34D399] transition-colors" onClick={() => setMobileMenuOpen(false)}>AUDITS</Link>
            <Link href="/about" className="text-lg font-bold tracking-widest hover:text-[#34D399] transition-colors" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>
            <Link href="/contact" className="text-lg font-bold tracking-widest hover:text-[#34D399] transition-colors" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
            <div className="mt-2">
              <Link 
                href="/contact" 
                className="px-8 py-3 rounded-full font-bold text-xs tracking-widest transition-colors bg-[#00873E] text-white hover:bg-[#059669] shadow-[0_10px_25px_rgba(0,135,62,0.4)]" 
                onClick={() => setMobileMenuOpen(false)}
              >
                GET AN AUDIT QUOTE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
