import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Check, ChevronDown, Wrench, BadgeCheck, Zap } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { FadeIn, GlowOrbs, SectionHeading, SpotlightCard } from '../components/ui'
import { Roadmap } from '../components/sections'
import { audits, isoPhases, programServices, serviceTracks } from '../data/content'

const trackIcons = { program: Wrench, audit: BadgeCheck, ondemand: Zap }

const whyIso = [
  'Deep cybersecurity, compliance and governance expertise',
  'Tailored to your business model, risk appetite and industry',
  'Audit-ready documentation aligned with certification standards',
  'A true extension of your InfoSec and compliance teams',
  'Tool advisory improves implementation efficiency by 35–40%',
  'Proven ISO 27001 experience in BFSI and manufacturing',
]

function Tracks() {
  return (
    <section className="relative px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
        {serviceTracks.map((t, i) => {
          const Icon = trackIcons[t.id]
          return (
            <FadeIn key={t.id} delay={i * 0.12}>
              <div id={t.id} className="scroll-mt-28 h-full">
                <SpotlightCard className="h-full p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyber-500 to-azure-500 text-white shadow-[0_0_30px_-6px_rgba(34,195,230,0.7)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-white">{t.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{t.blurb}</p>
                  <ul className="mt-6 space-y-2.5">
                    {t.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-sm text-slate-300 transition-transform duration-300 hover:translate-x-1 hover:text-cyber-300">
                        <Check className="h-4 w-4 shrink-0 text-cyber-400" /> {it}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}

function ProgramGrid() {
  return (
    <section className="relative px-4 py-24 sm:px-6 md:py-32">
      <GlowOrbs />
      <SectionHeading
        eyebrow="Build your own security program"
        title="Every capability your security program needs"
        highlight={['security', 'program']}
      />
      <div className="relative mx-auto mt-16 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {programServices.map((s, i) => (
          <FadeIn key={s.title} delay={(i % 3) * 0.1}>
            <SpotlightCard className="h-full p-7">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyber-400/20 bg-cyber-400/10 text-cyber-300 transition-all duration-500 group-hover:bg-cyber-400 group-hover:text-ink-900">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-slate-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyber-400" /> {p}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function IsoSection() {
  const [open, setOpen] = useState(0)
  return (
    <section id="iso" className="relative scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            center={false}
            eyebrow="ISO/IEC 27001"
            title="End-to-end ISO 27001 preparation & audit"
            highlight={['ISO', '27001']}
            text="We help you prepare, implement and audit your ISMS with full confidence, from gap analysis to certification and beyond."
          />
          <ul className="mt-10 space-y-4">
            {whyIso.map((w, i) => (
              <motion.li
                key={w}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 text-slate-300"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyber-400/15 text-cyber-300"><Check className="h-3.5 w-3.5" /></span>
                {w}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          {isoPhases.map((p, i) => {
            const isOpen = open === i
            return (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? 'border-cyber-400/40 bg-cyber-400/[0.06]' : 'border-white/10 bg-white/[0.02] hover:border-cyber-400/25'}`}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center gap-4 p-6 text-left" aria-expanded={isOpen}>
                    <span className={`font-mono text-sm ${isOpen ? 'text-cyber-300' : 'text-slate-500'}`}>0{i + 1}</span>
                    <span className="flex-1 font-display text-lg font-semibold text-white">{p.title}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-cyber-300"><ChevronDown className="h-5 w-5" /></motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                        <ul className="space-y-2.5 px-6 pb-6 pl-14">
                          {p.points.map((pt) => (
                            <li key={pt} className="flex gap-2.5 text-sm text-slate-400"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyber-400" />{pt}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AuditGrid() {
  return (
    <section className="relative px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="Audit assistance"
        title="Audits that build a baseline, not just a certificate"
        highlight={['baseline']}
        text="A methodical assessment of your software, information handling, user practices, hardware and environment against the standards that matter to you."
      />
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {audits.map((a, i) => (
          <FadeIn key={a.title} delay={(i % 3) * 0.1}>
            <SpotlightCard className="h-full p-7">
              <a.icon className="h-7 w-7 text-cyber-400 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{a.text}</p>
            </SpotlightCard>
          </FadeIn>
        ))}
        <FadeIn delay={0.2}>
          <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-cyber-400/30 p-7">
            <p className="font-display text-xl font-semibold text-white">Also supported</p>
            <p className="mt-2 text-sm text-slate-400">HITRUST · NIST · Cyber Essentials · ISO 9001 · ISO 42001 · 21 CFR Part 11 · DPDPA · SEBI · RBI · IRDAI</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Our services"
        title="Security built around your business"
        highlight={['your', 'business']}
        text="Programs, audits and on-demand experts, combined into a modular engagement that grows with you."
      />
      <Tracks />
      <ProgramGrid />
      <IsoSection />
      <AuditGrid />
      <Roadmap />
      <CTA />
    </>
  )
}
