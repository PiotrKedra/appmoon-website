import * as React from "react"
// import './style.css'
import { StaticImage } from 'gatsby-plugin-image';
import { GoMail } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import scrollTo from 'gatsby-plugin-smoothscroll';
import ContactForm from '../components/contact-form';
import '../components/card.sass'
import FlippingCard from '../components/card';
import { Helmet } from 'react-helmet';
import favicon from '../images/codenauts.png'
import MobileMenu from '../components/mobile-menu';
import LanguageSelector from '../components/language-selector';
import {useTranslation} from "gatsby-plugin-react-i18next";
import { graphql } from 'gatsby';
import { ABOUT_SECTION, CONTACT_SECTION, OFFER_SECTION, START_SECTION } from '../components/home-page-sections';


const IndexPage = () => {

  const [offset, setOffset] = React.useState(0);
  const {t} = useTranslation()


  React.useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
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
        title={t`title`}
        meta={[
          {
            name: `description`,
            content: t`description`,
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

      <MobileMenu/>

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
            <button onClick={() => scrollTo(`#${START_SECTION}`)}>{t`home.start`}</button>
            <button onClick={() => scrollTo(`#${OFFER_SECTION}`)}>{t`home.offer`}</button>
            <button onClick={() => scrollTo(`#${ABOUT_SECTION}`)}>{t`home.about_us`}</button>
            <button onClick={() => scrollTo(`#${CONTACT_SECTION}`)}>{t`home.contact`}</button>
            <LanguageSelector/>
          </nav>
        </div>
      </div>

      <div style={{overflow: 'hidden', width: '100%', zIndex: 3}}>
        <div id={START_SECTION} className="ctn landing-ctn">
          <h1>{t`home.cta_title1`}<span className="nowrap-span">{t`home.cta_title2`}</span>{t`home.cta_title3`}</h1>
          <p>
            {t`home.cta_description`} 😎
          </p>
          <button onClick={() => scrollTo(`#${CONTACT_SECTION}`)} className="call-to-action_btn">
            <p>{t`home.contact_us`}</p>
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
          <p className="section-subtitle">{t`home.our_offer`}</p>
          <h2>{t`home.offer_title`}</h2>
          <p className="section-text">{t`home.offer_description`}</p>
          <button onClick={() => scrollTo(`#${CONTACT_SECTION}`)} className="forward-btn">
            <p>{t`home.request_quote`}</p>
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
            <h3>{t`home.web_applications`}</h3>
            <p>{t`home.web_applications_text`}</p>
          </div>
          <div className="glassy-ctn g2">
            <h3>{t`home.embedded_systems`}</h3>
            <p>{t`home.embedded_text`}</p>
          </div>
          <div className="glassy-ctn g3">
            <h3>{t`home.mobile_apps`}</h3>
            <p>{t`home.mobile_apps_text`}</p>
          </div>
          <div className="glassy-ctn g4">
            <h3>{t`home.r_and_d`}</h3>
            <p>{t`home.r_and_d_text`}</p>
          </div>
        </div>
      </div>
      </div>

      <div className="overflow-ctn">
      <div id={ABOUT_SECTION} className="ctn about-us_ctn">
        <div style={{zIndex: 1}}>
          <p className="section-subtitle">{t`home.about_us2`}</p>
          <h2>{t`home.some_info`} <span className="h2-emoji">👋</span></h2>
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
            shortText={t`home.pawel_text`}
            longText={t`home.pawel_long_text`}
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
            shortText={t`home.milosz_text`}
            longText={t`home.milosz_long_text`}
            linkedin={'https://www.linkedin.com/in/mi%C5%82osz-blasiak-b97613179'}
            github={'https://github.com/mblasiak'}
          />
          <FlippingCard
            img={(
              <StaticImage
                src="../images/piotr-kedra.jpg"
                alt="Piotr Kedra"
                className="member-avatar"
              />
            )}
            name={'PIOTR KĘDRA'}
            shortText={t`home.piotr_text`}
            longText={t`home.piotr_long_text`}
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
            <p className="section-subtitle">{t`home.contact2`}</p>
            <h2>{t`home.contact_title`}</h2>
            <p className="section-text">{t`home.contact_description`} 😅 </p>
            <a className="forward-btn" href="mailto:contact@codenauts.io">
              <GoMail style={{marginRight: '1rem'}} size="1.8rem"/>
              <p>contact@codenauts.io</p>
            </a>
          </div>
          <div className="contact-form-ctn">
            <h2 style={{marginBottom: '2rem', fontSize: '28px'}}>{t`home.send_us_message`}</h2>
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

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
