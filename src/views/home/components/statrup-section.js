import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import '../style/startup-section-style.scss'
import { gsap } from 'gsap';

const StartupSection = () => {
  const {t} = useTranslation()

  React.useEffect(() => {
    gsap.from('.circle-animation-ctn', {
      scale: 0.5,
      opacity: 0.5,
      scrollTrigger: {
        trigger: '.circle-animation-ctn',
        scrub: 1,
        start: "top 100%",
        end: 'top 70%',
      }
    })
  }, [])

  return (
    <section className="section-ctn">
      <div className="theme-ctn startup-theme-ctn">
      </div>
      <div className="ctn startup-section-ctn">
        <div className="circle-animation-ctn">
          <div className="circle-tag-main-ctn">
            <div className="circle"/>
            <div className="tag-ctn tag1">
              <h3>your<br/>idea</h3>
            </div>
            <div className="tag-ctn tag2">
              <h3>concept</h3>
            </div>
            <div className="tag-ctn tag3">
              <h3>proof of<br/>principle</h3>
            </div>
            <div className="tag-ctn tag4">
              <h3>proof of<br/>concept</h3>
            </div>
            <div className="tag-ctn tag5">
              <h3>MVP</h3>
            </div>
            <div className="tag-ctn tag6">
              <h3>support</h3>
            </div>
          </div>
        </div>
        <div className="text-ctn">
          <span className="section-label">{t`home.steps_label`}</span>
          <h2>Startup</h2>
          <p>Cus tam jakis lorem impsum jescze wiincej niz bylo...</p>
        </div>
      </div>
    </section>
  );
}

export default StartupSection;
