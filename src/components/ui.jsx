import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useMotionValue, useSpring, animate } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

/* Word-by-word masked text reveal. */
export function RevealText({ text, as: Tag = 'h2', className = '', delay = 0, stagger = 0.06, highlight = [] }) {
  const MotionTag = motion[Tag]
  const words = text.split(' ')
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom" aria-hidden>
          <motion.span
            className={`inline-block ${highlight.includes(w.replace(/[.,]/g, '')) ? 'text-gradient' : ''}`}
            variants={{ hidden: { y: '110%', rotate: 4 }, show: { y: '0%', rotate: 0, transition: { duration: 0.8, ease } } }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </MotionTag>
  )
}

export function FadeIn({ children, delay = 0, y = 28, x = 0, className = '', once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children, className = '' }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease }}
      className={`inline-flex max-w-full items-center gap-2 rounded-full border border-cyber-400/25 bg-cyber-400/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-cyber-300 ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyber-400" />
      </span>
      <span className="text-left leading-relaxed sm:whitespace-nowrap">{children}</span>
    </motion.span>
  )
}

export function SectionHeading({ eyebrow, title, highlight, text, center = true, className = '' }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <RevealText
        text={title}
        highlight={highlight}
        className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl"
      />
      {text && (
        <FadeIn delay={0.2}>
          <p className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg">{text}</p>
        </FadeIn>
      )}
    </div>
  )
}

/* Primary button with sweeping shine + arrow nudge; secondary has a border-glow fill. */
export function Button({ to, href, children, variant = 'primary', className = '', icon = true, ...rest }) {
  const base = 'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyber-400'
  const styles = {
    primary: 'bg-gradient-to-r from-cyber-500 to-azure-500 text-white shadow-[0_0_30px_-6px_rgba(34,195,230,0.6)] hover:shadow-[0_0_45px_-4px_rgba(34,195,230,0.9)] hover:-translate-y-0.5',
    ghost: 'border border-cyber-400/30 text-cyber-300 hover:text-ink-900 hover:border-cyber-400',
  }
  const inner = (
    <>
      {variant === 'primary' ? (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      ) : (
        <span className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-cyber-400 transition-transform duration-500 ease-out group-hover:scale-x-100" />
      )}
      <span className="relative">{children}</span>
      {icon && <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  )
  const cls = `${base} ${styles[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}

/* Card with cursor-following spotlight and subtle 3D tilt. */
export function SpotlightCard({ children, className = '', tilt = true }) {
  const ref = useRef(null)
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const [pos, setPos] = useState({ x: -400, y: -400 })

  function onMove(e) {
    const r = ref.current.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    setPos({ x, y })
    if (tilt) {
      ry.set(((x / r.width) - 0.5) * 8)
      rx.set(-((y / r.height) - 0.5) * 8)
    }
  }
  function onLeave() {
    setPos({ x: -400, y: -400 })
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`group relative overflow-hidden rounded-2xl glass transition-colors duration-300 hover:border-cyber-400/40 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(95,216,240,0.13), transparent 45%)` }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  )
}

export function Counter({ value, suffix = '', plain = false, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(plain ? value - 20 : 0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(plain ? value - 20 : 0, value, { duration: 2, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => controls.stop()
  }, [inView, value, plain])
  return <span ref={ref} className={className}>{n}{suffix}</span>
}

export function Marquee({ items, reverse = false, className = '' }) {
  const doubled = [...items, ...items]
  return (
    <div className={`group relative flex overflow-hidden mask-fade-x ${className}`}>
      <div
        className="flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-xl border border-white/5 bg-white/[0.02] px-6 py-3.5 font-display text-lg font-medium text-slate-400 transition-colors duration-300 hover:border-cyber-400/40 hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function GlowOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-azure-500/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-cyber-500/15 blur-[120px]" />
    </div>
  )
}
