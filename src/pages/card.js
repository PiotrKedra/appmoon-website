import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const FlippingCard = ({img, name, shortText, longText}) => {
  const [isLongText, setIsLong] = React.useState(false);

  const transformFrontStyle = {transform: 'rotateX(-180deg)'}
  const transformBackStyle = {transform: 'rotateX(0deg)'}

  return (
    <div className="card">
      <div className="card-front" style={isLongText ? transformFrontStyle : null}>
        {img}
        <h3>{name}</h3>
        <p>{shortText} <span className="more-btn" onClick={() => setIsLong(true)}>More...</span></p>
        <div className="member-socials">
          <a href="#">
            <FaLinkedinIn size="1.8rem"/>
          </a>
          <a href="#">
            <FaGithub style={{marginLeft: '1rem'}} size="1.8rem"/>
          </a>
        </div>
      </div>
      <div className="card-back" style={isLongText ? transformBackStyle : null}>
        <p>{longText} <span className="more-btn" onClick={() => setIsLong(false)}>Go back</span></p>
      </div>
    </div>
  );
}

export default FlippingCard;
