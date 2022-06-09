import React from 'react';
import MainBtn from '../../../components/buttons/main-btn';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const WelcomeSection = () => {
  const {t} = useTranslation()

  return (
    <div className="ctn welcome-section-ctn">
      <div className="text-ctn">
        <p>{t`home.cta_description`} 😎</p>
        <h1>{t`home.cta_title1`}<span className="nowrap-span">{t`home.cta_title2`}</span>{t`home.cta_title3`}</h1>
        <MainBtn text={t`home.contact_us`}/>
      </div>
    </div>
  );
}

export default WelcomeSection;
