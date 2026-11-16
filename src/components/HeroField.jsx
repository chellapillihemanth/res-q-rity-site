import { useEffect, useRef } from 'react'

const SPACING = 30 // px between dots
const RADIUS = 150 // cursor influence radius
const PUSH = 16 // max cursor displacement
const RING_SPEED = 0.55 // ripple speed, px per ms
const RING_WIDTH = 70
const RING_LIFE = 1800 // ms
const IDLE_PING = 4500 // ms without pointer movement before an automatic ping

const BASE = [148, 170, 200] // line colour
const ACCENT = [95, 216, 240] // logo cyan

/*
  Interactive dot grid behind the hero. Dots lean away from the cursor and pick up the accent
  colour; a click (or a few idle seconds) sends a ripple through the grid. Pure canvas, no blur.
*/
export default function HeroField({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const pointer = { x: -9999, y: -9999, lastMove: 0 }
    const rings = []
    let dots = []
    let w = 0
    let h = 0
    let raf = 0
    let running = false
    let visible = true

    function build() {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dots = []
      const ox = (w % SPACING) / 2
      const oy = (h % SPACING) / 2
      for (let y = oy; y <= h; y += SPACING) {
        for (let x = ox; x <= w; x += SPACING) dots.push({ x0: x, y0: y, dx: 0, dy: 0 })
      }
    }

    function draw(now) {
      ctx.clearRect(0, 0, w, h)
      for (let i = rings.length - 1; i >= 0; i--) if (now - rings[i].t0 > RING_LIFE) rings.splice(i, 1)

      for (const d of dots) {
        let tx = 0
        let ty = 0
        let heat = 0

        const ex = d.x0 - pointer.x
        const ey = d.y0 - pointer.y
        const dist = Math.hypot(ex, ey)
        if (dist < RADIUS && dist > 0.01) {
          const f = (1 - dist / RADIUS) ** 2
          tx += (ex / dist) * f * PUSH
          ty += (ey / dist) * f * PUSH
          heat = Math.max(heat, f)
        }

        for (const r of rings) {
          const age = now - r.t0
          const rx = d.x0 - r.x
          const ry = d.y0 - r.y
          const rd = Math.hypot(rx, ry)
          const band = Math.abs(rd - age * RING_SPEED)
          if (band < RING_WIDTH && rd > 0.01) {
            const f = (1 - band / RING_WIDTH) * (1 - age / RING_LIFE) * r.power
            tx += (rx / rd) * f * 10
            ty += (ry / rd) * f * 10
            heat = Math.max(heat, f * 0.8)
          }
        }

        // Spring towards the target offset so motion eases in and out.
        d.dx += (tx - d.dx) * 0.14
        d.dy += (ty - d.dy) * 0.14

        const c = BASE.map((b, k) => Math.round(b + (ACCENT[k] - b) * heat))
        const alpha = 0.22 + heat * 0.7
        const size = 1.4 + heat * 1.4
        ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha})`
        ctx.fillRect(d.x0 + d.dx - size / 2, d.y0 + d.dy - size / 2, size, size)
      }
    }

    function loop(now) {
      if (now - pointer.lastMove > IDLE_PING && rings.length === 0) {
        rings.push({ x: w * (0.2 + Math.random() * 0.6), y: h * (0.25 + Math.random() * 0.5), t0: now, power: 0.6 })
        pointer.lastMove = now
      }
      draw(now)
      raf = requestAnimationFrame(loop)
    }

    function start() {
      if (running || reduced || !visible || document.hidden) return
      running = true
      raf = requestAnimationFrame(loop)
    }
    function stop() {
      running = false
      cancelAnimationFrame(raf)
    }

    function local(e) {
      const r = canvas.getBoundingClientRect()
      return { x: e.clientX - r.left, y: e.clientY - r.top, inside: e.clientY >= r.top && e.clientY <= r.bottom }
    }
    function onMove(e) {
      const p = local(e)
      pointer.x = p.inside ? p.x : -9999
      pointer.y = p.inside ? p.y : -9999
      pointer.lastMove = performance.now()
    }
    function onDown(e) {
      const p = local(e)
      if (!p.inside) return
      rings.push({ x: p.x, y: p.y, t0: performance.now(), power: 1 })
      pointer.lastMove = performance.now()
    }
    function onLeave() {
      pointer.x = pointer.y = -9999
    }
    function onVisibility() {
      document.hidden ? stop() : start()
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      visible ? start() : stop()
    })
    const ro = new ResizeObserver(() => {
      build()
      if (!running) draw(performance.now())
    })

    build()
    draw(performance.now())
    io.observe(canvas)
    ro.observe(canvas)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)
    start()

    return () => {
      stop()
      io.disconnect()
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      document.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />
}
