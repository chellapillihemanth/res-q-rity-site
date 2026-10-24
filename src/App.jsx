import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { scrollToTarget, startSmoothScroll } from './lib/scroll'

const titles = {
  '/': 'RES-Q-RITY | Cybersecurity Consulting, Audits & Managed Security',
  '/about': 'About | RES-Q-RITY',
  '/services': 'Services: vCISO, ISO 27001, SOC 2 & PCI DSS | RES-Q-RITY',
  '/solutions': 'Security Solutions & Technology Partners | RES-Q-RITY',
  '/contact': 'Contact & Free Assessment | RES-Q-RITY',
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => startSmoothScroll(), [])
  useEffect(() => {
    document.title = titles[pathname] ?? 'Page not found | RES-Q-RITY'
    if (hash) {
      // Wait for the page transition to mount the target section.
      const t = setTimeout(() => scrollToTarget(hash), 650)
      return () => clearTimeout(t)
    }
    scrollToTarget(0, { immediate: true })
  }, [pathname, hash])
  return null
}

function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}

export default function App() {
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-accent"
      />
      <ScrollManager />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/services" element={<Page><Services /></Page>} />
          <Route path="/solutions" element={<Page><Solutions /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
