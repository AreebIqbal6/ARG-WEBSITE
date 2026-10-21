"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, FileText } from 'lucide-react';
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
          <div className="p-2 rounded-2xl border border-slate-200/90 shadow-[0_10px_35px_rgba(15,23,42,0.12)] bg-white/95 backdrop-blur-2xl flex items-center justify-between gap-2.5">
            
            {/* Call Registrar Operations */}
            <a
              href="tel:+966558004287"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-display font-semibold text-xs border border-slate-200 active:scale-95 transition-all"
            >
              <Phone size={14} className="text-[#00873E]" />
              <span>Call Operations</span>
            </a>

            {/* Quote Action */}
            <Link
              href="/schedule"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs shadow-md border border-emerald-600 active:scale-95 transition-all"
            >
              <FileText size={14} />
              <span>Request Audit Quote</span>
            </Link>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
