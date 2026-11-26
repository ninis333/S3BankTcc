import './AppShowcase.css'

const MOVEMENTS = [
  { label: 'Recebido de João P.', tag: 'PIX', value: '+ R$ 1.250,00', positive: true },
  { label: 'Assinatura streaming', tag: 'Débito', value: '- R$ 39,90' },
  { label: 'Rendimento do dia', tag: 'CDI', value: '+ R$ 4,12', positive: true },
  { label: 'Mercado Sul', tag: 'Crédito', value: '- R$ 186,30' },
]

export default function AppShowcase() {
  return (
    <section className="section appshow" id="app">
      <div className="container appshow__row">
        <div className="appshow__copy">
          <span className="eyebrow">App S3Bank</span>
          <h2>Seu extrato, em tempo real, sem esperar o app carregar.</h2>
          <p>
            Acompanhe entradas, saídas e rendimento diário num painel único.
            Bloqueie o cartão, ajuste limites e organize gastos por categoria
            direto da tela inicial — sem menus escondidos.
          </p>

          <ul className="appshow__list">
            <li>Notificação instantânea a cada movimentação</li>
            <li>Cartão virtual gerado na hora, pronto pra usar</li>
            <li>Cofrinhos com objetivo e data</li>
          </ul>
        </div>


        <div className="appshow__stores">
  <a
    className="appshow__store"
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noopener noreferrer"
  >
    App Store
  </a>

  <a
    className="appshow__store"
    href="https://play.google.com/store/search?q=S3Bank&c=apps"
    target="_blank"
    rel="noopener noreferrer"
  >
    Google Play
  </a>
</div>
        <div className="appshow__panel">
          <div className="appshow__panel-head">
            <span>Saldo disponível</span>
            <strong>R$ 8.412,67</strong>
            <span className="appshow__yield">rendendo 100% do CDI hoje</span>
          </div>

          <div className="appshow__movements">
            {MOVEMENTS.map((m) => (
              <div className="appshow__mv" key={m.label}>
                <div>
                  <p>{m.label}</p>
                  <span>{m.tag}</span>
                </div>
                <strong className={m.positive ? 'is-positive' : ''}>{m.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
