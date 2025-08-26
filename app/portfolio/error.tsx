'use client'
export default function PortfolioError({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  return (
    <section className="container-narrow py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Portfolio Setup Required</h1>
      <p className="mt-3 text-sm text-neutral-500">Error: {error.message}</p>
      <ol className="mt-6 list-decimal ml-6 space-y-2 text-sm">
        <li>Set <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in Vercel → Project → Settings → Environment Variables.</li>
        <li>Run the provided SQL to create <code>portfolio_items</code> and <code>portfolio_images</code>.</li>
        <li>Insert at least one item and image URL (publicly accessible).</li>
      </ol>
      <button className="mt-6 h-10 px-4 rounded-2xl border" onClick={() => reset()}>Retry</button>
    </section>
  )
}
