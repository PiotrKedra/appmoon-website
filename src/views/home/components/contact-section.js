import React from 'react'
import ContactForm from '../../../components/contact-form'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import '../style/contact-style.scss'
import { gsap } from 'gsap'

const ContactSection = () => {
  const {t} = useTranslation()

  React.useEffect(() => {
    gsap.from('.contact-section', {
      scale: 0.7,
      scrollTrigger: {
        trigger: '.contact-section',
        scrub: 1,
        start: "top 95%",
        end: 'top 70%',
      }
    })
  }, [])

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
