import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import { navLinks, contact, serviceTracks } from '../data/content'
import { lockScroll } from '../lib/scroll'
import { Button, ease } from './ui'

export default function Header() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { key: locationKey } = useLocation()

  const [mega, setMega] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))
  useEffect(() => {
    setOpen(false)
    setMega(false)
  }, [locationKey])
  useEffect(() => {
    lockScroll(open)
  }, [open])

  const solid = scrolled || open || mega

  return (
    <>
      <header
        onMouseLeave={() => setMega(false)}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          solid ? 'border-b border-line bg-ink/90 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="wrap flex h-[72px] items-center justify-between">
          <Link to="/" aria-label="RES-Q-RITY home" className="shrink-0">
            <img src="/logo.png" alt="RES-Q-RITY, A New Dimension of Security" className="h-8 w-auto md:h-9" />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.slice(1).map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onMouseEnter={() => setMega(l.to === '/services')}
                onFocus={() => setMega(l.to === '/services')}
                aria-haspopup={l.to === '/services' ? 'true' : undefined}
                aria-expanded={l.to === '/services' ? mega : undefined}
                className="group relative py-6 text-sm"
              >
                {({ isActive }) => (
                  <>
                    <span className={`transition-colors duration-300 ${isActive ? 'text-fg' : 'text-muted group-hover:text-fg'}`}>{l.label}</span>
                    <span
                      className={`absolute bottom-5 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block" onMouseEnter={() => setMega(false)}>
            <Button to="/contact" className="!py-2.5">Free assessment</Button>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="relative h-10 w-10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`absolute left-2 right-2 h-px bg-fg transition-all duration-300 ${open ? 'top-1/2 rotate-45' : 'top-[15px]'}`} />
            <span className={`absolute left-2 right-2 h-px bg-fg transition-all duration-300 ${open ? 'top-1/2 -rotate-45' : 'top-[24px]'}`} />
          </button>
        </div>

        <AnimatePresence>
          {mega && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease }}
              className="absolute inset-x-0 top-full hidden border-b border-line bg-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] lg:block"
            >
              <div className="wrap grid grid-cols-12 gap-10 py-10">
                {serviceTracks.map((t, i) => (
                  <div key={t.id} className="col-span-3">
                    <Link to={`/services#${t.id}`} className="group flex items-baseline gap-3">
                      <span className="font-mono text-xs text-accent">0{i + 1}</span>
                      <span className="font-wide font-medium text-fg transition-colors group-hover:text-accent">{t.title}</span>
                    </Link>
                    <ul className="mt-4 space-y-2 border-t border-line pt-4 pl-7 text-sm">
                      {t.items.slice(0, 6).map((it) => (
                        <li key={it}>
                          <Link to={`/services#${t.id}`} className="text-muted transition-colors hover:text-fg">{it}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link to="/contact" className="group col-span-3 flex flex-col justify-between rounded-lg border border-line bg-ink-2 p-6 transition-colors hover:border-accent/50">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Free</p>
                    <p className="mt-3 font-wide text-lg font-medium leading-snug text-fg">Initial technical assessment</p>
                    <p className="mt-2 text-sm">Find your biggest risks in one short engagement.</p>
                  </div>
                  <span className="mt-6 text-sm text-fg">Book now <span className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-ink pt-[72px] lg:hidden"
          >
            <nav className="wrap mt-6 flex flex-col">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease }}
                  className="border-b border-line"
                >
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) => `flex items-center justify-between py-5 font-wide text-2xl font-medium ${isActive ? 'text-fg' : 'text-muted'}`}
                  >
                    {l.label}
                    <span className="font-mono text-xs text-dim">0{i + 1}</span>
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="wrap mt-auto space-y-1 pb-10 text-sm">
              <a href={`mailto:${contact.email}`} className="block text-fg">{contact.email}</a>
              <a href={contact.phoneHref} className="block text-muted">{contact.phone}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
