"use client";
import React, { useActionState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { sendEmail } from '../actions/sendEmail';

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-slate-800  relative overflow-hidden">
      {/* Background Picture */}
      <div className="absolute top-0 left-0 right-0 h-[650px] z-0 bg-[url('/images/lead_auditor_desk.jpg')] bg-cover bg-center opacity-[0.38] contrast-105 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[650px] z-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/50 to-transparent pointer-events-none" />
      
      {/* Background Aurora */}
      

      <section className="relative z-10 pt-44 md:pt-48 pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mb-6 text-[11px] sm:text-xs font-sans font-semibold text-xs tracking-wider uppercase border-b border-slate-200 pb-2 text-center max-w-full">
              <span className="text-[#00873E] font-bold">REGISTRAR DESK &amp; OFFICES</span>
              <span className="hidden sm:inline text-slate-400">&bull;</span>
              <span className="text-slate-500">RIYADH &bull; FAISALABAD</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-tight tracking-tight mb-6">
              Connect With Our <br />
              <span className="text-[#00873E]">
                Lead Registrars
              </span>
            </h1>
            <p className="text-slate-600 font-sans text-lg font-light">
              Inquire about accredited ISO management certifications, C-TPAT audits, or schedule an on-site facility evaluation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-12 max-w-6xl mx-auto">
            
            {/* INFO PANEL */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              {/* Head Office */}
              <motion.div whileHover={{ y: -4 }} className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5 text-[#00873E]">
                  <MapPin size={20} />
                </div>
                <span className="text-[#00873E] text-xs font-sans font-bold uppercase tracking-wider block mb-1">Corporate Head Office</span>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Riyadh, KSA</h3>
                <p className="text-slate-600 font-sans text-xs leading-relaxed mb-4">
                  Riverwalk Hussain Ibn Ali Road, Tawaan, Riyadh KSA.
                </p>
                <div className="pt-3 border-t border-slate-100 text-xs font-sans">
                  <span className="text-slate-500">Phone: </span>
                  <a href="tel:+966558004287" className="text-slate-900 hover:text-[#00873E] font-semibold transition-colors">+966 55 8004287</a>
                </div>
              </motion.div>

              {/* Local Office */}
              <motion.div whileHover={{ y: -4 }} className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5 text-[#00873E]">
                  <MapPin size={20} />
                </div>
                <span className="text-[#00873E] text-xs font-sans font-bold uppercase tracking-wider block mb-1">Local Operations Office</span>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Faisalabad, Pakistan</h3>
                <p className="text-slate-600 font-sans text-xs leading-relaxed mb-4">
                  Plot No. 2118, Street No. 06, Johan Colony, Block E, Millat Road, Faisalabad.
                </p>
                <div className="pt-3 border-t border-slate-100 text-xs font-sans flex flex-col gap-2">
                  
                </div>
              </motion.div>

              {/* Email */}
              <motion.div whileHover={{ y: -4 }} className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5 text-[#00873E]">
                  <Mail size={20} />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Official Email</h3>
                <p className="text-slate-600 font-sans text-xs break-all leading-relaxed">
                  <a href="mailto:info@argregistrars.com" className="hover:text-[#00873E] transition-colors block font-semibold text-slate-900">
                    info@argregistrars.com
                  </a>
                  <a href="mailto:contact@argregistrars.com" className="hover:text-[#00873E] transition-colors block text-slate-500 mt-1">
                    contact@argregistrars.com
                  </a>
                </p>
              </motion.div>
            </div>

            {/* FORM PANEL */}
            <div className="lg:w-2/3 flex flex-col">
              <div className="bg-white p-10 md:p-14 rounded-3xl relative overflow-hidden flex-1 flex flex-col justify-between border border-slate-200/90 shadow-md">
                {state?.success ? (
                  <div className="flex flex-col items-center justify-center text-center py-10 h-full">
                    <div className="w-20 h-20 rounded-3xl bg-emerald-100 border border-emerald-300 flex items-center justify-center mb-6 text-[#00873E] shadow-md">
                      <CheckCircle2 size={40} />
                    </div>
                    <span className="text-xs font-mono text-[#00873E] font-bold uppercase tracking-wider mb-2 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                      OFFICIAL REGISTRAR RECEIPT
                    </span>
                    <h3 className="text-3xl md:text-4xl font-display font-black text-slate-900 mb-3">
                      Audit Inquiry Logged
                    </h3>
                    <p className="text-slate-600 font-sans text-sm max-w-md mx-auto font-light leading-relaxed mb-6">
                      Your facility compliance request has been registered in the ARG Registrars intake system. A senior certification officer will review your scope and provide preliminary guidance.
                    </p>

                    <div className="w-full max-w-sm rounded-2xl p-4 mb-6 border border-slate-200 text-left text-xs font-sans space-y-2 bg-slate-50">
                      <div className="flex justify-between text-slate-600">
                        <span>Status:</span>
                        <span className="text-[#00873E] font-semibold">Active Review (Queue 1)</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Response SLA:</span>
                        <span className="text-slate-900 font-medium">Within 4 Business Hours</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Regional Hubs:</span>
                        <span className="text-slate-900 font-medium">Riyadh &bull; Faisalabad</span>
                      </div>
                    </div>

                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-display font-bold text-xs tracking-wider border border-slate-200 transition-all shadow-sm"
                    >
                      <span>RETURN TO OVERVIEW</span>
                    </Link>
                  </div>
                ) : (
                  <form action={formAction} className="flex flex-col justify-between flex-1 gap-6 md:gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-sans font-bold tracking-widest text-slate-600 uppercase">First Name</label>
                        <input name="firstName" required type="text" className="bg-slate-50 border border-slate-200 focus:border-[#00873E] focus:bg-white text-slate-900 px-4 py-3.5 rounded-xl outline-none transition-all font-sans text-sm shadow-sm" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-sans font-bold tracking-widest text-slate-600 uppercase">Last Name</label>
                        <input name="lastName" required type="text" className="bg-slate-50 border border-slate-200 focus:border-[#00873E] focus:bg-white text-slate-900 px-4 py-3.5 rounded-xl outline-none transition-all font-sans text-sm shadow-sm" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-sans font-bold tracking-widest text-slate-600 uppercase">Company / Organization</label>
                        <input name="company" type="text" placeholder="Your Facility / Firm" className="bg-slate-50 border border-slate-200 focus:border-[#00873E] focus:bg-white text-slate-900 px-4 py-3.5 rounded-xl outline-none transition-all font-sans text-sm placeholder:text-slate-400 shadow-sm" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-sans font-bold tracking-widest text-slate-600 uppercase">Email Address</label>
                        <input name="email" required type="email" className="bg-slate-50 border border-slate-200 focus:border-[#00873E] focus:bg-white text-slate-900 px-4 py-3.5 rounded-xl outline-none transition-all font-sans text-sm shadow-sm" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-xs font-sans font-bold tracking-widest text-slate-600 uppercase">Certification Scope or Audit Message</label>
                      <textarea name="message" required placeholder="Specify standard(s): ISO 9001, ISO 14001, ISO 45001, C-TPAT, Technical Audit, etc." className="bg-slate-50 border border-slate-200 focus:border-[#00873E] focus:bg-white text-slate-900 px-4 py-3.5 rounded-xl outline-none transition-all font-sans text-sm resize-none flex-1 min-h-[140px] placeholder:text-slate-400 shadow-sm"></textarea>
                    </div>

                    {state?.error && (
                      <p className="text-red-500 text-xs font-sans">{state.error}</p>
                    )}

                    <div className="mt-2">
                      <button disabled={isPending} type="submit" className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#00873E] to-[#059669] text-white rounded-xl px-10 py-4 overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed font-display font-bold text-xs tracking-widest border border-emerald-600">
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
