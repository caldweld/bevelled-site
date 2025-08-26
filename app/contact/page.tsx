import { site } from '@/lib/site'
import { Button } from '@/components/ui/button'

export const metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <section className="container-narrow py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Tell us about your project and we’ll get back to you.
      </p>

      <form className="mt-6 space-y-4" action="https://formspree.io/f/xdknkkwd" method="POST">
        <div>
          <label className="block text-sm mb-1" htmlFor="name">Name</label>
          <input id="name" name="name" required className="w-full rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required className="w-full rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={6} required className="w-full rounded-xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"></textarea>
        </div>
        <Button type="submit">Send Message</Button>
      </form>

      <div className="mt-8 text-sm">
        <p>Prefer email? <a className="underline" href={`mailto:${site.social.email}`}>{site.social.email}</a></p>
      </div>
    </section>
  )
}
