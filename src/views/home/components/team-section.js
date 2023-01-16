import React from 'react'
import { ABOUT_SECTION } from '../../../components/home-page-sections'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { BLueFullCircle, OrangeFullCircle } from '../../../components/theme/theme-component'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import '../style/team-section.scss'
import SecondaryBtn from '../../../components/buttons/secondary-btn';

const TeamSection = () => {
  const {t} = useTranslation()

  return (
    <section id={ABOUT_SECTION}>
      <div className="ctn team-section-ctn">
        <div className="theme-ctn team-theme-ctn">
          <OrangeFullCircle className="orange-circle"/>
          <BLueFullCircle className="blue-circle"/>
        </div>
        <div className="text-ctn">
          <span className="section-label">{t`home.about_us2`}</span>
          <h2>{t`home.some_info`} <span className="h2-emoji">👋</span></h2>
        </div>
        <div className="members-ctn">
          <Card
            img={(
              <StaticImage
                src="../../../images/pawel-kocwa.jpg"
                alt="Paweł Kocwa"
                className="member-avatar"
              />
            )}
            name={'PAWEŁ KOCWA'}
            shortText={t`home.pawel_text`}
            longText={t`home.pawel_long_text`}
            linkedin={'https://www.linkedin.com/in/pawelkocwa/'}
          />
          <Card
            img={(
              <StaticImage
                src="../../../images/milosz-blasiak.jpg"
                alt="Miłosz Blasiak"
                className="member-avatar"
              />
            )}
            name={'MIŁOSZ BLASIAK'}
            shortText={t`home.milosz_text`}
            longText={t`home.milosz_long_text`}
            linkedin={'https://www.linkedin.com/in/mi%C5%82osz-blasiak-b97613179'}
            github={'https://github.com/mblasiak'}
          />
          <Card
            img={(
              <StaticImage
                src="../../../images/piotr-kedra.jpeg"
                alt="Piotr Kedra"
                className="member-avatar"
              />
            )}
            name={'PIOTR KĘDRA'}
            shortText={t`home.piotr_text`}
            longText={t`home.piotr_long_text`}
            linkedin={'https://www.linkedin.com/in/pkedra/'}
            github={'https://github.com/PiotrKedra'}
          />
        </div>
      </div>
    </section>
  );
}

const Card = ({img, name, shortText, linkedin, github}) => {
  const {t} = useTranslation()

  return (
    <div className="text-ctn">
      <div className="top-ctn">
        <div className="img-ctn">
          {img}
        </div>
        <div className="member-socials">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn size="1.8rem"/>
          </a>
          {
            github != null && (
              <a href={github} target="_blank" rel="noreferrer">
                <FaGithub style={{marginLeft: '1rem'}} size="1.8rem"/>
              </a>
            )
          }
        </div>
      </div>
      <h3>{name}</h3>
      <p>
        {shortText}
      </p>
      <SecondaryBtn text={t`home.read_more`}/>
    </div>
  );
}

export default TeamSection;
