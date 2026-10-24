import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { Check, Minus, ArrowLeft, ArrowRight, Plus } from 'lucide-react'
import {
  clientLogos, approach, engagementSteps, testimonials, recognition, roadmap,
  frameworks, industries, assessmentDomains, faqs,
} from '../data/content'
import { Button, FadeUp, Label, Rule, SectionHeader, ease } from './ui'

export function LogoWall({ title = 'Trusted by teams in fintech, healthcare, manufacturing and SaaS' }) {
  // Two copies back to back so the -50% marquee loop is seamless.
  const loop = [...clientLogos, ...clientLogos]
  return (
    <section className="py-20 md:py-24">
      <div className="wrap">
        <FadeUp className="flex flex-wrap items-end justify-between gap-4">
          <Label className="!text-dim">{title}</Label>
          <Link to="/contact" className="group text-sm text-muted transition-colors hover:text-fg">
            Your company next? <span className="text-accent transition-transform duration-300 inline-block group-hover:translate-x-1">→</span>
          </Link>
        </FadeUp>
        <FadeUp delay={0.1} className="mt-8 border-y border-line">
          <div className="group/marquee flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <ul className="flex shrink-0 animate-[marquee_45s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
              {loop.map((c, i) => (
                <li
                  key={i}
                  aria-hidden={i >= clientLogos.length}
                  className="group flex h-24 w-44 shrink-0 items-center justify-center border-r border-line transition-colors duration-300 hover:bg-ink-2 md:h-32 md:w-60"
                >
                  {/* Equal visual area for every logo: wide marks get shorter, compact marks taller. */}
                  <img
                    src={`/clients/${c.file}.png`}
                    alt={i < clientLogos.length ? c.name : ''}
                    loading="lazy"
                    style={{ '--h': `${Math.sqrt(4200 / c.aspect).toFixed(1)}px` }}
                    className="h-[calc(var(--h)*0.78)] w-auto opacity-55 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 md:h-[var(--h)]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

export function Approach({ index = '03' }) {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHeader
          index={index}
          label="Our approach"
          title="Fortify. Respond. Rise."
          muted="A security partner for before, during and after an incident."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
          {approach.map((phase, i) => (
            <FadeUp key={phase.name} delay={i * 0.1} className="flex flex-col bg-ink p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <h3 className="font-wide text-2xl font-semibold text-fg">{phase.name}</h3>
                <span className="font-mono text-xs text-dim">0{i + 1}</span>
              </div>
              <p className="mt-2 text-sm text-accent">{phase.lede}</p>
              <ul className="mt-8 space-y-6">
                {phase.items.map((it) => (
                  <li key={it.title} className="border-t border-line pt-5">
                    <p className="text-[15px] font-medium text-fg">{it.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed">{it.text}</p>
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Sticky heading on the left, steps on the right; each step's index lights up as it reaches the middle. */
function Step({ step, i }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'start 45%'] })
  const color = useTransform(scrollYProgress, [0, 1], ['#5d6b81', '#5fd8f0'])
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <li ref={ref} className="relative grid grid-cols-[3.5rem_1fr] gap-4 py-8 md:grid-cols-[5rem_1fr]">
      <div className="absolute inset-x-0 top-0 h-px bg-line" />
      <motion.div style={{ width }} className="absolute left-0 top-0 h-px bg-accent" />
      <motion.span style={{ color }} className="font-mono text-sm">{String(i + 1).padStart(2, '0')}</motion.span>
      <div>
        <h3 className="font-wide text-xl font-medium text-fg md:text-2xl">{step.title}</h3>
        <p className="mt-2 max-w-xl leading-relaxed">{step.text}</p>
      </div>
    </li>
  )
}

export function Process({ index = '05' }) {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <Label><span className="text-accent">{index}</span>&nbsp;&nbsp;How we work</Label>
            <h2 className="mt-6 font-wide text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-fg sm:text-4xl">
              From first call <span className="text-dim">to continued support.</span>
            </h2>
            <p className="mt-6 leading-relaxed">
              Every engagement starts with a free technical assessment, so you see our work before you commit.
            </p>
          </div>
        </div>
        <ol className="md:col-span-8">
          {engagementSteps.map((s, i) => <Step key={s.title} step={s} i={i} />)}
        </ol>
      </div>
    </section>
  )
}

const SLIDE_MS = 8000

export function Testimonials({ index = '06' }) {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const t = testimonials[i]
  const go = (d) => setI((n) => (n + d + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => go(1), SLIDE_MS)
    return () => clearTimeout(id)
  }, [i, paused])

  return (
    <section className="bg-ink-2 py-24 md:py-32" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="wrap">
        <div className="flex items-center justify-between">
          <Label><span className="text-accent">{index}</span>&nbsp;&nbsp;Client voices</Label>
          <div className="flex items-center gap-2">
            <span className="mr-3 font-mono text-xs text-dim">{i + 1} / {testimonials.length}</span>
            {[[-1, ArrowLeft, 'Previous'], [1, ArrowRight, 'Next']].map(([d, Icon, label]) => (
              <button
                key={label}
                onClick={() => go(d)}
                aria-label={`${label} testimonial`}
                className="grid h-10 w-10 place-items-center rounded-md border border-line-strong text-fg transition-colors duration-300 hover:border-fg hover:bg-white/[0.04]"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
        <div className="relative mt-6 h-px bg-line">
          <motion.div
            key={`${i}-${paused}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: paused ? 0 : 1 }}
            transition={{ duration: paused ? 0.3 : SLIDE_MS / 1000, ease: 'linear' }}
            className="absolute inset-0 origin-left bg-accent"
          />
        </div>
        <div className="relative min-h-[22rem] pt-12 md:min-h-[19rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease }}
              className="grid gap-10 md:grid-cols-12"
            >
              <blockquote className="font-wide text-2xl font-normal leading-[1.35] tracking-[-0.01em] text-fg md:col-span-9 md:text-[2rem]">
                <span className="text-accent">“</span>{t.quote}<span className="text-accent">”</span>
              </blockquote>
              <figcaption className="flex items-center gap-4 md:col-span-3 md:flex-col md:items-start md:pt-2">
                <img src={t.photo} alt={t.name} className="h-14 w-14 rounded-full object-cover grayscale" loading="lazy" />
                <div>
                  <p className="font-medium text-fg">{t.name}</p>
                  <p className="text-sm">{t.org}</p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export function Recognition({ index = '07' }) {
  return (
    <section className="py-24 md:py-28">
      <div className="wrap">
        <SectionHeader index={index} label="Recognition" title="Built in India's leading" muted="startup and security ecosystems." />
        <div className="mt-14 grid gap-px overflow-hidden border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {recognition.map((r, i) => (
            <FadeUp key={r.title} delay={i * 0.08} className="bg-ink py-8 pr-6 sm:px-6 sm:first:pl-0">
              <p className="font-medium text-fg">{r.title}</p>
              <p className="mt-2 text-sm leading-relaxed">{r.text}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export function VcisoTable({ index }) {
  const rows = [
    ['Cost', 'A fraction of a full-time executive', 'High-priced senior hire'],
    ['Expertise', 'Collective, cross-industry team', 'One person’s experience'],
    ['Regulatory reach', 'ISO, SOC 2, PCI DSS, HIPAA, SEBI, RBI, IRDAI…', 'Usually one regulatory landscape'],
    ['Strategy', 'Proactive roadmap, quick to adopt new approaches', 'Often traditional, slower to change'],
    ['Organisational knowledge', 'Built up through structured onboarding', 'Deep, embedded in company culture'],
  ]
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHeader
          index={index}
          label="Virtual CISO"
          title="Executive security leadership"
          muted="without the executive overhead."
        />
        <FadeUp className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line-strong">
                <th className="w-1/4 py-4 pr-6 font-mono text-xs font-normal uppercase tracking-[0.14em] text-dim" />
                <th className="py-4 pr-6 font-wide text-base font-semibold text-fg">RES-Q-RITY vCISO</th>
                <th className="py-4 font-wide text-base font-semibold text-muted">In-house CISO</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([k, ours, theirs], i) => (
                <tr key={k} className="border-b border-line transition-colors hover:bg-ink-2">
                  <td className="py-5 pr-6 align-top font-mono text-xs uppercase tracking-[0.1em] text-dim">{k}</td>
                  <td className="py-5 pr-6 align-top text-fg">
                    <span className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{ours}</span>
                  </td>
                  <td className="py-5 align-top">
                    <span className="flex gap-3">
                      {i === rows.length - 1 ? <Check className="mt-0.5 h-4 w-4 shrink-0 text-muted" /> : <Minus className="mt-0.5 h-4 w-4 shrink-0 text-dim" />}
                      {theirs}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeUp>
      </div>
    </section>
  )
}

export function Roadmap({ index }) {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHeader
          index={index}
          label="Roadmap"
          title="Level up your cyber armour,"
          muted="one step at a time."
          text="The sequence we typically run with regulated businesses in BFSI, healthcare and SaaS."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-7">
          {roadmap.map((s, i) => (
            <FadeUp as="li" key={s.title} delay={i * 0.06} className="group flex min-h-[13rem] flex-col bg-ink p-6 transition-colors duration-300 hover:bg-ink-2">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-auto pt-10 font-medium leading-snug text-fg">{s.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-dim">{s.tag}</p>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function FrameworksBand() {
  const items = [...frameworks, ...frameworks]
  return (
    <div className="border-y border-line bg-ink-2 py-5" aria-label="Frameworks we support">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center hover:[animation-play-state:paused]">
          {items.map((f, i) => (
            <span key={i} className="flex items-center whitespace-nowrap font-mono text-sm uppercase tracking-[0.12em] text-muted">
              <span className="px-7 transition-colors hover:text-fg">{f}</span>
              <span className="text-accent/60">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* Industry list on the left drives the detail panel on the right. */
export function Industries({ index = '04' }) {
  const [active, setActive] = useState(0)
  const ind = industries[active]
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHeader
          index={index}
          label="Industries"
          title="We speak your regulator’s language."
          muted="Controls mapped to the rules you answer to."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <ul className="md:col-span-5" role="tablist">
            {industries.map((it, i) => (
              <li key={it.name}>
                <button
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`group relative flex w-full items-center gap-5 border-t border-line py-6 text-left ${i === industries.length - 1 ? 'border-b' : ''}`}
                >
                  {active === i && (
                    <motion.span layoutId="industry-bar" className="absolute -top-px left-0 h-px w-full bg-accent" transition={{ duration: 0.4, ease }} />
                  )}
                  <span className={`font-mono text-xs transition-colors ${active === i ? 'text-accent' : 'text-dim'}`}>0{i + 1}</span>
                  <span className={`font-wide text-xl font-medium transition-all duration-300 md:text-2xl ${active === i ? 'translate-x-1 text-fg' : 'text-muted group-hover:text-fg'}`}>
                    {it.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="relative md:col-span-6 md:col-start-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
                className="rounded-lg border border-line bg-ink-2 p-7 md:p-9"
              >
                <p className="text-lg leading-relaxed text-fg">{ind.text}</p>
                <Label className="mt-8 !text-dim">Frameworks & regulators</Label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ind.frameworks.map((f) => (
                    <span key={f} className="rounded border border-line-strong px-2.5 py-1 font-mono text-xs text-fg">{f}</span>
                  ))}
                </div>
                <Label className="mt-8 !text-dim">Clients in this sector</Label>
                <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
                  {ind.clients.map((c) => (
                    <img key={c} src={`/clients/${c}.png`} alt={clientLogos.find((l) => l.file === c)?.name} className="h-7 w-auto opacity-70" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

const statusTone = {
  'High risk': 'text-[#ff8a7a]',
  'Needs attention': 'text-[#f2c66d]',
  Adequate: 'text-muted',
  Strong: 'text-accent',
}

function barTone(score) {
  if (score >= 75) return 'bg-accent'
  if (score >= 50) return 'bg-muted'
  if (score >= 35) return 'bg-[#f2c66d]'
  return 'bg-[#ff8a7a]'
}

/* An illustrative report so visitors can see what the free assessment produces. */
function SampleReport() {
  const overall = Math.round(assessmentDomains.reduce((s, d) => s + d.score, 0) / assessmentDomains.length)
  return (
    <div className="overflow-hidden rounded-lg border border-line-strong bg-ink-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((d) => <span key={d} className="h-2.5 w-2.5 rounded-full bg-line-strong" />)}
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">Sample report · illustrative</span>
      </div>
      <div className="grid gap-6 border-b border-line p-6 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">Security posture assessment</p>
          <p className="mt-2 font-wide text-xl font-semibold text-fg">Example Fintech Pvt. Ltd.</p>
        </div>
        <div className="sm:text-right">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">Overall</p>
          <p className="mt-1 font-wide text-4xl font-semibold tabular-nums text-fg">{overall}<span className="text-lg text-dim">/100</span></p>
        </div>
      </div>
      <ul className="divide-y divide-line">
        {assessmentDomains.map((d, i) => (
          <li key={d.name} className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 px-6 py-3.5 sm:grid-cols-[13rem_1fr_7.5rem]">
            <span className="text-sm text-fg">{d.name}</span>
            <span className={`text-right text-xs sm:order-3 ${statusTone[d.status]}`}>{d.status}</span>
            <span className="col-span-2 h-1 overflow-hidden rounded-full bg-line sm:col-span-1">
              <motion.span
                className={`block h-full rounded-full ${barTone(d.score)}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${d.score}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease }}
              />
            </span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-4 border-t border-line px-6 py-4 text-xs">
        <span className="text-dim">Prioritised recommendations</span>
        <span className="text-accent">Remediation roadmap included</span>
      </div>
    </div>
  )
}

export function Assessment({ index = '06' }) {
  const covers = [
    'Posture review across identity, endpoints, cloud, email and vendors',
    'Gaps mapped to the frameworks your customers and regulators use',
    'A prioritised list of fixes, from quick wins to longer projects',
    'A walkthrough call with our consultants. No obligation.',
  ]
  return (
    <section className="py-24 md:py-32">
      <div className="wrap grid items-center gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Label><span className="text-accent">{index}</span>&nbsp;&nbsp;Free initial assessment</Label>
          <h2 className="mt-6 font-wide text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-fg sm:text-4xl">
            See your security posture <span className="text-dim">before you spend a rupee.</span>
          </h2>
          <ul className="mt-8">
            {covers.map((c, i) => (
              <li key={c} className={`flex gap-4 border-t border-line py-4 text-[15px] ${i === covers.length - 1 ? 'border-b' : ''}`}>
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />{c}
              </li>
            ))}
          </ul>
          <Button to="/contact" className="mt-10">Claim your free assessment</Button>
        </div>
        <FadeUp delay={0.1} className="md:col-span-7">
          <SampleReport />
        </FadeUp>
      </div>
    </section>
  )
}

export function Faq({ index = '10' }) {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHeader index={index} label="FAQ" title="Questions we hear" muted="most often." />
        <div className="mt-14 md:ml-[25%]">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className={`border-t border-line ${i === faqs.length - 1 ? 'border-b' : ''}`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="group flex w-full items-center gap-6 py-6 text-left">
                  <span className={`flex-1 text-lg transition-colors md:text-xl ${isOpen ? 'text-fg' : 'text-muted group-hover:text-fg'}`}>{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }} className={isOpen ? 'text-accent' : 'text-dim'}>
                    <Plus className="h-5 w-5" strokeWidth={1.5} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.4, ease }} className="overflow-hidden">
                      <p className="max-w-2xl pb-7 leading-relaxed">{f.a}</p>
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
