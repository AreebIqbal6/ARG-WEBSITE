"use server";

import { Resend } from 'resend';
import { saveInquiry } from '@/lib/supabase';
import { checkInquiryRateLimit } from '@/lib/rateLimit';

const resendApiKey = process.env.RESEND_API_KEY;
const notificationEmail = process.env.NOTIFICATION_EMAIL || 'info@argregistrars.com';
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export interface ScheduleState {
  success?: boolean;
  error?: string;
  applicationRef?: string;
  companyName?: string;
  standard?: string;
}

export async function submitAuditSchedule(prevState: ScheduleState | null, formData: FormData): Promise<ScheduleState> {
  try {
    // Rate limit per IP (5 submissions per 10 mins)
    const rateLimit = await checkInquiryRateLimit();
    if (!rateLimit.success) {
      return { error: rateLimit.error || 'Submission limit reached. Please wait before submitting again.' };
    }

    const companyName = (formData.get('companyName') as string)?.trim() || '';
    const contactName = (formData.get('contactName') as string)?.trim() || '';
    const email = (formData.get('email') as string)?.trim() || '';
    const phone = (formData.get('phone') as string)?.trim() || '';
    const operationalHub = (formData.get('operationalHub') as string)?.trim() || 'Pakistan Operations';
    const standard = (formData.get('standard') as string)?.trim() || 'ISO 9001:2026';
    const siteStructure = (formData.get('siteStructure') as string)?.trim() || 'Single Manufacturing Site';
    const workforceSize = (formData.get('workforceSize') as string)?.trim() || '50-150 personnel';
    const targetTimeline = (formData.get('targetTimeline') as string)?.trim() || 'Within 30 Days';
    const notes = (formData.get('notes') as string)?.trim() || '';

    if (!companyName || !contactName || !email || !phone) {
      return { error: 'Please provide company name, contact person, email, and direct telephone.' };
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { error: 'Please enter a valid corporate email address.' };
    }

    // Generate unique Application Reference
    const applicationRef = `ARG-${Math.floor(100000 + Math.random() * 900000)}`;

    const formattedMessage = `
[STAGE 1 AUDIT INTAKE APPLICATION]
Application Ref: ${applicationRef}
Standard Requested: ${standard}
Company: ${companyName}
Contact Person: ${contactName}
Direct Phone: ${phone}
Hub / Location: ${operationalHub}
Facility Structure: ${siteStructure}
Workforce Scope: ${workforceSize}
Desired Timeline: ${targetTimeline}

Additional Scope Notes:
${notes || 'None provided'}
    `.trim();

    // 1. Save to Supabase
    const saveResult = await saveInquiry({
      first_name: contactName,
      last_name: `[${standard}]`,
      company: companyName,
      email: email,
      message: formattedMessage,
      source: 'audit_intake_application'
    });

    if (!saveResult.success) {
      console.error('Supabase persistence failure:', saveResult.error);
    }

    // 2. Dispatch Email via Resend if enabled
    if (resend) {
      try {
        await resend.emails.send({
          from: 'ARG Registrars Audit Desk <onboarding@resend.dev>',
          to: notificationEmail,
          subject: `[STAGE 1 INTAKE] ${applicationRef} - ${companyName} (${standard})`,
          text: `
======================================================
ARG REGISTRARS — ACCREDITED AUDIT INTAKE APPLICATION
======================================================
Application Ref: ${applicationRef}
Target Standard: ${standard}
Organization: ${companyName}
Contact Representative: ${contactName}
Email: ${email}
Phone: ${phone}
Regional Hub: ${operationalHub}
Site Structure: ${siteStructure}
Workforce: ${workforceSize}
Timeline: ${targetTimeline}

Detailed Notes:
${notes || 'None'}
======================================================
Dispatched to: Riyadh Desk (+966 55 8004287) & Faisalabad Desk (+92 314 59101614)
          `.trim()
        });
      } catch (emailErr) {
        console.error('Resend email dispatch error:', emailErr);
      }
    }

    return {
      success: true,
      applicationRef,
      companyName,
      standard
    };

  } catch (err: any) {
    console.error('submitAuditSchedule error:', err);
    return { error: 'An unexpected error occurred while submitting your audit application. Please contact our registrar desk directly.' };
  }
}
