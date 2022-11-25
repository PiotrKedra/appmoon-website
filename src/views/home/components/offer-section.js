import React from 'react';
import '../style/offer-section-style.scss'
import { useTranslation } from 'gatsby-plugin-react-i18next';
import SecondaryBtn from '../../../components/buttons/secondary-btn';
import { OrangeFullCircle } from '../../../components/theme/theme-component';
import { gsap } from 'gsap';


const OfferSection = () => {
  const {t} = useTranslation()
  const offerCtn = React.useRef(null);

  React.useEffect(() => {
    gsap.from('#offerTextCtn', {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: '.offer-ctn',
        scrub: 1,
        start: "top 95%",
        end: 'top 90%',
      }
    })

    const offerItems = offerCtn.current.querySelectorAll(".text-ctn")
    for (const offerItem of offerItems) {
      gsap.from(offerItem, {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: offerItem,
          scrub: 1,
          start: "top 95%",
          end: 'top 90%',
        }
      })
    }
  }, [])

  return (
    <section className="section-ctn">
      <div className="theme-ctn offer-theme-ctn">
        <OrangeFullCircle className="theme"/>
      </div>
      <div className="ctn offer-ctn">
        <div id="offerTextCtn" className="text-ctn">
          <span className="section-label">{t`home.our_offer`}</span>
          <h2>{t`home.offer_title`}</h2>
          <p>{t`home.offer_description`}</p>
        </div>
        <div className="offer-item-up-ctn" ref={offerCtn}>
          <div>
            <div className="text-ctn">
              <h3>{t`home.web_applications`}</h3>
              <p>{t`home.web_applications_text`}</p>
              <SecondaryBtn text={t`home.read_more`}/>
            </div>
            <div className="text-ctn">
              <h3>{t`home.embedded_systems`}</h3>
              <p>{t`home.embedded_text`}</p>
              <SecondaryBtn text={t`home.read_more`}/>
            </div>
          </div>
          <div>
            <div className="text-ctn">
              <h3>{t`home.mobile_apps`}</h3>
              <p>{t`home.mobile_apps_text`}</p>
              <SecondaryBtn text={t`home.read_more`}/>
            </div>
            <div className="text-ctn">
              <h3>{t`home.r_and_d`}</h3>
              <p>{t`home.r_and_d_text`}</p>
              <SecondaryBtn text={t`home.read_more`}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
