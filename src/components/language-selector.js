import React from 'react';
import { IoLanguageOutline } from 'react-icons/io5'
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';


const LanguageSelector = () => {
  const {t} = useTranslation()
  const {changeLanguage} = useI18next();

  const [isLanguageSelector, setIsLanguageSelector] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    setIsLanguageSelector(false)
  }

  return (
    <>
      <div className="language-selector-icon-ctn">
        <p>|</p>
        <button onClick={() => setIsLanguageSelector(!isLanguageSelector)}>
          <IoLanguageOutline color="white" size='1.6rem'/>
        </button>
      </div>
      {
        isLanguageSelector && (
          <div className="language-selector-ctn">
            <button onClick={() => {changeLanguage('en');setIsLanguageSelector(false)}}>
              {t`home.english`}
            </button>
            <button onClick={() => {changeLanguage('pl');setIsLanguageSelector(false)}}>
              {t`home.polish`}
            </button>
          </div>
        )
      }
    </>
  );
}

export default LanguageSelector;
