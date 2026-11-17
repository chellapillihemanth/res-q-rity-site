import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Check, Plus } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { LogoWall } from '../components/sections'
import { Button, FadeUp, Label, SectionHeader, ease } from '../components/ui'
import { bookingLink } from '../data/content'
import { landingPages } from '../data/landing'

function Faqs({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="md:ml-[25%]">
      {items.map(([q, a], i) => (
        <div key={q} className={`border-t border-line ${i === items.length - 1 ? 'border-b' : ''}`}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="group flex w-full items-center gap-6 py-6 text-left">
            <h3 className={`flex-1 text-lg transition-colors md:text-xl ${open === i ? 'text-fg' : 'text-muted group-hover:text-fg'}`}>{q}</h3>
            <Plus className={`h-5 w-5 transition-transform duration-300 ${open === i ? 'rotate-45 text-accent' : 'text-dim'}`} strokeWidth={1.5} />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.3, ease }} className="overflow-hidden">
                <p className="max-w-2xl pb-7 leading-relaxed">{a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default function Landing({ slug }) {
  const page = landingPages.find((p) => p.slug === slug)
  const others = landingPages.filter((p) => p.slug !== slug)

  return (
    <>
      <PageHero label={page.label} title={page.title} muted={page.muted} text={page.intro}>
        <div className="mt-10 flex flex-wrap gap-3 md:ml-[50%]">
          <Button {...bookingLink}>Book a free assessment</Button>
          <Button to="/case-studies" variant="secondary">See a case study</Button>
        </div>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="wrap grid gap-14 md:grid-cols-12">
          <FadeUp className="md:col-span-5">
            <Label><span className="text-accent">01</span>&nbsp;&nbsp;Who it’s for</Label>
            <ul className="mt-6">
              {page.forWho.map((w, i) => (
                <li key={w} className={`border-t border-line py-4 text-[15px] leading-relaxed text-fg ${i === page.forWho.length - 1 ? 'border-b' : ''}`}>{w}</li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.05} className="md:col-span-6 md:col-start-7">
            <Label><span className="text-accent">02</span>&nbsp;&nbsp;What’s included</Label>
            <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
              {page.includes.map((it) => (
                <li key={it} className="flex gap-3 border-t border-line py-4 text-[15px] leading-relaxed">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />{it}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      <section className="bg-ink-2 py-20 md:py-28">
        <div className="wrap">
          <SectionHeader index="03" label="How it works" title="Four stages," muted="no surprises." />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {page.steps.map(([t, d], i) => (
              <FadeUp as="li" key={t} delay={i * 0.04} className="bg-ink p-7">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-8 font-wide text-xl font-medium text-fg">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed">{d}</p>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap">
          <SectionHeader index="04" label="FAQ" title="Common questions" muted={`about ${page.nav}.`} />
          <div className="mt-12"><Faqs items={page.faqs} /></div>
        </div>
      </section>

      <LogoWall />

      <section className="pb-8">
        <div className="wrap">
          <Label>Related</Label>
          <ul className="mt-4 flex flex-wrap gap-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link to={`/${o.slug}`} className="inline-block rounded-md border border-line-strong px-3.5 py-2 text-sm text-muted transition-colors hover:border-fg hover:text-fg">{o.nav}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  )
}
