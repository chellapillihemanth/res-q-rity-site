import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { FadeUp, Label, Rule, SectionHeader, ease } from '../components/ui'
import { Roadmap, VcisoTable } from '../components/sections'
import { audits, isoPhases, programServices, serviceTracks } from '../data/content'

const whyIso = [
  'Tailored to your business model, risk appetite and industry',
  'Audit-ready documentation aligned with certification standards',
  'We work as an extension of your InfoSec and compliance teams',
  'Tool advisory improves implementation efficiency by 35–40%',
  'Proven ISO 27001 experience in BFSI and manufacturing',
]

const otherFrameworks = ['HITRUST', 'NIST', 'Cyber Essentials', 'ISO 9001', 'ISO 42001', '21 CFR Part 11', 'DPDPA', 'SEBI', 'RBI', 'IRDAI']

function TrackIndex() {
  return (
    <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
      {serviceTracks.map((t, i) => (
        <motion.a
          key={t.id}
          href={`#${t.id}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.08, duration: 0.7, ease }}
          className="group bg-ink p-6 transition-colors duration-300 hover:bg-ink-2"
        >
          <span className="font-mono text-xs text-accent">0{i + 1}</span>
          <p className="mt-6 font-wide text-lg font-medium text-fg">{t.title}</p>
          <p className="mt-1 text-sm">{t.items.length} services <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">↓</span></p>
        </motion.a>
      ))}
    </div>
  )
}

function Program() {
  return (
    <section id="program" className="scroll-mt-20 py-24 md:py-32">
      <div className="wrap">
        <SectionHeader
          index="01"
          label="Build your own program"
          title="Every capability a security program needs,"
          muted="led by a virtual CISO."
          text={serviceTracks[0].blurb}
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {programServices.map((s, i) => (
            <FadeUp key={s.title} delay={(i % 3) * 0.06} className="group bg-ink p-7 transition-colors duration-300 hover:bg-ink-2">
              <s.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <h3 className="mt-6 font-wide text-lg font-medium text-fg">{s.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed">
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function Audit() {
  return (
    <section id="audit" className="scroll-mt-20 py-24 md:py-32">
      <div className="wrap">
        <SectionHeader
          index="02"
          label="Audit & compliance"
          title="Audits that leave you with a baseline,"
          muted="not just a certificate."
          text="A methodical assessment of your software, information handling, user practices, hardware and environment against the standards that matter to you."
        />
        <dl className="mt-14 border-t border-line md:ml-[25%]">
          {audits.map((a, i) => (
            <FadeUp key={a.title} delay={i * 0.05} className="grid gap-2 border-b border-line py-7 sm:grid-cols-[12rem_1fr] sm:gap-8">
              <dt className="font-wide text-lg font-semibold text-fg">{a.title}</dt>
              <dd className="leading-relaxed">{a.text}</dd>
            </FadeUp>
          ))}
          <FadeUp className="grid gap-2 py-7 sm:grid-cols-[12rem_1fr] sm:gap-8">
            <dt className="font-wide text-lg font-semibold text-fg">Also supported</dt>
            <dd className="flex flex-wrap gap-2">
              {otherFrameworks.map((f) => (
                <span key={f} className="rounded border border-line px-2.5 py-1 font-mono text-xs text-muted">{f}</span>
              ))}
            </dd>
          </FadeUp>
        </dl>
      </div>
    </section>
  )
}

function Iso() {
  const [open, setOpen] = useState(0)
  return (
    <section id="iso" className="scroll-mt-20 bg-ink-2 py-24 md:py-32">
      <div className="wrap grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Label><span className="text-accent">02.1</span>&nbsp;&nbsp;ISO/IEC 27001</Label>
          <h2 className="mt-6 font-wide text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-fg sm:text-4xl">
            End-to-end ISO 27001, <span className="text-dim">from gap analysis to certification.</span>
          </h2>
          <ul className="mt-10 space-y-3 text-sm">
            {whyIso.map((w) => (
              <li key={w} className="flex gap-3 border-t border-line pt-3"><span className="text-accent">—</span>{w}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-7">
          {isoPhases.map((p, i) => {
            const isOpen = open === i
            return (
              <div key={p.title} className="border-t border-line last:border-b">
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="group flex w-full items-center gap-6 py-6 text-left">
                  <span className={`font-mono text-xs transition-colors ${isOpen ? 'text-accent' : 'text-dim'}`}>0{i + 1}</span>
                  <span className="flex-1 font-wide text-xl font-medium text-fg transition-transform duration-300 group-hover:translate-x-1">{p.title}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }} className="text-muted">
                    <Plus className="h-5 w-5" strokeWidth={1.5} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.45, ease }} className="overflow-hidden">
                      <ul className="space-y-2 pb-7 pl-11 text-sm leading-relaxed">
                        {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function OnDemand() {
  return (
    <section id="ondemand" className="scroll-mt-20 py-24 md:py-32">
      <div className="wrap">
        <SectionHeader
          index="03"
          label="On-demand experts"
          title="Senior expertise exactly when you need it,"
          muted="without a full-time hire."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:ml-[25%] md:grid-cols-3">
          {[
            ['Virtual CISO', 'Executive security leadership for your board, auditors and customers.'],
            ['Incident response', 'Experienced responders to contain, investigate and recover.'],
            ['SOC-as-a-Service', '24×7 monitoring through our SIEM and EDR partners, with no infrastructure to buy.'],
          ].map(([t, d], i) => (
            <FadeUp key={t} delay={i * 0.08} className="bg-ink p-7">
              <h3 className="font-wide text-lg font-medium text-fg">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed">{d}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <PageHero
        label="Services"
        title="Security built around"
        muted="your business."
        text="Programs, audits and on-demand experts, combined into one modular engagement that grows with you. Pick one, or let us run all three."
      >
        <TrackIndex />
      </PageHero>
      <Program />
      <Audit />
      <Iso />
      <OnDemand />
      <VcisoTable index="04" />
      <Roadmap index="05" />
      <CTA />
    </>
  )
}
