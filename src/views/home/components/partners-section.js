import React from 'react';
import '../style/partners-section-style.scss'
import { StaticImage } from 'gatsby-plugin-image';
import {useTranslation} from "gatsby-plugin-react-i18next";

const PartnersSection = () => {
  const {t} = useTranslation()

  return (
      <section className="section-ctn partners-section">
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
            <a href="https://www.linkedin.com/company/play-air/" target="_blank" rel="noreferrer">
              <StaticImage
                  src="../../../images/home/partners/play_air_dark.png"
                  alt="Play.air logo"
                  placeholder="none"
                  loading="lazy"
              />
            </a>
            <a href="https://www.sma-magnetics.com/" target="_blank" rel="noreferrer">
              <StaticImage
                  src="../../../images/home/partners/sma-logo.png"
                  alt="SMA Magnetics logo"
                  placeholder="none"
                  loading="lazy"
              />
            </a>
            <a href="https://mrame.cm-uj.krakow.pl/" target="_blank" rel="noreferrer">
              <StaticImage
                  src="../../../images/home/partners/mrame-logo.png"
                  alt="Mixed Reality supporting Advanced Medical Education logo"
                  placeholder="none"
                  loading="lazy"
              />
            </a>
            <a href="https://cmcr.cm-uj.krakow.pl/" target="_blank" rel="noreferrer">
              <StaticImage
                  src="../../../images/home/partners/cmcr_logo.png"
                  alt="CMCR"
                  placeholder="none"
                  loading="lazy"
              />
            </a>
            <a href="https://holomed.cm-uj.krakow.pl/" target="_blank" rel="noreferrer">
              <StaticImage
                  src="../../../images/home/partners/holomed_logo.png"
                  alt="HoloMed"
                  placeholder="none"
                  loading="lazy"
              />
            </a>

            <a href="https://www.ossa.pl/" target="_blank" rel="noreferrer">
              <StaticImage
                  src="../../../images/home/partners/ossa-logo.png"
                  alt="OSSA logo"
                  placeholder="none"
                  loading="lazy"
              />
            </a>
            <a href="https://www.doctorkimchi.com/" target="_blank" rel="noreferrer">
              <StaticImage
                  src="../../../images/home/partners/doctor-kimchi-logo.png"
                  alt="Doctor Kimchi logo"
                  placeholder="none"
                  loading="lazy"
              />
            </a>
            <a href="https://sun-times.pl/" target="_blank" rel="noreferrer">
              <StaticImage
                  src="../../../images/home/partners/suntimes-logo.png"
                  alt="Sun Times logo"
                  placeholder="none"
                  loading="lazy"
              />
            </a>
            <a href="https://bruzda-konopka.pl/" target="_blank" rel="noreferrer">
              <StaticImage
                  src="../../../images/home/partners/bruzda_konopka_logo.svg"
                  alt="Bruzda Konopka Adwokaci logo"
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
