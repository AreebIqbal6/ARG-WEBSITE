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

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseKey &&
    supabaseUrl !== 'https://your-project.supabase.co' &&
    !supabaseUrl.includes('placeholder')
  );
};

// Global in-memory fallback for development or before Supabase credentials are wired
const fallbackInquiries: InquiryRecord[] = [
  {
    id: 'demo-sample-01',
    created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
    first_name: 'Tariq',
    last_name: 'Mansoor',
    company: 'Continental Apparel Exporters',
    email: 'tariq.mansoor@continental-apparel.example.com',
    message: 'Requesting quotation and Stage 1 timeline for C-TPAT supply chain security audit across Faisalabad manufacturing unit.',
    status: 'new',
    source: 'web_contact_form',
    notes: 'Initial inquiry via website contact desk.'
  },
  {
    id: 'demo-sample-02',
    created_at: new Date(Date.now() - 3600000 * 18).toISOString(),
    first_name: 'Engr. Khalid',
    last_name: 'Al-Otaibi',
    company: 'Al-Riyadh Polymer & Specialty Chemicals',
    email: 'khalid.otaibi@alriyadh-chem.example.com',
    message: 'Seeking renewal and surveillance audit schedule for ISO 9001:2015 and ISO 14001:2015 Integrated Management System.',
    status: 'in_review',
    source: 'web_contact_form',
    notes: 'Followed up via technical director.'
  }
];

let cachedClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) {
    return null;
  }
  if (!cachedClient && supabaseUrl && supabaseKey) {
    cachedClient = createClient(supabaseUrl, supabaseKey, {
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
