import React from 'react';
// import '../pages/style.css'
import scrollTo from 'gatsby-plugin-smoothscroll';
import {IoMenuOutline, IoCloseOutline} from 'react-icons/io5'
import { ABOUT_SECTION, CONTACT_SECTION, OFFER_SECTION, START_SECTION } from './home-page-sections';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import LanguageSelector from './language-selector';

const MENU_CLOSED = 0
const MENU_OPENING = 1
const MENU_OPENED = 2
const MENU_CLOSING = 3

const MobileMenu = () => {
  const {t} = useTranslation()
  const [menuState, setMenuState] = React.useState(MENU_CLOSED)

  const getAnimationClass = () => {
    if (menuState === MENU_OPENING || menuState === MENU_OPENED)
      return 'mobile-menu-opening-animation'
    else if (menuState === MENU_CLOSING)
      return 'mobile-menu-closing-animation'
    else return null
  }

  const getMenuClassNames = () => {
    if(menuState === MENU_CLOSED)
      return 'mobile-menu-ctn-off ' + getAnimationClass()
    return 'mobile-menu-ctn-on ' + getAnimationClass()
  }

  return (
    <>
      {
        menuState === MENU_CLOSED && (
          <button className="tmp-burger" onClick={() => {
            if(menuState === MENU_CLOSED)
              setMenuState(MENU_OPENING)
          }}>
            <IoMenuOutline color="white" size='2.5rem'/>
          </button>)
      }

      <div
        className={getMenuClassNames()}
        onAnimationEnd={() => {
          if(menuState === MENU_OPENING)
            setMenuState(MENU_OPENED)
          else if (menuState === MENU_CLOSING)
            setMenuState(MENU_CLOSED)
        }}
      >
        <button className="tmp-burger" onClick={() => {
          if (menuState === MENU_OPENED)
            setMenuState(MENU_CLOSING)
        }}>
          <IoCloseOutline color="white" size='2.5rem'/>
        </button>
        <div className="mobile-inner-ctn">
          <h3>MENU</h3>
          <button onClick={() => {setMenuState(MENU_CLOSING);scrollTo(`#${START_SECTION}`)}}>{t`home.start`}</button>
          <button onClick={() => {setMenuState(MENU_CLOSING);scrollTo(`#${OFFER_SECTION}`)}}>{t`home.offer`}</button>
          <button onClick={() => {setMenuState(MENU_CLOSING);scrollTo(`#${ABOUT_SECTION}`)}}>{t`home.about_us`}</button>
          <button onClick={() => {setMenuState(MENU_CLOSING);scrollTo(`#${CONTACT_SECTION}`)}}>{t`home.contact`}</button>
          <LanguageSelector/>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
