import { useEffect, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './Terms.css'

const SECTIONS = [
  {
    number: '01',
    title: 'Aceitação dos termos',
    description:
      'Ao acessar ou utilizar os serviços do S3Bank, você confirma que leu, compreendeu e aceita estes Termos de Uso, além das políticas aplicáveis ao produto.',
  },
  {
    number: '02',
    title: 'Uso do serviço',
    description:
      'O uso da conta digital, cartões e funcionalidades do banco deve ser realizado de forma responsável e conforme a legislação vigente, incluindo a proteção de seus dados e a veracidade das informações informadas.',
  },
  {
    number: '03',
    title: 'Segurança e privacidade',
    description:
      'Você é responsável por manter seus dados de acesso seguros e por comunicar qualquer uso não autorizado. O S3Bank se compromete a adotar medidas de segurança para proteger suas informações.',
  },
  {
    number: '04',
    title: 'Responsabilidade e comunicação',
    description:
      'O S3Bank busca oferecer uma experiência simples e confiável, mas pode alterar funcionalidades, políticas e regras de uso para manter o serviço alinhado às necessidades do mercado e da legislação.',
  },
]

export default function TermsPage() {
  const termsRef = useRef(null)

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    const terms = termsRef.current
    if (!terms) return undefined

    const revealElements = terms.querySelectorAll(
      '.header, .terms-hero__content, main > .section, .terms-cta',
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
    <div className="terms-page" ref={termsRef}>
      <Header showLinks={false} />
      <main>
        <section className="terms-hero">
          <div className="container terms-hero__content">
            <span className="eyebrow">Termos de uso</span>
            <h1>Entenda as regras da sua experiência com o S3Bank.</h1>
            <p>
              Estes termos descrevem como nossos serviços funcionam, como você pode
              utilizá-los e quais responsabilidades existem em cada etapa da relação.
            </p>
          </div>
        </section>

        <section className="section terms-story">
          <div className="container terms-story__grid">
            <div>
              <span className="eyebrow">Nosso compromisso</span>
              <h2>Transparência e clareza em cada decisão.</h2>
            </div>
            <p>
              O S3Bank busca construir uma experiência financeira acessível,
              segura e fácil de entender. Por isso, os termos estão escritos para
              facilitar a compreensão e manter a relação com você em um nível de
              confiança e previsibilidade.
            </p>
          </div>
        </section>

        <section className="section terms-contents">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Principais pontos</span>
              <h2>O que você precisa saber antes de abrir sua conta.</h2>
            </div>
            <div className="terms-contents__grid">
              {SECTIONS.map((section) => (
                <article className="terms-item" key={section.number}>
                  <span>{section.number}</span>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="terms-cta">
          <div className="container terms-cta__content">
            <h2>Antes de continuar, leia e entenda os termos.</h2>
            <p>
              Se tudo estiver correto para você, pode seguir com o cadastro e começar
              a aproveitar a solução do S3Bank.
            </p>
            <Link to="/home" className="btn btn-primary">Voltar para o início</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
