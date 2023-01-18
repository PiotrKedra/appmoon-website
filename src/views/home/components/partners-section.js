import React from 'react';
import '../style/partners-section-style.scss'
import { StaticImage } from 'gatsby-plugin-image';

const PartnersSection = () => (
  <section className="section-ctn partners-section">
    <div className="ctn">
      <h2>We are proud to be working with you</h2>
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
            src="../../../images/home/partners/playair-logo.png"
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
        <a href="https://sun-times.pl/" target="_blank" rel="noreferrer">
          <StaticImage
            src="../../../images/home/partners/suntimes-logo.png"
            alt="Sun Times logo"
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
      </div>
    </div>
  </section>
);

export default PartnersSection;
