import { contact, address } from '../data/content'
import { Button, FadeUp, Label, Reveal, Rule } from './ui'

export default function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <Rule />
        <div className="grid gap-12 pt-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <Label><span className="text-accent">→</span>&nbsp;&nbsp;Free initial technical assessment</Label>
            <Reveal
              text="Find out where you stand"
              muted="before an attacker does."
              className="mt-6 font-wide text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-fg sm:text-5xl lg:text-6xl"
            />
            <FadeUp delay={0.2} className="mt-10 flex flex-wrap gap-3">
              <Button to="/contact">Book your assessment</Button>
              <Button href={contact.phoneHref} variant="secondary">Call {contact.phone}</Button>
            </FadeUp>
          </div>
          <FadeUp delay={0.25} className="space-y-6 text-sm md:col-span-4 md:pt-10">
            <div>
              <Label className="!text-dim">Email</Label>
              <a href={`mailto:${contact.email}`} className="link-underline mt-2 inline-block text-base text-fg">{contact.email}</a>
            </div>
            <div>
              <Label className="!text-dim">Office</Label>
              <p className="mt-2 leading-relaxed">{address.short}</p>
            </div>
            <div>
              <Label className="!text-dim">Response time</Label>
              <p className="mt-2">Within one business day</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
