import * as React from "react"
import './style.css'
import { StaticImage } from 'gatsby-plugin-image';
import { GoMail } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import scrollTo from 'gatsby-plugin-smoothscroll';
import ContactForm from '../components/contact-form';
import '../components/card.sass'
import FlippingCard from '../components/card';
import { Helmet } from 'react-helmet';
import favicon from '../images/codenauts.png'

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

      <Helmet
        title={'Codenauts'}
        meta={[
          {
            name: `description`,
            content: 'We are a group of enthusiasts who work in several IT fields. Solving problems is our passion.',
          },
          {
            name: `author`,
            content: 'Codenauts'
          },
          {
            property: `og:image`,
            content: favicon
          },
        ]}
      />

      <StaticImage
        src="../images/blurred-bg.png"
        alt="blurred background"
        className="gradient main-bg-desktop"
        placeholder="none"
        loading="lazy"
      />

      <StaticImage
        src="../images/blurred-bg-mobile.png"
        alt="blurred background"
        className="gradient main-bg-mobile"
        placeholder="none"
        loading="lazy"
      />

      <div className="menu-ctn">
        <div className="ctn menu-inner-ctn">
          <div className="logo-ctn">
            <StaticImage
              src="../images/codenauts.png"
              alt="Codenauts icon"
              placeholder="none"
              loading="eager"
              className="logo-icon"
            />
            <h3 className="logo-text">Codenauts</h3>
          </div>
          <nav className="desktop-nav">
            <button onClick={() => scrollTo(`#${START_SECTION}`)}>START</button>
            <button onClick={() => scrollTo(`#${OFFER_SECTION}`)}>OFFER</button>
            <button onClick={() => scrollTo(`#${ABOUT_SECTION}`)}>ABOUT US</button>
            <button onClick={() => scrollTo(`#${CONTACT_SECTION}`)}>CONTACT</button>
          </nav>
        </div>
      </div>

      <div style={{overflow: 'hidden', width: '100%', zIndex: 3}}>
        <div id={START_SECTION} className="ctn landing-ctn">
          <h1>We provide tailor-made IT solutions</h1>
          <p>
            You have an idea for a product or app but don't know how to make it? Need outsourcing? Get in touch with us! 😎
          </p>
          <button onClick={() => scrollTo(`#${CONTACT_SECTION}`)} className="call-to-action_btn">
            <p>Contact us</p>
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

      <div className="overflow-ctn">
      <div id={OFFER_SECTION} className="ctn offer-ctn" >
        <div className="offer-text-ctn">
          <p className="section-subtitle">OUR OFFER</p>
          <h2>Check what we can do for you</h2>
          <p className="section-text">We are a group of enthusiasts who work in several IT fields. Solving problems is our passion. Check the services we offer.</p>
          <button onClick={() => scrollTo(`#${CONTACT_SECTION}`)} className="forward-btn">
            <p>Request a free quote</p>
            <BsArrowRight style={{marginLeft: '1rem'}} size="1.7rem"/>
          </button>
        </div>
        <div className="offer-offer-ctn">
          <StaticImage
            src="../images/main-gradient-moon.png"
            alt="Moon gradient"
            className="offer-gradient"
            placeholder="none"
          />
          <div className="glassy-ctn g1">
            <h3>Web applications</h3>
            <p>From websites to more complex applications that require frontend/backend division</p>
          </div>
          <div className="glassy-ctn g2">
            <h3>Embedded systems</h3>
            <p>Custom projects using microcontrollers or FPGA, PCB Prototyping, device controllers</p>
          </div>
          <div className="glassy-ctn g3">
            <h3>Mobile apps</h3>
            <p>Using modern cross-platform frameworks to deliver best in class mobile apps</p>
          </div>
          <div className="glassy-ctn g4">
            <h3>R&D</h3>
            <p>Python scripts, measurements automation, GUI, frameworks, PCB Prototyping</p>
          </div>
        </div>
      </div>
      </div>

      <div className="overflow-ctn">
      <div id={ABOUT_SECTION} className="ctn about-us_ctn">
        <div style={{zIndex: 1}}>
          <p className="section-subtitle">ABOUT US</p>
          <h2>Some information about us <span className="h2-emoji">👋</span></h2>
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
          <FlippingCard
            img={(
              <StaticImage
                src="../images/pawel-kocwa.jpg"
                alt="Paweł Kocwa"
                className="member-avatar"
              />
            )}
            name={'PAWEŁ KOCWA'}
            shortText={'Experience in Python GUI apps. Currently developing apps and embedded solutions. In Codenauts I am doing embedded and R&D projects.'}
            longText={'Since 2018, I have been developing software supporting the automation of processes, among others in R&D laboratories or in positions for device certification. My apps are currently in service at the customer\'s quarters. For several months I have also been working on the development of intelligent devices, such as ZBM OSSA torque wrench. In the meantime, I obtained a Master\'s degree in Automation and Robotics AGH University. I am also planning to start PhD studies this year.'}
            linkedin={'https://www.linkedin.com/in/pawelkocwa/'}
          />
          <FlippingCard
            img={(
              <StaticImage
                src="../images/milosz-blasiak.jpg"
                alt="Miłosz Blasiak"
                className="member-avatar"
              />
            )}
            name={'MIŁOSZ BLASIAK'}
            shortText={'Full Stack developer with 3 years of commercial experience, open to new challenges and supporting the team in different areas.'}
            longText={'Through my last three years in professional software development I have learned that beautiful code that does not provide value for the user is worthless, but also using shortcuts at the beginning often causes a lot of problems later on. I believe that keeping a balance between software quality and delivering business values is the hardest and most important task of a software developer. I focus mainly on web application, backend as well as frontend, but I am always open to new challenges and supporting the team in different areas.'}
            linkedin={'https://www.linkedin.com/in/mi%C5%82osz-blasiak-b97613179'}
            github={'https://github.com/mblasiak'}
          />
          <FlippingCard
            img={(
              <StaticImage
                src="../images/piotr_kedra.jpeg"
                alt="Piotr Kedra"
                className="member-avatar"
              />
            )}
            name={'PIOTR KĘDRA'}
            shortText={'Working experience in backend development. Currently more into mobile/web technologies. In Codenauts I am responsible for both.'}
            longText={'I started my adventure with programming around 2016/2017. The first program I wrote was a game based on Icy Tower. In the meantime, I obtained a degree in Computer Science from AGH UST in Krakow. Currently, I am closing up my Master\'s degree at 2 universities Wroclaw University of Science and Technology and Technical University in Munich.  I used to work as a backend developer, but when it comes to recent years, I am more into mobile/web development.'}
            linkedin={'https://www.linkedin.com/in/pkedra/'}
            github={'https://github.com/PiotrKedra'}
          />
        </div>
      </div>
      </div>

      <div className="overflow-ctn over-contact-ctn">
        <div id={CONTACT_SECTION} className="ctn offer-ctn contact-ctn">
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
            <p className="section-subtitle">CONTACT</p>
            <h2>Interested in working with us?</h2>
            <p className="section-text">You can contact us via the form or simply by sending us mail. Don't hesitate and let us know. 😅 </p>
            <a className="forward-btn" href="mailto:contact@codenauts.io">
              <GoMail style={{marginRight: '1rem'}} size="1.8rem"/>
              <p>contact@codenauts.io</p>
            </a>
          </div>
          <div className="contact-form-ctn">
            <h2 style={{marginBottom: '2rem', fontSize: '28px'}}>Send us a message</h2>
            <ContactForm/>
          </div>
        </div>
      </div>
      <div className="ctn" style={{margin: 0, width: '100%'}}>
        <p className="copyright">2022 © Codenauts. All rights reserved.</p>
      </div>
    </main>
  )
}

export default IndexPage
