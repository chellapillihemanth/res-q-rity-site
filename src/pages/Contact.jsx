import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import SocialIcons from '../components/SocialIcons'
import { FadeIn, GlowOrbs, SpotlightCard } from '../components/ui'
import { contact } from '../data/content'

const interests = ['Virtual CISO', 'Audit & Compliance', 'ISO 27001', 'SOC-as-a-Service', 'Security Products', 'Other']

function Field({ label, as = 'input', ...props }) {
  const Tag = as
  return (
    <label className="group block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-slate-500 transition-colors group-focus-within:text-cyber-300">{label}</span>
      <Tag
        {...props}
        className="w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3.5 text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-cyber-400/60 focus:bg-ink-950 focus:shadow-[0_0_0_4px_rgba(95,216,240,0.1)]"
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

  const cards = [
    { icon: Mail, label: 'Email us', value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: 'Call us', value: contact.phone, href: contact.phoneHref },
    { icon: MapPin, label: 'Visit us', value: contact.address },
  ]

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Let's talk"
        title="Let's secure your tomorrow, today"
        highlight={['tomorrow', 'today']}
        text="Tell us where you are in your security journey. Our experts usually reply within one business day."
      />

      <section className="relative px-4 pb-28 sm:px-6">
        <GlowOrbs />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {cards.map((c, i) => {
              const Inner = (
                <SpotlightCard className="p-6"><div className="flex items-center gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyber-500 to-azure-500 text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500">{c.label}</p>
                    <p className="mt-1 break-words font-display text-lg font-medium text-white">{c.value}</p>
                  </div>
                </div></SpotlightCard>
              )
              return (
                <FadeIn key={c.label} delay={i * 0.1} x={-30} y={0}>
                  {c.href ? <a href={c.href} className="block">{Inner}</a> : Inner}
                </FadeIn>
              )
            })}
            <FadeIn delay={0.3} x={-30} y={0}>
              <div className="rounded-2xl border border-white/10 p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Follow us</p>
                <SocialIcons className="mt-4" />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-cyber-400/20 bg-ink-800/60 p-6 backdrop-blur-xl sm:p-10">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyber-500/20 blur-[90px]" />
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative flex min-h-[28rem] flex-col items-center justify-center text-center">
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.1 }}>
                      <CheckCircle2 className="h-16 w-16 text-cyber-400" />
                    </motion.span>
                    <h3 className="mt-6 font-display text-3xl font-semibold text-white">Thank you!</h3>
                    <p className="mt-3 max-w-sm text-slate-400">Your email app should have opened with your message. If not, write to us at <a className="text-cyber-300" href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
                    <button onClick={() => setSent(false)} className="mt-8 text-sm text-cyber-300 underline-offset-4 hover:underline">Send another message</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0, y: -10 }} className="relative space-y-6">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-white">Request a free consultation</h3>
                      <p className="mt-1 text-sm text-slate-400">No spam, no obligations. Just a conversation.</p>
                    </div>
                    <div>
                      <span className="mb-3 block font-mono text-[11px] uppercase tracking-widest text-slate-500">I'm interested in</span>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((it) => (
                          <button
                            type="button"
                            key={it}
                            onClick={() => setInterest(it)}
                            className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${interest === it ? 'border-cyber-400 bg-cyber-400/15 text-white shadow-[0_0_20px_-6px_rgba(95,216,240,0.8)]' : 'border-white/10 text-slate-400 hover:border-cyber-400/40 hover:text-cyber-300'}`}
                          >
                            {it}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full name" name="name" required placeholder="Your name" />
                      <Field label="Company" name="company" placeholder="Company name" />
                      <Field label="Work email" name="email" type="email" required placeholder="you@company.com" />
                      <Field label="Phone" name="phone" type="tel" placeholder="+91" />
                    </div>
                    <Field label="How can we help?" name="message" as="textarea" rows={4} required placeholder="Tell us about your goals, timelines or compliance deadlines…" />
                    <button type="submit" className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyber-500 to-azure-500 px-6 py-4 font-semibold text-white shadow-[0_0_30px_-6px_rgba(34,195,230,0.6)] transition-all duration-300 hover:shadow-[0_0_45px_-4px_rgba(34,195,230,0.9)]">
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                      <span className="relative">Send message</span>
                      <Send className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
