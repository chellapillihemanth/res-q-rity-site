import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Briefcase, Clock, MapPin, Plus } from 'lucide-react'
import { careers } from '../data/careers'
import { Button, FadeUp, Label, SectionHeader, ease } from './ui'

function List({ title, items }) {
  return (
    <div>
      <Label>{title}</Label>
      <ul className="mt-4 space-y-2.5 text-[15px]">
        {items.map((it) => (
          <li key={it} className="flex gap-3 leading-relaxed">
            <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Role({ role, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  const mailto = `mailto:${careers.applyEmail}?subject=${encodeURIComponent(`Application: ${role.title}`)}&body=${encodeURIComponent(
    `Hi RES-Q-RITY team,\n\nPlease find my resume attached for the ${role.title} role.\n\n`
  )}`
  return (
    <FadeUp className="overflow-hidden rounded-lg border border-line bg-ink-2">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group flex w-full flex-col gap-5 p-6 text-left md:flex-row md:items-center md:justify-between md:p-8"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">{role.team}</p>
          <h3 className="mt-2 font-wide text-2xl font-semibold text-fg md:text-3xl">{role.title}</h3>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{role.location}</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" />{role.type}</span>
            <span className="flex items-center gap-2"><Briefcase className="h-4 w-4" />{role.experience}</span>
          </div>
        </div>
        <span className="flex items-center gap-3 text-sm text-fg">
          {open ? 'Hide details' : 'View role'}
          <span
            className={`grid h-10 w-10 place-items-center rounded-full border transition-all duration-300 group-hover:border-accent ${
              open ? 'rotate-45 border-accent text-accent' : 'border-line-strong'
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <div className="border-t border-line p-6 md:p-8">
              <p className="max-w-3xl text-lg leading-relaxed text-fg">{role.summary}</p>
              <div className="mt-10 grid gap-10 lg:grid-cols-2">
                <List title="What you'll do" items={role.responsibilities} />
                <div className="space-y-10">
                  <List title="What we're looking for" items={role.qualifications} />
                  <List title="Why join RES-Q-RITY" items={role.why} />
                </div>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-8">
                <Button href={mailto}>Apply for this role</Button>
                <p className="text-sm">
                  Or email your resume to <a href={mailto} className="link-underline text-fg">{careers.applyEmail}</a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </FadeUp>
  )
}

export default function Careers({ index }) {
  const n = careers.roles.length
  return (
    <section id="careers" className="scroll-mt-20 py-24 md:py-32">
      <div className="wrap">
        <SectionHeader
          index={index}
          label="Careers"
          title="Work with us."
          muted="Help us keep cyber simple."
          text="We are a small, fast-growing team at T-Hub, Hyderabad, working with enterprise clients and leading security vendors. If you want ownership and real impact, we would like to hear from you."
        />
        <div className="mt-14 space-y-4">
          <Label>{n} open {n === 1 ? 'position' : 'positions'}</Label>
          {careers.roles.map((r) => <Role key={r.id} role={r} defaultOpen={n === 1} />)}
        </div>
        <FadeUp className="mt-10 text-sm">
          Don't see your role? Send your resume to{' '}
          <a href={`mailto:${careers.applyEmail}?subject=${encodeURIComponent('General application')}`} className="link-underline text-fg">
            {careers.applyEmail}
          </a>{' '}
          and tell us how you'd help.
        </FadeUp>
      </div>
    </section>
  )
}
