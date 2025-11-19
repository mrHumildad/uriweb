import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import logo from '../assets/logo.png'
import hero from '../assets/hero.jpg'
import superCover from '../assets/header/super2.png'
import magicusCover from '../assets/header/magicus1.png'
import improCover from '../assets/header/impro1.png'
import nadalCover from '../assets/covers/nadal.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareFacebook, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircleDown, faSquareEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const navigate = useNavigate()
  const personajesRef = useRef(null)
  const INSTAGRAM_URL = 'https://www.instagram.com/moncirc/'
  const MAILTO = 'mailto:spaguetiespectacles@gmail.com'
  const TEL = 'tel:+34623240415'
  const WHATSAPP_URL = 'https://wa.me/34623240415'
  const INSTA ='https://www.instagram.com/urispagueti/'

  const scrollToPersonajes = (e) => {
    if (e?.preventDefault) e.preventDefault()

    const el = personajesRef.current
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      const fallback = document.querySelector('.personajes') || document.getElementById('personajes')
      if (fallback) fallback.scrollIntoView({ behavior: 'smooth' })
      else console.warn('No target element found to scroll to.')
    }
  }

  return (
    <div className="Home">
      <header className="hero" role="banner" aria-label="Hero banner" style={{ backgroundImage: `url(${hero})` }}>
          <div className="social-top">
          <FontAwesomeIcon
            icon={faSquarePhone}
            onClick={(e) => {
              // Ctrl/Cmd + click opens WhatsApp, regular click opens phone dialer
              if (e.ctrlKey || e.metaKey) {
                window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
              } else {
                window.location.href = TEL
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                window.location.href = TEL
              } else if (e.key === 'w' || e.key === 'W') {
                // quick keyboard shortcut to open WhatsApp when focused
                window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Call +34 623240415 (Ctrl+click opens WhatsApp)"
            style={{ cursor: 'pointer' }}
          />
          <FontAwesomeIcon
            icon={faSquareEnvelope}
            onClick={() => { window.location.href = MAILTO }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                window.location.href = MAILTO
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Send email to spaguetiespectacles@gmail.com"
            style={{ cursor: 'pointer' }}
          />
          {/* <FontAwesomeIcon icon={faSquareFacebook} />
          <FontAwesomeIcon icon={faSquareXTwitter} /> */}
          <FontAwesomeIcon
            icon={faSquareInstagram}
            onClick={() => window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer')
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Open Instagram (opens in a new tab)"
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <h1 className="title">ESPECTACLES I SOMRIURES PER TOTHOM</h1>
        </div>
      </header>

      <main className="container" role="main">
        <section className="intro">
          <img src={logo} alt="Mon Circ" className="logo-intro" />
          <div className="intro-text">
            <p>
              Aquí trobaràs tota la informació sobre els meus espectacles i activitats. Si busques
              diversió, rialles i moments inoblidables, has arribat al lloc correcte! baixa per
              descobrir els meus personatges!
            </p>
            <button
              onClick={scrollToPersonajes}
              className="scroll-button desktop"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                marginTop: '1rem',
              }}
            >
              <FontAwesomeIcon className='desktop' icon={faCircleDown} beat size="2x" />
            </button>
          </div>
        </section>

        <section className="personajes" ref={personajesRef}>
          <div className="pers-container">
            <div style={{ backgroundImage: `url(${superCover})` }} className="personaje" onClick={() => navigate('/super')} id="superLink" >
              <h4 className="personaje-title desktop superLink-title">SUPER SPAGUETI</h4>
            </div>
            <h4 className="personaje-title-mobile mobile superLink-title">SUPER SPAGUETI</h4>
          </div>

          <div className="pers-container">
            <div style={{ backgroundImage: `url(${magicusCover})` }} className="personaje" onClick={() => navigate('/magicus')} id="magicusLink">
              <h4 className="personaje-title desktop magicusLink-title">MON MÀGIA</h4>
            </div>
            <h4 className="personaje-title-mobile mobile magicusLink-title">MON MÀGIA</h4>
          </div>

          <div className="pers-container">
            <div style={{ backgroundImage: `url(${improCover})` }}className="personaje" onClick={() => navigate('/impro')} id="improLink">
              <h4 className="personaje-title desktop improLink-title">IMPRO&#8203;VISTOS</h4>
            </div>
            <h4 className="personaje-title-mobile mobile improLink-title">IMPRO&#8203;VISTOS</h4>
          </div>

          <div className="pers-container">
            <div style={{ backgroundImage: `url(${nadalCover})` }} className="personaje" onClick={() => navigate('/nadal')} id="nadalLink">
              <h4 className="personaje-title desktop nadalLink-title">QUIN NADAL!</h4>
            </div>
            <h4 className="personaje-title-mobile mobile nadalLink-title">QUIN NADAL!</h4>
          </div>
        </section>

        <section className="bottom">
          <div className="main-text">
            <p className="parraph">
              Els espectacles i tallers de Mon Circ destaquen per ser dinàmics, participatius i
              adaptables a qualsevol context: carrers i places, teatres, festivals, esdeveniments
              familiars o programacions culturals. L’objectiu és clar: generar rialles, emoció i
              records inesborrables tant en infants com en adults.
            </p>
            <p className="parraph">
              Amb una proposta fresca i capaç d’arribar a tots els públics que uneix circ, teatre i
              màgia, Mon Circ ofereix un segell de qualitat i professionalitat.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
