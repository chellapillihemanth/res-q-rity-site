import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { ImageBand } from '../components/sections'
import { FadeUp, Label } from '../components/ui'
import { solutionProblems } from '../data/content'

/* Each block reads as: the problem you have → how we fix it → what changes. The products we use are a footnote. */
function ProblemBlock({ p, i }) {
  return (
    <section id={p.id} className="scroll-mt-28 border-t border-line pt-8 pb-20">
      <FadeUp>
        <span className="font-mono text-xs text-accent">Problem {String(i + 1).padStart(2, '0')}</span>
        <h2 className="mt-3 max-w-3xl font-wide text-2xl font-semibold leading-snug tracking-[-0.015em] text-fg md:text-[2.1rem]">
          {p.problem}
        </h2>
      </FadeUp>

      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-2">
        <FadeUp className="bg-ink p-6 md:p-8">
          <Label>You’ll recognise it if</Label>
          <ul className="mt-5 space-y-3 text-[15px]">
            {p.signs.map((s) => (
              <li key={s} className="flex gap-3 leading-relaxed"><span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-[#f2c66d]" />{s}</li>
            ))}
          </ul>
        </FadeUp>
        <FadeUp delay={0.05} className="bg-ink-2 p-6 md:p-8">
          <Label className="!text-accent">How we solve it</Label>
          <p className="mt-5 text-[15px] leading-relaxed text-fg">{p.solution}</p>
          <p className="mt-6 flex gap-3 border-t border-line pt-5 font-medium text-fg">
            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-accent" />{p.outcome}
          </p>
        </FadeUp>
      </div>

    </section>
  )
}

export default function Solutions() {
  const [active, setActive] = useState(solutionProblems[0].id)

  // Highlight the problem currently in view in the sticky index.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    solutionProblems.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <>
      <PageHero
        label="Solutions"
        title="Start with the problem."
        muted="We'll bring the fix."
        text="These are the ten problems we are called in to solve most often. For each one we design the fix, deploy it with your team and run it, using proven tools only where they earn their place."
      />

      <section className="py-20 md:py-28">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <aside className="hidden md:col-span-4 md:block lg:col-span-3">
            <nav className="sticky top-28">
              <Label>Jump to a problem</Label>
              <ul className="mt-5 space-y-0.5 text-sm">
                {solutionProblems.map((p, i) => (
                  <li key={p.id}>
                    <a href={`#${p.id}`} className={`flex gap-3 py-1.5 leading-snug transition-colors duration-300 ${active === p.id ? 'text-fg' : 'text-muted hover:text-fg'}`}>
                      <span className={`font-mono text-xs leading-5 ${active === p.id ? 'text-accent' : 'text-dim'}`}>{String(i + 1).padStart(2, '0')}</span>
                      {p.short}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="md:col-span-8 lg:col-span-9">
            {solutionProblems.map((p, i) => <ProblemBlock key={p.id} p={p} i={i} />)}
          </div>
        </div>
      </section>

      <ImageBand
        src="/images/analytics-dashboard.jpg"
        alt="Security and performance analytics dashboard on a laptop"
        label="Not sure which problem is yours?"
        title="The free assessment"
        muted="tells you where to start."
        text="We review your posture across identity, endpoints, cloud, email and vendors, and rank the problems by risk to your business."
        link={{ to: '/contact#enquiry', label: 'Book the free assessment' }}
        busy
      />

      <CTA />
    </>
  )
}
