import React from 'react';
import './main-btn.scss'

const MainBtn = ({text, onClick}) => (
  <button className="main-btn_ctn" onClick={() => {console.log('ss')}}>
    <div className="text-btn-ctn">
      <p>{text}</p>
    </div>
    <div className="line"/>
    <div className="helper-ctn"/>
    <div className="circle-theme"/>
    <div className="arrow"/>
  </button>
);

export default MainBtn;
