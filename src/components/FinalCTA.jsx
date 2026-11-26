import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="section cta" id="abrir-conta">
      <div className="container cta__box">
        <h2>Sua conta S3Bank fica pronta antes do seu café esfriar.</h2>
        <p>Cadastro 100% pelo celular, aprovação em minutos e cartão de metal a caminho da sua casa.</p>
        <div className="cta__actions">
          <a
            href="https://play.google.com/store/search?q=S3Bank&c=apps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Quero abrir minha conta
          </a>
        </div>
        <span className="cta__note">Sem consulta ao SPC/Serasa para abrir a conta.</span>
      </div>
    </section>
  )
}
