import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import './theme-style.scss'

const BlueMatrix = ({className}) => (
  <StaticImage
    src="../../images/theme/matrix-theme.png"
    alt="Theme component"
    className={`matrix ${className}`}
    placeholder="none"
    loading="lazy"
  />
);

const BlueCircle = ({className}) => (
  <div className={`blue-circle ${className}`}/>
)

const OrangeCircle = ({className}) => (
  <div className={`orange-circle ${className}`}/>
)

const OrangeFullCircle = ({className}) => (
  <div className={`orange-full-circle ${className}`}/>
)

const BLueFullCircle = ({className}) => (
  <div className={`blue-full-circle ${className}`}/>
)

const BlueMatrixWithCircle = ({className}) => (
  <div className={`blue-matrix-with-circle ${className}`}>
    <BlueCircle/>
    <BlueMatrix/>
  </div>
)

export {
  BlueMatrix,
  BlueCircle,
  BlueMatrixWithCircle,
  OrangeFullCircle,
  BLueFullCircle,
  OrangeCircle
};
