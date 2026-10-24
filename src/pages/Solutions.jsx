import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Star } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { FadeIn, GlowOrbs, SectionHeading, SpotlightCard } from '../components/ui'
import { PartnerStrip } from '../components/sections'
import { partnerCategories } from '../data/content'

export default function Solutions() {
  const [active, setActive] = useState(partnerCategories[0].id)
  const cat = partnerCategories.find((c) => c.id === active)

  return (
    <>
      <PageHero
        crumb="Solutions"
        eyebrow="Value-added channel partnerships"
        title="Next-gen products from one trusted partner"
        highlight={['Next-gen', 'trusted']}
        text="We are not just service providers but strategic vendor partners. We match the right technology to your needs, so you get comprehensive, top-tier protection."
      />

      <section className="relative px-4 py-16 sm:px-6">
        <GlowOrbs />
        <SectionHeading eyebrow="Explore by category" title="Pick a security domain" highlight={['domain']} />

        <div className="relative mx-auto mt-12 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2" role="tablist">
            {partnerCategories.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                onClick={() => setActive(c.id)}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                {active === c.id && (
                  <motion.span layoutId="cat-pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-500 to-azure-500 shadow-[0_0_25px_-5px_rgba(34,195,230,0.8)]" transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
                )}
                <span className={`relative ${active === c.id ? 'text-white' : 'text-slate-400 hover:text-cyber-300'}`}>{c.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12"
            >
              <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-cyber-400">{cat.short}</p>
              <div className={`mx-auto mt-8 grid gap-6 ${cat.partners.length === 1 ? 'max-w-xl' : cat.partners.length === 2 ? 'max-w-4xl md:grid-cols-2' : cat.partners.length === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
                {cat.partners.map((p, i) => (
                  <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                    <SpotlightCard className="h-full p-7">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-2xl font-bold text-white">{p.name}</h3>
                        {p.rating && (
                          <span className="flex shrink-0 items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-xs text-amber-300" title="Gartner Peer Insights rating">
                            <Star className="h-3 w-3 fill-amber-300" /> {p.rating}/5
                          </span>
                        )}
                      </div>
                      <div className="my-5 h-px bg-gradient-to-r from-cyber-400/40 to-transparent" />
                      <ul className="space-y-2.5">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex gap-2.5 text-sm text-slate-300"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyber-400" />{pt}</li>
                        ))}
                      </ul>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-24">
        <FadeIn>
          <p className="mb-10 px-4 text-center font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Our technology ecosystem</p>
        </FadeIn>
        <PartnerStrip />
      </section>

      <CTA />
    </>
  )
}
