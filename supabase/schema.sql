-- ========================================================
-- ARG REGISTRARS PAKISTAN & RIYADH
-- Inquiries & Audit Requests Schema for Supabase
-- ========================================================

-- 1. Create Inquiries Table
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_review', 'contacted', 'closed')),
  source TEXT DEFAULT 'web_contact_form',
  notes TEXT
);

-- 2. Indexes for High Performance Queries
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries (status);
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON public.inquiries (email);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- 4. Security Policies
-- Allow anyone (public/anon) to submit a new audit inquiry
DROP POLICY IF EXISTS "Allow anonymous insert for inquiries" ON public.inquiries;
CREATE POLICY "Allow anonymous insert for inquiries"
  ON public.inquiries
  FOR INSERT
  WITH CHECK (true);

-- Allow service role full read/write access
DROP POLICY IF EXISTS "Allow service role full access" ON public.inquiries;
CREATE POLICY "Allow service role full access"
  ON public.inquiries
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Optional: Allow authenticated users (e.g. Supabase dashboard users) full access
DROP POLICY IF EXISTS "Allow authenticated users to view and update" ON public.inquiries;
CREATE POLICY "Allow authenticated users to view and update"
  ON public.inquiries
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- 5. Comments for Documentation
COMMENT ON TABLE public.inquiries IS 'Official audit inquiries and certification requests submitted via ARG Registrars web portal.';
COMMENT ON COLUMN public.inquiries.status IS 'Status flow: new -> in_review -> contacted -> closed';
