import React from 'react';
import {BsArrowUpRightCircle} from 'react-icons/bs'
import './main-btn.scss'

const MainBtn = ({id, text, onClick}) => (
  <button id={id} className="btn-ctn" onClick={onClick}>
    <p>{text}</p>
    <BsArrowUpRightCircle size={20}/>
  </button>
);

export default MainBtn;
