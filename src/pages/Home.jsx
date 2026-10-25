import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, animate, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import CTA from '../components/CTA'
import { ArrowLink, Button, FadeUp, Label, Rule, SectionHeader, ease } from '../components/ui'
import { Approach, Assessment, Faq, FrameworksBand, Industries, LogoWall, Process, Testimonials } from '../components/sections'
import { caseWork, partnerCategories } from '../data/content'

const credentials = [
  ['Founded', '2022, Hyderabad'],
  ['Member', 'Data Security Council of India'],
  ['Incubated', 'IIM Bangalore · NSRCEL'],
  ['Based at', 'T-Hub, Knowledge City'],
]

// Positions of the "sensor" crosshairs that blink in the hero field.
const sensors = [
  ['12%', '22%', '0s'], ['84%', '18%', '1.1s'], ['22%', '72%', '2s'],
  ['76%', '64%', '0.6s'], ['50%', '12%', '1.6s'], ['92%', '82%', '2.4s'],
]

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const mx = useSpring(useMotionValue(0), { stiffness: 40, damping: 20 })
  const my = useSpring(useMotionValue(0), { stiffness: 40, damping: 20 })

  function onMove(e) {
    mx.set((e.clientX / window.innerWidth - 0.5) * -16)
    my.set((e.clientY / window.innerHeight - 0.5) * -16)
    // Drive the flashlight via CSS variables so the hero doesn't re-render on every mouse move.
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--x', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      style={{ '--x': '-999px', '--y': '-999px' }}
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div className="crosshairs absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,black,transparent)]" />
      <div
        aria-hidden
        className="crosshairs-lit absolute inset-0 hidden opacity-70 md:block"
        style={{ maskImage: 'radial-gradient(220px circle at var(--x) var(--y), black, transparent)', WebkitMaskImage: 'radial-gradient(220px circle at var(--x) var(--y), black, transparent)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{ background: 'radial-gradient(500px circle at var(--x) var(--y), rgb(95 216 240 / 0.05), transparent 60%)' }}
      />
      {sensors.map(([left, top, delay]) => (
        <span
          key={left + top}
          aria-hidden
          style={{ left, top, animationDelay: delay }}
          className="absolute hidden h-3 w-3 animate-blink md:block"
        >
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-accent" />
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-accent" />
        </span>
      ))}

      {/* The logo's emblem as a quiet watermark behind the headline. */}
      <motion.div
        aria-hidden
        style={{ x: mx, y: my }}
        className="pointer-events-none absolute left-1/2 top-[46%] aspect-square w-[min(80vw,40rem)] -translate-x-1/2 -translate-y-1/2 bg-[url(/logo.png)] bg-[length:auto_100%] bg-left bg-no-repeat opacity-[0.045]"
      />

      <motion.div style={{ y, opacity: fade }} className="wrap relative flex flex-1 flex-col items-center justify-center pt-28 pb-16 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <Label>
            <span className="text-accent">●</span>&nbsp;&nbsp;Cybersecurity consulting · Audits · Managed security
          </Label>
        </motion.div>

        <h1 className="mt-8 max-w-6xl font-wide text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-fg sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {[['Invest in cyber', false], ['to accelerate your', true], ['transformation.', true]].map(([line, muted], i) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className={`block ${muted ? 'text-muted' : ''}`}
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease }}
          className="mt-8 max-w-xl text-base leading-relaxed md:text-lg"
        >
          We run your security program, get you audit-ready and source the right tools, so you can scale without
          carrying the risk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button to="/contact">Book a free assessment</Button>
          <Button to="/services" variant="secondary">Our services</Button>
        </motion.div>
      </motion.div>

      <div className="relative border-t border-line">
        <div className="wrap grid grid-cols-2 lg:grid-cols-4">
          {credentials.map(([k, v], i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 + i * 0.08, duration: 0.6 }}
              className={`py-5 ${i % 2 ? 'pl-5' : 'pr-5'} ${i > 1 ? 'border-t border-line lg:border-t-0' : ''} ${i ? 'lg:border-l lg:border-line lg:pl-6' : ''} ${i % 2 ? 'border-l border-line' : ''}`}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">{k}</p>
              <p className="mt-1 text-sm text-fg">{v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ to, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease, onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{prefix}{n}{suffix}</span>
}

function Intro() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHeader
          index="01"
          label="Who we are"
          title="Certified practitioners,"
          muted="on a mission to simplify cyber."
          text="No generic templates. Every engagement is built around your business, your regulators and your risk appetite, by a team that has implemented these controls before."
        />
        <div className="mt-16 grid gap-px overflow-hidden border-y border-line bg-line md:ml-[25%] md:grid-cols-3">
          {[
            [{ to: 11, suffix: '+' }, 'Enterprise clients across fintech, healthcare, manufacturing and SaaS'],
            [{ to: 20, suffix: '+' }, 'Technology partners, from CrowdStrike to Nozomi Networks'],
            [{ prefix: '35–', to: 40, suffix: '%' }, 'Faster ISO 27001 implementation with our tool advisory'],
          ].map(([n, t], i) => (
            <FadeUp key={t} delay={i * 0.1} className="bg-ink py-8 md:px-8 md:first:pl-0">
              <p className="font-wide text-4xl font-semibold tabular-nums tracking-[-0.03em] text-fg md:text-5xl"><CountUp {...n} /></p>
              <p className="mt-3 max-w-[16rem] text-sm leading-relaxed">{t}</p>
            </FadeUp>
          ))}
        </div>
        <FadeUp className="mt-10 flex flex-wrap gap-x-10 gap-y-4 md:ml-[25%]">
          <ArrowLink to="/about">More about RES-Q-RITY</ArrowLink>
          <ArrowLink to="/about#leadership">Meet our leadership</ArrowLink>
        </FadeUp>
      </div>
    </section>
  )
}

const serviceRows = [
  { to: '/services#program', title: 'Build your security program', text: 'Virtual CISO, risk and gap assessments, incident response, vendor risk and awareness programs.', tags: ['vCISO', 'Risk', 'IR plan', 'DR & BCP'] },
  { to: '/services#audit', title: 'Audit & compliance', text: 'Readiness through certification for the frameworks your customers and regulators ask for.', tags: ['ISO 27001', 'SOC 2', 'PCI DSS', 'HIPAA'] },
  { to: '/services#ondemand', title: 'On-demand security experts', text: 'Senior people when you need them, from incident response to tabletop exercises.', tags: ['Incident response', 'Tabletops'] },
  { to: '/solutions', title: 'Managed SOC & security products', text: 'EDR, SIEM, DLP, email security and more, sourced and deployed through our partners.', tags: ['EDR', 'SIEM', 'DLP', 'SOC'] },
]

function Services() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHeader index="02" label="Services" title="One partner for strategy, compliance" muted="and the tools in between." />
        <ul className="mt-14 border-t border-line">
          {serviceRows.map((s, i) => (
            <FadeUp as="li" key={s.title} delay={i * 0.05}>
              <Link to={s.to} className="group relative grid gap-4 border-b border-line py-8 transition-colors duration-300 hover:bg-ink-2 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.15fr)_auto] md:items-center md:gap-10 md:px-4">
                <span className="font-mono text-xs text-dim transition-colors group-hover:text-accent">0{i + 1}</span>
                <h3 className="font-wide text-2xl font-medium text-fg transition-transform duration-500 group-hover:translate-x-2 md:text-[1.7rem]">{s.title}</h3>
                <div>
                  <p className="leading-relaxed">{s.text}</p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-dim">
                    {s.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
                <span className="hidden justify-self-end md:block">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-fg transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
              </Link>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  )
}

function SelectedWork() {
  const logos = { 'Quartic.ai': 'quartic', 'Great Learning': 'great-learning', 'Synergy Software Solutions': 'synergy' }
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHeader index="05" label="Selected work" title="Real engagements," muted="real outcomes." />
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {caseWork.map((c, i) => (
            <FadeUp key={c.client} delay={i * 0.1} className="group">
              <div className="flex h-44 items-center justify-center rounded-lg border border-line bg-ink-2 transition-colors duration-500 group-hover:border-line-strong">
                <img src={`/clients/${logos[c.client]}.png`} alt={c.client} className="max-h-12 max-w-[60%] opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100" />
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-dim">{c.sector}</p>
              <h3 className="mt-2 font-wide text-xl font-medium text-fg">{c.client}</h3>
              <p className="mt-2 leading-relaxed">{c.work}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHeader
          index="09"
          label="Technology partners"
          title="We close tooling gaps,"
          muted="so you don't have to go vendor shopping."
          text="As a value-added channel partner we recommend, source and deploy the right product for the job, and only where it fits."
        />
        <FadeUp className="mt-14 md:ml-[25%]">
          <dl className="border-t border-line">
            {partnerCategories.slice(0, 7).map((c) => (
              <div key={c.id} className="grid gap-1 border-b border-line py-4 text-sm transition-colors hover:bg-ink-2 sm:grid-cols-[16rem_1fr] sm:gap-6 sm:px-2">
                <dt className="text-muted">{c.title}</dt>
                <dd className="text-fg">{c.partners.map((p) => p.name).join(' · ')}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8"><ArrowLink to="/solutions">All solutions and partners</ArrowLink></div>
        </FadeUp>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <LogoWall />
      <Intro />
      <FrameworksBand />
      <Services />
      <Approach index="03" />
      <Industries index="04" />
      <SelectedWork />
      <Assessment index="06" />
      <Process index="07" />
      <Testimonials index="08" />
      <Partners />
      <Faq index="10" />
      <CTA />
    </>
  )
}
