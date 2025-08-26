'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/70 backdrop-blur border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Bevelled</Link>
        <ul className="flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx('hover:underline underline-offset-4', pathname === l.href && 'font-semibold')}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
