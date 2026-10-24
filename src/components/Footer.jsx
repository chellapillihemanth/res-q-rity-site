import { Link } from 'react-router-dom'
import { navLinks, contact, address } from '../data/content'
import SocialLinks from './SocialIcons'

const serviceLinks = [
  { label: 'Security program', to: '/services#program' },
  { label: 'Audit & compliance', to: '/services#audit' },
  { label: 'On-demand experts', to: '/services#ondemand' },
  { label: 'ISO 27001', to: '/services#iso' },
  { label: 'Technology partners', to: '/solutions' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src="/logo.png" alt="RES-Q-RITY" className="h-9 w-auto" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Cybersecurity consulting, audits and managed security for growing businesses. Founded in 2022 on the
            idea of simplifying cyber.
          </p>
          <a href={`mailto:${contact.email}`} className="link-underline mt-8 inline-block font-wide text-xl font-medium text-fg md:text-2xl">
            {contact.email}
          </a>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-dim">Company</p>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="link-underline transition-colors hover:text-fg">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-dim">Services</p>
          <ul className="mt-5 space-y-3 text-sm">
            {serviceLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="link-underline transition-colors hover:text-fg">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-dim">Office</p>
          <address className="mt-5 text-sm not-italic leading-relaxed">{address.full}</address>
          <a href={contact.phoneHref} className="link-underline mt-4 inline-block text-sm text-fg">{contact.phone}</a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-4 py-6 text-xs text-dim md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} RES-Q-RITY. All rights reserved.</p>
          <SocialLinks className="!text-xs" />
        </div>
      </div>
    </footer>
  )
}
