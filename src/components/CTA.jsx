import { motion } from 'motion/react'
import { ShieldCheck } from 'lucide-react'
import { Button, RevealText } from './ui'
import { contact } from '../data/content'

export default function CTA() {
  return (
    <section className="relative px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-cyber-400/20 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-950 px-6 py-16 text-center sm:px-12 md:py-20"
      >
        <div className="bg-grid absolute inset-0 opacity-60 mask-radial" />
        <div className="absolute -top-24 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-cyber-500/25 blur-[100px]" />
        <div className="absolute inset-y-0 left-0 w-full animate-scan bg-gradient-to-b from-transparent via-cyber-400/10 to-transparent [height:30%]" />

        <div className="relative">
          <div className="relative mx-auto mb-8 grid h-16 w-16 place-items-center">
            <span className="absolute inset-0 animate-pulse-ring rounded-full border border-cyber-400/60" />
            <span className="absolute inset-0 animate-pulse-ring rounded-full border border-cyber-400/60 [animation-delay:1.2s]" />
            <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-cyber-500 to-azure-500 shadow-[0_0_40px_rgba(34,195,230,0.6)]">
              <ShieldCheck className="h-7 w-7 text-white" />
            </span>
          </div>
          <RevealText
            text="Secure your tomorrow, today."
            highlight={['tomorrow', 'today']}
            className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl"
          />
          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            Talk to our experts and get a no-obligation security posture review tailored to your business, industry and regulators.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/contact">Book a consultation</Button>
            <Button href={`mailto:${contact.email}`} variant="ghost">{contact.email}</Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
