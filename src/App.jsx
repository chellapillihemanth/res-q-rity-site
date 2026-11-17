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
import CaseStudies from './pages/CaseStudies'
import IndustriesPage from './pages/Industries'
import Landing from './pages/Landing'
import { landingPages } from './data/landing'
import { scrollToTarget, startSmoothScroll } from './lib/scroll'

const pages = {
  '/': ['RES-Q-RITY | ISO 27001, SOC 2 & vCISO Services in Hyderabad, India', 'Get ISO 27001 or SOC 2 audit-ready without hiring a CISO. Virtual CISO, VAPT, DPDPA compliance and managed security from T-Hub, Hyderabad.'],
  '/about': ['About | RES-Q-RITY', 'RES-Q-RITY is a Hyderabad cybersecurity consultancy at T-Hub, led by a former CISO. DSCI member, incubated at IIM Bangalore NSRCEL.'],
  '/services': ['Services: vCISO, ISO 27001, SOC 2 & PCI DSS | RES-Q-RITY', 'Virtual CISO, risk and gap assessments, incident response, and audit readiness for ISO 27001, SOC 2, PCI DSS, HIPAA and more.'],
  '/solutions': ['Security Problems We Solve | RES-Q-RITY', 'Ransomware, phishing, data leaks, OT blind spots, audit fatigue: the problems we solve, how we solve them, and the tools we deploy.'],
  '/industries': ['Industries: Fintech, Healthcare, Manufacturing & SaaS | RES-Q-RITY', 'Cybersecurity and compliance mapped to SEBI, RBI, IRDAI, HIPAA, DPDPA, ISO 27001 and SOC 2 for your sector.'],
  '/case-studies': ['Case Studies | RES-Q-RITY', 'How RES-Q-RITY clients closed control gaps and passed their audits: problem, scope, duration and result.'],
  '/contact': ['Contact & Free Assessment | RES-Q-RITY', 'Book a free security assessment, or call us about an active incident. T-Hub, Knowledge City, Hyderabad.'],
  ...Object.fromEntries(landingPages.map((p) => ['/' + p.slug, [p.metaTitle, p.metaDescription]])),
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => startSmoothScroll(), [])
  useEffect(() => {
    const [title, description] = pages[pathname] ?? ['Page not found | RES-Q-RITY', '']
    document.title = title
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    if (hash) {
      // Wait for the page transition to mount the target section.
      const t = setTimeout(() => scrollToTarget(hash), 400)
      return () => clearTimeout(t)
    }
    scrollToTarget(0, { immediate: true })
  }, [pathname, hash])
  return null
}

function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
          <Route path="/industries" element={<Page><IndustriesPage /></Page>} />
          <Route path="/case-studies" element={<Page><CaseStudies /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          {landingPages.map((p) => (
            <Route key={p.slug} path={'/' + p.slug} element={<Page><Landing slug={p.slug} /></Page>} />
          ))}
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
