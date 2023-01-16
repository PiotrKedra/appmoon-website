import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { ABOUT_SECTION, CONTACT_SECTION, OFFER_SECTION, START_SECTION } from '../home-page-sections';
import LanguageSelector from './language-selector';
import MobileMenu from './mobile-menu';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import "./menu-style.scss";

const Menu = () => {
  const {t} = useTranslation()

  return (
    <>
      <div className="menu-ctn">
        <div className="ctn menu-inner-ctn">
          <Link to="/" className="logo-ctn">
            <StaticImage
              src="../images/codenauts-logo.png"
              alt="Codenauts logo"
              placeholder="none"
              loading="eager"
              className="logo-icon"
            />
          </Link>
          <nav className="desktop-nav">
            <button onClick={() => scrollTo(`#${START_SECTION}`)}>{t`home.start`}</button>
            <button onClick={() => scrollTo(`#${OFFER_SECTION}`)}>{t`home.offer`}</button>
            <button onClick={() => scrollTo(`#${ABOUT_SECTION}`)}>{t`home.about_us`}</button>
            <button onClick={() => scrollTo(`#${CONTACT_SECTION}`)}>{t`home.contact`}</button>
            <LanguageSelector/>
          </nav>
        </div>
      </div>

      <MobileMenu/>
    </>
  );
}

export default Menu;
