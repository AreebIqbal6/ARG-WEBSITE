"use client";

import React, { useState, useEffect, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Unlock, 
  Mail, 
  Building2, 
  Calendar, 
  Download, 
  RefreshCw, 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ExternalLink,
  Filter,
  Check,
  ChevronRight,
  Database,
  Inbox
} from 'lucide-react';
import { getAdminInquiries, setInquiryStatus } from '@/app/actions/inquiryActions';
import { InquiryRecord } from '@/lib/supabase';
import Link from 'next/link';

export default function InquiriesClient() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [isLiveDb, setIsLiveDb] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'in_review' | 'contacted' | 'closed'>('all');
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryRecord | null>(null);
  const [isPending, startTransition] = useTransition();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Check saved session passcode
  useEffect(() => {
    const saved = sessionStorage.getItem('arg_admin_passcode');
    if (saved) {
      setPasscode(saved);
      loadInquiries(saved);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const loadInquiries = (code: string) => {
    startTransition(async () => {
      setAuthError('');
      const res = await getAdminInquiries(code);
      if (res.success && res.inquiries) {
        setIsAuthenticated(true);
        sessionStorage.setItem('arg_admin_passcode', code);
        setInquiries(res.inquiries);
        setIsLiveDb(Boolean(res.isLiveDb));
        if (res.inquiries.length > 0 && !selectedInquiry) {
          setSelectedInquiry(res.inquiries[0]);
        }
      } else {
        setAuthError(res.error || 'Authentication failed. Please verify your registrar passcode.');
      }
    });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setAuthError('Please enter the administrative passcode.');
      return;
    }
    loadInquiries(passcode.trim());
  };

  const handleLogout = () => {
    sessionStorage.removeItem('arg_admin_passcode');
    setIsAuthenticated(false);
    setPasscode('');
    setInquiries([]);
  };

  const handleStatusUpdate = (id: string, newStatus: InquiryRecord['status']) => {
    startTransition(async () => {
      const res = await setInquiryStatus(passcode, id, newStatus);
      if (res.success) {
        setInquiries(prev =>
          prev.map(item => (item.id === id ? { ...item, status: newStatus } : item))
        );
        if (selectedInquiry?.id === id) {
          setSelectedInquiry(prev => (prev ? { ...prev, status: newStatus } : null));
        }
        showToast(`Inquiry status updated to ${newStatus.toUpperCase()}`);
      } else {
        showToast(`Failed to update status: ${res.error || 'Unknown error'}`);
      }
    });
  };

  // CSV Export
  const exportCsv = () => {
    if (inquiries.length === 0) return;
    const headers = ['ID', 'Date', 'First Name', 'Last Name', 'Company', 'Email', 'Status', 'Message'];
    const rows = inquiries.map(item => [
      item.id,
      new Date(item.created_at).toLocaleString(),
      `"${item.first_name.replace(/"/g, '""')}"`,
      `"${item.last_name.replace(/"/g, '""')}"`,
      `"${(item.company || '').replace(/"/g, '""')}"`,
      `"${item.email.replace(/"/g, '""')}"`,
      item.status,
      `"${item.message.replace(/"/g, '""')}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `arg_inquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Exported inquiries CSV successfully.');
  };

  // Filtered inquiries
  const filtered = inquiries.filter(item => {
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !query ||
      item.first_name.toLowerCase().includes(query) ||
      item.last_name.toLowerCase().includes(query) ||
      (item.company && item.company.toLowerCase().includes(query)) ||
      item.email.toLowerCase().includes(query) ||
      item.message.toLowerCase().includes(query);
    return matchesStatus && matchesSearch;
  });

  const countNew = inquiries.filter(i => i.status === 'new').length;
  const countInReview = inquiries.filter(i => i.status === 'in_review').length;
  const countContacted = inquiries.filter(i => i.status === 'contacted' || i.status === 'closed').length;

  // Status badge styling helper
  const getStatusBadge = (status: InquiryRecord['status']) => {
    switch (status) {
      case 'new':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase bg-emerald-500/20 text-[#34D399] border border-emerald-500/30">
            <span className="w-1.5 h-1.5 bg-[#34D399]" />
            NEW INTAKE
          </span>
        );
      case 'in_review':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Clock size={12} />
            IN REVIEW
          </span>
        );
      case 'contacted':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase bg-blue-500/20 text-blue-300 border border-blue-500/30">
            <CheckCircle2 size={12} />
            CONTACTED
          </span>
        );
      case 'closed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase bg-gray-500/20 text-gray-400 border border-gray-500/30">
            CLOSED
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#030906] architect-grid text-white pt-28 pb-20 px-4 md:px-8 relative selection:bg-[#00873E] selection:text-white">
      {/* Aurora Ambient */}
      <div className="emerald-aurora top-10 right-20 w-[600px] h-[400px] bg-[#00873E]/10 pointer-events-none" />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-8 z-50 px-4 py-3 rounded-xl bg-[#06150D] border border-emerald-400/40 text-[#34D399] text-xs font-mono shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-2"
          >
            <CheckCircle2 size={16} />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        
        {/* Passcode Lock View */}
        {!isAuthenticated ? (
          <div className="min-h-[60vh] flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md w-full glass-card p-8 md:p-10 rounded-3xl border border-white/10 text-center relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#00873E]/20 border border-emerald-500/30 text-[#34D399] flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,135,62,0.3)]">
                <Lock size={28} />
              </div>

              <div className="text-xs font-mono text-[#34D399] uppercase tracking-widest mb-2">
                SEC. 06 // REGISTRAR INTAKE SYSTEM
              </div>
              <h1 className="text-2xl md:text-3xl font-display font-black text-white mb-3">
                Inquiries &amp; Form Replies
              </h1>
              <p className="text-gray-300 font-sans text-xs mb-8 leading-relaxed font-light">
                Secure administrative console for reviewing incoming facility certification scopes and audit quotes.
              </p>

              <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
                <div>
                  <label className="text-[11px] font-mono tracking-wider uppercase text-gray-400 block mb-2">
                    Enter Registrar Passcode
                  </label>
                  <input
                    type="password"
                    value={passcode}
                    onChange={e => setPasscode(e.target.value)}
                    placeholder="Enter admin passcode"
                    className="w-full bg-white/[0.04] border border-white/10 focus:border-[#34D399] text-white px-4 py-3 rounded-xl outline-none transition-colors font-mono text-sm"
                    autoFocus
                  />
                  <div className="text-[10px] font-mono text-gray-400 mt-1.5 flex justify-between">
                    <span>Default: <code className="text-[#34D399]">arg2026</code></span>
                    <span>Configured in .env</span>
                  </div>
                </div>

                {authError && (
                  <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-sans flex items-center gap-2">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{authError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs tracking-wider border border-emerald-400/40 hover:shadow-[0_0_20px_rgba(0,135,62,0.5)] transition-all cursor-pointer disabled:opacity-50"
                >
                  <Unlock size={14} />
                  <span>{isPending ? 'AUTHENTICATING...' : 'AUTHENTICATE ACCESS'}</span>
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <Link href="/" className="text-xs font-sans text-gray-400 hover:text-white transition-colors">
                  &larr; Return to Public Website
                </Link>
              </div>
            </motion.div>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div>
            {/* Top Bar Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-[#34D399] mb-1">
                  <span className="w-1.5 h-1.5 bg-[#34D399]" />
                  <span>ARG REGISTRARS &bull; ADMINISTRATIVE INTAKE DESK</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-display font-black text-white">
                  Audit Inquiries &amp; Form Replies
                </h1>
              </div>

              <div className="flex items-center flex-wrap gap-3">
                {/* Database Connectivity Badge */}
                <div 
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono border ${
                    isLiveDb 
                      ? 'bg-emerald-950/50 border-emerald-500/40 text-[#34D399]' 
                      : 'bg-amber-950/40 border-amber-500/40 text-amber-300'
                  }`}
                  title={isLiveDb ? 'Connected to live Supabase Postgres database' : 'Operating in local memory. Configure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to store persistently.'}
                >
                  <Database size={13} />
                  <span>{isLiveDb ? 'SUPABASE CONNECTED' : 'LOCAL FALLBACK STORE'}</span>
                </div>

                <button
                  onClick={() => loadInquiries(passcode)}
                  disabled={isPending}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white text-xs font-mono border border-white/10 transition-all cursor-pointer"
                  title="Refresh records"
                >
                  <RefreshCw size={13} className={isPending ? 'animate-spin' : ''} />
                  <span>REFRESH</span>
                </button>

                <button
                  onClick={exportCsv}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#00873E]/20 hover:bg-[#00873E]/40 text-[#34D399] text-xs font-mono border border-emerald-500/30 transition-all cursor-pointer"
                  title="Download all inquiries as CSV file"
                >
                  <Download size={13} />
                  <span>EXPORT CSV</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-950/30 hover:bg-red-900/40 text-red-300 text-xs font-mono border border-red-500/30 transition-all cursor-pointer"
                >
                  <Lock size={12} />
                  <span>LOCK</span>
                </button>
              </div>
            </div>

            {/* Supabase Connection Notice Banner if not configured yet */}
            {!isLiveDb && (
              <div className="mb-8 p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs font-sans flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <AlertCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-white">Supabase Credentials Not Yet Detected:</strong> Form submissions are being safely received in memory for immediate testing. To store submissions permanently in your own Supabase project:
                    <div className="mt-1 font-mono text-[11px] text-amber-300">
                      1. Run schema in <code className="bg-black/40 px-1 py-0.5 rounded">supabase/schema.sql</code> &bull; 2. Add <code className="bg-black/40 px-1 py-0.5 rounded">NEXT_PUBLIC_SUPABASE_URL</code> &amp; <code className="bg-black/40 px-1 py-0.5 rounded">SUPABASE_SERVICE_ROLE_KEY</code> to your environment.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Metrics KPI Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <div className="text-gray-400 font-mono text-[11px] uppercase mb-1">Total Submissions</div>
                <div className="text-3xl font-display font-black text-white">{inquiries.length}</div>
              </div>
              <div className="glass-card p-5 rounded-2xl border border-emerald-500/20 bg-emerald-950/10">
                <div className="text-[#34D399] font-mono text-[11px] uppercase mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#34D399]" />
                  New (Awaiting Reply)
                </div>
                <div className="text-3xl font-display font-black text-[#34D399]">{countNew}</div>
              </div>
              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <div className="text-amber-300 font-mono text-[11px] uppercase mb-1 flex items-center gap-1.5">
                  <Clock size={12} />
                  Under Review
                </div>
                <div className="text-3xl font-display font-black text-amber-300">{countInReview}</div>
              </div>
              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <div className="text-blue-300 font-mono text-[11px] uppercase mb-1 flex items-center gap-1.5">
                  <CheckCircle2 size={12} />
                  Contacted / Closed
                </div>
                <div className="text-3xl font-display font-black text-blue-300">{countContacted}</div>
              </div>
            </div>

            {/* Search & Filters */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Filter by applicant, company, email, or scope..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#34D399] text-white text-xs font-sans outline-none"
                />
              </div>

              {/* Status Filter Tabs */}
              <div className="flex items-center gap-1 p-1 bg-white/[0.03] border border-white/10 rounded-xl overflow-x-auto">
                {(['all', 'new', 'in_review', 'contacted', 'closed'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setStatusFilter(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                      statusFilter === tab
                        ? 'bg-[#00873E] text-white font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Split Screen Master-Detail Layout */}
            {filtered.length === 0 ? (
              <div className="glass-card rounded-3xl p-16 text-center border border-white/10">
                <Inbox size={40} className="text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold text-white mb-2">No Inquiries Found</h3>
                <p className="text-gray-400 text-xs max-w-md mx-auto font-sans">
                  {searchQuery || statusFilter !== 'all'
                    ? 'No inquiry matches the active search query or status filter.'
                    : 'Submissions from the public contact desk (/contact) will automatically populate here.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* List Column */}
                <div className="lg:col-span-5 space-y-3">
                  {filtered.map(item => {
                    const isSelected = selectedInquiry?.id === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedInquiry(item)}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer text-left relative ${
                          isSelected
                            ? 'bg-[#06150D] border-emerald-400/50 shadow-[0_0_20px_rgba(0,135,62,0.3)]'
                            : 'glass-card border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="font-display font-bold text-white text-sm">
                            {item.first_name} {item.last_name}
                          </div>
                          {getStatusBadge(item.status)}
                        </div>

                        {item.company && (
                          <div className="text-xs font-sans text-gray-300 flex items-center gap-1.5 mb-1.5">
                            <Building2 size={13} className="text-[#34D399] shrink-0" />
                            <span className="truncate">{item.company}</span>
                          </div>
                        )}

                        <p className="text-gray-400 text-xs font-sans line-clamp-2 mb-3 font-light">
                          {item.message}
                        </p>

                        <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 pt-2 border-t border-white/[0.06]">
                          <span>{new Date(item.created_at).toLocaleDateString()} &bull; {new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          <span className="text-[#34D399] flex items-center gap-1">
                            VIEW DETAILS &rarr;
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Detail View Column */}
                <div className="lg:col-span-7 sticky top-28">
                  {selectedInquiry ? (
                    <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 text-left space-y-6">
                      
                      {/* Detail Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
                        <div>
                          <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                            Inquiry Ref: <strong className="text-white">{selectedInquiry.id}</strong>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-display font-black text-white">
                            {selectedInquiry.first_name} {selectedInquiry.last_name}
                          </h2>
                          {selectedInquiry.company && (
                            <div className="text-[#34D399] font-sans text-sm font-medium mt-0.5">
                              {selectedInquiry.company}
                            </div>
                          )}
                        </div>
                        <div>
                          {getStatusBadge(selectedInquiry.status)}
                        </div>
                      </div>

                      {/* Contact & Meta Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                          <span className="text-gray-400 text-[10px] font-mono uppercase block">Direct Email</span>
                          <a
                            href={`mailto:${selectedInquiry.email}?subject=ARG%20Registrars%20Audit%20Inquiry%20Response`}
                            className="text-[#34D399] font-medium hover:underline flex items-center gap-1.5 truncate"
                          >
                            <Mail size={13} className="shrink-0" />
                            <span className="truncate">{selectedInquiry.email}</span>
                          </a>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                          <span className="text-gray-400 text-[10px] font-mono uppercase block">Logged Timestamp</span>
                          <div className="text-white flex items-center gap-1.5 font-mono text-[11px]">
                            <Calendar size={13} className="text-[#34D399] shrink-0" />
                            <span>{new Date(selectedInquiry.created_at).toUTCString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Full Scope Message Block */}
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                          Certification Scope / Inquiry Specification
                        </div>
                        <div className="p-5 rounded-2xl bg-black/40 border border-white/10 text-gray-200 text-sm font-sans whitespace-pre-wrap leading-relaxed font-light">
                          {selectedInquiry.message}
                        </div>
                      </div>

                      {/* Status Management Bar */}
                      <div className="pt-4 border-t border-white/10">
                        <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                          Registrar Workflow Status Actions
                        </div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <button
                            onClick={() => handleStatusUpdate(selectedInquiry.id, 'new')}
                            className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase transition-all cursor-pointer ${
                              selectedInquiry.status === 'new'
                                ? 'bg-[#00873E] text-white font-bold'
                                : 'bg-white/[0.05] text-gray-300 hover:text-white border border-white/10'
                            }`}
                          >
                            Mark New
                          </button>
                          <button
                            onClick={() => handleStatusUpdate(selectedInquiry.id, 'in_review')}
                            className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase transition-all cursor-pointer ${
                              selectedInquiry.status === 'in_review'
                                ? 'bg-amber-600 text-white font-bold'
                                : 'bg-white/[0.05] text-gray-300 hover:text-white border border-white/10'
                            }`}
                          >
                            Mark In Review
                          </button>
                          <button
                            onClick={() => handleStatusUpdate(selectedInquiry.id, 'contacted')}
                            className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase transition-all cursor-pointer ${
                              selectedInquiry.status === 'contacted'
                                ? 'bg-blue-600 text-white font-bold'
                                : 'bg-white/[0.05] text-gray-300 hover:text-white border border-white/10'
                            }`}
                          >
                            Mark Contacted
                          </button>
                          <button
                            onClick={() => handleStatusUpdate(selectedInquiry.id, 'closed')}
                            className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase transition-all cursor-pointer ${
                              selectedInquiry.status === 'closed'
                                ? 'bg-gray-600 text-white font-bold'
                                : 'bg-white/[0.05] text-gray-300 hover:text-white border border-white/10'
                            }`}
                          >
                            Close Inquiry
                          </button>
                        </div>
                      </div>

                      {/* Direct Reply Action */}
                      <div className="pt-4">
                        <a
                          href={`mailto:${selectedInquiry.email}?subject=ARG%20Registrars%20Audit%20Inquiry%20Response%20[%20Ref%20${selectedInquiry.id}%20]&body=Dear%20${encodeURIComponent(selectedInquiry.first_name)},%0D%0A%0D%0AThank%20you%20for%20contacting%20ARG%20Registrars%20regarding%20your%20certification%20and%20audit%20scope.%0D%0A%0D%0ARegards,%0D%0AARG%20Registrars%20Technical%20Audit%20Desk`}
                          className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-[#00873E] to-[#059669] text-white font-display font-bold text-xs tracking-wider border border-emerald-400/40 hover:shadow-[0_0_25px_rgba(0,135,62,0.6)] transition-all"
                        >
                          <Mail size={15} />
                          <span>REPLY VIA EMAIL TO {selectedInquiry.email.toUpperCase()}</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>

                    </div>
                  ) : null}
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
