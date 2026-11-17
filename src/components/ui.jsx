import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export const ease = [0.22, 1, 0.36, 1]

/* Masked word reveal. `muted` words after the split point render in the secondary tone. */
export function Reveal({ text, muted = '', as: Tag = 'h2', className = '', delay = 0, animateOnMount = false }) {
  const MotionTag = motion[Tag]
  const words = [
    ...text.split(' ').map((w) => ({ w, m: false })),
    ...(muted ? muted.split(' ').map((w) => ({ w, m: true })) : []),
  ]
  const trigger = animateOnMount ? { animate: 'show' } : { whileInView: 'show', viewport: { once: true, amount: 0.3 } }
  return (
    <MotionTag
      className={className}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: 0.02, delayChildren: delay }}
      aria-label={`${text} ${muted}`.trim()}
    >
      {words.map(({ w, m }, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className={`inline-block ${m ? 'text-dim' : ''}`}
            variants={{ hidden: { y: '105%' }, show: { y: '0%', transition: { duration: 0.6, ease } } }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </MotionTag>
  )
}

export function FadeUp({ children, delay = 0, className = '', as = 'div' }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.45, delay: Math.min(delay, 0.15), ease }}
    >
      {children}
    </M>
  )
}

/* A hairline that draws itself left to right when it scrolls into view. */
export function Rule({ className = '' }) {
  return (
    <motion.div
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease }}
      className={`h-px origin-left bg-line ${className}`}
    />
  )
}

export function Label({ children, className = '' }) {
  return <p className={`font-mono text-xs uppercase tracking-[0.14em] text-muted ${className}`}>{children}</p>
}

/* Section opener: hairline, index + label on the left, heading on the right. */
export function SectionHeader({ index, label, title, muted, text, className = '' }) {
  return (
    <div className={className}>
      <Rule />
      <div className="grid gap-6 pt-6 md:grid-cols-[1fr_3fr] md:gap-0">
        <Label className="md:pr-6">
          <span className="text-accent">{index}</span>&nbsp;&nbsp;{label}
        </Label>
        <div>
          <Reveal
            text={title}
            muted={muted}
            className="font-wide text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-fg sm:text-4xl lg:text-[3.25rem]"
          />
          {text && (
            <FadeUp delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{text}</p>
            </FadeUp>
          )}
        </div>
      </div>
    </div>
  )
}

export function Button({ to, href, children, variant = 'primary', className = '', ...rest }) {
  const styles = {
    primary: 'bg-accent text-ink hover:bg-white',
    secondary: 'border border-line-strong text-fg hover:border-fg hover:bg-white/[0.04]',
  }
  const cls = `group inline-flex items-center justify-center gap-3 rounded-md px-5 py-3 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${styles[variant]} ${className}`
  const inner = (
    <>
      {children}
      <span className="relative h-4 w-4 overflow-hidden">
        <ArrowRight className="absolute inset-0 h-4 w-4 transition-transform duration-300 group-hover:translate-x-5" />
        <ArrowRight className="absolute inset-0 h-4 w-4 -translate-x-5 transition-transform duration-300 group-hover:translate-x-0" />
      </span>
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}

export function ArrowLink({ to, href, children, className = '' }) {
  const cls = `group inline-flex items-center gap-2 text-sm font-medium text-fg ${className}`
  const inner = (
    <>
      <span className="link-underline pb-0.5">{children}</span>
      <ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </>
  )
  return to ? <Link to={to} className={cls}>{inner}</Link> : <a href={href} className={cls}>{inner}</a>
}

/* Photograph that wipes in on scroll, drifts slightly (parallax) and is graded navy to sit in the dark theme. */
export function Photo({ src, alt, caption, className = '', imgClassName = '', parallax = true }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ['-7%', '7%'] : ['0%', '0%'])
  return (
    <motion.figure
      ref={ref}
      initial={{ clipPath: 'inset(12% 0% 12% 0%)', opacity: 0.4 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease }}
      className={`relative overflow-hidden rounded-lg border border-line bg-ink-2 ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale: 1.16 }}
        className={`absolute inset-0 h-full w-full object-cover [filter:saturate(0.65)_contrast(1.05)_brightness(0.9)] ${imgClassName}`}
      />
      <div aria-hidden className="absolute inset-0 bg-[#0a1a33]/35 mix-blend-multiply" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      {caption && (
        <figcaption className="absolute bottom-0 left-0 p-5 font-mono text-xs uppercase tracking-[0.14em] text-fg/80">{caption}</figcaption>
      )}
    </motion.figure>
  )
}
