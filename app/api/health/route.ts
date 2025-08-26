import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabaseClient'

export async function GET() {
  try {
    const supabase = getSupabase()
    const { data, error } = await supabase.from('portfolio_items').select('id').limit(1)
    if (error) throw error
    return NextResponse.json({ ok: true, items: data?.length ?? 0 })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 })
  }
}
