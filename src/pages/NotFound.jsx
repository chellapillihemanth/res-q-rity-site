import { motion } from 'motion/react'
import ParticleField from '../components/ParticleField'
import { Button } from '../components/ui'

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 text-center">
      <div className="bg-grid mask-radial absolute inset-0" />
      <ParticleField density={0.00005} />
      <div className="relative">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-display text-[8rem] font-bold leading-none text-gradient sm:text-[12rem]"
        >
          404
        </motion.p>
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyber-400">Access denied: page not found</p>
        <p className="mx-auto mt-4 max-w-md text-slate-400">The page you are looking for has moved or never existed.</p>
        <Button to="/" className="mt-10">Back to safety</Button>
      </div>
    </section>
  )
}
