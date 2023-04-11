import React from 'react'
import { ABOUT_SECTION } from '../../../components/home-page-sections'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { BLueFullCircle, OrangeFullCircle } from '../../../components/theme/theme-component'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import '../style/team-section.scss'

const TEAM_MEMBERS = [
  {
    name: 'PAWEŁ KOCWA',
    shortText: 'home.pawel_text',
    longText: 'home.pawel_long_text',
    linkedin: 'https://linkedin.com/in/pawelkocwa',
    pic: (
      <StaticImage
        src="../../../images/team/pawel-kocwa.jpg"
        alt="Paweł Kocwa"
        className="member-avatar"
        loading="lazy"
        placeholder="none"
      />
    )
  },
  {
    name: 'Piotr Kędra',
    shortText: 'home.piotr_text',
    longText: 'home.piotr_long_text',
    linkedin: 'https://linkedin.com/in/pkedra',
    github: 'https://github.com/piotrkedra',
    pic: (
      <StaticImage
        src="../../../images/team/piotr-kedra.jpeg"
        alt="Piotr Kedra"
        className="member-avatar"
        loading="lazy"
        placeholder="none"
      />
    )
  },
  {
    name: 'Miłosz Blasiak',
    shortText: 'home.milosz_text',
    longText: 'home.milosz_long_text',
    linkedin: 'https://linkedin.com/in/milosz-blasiak',
    github: 'https://github.com/mblasiak',
    pic: (
      <StaticImage
        src="../../../images/team/milosz-blasiak.jpg"
        alt="Miłosz Blasiak"
        className="member-avatar"
        loading="lazy"
        placeholder="none"
      />
    )
  }
]

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
          {
            TEAM_MEMBERS.map((member, key) => (
                <Card
                  key={key}
                  img={member.pic}
                  name={member.name}
                  shortText={member.shortText}
                  longText={member.longText}
                  linkedin={member.linkedin}
                  github={member.github}
                />
              )
            )
          }
        </div>
      </div>
    </section>
  );
}

const Card = ({img, name, shortText, linkedin, github, key}) => {
  const {t} = useTranslation()

  return (
    <div className="text-ctn" key={key}>
      <div className="top-ctn">
        <div className="img-ctn">
          {img}
        </div>
      </div>
      <h3>{name}</h3>
      <p>
        {t(shortText)}
      </p>
      <div className="member-socials">
        <a href={linkedin} target="_blank" rel="noreferrer">
          <FaLinkedinIn size="1.5rem"/>
          <span>{linkedin.replace('https://','')}</span>
        </a>
        {
          github != null && (
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub size="1.5rem"/>
              <span>{github.replace('https://','')}</span>
            </a>
          )
        }
      </div>
      {/*<SecondaryBtn text={t`home.read_more`}/>*/}
    </div>
  );
}

export default TeamSection;
