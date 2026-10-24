import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Check, X } from 'lucide-react'
import { roadmap, vcisoCompare, clients, allPartners } from '../data/content'
import { SectionHeading, FadeIn, Marquee, SpotlightCard } from './ui'

/* Scroll-linked roadmap: the beam fills as you scroll through the steps. */
export function Roadmap() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const fill = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="relative px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="Roadmap"
        title="Level up your cyber armor"
        highlight={['cyber', 'armor']}
        text="A proven sequence we run with BFSI, healthcare and SaaS teams, from the leadership foundation to ransomware-ready."
      />
      <div ref={ref} className="relative mx-auto mt-16 max-w-4xl">
        <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-1/2" />
        <motion.div style={{ height: fill }} className="absolute left-5 top-0 w-px bg-gradient-to-b from-cyber-400 via-cyber-500 to-azure-500 shadow-[0_0_12px_rgba(95,216,240,0.8)] md:left-1/2" />

        <div className="space-y-10 md:space-y-4">
          {roadmap.map((step, i) => {
            const left = i % 2 === 0
            return (
              <div key={step.title} className={`relative flex md:w-1/2 ${left ? 'md:pr-14' : 'md:ml-auto md:pl-14'}`}>
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className={`absolute left-5 top-6 z-10 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border border-cyber-400/60 bg-ink-900 font-mono text-xs text-cyber-300 shadow-[0_0_18px_rgba(95,216,240,0.5)] ${left ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:left-0'}`}
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.span>
                <FadeIn x={left ? -40 : 40} y={0} className="w-full pl-14 md:pl-0">
                  <SpotlightCard className="p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyber-400">{step.tag}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white md:text-xl">{step.title}</h3>
                  </SpotlightCard>
                </FadeIn>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function VcisoCompare() {
  return (
    <section className="relative px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="vCISO vs In-house"
        title="Executive security leadership without the executive overhead"
        highlight={['leadership']}
        text="Our virtual CISO brings a collective pool of cross-industry expertise, at a fraction of the cost of a full-time hire."
      />
      <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
        <FadeIn x={-40} y={0}>
          <div className="relative h-full overflow-hidden rounded-3xl border border-cyber-400/40 bg-gradient-to-b from-cyber-500/15 to-ink-800 p-8 shadow-[0_0_60px_-20px_rgba(34,195,230,0.6)]">
            <span className="absolute right-6 top-6 rounded-full bg-cyber-400 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-ink-900">Recommended</span>
            <h3 className="font-display text-2xl font-semibold text-white">RES-Q-RITY vCISO</h3>
            <div className="my-6 h-px bg-gradient-to-r from-cyber-400/60 to-transparent" />
            <ul className="space-y-4">
              {vcisoCompare.ours.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex items-center gap-3 text-slate-200"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyber-400/15 text-cyber-300"><Check className="h-3.5 w-3.5" /></span>
                  {t}
                </motion.li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn x={40} y={0}>
          <div className="h-full rounded-3xl border border-white/10 bg-ink-800/50 p-8">
            <h3 className="font-display text-2xl font-semibold text-slate-300">In-house CISO</h3>
            <div className="my-6 h-px bg-gradient-to-r from-white/15 to-transparent" />
            <ul className="space-y-4">
              {vcisoCompare.inHouse.map((t, i) => (
                <motion.li
                  key={t.text}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className={`flex items-center gap-3 ${t.ok ? 'text-slate-300' : 'text-slate-500'}`}
                >
                  <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${t.ok ? 'bg-white/10 text-slate-300' : 'bg-red-500/10 text-red-400'}`}>
                    {t.ok ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                  </span>
                  {t.text}
                </motion.li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* Words light up one by one as the paragraph scrolls through the viewport. */
function ScrollWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">{children}</motion.span>
}

export function ScrollRevealParagraph({ text, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] })
  const words = text.split(' ')
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <ScrollWord key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>{w}</ScrollWord>
      ))}
    </p>
  )
}

export function MissionVision() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(47,107,255,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl space-y-20 text-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyber-400">Our Mission</p>
          <ScrollRevealParagraph
            text="Modular security. Meaningful results. Mutual growth."
            className="mt-6 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
          />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyber-400">Our Vision</p>
          <ScrollRevealParagraph
            text="Trusted security ally. Designed for sustainability. Secured to scale with you."
            className="mt-6 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
          />
        </div>
      </div>
    </section>
  )
}

export function ClientStrip({ title = 'Trusted by fast-moving teams across fintech, healthcare and manufacturing' }) {
  return (
    <section className="relative py-16">
      <FadeIn>
        <p className="mb-8 px-4 text-center font-mono text-xs uppercase tracking-[0.25em] text-slate-500">{title}</p>
      </FadeIn>
      <Marquee items={clients} />
    </section>
  )
}

export function PartnerStrip() {
  return (
    <div className="space-y-4">
      <Marquee items={allPartners.slice(0, 10)} />
      <Marquee items={allPartners.slice(10)} reverse />
    </div>
  )
}
