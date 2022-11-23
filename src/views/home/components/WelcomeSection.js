import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import '../style/codentaus-tags-style.scss'
import MainBtn from '../../../components/buttons/btn';
import { BlueMatrixWithCircle } from '../../../components/theme/theme-component';

const WelcomeSection = () => {
  const {t} = useTranslation()

  return (
    <div className="ctn welcome-section-ctn">
      <div className="codenauts-bg-name-ctn">
        <span>Codenauts</span>
      </div>
      <div className="text-ctn">
        <div className="text-with-line-ctn">
          <div className="line"/>
          <p className="sub-text">{t`home.cta_description`} 😎</p>
        </div>
        <h1>
          <span>{t`home.cta_title1`}</span>
          <span className="nowrap-span">{t`home.cta_title2`}</span>
          <span>{t`home.cta_title3`}</span>
        </h1>
        <MainBtn text={t`home.contact_us`}/>
        <BlueMatrixWithCircle className="theme"/>
      </div>
    </div>
  );
}

export default WelcomeSection;
