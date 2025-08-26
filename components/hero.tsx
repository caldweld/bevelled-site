import { Button } from './ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="container mt-10 md:mt-16">
      <div className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 overflow-hidden shadow-soft">
        <div className="aspect-[16/7] bg-[url('https://images.unsplash.com/photo-1501706362039-c06b2d715385?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="p-6 md:p-8 flex items-center justify-between gap-4 bg-white dark:bg-neutral-950">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Handcrafted Hardwood Furniture</h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-prose">
              Bespoke pieces in Australian timbers — designed, built and finished in Melbourne.
            </p>
          </div>
          <div className="shrink-0">
            <Link href="/portfolio"><Button size="lg">View Portfolio</Button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
