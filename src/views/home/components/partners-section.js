import React from 'react';
import '../style/partners-section-style.scss'
import { StaticImage } from 'gatsby-plugin-image';
import {useTranslation} from "gatsby-plugin-react-i18next";

const PartnersSection = () => {
  const {t} = useTranslation()

  return (
      <section className="section-ctn partners-section" style={{paddingTop: '5rem'}}>
        <div className="ctn">
          <div className="text-ctn">
            <span className="section-label">{t`home.partners_subtitle`}</span>
            <h2>{t`home.partners_title`}</h2>
          </div>
          <div className="logo-grid">
            <a href="https://www.innovationshub.pl/" target="_blank" rel="noreferrer">
              <StaticImage
                  src="../../../images/home/partners/inhub-logo-white.png"
                  alt="Innovations Hub Foundation logo"
                  placeholder="none"
                  loading="lazy"
              />
            </a>
          </div>
        </div>
      </section>
  );
}

export default PartnersSection;
