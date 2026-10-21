import { createClient, SupabaseClient } from '@supabase/supabase-js';

export interface InquiryRecord {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  company?: string | null;
  email: string;
  message: string;
  status: 'new' | 'in_review' | 'contacted' | 'closed';
  source?: string;
  notes?: string | null;
}

export interface NewInquiryInput {
  first_name: string;
  last_name: string;
  company?: string | null;
  email: string;
  message: string;
  source?: string;
  notes?: string | null;
}

export const isSupabaseConfigured = (): boolean => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return Boolean(
    url &&
    key &&
    url !== 'https://your-project.supabase.co' &&
    !url.includes('placeholder')
  );
};

// In-memory inquiry store for real-time submissions when external DB is connecting
const fallbackInquiries: InquiryRecord[] = [];

let cachedClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) {
    return null;
  }
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)!;

  if (!cachedClient) {
    cachedClient = createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    });
  }
  return cachedClient;
}

/**
 * Persists an inquiry into Supabase or fallback memory
 */
export async function saveInquiry(input: NewInquiryInput): Promise<{ success: boolean; data?: InquiryRecord; error?: string }> {
  try {
    const client = getSupabaseClient();

    if (client) {
      const { data, error } = await client
        .from('inquiries')
        .insert([
          {
            first_name: input.first_name,
            last_name: input.last_name,
            company: input.company || null,
            email: input.email,
            message: input.message,
            status: 'new',
            source: input.source || 'web_contact_form',
            notes: input.notes || null,
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Supabase save error:', error);
        return { error: error.message, success: false };
      }

      return { success: true, data: data as InquiryRecord };
    }

    // Fallback store when Supabase env vars are not yet configured
    const simulatedRecord: InquiryRecord = {
      id: `local-${Date.now()}`,
      created_at: new Date().toISOString(),
      first_name: input.first_name,
      last_name: input.last_name,
      company: input.company || null,
      email: input.email,
      message: input.message,
      status: 'new',
      source: input.source || 'web_contact_form',
      notes: 'Stored in local memory (Supabase credentials not yet configured).'
    };

    fallbackInquiries.unshift(simulatedRecord);
    return { success: true, data: simulatedRecord };
  } catch (err: any) {
    console.error('Error saving inquiry:', err);
    return { error: err?.message || 'Failed to save inquiry', success: false };
  }
}

/**
 * Fetches all inquiries for the administrative inbox
 */
export async function fetchAllInquiries(): Promise<{ inquiries: InquiryRecord[]; isLiveDb: boolean; error?: string }> {
  try {
    const client = getSupabaseClient();

    if (client) {
      const { data, error } = await client
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase fetch error:', error);
        return { inquiries: fallbackInquiries, isLiveDb: false, error: error.message };
      }

      return { inquiries: (data || []) as InquiryRecord[], isLiveDb: true };
    }

    return { inquiries: fallbackInquiries, isLiveDb: false };
  } catch (err: any) {
    return { inquiries: fallbackInquiries, isLiveDb: false, error: err?.message };
  }
}

/**
 * Updates status of an inquiry
 */
export async function updateInquiryStatus(
  id: string,
  status: InquiryRecord['status'],
  notes?: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const client = getSupabaseClient();

    if (client) {
      const updatePayload: Record<string, any> = { status };
      if (notes !== undefined) updatePayload.notes = notes;

      const { error } = await client
        .from('inquiries')
        .update(updatePayload)
        .eq('id', id);

      if (error) {
        return { success: false, error: error.message };
      }
      return { success: true };
    }

    // Local fallback
    const target = fallbackInquiries.find(item => item.id === id);
    if (target) {
      target.status = status;
      if (notes !== undefined) target.notes = notes;
      return { success: true };
    }

    return { success: false, error: 'Inquiry not found in local memory' };
  } catch (err: any) {
    return { success: false, error: err?.message };
  }
}
