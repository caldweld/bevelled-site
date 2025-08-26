import data from '@/content/portfolio.json'
import Image from 'next/image'

export const metadata = { title: 'Portfolio' }

export default function PortfolioPage() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Portfolio</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Selected projects and commissions.</p>

      <div className="mt-8 space-y-12">
        {data.map((item) => (
          <article id={item.slug} key={item.slug}>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400">{item.summary}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {item.images.map((src, i) => (
                <div className="relative aspect-[4/3]" key={i}>
                  <Image src={src} alt={`${item.title} ${i+1}`} fill className="object-cover rounded-xl" />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
