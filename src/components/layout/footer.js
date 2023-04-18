import React from 'react'
import './footer-style.scss'
import { GoMail } from 'react-icons/go';
import {BsGithub, BsFacebook, BsLinkedin, BsTelephone} from 'react-icons/bs';
import {useTranslation} from "gatsby-plugin-react-i18next";
import {withPrefix} from "gatsby";

const Footer = () => {
  const {t} = useTranslation()

  return (
      <section className="footer-section">
        <div className="ctn">
          <div className="top-ctn">
            <div className="text-ctn">
              <h2>{t`home.contact_us_footer`}</h2>
              <a href="mailto:contact@codenauts.io">
                <GoMail size="1.8rem"/>
                <p>contact@codenauts.io</p>
              </a>
              <a href="tel:+48453140959">
                <BsTelephone size="1.8rem"/>
                <p>+48 453 140 959</p>
              </a>
            </div>
            <div className="text-ctn company-data">
              <h4>{t`home.company_data`}</h4>
              <div>
                <p>{t`home.codenauts_spzoo`}</p>
                <p>{t`home.codenauts_address`}</p>
                <p>{t`home.codenauts_nip_krs`}</p>
              </div>
            </div>
          </div>
          <div className="social-ctn">
            <p><a href={withPrefix('privacy-policy.pdf')} target="_blank" rel="noreferrer">{t`home.privacy_policy`}</a> | Made with シ in Kraków by Codenauts</p>
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
