import { site } from '@/lib/site'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 dark:border-neutral-800 mt-20">
      <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <Link href={site.social.instagram} target="_blank">Instagram</Link>
          <Link href={`mailto:${site.social.email}`}>Email</Link>
        </div>
      </div>
    </footer>
  )
}
