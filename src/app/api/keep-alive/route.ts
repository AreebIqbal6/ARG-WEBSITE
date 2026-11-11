import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

// Never cache keep-alive responses so every invocation touches Supabase
export const dynamic = 'force-dynamic';

export async function GET() {
  const startTime = Date.now();
  let supabaseStatus = 'disconnected';
  let latencyMs = 0;
  let rowCount = 0;

  try {
    const supabase = getSupabaseClient();
    if (supabase) {
      // Execute a lightweight query to register activity on Supabase and reset the 7-day inactivity pause timer
      const { data, error } = await supabase
        .from('inquiries')
        .select('id')
        .limit(1);

      latencyMs = Date.now() - startTime;

      if (error) {
        supabaseStatus = `error: ${error.message}`;
      } else {
        supabaseStatus = 'active';
        rowCount = data?.length || 0;
      }
    } else {
      supabaseStatus = 'client_not_configured';
    }
  } catch (err: any) {
    latencyMs = Date.now() - startTime;
    supabaseStatus = `exception: ${err?.message || 'unknown'}`;
  }

  return NextResponse.json({
    status: 'ok',
    service: 'argregistrars',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    supabase: {
      status: supabaseStatus,
      latencyMs,
      rowCount
    }
  });
}
