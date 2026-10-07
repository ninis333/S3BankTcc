import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import './Footer.css'

const COLUMNS = [
  {
    title: 'Produto',
    links: ['Conta digital e cartões', 'App S3Bank'],
  },
  {
    title: 'Ajuda',
    links: ['Central de ajuda', 'Fale conosco', 'Segurança'],
  },
  {
    title: 'Legal',
    links: ['Sobre o S3Bank', 'Termos de uso', 'Privacidade'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img src={logo} alt="S3Bank" />
          <p>
            S3Bank Instituição de Pagamento S.A. — CNPJ 00.000.000/0001-00.
            Autorizada a funcionar pelo Banco Central do Brasil.
          </p>
        </div>

        <div className="footer__columns">
          {COLUMNS.map((c) => (
            <div key={c.title} className="footer__col">
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l}>
                    {l === 'Sobre o S3Bank' ? (
                      <Link to="/sobre">{l}</Link>
                    ) : l === 'Central de ajuda' ? (
                      <Link to="/central-de-ajuda">{l}</Link>
                    ) : l === 'Termos de uso' ? (
                      <Link to="/termos-de-uso">{l}</Link>
                    ) : l === 'Privacidade' ? (
                      <Link to="/privacidade">{l}</Link>
                    ) : l === 'Fale conosco' ? (
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=S3Bank%40gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l}
                      </a>
                    ) : l === 'Segurança' ? (
                      <Link to="/home#seguranca">{l}</Link>
                    ) : l === 'Conta digital e cartões' ? (
                      <a href="#">
                        Conta digital<br />e cartões
                      </a>
                    ) : (
                      <a href={l === 'Cartão de metal' ? '#cartoes' : '#'}>{l}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} S3Bank. Todos os direitos reservados.</span>
        <span>Ouvidoria: 0800 000 0000</span>
      </div>
    </footer>
  )
}
