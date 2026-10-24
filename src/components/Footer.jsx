import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { navLinks, contact, serviceTracks } from '../data/content'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyber-400/10 bg-ink-950">
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyber-400/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src="/logo.png" alt="RES-Q-RITY" className="h-11 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Secure your tomorrow, today. Your partner in digital resilience. Founded on the mantra of
              <span className="text-cyber-300"> "Simplifying Cyber"</span>.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
              <span className="rounded border border-white/10 px-2 py-1">DSCI Member</span>
              <span className="rounded border border-white/10 px-2 py-1">IIM-B NSRCEL</span>
              <span className="rounded border border-white/10 px-2 py-1">T-HUB</span>
            </div>
            <SocialIcons className="mt-8" />
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Company</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="group inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-cyber-300">
                    <span className="h-px w-0 bg-cyber-400 transition-all duration-300 group-hover:w-3" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Services</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceTracks.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`} className="group inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-cyber-300">
                    <span className="h-px w-0 bg-cyber-400 transition-all duration-300 group-hover:w-3" />
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services#iso" className="group inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-cyber-300">
                  <span className="h-px w-0 bg-cyber-400 transition-all duration-300 group-hover:w-3" />
                  ISO 27001 Certification
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-start gap-3 text-slate-400 transition-colors hover:text-cyber-300">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyber-400" /> {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="flex items-start gap-3 text-slate-400 transition-colors hover:text-cyber-300">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyber-400" /> {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyber-400" /> {contact.address}
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          aria-hidden
          className="pointer-events-none mt-16 select-none text-center font-display text-[17vw] font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(95,216,240,0.18)] lg:text-[11rem]"
        >
          RES-Q-RITY
        </motion.div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} RES-Q-RITY. All rights reserved. A New Dimension of Security.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 transition-colors hover:text-cyber-300"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 transition-all group-hover:-translate-y-1 group-hover:border-cyber-400/50">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
