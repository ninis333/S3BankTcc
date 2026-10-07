import { useEffect, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './Terms.css'

const QUESTIONS = [
  {
    number: '01',
    title: 'Como começo a usar o S3Bank?',
    description:
      'Acesse a página inicial e siga as instruções para conhecer os serviços e iniciar seu cadastro.',
  },
  {
    number: '02',
    title: 'Como faço para falar com o atendimento?',
    description:
      'Envie uma mensagem para nossa equipe pelo link de contato. Vamos ajudar com dúvidas sobre sua experiência com o S3Bank.',
  },
  {
    number: '03',
    title: 'O que faço se perder meu cartão?',
    description:
      'Entre em contato com o atendimento assim que possível para receber orientações sobre como proteger sua conta e seu cartão.',
  },
  {
    number: '04',
    title: 'Como posso proteger minha conta?',
    description:
      'Mantenha seus dados de acesso em sigilo, use senhas seguras e fale com o atendimento se notar qualquer atividade suspeita.',
  },
]

export default function HelpPage() {
  const helpRef = useRef(null)

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    const help = helpRef.current
    if (!help) return undefined

    const revealElements = help.querySelectorAll(
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
    <div className="terms-page" ref={helpRef}>
      <Header showLinks={false} />
      <main>
        <section className="terms-hero">
          <div className="container terms-hero__content">
            <span className="eyebrow">Central de ajuda</span>
            <h1>Estamos aqui para ajudar você.</h1>
            <p>
              Encontre respostas para dúvidas comuns sobre sua conta, cartões e
              segurança. Se precisar, nossa equipe também pode ajudar.
            </p>
          </div>
        </section>

        <section className="section terms-story">
          <div className="container terms-story__grid">
            <div>
              <span className="eyebrow">Conte com a gente</span>
              <h2>Orientação clara para sua experiência com o S3Bank.</h2>
            </div>
            <p>
              Reunimos respostas práticas para ajudar você a encontrar o caminho
              certo. Para questões específicas, fale diretamente com nossa equipe
              de atendimento.
            </p>
          </div>
        </section>

        <section className="section terms-contents">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Perguntas frequentes</span>
              <h2>Como podemos ajudar?</h2>
            </div>
            <div className="terms-contents__grid">
              {QUESTIONS.map((question) => (
                <article className="terms-item" key={question.number}>
                  <span>{question.number}</span>
                  <h3>{question.title}</h3>
                  <p>{question.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="terms-cta">
          <div className="container terms-cta__content">
            <h2>Não encontrou o que procurava?</h2>
            <p>
              Envie sua dúvida para nossa equipe. Estamos prontos para ajudar.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=S3Bank%40gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Fale conosco
            </a>
            <Link to="/home" className="btn btn-primary">Voltar para o início</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
