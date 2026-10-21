import { headers } from 'next/headers';

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

// In-memory sliding-window store
const rateLimitStore = new Map<string, RateLimitEntry>();

// Periodic cleanup to avoid memory leaks
const CLEANUP_INTERVAL = 1000 * 60 * 10; // 10 minutes
let lastCleanup = Date.now();

function purgeExpiredEntries() {
  const now = Date.now();
  if (now - lastCleanup > CLEANUP_INTERVAL) {
    lastCleanup = now;
    for (const [key, entry] of rateLimitStore.entries()) {
      if (now > entry.resetAt) {
        rateLimitStore.delete(key);
      }
    }
  }
}

/**
 * Extracts client IP safely from Next.js server request headers.
 */
export async function getClientIp(): Promise<string> {
  try {
    const headersList = await headers();
    const forwardedFor = headersList.get('x-forwarded-for');
    if (forwardedFor) {
      return forwardedFor.split(',')[0].trim();
    }
    const realIp = headersList.get('x-real-ip');
    if (realIp) {
      return realIp.trim();
    }
    const cfConnectingIp = headersList.get('cf-connecting-ip');
    if (cfConnectingIp) {
      return cfConnectingIp.trim();
    }
  } catch {
    // Non-request context fallback
  }
  return '127.0.0.1';
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetSeconds: number;
  error?: string;
}

/**
 * Sliding-window rate limiter.
 * @param key Unique identifier (e.g. `inquiry:${ip}`)
 * @param limit Max allowed requests within window
 * @param windowSeconds Duration of window in seconds
 */
export function checkRateLimit(
  key: string,
  limit: number,
  windowSeconds: number
): RateLimitResult {
  // Allow unrestricted testing in local development environment
  if (process.env.NODE_ENV === 'development') {
    return {
      success: true,
      limit: 9999,
      remaining: 9999,
      resetSeconds: 0
    };
  }

  purgeExpiredEntries();
  const now = Date.now();
  const windowMs = windowSeconds * 1000;
  const existing = rateLimitStore.get(key);

  if (!existing || now > existing.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    return {
      success: true,
      limit,
      remaining: limit - 1,
      resetSeconds: windowSeconds
    };
  }

  if (existing.count >= limit) {
    const resetSeconds = Math.ceil((existing.resetAt - now) / 1000);
    return {
      success: false,
      limit,
      remaining: 0,
      resetSeconds,
      error: `Too many requests from this address. Please wait ${resetSeconds} seconds before trying again.`
    };
  }

  existing.count += 1;
  const remaining = limit - existing.count;
  const resetSeconds = Math.ceil((existing.resetAt - now) / 1000);
  return {
    success: true,
    limit,
    remaining,
    resetSeconds
  };
}

/**
 * Throttles inquiry submissions (5 per 10 minutes)
 */
export async function checkInquiryRateLimit(): Promise<RateLimitResult> {
  const ip = await getClientIp();
  return checkRateLimit(`inquiry:${ip}`, 5, 600);
}

/**
 * Throttles administrative passcode attempts (5 per 15 minutes)
 */
export async function checkAdminAuthRateLimit(): Promise<RateLimitResult> {
  const ip = await getClientIp();
  return checkRateLimit(`admin-auth:${ip}`, 5, 900);
}

/**
 * Throttles certificate lookups (25 per 1 minute)
 */
export async function checkCertificateLookupRateLimit(): Promise<RateLimitResult> {
  const ip = await getClientIp();
  return checkRateLimit(`cert-lookup:${ip}`, 25, 60);
}
