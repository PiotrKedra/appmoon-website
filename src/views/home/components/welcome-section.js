import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import MainBtn from '../../../components/buttons/btn';
import { BlueMatrixWithCircle } from '../../../components/theme/theme-component';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const WelcomeSection = () => {
  const {t} = useTranslation()

  React.useEffect(() => {

    ScrollTrigger.matchMedia({
      "(min-width: 700px": function () {
        gsap.to('#homeMidTitle', {
          x: 150,
          scrollTrigger: {
            trigger: '#homeBottomTitle',
            scrub: 1,
            start: "top center",
            end: 'bottom 0',
          }
        })

        gsap.to('#homeTopTitle', {
          x: -100,
          scrollTrigger: {
            trigger: '#homeBottomTitle',
            scrub: 1,
            start: "top center",
            end: 'bottom 0',
          }
        })

        gsap.to('#homeBottomTitle', {
          x: -100,
          scrollTrigger: {
            trigger: '#homeBottomTitle',
            scrub: 1,
            start: "top center",
            end: 'bottom 0',
          }
        })
      }
    })

  }, [])

  return (
    <div className="welcome-section">
      <div className="ctn welcome-section-ctn">
        <div className="codenauts-bg-name-ctn">
          <span>Codenauts</span>
        </div>
        <div className="text-ctn">
          <div id="homeTitleText" className="text-with-line-ctn">
            <div className="line"/>
            <p className="sub-text">{t`home.cta_description`} 😎</p>
          </div>
          <h1 id="homeTitle">
            <span id="homeTopTitle">{t`home.cta_title1`}</span>
            <span id="homeMidTitle" className="nowrap-span">{t`home.cta_title2`}</span>
            <span id="homeBottomTitle"> {t`home.cta_title3`}</span>
          </h1>
          <div id="homeTitleBtn" >
            <MainBtn text={t`home.contact_us`}/>
          </div>
          <BlueMatrixWithCircle id="welcomeTheme" className="theme"/>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
