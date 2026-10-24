import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import { Menu, X, Phone } from 'lucide-react'
import { navLinks, contact } from '../data/content'
import { Button } from './ui'

export default function Header() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 30)
    setHidden(y > prev && y > 400 && !open)
  })

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -110 : 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div
        className={`relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled
            ? 'border border-cyber-400/15 bg-ink-900/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <Link to="/" className="relative z-10 shrink-0" aria-label="RES-Q-RITY home">
          <img src="/logo.png" alt="RES-Q-RITY — A New Dimension of Security" className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className="relative px-4 py-2 text-sm font-medium">
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-cyber-400/25 bg-cyber-400/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400 hover:text-cyber-300'}`}>
                    {l.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={contact.phoneHref} className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyber-300">
            <Phone className="h-4 w-4" /> {contact.phone}
          </a>
          <Button to="/contact" className="!px-5 !py-2.5">Get a free assessment</Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-cyber-400/25 text-cyber-300 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink-950/95 px-8 backdrop-blur-xl lg:hidden"
          >
            <div className="bg-grid mask-radial absolute inset-0" />
            <nav className="relative flex flex-col gap-2">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) => `font-display text-4xl font-semibold ${isActive ? 'text-gradient' : 'text-slate-300'}`}
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="relative mt-12 space-y-2 text-slate-400">
              <a href={`mailto:${contact.email}`} className="block">{contact.email}</a>
              <a href={contact.phoneHref} className="block">{contact.phone}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
