import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { CaseStudy, LogoWall, Testimonials } from '../components/sections'
import { FadeUp, SectionHeader } from '../components/ui'
import { caseStudies, otherWork } from '../data/content'

export default function CaseStudies() {
  return (
    <>
      <PageHero
        label="Case studies"
        title="The problem, the scope,"
        muted="and what changed."
        text="Each case study follows the same shape, so you can judge the work on its merits: what the client faced, what we did, how long it took and the result."
      />

      <section className="py-20 md:py-28">
        <div className="wrap space-y-10">
          {caseStudies.map((c) => (
            <FadeUp key={c.slug}><CaseStudy c={c} /></FadeUp>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap">
          <SectionHeader index="02" label="Training & enablement" title="Teaching security," muted="as well as building it." />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:ml-[25%] md:grid-cols-3">
            {otherWork.map((w) => (
              <FadeUp as="li" key={w.client} className="bg-ink p-7">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{w.sector}</p>
                <p className="mt-2 font-wide text-lg font-medium text-fg">{w.client}</p>
                <p className="mt-2 text-sm leading-relaxed">{w.work}</p>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials index="03" />
      <LogoWall />
      <CTA />
    </>
  )
}
