import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle2, ChevronDown, Siren } from 'lucide-react'
import PageHero from '../components/PageHero'
import SocialLinks from '../components/SocialIcons'
import { Button, FadeUp, Label } from '../components/ui'
import { address, contact, enquiryForm, whatsappHref } from '../data/content'
import { formOptions } from '../data/landing'
import { sendEnquiry } from '../lib/enquiry'

const interests = ['Free assessment', 'Virtual CISO', 'ISO 27001', 'SOC 2 / PCI DSS', 'VAPT', 'DPDPA', 'SOC-as-a-Service', 'Security products', 'Other']

const labelCls = 'font-mono text-xs uppercase tracking-[0.12em] text-muted transition-colors group-focus-within:text-accent'
const inputCls = 'mt-2 w-full resize-none border-0 border-b border-line-strong bg-transparent px-0 py-3 text-fg placeholder:text-dim focus:border-accent focus:outline-none'

function Field({ label, as = 'input', ...props }) {
  const Tag = as
  return (
    <label className="group block">
      <span className={labelCls}>{label}</span>
      <Tag {...props} className={inputCls} />
    </label>
  )
}

function Select({ label, name, options, required }) {
  return (
    <label className="group block">
      <span className={labelCls}>{label}</span>
      <span className="relative block">
        <select name={name} required={required} defaultValue="" className={`${inputCls} cursor-pointer appearance-none pr-8 [&:invalid]:text-dim`}>
          <option value="" disabled>Select</option>
          {options.map((o) => <option key={o} value={o} className="bg-ink text-fg">{o}</option>)}
        </select>
        <ChevronDown aria-hidden className="pointer-events-none absolute right-0 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-muted" />
      </span>
    </label>
  )
}

function IncidentPanel() {
  return (
    <div className="rounded-lg border border-[#ff8a7a]/40 bg-[#ff8a7a]/[0.06] p-6">
      <p className="flex items-center gap-2.5 font-medium text-fg">
        <Siren className="h-4 w-4 text-[#ff8a7a]" /> Dealing with an active incident?
      </p>
      <p className="mt-2 text-sm leading-relaxed text-fg/80">
        Don’t use the form. Call us now and say it is an active security incident, so we can route you to a responder.
      </p>
      <a href={contact.phoneHref} className="link-underline mt-4 inline-block font-wide text-xl font-semibold text-fg">{contact.phone}</a>
    </div>
  )
}

export default function Contact() {
  const [interest, setInterest] = useState(interests[0])
  // idle → sending → sent | error. "mailto" means the visitor's mail app was opened instead.
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    if (f.get('botcheck')) return // honeypot: only bots fill the hidden field

    const fields = {
      name: f.get('name'),
      company: f.get('company') || '-',
      email: f.get('email'),
      phone: f.get('phone') || '-',
      interest,
      company_size: f.get('company_size'),
      framework: f.get('framework'),
      timeline: f.get('timeline'),
      message: f.get('message'),
    }
    setStatus('sending')
    setStatus(await sendEnquiry({ subject: `New website enquiry: ${interest} (${fields.company}, ${fields.company_size} staff, ${fields.timeline})`, fields }))
  }

  return (
    <>
      <PageHero
        label="Contact"
        title="Tell us where you are."
        muted="We'll help with the rest."
        text="Book the free technical assessment, or ask us anything about audits, a virtual CISO, VAPT or security tooling. We answer enquiries within one business day."
      >
        <div className="mt-10 flex flex-wrap gap-3 md:ml-[50%]">
          {contact.bookingUrl && <Button href={contact.bookingUrl} target="_blank" rel="noreferrer">Book a time in the calendar</Button>}
          {whatsappHref && <Button href={whatsappHref} target="_blank" rel="noreferrer" variant="secondary">Message us on WhatsApp</Button>}
        </div>
      </PageHero>

      <section id="enquiry" className="scroll-mt-20 py-16 md:py-24">
        <div className="wrap grid gap-14 md:grid-cols-12">
          <div className="space-y-8 md:col-span-4">
            <IncidentPanel />
            <div className="space-y-6">
              {[
                ['Email', <a key="e" href={`mailto:${contact.email}`} className="link-underline text-fg">{contact.email}</a>],
                ['Phone', <a key="p" href={contact.phoneHref} className="link-underline text-fg">{contact.phone}</a>],
                whatsappHref && ['WhatsApp', <a key="w" href={whatsappHref} target="_blank" rel="noreferrer" className="link-underline text-fg">Chat with us</a>],
                ['Office', <address key="a" className="not-italic leading-relaxed">{address.full}</address>],
                ['Follow', <SocialLinks key="s" />],
              ].filter(Boolean).map(([k, v]) => (
                <div key={k} className="border-t border-line pt-4">
                  <Label>{k}</Label>
                  <div className="mt-2 text-[15px]">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <AnimatePresence mode="wait">
              {status === 'sent' || status === 'mailto' ? (
                <motion.div key="done" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="border-t border-line pt-10" role="status">
                  <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.5} />
                  <h2 className="mt-6 font-wide text-3xl font-semibold text-fg">Thank you, we've got it.</h2>
                  <p className="mt-4 max-w-md leading-relaxed">
                    {status === 'sent'
                      ? 'Your enquiry has been sent to our team. We reply within one business day.'
                      : 'Your email app should have opened with your message ready to send. If it didn’t, write to us directly at '}
                    {status === 'mailto' && (
                      <a className="link-underline text-fg" href={`mailto:${enquiryForm.recipient}`}>{enquiryForm.recipient}</a>
                    )}
                  </p>
                  <button onClick={() => setStatus('idle')} className="link-underline mt-8 text-sm text-accent">Send another message</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="space-y-10">
                  <fieldset>
                    <legend className={labelCls}>I'm interested in</legend>
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
                    <Field label="Full name" name="name" required placeholder="Your name" autoComplete="name" />
                    <Field label="Company" name="company" required placeholder="Company name" autoComplete="organization" />
                    <Field label="Work email" name="email" type="email" required placeholder="you@company.com" autoComplete="email" />
                    <Field label="Phone" name="phone" type="tel" placeholder="+91" autoComplete="tel" />
                  </div>
                  <div className="grid gap-10 sm:grid-cols-3">
                    <Select label="Company size" name="company_size" options={formOptions.companySize} required />
                    <Select label="Framework needed" name="framework" options={formOptions.framework} required />
                    <Select label="Timeline" name="timeline" options={formOptions.timeline} required />
                  </div>
                  <Field label="How can we help?" name="message" as="textarea" rows={4} required placeholder="Goals, audit dates, what prompted this…" />
                  {/* Honeypot for spam bots; hidden from people and screen readers. */}
                  <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

                  {status === 'error' && (
                    <p role="alert" className="rounded-md border border-[#ff8a7a]/40 bg-[#ff8a7a]/10 px-4 py-3 text-sm text-fg">
                      Sorry, your message couldn't be sent. Please try again, or email us at{' '}
                      <a className="link-underline" href={`mailto:${enquiryForm.recipient}`}>{enquiryForm.recipient}</a>.
                    </p>
                  )}

                  <Button type="submit" disabled={status === 'sending'} className="disabled:cursor-wait disabled:opacity-60">
                    {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[60vh] items-end overflow-hidden border-t border-line bg-ink-2">
        <img
          src="/images/hyderabad-hitec-city.jpg"
          alt="Office towers in Knowledge City, near T-Hub"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover [filter:saturate(0.55)_brightness(0.7)]"
        />
        <div aria-hidden className="absolute inset-0 bg-[#0a1a33]/45 mix-blend-multiply" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
        <div className="wrap relative grid w-full gap-8 py-16 md:grid-cols-12 md:items-end md:py-20">
          <div className="md:col-span-8">
            <Label><span className="text-accent">●</span>&nbsp;&nbsp;Visit us</Label>
            <p className="mt-5 font-wide text-3xl font-semibold leading-tight tracking-[-0.02em] text-fg md:text-5xl">
              T-Hub, <span className="text-fg/60">Knowledge City</span>
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
