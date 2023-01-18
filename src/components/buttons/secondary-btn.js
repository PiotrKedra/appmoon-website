import React from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs'
import './secondary-btn-style.scss'
import { Link } from 'gatsby-plugin-react-i18next';

const SecondaryBtn = ({to, text, isLink=true}) => {
  if(isLink === true){
    return (
      <Link to={to} className="secondary-btn-ctn">
        <p>{text}</p>
        <BsArrowUpRightCircle size={20}/>
      </Link>
    );
  } else {
    return (
      <div className="secondary-btn-ctn">
        <p>{text}</p>
        <BsArrowUpRightCircle size={20}/>
      </div>
    )
  }
}

export default SecondaryBtn;
