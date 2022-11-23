import React from 'react';
import '../style/offer-section-style.scss'
import { useTranslation } from 'gatsby-plugin-react-i18next';
import SecondaryBtn from '../../../components/buttons/secondary-btn';
import { OrangeFullCircle } from '../../../components/theme/theme-component';

const OfferSection = () => {
  const {t} = useTranslation()

  return (
    <section className="section-ctn">
      <div className="ctn offer-ctn">
        <div className="text-ctn">
          <span className="section-label">{t`home.our_offer`}</span>
          <h2>{t`home.offer_title`}</h2>
          <p>{t`home.offer_description`}</p>
        </div>
        <div className="offer-item-up-ctn">
          <OrangeFullCircle className="theme"/>
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
