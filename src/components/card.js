import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const FlippingCard = ({img, name, shortText, longText, linkedin, github}) => {
  const {t} = useTranslation()

  const [isLongText, setIsLong] = React.useState(false);

  const transformFrontStyle = {transform: 'rotateX(-180deg)'}
  const transformBackStyle = {transform: 'rotateX(0deg)'}

  return (
    <div className="card">
      <div className="card-front" style={isLongText ? transformFrontStyle : null}>
        {img}
        <h3>{name}</h3>
        <p>
          {shortText}
          <span >
            <button className="more-btn" onClick={() => setIsLong(true)}>
              {t`home.more`}
            </button>
          </span>
        </p>
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
      <div className="card-back" style={isLongText ? transformBackStyle : null}>
        <p>
          {longText}
          <span >
            <button className="more-btn" onClick={() => setIsLong(false)}>
              {t`home.go_back`}
            </button>
          </span>
        </p>
      </div>
    </div>
  );
}

export default FlippingCard;
