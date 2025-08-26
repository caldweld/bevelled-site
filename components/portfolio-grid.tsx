import data from '@/content/portfolio.json'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardBody } from './ui/card'

export default function PortfolioGrid() {
  return (
    <section className="container mt-12">
      <h2 className="text-xl font-semibold tracking-tight">Recent Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {data.map((item) => (
          <Link key={item.slug} href={`/portfolio#${item.slug}`} className="group">
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src={item.cover} alt={item.title} fill className="object-cover group-hover:scale-[1.02] transition" />
              </div>
              <CardBody>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.summary}</p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
