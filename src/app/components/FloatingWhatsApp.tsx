"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "9231459101614";
  const defaultMessage = "Hello ARG Registrars Pakistan, I would like to inquire about your accredited ISO certifications, C-TPAT audits, and technical compliance services.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Mini Chat Card Pop-over */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-4 w-84 rounded-2xl bg-[#06150D] border border-emerald-500/40 shadow-[0_16px_50px_rgba(0,0,0,0.7)] p-5 text-white backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#34D399]">
                  ARG Registrars Desk
                </span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close WhatsApp chat popup"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-gray-300 font-lato text-xs leading-relaxed mb-4">
              Connect directly with our auditing and certification registrars for instant scopes, ISO certifications, and audit schedules.
            </p>

            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-montserrat font-bold text-xs tracking-wider transition-colors shadow-lg"
            >
              <MessageCircle size={16} />
              <span>START WHATSAPP CHAT</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] border-2 border-white/30 hover:border-[#34D399] transition-all"
        aria-label="Chat on WhatsApp with ARG Registrars Pakistan"
      >
        <MessageCircle size={28} className="text-white" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
      </motion.button>
    </div>
  );
}
