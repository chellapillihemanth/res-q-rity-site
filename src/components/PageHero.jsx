import { motion } from 'motion/react'
import { Label, Reveal, ease } from './ui'

export default function PageHero({ label, title, muted, text, children }) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-40 pb-16 md:pt-48 md:pb-24">
      <div className="crosshairs absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="wrap relative">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Label><span className="text-accent">/</span>&nbsp;&nbsp;{label}</Label>
        </motion.div>
        <Reveal
          as="h1"
          text={title}
          muted={muted}
          animateOnMount
          delay={0.1}
          className="mt-6 max-w-5xl font-wide text-4xl font-semibold leading-[1.04] tracking-[-0.025em] text-fg sm:text-5xl md:text-6xl lg:text-7xl"
        />
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="text-base leading-relaxed md:col-span-6 md:col-start-7 md:text-lg"
          >
            {text}
          </motion.p>
        </div>
        {children}
      </div>
    </section>
  )
}
