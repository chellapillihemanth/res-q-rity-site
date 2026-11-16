import Lenis from 'lenis'

let lenis = null

/* Smooth scrolling for the whole page; skipped for visitors who prefer reduced motion. */
export function startSmoothScroll() {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}
  // Time-based expo ease-out: responds immediately to the wheel and settles without floating.
  // Touch devices keep native scrolling, which feels most natural on phones.
  lenis = new Lenis({
    duration: 1.05,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    syncTouch: false,
    anchors: { offset: -80 },
  })
  let raf
  const loop = (t) => {
    lenis.raf(t)
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)
  return () => {
    cancelAnimationFrame(raf)
    lenis.destroy()
    lenis = null
  }
}

export function scrollToTarget(target, { immediate = false } = {}) {
  if (lenis) return lenis.scrollTo(target, { offset: -80, immediate })
  if (typeof target === 'number') return window.scrollTo(0, target)
  document.querySelector(target)?.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth' })
}

export function lockScroll(locked) {
  if (lenis) locked ? lenis.stop() : lenis.start()
  document.body.style.overflow = locked ? 'hidden' : ''
}
