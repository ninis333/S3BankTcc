import { useEffect, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './About.css'

const VALUES = [
  {
    number: '01',
    title: 'Clareza em primeiro lugar',
    description: 'Informações simples e transparentes para você entender suas escolhas financeiras.',
  },
  {
    number: '02',
    title: 'Tecnologia a serviço das pessoas',
    description: 'Uma experiência digital pensada para facilitar o dia a dia, sem complicação.',
  },
  {
    number: '03',
    title: 'Segurança como prioridade',
    description: 'Cuidado com seus dados e operações em cada etapa da sua experiência com o banco.',
  },
]

export default function AboutPage() {
  const aboutRef = useRef(null)

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    const about = aboutRef.current
    if (!about) return undefined

    const revealElements = about.querySelectorAll(
      '.header, .about-hero__content, main > .section, .about-cta',
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
    <div className="about-page" ref={aboutRef}>
      <Header showLinks={false} />
      <main>
        <section className="about-hero">
          <div className="container about-hero__content">
            <span className="eyebrow">Sobre o S3Bank</span>
            <h1>Um banco feito para acompanhar a sua vida.</h1>
            <p>
              Acreditamos que cuidar do dinheiro pode ser mais simples. Por isso,
              reunimos tecnologia, praticidade e uma experiência clara em um só lugar.
            </p>
          </div>
        </section>

        <section className="section about-story">
          <div className="container about-story__grid">
            <div>
              <span className="eyebrow">Nossa ideia</span>
              <h2>Mais autonomia para fazer planos.</h2>
            </div>
            <p>
              O S3Bank nasceu com a proposta de tornar os serviços financeiros
              mais próximos das pessoas. Queremos que você tenha ferramentas
              práticas para organizar sua rotina e liberdade para decidir o que
              faz sentido para seus objetivos.
            </p>
          </div>
        </section>

        <section className="section about-values">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">O que nos guia</span>
              <h2>Uma relação com dinheiro mais simples e transparente.</h2>
            </div>
            <div className="about-values__grid">
              {VALUES.map((value) => (
                <article className="about-value" key={value.number}>
                  <span>{value.number}</span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="container about-cta__content">
            <h2>Conheça o S3Bank.</h2>
            <p>Veja como a conta e os cartões podem fazer parte da sua rotina.</p>
            <Link to="/home" className="btn btn-primary">Explorar o S3Bank</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
