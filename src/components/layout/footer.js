import React from 'react'
import './footer-style.scss'
import { GoMail } from 'react-icons/go';
import {BsGithub, BsFacebook, BsLinkedin} from 'react-icons/bs';
import {useTranslation} from "gatsby-plugin-react-i18next";

const Footer = () => {
  const {t} = useTranslation()

  return (
      <section className="footer-section">
        <div className="ctn">
          <div className="text-ctn">
            <h2>{t`home.contact_us_footer`}</h2>
            <a href="mailto:contact@codenauts.io">
              <GoMail size="1.8rem"/>
              <p>contact@codenauts.io</p>
            </a>
          </div>
          <div className="social-ctn">
            <p>Made with シ in Kraków by Codenauts</p>
            <div>
              <a href="https://github.com/codenauts-io" target="_blank" rel="noreferrer">
                <BsGithub/>
              </a>
              <a href="https://www.facebook.com/Codenauts.io" target="_blank" rel="noreferrer">
                <BsFacebook/>
              </a>
              <a href="https://www.linkedin.com/company/codenauts/" target="_blank" rel="noreferrer">
                <BsLinkedin/>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Footer;
