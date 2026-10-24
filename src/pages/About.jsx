import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { FadeUp, Label, SectionHeader } from '../components/ui'
import { LogoWall, Recognition, Testimonials, VcisoTable } from '../components/sections'

const differentiators = [
  { title: 'Certified practitioners', text: 'Years of hands-on experience and industry certifications across information security, audit and governance.' },
  { title: 'A custom engagement model', text: 'We tailor every engagement to your requirements, where many competitors apply a generic template.' },
  { title: 'SOC-as-a-Service', text: 'Through our technology partners you get a Security Operations Center without carrying the infrastructure cost.' },
  { title: 'One place for services and products', text: 'As channel partners to next-generation security vendors, we can advise on, source and run the tools too.' },
]

const timeline = [
  ['2022', 'RES-Q-RITY founded on the mantra of “Simplifying Cyber”.'],
  ['NSRCEL', 'Incubated at IIM Bangalore’s startup incubator.'],
  ['2024', 'Became a member of the Data Security Council of India (DSCI).'],
  ['Today', 'Serving clients in India and abroad from T-Hub, Hyderabad.'],
]

/* Words brighten one by one as the statement scrolls past. */
function Word({ children, progress, range }) {
  const color = useTransform(progress, range, ['#5d6b81', '#e8eef7'])
  return <motion.span style={{ color }}>{children} </motion.span>
}

function Statement({ label, text }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 50%'] })
  const words = text.split(' ')
  return (
    <div ref={ref} className="grid gap-6 border-t border-line pt-8 md:grid-cols-12">
      <Label className="md:col-span-3">{label}</Label>
      <p className="font-wide text-3xl font-semibold leading-[1.15] tracking-[-0.02em] md:col-span-9 md:text-5xl">
        {words.map((w, i) => (
          <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>{w}</Word>
        ))}
      </p>
    </div>
  )
}

export default function About() {
  return (
    <>
      <PageHero
        label="About"
        title="A new dimension"
        muted="of security."
        text="RES-Q-RITY is a team of certified information security professionals. Since 2022 we have helped fintechs, healthcare providers, manufacturers and SaaS companies build security that is simple, sustainable and ready to scale."
      />

      <section className="py-24 md:py-32">
        <div className="wrap space-y-20">
          <Statement label="Mission" text="Modular security. Meaningful results. Mutual growth." />
          <Statement label="Vision" text="A trusted security ally. Designed for sustainability. Secured to scale with you." />
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="wrap">
          <SectionHeader index="01" label="Why RES-Q-RITY" title="What makes us" muted="different." />
          <div className="mt-14 grid gap-x-10 md:ml-[25%] md:grid-cols-2">
            {differentiators.map((d, i) => (
              <FadeUp key={d.title} delay={(i % 2) * 0.1} className="border-t border-line py-8">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-wide text-xl font-medium text-fg">{d.title}</h3>
                <p className="mt-2 leading-relaxed">{d.text}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="wrap">
          <SectionHeader index="02" label="Journey" title="Small team," muted="steady progress." />
          <ol className="mt-14 md:ml-[25%]">
            {timeline.map(([year, text], i) => (
              <FadeUp as="li" key={year} delay={i * 0.08} className="grid grid-cols-[6rem_1fr] gap-6 border-t border-line py-6 last:border-b md:grid-cols-[10rem_1fr]">
                <span className="font-wide text-lg font-semibold text-fg">{year}</span>
                <span className="leading-relaxed">{text}</span>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      <Recognition index="03" />
      <Testimonials index="04" />
      <LogoWall title="Our clients" />
      <VcisoTable index="05" />
      <CTA />
    </>
  )
}
