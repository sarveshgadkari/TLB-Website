import { createClient } from '@supabase/supabase-js';

let cachedClient = null;

export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  if (!cachedClient) {
    cachedClient = createClient(url, serviceRoleKey, {
      auth: { persistSession: false },
    });
  }

  return cachedClient;
}
