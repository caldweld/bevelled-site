import { createClient } from '@supabase/supabase-js'

export function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !anon) {
    const missing = [
      !url && 'NEXT_PUBLIC_SUPABASE_URL',
      !anon && 'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    ].filter(Boolean).join(', ')
    throw new Error(`Supabase not configured. Missing env: ${missing}`)
  }
  return createClient(url, anon, { auth: { persistSession: false } })
}
