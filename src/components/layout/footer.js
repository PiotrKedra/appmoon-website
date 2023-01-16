import React from 'react'
import './footer-style.scss'
import { GoMail } from 'react-icons/go';
import {BsGithub, BsFacebook, BsLinkedin} from 'react-icons/bs';

const Footer = () => (
  <section className="footer-section">
    <div className="ctn">
      <div className="text-ctn">
        <p className="footer-contact-text">CONTACT_US</p>
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

export default Footer;
