# S3Bank Demo React

Projeto front-end de uma demonstração de banco digital fictício, construído com React e Vite. A aplicação apresenta uma experiência moderna de cadastro, landing page institucional, navegação por páginas de sobre, termos e privacidade, além de uma interface visual inspirada em bancos digitais.

## Visão geral

O projeto simula um banco digital com foco em:

- cadastro inicial e onboarding
- landing page institucional com apresentação da marca
- destaque de benefícios e diferenciais
- cartões com planos e níveis
- apresentação da experiência de uso do app
- páginas complementares de ajuda, termos e privacidade
- navegação com React Router
- layout responsivo e animações de entrada

## Stack

- React 18
- React Router DOM
- Vite
- React Icons
- CSS customizado

## Estrutura do projeto

```bash
src/
├── App.jsx                 # rotas da aplicação
├── cadasto.jsx             # tela de cadastro inicial
├── About.jsx               # página Sobre
├── Terms.jsx               # página de Termos de uso
├── Privacy.jsx             # página de Privacidade
├── Help.jsx                # página de Central de ajuda
├── home-animations.css     # animações de revelação
├── index.css               # estilos globais
├── cadastro.css            # estilos da tela de cadastro
├── About.css               # estilos da página Sobre
├── Terms.css               # estilos da página Termos
├── Privacy.css             # estilos da página Privacidade
├── main.jsx                # ponto de entrada
├── styles/
│   └── tokens.css          # tokens visuais e variáveis de tema
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Benefits.jsx
│   ├── CardTiers.jsx
│   ├── AppShowcase.jsx
│   ├── Security.jsx
│   ├── FinalCTA.jsx
│   └── Footer.jsx
├── assets/
│   ├── logo.png
│   ├── Logo_Cor.png
│   ├── cartoes_juntos.png
│   └── imagens dos cartões e itens visuais
└── ...
```

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação

```bash
git clone https://github.com/camposdevs/S3-Bank-demo-react.git
cd S3-Bank-demo-react
npm install
```

## Como executar

```bash
npm run dev
```

A aplicação será iniciada em modo de desenvolvimento e normalmente estará disponível em:

```bash
http://localhost:5173
```

## Build para produção

```bash
npm run build
```

Esse comando gera a pasta `dist/` com a versão pronta para deploy em plataformas como Vercel, Netlify ou GitHub Pages.

## Funcionalidades implementadas

- landing page institucional do S3Bank
- cadastro inicial com identidade visual da marca
- navegação entre páginas de informações
- cards com benefícios e diferenciais
- seção com planos de cartão
- mockup do app bancário
- seção de segurança e confiança
- chamadas para ação e rodapé institucional
- animações suaves de entrada/scroll

## Observações

- O projeto é uma demonstração front-end e não possui autenticação real ou integração com backend.
- Os textos e dados são fictícios, representando uma UI de referência para um banco digital.
- A estrutura foi pensada para facilitar manutenção, troca de conteúdo e personalização visual.

## Licença

Este projeto foi desenvolvido para fins demonstrativos e não possui licença comercial específica definida no repositório.

