"use server";

import { getSupabaseClient } from '@/lib/supabase';
import { checkCertificateLookupRateLimit } from '@/lib/rateLimit';
import { VERIFIED_REGISTRY, type CertificateRecord } from '@/data/certificates';

export type { CertificateRecord };

export interface VerifyCertificateResult {
  success: boolean;
  data?: CertificateRecord;
  isLiveDb?: boolean;
  error?: string;
}

export async function verifyCertificateRecord(rawQuery: string): Promise<VerifyCertificateResult> {
  const query = (rawQuery || '').trim();
  if (!query) {
    return { success: false, error: 'Please enter a Certificate ID or Company Name.' };
  }

  // Rate limiting to prevent automated scraping
  const rateLimit = await checkCertificateLookupRateLimit();
  if (!rateLimit.success) {
    return { success: false, error: rateLimit.error };
  }

  const normalizedQuery = query.toUpperCase();

  // 1. Query Supabase Database if connected
  try {
    const client = getSupabaseClient();
    if (client) {
      const { data, error } = await client
        .from('certificates')
        .select('*')
        .or(`id.ilike.%${query}%,company_name.ilike.%${query}%`)
        .limit(1)
        .maybeSingle();

      if (!error && data) {
        const record: CertificateRecord = {
          id: data.id,
          companyName: data.company_name,
          country: data.country,
          city: data.city,
          standard: data.standard,
          accreditationBody: data.accreditation_body,
          status: data.status,
          issueDate: data.issue_date,
          expiryDate: data.expiry_date,
          nextSurveillance: data.next_surveillance,
          scope: data.scope,
          hash: data.hash || '0x' + Array.from(String(data.id)).map((c) => c.charCodeAt(0).toString(16)).join('').slice(0, 10)
        };
        return { success: true, data: record, isLiveDb: true };
      }
    }
  } catch (dbErr) {
    console.warn('Supabase certificate query notice (falling back to built-in registry):', dbErr);
  }

  // 2. Query Verified Built-in Registry
  // Check exact ID match first
  if (VERIFIED_REGISTRY[normalizedQuery]) {
    return { success: true, data: VERIFIED_REGISTRY[normalizedQuery], isLiveDb: false };
  }

  // Check partial ID or Company Name match
  const match = Object.values(VERIFIED_REGISTRY).find((rec) => {
    return (
      rec.id.toUpperCase().includes(normalizedQuery) ||
      rec.companyName.toUpperCase().includes(normalizedQuery)
    );
  });

  if (match) {
    return { success: true, data: match, isLiveDb: false };
  }

  return {
    success: false,
    error: `No accredited certificate found matching "${query}". Please check the ID or contact registrar support.`
  };
}
