"use client";
import React, { useActionState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { sendEmail } from '../actions/sendEmail';

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  return (
    <div className="flex flex-col min-h-screen bg-[#030906] architect-grid noise-overlay">
      
      {/* Background Aurora */}
      <div className="emerald-aurora top-20 right-10 w-[700px] h-[500px] bg-[#00873E]/15" />
      <div className="emerald-aurora bottom-20 left-10 w-[600px] h-[500px] bg-emerald-950/40" />

      <section className="relative z-10 pt-40 pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-[#34D399] font-sans font-bold text-xs uppercase tracking-wider mb-6">
              <ShieldCheck size={14} />
              <span>ARG REGISTRARS &bull; CONTACT &amp; OFFICES</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight tracking-tight mb-6">
              Connect With Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F59B] via-[#34D399] to-white italic">
                Lead Registrars
              </span>
            </h1>
            <p className="text-gray-300 font-sans text-lg font-light">
              Inquire about accredited ISO management certifications, C-TPAT audits, or schedule an on-site facility evaluation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-12 max-w-6xl mx-auto">
            
            {/* INFO PANEL */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              {/* Head Office */}
              <motion.div whileHover={{ y: -4 }} className="glass-card p-8 rounded-3xl border border-white/[0.08]">
                <div className="w-12 h-12 rounded-2xl glass-panel border border-emerald-500/30 flex items-center justify-center mb-5">
                  <MapPin className="text-[#34D399]" size={20} />
                </div>
                <span className="text-[#34D399] text-xs font-sans font-bold uppercase tracking-wider block mb-1">Corporate Head Office</span>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Riyadh, KSA</h3>
                <p className="text-gray-300 font-sans text-xs leading-relaxed mb-4">
                  Riverwalk Hussain Ibn Ali Road, Tawaan, Riyadh KSA.
                </p>
                <div className="pt-3 border-t border-white/[0.08] text-xs font-sans">
                  <span className="text-gray-400">Phone: </span>
                  <a href="tel:+966558004287" className="text-white hover:text-[#34D399] font-semibold transition-colors">+966 55 8004287</a>
                </div>
              </motion.div>

              {/* Local Office */}
              <motion.div whileHover={{ y: -4 }} className="glass-card p-8 rounded-3xl border border-white/[0.08]">
                <div className="w-12 h-12 rounded-2xl glass-panel border border-emerald-500/30 flex items-center justify-center mb-5">
                  <MapPin className="text-[#34D399]" size={20} />
                </div>
                <span className="text-[#34D399] text-xs font-sans font-bold uppercase tracking-wider block mb-1">Local Operations Office</span>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Faisalabad, Pakistan</h3>
                <p className="text-gray-300 font-sans text-xs leading-relaxed mb-4">
                  Plot No. 2118, Street No. 06, Johan Colony, Block E, Millat Road, Faisalabad.
                </p>
                <div className="pt-3 border-t border-white/[0.08] text-xs font-sans flex flex-col gap-2">
                  <div>
                    <span className="text-gray-400">Phone: </span>
                    <a href="tel:+9231459101614" className="text-white hover:text-[#34D399] font-semibold transition-colors">+92 314 59101614</a>
                  </div>
                  <div>
                    <a href="https://wa.me/9231459101614" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline flex items-center gap-1.5 font-semibold">
                      <MessageCircle size={14} />
                      WhatsApp: +92 314 59101614
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div whileHover={{ y: -4 }} className="glass-card p-8 rounded-3xl border border-white/[0.08]">
                <div className="w-12 h-12 rounded-2xl glass-panel border border-emerald-500/30 flex items-center justify-center mb-5">
                  <Mail className="text-[#34D399]" size={20} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Official Email</h3>
                <p className="text-gray-300 font-sans text-xs break-all leading-relaxed">
                  <a href="mailto:info@argregistrars.com" className="hover:text-[#34D399] transition-colors block font-semibold text-white">
                    info@argregistrars.com
                  </a>
                  <a href="mailto:contact@argregistrars.com" className="hover:text-[#34D399] transition-colors block text-gray-400 mt-1">
                    contact@argregistrars.com
                  </a>
                </p>
              </motion.div>
            </div>

            {/* FORM PANEL */}
            <div className="lg:w-2/3 flex flex-col">
              <div className="glass-panel p-10 md:p-14 rounded-3xl relative overflow-hidden flex-1 flex flex-col justify-between border border-white/[0.08] shadow-2xl">
                {state?.success ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 h-full">
                    <CheckCircle2 className="text-[#34D399] w-20 h-20 mb-6" />
                    <h3 className="text-3xl font-display font-bold text-white mb-4">Inquiry Received!</h3>
                    <p className="text-gray-300 font-sans text-sm">Thank you for reaching out to ARG Registrars Pakistan. Our compliance team will review your scope and respond shortly.</p>
                  </div>
                ) : (
                  <form action={formAction} className="flex flex-col justify-between flex-1 gap-6 md:gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-sans font-bold tracking-widest text-gray-400 uppercase">First Name</label>
                        <input name="firstName" required type="text" className="bg-white/[0.03] border-b-2 border-white/10 focus:border-[#34D399] text-white px-4 py-3 rounded-t-lg outline-none transition-colors font-sans text-sm" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-sans font-bold tracking-widest text-gray-400 uppercase">Last Name</label>
                        <input name="lastName" required type="text" className="bg-white/[0.03] border-b-2 border-white/10 focus:border-[#34D399] text-white px-4 py-3 rounded-t-lg outline-none transition-colors font-sans text-sm" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-sans font-bold tracking-widest text-gray-400 uppercase">Company / Organization</label>
                        <input name="company" type="text" placeholder="Your Facility / Firm" className="bg-white/[0.03] border-b-2 border-white/10 focus:border-[#34D399] text-white px-4 py-3 rounded-t-lg outline-none transition-colors font-sans text-sm placeholder:text-gray-600" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-sans font-bold tracking-widest text-gray-400 uppercase">Email Address</label>
                        <input name="email" required type="email" className="bg-white/[0.03] border-b-2 border-white/10 focus:border-[#34D399] text-white px-4 py-3 rounded-t-lg outline-none transition-colors font-sans text-sm" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-xs font-sans font-bold tracking-widest text-gray-400 uppercase">Certification Scope or Audit Message</label>
                      <textarea name="message" required placeholder="Specify standard(s): ISO 9001, ISO 14001, ISO 45001, C-TPAT, Technical Audit, etc." className="bg-white/[0.03] border-b-2 border-white/10 focus:border-[#34D399] text-white px-4 py-3 rounded-t-lg outline-none transition-colors font-sans text-sm resize-none flex-1 min-h-[140px] placeholder:text-gray-600"></textarea>
                    </div>

                    {state?.error && (
                      <p className="text-red-400 text-xs font-sans">{state.error}</p>
                    )}

                    <div className="mt-2">
                      <button disabled={isPending} type="submit" className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#00873E] to-[#059669] text-white rounded-full px-10 py-5 overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,135,62,0.5)] w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed font-display font-bold text-xs tracking-widest border border-emerald-400/40">
                        <span>{isPending ? 'TRANSMITTING...' : 'SUBMIT AUDIT REQUEST'}</span>
                        {!isPending && <ArrowUpRight size={15} />}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
