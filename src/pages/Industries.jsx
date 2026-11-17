import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { FrameworksBand, Industries as IndustryTabs, LogoWall } from '../components/sections'
import { FadeUp, SectionHeader } from '../components/ui'
import { landingPages } from '../data/landing'

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industries"
        title="Security mapped to"
        muted="the regulator you answer to."
        text="Fintech, healthcare, manufacturing and SaaS each face different auditors, regulators and attackers. We start from your sector's rules, not a generic checklist."
      />
      <IndustryTabs index="01" />
      <FrameworksBand />
      <section className="py-24 md:py-32">
        <div className="wrap">
          <SectionHeader index="02" label="Popular programmes" title="Where most clients" muted="start with us." />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {landingPages.map((p) => (
              <FadeUp as="li" key={p.slug} className="bg-ink">
                <Link to={`/${p.slug}`} className="group flex h-full min-h-[10rem] flex-col justify-between p-6 transition-colors hover:bg-ink-2">
                  <ArrowUpRight className="h-5 w-5 self-end text-muted transition-transform duration-300 group-hover:rotate-45 group-hover:text-accent" />
                  <span className="font-wide text-lg font-medium text-fg">{p.nav}</span>
                </Link>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>
      <LogoWall />
      <CTA />
    </>
  )
}
