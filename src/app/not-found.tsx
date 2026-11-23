"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowLeft, Home, FileSearch, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-4  relative overflow-hidden text-slate-800">
      
      {/* Background Ambience */}
      

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
          className="w-[700px] h-[700px] rounded-full border border-slate-200"
        />
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        <div
          className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl"
        >
          {/* Status Badge */}
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6 text-[#00873E]">
            <ShieldAlert size={32} />
          </div>

          <span className="text-xs font-mono text-[#00873E] font-bold uppercase tracking-widest block mb-2">
            REGISTRAR ERROR &bull; 404
          </span>

          <h1 className="text-3xl md:text-4xl font-display font-black text-slate-900 mb-4">
            Unregistered Protocol Route
          </h1>

          <p className="text-slate-600 font-sans text-sm font-light leading-relaxed mb-8">
            The requested compliance resource, audit file, or registry page cannot be located on the official ARG Registrars server.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00873E] hover:bg-[#007536] text-white font-medium text-xs shadow-xs active:scale-[0.98] transition-colors duration-150"
            >
              <Home size={15} />
              <span>Return to home</span>
            </Link>

            <Link
              href="/audits"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-medium text-xs border border-slate-200 active:scale-[0.98] transition-colors duration-150 shadow-xs"
            >
              <FileSearch size={15} className="text-[#00873E]" />
              <span>Explore audit scopes</span>
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 text-xs font-sans text-slate-500">
            Need direct assistance? <Link href="/contact" className="text-[#00873E] hover:underline font-semibold">Contact Registrars Desk</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
