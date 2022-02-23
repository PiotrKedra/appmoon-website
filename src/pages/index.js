import * as React from "react"
import './style.css'
import { StaticImage } from 'gatsby-plugin-image';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import scrollTo from 'gatsby-plugin-smoothscroll';
import ContactForm from './contact-form';

const START_SECTION = "start"
const OFFER_SECTION = "offer"
const ABOUT_SECTION = "about"
const CONTACT_SECTION = "contact"

const IndexPage = () => {

  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  let arrowBtnStyle = "nav-arrow-icon";
  let arrowScrollFunction = () => scrollTo(`#${OFFER_SECTION}`)
  if (offset > 50) {
    arrowBtnStyle = "nav-arrow-icon nav-arrow-icon-bottom";
    arrowScrollFunction = () => scrollTo('#start')
  }

  return (
    <main className="page-ctn">
      <title>AppMoon</title>

      <StaticImage
        src="../images/blurred-bg.png"
        alt="blurred background"
        className="gradient main-bg-desktop"
        placeholder="none"
        loading="eager"
      />

      <StaticImage
        src="../images/blurred-bg-mobile.png"
        alt="blurred background"
        className="gradient main-bg-mobile"
        placeholder="none"
        loading="eager"
      />

      <div className="menu-ctn">
        <div className="ctn menu-inner-ctn">
          <h3>appmoon</h3>
          <nav className="desktop-nav">
            <button onClick={() => scrollTo(`#${START_SECTION}`)}>START</button>
            <button onClick={() => scrollTo(`#${OFFER_SECTION}`)}>OFERTA</button>
            <button onClick={() => scrollTo(`#${ABOUT_SECTION}`)}>O NAS</button>
            <button onClick={() => scrollTo(`#${CONTACT_SECTION}`)}>KONTAKT</button>
          </nav>
        </div>
      </div>

      <div style={{overflow: 'hidden', width: '100%', zIndex: 3}}>
        <div id={START_SECTION} className="ctn landing-ctn">
          <h1>Chwitliwy tekścior cool & super</h1>
          <p>Masz pomysł na produkt lub aplikację, ale nie wiesz jak się za to zabrać? Potrzebujesz zlecieć jakieś prace? Napisz do nas, prześlemy Ci wycenę za darmo! 😎</p>
          <button onClick={() => scrollTo(`#${CONTACT_SECTION}`)} className="call-to-action_btn">
            <p>Napisz do nas</p>
            <BsArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>

      <button onClick={arrowScrollFunction} className={arrowBtnStyle}>
        <StaticImage
          src="../images/arrow-right.png"
          alt="Right arrow"
          placeholder="none"
          loading="eager"
        />
      </button>

      <div id={OFFER_SECTION} className="overflow-ctn">
      <div className="ctn offer-ctn" >
        <div className="offer-text-ctn">
          <p className="section-subtitle">NASZA OFERTA</p>
          <h2>Działamy w wielu dziedzinach</h2>
          <p className="section-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <a className="forward-btn">
            <p>Poproś o darmową wycenę</p>
            <BsArrowRight style={{marginLeft: '1rem'}} size="1.7rem"/>
          </a>
        </div>
        <div className="offer-offer-ctn">
          <StaticImage
            src="../images/main-gradient-moon.png"
            alt="Moon gradient"
            className="offer-gradient"
            placeholder="none"
          />
          <div className="glassy-ctn g1">
            <h3>Aplikacje webowe</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem impusm cos tam dalej</p>
          </div>
          <div className="glassy-ctn g2">
            <h3>Systemy embedded</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
          </div>
          <div className="glassy-ctn g3">
            <h3>Aplikacje mobilne</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
          </div>
          <div className="glassy-ctn g4">
            <h3>R&D</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
          </div>
        </div>
      </div>
      </div>

      <div className="overflow-ctn">
      <div id={ABOUT_SECTION} className="ctn about-us_ctn">
        <div style={{zIndex: 1}}>
          <p className="section-subtitle">O NAS</p>
          <h2>Troche informacji o nas <span className="h2-emoji">👋</span></h2>
        </div>
        <div className="members-ctn">
          <StaticImage
            src="../images/blue-gradient-moon.png"
            alt="Moon gradient"
            className="member-left-gradient"
            placeholder="none"
          />
          <StaticImage
            src="../images/purple-gradient-moon.png"
            alt="Moon gradient"
            className="member-right-gradient"
            placeholder="none"
          />
          <div className="glassy-ctn">
            <StaticImage
              src="../images/piotr_kedra.jpeg"
              alt="Piotr Kedra"
              className="member-avatar"
            />
            <h3>PIOTR KĘDRA</h3>
            <p>Since 2018 I am actively involved in developing software that helps automate processes in the R&D laboratories. Several of my apps are currently in service at the customer's quarters. In meantime, </p>
            <div className="member-socials">
              <a href="#">
                <FaLinkedinIn size="1.8rem"/>
              </a>
              <a href="#">
                <FaGithub style={{marginLeft: '1rem'}} size="1.8rem"/>
              </a>
            </div>
          </div>
          <div className="glassy-ctn">
            <StaticImage
              src="../images/piotr_kedra.jpeg"
              alt="Piotr Kedra"
              className="member-avatar"
            />
            <h3>PIOTR KĘDRA</h3>
            <p>Since 2018 I am actively involved in developing applications that help automate processes in the R&D laboratories, save data, </p>
            <div className="member-socials">
              <a href="#">
                <FaLinkedinIn size="1.8rem"/>
              </a>
              <a href="#">
                <FaGithub style={{marginLeft: '1rem'}} size="1.8rem"/>
              </a>
            </div>
          </div>
          <div className="glassy-ctn">
            <StaticImage
              src="../images/piotr_kedra.jpeg"
              alt="Piotr Kedra"
              className="member-avatar"
            />
            <h3>PIOTR KĘDRA</h3>
            <p>In IT since 2016. With a degree in Computer Science. Working experience in backend development. Currently more into mobile/web technologies. </p>
            <div className="member-socials">
              <a href="#">
                <FaLinkedinIn size="1.8rem"/>
              </a>
              <a href="#">
                <FaGithub style={{marginLeft: '1rem'}} size="1.8rem"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div id={CONTACT_SECTION} className="overflow-ctn over-contact-ctn">
        <div className="ctn offer-ctn contact-ctn">
          <StaticImage
            src="../images/rectangle-gradient.png"
            alt="Moon gradient"
            className="contact-gradient"
            placeholder="none"
            loading='lazy'
          />
          <StaticImage
            src="../images/rectangle-gradient.png"
            alt="Moon gradient"
            className="small-contact-gradient"
            placeholder="none"
            loading='lazy'
          />
          <div className="offer-text-ctn">
            <p className="section-subtitle">KONTAKT</p>
            <h2>Zainteresowany współpracą z nami?</h2>
            <p className="section-text">Poproś o darmową wycenę. Możesz się z nami skontaktować poprzez formularz obok, albo pisząc na naszego maila:</p>
            <a className="forward-btn">
              <GoMail style={{marginRight: '1rem'}} size="1.8rem"/>
              <p>contact@appmoon.io</p>
            </a>
          </div>
          <div className="contact-form-ctn">
            <h2 style={{marginBottom: '2rem', fontSize: '28px'}}>Wyślij do nas wiadomość</h2>
            <ContactForm/>
          </div>
        </div>
      </div>
      <div className="ctn" style={{margin: 0, width: '100%'}}>
        <p className="copyright">2022 © AppMoon. All rights reserved.</p>
      </div>
    </main>
  )
}

export default IndexPage
