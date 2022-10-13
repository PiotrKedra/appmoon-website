import * as React from "react"
import { Helmet } from 'react-helmet';
import favicon from '../../images/codenauts.png'
import {useTranslation} from "gatsby-plugin-react-i18next";
import '../../style/main.scss'
import './style/welcome-section-style.scss'
import WelcomeSection from './components/WelcomeSection';


const Home = () => {
  const {t} = useTranslation()
  return (
    <main className="main-ctn home-ctn">

      <Helmet
        title={t`title`}
        meta={[
          {
            name: `description`,
            content: t`description`,
          },
          {
            name: `author`,
            content: 'Codenauts'
          },
          {
            property: `og:image`,
            content: favicon
          },
        ]}
      />

      <WelcomeSection/>

      <div style={{height: '100vh'}}/>

    </main>
  );
}

export default Home;
