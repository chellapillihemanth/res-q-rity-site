import { contact, address, bookingLink } from '../data/content'
import { Button, FadeUp, Label, Reveal } from './ui'

export default function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        {/* Blue panel so the closing call to action stands apart from the navy page. */}
        <div className="relative overflow-hidden rounded-2xl border border-blue/30 bg-gradient-to-br from-[#123272] via-[#0c1f47] to-ink-2 p-8 md:p-14">
          <div aria-hidden className="absolute inset-0 [background-image:linear-gradient(rgb(143_179_255/0.07)_1px,transparent_1px),linear-gradient(90deg,rgb(143_179_255/0.07)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_left,black,transparent_70%)]" />
          <div className="relative grid gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <Label><span className="text-accent">→</span>&nbsp;&nbsp;Free initial technical assessment</Label>
              <Reveal
                text="Find out where you stand"
                muted="before an attacker does."
                className="mt-6 font-wide text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-fg sm:text-5xl lg:text-6xl"
              />
              <FadeUp delay={0.2} className="mt-10 flex flex-wrap gap-3">
                <Button {...bookingLink}>Book your assessment</Button>
                <Button href={contact.phoneHref} variant="secondary">Call {contact.phone}</Button>
              </FadeUp>
            </div>
            <FadeUp delay={0.25} className="space-y-6 text-sm text-fg/80 md:col-span-4 md:pt-10">
              <div>
                <Label>Email</Label>
                <a href={`mailto:${contact.email}`} className="link-underline mt-2 inline-block text-base text-fg">{contact.email}</a>
              </div>
              <div>
                <Label>Office</Label>
                <p className="mt-2 leading-relaxed">{address.short}</p>
              </div>
              <div>
                <Label>Response</Label>
                <p className="mt-2">Enquiries within one business day</p>
                <p className="mt-1">Active incident? <a href={contact.phoneHref} className="link-underline text-fg">Call {contact.phone}</a></p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
