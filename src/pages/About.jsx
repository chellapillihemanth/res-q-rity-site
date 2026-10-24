import { motion } from 'motion/react'
import { Users, Puzzle, Server, Store, Award, Building2, MapPin, CalendarDays } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { FadeIn, GlowOrbs, SectionHeading, SpotlightCard } from '../components/ui'
import { ClientStrip, MissionVision, VcisoCompare } from '../components/sections'

const differentiators = [
  { icon: Users, title: 'Certified professionals', text: 'A team with years of hands-on experience and industry certifications in information security.' },
  { icon: Puzzle, title: 'Custom engagement model', text: 'Every engagement is tailored to your requirements, unlike competitors applying a generic template.' },
  { icon: Server, title: 'SOC-as-a-Service', text: 'Through our tech partnerships you get a Security Operations Center without bearing infrastructure overhead.' },
  { icon: Store, title: 'One-stop shop', text: 'Channel partners with a pool of next-gen security companies, so products and services come from one place.' },
]

const timeline = [
  { icon: CalendarDays, year: '2022', title: 'RES-Q-RITY founded', text: 'Started with one mission: Simplifying Cyber.' },
  { icon: Building2, year: 'NSRCEL', title: 'Incubated at IIM Bangalore', text: 'Backed by one of India\'s leading startup incubators.' },
  { icon: Award, year: '2024', title: 'DSCI membership', text: 'Joined the Data Security Council of India.' },
  { icon: MapPin, year: 'Today', title: 'T-HUB, Hyderabad', text: 'Serving clients across fintech, healthcare, SaaS and manufacturing.' },
]

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About RES-Q-RITY"
        title="A new dimension of security"
        highlight={['dimension', 'security']}
        text="We are a team of certified information security professionals on a mission to make cybersecurity simple, sustainable and scalable for growing businesses."
      />

      <section className="relative px-4 py-24 sm:px-6">
        <GlowOrbs />
        <SectionHeading
          eyebrow="Why us"
          title="What makes us different"
          highlight={['different']}
        />
        <div className="relative mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2">
          {differentiators.map((d, i) => (
            <FadeIn key={d.title} delay={(i % 2) * 0.1}>
              <SpotlightCard className="h-full p-8"><div className="flex gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyber-500/20 to-azure-500/20 text-cyber-300 ring-1 ring-cyber-400/20 transition-transform duration-500 group-hover:scale-110">
                  <d.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{d.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400">{d.text}</p>
                </div>
              </div></SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6">
        <SectionHeading eyebrow="Our journey" title="Milestones so far" highlight={['Milestones']} />
        <div className="relative mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-cyber-400/40 to-transparent lg:block" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="relative text-center"
            >
              <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-full border border-cyber-400/40 bg-ink-900 text-cyber-300 shadow-[0_0_25px_rgba(95,216,240,0.35)]">
                <t.icon className="h-5 w-5" />
              </span>
              <p className="mt-5 font-mono text-sm text-cyber-400">{t.year}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-white">{t.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <MissionVision />
      <ClientStrip title="Our major clients" />
      <VcisoCompare />
      <CTA />
    </>
  )
}
