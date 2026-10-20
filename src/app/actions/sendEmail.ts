"use server";

import { Resend } from 'resend';
import { saveInquiry } from '@/lib/supabase';

const resendApiKey = process.env.RESEND_API_KEY;
const notificationEmail = process.env.NOTIFICATION_EMAIL || 'info@argregistrars.com';
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendEmail(prevState: any, formData: FormData) {
  try {
    const firstName = (formData.get('firstName') as string)?.trim();
    const lastName = (formData.get('lastName') as string)?.trim() || '';
    const company = (formData.get('company') as string)?.trim() || '';
    const email = (formData.get('email') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();

    if (!firstName || !email || !message) {
      return { error: 'Please provide your name, valid email, and audit scope details.' };
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { error: 'Please enter a valid email address.' };
    }

    // 1. Save to Supabase (primary persistent store)
    const saveResult = await saveInquiry({
      first_name: firstName,
      last_name: lastName,
      company: company || null,
      email: email,
      message: message,
      source: 'web_contact_form'
    });

    if (!saveResult.success) {
      console.error('Supabase persistence failure:', saveResult.error);
    }

    // 2. Dispatch Email Notification if Resend is configured
    if (resend) {
      try {
        await resend.emails.send({
          from: 'ARG Registrars Audit Desk <onboarding@resend.dev>',
          to: notificationEmail,
          subject: `[New Audit Inquiry] ${company ? company + ' - ' : ''}${firstName} ${lastName}`,
          text: `
======================================================
ARG REGISTRARS — NEW AUDIT INQUIRY INTAKE
======================================================

Applicant Name: ${firstName} ${lastName}
Company / Facility: ${company || 'Not Specified'}
Email Address: ${email}
Submission Date: ${new Date().toUTCString()}
Inquiry ID: ${saveResult.data?.id || 'Pending'}

Certification Scope / Message:
------------------------------------------------------
${message}
------------------------------------------------------

Review or update this inquiry directly in the Registrar Portal:
https://argregistrars.com/admin/inquiries
          `.trim(),
        });
      } catch (emailErr) {
        // We log Resend failure but don't disrupt user since the lead is saved in Supabase
        console.warn('Resend notification notice (non-fatal):', emailErr);
      }
    }

    return { 
      success: true, 
      inquiryId: saveResult.data?.id 
    };
  } catch (error: any) {
    console.error('Inquiry Submission Error:', error);
    return { error: 'Unable to register audit inquiry. Please try again or contact our desk directly via official email or telephone.' };
  }
}
