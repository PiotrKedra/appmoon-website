import React from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs'
import './secondary-btn-style.scss'

const SecondaryBtn = ({text}) => (
  <div className="secondary-btn-ctn">
    <p>{text}</p>
    <BsArrowUpRightCircle size={20}/>
  </div>
);

export default SecondaryBtn;
