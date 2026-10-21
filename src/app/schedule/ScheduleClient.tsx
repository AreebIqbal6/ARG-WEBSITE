"use client";

import React, { useActionState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CalendarCheck, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  ArrowRight, 
  Phone, 
  Clock, 
  FileCheck2, 
  AlertCircle,
  HelpCircle,
  ArrowLeft
} from 'lucide-react';
import { submitAuditSchedule, ScheduleState } from '../actions/scheduleActions';
import { STANDARDS_CATALOG } from '@/data/standards';

function ScheduleContent() {
  const searchParams = useSearchParams();
  const initialStandardParam = searchParams.get('standard') || 'iso-9001';

  // Find standard name or fallback
  const matchedStandard = STANDARDS_CATALOG.find(
    (s) => s.id === initialStandardParam || s.code.toLowerCase().includes(initialStandardParam.toLowerCase())
  );
  const defaultStandardCode = matchedStandard ? matchedStandard.code : "ISO 9001:2026";

  const [state, formAction, isPending] = useActionState<ScheduleState | null, FormData>(
    submitAuditSchedule, 
    null
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-slate-800 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 right-0 h-[650px] z-0 bg-[url('/images/lead_auditor_desk.jpg')] bg-cover bg-center opacity-[0.32] contrast-105 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[650px] z-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/60 to-transparent pointer-events-none" />

      <section className="relative z-10 pt-44 md:pt-48 pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mb-6 text-[11px] sm:text-xs font-sans font-semibold tracking-wider uppercase border-b border-slate-200 pb-2 max-w-full">
              <span className="text-[#00873E] font-bold">STAGE 1 INTAKE APPLICATION</span>
              <span className="hidden sm:inline text-slate-400">&bull;</span>
              <span className="text-slate-500">ACCREDITED REGISTRAR DESK</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight tracking-tight mb-4">
              Schedule An <br />
              <span className="text-[#00873E]">
                Accredited Audit
              </span>
            </h1>
            <p className="text-slate-600 font-sans text-base sm:text-lg font-light leading-relaxed">
              Submit your organization details, facility structure, and target certification standard. Our lead auditors dispatch a preliminary Stage 1 gap analysis within 48 business hours.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-10 max-w-6xl mx-auto">
            
            {/* Left Column: What to Expect / Protocol */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00873E] uppercase tracking-wider mb-3">
                    <ShieldCheck size={14} />
                    <span>Registrar Commitment</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-4">
                    Stage 1 Audit Intake Guarantees
                  </h3>
                  <ul className="space-y-4 text-xs sm:text-sm text-slate-600 font-sans font-light">
                    <li className="flex items-start gap-3">
                      <Clock size={16} className="text-[#00873E] shrink-0 mt-0.5" />
                      <span><strong>48-Hour Turnaround:</strong> Application reviewed by our technical committee in Riyadh or Faisalabad within 48 hours.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileCheck2 size={16} className="text-[#00873E] shrink-0 mt-0.5" />
                      <span><strong>IAF MD5 Person-Days:</strong> Accurate, transparent auditor day allocation with zero hidden travel surcharges.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#00873E] shrink-0 mt-0.5" />
                      <span><strong>Full Confidentiality:</strong> Strict Non-Disclosure Agreement (NDA) binding all lead auditors and administrative desks.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3">
                  <div className="text-xs font-sans text-slate-500 font-semibold">Immediate Hotline Assistance:</div>
                  <div className="flex flex-col gap-1.5 text-xs font-sans">
                    <a href="tel:+966558004287" className="text-slate-800 hover:text-[#00873E] font-medium flex items-center gap-2">
                      <Phone size={12} className="text-[#00873E]" />
                      <span>Riyadh Desk: +966 55 8004287</span>
                    </a>
                    <a href="tel:+9231459101614" className="text-slate-800 hover:text-[#00873E] font-medium flex items-center gap-2">
                      <Phone size={12} className="text-[#00873E]" />
                      <span>Pakistan Desk: +92 314 59101614</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Browse Scopes Card */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                <div className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Unsure of your requirements?
                </div>
                <p className="text-xs text-slate-600 font-sans mb-4 font-light">
                  Inspect our 14 official accredited standards or compare audit checklists before submitting.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#00873E] hover:underline"
                >
                  <span>Explore Standard Criteria</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

            </div>

            {/* Right Column: Interactive Intake Application */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md">
                
                {state?.success ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 rounded-3xl bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto mb-6 text-[#00873E] shadow-sm">
                      <CheckCircle2 size={40} />
                    </div>
                    <span className="inline-block text-xs font-mono text-[#00873E] font-bold uppercase tracking-widest mb-2 bg-emerald-50 px-3.5 py-1 rounded-md border border-emerald-200">
                      Application Logged &bull; Ref: {state.applicationRef}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-3">
                      Audit Application Received
                    </h3>
                    <p className="text-slate-600 font-sans text-sm max-w-lg mx-auto font-light leading-relaxed mb-6">
                      Thank you. Your Stage 1 audit intake application for <strong>{state.standard}</strong> from <strong>{state.companyName}</strong> has been assigned to our lead registrar desk. A technical lead auditor will follow up within 48 business hours with your preliminary gap assessment.
                    </p>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto mb-8 text-xs font-sans text-slate-600 text-left space-y-1.5">
                      <div><strong>Application Reference:</strong> {state.applicationRef}</div>
                      <div><strong>Target Standard:</strong> {state.standard}</div>
                      <div><strong>Support Contact:</strong> records@argregistrars.com</div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-xs tracking-wider transition-all"
                      >
                        <ArrowLeft size={14} />
                        <span>RETURN TO HOME</span>
                      </Link>
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-sans font-semibold text-xs tracking-wider transition-all"
                      >
                        <span>EXPLORE OTHER SCOPES</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form action={formAction} className="space-y-6">
                    
                    {state?.error && (
                      <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-sans flex items-start gap-3">
                        <AlertCircle size={18} className="shrink-0 mt-0.5 text-rose-600" />
                        <span>{state.error}</span>
                      </div>
                    )}

                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-900 mb-1">
                        Organization &amp; Standard Scope
                      </h3>
                      <p className="text-slate-500 font-sans text-xs font-light">
                        Please provide accurate facility parameters so we can calculate auditor person-days accurately.
                      </p>
                    </div>

                    {/* Standard Selection & Hub */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="standard" className="block text-xs font-sans font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Certification Standard *
                        </label>
                        <select
                          id="standard"
                          name="standard"
                          defaultValue={defaultStandardCode}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-sans text-xs sm:text-sm focus:border-emerald-500 focus:outline-none transition-all shadow-xs"
                          required
                        >
                          {STANDARDS_CATALOG.map((s) => (
                            <option key={s.id} value={s.code}>
                              {s.code} – {s.name}
                            </option>
                          ))}
                          <option value="Multi-Standard Integrated Audit">Multi-Standard Integrated Audit (ISO 9001 + 14001 + 45001)</option>
                          <option value="Custom Buyer Technical Protocol">Custom Retailer / Buyer Technical Protocol</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="operationalHub" className="block text-xs font-sans font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Preferred Deployment Hub *
                        </label>
                        <select
                          id="operationalHub"
                          name="operationalHub"
                          defaultValue="Pakistan Operations"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-sans text-xs sm:text-sm focus:border-emerald-500 focus:outline-none transition-all shadow-xs"
                          required
                        >
                          <option value="Pakistan Operations (Faisalabad / Lahore / Karachi)">Pakistan Operations (Faisalabad / Lahore / Karachi)</option>
                          <option value="Saudi Arabia Operations (Riyadh / Eastern Province / Jeddah)">Saudi Arabia Operations (Riyadh / Eastern Province / Jeddah)</option>
                          <option value="GCC & MENA Regional Facility">GCC &amp; MENA Regional Facility</option>
                          <option value="Global Export / Cross-Border Facility">Global Export / Cross-Border Facility</option>
                        </select>
                      </div>
                    </div>

                    {/* Company Name & Representative */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="companyName" className="block text-xs font-sans font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Company / Organization Name *
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          placeholder="e.g. Crescent Industrial Corporation"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-sans text-xs sm:text-sm focus:border-emerald-500 focus:outline-none transition-all shadow-xs"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="contactName" className="block text-xs font-sans font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Authorized Representative *
                        </label>
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          placeholder="e.g. Tariq Mahmood, Quality Director"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-sans text-xs sm:text-sm focus:border-emerald-500 focus:outline-none transition-all shadow-xs"
                          required
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-xs font-sans font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Corporate Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="compliance@yourcompany.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-sans text-xs sm:text-sm focus:border-emerald-500 focus:outline-none transition-all shadow-xs"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-sans font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Direct Telephone / Mobile *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+92 300 1234567 or +966 50 1234567"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-sans text-xs sm:text-sm focus:border-emerald-500 focus:outline-none transition-all shadow-xs"
                          required
                        />
                      </div>
                    </div>

                    {/* Facility Structure & Workforce Scope */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <label htmlFor="siteStructure" className="block text-xs font-sans font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Site Structure
                        </label>
                        <select
                          id="siteStructure"
                          name="siteStructure"
                          defaultValue="Single Manufacturing Site"
                          className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-sans text-xs focus:border-emerald-500 focus:outline-none transition-all shadow-xs"
                        >
                          <option value="Single Manufacturing Site">Single Site</option>
                          <option value="Multi-Site (2-5 Locations)">Multi-Site (2-5 Locations)</option>
                          <option value="Corporate HQ + Factories">Corporate HQ + Factories</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="workforceSize" className="block text-xs font-sans font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Workforce Count
                        </label>
                        <select
                          id="workforceSize"
                          name="workforceSize"
                          defaultValue="50-150 personnel"
                          className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-sans text-xs focus:border-emerald-500 focus:outline-none transition-all shadow-xs"
                        >
                          <option value="1-25 personnel">1 - 25 personnel</option>
                          <option value="26-50 personnel">26 - 50 personnel</option>
                          <option value="50-150 personnel">50 - 150 personnel</option>
                          <option value="151-500 personnel">151 - 500 personnel</option>
                          <option value="500+ personnel">500+ personnel</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="targetTimeline" className="block text-xs font-sans font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Desired Timeline
                        </label>
                        <select
                          id="targetTimeline"
                          name="targetTimeline"
                          defaultValue="Within 30 Days"
                          className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-sans text-xs focus:border-emerald-500 focus:outline-none transition-all shadow-xs"
                        >
                          <option value="Immediate (Within 10 Days)">Immediate (&lt; 10 Days)</option>
                          <option value="Within 30 Days">Within 30 Days</option>
                          <option value="Within 60-90 Days">Within 60 - 90 Days</option>
                          <option value="Surveillance / Transfer">Transfer from other CB</option>
                        </select>
                      </div>
                    </div>

                    {/* Scope Notes */}
                    <div>
                      <label htmlFor="notes" className="block text-xs font-sans font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Operational Scope &amp; Special Considerations (Optional)
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        placeholder="Detail any existing certifications, specific buyer audit deadlines (e.g. Walmart, Target, Inditex), or scope specifics..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-sans text-xs sm:text-sm focus:border-emerald-500 focus:outline-none transition-all shadow-xs"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] hover:from-[#007536] hover:to-[#047857] text-white font-display font-bold text-xs tracking-wider shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 cursor-pointer"
                    >
                      {isPending ? (
                        <span>PROCESSING AUDIT INTAKE...</span>
                      ) : (
                        <>
                          <CalendarCheck size={16} />
                          <span>SUBMIT STAGE 1 AUDIT APPLICATION</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] font-sans text-slate-500 pt-2">
                      <ShieldCheck size={14} className="text-[#00873E]" />
                      <span>Formal confirmation and preliminary gap review issued within 48 business hours.</span>
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

export default function ScheduleClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">Loading audit application...</div>}>
      <ScheduleContent />
    </Suspense>
  );
}
