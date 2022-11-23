import React from 'react';
import {BsArrowUpRightCircle} from 'react-icons/bs'
import './main-btn.scss'

const MainBtn = ({text}) => (
  <div className="btn-ctn">
    <p>{text}</p>
    <BsArrowUpRightCircle size={20}/>
  </div>
);

export default MainBtn;
