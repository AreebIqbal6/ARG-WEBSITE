"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, FileText, X } from 'lucide-react';
import Link from 'next/link';

export default function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <div className="glass-panel p-2 rounded-2xl border border-emerald-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.8)] bg-[#030906]/92 backdrop-blur-2xl flex items-center justify-between gap-2">
            
            {/* Call Button */}
            <a
              href="tel:+966558004287"
              className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-display font-semibold text-xs border border-white/10 active:scale-95 transition-all"
            >
              <Phone size={14} className="text-[#34D399]" />
              <span>Call Desk</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9231459101614?text=Hello%20ARG%20Registrars,%20I%20would%20like%20to%20request%20an%20audit%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-[#00873E]/30 hover:bg-[#00873E]/50 text-[#34D399] font-display font-semibold text-xs border border-emerald-500/30 active:scale-95 transition-all"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>

            {/* Quote Action */}
            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs shadow-[0_0_15px_rgba(0,135,62,0.4)] border border-emerald-400/40 active:scale-95 transition-all"
            >
              <FileText size={14} />
              <span>Get Quote</span>
            </Link>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
