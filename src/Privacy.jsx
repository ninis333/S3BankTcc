import { useEffect, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './Privacy.css'

const SECTIONS = [
  {
    number: '01',
    title: 'Informações que coletamos',
    description:
      'Coletamos dados necessários para operar a conta, prestar suporte, melhorar a experiência e cumprir obrigações legais, como identificação, contato, dados de uso e informações de transações.',
  },
  {
    number: '02',
    title: 'Uso dos dados',
    description:
      'Utilizamos seus dados para oferecer serviços, personalizar a experiência, prevenir fraudes, processar transações, enviar comunicações relevantes e cumprir normas aplicáveis.',
  },
  {
    number: '03',
    title: 'Compartilhamento',
    description:
      'Seus dados podem ser compartilhados apenas com parceiros, prestadores de serviço e autoridades quando necessário para a operação dos serviços ou por exigência legal.',
  },
  {
    number: '04',
    title: 'Segurança e controle',
    description:
      'Adotamos medidas técnicas e organizacionais para proteger suas informações e garantir que você tenha controle sobre seus dados, incluindo acesso, correção e exclusão, quando aplicável.',
  },
]

export default function PrivacyPage() {
  const privacyRef = useRef(null)

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    const privacy = privacyRef.current
    if (!privacy) return undefined

    const revealElements = privacy.querySelectorAll(
      '.header, .privacy-hero__content, main > .section, .privacy-cta',
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
    <div className="privacy-page" ref={privacyRef}>
      <Header showLinks={false} />
      <main>
        <section className="privacy-hero">
          <div className="container privacy-hero__content">
            <span className="eyebrow">Privacidade</span>
            <h1>Seu dinheiro e seus dados merecem cuidado e transparência.</h1>
            <p>
              A privacidade é um compromisso fundamental do S3Bank. Aqui você
              encontra as regras sobre como tratamos suas informações e como protege
              sua experiência digital.
            </p>
          </div>
        </section>

        <section className="section privacy-story">
          <div className="container privacy-story__grid">
            <div>
              <span className="eyebrow">Nossa abordagem</span>
              <h2>Dados pessoais com responsabilidade e respeito.</h2>
            </div>
            <p>
              Valorizamos a confidencialidade das informações e buscamos oferecer
              uma experiência segura, simples e clara. Quando você usa o S3Bank,
              você conta com processos e medidas pensados para proteger sua rotina
              financeira e seu relacionamento com a marca.
            </p>
          </div>
        </section>

        <section className="section privacy-contents">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Como cuidamos dos dados</span>
              <h2>Principais informações sobre sua privacidade.</h2>
            </div>
            <div className="privacy-contents__grid">
              {SECTIONS.map((section) => (
                <article className="privacy-item" key={section.number}>
                  <span>{section.number}</span>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="privacy-cta">
          <div className="container privacy-cta__content">
            <h2>Você pode confiar na forma como tratamos seus dados.</h2>
            <p>
              Estamos sempre atentos à segurança, à clareza e à proteção de suas
              informações, porque isso é parte essencial da sua experiência com o banco.
            </p>
            <Link to="/home" className="btn btn-primary">Voltar para o início</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
