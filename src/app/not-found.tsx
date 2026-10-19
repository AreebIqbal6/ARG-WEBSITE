"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowLeft, Home, FileSearch, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030906] flex items-center justify-center p-4 architect-grid relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="emerald-aurora top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00873E]/20" />

      {/* Radar Ring Graphic */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[500px] h-[500px] rounded-full border border-emerald-500/20"
        />
        <motion.div
          animate={{ scale: [1, 1.45, 1], opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-[700px] h-[700px] rounded-full border border-white/5"
        />
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-emerald-500/30 shadow-2xl bg-[#06150D]/85 backdrop-blur-2xl"
        >
          {/* Status Badge */}
          <div className="w-16 h-16 rounded-2xl bg-[#00873E]/20 border border-emerald-400/30 flex items-center justify-center mx-auto mb-6 text-[#34D399]">
            <ShieldAlert size={32} />
          </div>

          <span className="text-xs font-mono text-[#34D399] uppercase tracking-widest block mb-2">
            REGISTRAR ERROR &bull; 404
          </span>

          <h1 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
            Unregistered Protocol Route
          </h1>

          <p className="text-gray-300 font-sans text-sm font-light leading-relaxed mb-8">
            The requested compliance resource, audit file, or registry page cannot be located on the official ARG Registrars server.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs tracking-wider border border-emerald-400/40 hover:shadow-[0_0_20px_rgba(0,135,62,0.5)] transition-all"
            >
              <Home size={15} />
              <span>RETURN HOME</span>
            </Link>

            <Link
              href="/audits"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass-panel text-gray-200 hover:text-white font-display font-semibold text-xs border border-white/10 hover:border-emerald-400/30 transition-all"
            >
              <FileSearch size={15} className="text-[#34D399]" />
              <span>AUDIT SCOPES</span>
            </Link>
          </div>

          <div className="pt-4 border-t border-white/[0.08] text-xs font-sans text-gray-400">
            Need direct assistance? <Link href="/contact" className="text-[#34D399] hover:underline font-medium">Contact Registrars Desk</Link>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
