import { useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cadastro from './cadastro.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'
import CardTiers from './components/CardTiers.jsx'
import AppShowcase from './components/AppShowcase.jsx'
import Security from './components/Security.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import './home-animations.css'

function HomePage() {
  const homeRef = useRef(null)

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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Cadastro />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  )
}
