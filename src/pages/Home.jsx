import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react'
import { ShieldCheck, Activity, Lock, ArrowUpRight, Award, Building2, Rocket, Layers } from 'lucide-react'
import ParticleField from '../components/ParticleField'
import CTA from '../components/CTA'
import { Button, Counter, Eyebrow, FadeIn, GlowOrbs, SectionHeading, SpotlightCard } from '../components/ui'
import { ClientStrip, MissionVision, PartnerStrip, Roadmap, VcisoCompare } from '../components/sections'
import { pillars, serviceTracks, stats } from '../data/content'

const ease = [0.22, 1, 0.36, 1]
const industries = ['Fintech', 'Healthcare', 'Manufacturing', 'SaaS', 'BFSI']

function CyclingWord() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % industries.length), 2200)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="relative inline-grid h-[1.625em] min-w-[6.5em] overflow-hidden align-top text-left leading-[1.625em]">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={industries[i]}
          initial={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-100%', opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.5, ease }}
          className="col-start-1 row-start-1 font-semibold text-cyber-300"
        >
          {industries[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function HeroLine({ words, delay, gradient }) {
  return (
    <span className="block">
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
          <motion.span
            className={`inline-block ${gradient ? 'text-gradient' : ''}`}
            initial={{ y: '110%', rotateX: -60, opacity: 0 }}
            animate={{ y: '0%', rotateX: 0, opacity: 1 }}
            transition={{ duration: 1, delay: delay + i * 0.08, ease }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  )
}

function FloatingChip({ icon: Icon, label, value, className, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, ease }}
      className={`absolute hidden xl:block ${className}`}
    >
      <div className="glass flex animate-float items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)]" style={{ animationDelay: `${delay}s` }}>
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyber-400/15 text-cyber-300"><Icon className="h-4 w-4" /></span>
        <div className="text-left">
          <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{label}</p>
          <p className="text-sm font-semibold text-white">{value}</p>
        </div>
      </div>
    </motion.div>
  )
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const ringScale = useTransform(scrollYProgress, [0, 1], [1, 1.4])

  // Rings lean toward the cursor.
  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 })
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 })
  function onMove(e) {
    mx.set((e.clientX / window.innerWidth - 0.5) * 30)
    my.set((e.clientY / window.innerHeight - 0.5) * 30)
  }

  return (
    <section ref={ref} onMouseMove={onMove} className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <div className="bg-grid mask-radial absolute inset-0" />
      <ParticleField />
      <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azure-500/20 blur-[150px]" />
      <div className="absolute left-1/2 top-[40%] h-80 w-80 -translate-x-1/2 rounded-full bg-cyber-500/20 blur-[120px]" />

      {/* Orbiting rings */}
      <motion.div aria-hidden style={{ x: mx, y: my, scale: ringScale }} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 800 800" className="h-[min(110vw,52rem)] w-[min(110vw,52rem)] opacity-60">
          <defs>
            <linearGradient id="ring" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#5fd8f0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2f6bff" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <g className="origin-center animate-spin-slow" style={{ transformBox: 'fill-box' }}>
            <circle cx="400" cy="400" r="380" fill="none" stroke="url(#ring)" strokeWidth="1" strokeDasharray="2 10" />
          </g>
          <g className="origin-center animate-spin-slow [animation-direction:reverse] [animation-duration:45s]" style={{ transformBox: 'fill-box' }}>
            <circle cx="400" cy="400" r="300" fill="none" stroke="url(#ring)" strokeWidth="1.2" strokeDasharray="120 40 10 40" />
            <circle cx="400" cy="100" r="4" fill="#5fd8f0" />
          </g>
          <g className="origin-center animate-spin-slow [animation-duration:20s]" style={{ transformBox: 'fill-box' }}>
            <circle cx="400" cy="400" r="220" fill="none" stroke="rgba(95,216,240,0.25)" strokeWidth="1" />
            <circle cx="620" cy="400" r="3" fill="#8ae9fb" />
          </g>
        </svg>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[30%] animate-scan bg-gradient-to-b from-transparent via-cyber-400/[0.05] to-transparent" />

      <FloatingChip icon={ShieldCheck} label="Threat status" value="Blocked · 0.4s" className="left-[8%] top-[30%]" delay={1.6} />
      <FloatingChip icon={Activity} label="SOC monitoring" value="24 × 7 live" className="right-[8%] top-[26%]" delay={1.8} />
      <FloatingChip icon={Lock} label="ISO 27001" value="Audit-ready" className="bottom-[22%] left-[11%]" delay={2} />
      <FloatingChip icon={Award} label="Compliance" value="SOC 2 · PCI DSS" className="bottom-[20%] right-[10%]" delay={2.2} />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <Eyebrow>DSCI Member · Incubated at IIM Bangalore NSRCEL</Eyebrow>
        </motion.div>

        <h1 className="mt-8 font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight text-white [perspective:800px] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <HeroLine words={['Invest', 'in', 'Cyber']} delay={0.35} />
          <HeroLine words={['to', 'Accelerate', 'Your']} delay={0.6} gradient />
          <HeroLine words={['Transformation']} delay={0.85} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg"
        >
          <span className="block text-slate-300">A new dimension of security for <CyclingWord /></span>
          vCISO, SOC-as-a-Service, audits & next-gen security products, all from one trusted partner.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button to="/contact">Get a free assessment</Button>
          <Button to="/services" variant="ghost">Explore services</Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#trusted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500 hover:text-cyber-300"
      >
        Scroll
        <span className="flex h-9 w-5 justify-center rounded-full border border-slate-600 pt-1.5">
          <motion.span animate={{ y: [0, 12, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="h-1.5 w-1 rounded-full bg-cyber-400" />
        </span>
      </motion.a>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-900 to-transparent" />
    </section>
  )
}

function AboutIntro() {
  const badges = [
    { icon: Rocket, title: 'Founded 2022', text: 'Built on the mantra of "Simplifying Cyber".' },
    { icon: Building2, title: 'IIM-B NSRCEL', text: 'Incubated at IIM Bangalore. DSCI member since 2024.' },
    { icon: Layers, title: 'One-stop shop', text: 'Channel partner to next-gen security vendors.' },
  ]
  return (
    <section className="relative px-4 py-24 sm:px-6 md:py-32">
      <GlowOrbs />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            center={false}
            eyebrow="Who we are"
            title="Certified experts making security simple"
            highlight={['simple']}
            text="RES-Q-RITY is a team of industry-certified information security professionals. Our custom engagement model is tailored to each client rather than a generic template, and our SOC-as-a-Service gives you enterprise-grade monitoring without the infrastructure overhead."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {badges.map((b, i) => (
              <FadeIn key={b.title} delay={0.1 * i}>
                <div className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-cyber-400/30">
                  <b.icon className="h-5 w-5 text-cyber-400" />
                  <p className="mt-3 font-display font-semibold text-white">{b.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{b.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3} className="mt-10">
            <Button to="/about" variant="ghost">More about us</Button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={0.1 * i} className={i % 2 ? 'translate-y-10' : ''}>
              <SpotlightCard className="p-8">
                <p className="font-display text-4xl font-bold text-white md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} plain={s.plain} className="text-gradient" />
                </p>
                <p className="mt-3 text-sm text-slate-400">{s.label}</p>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pillars() {
  return (
    <section className="relative px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="The 7 pillars"
        title="Navigate the ever-evolving landscape of compliance and security"
        highlight={['compliance', 'security']}
      />
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <FadeIn key={p.title} delay={(i % 4) * 0.08} className={i === 0 ? 'sm:col-span-2 lg:row-span-2' : i >= 5 ? 'lg:col-span-2' : ''}>
            <SpotlightCard className={`h-full p-7 ${i === 0 ? 'flex flex-col justify-between bg-gradient-to-br from-azure-500/10 to-transparent lg:p-10' : ''}`}>
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-cyber-400/20 bg-cyber-400/10 text-cyber-300 transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-cyber-400 group-hover:text-ink-900">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className={`mt-6 font-display font-semibold text-white ${i === 0 ? 'text-2xl lg:text-3xl' : 'text-lg'}`}>{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
              {i === 0 && (
                <p className="mt-8 font-mono text-xs text-slate-500">
                  <span className="text-cyber-400">$</span> scan --apps --network --cloud <span className="animate-pulse text-cyber-300">▋</span>
                </p>
              )}
            </SpotlightCard>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function ServicesPreview() {
  return (
    <section className="relative px-4 py-24 sm:px-6 md:py-32">
      <GlowOrbs />
      <SectionHeading
        eyebrow="What we do"
        title="Three ways we secure your business"
        highlight={['secure']}
        text="Whether you are building a program from scratch, chasing a certification or need an expert tomorrow, we meet you where you are."
      />
      <div className="relative mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-3">
        {serviceTracks.map((s, i) => (
          <FadeIn key={s.id} delay={i * 0.12}>
            <Link to={`/services#${s.id}`} className="block h-full">
              <SpotlightCard className="h-full p-8">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-cyber-400">0{i + 1}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-cyber-400 group-hover:bg-cyber-400 group-hover:text-ink-900">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.items.slice(0, 6).map((it) => (
                    <span key={it} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">{it}</span>
                  ))}
                  {s.items.length > 6 && <span className="rounded-full px-3 py-1 text-xs text-cyber-300">+{s.items.length - 6} more</span>}
                </div>
              </SpotlightCard>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function PartnersPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="px-4 sm:px-6">
        <SectionHeading
          eyebrow="Value-added channel partnerships"
          title="Best-in-class technology, hand-picked for you"
          highlight={['hand-picked']}
          text="As strategic vendor partners we close your tooling gaps, improving implementation efficiency by 35–40%."
        />
      </div>
      <div className="mt-14"><PartnerStrip /></div>
      <FadeIn className="mt-12 text-center">
        <Button to="/solutions" variant="ghost">View all solutions</Button>
      </FadeIn>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <div id="trusted"><ClientStrip /></div>
      <AboutIntro />
      <Pillars />
      <ServicesPreview />
      <Roadmap />
      <VcisoCompare />
      <PartnersPreview />
      <MissionVision />
      <CTA />
    </>
  )
}
