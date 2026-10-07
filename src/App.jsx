import { useEffect, useLayoutEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Cadastro from './cadastro.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'
import CardTiers from './components/CardTiers.jsx'
import AppShowcase from './components/AppShowcase.jsx'
import Security from './components/Security.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import AboutPage from './About.jsx'
import TermsPage from './Terms.jsx'
import PrivacyPage from './Privacy.jsx'
import HelpPage from './Help.jsx'
import './home-animations.css'

function HomePage() {
  const homeRef = useRef(null)

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    const home = homeRef.current
    if (!home) return undefined

    const revealElements = home.querySelectorAll(
      '.header, .hero__copy, .hero__stage-wrap, main > .section',
    )

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => {
        element.classList.add('home-reveal', 'home-reveal--visible')
      })
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('home-reveal--visible')
        } else {
          entry.target.classList.remove('home-reveal--visible')
        }
      })
    }, { threshold: 0.12 })

    revealElements.forEach((element, index) => {
      element.classList.add('home-reveal')
      element.style.setProperty('--reveal-delay', `${Math.min(index * 100, 500)}ms`)
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="home-page" ref={homeRef}>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <CardTiers />
        <AppShowcase />
        <Security />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }

    const targetId = hash.replace('#', '')
    const target = document.getElementById(targetId)

    if (!target) return

    const scrollToTarget = () => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const timeoutId = window.setTimeout(scrollToTarget, 0)
    return () => window.clearTimeout(timeoutId)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/termos-de-uso" element={<TermsPage />} />
        <Route path="/privacidade" element={<PrivacyPage />} />
        <Route path="/central-de-ajuda" element={<HelpPage />} />
      </Routes>
    </>
  )
}
