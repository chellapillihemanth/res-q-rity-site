import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import CTA from '../components/CTA'
import HeroField from '../components/HeroField'
import { ArrowLink, Button, FadeUp, Label, Photo, Rule, SectionHeader, ease } from '../components/ui'
import { Approach, Assessment, CaseStudy, Faq, FrameworksBand, ImageBand, Industries, LogoWall, Process, Testimonials } from '../components/sections'
import { bookingLink, caseStudies, solutionProblems, whatsappHref } from '../data/content'

const credentials = ['DSCI member', 'Incubated at IIM Bangalore · NSRCEL', 'Based at T-Hub']

// Entry points at the foot of the hero: each routes a visitor straight to what they came for.
const entryPoints = [
  { title: 'Get audit-ready', tags: 'ISO 27001 · SOC 2 · PCI DSS', to: '/services#audit', photo: '/images/roadmap-discussion.jpg' },
  { title: 'Hire a virtual CISO', tags: 'Strategy · Risk · Policy', to: '/services#program', photo: '/images/advisory-session.jpg' },
  { title: 'Monitor & respond', tags: 'SOC · SIEM · EDR', to: '/solutions#visibility', photo: '/images/circuit-board.jpg' },
  { title: 'Not sure where to start?', tags: 'Free technical assessment', to: '/contact#enquiry', photo: '/images/analytics-dashboard.jpg' },
]

function EntryTile({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.15 + i * 0.08, ease }}
      className={`border-line ${i % 2 ? 'border-l' : ''} ${i > 1 ? 'border-t lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}
    >
      <Link to={item.to} className="group relative flex h-36 flex-col justify-between overflow-hidden p-5 md:h-44 md:p-6">
        {/* Photo fades in behind the tile on hover (faintly visible on touch screens). */}
        <img
          src={item.photo}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 transition-all duration-700 ease-out [filter:saturate(0.6)_brightness(0.7)] group-hover:scale-100 group-hover:opacity-60 md:opacity-0"
        />
        <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <span aria-hidden className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />

        <span className="relative flex items-center justify-between">
          <span className="font-mono text-xs text-dim transition-colors duration-300 group-hover:text-accent">0{i + 1}</span>
          <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-500 group-hover:rotate-45 group-hover:text-fg" strokeWidth={1.5} />
        </span>
        <span className="relative">
          <span className="block font-wide text-base font-medium text-fg transition-transform duration-500 group-hover:translate-x-1 md:text-xl">
            {item.title}
          </span>
          <span className="mt-1.5 block font-mono text-xs tracking-wide text-dim transition-colors duration-300 group-hover:text-fg/70">
            {item.tags}
          </span>
        </span>
      </Link>
    </motion.div>
  )
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.3 }}
        className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_55%,transparent_82%)]"
      >
        <HeroField />
      </motion.div>

      {/* Column guides that line up with the entry tiles below. */}
      <div aria-hidden className="wrap pointer-events-none absolute inset-0 grid grid-cols-2 [mask-image:linear-gradient(to_bottom,transparent_45%,black_92%)] lg:grid-cols-4">
        {[0, 1, 2, 3].map((c) => (
          <motion.span
            key={c}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.6, delay: 0.1 + c * 0.12, ease }}
            className={`origin-top border-line ${c ? 'border-l' : ''} ${c % 2 === 0 && c ? 'max-lg:border-l-0' : ''} ${c > 1 ? 'max-lg:hidden' : ''}`}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity: fade }} className="wrap relative flex flex-1 flex-col items-center justify-center pt-32 pb-16 text-center">
        <motion.ul
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
          className="flex flex-col items-center justify-center gap-x-3 gap-y-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted sm:flex-row sm:flex-wrap"
        >
          {credentials.map((c, i) => (
            <motion.li key={c} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }} className="flex items-center gap-3">
              {i > 0 && <span className="text-dim max-sm:hidden">/</span>}
              {c}
            </motion.li>
          ))}
        </motion.ul>

        <h1 className="mt-8 max-w-6xl font-wide text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-fg sm:text-6xl md:text-7xl lg:text-[4.9rem]">
          {['Security that runs', 'your program,'].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className={`block ${i ? 'text-muted' : ''}`}
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.1, delay: 0.25 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden pb-[0.2em]">
            <motion.span
              className="relative inline-block text-muted"
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.1, delay: 0.49, ease }}
            >
              not just your audit.
              {/* Hand-drawn stroke under the key word, drawn once the line has landed. */}
              <svg aria-hidden viewBox="0 0 400 20" preserveAspectRatio="none" className="absolute -bottom-[0.12em] left-[2%] h-[0.22em] w-[94%] overflow-visible">
                <motion.path
                  d="M2 14 C 90 4, 210 2, 398 10"
                  fill="none"
                  stroke="#5fd8f0"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.35, ease: 'easeInOut' }}
                />
              </svg>
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease }}
          className="mt-8 max-w-[40rem] text-base leading-relaxed md:text-lg"
        >
          vCISO, compliance, 24x7 SOC and forensics from one accountable partner. For growing fintech, SaaS,
          healthcare and manufacturing teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          <Button {...bookingLink}>Book a free assessment</Button>
          <ArrowLink to="/services">Explore our services</ArrowLink>
          {whatsappHref && (
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
              <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp us
            </a>
          )}
        </motion.div>
      </motion.div>

      <div className="relative border-t border-line">
        <div className="wrap">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="border-b border-line py-3 font-mono text-xs uppercase tracking-[0.14em] text-dim"
          >
            Where do you need help?
          </motion.p>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {entryPoints.map((item, i) => <EntryTile key={item.title} item={item} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
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
            ['11', 'Enterprise clients across fintech, healthcare, manufacturing and SaaS'],
            ['15', 'Frameworks and regulations covered, from ISO 27001 and SOC 2 to DPDPA and RBI'],
            ['20+', 'Technology partners, from CrowdStrike to Nozomi Networks'],
          ].map(([n, t], i) => (
            <FadeUp key={t} delay={i * 0.1} className="bg-ink py-8 md:px-8 md:first:pl-0">
              <p className="font-wide text-4xl font-semibold tabular-nums tracking-[-0.03em] text-fg md:text-5xl">{n}</p>
              <p className="mt-3 max-w-[16rem] text-sm leading-relaxed">{t}</p>
            </FadeUp>
          ))}
        </div>
        <FadeUp className="mt-10 flex flex-wrap gap-x-10 gap-y-4 md:ml-[25%]">
          <ArrowLink to="/about">More about RES-Q-RITY</ArrowLink>
          <ArrowLink to="/about#leadership">Meet our leadership</ArrowLink>
        </FadeUp>

        <div className="mt-20 grid gap-5 md:grid-cols-12 md:gap-6">
          <Photo
            src="/images/strategy-meeting.jpg"
            alt="Business professionals discussing strategy around a laptop"
            caption="Strategy & governance workshops"
            className="aspect-[16/10] md:col-span-8"
            imgClassName="object-[60%_30%]"
          />
          <Photo
            src="/images/late-night-team.jpg"
            alt="Two colleagues working late at a desk in a dim office"
            caption="Working alongside your team"
            className="aspect-[4/5] md:col-span-4 md:mt-24"
            imgClassName="object-[72%_center]"
          />
        </div>
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
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHeader index="05" label="Case study" title="What an engagement" muted="actually looks like." />
        <FadeUp className="mt-14"><CaseStudy c={caseStudies[0]} /></FadeUp>
        <FadeUp className="mt-8"><ArrowLink to="/case-studies">All case studies and client work</ArrowLink></FadeUp>
      </div>
    </section>
  )
}

/* Problems first; the vendor list lives on the Solutions page as a footnote to each fix. */
function Problems() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHeader
          index="09"
          label="Problems we solve"
          title="Tell us what keeps you up,"
          muted="and we'll show you the fix."
          text="Each of these has a tested answer: designed by us, deployed with your team, and run with proven tools where they earn their place."
        />
        <FadeUp className="mt-14 md:ml-[25%]">
          <ul className="border-t border-line">
            {solutionProblems.slice(0, 6).map((p, i) => (
              <li key={p.id}>
                <Link to={'/solutions#' + p.id} className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-line py-5 transition-colors hover:bg-ink-2 sm:px-2">
                  <span className="font-mono text-xs text-dim group-hover:text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[15px] text-fg md:text-lg">{p.problem}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:rotate-45 group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8"><ArrowLink to="/solutions">See all ten problems and how we solve them</ArrowLink></div>
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
      <ImageBand />
      <Approach index="03" />
      <Industries index="04" />
      <SelectedWork />
      <Assessment index="06" />
      <Process index="07" />
      <Testimonials index="08" />
      <Problems />
      <Faq index="10" />
      <CTA />
    </>
  )
}
