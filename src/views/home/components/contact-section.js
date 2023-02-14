import React from 'react'
import ContactForm from '../../../components/contact-form'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import '../style/contact-style.scss'
import {CONTACT_SECTION} from "../../../components/home-page-sections";
import {
  BlueMatrixWithCircle,
  OrangeFullCircle
} from "../../../components/theme/theme-component";

const ContactSection = () => {
  const {t} = useTranslation()

  return (
    <section id={CONTACT_SECTION} className="contact-section">
      <div className="section-ctn inner-contact-section">
        <div className="theme-ctn contact-theme-ctn">
          <OrangeFullCircle className="theme1"/>
          <BlueMatrixWithCircle className="theme2"/>
        </div>
        <div className="ctn contact-form-ctn">
          <div className="text-ctn">
            <h2>{t`home.send_us_message`}</h2>
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
