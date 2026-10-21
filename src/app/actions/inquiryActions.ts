"use server";

import { fetchAllInquiries, updateInquiryStatus, InquiryRecord } from '@/lib/supabase';
import { checkAdminAuthRateLimit } from '@/lib/rateLimit';

const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || 'arg2026';

function verifyAuth(passcode: string): boolean {
  if (!passcode) return false;
  return passcode.trim() === ADMIN_PASSCODE.trim();
}

export async function getAdminInquiries(passcode: string): Promise<{
  success: boolean;
  inquiries?: InquiryRecord[];
  isLiveDb?: boolean;
  error?: string;
}> {
  // Check brute force throttling
  const rateLimit = await checkAdminAuthRateLimit();
  if (!rateLimit.success) {
    return { success: false, error: rateLimit.error || 'Authentication attempts locked. Please try again later.' };
  }

  if (!verifyAuth(passcode)) {
    return { success: false, error: 'Invalid registrar passcode. Access denied.' };
  }

  const result = await fetchAllInquiries();
  return {
    success: true,
    inquiries: result.inquiries,
    isLiveDb: result.isLiveDb,
    error: result.error
  };
}

export async function setInquiryStatus(
  passcode: string,
  id: string,
  status: InquiryRecord['status'],
  notes?: string
): Promise<{ success: boolean; error?: string }> {
  // Check brute force throttling
  const rateLimit = await checkAdminAuthRateLimit();
  if (!rateLimit.success) {
    return { success: false, error: rateLimit.error || 'Authentication attempts locked. Please try again later.' };
  }

  if (!verifyAuth(passcode)) {
    return { success: false, error: 'Invalid registrar passcode. Access denied.' };
  }

  return await updateInquiryStatus(id, status, notes);
}
