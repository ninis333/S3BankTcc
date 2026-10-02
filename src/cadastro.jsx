	import './cadastro.css'
	import './index.css'
	import LogoCor from './assets/Logo_Cor.png'
	import LogoBranco from './assets/logo.png'
	import './styles/tokens.css'
	import CartoesJuntosInicio from './assets/cartoes_juntos.png'
	import { FaPhone, FaEnvelope, FaLock } from 'react-icons/fa'
	import { useEffect, useState } from 'react'
	import { useNavigate } from 'react-router-dom'

	function Cadastro() {
		const [paginaCarregada, setPaginaCarregada] = useState(false)

		useEffect(() => {
			setPaginaCarregada(true)
		}, [])

		return (
			<main className={`cadastro ${paginaCarregada ? 'pagina-carregada' : ''}`}>
				<div className="containerTodo">
					<div className="containerEsquerda">
						<LogoCorEsquerda />
						<TextoCor />
						<Subtitulo />
						<CartoesJuntos />
					</div>
					<div className="containerDireita">
						<BoxCadastro />
					</div>
				</div>
				<div className="footerPaginaCadastro">
					<FooterCadastro />
				</div>
			</main>
		)
	}

	export default Cadastro


	/*
	Exporte das logos
	*/

	export const LogoCorEsquerda = () => {
		return (
			<div className="logoCor">
				<img src={LogoCor} alt="Logo_Cor" className="logo-cor" />
			</div>
		)
	}

	export const LogoBrancoDireita = () => {
		return (
			<div className="logoBranco">
				<img src={LogoBranco} alt="Logo_Branco" className="logo-branco" />
			</div>
		)
	}


	/*
	título da página com cor.
	*/

	export const TextoCor = () => {
		return (
			<div className="textoCor">
				<div className="text-wrapper">Bem vindo ao S3Bank</div>
			</div>
		)
	}

	/*
	subtítulo da página.
	*/

	export const Subtitulo = () => {
	return (
		<div className="subtitulo">
		<p className="sua-vida-fianceira">
			Sua vida fianceira <br />
			em um só lugar.
		</p>
		</div>
	);
	}

	/*
	imagem dos cartões
	*/

	export const CartoesJuntos = () => {
		return (
			<div className="cartoes">
				<img src={CartoesJuntosInicio} alt="Cartões" className="cartoes" />
			</div>
		)
	}

	/*
	box cor
	*/


	export const BoxCadastro = () => {
		const navigate = useNavigate()

	return (
		<div className="box">
		<div className="retangulo">
			<h1 className="logoBranco">S3Bank</h1>
			<button className="botao-convidado" onClick={() => navigate('/home')}>
			Entrar como convidado
			</button>
			<p className="sua-organizacao-financeira">
			Sua organização financeira <br />
			nunca ficou tão facil
			</p>
		</div>
		</div>

	);
	}

	/*
	texto footer
	*/

	export const FooterCadastro = () => {
		return (
	<div className="footerCadastro">
		<div className="footerItem">
			<FaLock />
			<p className="seguro-footer">Ambiente 100% seguro</p>
		</div>
		<div className="footerItem">
			<FaEnvelope />
			<p className="email-footer">S3Bank@gmail.com</p>
		</div>
		<div className="footerItem">
			<FaPhone />
			<p className="telefone-footer">+55 11 9999-9999</p>
		</div>
		</div>
	);
	}
