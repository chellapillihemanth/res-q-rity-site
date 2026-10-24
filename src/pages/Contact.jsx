import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import PageHero from '../components/PageHero'
import SocialLinks from '../components/SocialIcons'
import { Button, FadeUp, Label } from '../components/ui'
import { address, contact } from '../data/content'

const interests = ['Free assessment', 'Virtual CISO', 'ISO 27001', 'SOC 2 / PCI DSS', 'SOC-as-a-Service', 'Security products', 'Other']

function Field({ label, as = 'input', ...props }) {
  const Tag = as
  return (
    <label className="group block">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim transition-colors group-focus-within:text-accent">{label}</span>
      <Tag
        {...props}
        className="mt-2 w-full resize-none border-0 border-b border-line-strong bg-transparent px-0 py-3 text-fg placeholder:text-dim focus:border-accent focus:outline-none"
      />
    </label>
  )
}

export default function Contact() {
  const [interest, setInterest] = useState(interests[0])
  const [sent, setSent] = useState(false)

  // No backend yet: hand the enquiry to the visitor's mail client, pre-filled.
  function onSubmit(e) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = `Name: ${f.get('name')}\nCompany: ${f.get('company')}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')}\nInterest: ${interest}\n\n${f.get('message')}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Enquiry: ${interest}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHero
        label="Contact"
        title="Tell us where you are."
        muted="We'll help with the rest."
        text="Start with a free initial technical assessment, or ask us anything about audits, a virtual CISO or security tooling. We reply within one business day."
      />

      <section className="py-20 md:py-28">
        <div className="wrap grid gap-16 md:grid-cols-12">
          <FadeUp className="space-y-10 md:col-span-4">
            {[
              ['Email', <a key="e" href={`mailto:${contact.email}`} className="link-underline text-fg">{contact.email}</a>],
              ['Phone', <a key="p" href={contact.phoneHref} className="link-underline text-fg">{contact.phone}</a>],
              ['Office', <address key="a" className="not-italic leading-relaxed">{address.full}</address>],
              ['Follow', <SocialLinks key="s" />],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-line pt-4">
                <Label className="!text-dim">{k}</Label>
                <div className="mt-3 text-[15px]">{v}</div>
              </div>
            ))}
          </FadeUp>

          <FadeUp delay={0.1} className="md:col-span-7 md:col-start-6">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-t border-line pt-10">
                  <h2 className="font-wide text-3xl font-semibold text-fg">Thank you.</h2>
                  <p className="mt-4 max-w-md leading-relaxed">
                    Your email app should have opened with your message ready to send. If it didn't, write to{' '}
                    <a className="link-underline text-fg" href={`mailto:${contact.email}`}>{contact.email}</a>.
                  </p>
                  <button onClick={() => setSent(false)} className="link-underline mt-8 text-sm text-accent">Send another message</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="space-y-10">
                  <fieldset>
                    <legend className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">I'm interested in</legend>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {interests.map((it) => (
                        <button
                          type="button"
                          key={it}
                          onClick={() => setInterest(it)}
                          aria-pressed={interest === it}
                          className={`rounded-md border px-3.5 py-2 text-sm transition-colors duration-300 ${
                            interest === it ? 'border-accent bg-accent-soft text-fg' : 'border-line-strong text-muted hover:border-fg hover:text-fg'
                          }`}
                        >
                          {it}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  <div className="grid gap-10 sm:grid-cols-2">
                    <Field label="Full name" name="name" required placeholder="Your name" />
                    <Field label="Company" name="company" placeholder="Company name" />
                    <Field label="Work email" name="email" type="email" required placeholder="you@company.com" />
                    <Field label="Phone" name="phone" type="tel" placeholder="+91" />
                  </div>
                  <Field label="How can we help?" name="message" as="textarea" rows={4} required placeholder="Goals, timelines, compliance deadlines…" />
                  <Button type="submit">Send enquiry</Button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeUp>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line bg-ink-2">
        <div className="crosshairs absolute inset-0 opacity-60" />
        <div className="wrap relative grid gap-8 py-16 md:grid-cols-12 md:items-end md:py-20">
          <div className="md:col-span-8">
            <Label><span className="text-accent">●</span>&nbsp;&nbsp;Visit us</Label>
            <p className="mt-5 font-wide text-3xl font-semibold leading-tight tracking-[-0.02em] text-fg md:text-4xl">
              T-Hub, Knowledge City <span className="text-dim">Hyderabad</span>
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Button href={address.directions} target="_blank" rel="noreferrer" variant="secondary">Get directions</Button>
          </div>
        </div>
      </section>
    </>
  )
}
