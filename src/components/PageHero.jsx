import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import ParticleField from './ParticleField'
import { Eyebrow, RevealText } from './ui'

export default function PageHero({ eyebrow, title, highlight = [], text, crumb }) {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32 pb-20">
      <div className="bg-grid mask-radial absolute inset-0" />
      <ParticleField density={0.00005} />
      <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azure-500/15 blur-[140px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-900 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 flex items-center justify-center gap-1 font-mono text-xs text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-cyber-300">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-cyber-300">{crumb}</span>
        </motion.nav>
        <Eyebrow>{eyebrow}</Eyebrow>
        <RevealText
          as="h1"
          text={title}
          highlight={highlight}
          delay={0.2}
          className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg"
        >
          {text}
        </motion.p>
      </div>
    </section>
  )
}
