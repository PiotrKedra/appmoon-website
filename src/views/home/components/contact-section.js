import React from 'react'
import ContactForm from '../../../components/contact-form'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import '../style/contact-style.scss'

const ContactSection = () => {
  const {t} = useTranslation()

  return (
    <section className="contact-section">
      <div className="section-ctn inner-contact-section">
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
