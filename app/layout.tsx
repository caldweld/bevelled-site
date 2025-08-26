import '../styles/globals.css'
import type { Metadata } from 'next'
import { site } from '@/lib/site'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`
  },
  description: site.description,
  metadataBase: new URL(site.url),
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
