import { useEffect, useState } from 'react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { FadeUp, Label } from '../components/ui'
import { partnerCategories } from '../data/content'

export default function Solutions() {
  const [active, setActive] = useState(partnerCategories[0].id)

  // Highlight the category currently in view in the sticky index.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    partnerCategories.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <>
      <PageHero
        label="Solutions"
        title="The right product,"
        muted="sourced and deployed by people who use it."
        text="We are a value-added channel partner to leading security vendors. Instead of pushing one platform, we recommend what fits your environment, then help you roll it out."
      />

      <section className="py-24 md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <aside className="hidden md:col-span-3 md:block">
            <nav className="sticky top-28">
              <Label className="!text-dim">Categories</Label>
              <ul className="mt-5 space-y-1 text-sm">
                {partnerCategories.map((c, i) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`} className={`flex gap-3 py-1.5 transition-colors duration-300 ${active === c.id ? 'text-fg' : 'text-dim hover:text-muted'}`}>
                      <span className={`font-mono text-xs ${active === c.id ? 'text-accent' : ''}`}>{String(i + 1).padStart(2, '0')}</span>
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="md:col-span-9">
            {partnerCategories.map((c, i) => (
              <section key={c.id} id={c.id} className="scroll-mt-28 border-t border-line pt-8 pb-16">
                <FadeUp>
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="font-wide text-2xl font-semibold text-fg md:text-3xl">{c.title}</h2>
                    <span className="font-mono text-xs text-dim">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-dim">{c.short}</p>
                </FadeUp>
                <div className={`mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line ${c.partners.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                  {c.partners.map((p, j) => (
                    <FadeUp key={p.name} delay={j * 0.06} className="bg-ink p-6 transition-colors duration-300 hover:bg-ink-2">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-lg font-semibold text-fg">{p.name}</h3>
                        {p.rating && <span className="shrink-0 font-mono text-xs text-dim">Gartner Peer Insights {p.rating}/5</span>}
                      </div>
                      <ul className="mt-4 space-y-1.5 text-sm">
                        {p.points.map((pt) => <li key={pt} className="flex gap-2"><span className="text-dim">–</span>{pt}</li>)}
                      </ul>
                    </FadeUp>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
